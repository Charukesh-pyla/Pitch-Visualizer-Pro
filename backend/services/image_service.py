import os
import requests
import base64

def generate_image_huggingface(prompt: str) -> str:
    """
    Generates an image using HuggingFace Inference API.
    Uses stabilityai/stable-diffusion-xl-base-1.0 or black-forest-labs/FLUX.1-schnell as default.
    Returns base64 encoded image string or URL.
    """
    api_key = os.getenv("HUGGINGFACE_API_KEY")
    if not api_key:
        print("Warning: HUGGINGFACE_API_KEY not set. Returning a placeholder.")
        # For development/MVP without API key, use a free unauthenticated placeholder like Pollinations
        encoded_prompt = requests.utils.quote(prompt)
        return f"https://image.pollinations.ai/prompt/{encoded_prompt}?width=1024&height=576&nologo=true"

    API_URL = "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-schnell"
    headers = {"Authorization": f"Bearer {api_key}"}

    payload = {
        "inputs": prompt,
    }

    try:
        response = requests.post(API_URL, headers=headers, json=payload)
        if response.status_code == 200:
            # We got the image bytes. Let's encode as base64 to return directly in JSON
            image_bytes = response.content
            b64_image = base64.b64encode(image_bytes).decode('utf-8')
            return f"data:image/jpeg;base64,{b64_image}"
        else:
            print(f"Error from HF API: {response.status_code} - {response.text}")
            # Fallback to pollinations
            encoded_prompt = requests.utils.quote(prompt)
            return f"https://image.pollinations.ai/prompt/{encoded_prompt}?width=1024&height=576&nologo=true"
    except Exception as e:
        print(f"Exception calling HF API: {e}")
        encoded_prompt = requests.utils.quote(prompt)
        return f"https://image.pollinations.ai/prompt/{encoded_prompt}?width=1024&height=576&nologo=true"
