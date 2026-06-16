import os
import requests
import base64
import time

def fetch_and_encode_base64(url: str, retries: int = 3, delay: int = 2) -> str:
    """
    Downloads an image from a URL on the backend and encodes it to base64.
    """
    for attempt in range(retries):
        try:
            print(f"Downloading image from {url} (Attempt {attempt+1}/{retries})...")
            response = requests.get(url, timeout=20)
            if response.status_code == 200:
                image_bytes = response.content
                b64_image = base64.b64encode(image_bytes).decode('utf-8')
                return f"data:image/jpeg;base64,{b64_image}"
            else:
                print(f"Failed to download image, status code: {response.status_code}. Retrying...")
        except Exception as e:
            print(f"Exception downloading image: {e}. Retrying...")
        time.sleep(delay)
    
    # Fallback inline SVG error panel if all else fails
    svg_fallback = '<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="576" viewBox="0 0 1024 576"><rect width="100%" height="100%" fill="#0f172a"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" fill="#475569">Image Generation Failed</text></svg>'
    b64_svg = base64.b64encode(svg_fallback.encode('utf-8')).decode('utf-8')
    return f"data:image/svg+xml;base64,{b64_svg}"

def generate_image_huggingface(prompt: str) -> str:
    """
    Generates an image using HuggingFace Inference API.
    Uses black-forest-labs/FLUX.1-schnell as default.
    If it fails, it falls back to downloading the image from Pollinations AI and base64-encoding it.
    """
    api_key = os.getenv("HUGGINGFACE_API_KEY")
    encoded_prompt = requests.utils.quote(prompt)
    pollinations_url = f"https://image.pollinations.ai/prompt/{encoded_prompt}?width=1024&height=576&nologo=true"

    if not api_key or "your_huggingface_api_key" in api_key:
        print("Warning: HUGGINGFACE_API_KEY not set or invalid. Using Pollinations AI fallback.")
        return fetch_and_encode_base64(pollinations_url)

    API_URL = "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-schnell"
    headers = {"Authorization": f"Bearer {api_key}"}
    payload = {
        "inputs": prompt,
    }

    retries = 3
    delay = 2
    for attempt in range(retries):
        try:
            print(f"Calling HF API (Attempt {attempt+1}/{retries})...")
            response = requests.post(API_URL, headers=headers, json=payload, timeout=25)
            if response.status_code == 200:
                image_bytes = response.content
                b64_image = base64.b64encode(image_bytes).decode('utf-8')
                return f"data:image/jpeg;base64,{b64_image}"
            elif response.status_code == 503:
                # Model loading, wait longer
                print(f"HF Model loading (503). Retrying in {delay*2}s...")
                time.sleep(delay * 2)
            else:
                print(f"Error from HF API (status {response.status_code}): {response.text}")
                break
        except Exception as e:
            print(f"Exception calling HF API: {e}")
            time.sleep(delay)

    # Fallback to Pollinations AI
    print("HF API failed. Falling back to Pollinations AI.")
    return fetch_and_encode_base64(pollinations_url)
