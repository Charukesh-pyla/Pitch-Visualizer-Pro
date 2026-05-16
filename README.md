# Pitch Visualizer Pro

Pitch Visualizer Pro is an AI-powered platform that converts narrative pitch content into structured, cinematic storyboards. It automates the process of visualizing concepts by employing large language models for narrative segmentation and image generation, providing a dynamic, glassmorphism-inspired UI for displaying and exporting generated visual stories.

## Features

*   **Narrative Segmentation**: Breaks down narrative pitches into distinct scenes and sequences.
*   **Prompt Engineering via LLM**: Uses advanced LLMs to guarantee visual continuity and logical transitions across scenes.
*   **Image Generation Pipeline**: Automatically creates storyboards corresponding to each segmented scene.
*   **Modern User Interface**: A dynamic, responsive front-end designed with glassmorphism aesthetics to preview and export the generated visual assets.

## Project Structure

*   `backend/`: Contains the FastAPI application, background services (LLM, NLP, Image Generation), and API routes.
*   `frontend/`: The modern UI built with Vite, utilizing vanilla CSS for styling and custom components.

## Prerequisites

*   Python 3.8+
*   Node.js (v18+)

## Setup

### Backend

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/Scripts/activate  # On Windows
   ```
3. Install dependencies:
   ```bash
   pip install fastapi uvicorn pydantic python-dotenv
   ```
4. Configure your `.env` file from the `.env.example`.

5. Run the application:
   ```bash
   uvicorn main:app --reload
   ```

### Frontend

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## License

MIT
