# Pitch Visualizer Pro 🎬✨

**Pitch Visualizer Pro** is an AI-powered platform that transforms narrative pitch content into structured, cinematic storyboards. By leveraging LLMs and image generation models, it automates the process of visualizing concepts, maintaining visual continuity, and presenting them in a modern, interactive interface.

---

## 🌟 Key Features

- **Narrative Segmentation Engine:** Intelligently breaks down raw pitch text into cohesive, logical scenes.
- **Cinematic Prompt Engineering:** Uses advanced LLM techniques to convert scene descriptions into high-quality image generation prompts with consistent visual continuity.
- **Image Generation Pipeline:** Seamlessly integrates with AI image generation models to create stunning visual storyboards.
- **Modern Glassmorphism UI:** A sleek, premium, and dynamic frontend built with vanilla CSS, featuring rich aesthetics and smooth micro-animations.
- **FastAPI Backend:** A lightweight, high-performance, and modular backend architecture designed for real-time inference and extensibility.

---

## 🛠️ Tech Stack

### Backend
- **Python 3.12+**
- **FastAPI** (Web framework)
- **Uvicorn** (ASGI server)
- **LLM/AI Integrations** (for text segmentation and prompt generation)
- **Image Generation APIs** (e.g., OpenAI DALL-E, Midjourney, or Stable Diffusion integrations)

### Frontend
- **HTML5 & Vanilla JavaScript**
- **Vanilla CSS** (Glassmorphism design system)
- **Vite** (Build tool and dev server)

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Python](https://www.python.org/) (v3.12+ recommended)

### 1. Clone the Repository
```bash
git clone https://github.com/Charukesh-pyla/Pitch-Visualizer-Pro.git
cd Pitch-Visualizer-Pro
```

### 2. Backend Setup
Navigate to the `backend` directory, set up your virtual environment, and install dependencies:

```bash
cd backend
python -m venv venv

# Activate the virtual environment:
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install requirements (if requirements.txt is present)
pip install -r requirements.txt
```

Set up your environment variables. Create a `.env` file in the `backend` directory:
```env
# Example .env configuration
OPENAI_API_KEY=your_api_key_here
```

Start the FastAPI server:
```bash
uvicorn main:app --reload
```
The backend API will be available at `http://localhost:8000`. You can access the Swagger UI documentation at `http://localhost:8000/docs`.

### 3. Frontend Setup
Open a new terminal window, navigate to the `frontend` directory, install dependencies, and start the Vite dev server:

```bash
cd frontend
npm install
npm run dev
```
The frontend application will be available at `http://localhost:5173`.

---

## 📖 Usage

1. Open the application in your browser.
2. Enter your narrative pitch or script into the input area.
3. Click **Generate Storyboard**.
4. The backend will segment your pitch, engineer visual prompts, and generate images.
5. View your cinematic storyboard presented in the beautiful glassmorphism interface!

---

## 📄 License
This project is licensed under the MIT License.
