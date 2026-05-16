import re

def segment_narrative(text: str) -> list[str]:
    # A simple sentence segmentation based on punctuation for MVP.
    # We split by '.', '!', '?' followed by a space or end of string.
    sentences = re.split(r'(?<=[.!?]) +|\n+', text.strip())
    # Filter out empty strings
    segments = [s.strip() for s in sentences if s.strip()]
    
    # In a real scenario, we might group very short sentences together.
    # For MVP, returning individual sentences.
    return segments
