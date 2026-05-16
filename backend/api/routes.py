from fastapi import APIRouter, HTTPException
from models.schemas import StoryboardRequest, StoryboardResponse, StoryboardPanel
from services.nlp_service import segment_narrative
from services.llm_service import process_segments_with_gemini
from services.image_service import generate_image_huggingface

router = APIRouter()

@router.post("/generate-storyboard", response_model=StoryboardResponse)
async def generate_storyboard(request: StoryboardRequest):
    narrative = request.narrative
    style = request.style
    
    if not narrative:
        raise HTTPException(status_code=400, detail="Narrative text is required")
        
    # Step 1: Segment Narrative
    segments = segment_narrative(narrative)
    if not segments:
        raise HTTPException(status_code=400, detail="Could not extract segments from narrative")
        
    # Step 2: Gemini Role Classification and Prompt Engineering
    storyboard_data = process_segments_with_gemini(segments, style)
    
    if "panels" not in storyboard_data or not storyboard_data["panels"]:
        raise HTTPException(status_code=500, detail="Failed to generate storyboard structure from Gemini")
        
    # Step 3: Generate Images for each panel
    processed_panels = []
    for panel_data in storyboard_data["panels"]:
        prompt = panel_data.get("prompt", "")
        # Add visual style to prompt if not already present
        if style.lower() not in prompt.lower():
            prompt += f", {style} style"
            
        image_url = generate_image_huggingface(prompt)
        
        panel = StoryboardPanel(
            scene_number=panel_data.get("scene_number", 0),
            role=panel_data.get("role", "Scene"),
            description=panel_data.get("description", ""),
            prompt=prompt,
            image_url=image_url
        )
        processed_panels.append(panel)
        
    return StoryboardResponse(
        panels=processed_panels,
        global_context=storyboard_data.get("global_context", {})
    )
