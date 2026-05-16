import './style.css';

document.querySelector('#app').innerHTML = `
  <div class="container mx-auto px-4 py-12 max-w-5xl">
    <header class="text-center mb-12 fade-in-up">
      <h1 class="text-5xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
        Pitch Visualizer Pro
      </h1>
      <p class="text-slate-400 text-lg max-w-2xl mx-auto">
        Transform your narrative pitch into a stunning, cinematic storyboard automatically using AI.
      </p>
    </header>

    <main>
      <!-- Input Section -->
      <section class="glass-panel p-6 md:p-8 mb-12 fade-in-up" style="animation-delay: 0.1s;">
        <form id="pitch-form" class="space-y-6">
          <div>
            <label for="narrative" class="block text-sm font-medium text-slate-300 mb-2">Your Pitch Narrative</label>
            <textarea id="narrative" rows="5" class="w-full bg-slate-950/50 border border-slate-700 rounded-xl p-4 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all resize-none" placeholder="e.g. A struggling startup was losing users because their interface was too complicated. They decided to implement an AI assistant..."></textarea>
          </div>
          
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-3">
              <label for="style" class="text-sm font-medium text-slate-300">Visual Style:</label>
              <select id="style" class="bg-slate-950/50 border border-slate-700 rounded-lg py-2 px-4 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all">
                <option value="Cinematic">Cinematic</option>
                <option value="Digital Art">Digital Art</option>
                <option value="Comic Book">Comic Book</option>
                <option value="Watercolor">Watercolor</option>
                <option value="Futuristic UI">Futuristic UI</option>
              </select>
            </div>
            
            <button type="submit" class="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold py-2.5 px-6 rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0">
              Generate Storyboard
            </button>
          </div>
        </form>
      </section>

      <!-- Loading State -->
      <div id="loading-state" class="hidden py-16 text-center fade-in-up">
        <div class="loader-wave mb-6">
          <span></span><span></span><span></span><span></span><span></span>
        </div>
        <h3 class="text-xl font-medium text-slate-200 mb-2">Analyzing Narrative & Engineering Prompts...</h3>
        <p class="text-slate-400 text-sm">This may take a minute while we generate your visual scenes.</p>
      </div>

      <!-- Storyboard Display -->
      <section id="storyboard-container" class="space-y-8 hidden">
        <!-- Panels will be injected here -->
      </section>
    </main>
  </div>
`;

const form = document.getElementById('pitch-form');
const loadingState = document.getElementById('loading-state');
const storyboardContainer = document.getElementById('storyboard-container');
const narrativeInput = document.getElementById('narrative');
const styleInput = document.getElementById('style');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const narrative = narrativeInput.value.trim();
  const style = styleInput.value;
  
  if (!narrative) {
    alert('Please enter a pitch narrative.');
    return;
  }
  
  // Show loading
  storyboardContainer.classList.add('hidden');
  storyboardContainer.innerHTML = '';
  loadingState.classList.remove('hidden');
  
  try {
    // Call our FastAPI backend
    const response = await fetch('http://localhost:8000/api/generate-storyboard', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ narrative, style }),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || 'Failed to generate storyboard');
    }
    
    const data = await response.json();
    renderStoryboard(data.panels);
    
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred: ' + error.message);
  } finally {
    loadingState.classList.add('hidden');
  }
});

function renderStoryboard(panels) {
  storyboardContainer.classList.remove('hidden');
  
  panels.forEach((panel, index) => {
    const delay = index * 0.15;
    
    // Fallback if image generation fails
    const imgSrc = panel.image_url || 'https://via.placeholder.com/1024x576?text=Image+Generation+Failed';
    
    const panelHTML = `
      <div class="glass-panel overflow-hidden flex flex-col md:flex-row fade-in-up" style="animation-delay: ${delay}s;">
        <!-- Image Section -->
        <div class="w-full md:w-3/5 lg:w-2/3 h-64 md:h-auto relative">
          <img src="${imgSrc}" alt="${panel.role}" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
          <div class="absolute top-4 left-4 glass px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white">
            Scene ${panel.scene_number}
          </div>
        </div>
        
        <!-- Content Section -->
        <div class="w-full md:w-2/5 lg:w-1/3 p-6 md:p-8 flex flex-col justify-center">
          <div class="inline-block px-2.5 py-1 rounded text-xs font-semibold uppercase tracking-wider bg-purple-500/20 text-purple-300 border border-purple-500/30 w-max mb-4">
            ${panel.role}
          </div>
          <h3 class="text-xl font-semibold text-white mb-3 leading-tight">${panel.description}</h3>
          
          <div class="mt-auto pt-6 border-t border-slate-700/50">
            <p class="text-xs font-mono text-slate-500 uppercase mb-1">Generated Prompt</p>
            <p class="text-sm text-slate-400 line-clamp-3 hover:line-clamp-none transition-all" title="${panel.prompt}">
              ${panel.prompt}
            </p>
          </div>
        </div>
      </div>
    `;
    
    storyboardContainer.insertAdjacentHTML('beforeend', panelHTML);
  });
}
