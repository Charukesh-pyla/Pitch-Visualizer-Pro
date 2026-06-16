import './style.css';

// Predefined templates to help the user start instantly
const templates = {
  scifi: {
    title: "Sci-Fi Pitch 🎬",
    style: "Cinematic",
    text: "In a dystopian cyberpunk city where memories are traded as currency, a memory thief discovers a corrupted file containing the coordinates of the last natural forest on Earth. He must escape the corporate security forces to deliver the memory to a rebel group before his own mind is wiped."
  },
  startup: {
    title: "App Explainer 📱",
    style: "Digital Art",
    text: "A local bakery struggled to manage deliveries and daily waste. They launched a community-based app where locals can reserve unsold bread and pastries at 70% off. Within weeks, the bakery's waste dropped to zero, and they built a loyal neighborhood community."
  },
  comic: {
    title: "Hero Origin 💥",
    style: "Comic Book",
    text: "An ordinary teenager finds a pair of ancient, dusty sunglasses in a thrift shop. When worn, they reveal that three of his teachers are secretly shape-shifting alien guardians protecting the school from an imminent interdimensional threat."
  }
};

document.querySelector('#app').innerHTML = `
  <div class="min-h-screen bg-slate-950 text-slate-100 font-sans relative overflow-x-hidden selection:bg-purple-500/30 flex flex-col">
    <!-- Navigation Bar (no-print) -->
    <nav id="landing-nav" class="fixed top-0 left-0 w-full z-50 bg-slate-950/70 backdrop-blur-md border-b border-slate-900/60 px-6 py-4.5 no-print flex items-center justify-between">
      <div class="flex items-center space-x-3 cursor-pointer" id="nav-logo">
        <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-blue-500 flex items-center justify-center shadow-lg shadow-purple-500/20">
          <span class="text-lg font-bold text-white">P</span>
        </div>
        <span class="text-lg font-extrabold tracking-tight text-white">Pitch Visualizer <span class="text-purple-400">Pro</span></span>
      </div>
      
      <div class="hidden md:flex items-center space-x-8 text-xs font-semibold uppercase tracking-wider text-slate-400">
        <a href="#features" class="hover:text-white transition-colors">Features</a>
        <a href="#how-it-works" class="hover:text-white transition-colors">How it Works</a>
        <a href="#technology" class="hover:text-white transition-colors">Technology</a>
      </div>

      <div>
        <button id="nav-try-btn" class="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-extrabold py-2 px-5 rounded-xl shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-xs">
          Try Generator ⚡
        </button>
      </div>
    </nav>

    <!-- View 1: Landing Page Container (no-print) -->
    <div id="landing-view" class="pt-24 relative z-10 no-print flex-1">
      <!-- Ambient Glows -->
      <div class="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-purple-900/10 blur-[130px] pointer-events-none"></div>
      <div class="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-900/10 blur-[130px] pointer-events-none"></div>

      <!-- Hero Section -->
      <section class="max-w-5xl mx-auto px-6 py-16 text-center space-y-8 fade-in-up">
        <div class="inline-block px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-purple-500/10 text-purple-300 border border-purple-500/20 shadow-md">
          🎬 AI-Powered Cinematic Storyboarding
        </div>
        <h1 class="text-5xl md:text-7xl font-black tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-400 max-w-4xl mx-auto">
          Turn Your Narrative Pitch into Cinema
        </h1>
        <p class="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Intelligently segment your pitch, compile cinematic prompts, and generate structured visual storyboards in seconds.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button id="hero-try-btn" class="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-extrabold py-3.5 px-8 rounded-xl shadow-lg shadow-purple-500/15 hover:shadow-purple-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-sm flex items-center justify-center space-x-2">
            <span>Start Visualizing</span>
            <span>⚡</span>
          </button>
          <a href="#features" class="w-full sm:w-auto bg-slate-900/60 hover:bg-slate-900 text-slate-300 font-semibold py-3.5 px-8 rounded-xl border border-slate-800 transition-all text-sm block">
            See Features
          </a>
        </div>

        <!-- Dashboard mockup visualizer preview -->
        <div class="pt-10 max-w-4xl mx-auto relative group">
          <div class="absolute inset-0 bg-gradient-to-tr from-purple-600/10 to-blue-500/10 rounded-3xl blur-3xl opacity-60"></div>
          <div class="glass-panel p-2 rounded-2xl border border-white/5 relative z-10 overflow-hidden shadow-2xl">
            <div class="bg-slate-950/80 rounded-xl p-8 border border-slate-900 flex flex-col items-center justify-center text-center space-y-4 min-h-[300px]">
              <span class="text-4xl">🎬</span>
              <h3 class="text-xl font-bold text-white">Cinematic Visual Storyboard Playbook</h3>
              <p class="text-xs text-slate-500 max-w-md">
                Configure visual styles, input narrative structures, examine scene details, reveal generated AI prompts, and print high-fidelity PDF playbooks directly from your browser.
              </p>
              <div class="flex space-x-2">
                <span class="w-2.5 h-2.5 rounded-full bg-slate-800"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-slate-800"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-slate-800"></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section id="features" class="max-w-6xl mx-auto px-6 py-24 border-t border-slate-900">
        <h2 class="text-2xl md:text-3xl font-extrabold text-center text-white tracking-tight mb-16">
          Powerful Storyboard Engines
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="glass-panel p-6 border border-slate-800/80 hover:border-purple-500/30 transition-all duration-300 space-y-4">
            <div class="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-xl">🧠</div>
            <h3 class="text-base font-bold text-white">Narrative Segmentation</h3>
            <p class="text-xs text-slate-400 leading-relaxed">
              Splits script narrative into logical steps (Problem, Conflict, Solution, Transformation) dynamically with semantic structures.
            </p>
          </div>
          <div class="glass-panel p-6 border border-slate-800/80 hover:border-purple-500/30 transition-all duration-300 space-y-4">
            <div class="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-xl">🎬</div>
            <h3 class="text-base font-bold text-white">Cinematic Prompts</h3>
            <p class="text-xs text-slate-400 leading-relaxed">
              Translates beat points into descriptive prompts covering lighting elements, composition angles, camera details, and visual themes.
            </p>
          </div>
          <div class="glass-panel p-6 border border-slate-800/80 hover:border-purple-500/30 transition-all duration-300 space-y-4">
            <div class="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-xl">⚡</div>
            <h3 class="text-base font-bold text-white">Reliable Image Cache</h3>
            <p class="text-xs text-slate-400 leading-relaxed">
              Server-side base64 pipeline fetches and encodes images instantly, preventing browser timeouts and ensuring all panels render.
            </p>
          </div>
          <div class="glass-panel p-6 border border-slate-800/80 hover:border-purple-500/30 transition-all duration-300 space-y-4">
            <div class="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-xl">📂</div>
            <h3 class="text-base font-bold text-white">Vector PDF Export</h3>
            <p class="text-xs text-slate-400 leading-relaxed">
              Export generated storyboards directly to vector PDF booklets, formatted landscape side-by-side for perfect pitching layouts.
            </p>
          </div>
        </div>
      </section>

      <!-- How It Works Section -->
      <section id="how-it-works" class="max-w-4xl mx-auto px-6 py-20 border-t border-slate-900 space-y-12">
        <h2 class="text-2xl md:text-3xl font-extrabold text-center text-white tracking-tight">How It Works</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div class="space-y-3">
            <div class="w-10 h-10 rounded-full bg-purple-900/30 text-purple-400 border border-purple-800/60 flex items-center justify-center font-bold text-sm mx-auto">1</div>
            <h4 class="text-base font-bold text-white">Write Your Concept</h4>
            <p class="text-xs text-slate-400 leading-relaxed">Enter your raw pitch narrative or script details. Use presets to instantly prefill high-quality examples.</p>
          </div>
          <div class="space-y-3">
            <div class="w-10 h-10 rounded-full bg-purple-900/30 text-purple-400 border border-purple-800/60 flex items-center justify-center font-bold text-sm mx-auto">2</div>
            <h4 class="text-base font-bold text-white">Select Visual Styles</h4>
            <p class="text-xs text-slate-400 leading-relaxed">Select from styles like Cinematic, Digital Art, Cyberpunk, Watercolor, or Comic Book to guide visual generation.</p>
          </div>
          <div class="space-y-3">
            <div class="w-10 h-10 rounded-full bg-purple-900/30 text-purple-400 border border-purple-800/60 flex items-center justify-center font-bold text-sm mx-auto">3</div>
            <h4 class="text-base font-bold text-white">Generate & Export</h4>
            <p class="text-xs text-slate-400 leading-relaxed">Gemini partitions the text, Flux renders high-fidelity images, and the system enables high-quality print exports.</p>
          </div>
        </div>
      </section>

      <!-- Tech Stack Section -->
      <section id="technology" class="max-w-4xl mx-auto px-6 py-20 border-t border-slate-900 text-center space-y-6">
        <h2 class="text-2xl font-bold text-white tracking-tight">Technology & Models</h2>
        <p class="text-xs text-slate-400 max-w-lg mx-auto leading-relaxed">
          Integrated with modern LLM & visual generator inference endpoints, yielding real-time scene logic, image prompts, and fast vector conversions.
        </p>
        <div class="flex flex-wrap items-center justify-center gap-3 pt-4">
          <span class="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300">FastAPI Backend</span>
          <span class="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300">Gemini 2.5 LLM</span>
          <span class="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300">Flux Image Models</span>
          <span class="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300">Vanilla CSS Glassmorphism</span>
        </div>
      </section>
    </div>

    <!-- View 2: Split View Workspace Container (hidden by default) -->
    <div id="workspace-view" class="min-h-screen flex flex-col lg:flex-row hidden flex-1">
      <!-- Left Sidebar: Controls & Configuration (no-print) -->
      <aside class="w-full lg:w-96 bg-slate-900 border-r border-slate-800/80 p-6 flex flex-col justify-between z-20 no-print">
        <div class="space-y-6">
          <!-- Back Button & Brand Header -->
          <div class="space-y-3">
            <button id="workspace-back-btn" class="text-xs font-medium text-slate-400 hover:text-white transition-colors flex items-center space-x-1 cursor-pointer">
              <span>← Back to Home</span>
            </button>
            <header class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-blue-500 flex items-center justify-center shadow-lg shadow-purple-500/20">
                <span class="text-xl font-bold text-white">P</span>
              </div>
              <div>
                <h1 class="text-xl font-extrabold tracking-tight text-white">Pitch Visualizer</h1>
                <span class="text-xs font-semibold uppercase tracking-wider text-purple-400 bg-purple-950/40 px-2 py-0.5 rounded-full border border-purple-800/40">PRO VERSION</span>
              </div>
            </header>
          </div>

          <!-- Divider -->
          <div class="h-[1px] bg-gradient-to-r from-slate-800 to-transparent"></div>

          <!-- Templates section -->
          <div>
            <label class="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Try a Template</label>
            <div class="flex flex-wrap gap-2">
              <button class="template-btn" data-key="scifi">${templates.scifi.title}</button>
              <button class="template-btn" data-key="startup">${templates.startup.title}</button>
              <button class="template-btn" data-key="comic">${templates.comic.title}</button>
            </div>
          </div>

          <!-- Input Form -->
          <form id="pitch-form" class="space-y-5">
            <div>
              <label for="narrative" class="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Pitch Narrative</label>
              <textarea id="narrative" rows="6" class="w-full bg-slate-950/60 border border-slate-800 rounded-xl p-4 text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-500 transition-all resize-none text-sm" placeholder="Paste your pitch script or narrative here... e.g. A team of astronauts lands on a water planet..."></textarea>
            </div>
            
            <!-- Visual Style Selector Grid -->
            <div>
              <label class="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2.5">Visual Style</label>
              <div class="grid grid-cols-2 gap-2" id="style-picker">
                <div class="style-card active p-3 rounded-xl flex flex-col justify-between h-20" data-value="Cinematic">
                  <span class="text-base">🎬</span>
                  <span class="text-xs font-semibold text-white">Cinematic</span>
                </div>
                <div class="style-card p-3 rounded-xl flex flex-col justify-between h-20" data-value="Digital Art">
                  <span class="text-base">🎨</span>
                  <span class="text-xs font-semibold text-white">Digital Art</span>
                </div>
                <div class="style-card p-3 rounded-xl flex flex-col justify-between h-20" data-value="Comic Book">
                  <span class="text-base">💥</span>
                  <span class="text-xs font-semibold text-white">Comic Book</span>
                </div>
                <div class="style-card p-3 rounded-xl flex flex-col justify-between h-20" data-value="Watercolor">
                  <span class="text-base">🖌️</span>
                  <span class="text-xs font-semibold text-white">Watercolor</span>
                </div>
                <div class="style-card p-3 rounded-xl flex flex-col justify-between h-20" data-value="Cyberpunk">
                  <span class="text-base">⚡</span>
                  <span class="text-xs font-semibold text-white">Cyberpunk</span>
                </div>
                <div class="style-card p-3 rounded-xl flex flex-col justify-between h-20" data-value="Futuristic UI">
                  <span class="text-base">💻</span>
                  <span class="text-xs font-semibold text-white">Futuristic UI</span>
                </div>
              </div>
            </div>

            <button type="submit" id="submit-btn" class="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-xl shadow-lg shadow-purple-500/15 hover:shadow-purple-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-sm flex items-center justify-center space-x-2">
              <span>Generate Storyboard</span>
              <span>⚡</span>
            </button>
          </form>
        </div>

        <!-- Footer & Exports -->
        <div class="mt-8 pt-6 border-t border-slate-800 space-y-3">
          <button id="download-pdf-btn" disabled class="w-full bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed text-slate-200 hover:text-white font-semibold py-2.5 px-4 rounded-xl border border-slate-700/50 transition-all text-xs flex items-center justify-center space-x-2">
            <span>📥</span>
            <span>Download Storyboard (PDF)</span>
          </button>
          <p class="text-[10px] text-center text-slate-500">
            Powered by Gemini & FLUX.1
          </p>
        </div>
      </aside>

      <!-- Right Container: Storyboard Output -->
      <main class="flex-1 bg-slate-955 overflow-y-auto relative p-6 md:p-10 lg:p-12 min-h-screen">
        <!-- Ambient Lights in Main Panel -->
        <div class="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-purple-900/10 blur-[150px] pointer-events-none z-0"></div>
        <div class="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-blue-900/10 blur-[150px] pointer-events-none z-0"></div>

        <!-- Empty/Welcome State -->
        <div id="empty-state" class="h-full flex flex-col items-center justify-center text-center py-20 relative z-10 max-w-lg mx-auto">
          <div class="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-6 shadow-inner">
            <span class="text-3xl">🎬</span>
          </div>
          <h2 class="text-2xl font-bold text-white mb-3">Your Cinematic Storyboard</h2>
          <p class="text-slate-400 text-sm leading-relaxed mb-6">
            Write or select a pitch on the left panel to trigger the Narrative Segmentation and Cinematic AI engines. We'll generate a scene-by-scene visual script for you.
          </p>
          <div class="flex items-center space-x-2 text-xs text-slate-500 bg-slate-900/40 border border-slate-800/60 px-4.5 py-2 rounded-full backdrop-blur-sm">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>System active & ready for inference</span>
          </div>
        </div>

        <!-- Loading State -->
        <div id="loading-state" class="hidden h-full flex flex-col items-center justify-center text-center py-20 relative z-10">
          <div class="loader-wave mb-6">
            <span></span><span></span><span></span><span></span><span></span>
          </div>
          <h3 class="text-xl font-bold text-white mb-2" id="loading-title">Analyzing Narrative & Segmenting Scenes...</h3>
          <p class="text-slate-400 text-sm max-w-sm" id="loading-subtitle">Leveraging Gemini for structure and prompt engineering. This may take up to a minute.</p>
        </div>

        <!-- Storyboard Display Container -->
        <div id="storyboard-wrapper" class="hidden relative z-10 max-w-4xl mx-auto space-y-10">
          <!-- Dynamic Header -->
          <div class="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-800">
            <div>
              <h2 class="text-3xl font-extrabold text-white tracking-tight">Storyboard Playbook</h2>
              <p class="text-slate-400 text-sm mt-1" id="storyboard-sub-header">AI-Engineered cinematic projection completed</p>
            </div>
            <!-- Tiny metadata pills -->
            <div class="flex items-center space-x-3 mt-4 md:mt-0">
              <span class="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold" id="meta-style">Style: Cinematic</span>
              <span class="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-semibold" id="meta-scenes">0 Scenes</span>
            </div>
          </div>

          <!-- Grid of Panels -->
          <section id="storyboard-container" class="space-y-8">
            <!-- Panels will be dynamically injected here -->
          </section>
        </div>
      </main>
    </div>
  </div>
`;

// Navigation / View Switching Logic
const landingNav = document.getElementById('landing-nav');
const landingView = document.getElementById('landing-view');
const workspaceView = document.getElementById('workspace-view');

const navLogo = document.getElementById('nav-logo');
const navTryBtn = document.getElementById('nav-try-btn');
const heroTryBtn = document.getElementById('hero-try-btn');
const workspaceBackBtn = document.getElementById('workspace-back-btn');

function showWorkspace() {
  landingView.classList.add('hidden');
  landingNav.classList.add('hidden');
  workspaceView.classList.remove('hidden');
  // Scroll to top of workspace
  window.scrollTo({ top: 0 });
}

function showLanding() {
  workspaceView.classList.add('hidden');
  landingView.classList.remove('hidden');
  landingNav.classList.remove('hidden');
  // Scroll to top of landing page
  window.scrollTo({ top: 0 });
}

// Attach event listeners for switching views
navTryBtn.addEventListener('click', showWorkspace);
heroTryBtn.addEventListener('click', showWorkspace);
navLogo.addEventListener('click', showLanding);
workspaceBackBtn.addEventListener('click', showLanding);

// Workspace Selector Elements
const form = document.getElementById('pitch-form');
const submitBtn = document.getElementById('submit-btn');
const loadingState = document.getElementById('loading-state');
const loadingTitle = document.getElementById('loading-title');
const loadingSubtitle = document.getElementById('loading-subtitle');
const emptyState = document.getElementById('empty-state');
const storyboardWrapper = document.getElementById('storyboard-wrapper');
const storyboardContainer = document.getElementById('storyboard-container');
const narrativeInput = document.getElementById('narrative');
const stylePicker = document.getElementById('style-picker');
const downloadPdfBtn = document.getElementById('download-pdf-btn');
const metaStyle = document.getElementById('meta-style');
const metaScenes = document.getElementById('meta-scenes');
const storyboardSubHeader = document.getElementById('storyboard-sub-header');

let selectedStyle = "Cinematic";

// Style Selection Handler
stylePicker.addEventListener('click', (e) => {
  const card = e.target.closest('.style-card');
  if (!card) return;
  
  // Update active states
  stylePicker.querySelectorAll('.style-card').forEach(c => c.classList.remove('active'));
  card.classList.add('active');
  selectedStyle = card.dataset.value;
});

// Templates Pre-Fill Handler
document.querySelectorAll('.template-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const key = btn.dataset.key;
    const template = templates[key];
    if (!template) return;
    
    // Set text
    narrativeInput.value = template.text;
    
    // Set visual style card active
    selectedStyle = template.style;
    stylePicker.querySelectorAll('.style-card').forEach(card => {
      if (card.dataset.value === template.style) {
        card.classList.add('active');
      } else {
        card.classList.remove('active');
      }
    });
  });
});

// Form Submission & API Call
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const narrative = narrativeInput.value.trim();
  
  if (!narrative) {
    alert('Please enter a pitch narrative first.');
    return;
  }
  
  // Hide empty state and show loading
  emptyState.classList.add('hidden');
  storyboardWrapper.classList.add('hidden');
  storyboardContainer.innerHTML = '';
  loadingState.classList.remove('hidden');
  
  // Disable sidebar inputs during load
  toggleInputs(true);
  
  // Loader sequence text simulation
  const messages = [
    { title: "Analyzing Narrative...", sub: "Parsing pitch structure via Gemini..." },
    { title: "Segmenting Scenes...", sub: "Categorizing problems, conflicts, and solutions..." },
    { title: "Engineering Cinematic Prompts...", sub: "Synthesizing style keywords, lighting, and detail tokens..." },
    { title: "Generating Visual Storyboard...", sub: "Rendering high-fidelity scenes using Flux..." }
  ];
  
  let msgIndex = 0;
  const loadingInterval = setInterval(() => {
    if (msgIndex < messages.length - 1) {
      msgIndex++;
      loadingTitle.textContent = messages[msgIndex].title;
      loadingSubtitle.textContent = messages[msgIndex].sub;
    }
  }, 4500);

  try {
    const response = await fetch('http://localhost:8000/api/generate-storyboard', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ narrative, style: selectedStyle }),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || 'Failed to generate storyboard');
    }
    
    const data = await response.json();
    
    clearInterval(loadingInterval);
    renderStoryboard(data.panels);
    
  } catch (error) {
    console.error('Error:', error);
    clearInterval(loadingInterval);
    alert('Failed to generate storyboard: ' + error.message);
    emptyState.classList.remove('hidden');
  } finally {
    loadingState.classList.add('hidden');
    // Reset loader text
    loadingTitle.textContent = messages[0].title;
    loadingSubtitle.textContent = messages[0].sub;
    toggleInputs(false);
  }
});

// Disable/Enable inputs
function toggleInputs(disabled) {
  narrativeInput.disabled = disabled;
  submitBtn.disabled = disabled;
  downloadPdfBtn.disabled = disabled;
  stylePicker.querySelectorAll('.style-card').forEach(c => {
    if (disabled) {
      c.style.pointerEvents = 'none';
      c.style.opacity = '0.5';
    } else {
      c.style.pointerEvents = 'auto';
      c.style.opacity = '1';
    }
  });
  document.querySelectorAll('.template-btn').forEach(b => b.disabled = disabled);
}

// Render storyboard to screen
function renderStoryboard(panels) {
  storyboardWrapper.classList.remove('hidden');
  downloadPdfBtn.disabled = false;
  
  metaStyle.textContent = `Style: ${selectedStyle}`;
  metaScenes.textContent = `${panels.length} Scenes`;
  storyboardSubHeader.textContent = "AI-Engineered cinematic projection completed";
  
  panels.forEach((panel, index) => {
    const delay = index * 0.15;
    
    const panelHTML = `
      <div class="glass-panel overflow-hidden flex flex-col md:flex-row fade-in-up glow-card" style="animation-delay: ${delay}s;">
        <!-- Image Container -->
        <div class="w-full md:w-3/5 lg:w-2/3 h-64 md:h-auto relative overflow-hidden bg-slate-900 flex items-center justify-center">
          <img src="${panel.image_url}" alt="Scene ${panel.scene_number}" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
          <div class="absolute top-4 left-4 glass px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white shadow-lg border border-white/10">
            SCENE ${panel.scene_number}
          </div>
        </div>
        
        <!-- Content Container -->
        <div class="w-full md:w-2/5 lg:w-1/3 p-6 md:p-8 flex flex-col justify-between bg-slate-900/40">
          <div class="space-y-4">
            <!-- Stage/Role Badge -->
            <div class="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-purple-500/10 text-purple-300 border border-purple-500/20">
              ${panel.role}
            </div>
            <!-- Story Description -->
            <h3 class="text-lg font-bold text-slate-100 leading-snug">${panel.description}</h3>
          </div>
          
          <!-- Collapsible AI Prompt Section -->
          <div class="mt-8 pt-5 prompt-accordion">
            <div class="prompt-trigger text-slate-500 hover:text-slate-300 transition-colors py-1">
              <span class="text-[10px] font-bold uppercase tracking-wider">AI Prompt Spec</span>
              <span class="chevron transition-transform duration-300 text-xs">▼</span>
            </div>
            
            <div class="prompt-content">
              <div class="pt-3">
                <p class="text-xs text-slate-400 leading-relaxed bg-slate-950/80 p-3.5 rounded-lg border border-slate-800 font-mono select-all relative group">
                  ${panel.prompt}
                  <button class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 bg-purple-600 hover:bg-purple-500 text-white px-2 py-0.5 rounded text-[10px] transition-all" onclick="navigator.clipboard.writeText('${panel.prompt.replace(/'/g, "\\'")}')">Copy</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    
    storyboardContainer.insertAdjacentHTML('beforeend', panelHTML);
  });

  // Setup accordion events
  document.querySelectorAll('.prompt-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const content = trigger.nextElementSibling;
      const chevron = trigger.querySelector('.chevron');
      
      content.classList.toggle('open');
      if (content.classList.contains('open')) {
        content.style.maxHeight = content.scrollHeight + 'px';
        chevron.style.transform = 'rotate(180deg)';
      } else {
        content.style.maxHeight = '0px';
        chevron.style.transform = 'rotate(0deg)';
      }
    });
  });
}

// PDF Export Handler: Directly triggers native browser print.
// The CSS media queries automatically format the page layout and hide unwanted components.
downloadPdfBtn.addEventListener('click', () => {
  window.print();
});
