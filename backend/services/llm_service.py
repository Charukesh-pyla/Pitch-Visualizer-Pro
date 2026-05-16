import os
import json
import google.generativeai as genai
from models.schemas import StoryboardPanel

def configure_gemini():
    api_key = os.getenv("GEMINI_API_KEY")
    if api_key:
        genai.configure(api_key=api_key)

def process_segments_with_gemini(segments: list[str], style: str) -> dict:
    configure_gemini()
    
    prompt = f"""
    You are an expert cinematic storyboard director and prompt engineer.
    I have a narrative pitch segmented into the following parts:
    {json.dumps(segments, indent=2)}

    Your task is to analyze this narrative and generate a structured storyboard.
    For each segment, you must provide:
    1. A 'role' for the scene (e.g., Problem, Conflict, Solution, Transformation, Outcome, Call To Action)
    2. A short 'description' of what happens.
    3. An engineered 'prompt' to generate a visually stunning image for this scene. The prompt should be continuity-aware (e.g., keeping the same characters or environment) and apply the following visual style: {style}. Add specific artistic, lighting, and composition details to the prompt.

    Respond with ONLY a JSON object in this format:
    {{
        "panels": [
            {{
                "scene_number": 1,
                "role": "Problem",
                "description": "...",
                "prompt": "..."
            }}
        ],
        "global_context": {{
            "main_characters": ["..."],
            "environments": ["..."]
        }}
    }}
    """
    
    model = genai.GenerativeModel('gemini-1.5-flash')
    response = model.generate_content(prompt)
    
    # Extract JSON from the response text
    response_text = response.text
    # Simple JSON extraction logic (handles markdown block if present)
    if "```json" in response_text:
        json_str = response_text.split("```json")[1].split("```")[0].strip()
    elif "```" in response_text:
        json_str = response_text.split("```")[1].split("```")[0].strip()
    else:
        json_str = response_text.strip()
        
    try:
        return json.loads(json_str)
    except json.JSONDecodeError:
        print("Failed to decode JSON from Gemini:", json_str)
        return {"panels": [], "global_context": {}}
