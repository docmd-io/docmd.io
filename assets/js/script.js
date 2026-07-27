document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLangSwitcher();
  loadSponsors();
  fetchLatestVersion();
  initLazyVideos();
  initHeroTabs();
  initFeatureTabs();
  initSearchDemo();
});

/* --- Theme Logic --- */
function initTheme() {
  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;
  const icon = toggle.querySelector('.theme-icon') || toggle;

  function setTheme(mode) {
    document.documentElement.setAttribute('data-theme', mode);
    localStorage.setItem('docmd-theme', mode);

    icon.innerHTML =
      mode === 'dark'
        ? `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`
        : `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;
  }

  const saved = localStorage.getItem('docmd-theme');
  const system = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

  setTheme(saved || system);

  toggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
  });
}

/* --- Language Switcher --- */
function initLangSwitcher() {
  const toggle = document.getElementById('lang-toggle');
  const dropdown = document.getElementById('lang-dropdown');
  if (!toggle || !dropdown) return;

  const pathSegment = window.location.pathname.split('/').filter(Boolean)[0] || '';
  const langOptions = Array.from(dropdown.querySelectorAll('.lang-option'));
  const currentLocale = langOptions.some(btn => btn.dataset.lang === pathSegment)
    ? pathSegment
    : 'en';

  dropdown.querySelectorAll('.lang-option').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLocale);
  });

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('active');
  });

  document.addEventListener('click', () => {
    dropdown.classList.remove('active');
  });
}

/* --- Interactive Hero Tabs --- */
function initHeroTabs() {
  const tabBtns = document.querySelectorAll('.hero-tab-btn');
  const panes = document.querySelectorAll('.hero-pane');
  if (!tabBtns.length || !panes.length) return;

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.tab;
      tabBtns.forEach(b => b.classList.remove('active'));
      panes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPane = document.getElementById(targetId);
      if (targetPane) targetPane.classList.add('active');
    });
  });
}

/* --- Interactive Feature Demo Tabs --- */
function initFeatureTabs() {
  const demoTabs = document.querySelectorAll('.demo-tab[data-demo]');
  const demoPanes = document.querySelectorAll('.demo-pane');
  if (!demoTabs.length) return;

  demoTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.demo;
      demoTabs.forEach(t => t.classList.remove('active'));
      demoPanes.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const activePane = document.getElementById(target);
      if (activePane) activePane.classList.add('active');
    });
  });
}

/* --- Interactive Search Demo --- */
function initSearchDemo() {
  const input = document.getElementById('demo-search-input');
  const resultsContainer = document.getElementById('demo-search-results');
  if (!input || !resultsContainer) return;

  const mockData = [
    { title: 'Getting Started & Installation', path: '/getting-started/installation', keywords: ['install', 'getting started', 'setup', 'npm', 'npx'] },
    { title: 'Configuration Reference', path: '/configuration/general', keywords: ['config', 'docmd.config.js', 'options', 'theme', 'title'] },
    { title: 'UI Containers & Markdown Syntax', path: '/content/containers', keywords: ['containers', 'callout', 'tabs', 'cards', 'warning', 'note'] },
    { title: 'Offline Semantic Search Plugin', path: '/plugins/search', keywords: ['search', 'semantic', 'vector', 'offline', 'index'] },
    { title: 'AI Agent Skills & MCP Server', path: '/api/mcp-server', keywords: ['mcp', 'ai', 'agent', 'skill', 'llms', 'claude'] }
  ];

  function renderResults(query) {
    const q = query.toLowerCase().trim();
    if (!q) {
      resultsContainer.innerHTML = mockData.map((item, idx) => `
        <div class="demo-result ${idx === 0 ? 'active' : ''}">
          <span class="demo-result-title">${item.title}</span>
          <span class="demo-result-path">${item.path}</span>
        </div>
      `).join('');
      return;
    }

    const filtered = mockData.filter(item => 
      item.title.toLowerCase().includes(q) || 
      item.path.toLowerCase().includes(q) ||
      item.keywords.some(k => k.includes(q))
    );

    if (filtered.length === 0) {
      resultsContainer.innerHTML = `<div style="padding:16px;text-align:center;color:var(--text-3);font-size:0.85rem">No matching results found for "${query}"</div>`;
    } else {
      resultsContainer.innerHTML = filtered.map((item, idx) => `
        <div class="demo-result ${idx === 0 ? 'active' : ''}">
          <span class="demo-result-title">${item.title}</span>
          <span class="demo-result-path">${item.path}</span>
        </div>
      `).join('');
    }
  }

  input.addEventListener('input', (e) => {
    renderResults(e.target.value);
  });
}

/* --- Sponsors Loader --- */
async function loadSponsors() {
  const grid = document.getElementById('sponsors-grid');
  if (!grid) return;

  const githubUsername = 'mgks';
  const addSponsorBtn = `
    <a href="https://github.com/sponsors/${githubUsername}" target="_blank" class="sp-img" 
       style="display:flex;align-items:center;justify-content:center;background:var(--surface);color:var(--text-3);border:1px dashed var(--border)" 
       title="Become a Sponsor">
       <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
    </a>`;

  try {
    const res = await fetch('/assets/sponsors.json');
    if (!res.ok) throw new Error('Failed to fetch sponsors.json');
    const sponsors = await res.json();

    let html = '';
    if (sponsors && sponsors.length > 0) {
      sponsors.forEach(s => {
        html += `<a href="${s.url}" target="_blank" class="sp-img" style="background-image:url(${s.avatarUrl})" title="${s.login}"></a>\n`;
      });
    }
    grid.innerHTML = html + addSponsorBtn;
  } catch (e) {
    grid.innerHTML = `
      <a href="https://github.com/${githubUsername}" target="_blank" class="sp-img" style="background-image:url(https://github.com/${githubUsername}.png)" title="${githubUsername}"></a>
      ${addSponsorBtn}
    `;
  }
}

/* --- Copy Command helper --- */
window.copyCmd = function (btn) {
  const target = btn || document.querySelector('.btn-code');
  if (!target) return;

  const text = (target.dataset.cmd || target.textContent.trim().replace(/^\$\s*/, '')).trim();
  navigator.clipboard.writeText(text);

  const icon = target.querySelector('.copy-icon');
  if (!icon) return;

  icon.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
  `;

  setTimeout(() => {
    icon.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
    `;
  }, 2000);
};

/* --- Version Fetcher --- */
async function fetchLatestVersion() {
  const badge = document.getElementById('npm-version');
  if (badge) {
    try {
      const res = await fetch('https://registry.npmjs.org/@docmd/core/latest');
      if (res.ok) {
        const data = await res.json();
        if (data.version) {
          badge.innerText = 'v' + data.version;
        }
      }
    } catch (e) {}
  }

  const searchBadge = document.getElementById('npm-version-search');
  if (searchBadge) {
    try {
      const res = await fetch('https://registry.npmjs.org/docmd-search/latest');
      if (res.ok) {
        const data = await res.json();
        if (data.version) {
          searchBadge.innerText = 'v' + data.version;
        }
      }
    } catch (e) {}
  }
}

/* --- Lazy Video Loader --- */
function initLazyVideos() {
  const videos = document.querySelectorAll('video[data-src]');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const video = entry.target;
          video.src = video.dataset.src;
          video.load();
          video.removeAttribute('data-src');
          video.play().catch(() => {});
          obs.unobserve(video);
        }
      });
    }, { rootMargin: '0px 0px 200px 0px' });

    videos.forEach(v => observer.observe(v));
  } else {
    videos.forEach(v => {
      v.src = v.dataset.src;
      v.load();
      v.play().catch(() => {});
    });
  }
}