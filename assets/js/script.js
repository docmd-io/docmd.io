document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    loadScript('/assets/js/examples.js', initTypingEngine);
    loadSponsors();
});

function loadScript(src, callback) {
    const script = document.createElement('script');
    script.src = src;
    script.onload = callback;
    document.body.appendChild(script);
}

/* --- Theme Logic --- */
function initTheme() {
  const toggle = document.getElementById('theme-toggle');
  const icon = toggle.querySelector('.theme-icon');

  if (!icon) return;

  function setTheme(mode) {
    document.documentElement.setAttribute('data-theme', mode);
    localStorage.setItem('docmd-theme', mode);

    icon.innerHTML =
      mode === 'dark'
        ? `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
          viewBox="0 0 24 24" fill="none" stroke="currentColor"
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/>
        </svg>
        `
        : `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
          viewBox="0 0 24 24" fill="none" stroke="currentColor"
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="4"/>
          <path d="M12 2v2"/>
          <path d="M12 20v2"/>
          <path d="m4.93 4.93 1.41 1.41"/>
          <path d="m17.66 17.66 1.41 1.41"/>
          <path d="M2 12h2"/>
          <path d="M20 12h2"/>
          <path d="m6.34 17.66-1.41 1.41"/>
          <path d="m19.07 4.93-1.41 1.41"/>
        </svg>
        `;
  }

  const saved = localStorage.getItem('docmd-theme');
  const system = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';

  setTheme(saved || system);

  toggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
  });
}

/* --- Typing Engine --- */
function initTypingEngine() {
    const codeContainer = document.getElementById('typing-code');
    const previewContent = document.getElementById('preview-content');
    
    // Safety check if external file loaded
    const scenarios = window.DOCMD_EXAMPLES || [];
    if (!codeContainer || !previewContent || scenarios.length === 0) return;

    let scenarioIdx = 0;
    
    async function playScenario() {
        const scenario = scenarios[scenarioIdx];
        
        // 1. Reset
        codeContainer.innerHTML = '';
        previewContent.innerHTML = '';
        previewContent.className = 'preview-content'; 
        
        // 2. Type Lines
        for (let i = 0; i < scenario.code.length; i++) {
            const lineData = scenario.code[i];
            const lineDiv = document.createElement('div');
            lineDiv.className = 'line';
            lineDiv.innerHTML = `<div class="ln">${i+1}</div><div class="${lineData.c}"></div>`;
            codeContainer.appendChild(lineDiv);
            
            const textContainer = lineDiv.lastChild;
            
            // Type Characters
            for (let char of lineData.t) {
                textContainer.innerHTML += char;
                // Human-like speed: base 10ms + random variance
                await wait(Math.random() * 50 + 10); 
            }
            
            // Cursor management
            const cursor = document.createElement('span');
            cursor.className = 'cursor';
            textContainer.appendChild(cursor);
            
            const prevCursor = codeContainer.querySelectorAll('.cursor');
            if (prevCursor.length > 1) prevCursor[0].remove();
            
            await wait(150); // Pause at end of line
        }

        // 3. Reveal Preview
        previewContent.innerHTML = scenario.html;
        // Small delay to simulate render time
        await wait(200);
        previewContent.className = 'preview-content visible';

        // 4. Hold for reading (longer delay)
        await wait(2500);

        // 5. Wipe (Backspace Effect)
        const lines = Array.from(codeContainer.children);
        for (let i = lines.length - 1; i >= 0; i--) {
            const textDiv = lines[i].lastChild;
            const cursor = textDiv.querySelector('.cursor');
            if(cursor) cursor.remove();
            
            let text = textDiv.innerText;
            // Speed up backspace
            while(text.length > 0) {
                text = text.slice(0, -1);
                textDiv.innerHTML = text + '<span class="cursor"></span>';
                await wait(15); 
            }
            lines[i].remove();
        }
        
        previewContent.className = 'preview-content'; // Hide preview

        // 6. Next
        scenarioIdx = (scenarioIdx + 1) % scenarios.length;
        setTimeout(playScenario, 500);
    }

    // Start on View
    const observer = new IntersectionObserver((entries) => {
        if(entries[0].isIntersecting) {
            playScenario();
            observer.disconnect();
        }
    });
    observer.observe(document.querySelector('.browser-mockup'));
}

function wait(ms) { return new Promise(r => setTimeout(r, ms)); }

/* --- Sponsors --- */
function loadSponsors() {
    const grid = document.getElementById('sponsors-grid');
    if(!grid) return;
    
    // Manual list for now
    const sponsors = [
        { login: 'mgks', img: 'https://github.com/mgks.png' }
    ];
    
    sponsors.forEach(s => {
        grid.innerHTML += `<a href="https://github.com/${s.login}" target="_blank" class="sp-img" style="background-image:url(${s.img})" title="${s.login}"></a>`;
    });
    
    grid.innerHTML += `<a href="https://github.com/sponsors/mgks" target="_blank" class="sp-img" style="display:flex;align-items:center;justify-content:center;background:var(--bg-surface);color:var(--text-muted);border:1px dashed var(--border-default)" title="Become a Sponsor"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg></a>`;
}

window.copyCmd = function () {
  navigator.clipboard.writeText('npm install -g @mgks/docmd');

  const icon = document.querySelector('.cmd-icon');
  if (!icon) return;

  icon.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
      viewBox="0 0 24 24" fill="none" stroke="#00d500"
      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 6 9 17l-5-5"/>
    </svg>
  `;

  setTimeout(() => {
    icon.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
        viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
      </svg>
    `;
  }, 2000);
};