from pydantic import BaseModel
from typing import List, Optional

class StoryboardRequest(BaseModel):
    narrative: str
    style: Optional[str] = "Cinematic"

class StoryboardPanel(BaseModel):
    scene_number: int
    role: str
    description: str
    prompt: str
    image_url: Optional[str] = None

class StoryboardResponse(BaseModel):
    panels: List[StoryboardPanel]
    global_context: Optional[dict] = None
