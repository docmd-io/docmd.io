document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavDropdown();
  initLangSwitcher();
  loadSponsors();
  loadContributors();
  fetchLatestVersion();
  initLazyVideos();
  initHeroTabs();
  initFeatureTabs();
  initSearchDemo();
  initVectorFieldCanvas();
  initSearchSandbox();
  initAssistantSandbox();
  initAssistantCodeTabs();
  initCodeWindowCopy();
});

/* --- Nav Dropdown (compact screens) --- */
function initNavDropdown() {
  const toggle = document.querySelector('.nav-dropdown-toggle');
  const menu = document.querySelector('.nav-dropdown-menu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = menu.classList.toggle('active');
    toggle.classList.toggle('active', isOpen);
  });

  document.addEventListener('click', () => {
    menu.classList.remove('active');
    toggle.classList.remove('active');
  });

  menu.addEventListener('click', (e) => e.stopPropagation());
}

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
function getAppLocale() {
  const pathname = window.location.pathname;
  const segments = pathname.split('/').filter(Boolean);
  const knownLocales = ['de', 'zh', 'es', 'ja', 'fr', 'ru'];
  if (segments.length > 0 && knownLocales.includes(segments[0])) {
    return segments[0];
  }
  return 'en';
}

function initLangSwitcher() {
  const toggle = document.getElementById('lang-toggle');
  const dropdown = document.getElementById('lang-dropdown');
  if (!toggle || !dropdown) return;

  const pathname = window.location.pathname;
  const segments = pathname.split('/').filter(Boolean);
  const knownLocales = ['de', 'zh', 'es', 'ja', 'fr', 'ru'];

  let currentLocale = 'en';
  let cleanSegments = [...segments];
  if (segments.length > 0 && knownLocales.includes(segments[0])) {
    currentLocale = segments[0];
    cleanSegments.shift();
  }
  const cleanRoute = '/' + (cleanSegments.length ? cleanSegments.join('/') + '/' : '');

  dropdown.querySelectorAll('.lang-option').forEach(btn => {
    const lang = btn.dataset.lang;
    btn.classList.toggle('active', lang === currentLocale);
    const targetHref = lang === 'en' ? cleanRoute : `/${lang}${cleanRoute}`;
    btn.setAttribute('href', targetHref);
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = targetHref;
    });
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

/* --- Contributors Loader (Live from GitHub API or local JSON) --- */
async function loadContributors() {
  const grid = document.getElementById('contributors-grid');
  if (!grid) return;

  function renderList(list) {
    if (!list || !list.length) return;
    grid.innerHTML = list.map(c => `
      <a href="${c.url || ('https://github.com/' + c.login)}" target="_blank" rel="noopener" class="contributor-item" title="${c.login} · ${c.contributions || 1} contributions">
        <div class="contributor-avatar" style="background-image:url(${c.avatarUrl || ('https://github.com/' + c.login + '.png?size=96')})"></div>
        <span class="contributor-name">${c.login}</span>
        <span class="contributor-handle">@${c.login}</span>
      </a>
    `).join('');
  }

  try {
    const res = await fetch('/assets/contributors.json');
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        renderList(data);
        return;
      }
    }
  } catch (e) {}

  // Fallback to live public GitHub API
  try {
    const res = await fetch('https://api.github.com/repos/docmd-io/docmd/contributors?per_page=100');
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        const filtered = data
          .filter(c => c.type !== 'Bot' && !c.login.includes('[bot]'))
          .map(c => ({
            login: c.login,
            avatarUrl: c.avatar_url,
            url: c.html_url,
            contributions: c.contributions
          }));
        renderList(filtered);
      }
    }
  } catch (e) {}
}

/* --- Copy Command helper --- */
window.copyCmd = function (btn) {
  const target = btn || document.querySelector('.btn-code');
  if (!target) return;

  const text = (target.dataset.cmd || target.textContent.trim().replace(/^\$\s*/, '')).trim();
  navigator.clipboard.writeText(text);

  target.classList.add('copied');
  const icon = target.querySelector('.copy-icon');

  if (icon) {
    icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`;
  } else {
    let hint = target.querySelector('.copy-hint');
    if (!hint) {
      hint = document.createElement('span');
      hint.className = 'copy-hint';
      hint.style.cssText = 'display:inline-flex;align-items:center;margin-left:8px;color:#10b981;font-size:0.75rem;font-weight:600;letter-spacing:0.02em;animation:fadeIn 0.2s ease-in-out;';
      hint.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right:3px;"><path d="M20 6 9 17l-5-5"/></svg>Copied!`;
      target.appendChild(hint);
    }
  }

  setTimeout(() => {
    target.classList.remove('copied');
    if (icon) {
      icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`;
    } else {
      const hint = target.querySelector('.copy-hint');
      if (hint) hint.remove();
    }
  }, 2000);
};

/* --- Copy Code Snippet helper --- */
window.copySnippet = function (btn) {
  const codeBox = btn.closest('.dev-code-window')?.querySelector('pre');
  if (!codeBox) return;
  navigator.clipboard.writeText(codeBox.textContent);
  const orig = btn.innerHTML;
  btn.innerHTML = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg> Copied!`;
  setTimeout(() => { btn.innerHTML = orig; }, 2000);
};

window.copyCodeBlock = function (btn, copiedText = 'Copied!') {
  const codeBox = btn.closest('.assistant-code-block')?.querySelector('pre');
  if (!codeBox) return;
  navigator.clipboard.writeText(codeBox.textContent);
  const orig = btn.innerHTML;
  btn.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span>${copiedText}</span>`;
  setTimeout(() => { btn.innerHTML = orig; }, 2000);
};

/* --- Version & Live NPM Stats Fetcher --- */
function formatInstalls(num) {
  if (!num || num < 1) return '';
  if (num >= 1000000) return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M+';
  if (num >= 100000) return Math.round(num / 1000) + 'k+';
  if (num >= 10000) return Math.round(num / 1000) + 'k+';
  if (num >= 1000) return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k+';
  return num + '+';
}

async function fetchPackageStats(primaryPkg, relatedPkgs, versionElId, dlElId, defaultPkgPrefix) {
  const versionEl = document.getElementById(versionElId);
  const dlEl = document.getElementById(dlElId);
  if (!versionEl && !dlEl) return;

  const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  const cacheKey = `npm_stats_${primaryPkg}`;

  // 0. Check localStorage cache (valid for 24h) to avoid rate limits and repeated requests
  try {
    const cached = localStorage.getItem(cacheKey);
    if (cached) {
      const parsed = JSON.parse(cached);
      if (Date.now() - parsed.ts < 86400000) {
        if (parsed.ver && versionEl) {
          const verNumEl = versionEl.querySelector('.badge-ver-num');
          if (verNumEl) verNumEl.textContent = 'v' + parsed.ver;
          else versionEl.textContent = `${defaultPkgPrefix} v${parsed.ver}`;
        }
        if (parsed.dl && dlEl) {
          const formatted = formatInstalls(parsed.dl);
          if (formatted) {
            const textEl = dlEl.querySelector('.badge-dl-text');
            if (textEl) textEl.textContent = formatted;
            else dlEl.innerHTML = `<span class="badge-dl-text">${formatted}</span><span class="badge-dl-label">installs</span>`;
          }
        }
        return;
      }
    }
  } catch (e) {}

  let latestVer = null;
  let totalDl = 0;

  // 1. Fetch latest version from npm registry
  if (versionEl) {
    try {
      const res = await fetch(`https://registry.npmjs.org/${primaryPkg}/latest`);
      if (res.ok) {
        const data = await res.json();
        if (data && data.version) {
          latestVer = data.version;
          const verNumEl = versionEl.querySelector('.badge-ver-num');
          if (verNumEl) {
            verNumEl.textContent = 'v' + data.version;
          } else {
            versionEl.textContent = `${defaultPkgPrefix} v${data.version}`;
          }
        }
      }
    } catch (e) {}
  }

  // 2. Fetch total installs across packages (skipped on localhost to prevent 429 Too Many Requests)
  if (dlEl && !isLocal) {
    try {
      const allPkgs = relatedPkgs || [primaryPkg];
      const fetches = allPkgs.map(pkg =>
        fetch(`https://api.npmjs.org/downloads/point/2020-01-01:2099-12-31/${pkg}`)
          .then(r => r.ok ? r.json() : null)
          .catch(() => null)
      );
      const results = await Promise.all(fetches);
      for (const r of results) {
        if (r && r.downloads) totalDl += r.downloads;
      }

      if (totalDl > 0) {
        const formatted = formatInstalls(totalDl);
        const textEl = dlEl.querySelector('.badge-dl-text');
        if (textEl) {
          textEl.textContent = formatted;
        } else {
          dlEl.innerHTML = `<span class="badge-dl-text">${formatted}</span><span class="badge-dl-label">installs</span>`;
        }
      }
    } catch (e) {}
  }

  // Save to cache
  try {
    if (latestVer || totalDl > 0) {
      localStorage.setItem(cacheKey, JSON.stringify({
        ts: Date.now(),
        ver: latestVer,
        dl: totalDl > 0 ? totalDl : undefined
      }));
    }
  } catch (e) {}
}

async function fetchLatestVersion() {
  // Only execute requests for elements that exist on the active page
  if (document.getElementById('npm-version') || document.getElementById('npm-downloads')) {
    fetchPackageStats('@docmd/core', ['@docmd/core'], 'npm-version', 'npm-downloads', 'docmd');
  } else if (document.getElementById('npm-version-search') || document.getElementById('npm-downloads-search')) {
    fetchPackageStats('docmd-search', ['docmd-search', '@docmd/plugin-search'], 'npm-version-search', 'npm-downloads-search', 'docmd-search');
  } else if (document.getElementById('npm-version-assistant') || document.getElementById('npm-downloads-assistant')) {
    fetchPackageStats('docmd-assistant', ['docmd-assistant', '@docmd/plugin-ai'], 'npm-version-assistant', 'npm-downloads-assistant', 'docmd-assistant');
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

/* --- Semantic Vector Field Canvas (Organic Floating Nodes) --- */
function initVectorFieldCanvas() {
  const canvas = document.getElementById('search-vector-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width = 0;
  let height = 0;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);

  function resize() {
    const parent = canvas.parentElement;
    if (!parent) return;
    const rect = parent.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.scale(dpr, dpr);
  }

  resize();
  window.addEventListener('resize', resize, { passive: true });

  // Philosophical representation of semantic vector space:
  // Document concepts floating as embedded vectors in continuous latent space,
  // drifting smoothly with gentle Brownian wandering and soft, elegant luminescence.
  const DOT_COUNT = 38;
  const lightColors = [
    { r: 124, g: 58, b: 237 }, // Rich violet
    { r: 139, g: 92, b: 246 }, // Brand violet
    { r: 109, g: 40, b: 217 }, // Deep violet
    { r: 99, g: 102, b: 241 },  // Periwinkle indigo
    { r: 168, g: 85, b: 247 }  // Soft purple
  ];

  const darkColors = [
    { r: 192, g: 132, b: 252 }, // Luminous violet
    { r: 216, g: 180, b: 254 }, // Bright lavender
    { r: 168, g: 85, b: 247 }, // Soft purple
    { r: 165, g: 180, b: 252 }, // Periwinkle
    { r: 232, g: 121, b: 249 }  // Soft fuchsia violet
  ];

  const dots = [];
  for (let i = 0; i < DOT_COUNT; i++) {
    dots.push({
      x: Math.random() * (width || 1200),
      y: Math.random() * (height || 600),
      radius: 2.0 + Math.random() * 2.2,
      baseAlpha: 0.36 + Math.random() * 0.16,
      pulseSpeed: 0.008 + Math.random() * 0.014,
      pulseOffset: Math.random() * Math.PI * 2,
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.18,
      colorIndex: Math.floor(Math.random() * lightColors.length)
    });
  }

  let time = 0;

  function render() {
    time += 0.011;
    ctx.clearRect(0, 0, width, height);

    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const activePalette = isDark ? darkColors : lightColors;

    // 1. Draw subtle semantic proximity links between nearby vector nodes
    for (let i = 0; i < dots.length; i++) {
      for (let j = i + 1; j < dots.length; j++) {
        const dx = dots[i].x - dots[j].x;
        const dy = dots[i].y - dots[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 85) {
          const lineAlpha = (1 - dist / 85) * (isDark ? 0.22 : 0.16);
          const col = activePalette[dots[i].colorIndex];
          ctx.beginPath();
          ctx.moveTo(dots[i].x, dots[i].y);
          ctx.lineTo(dots[j].x, dots[j].y);
          ctx.strokeStyle = `rgba(${col.r}, ${col.g}, ${col.b}, ${lineAlpha})`;
          ctx.lineWidth = 0.85;
          ctx.stroke();
        }
      }
    }

    // 2. Render organic wandering vector nodes
    for (let i = 0; i < dots.length; i++) {
      const d = dots[i];
      const col = activePalette[d.colorIndex];

      // Organic wandering in latent vector space
      d.x += d.vx + Math.sin(time + d.pulseOffset) * 0.10;
      d.y += d.vy + Math.cos(time + d.pulseOffset * 1.25) * 0.10;

      // Soft wrap edges
      if (d.x < -24) d.x = width + 24;
      else if (d.x > width + 24) d.x = -24;
      if (d.y < -24) d.y = height + 24;
      else if (d.y > height + 24) d.y = -24;

      // Breathing luminescence with clearly visible core
      const currentAlpha = d.baseAlpha + Math.sin(time * 1.3 + d.pulseOffset) * 0.06;
      const alpha = Math.max(0.24, Math.min(isDark ? 0.65 : 0.58, currentAlpha));

      // Draw soft ambient halo
      const grad = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, d.radius * 3.2);
      grad.addColorStop(0, `rgba(${col.r}, ${col.g}, ${col.b}, ${alpha * (isDark ? 0.40 : 0.32)})`);
      grad.addColorStop(0.5, `rgba(${col.r}, ${col.g}, ${col.b}, ${alpha * 0.12})`);
      grad.addColorStop(1, `rgba(${col.r}, ${col.g}, ${col.b}, 0)`);

      ctx.beginPath();
      ctx.arc(d.x, d.y, d.radius * 3.2, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      // Draw visible, defined core
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.radius, 0, Math.PI * 2);
      const coreAlpha = Math.min(isDark ? 0.88 : 0.76, alpha + (isDark ? 0.22 : 0.18));
      ctx.fillStyle = `rgba(${col.r}, ${col.g}, ${col.b}, ${coreAlpha})`;
      ctx.fill();
    }

    requestAnimationFrame(render);
  }

  // Start rendering immediately so motion is continuous
  render();

  // Smoothly fade in once page loads and animation is running
  requestAnimationFrame(() => {
    setTimeout(() => {
      canvas.classList.add('is-visible');
    }, 150);
  });
}

/* --- Search Interactive Live Palette with Human Typing & Auto-Sorting --- */
const SEARCH_SCENARIOS = {
  en: [
    {
      id: 'auth',
      query: 'authentication secure tokens',
      stats: 'Cosine Similarity · 3 matches in 0.3ms · 100% Client-Side Vector',
      matchLabel: 'match',
      cards: [
        {
          id: 'auth-sessions',
          title: 'User Authentication & Sessions',
          path: '/getting-started/security',
          body: 'Configure how your application handles <mark class="search-highlight">user login</mark>, secure cookies, token generation, and stateless session verification.',
          startScore: 74,
          midScore: 91,
          endScore: 99
        },
        {
          id: 'oauth-sso',
          title: 'OAuth & Single Sign-On (SSO)',
          path: '/plugins/auth-providers',
          body: 'Authenticate documentation access through GitHub, Google, and enterprise <mark class="search-highlight">OAuth</mark> SAML providers.',
          startScore: 88,
          midScore: 84,
          endScore: 87
        },
        {
          id: 'route-guards',
          title: 'Route Guards & Security Tokens',
          path: '/configuration/routing',
          body: 'Define private directories, verify cryptographic <mark class="search-highlight">tokens</mark>, and prevent unauthenticated access to protected paths.',
          startScore: 61,
          midScore: 78,
          endScore: 94
        }
      ]
    },
    {
      id: 'theme',
      query: 'custom dark theme colors',
      stats: 'Dense 384-Dim Vector · 3 matches in 0.4ms · 100% Client-Side Vector',
      matchLabel: 'match',
      cards: [
        {
          id: 'theme-colors',
          title: 'Custom CSS Variables & Color Tokens',
          path: '/theming/available-themes',
          body: 'Override CSS variables in <mark class="search-highlight">custom.css</mark> to configure dark mode palettes, surface contrasts, and brand <mark class="search-highlight">colors</mark>.',
          startScore: 70,
          midScore: 92,
          endScore: 99
        },
        {
          id: 'syntax-schemes',
          title: 'Dark Mode Syntax Highlighting',
          path: '/theming/code-blocks',
          body: 'Choose from 40+ pre-bundled Prism and Shiki themes with automatic light and <mark class="search-highlight">dark mode</mark> adaptation.',
          startScore: 65,
          midScore: 86,
          endScore: 93
        },
        {
          id: 'theme-switch',
          title: 'Dynamic Theme Switcher & Toggle',
          path: '/content/theming-api',
          body: 'Zero-flicker client-side theme switching with automatic system appearance detection and manual toggle persistence.',
          startScore: 86,
          midScore: 83,
          endScore: 88
        }
      ]
    },
    {
      id: 'wasm',
      query: 'offline wasm vector embeddings',
      stats: 'Quantized Int8 Vector · 3 matches in 0.2ms · Zero Network Calls',
      matchLabel: 'match',
      cards: [
        {
          id: 'wasm-runtime',
          title: 'Browser Search Runtime (<3KB)',
          path: '/plugins/search/architecture',
          body: 'Lightweight <mark class="search-highlight">client search runtime</mark> executes integer vector math directly in the browser with zero external dependencies.',
          startScore: 72,
          midScore: 93,
          endScore: 99
        },
        {
          id: 'build-quant',
          title: 'Build-Time Vector Quantization',
          path: '/plugins/search/indexing',
          body: 'Pre-computes document chunk <mark class="search-highlight">embeddings</mark> during compilation, packing whole indices into compact offline JSON chunks.',
          startScore: 84,
          midScore: 86,
          endScore: 96
        },
        {
          id: 'hybrid-rank',
          title: 'Hybrid BM25 + Cosine Re-ranker',
          path: '/plugins/search/ranking',
          body: 'Combines exact lexical keyword matching with meaning-aware dense vectors for instant, typo-tolerant relevance.',
          startScore: 68,
          midScore: 79,
          endScore: 89
        }
      ]
    }
  ],
  zh: [
    {
      id: 'auth',
      query: '用户安全认证与鉴权令牌',
      stats: '余弦相似度 · 0.3ms 完成 3 项匹配 · 100% 客户端纯前端向量',
      matchLabel: '匹配度',
      cards: [
        {
          id: 'auth-sessions',
          title: '用户认证与会话管理',
          path: '/zh/getting-started/security',
          body: '配置应用如何处理<mark class="search-highlight">用户登录</mark>、安全 Cookie、令牌生成及无状态会话安全校验。',
          startScore: 74,
          midScore: 91,
          endScore: 99
        },
        {
          id: 'oauth-sso',
          title: 'OAuth 与单点登录 (SSO)',
          path: '/zh/plugins/auth-providers',
          body: '通过 GitHub、Google 以及企业级 <mark class="search-highlight">OAuth</mark> SAML 提供商实现文档访问权限认证。',
          startScore: 88,
          midScore: 84,
          endScore: 87
        },
        {
          id: 'route-guards',
          title: '路由守卫与安全令牌',
          path: '/zh/configuration/routing',
          body: '定义私有目录，校验密码学<mark class="search-highlight">令牌</mark>，阻止未经授权访问受保护路径。',
          startScore: 61,
          midScore: 78,
          endScore: 94
        }
      ]
    },
    {
      id: 'theme',
      query: '自定义暗黑主题颜色变量',
      stats: '稠密 384 维向量 · 0.4ms 完成 3 项匹配 · 100% 客户端向量检索',
      matchLabel: '匹配度',
      cards: [
        {
          id: 'theme-colors',
          title: '自定义 CSS 变量与色彩设计令牌',
          path: '/zh/theming/available-themes',
          body: '在 <mark class="search-highlight">custom.css</mark> 中覆盖 CSS 变量，定制深色模式配色、表面对比度与品牌<mark class="search-highlight">颜色</mark>。',
          startScore: 70,
          midScore: 92,
          endScore: 99
        },
        {
          id: 'syntax-schemes',
          title: '代码语法高亮方案',
          path: '/zh/theming/code-blocks',
          body: '从 40 多款内置 Prism 与 Shiki 主题中自由选择，支持随明暗主题无缝自适应切换。',
          startScore: 65,
          midScore: 86,
          endScore: 93
        },
        {
          id: 'theme-switch',
          title: '无闪烁动态主题切换器',
          path: '/zh/content/theming-api',
          body: '零闪烁纯客户端主题即时切换，支持操作系统外观自动跟随与手动模式持久化存储。',
          startScore: 86,
          midScore: 83,
          endScore: 88
        }
      ]
    },
    {
      id: 'wasm',
      query: '离线 wasm 向量嵌入计算',
      stats: 'Int8 量化向量 · 0.2ms 完成检索 · 零网络请求调用',
      matchLabel: '匹配度',
      cards: [
        {
          id: 'wasm-runtime',
          title: '超轻量浏览器搜索运行时 (<3KB)',
          path: '/zh/plugins/search/architecture',
          body: '体积小于 3KB 的轻量<mark class="search-highlight">客户端搜索运行时</mark>，直接在浏览器中高效运行整型向量数学运算。',
          startScore: 72,
          midScore: 93,
          endScore: 99
        },
        {
          id: 'build-quant',
          title: '构建期向量量化压缩',
          path: '/zh/plugins/search/indexing',
          body: '在编译期间预先计算文档文本块的<mark class="search-highlight">向量嵌入</mark>，并将整个索引压缩打包为离线 JSON 分块。',
          startScore: 84,
          midScore: 86,
          endScore: 96
        },
        {
          id: 'hybrid-rank',
          title: '混合 BM25 + 余弦相似度重排器',
          path: '/zh/plugins/search/ranking',
          body: '完美结合精确关键词词法匹配与语义感知稠密向量，实现毫秒级容错的精准搜索体验。',
          startScore: 68,
          midScore: 79,
          endScore: 89
        }
      ]
    }
  ],
  de: [
    {
      id: 'auth',
      query: 'authentifizierung sichere tokens',
      stats: 'Kosinus-Ähnlichkeit · 3 Treffer in 0,3 ms · 100% Client-seitiger Vektor',
      matchLabel: 'Übereinstimmung',
      cards: [
        {
          id: 'auth-sessions',
          title: 'Benutzerauthentifizierung & Sitzungen',
          path: '/de/getting-started/security',
          body: 'Konfigurieren Sie, wie Ihre Anwendung <mark class="search-highlight">Benutzer-Logins</mark>, sichere Cookies, Token-Generierung und zustandslose Sitzungsverifizierung handhabt.',
          startScore: 74,
          midScore: 91,
          endScore: 99
        },
        {
          id: 'oauth-sso',
          title: 'OAuth & Single Sign-On (SSO)',
          path: '/de/plugins/auth-providers',
          body: 'Authentifizieren Sie Dokumentationszugriffe über GitHub, Google und unternehmensweite <mark class="search-highlight">OAuth</mark>-SAML-Anbieter.',
          startScore: 88,
          midScore: 84,
          endScore: 87
        },
        {
          id: 'route-guards',
          title: 'Routenschutz & Private Dokumente',
          path: '/de/configuration/routing',
          body: 'Definieren Sie geschützte Verzeichnisse, verifizieren Sie kryptografische <mark class="search-highlight">Tokens</mark> und verhindern Sie unbefugten Zugriff.',
          startScore: 61,
          midScore: 78,
          endScore: 94
        }
      ]
    },
    {
      id: 'theme',
      query: 'anpassbare dunkle theme farben',
      stats: 'Dichter 384-Dim Vektor · 3 Treffer in 0,4 ms · 100% Client-seitiger Vektor',
      matchLabel: 'Übereinstimmung',
      cards: [
        {
          id: 'theme-colors',
          title: 'Eigene CSS-Variablen & Farbtokens',
          path: '/de/theming/available-themes',
          body: 'Überschreiben Sie CSS-Variablen in <mark class="search-highlight">custom.css</mark>, um Dark-Mode-Paletten, Oberflächenkontraste und Marken<mark class="search-highlight">farben</mark> anzupassen.',
          startScore: 70,
          midScore: 92,
          endScore: 99
        },
        {
          id: 'syntax-schemes',
          title: 'Dark-Mode Syntaxhervorhebung',
          path: '/de/theming/code-blocks',
          body: 'Wählen Sie aus über 40 mitgelieferten Prism- und Shiki-Themes mit automatischer Anpassung an Hell- und <mark class="search-highlight">Dunkelmodus</mark>.'
          ,startScore: 65,
          midScore: 86,
          endScore: 93
        },
        {
          id: 'theme-switch',
          title: 'Dynamischer Theme-Umschalter',
          path: '/de/content/theming-api',
          body: 'Flimmerfreies clientseitiges Umschalten des Themes mit automatischer Systemerkennung und manueller Speicherung.',
          startScore: 86,
          midScore: 83,
          endScore: 88
        }
      ]
    },
    {
      id: 'wasm',
      query: 'offline wasm vektoreinbettungen',
      stats: 'Quantisierter Int8-Vektor · 3 Treffer in 0,2 ms · Keine Netzwerkaufrufe',
      matchLabel: 'Übereinstimmung',
      cards: [
        {
          id: 'wasm-runtime',
          title: 'Browser-Suchlaufzeit (<3KB)',
          path: '/de/plugins/search/architecture',
          body: 'Leichtgewichtige <mark class="search-highlight">Client-Suchlaufzeit</mark> führt Integer-Vektormathematik direkt im Browser ohne externe Abhängigkeiten aus.',
          startScore: 72,
          midScore: 93,
          endScore: 99
        },
        {
          id: 'build-quant',
          title: 'Vektorquantisierung beim Build',
          path: '/de/plugins/search/indexing',
          body: 'Berechnet <mark class="search-highlight">Vektoreinbettungen</mark> während der Kompilierung vor und packt Indizes in kompakte Offline-JSON-Dateien.',
          startScore: 84,
          midScore: 86,
          endScore: 96
        },
        {
          id: 'hybrid-rank',
          title: 'Hybrider BM25 + Kosinus-Re-Ranker',
          path: '/de/plugins/search/ranking',
          body: 'Kombiniert exakte lexikalische Schlüsselwortsuche mit dichten Vektoren für sofortige, fehlertolerante Relevanz.',
          startScore: 68,
          midScore: 79,
          endScore: 89
        }
      ]
    }
  ],
  es: [
    {
      id: 'auth',
      query: 'autenticacion tokens seguros',
      stats: 'Similitud Coseno · 3 coincidencias en 0,3 ms · Vector 100% en Cliente',
      matchLabel: 'coincidencia',
      cards: [
        {
          id: 'auth-sessions',
          title: 'Autenticación de Usuarios y Sesiones',
          path: '/es/getting-started/security',
          body: 'Configura cómo gestiona tu aplicación el <mark class="search-highlight">inicio de sesión</mark>, cookies seguras, tokens y verificación de sesiones sin estado.',
          startScore: 74,
          midScore: 91,
          endScore: 99
        },
        {
          id: 'oauth-sso',
          title: 'OAuth y Single Sign-On (SSO)',
          path: '/es/plugins/auth-providers',
          body: 'Autentica el acceso a la documentación mediante GitHub, Google y proveedores empresariales <mark class="search-highlight">OAuth</mark> SAML.',
          startScore: 88,
          midScore: 84,
          endScore: 87
        },
        {
          id: 'route-guards',
          title: 'Protección de Rutas y Tokens',
          path: '/es/configuration/routing',
          body: 'Define directorios privados, verifica <mark class="search-highlight">tokens</mark> criptográficos y evita accesos no autenticados.',
          startScore: 61,
          midScore: 78,
          endScore: 94
        }
      ]
    },
    {
      id: 'theme',
      query: 'colores personalizados tema oscuro',
      stats: 'Vector Denso 384-Dim · 3 coincidencias en 0,4 ms · Vector 100% en Cliente',
      matchLabel: 'coincidencia',
      cards: [
        {
          id: 'theme-colors',
          title: 'Variables CSS Personalizadas y Tokens',
          path: '/es/theming/available-themes',
          body: 'Sobrescribe variables CSS en <mark class="search-highlight">custom.css</mark> para configurar temas oscuros, contrastes y <mark class="search-highlight">colores</mark> de marca.',
          startScore: 70,
          midScore: 92,
          endScore: 99
        },
        {
          id: 'syntax-schemes',
          title: 'Resaltado de Sintaxis en Modo Oscuro',
          path: '/es/theming/code-blocks',
          body: 'Elige entre más de 40 temas integrados de Prism y Shiki con adaptación automática a modo claro y <mark class="search-highlight">oscuro</mark>.',
          startScore: 65,
          midScore: 86,
          endScore: 93
        },
        {
          id: 'theme-switch',
          title: 'Selector Dinámico de Temas',
          path: '/es/content/theming-api',
          body: 'Cambio de tema sin parpadeos en el navegador con detección automática del sistema y persistencia manual.',
          startScore: 86,
          midScore: 83,
          endScore: 88
        }
      ]
    },
    {
      id: 'wasm',
      query: 'incrustaciones vectoriales wasm offline',
      stats: 'Vector Cuantizado Int8 · 3 coincidencias en 0,2 ms · Cero Llamadas de Red',
      matchLabel: 'coincidencia',
      cards: [
        {
          id: 'wasm-runtime',
          title: 'Motor de Búsqueda para Navegador (<3KB)',
          path: '/es/plugins/search/architecture',
          body: 'Ligero <mark class="search-highlight">motor de búsqueda en cliente</mark> ejecuta operaciones matemáticas vectoriales directamente en el navegador sin dependencias.',
          startScore: 72,
          midScore: 93,
          endScore: 99
        },
        {
          id: 'build-quant',
          title: 'Cuantización Vectorial en Compilación',
          path: '/es/plugins/search/indexing',
          body: 'Precalcula <mark class="search-highlight">incrustaciones</mark> de texto durante la compilación empaquetando todo el índice en archivos JSON sin conexión.',
          startScore: 84,
          midScore: 86,
          endScore: 96
        },
        {
          id: 'hybrid-rank',
          title: 'Reordenador Híbrido BM25 + Coseno',
          path: '/es/plugins/search/ranking',
          body: 'Combina coincidencia léxica exacta con vectores densos para una relevancia instantánea tolerante a erratas.',
          startScore: 68,
          midScore: 79,
          endScore: 89
        }
      ]
    }
  ],
  ja: [
    {
      id: 'auth',
      query: 'ユーザー認証 セキュアトークン',
      stats: 'コサイン類似度 · 0.3ms で 3 件一致 · 100% クライアントサイドベクトル',
      matchLabel: '一致',
      cards: [
        {
          id: 'auth-sessions',
          title: 'ユーザー認証とセッション管理',
          path: '/ja/getting-started/security',
          body: 'アプリケーションが<mark class="search-highlight">ユーザーログイン</mark>、セキュアクッキー、トークン生成、ステートレスセッション検証を処理する方法を設定します。',
          startScore: 74,
          midScore: 91,
          endScore: 99
        },
        {
          id: 'oauth-sso',
          title: 'OAuth とシングルサインオン (SSO)',
          path: '/ja/plugins/auth-providers',
          body: 'GitHub、Google、および企業向け <mark class="search-highlight">OAuth</mark> SAML プロバイダーを介してドキュメントアクセスを認証します。',
          startScore: 88,
          midScore: 84,
          endScore: 87
        },
        {
          id: 'route-guards',
          title: 'ルート保護とセキュリティトークン',
          path: '/ja/configuration/routing',
          body: 'プライベートディレクトリを定義し、暗号化<mark class="search-highlight">トークン</mark>を検証して保護されたパスへのアクセスを制御します。',
          startScore: 61,
          midScore: 78,
          endScore: 94
        }
      ]
    },
    {
      id: 'theme',
      query: 'カスタム ダークテーマ カラー',
      stats: '384次元 高密度ベクトル · 0.4ms で 3 件一致 · 100% クライアントサイドベクトル',
      matchLabel: '一致',
      cards: [
        {
          id: 'theme-colors',
          title: 'カスタム CSS 変数とカラートークン',
          path: '/ja/theming/available-themes',
          body: '<mark class="search-highlight">custom.css</mark> の CSS 変数を上書きして、ダークモード配色、コントラスト、ブランド<mark class="search-highlight">カラー</mark>を設定します。',
          startScore: 70,
          midScore: 92,
          endScore: 99
        },
        {
          id: 'syntax-schemes',
          title: 'ダークモード コード構文ハイライト',
          path: '/ja/theming/code-blocks',
          body: '40種類以上の組み込み Prism および Shiki テーマから選択でき、ライト・<mark class="search-highlight">ダークモード</mark>へ自動適応します。',
          startScore: 65,
          midScore: 86,
          endScore: 93
        },
        {
          id: 'theme-switch',
          title: 'ちらつきのない動的テーマ切り替え',
          path: '/ja/content/theming-api',
          body: 'OS の外観設定の自動検出と手動切り替えの永続化により、完全クライアントサイドで即座にテーマを切り替えます。',
          startScore: 86,
          midScore: 83,
          endScore: 88
        }
      ]
    },
    {
      id: 'wasm',
      query: 'オフライン wasm ベクトル埋め込み',
      stats: 'Int8 量子化ベクトル · 0.2ms で 3 件一致 · ネットワーク通信ゼロ',
      matchLabel: '一致',
      cards: [
        {
          id: 'wasm-runtime',
          title: '超軽量ブラウザ検索エンジン (<3KB)',
          path: '/ja/plugins/search/architecture',
          body: '3KB 未満の軽量<mark class="search-highlight">クライアント検索ランタイム</mark>が、外部依存関係なしでブラウザ内で直接ベクトル計算を実行します。',
          startScore: 72,
          midScore: 93,
          endScore: 99
        },
        {
          id: 'build-quant',
          title: 'ビルド時ベクトル量子化圧縮',
          path: '/ja/plugins/search/indexing',
          body: 'ビルド時にドキュメントテキストの<mark class="search-highlight">ベクトル埋め込み</mark>を事前計算し、コンパクトなオフライン JSON ファイルにパッケージ化します。',
          startScore: 84,
          midScore: 86,
          endScore: 96
        },
        {
          id: 'hybrid-rank',
          title: 'ハイブリッド BM25 + コサイン リランカー',
          path: '/ja/plugins/search/ranking',
          body: '完全一致キーワード検索と意味理解ベクトル検索を組み合わせ、タイポに強い即時の一致精度を提供します。',
          startScore: 68,
          midScore: 79,
          endScore: 89
        }
      ]
    }
  ],
  fr: [
    {
      id: 'auth',
      query: 'authentification tokens securises',
      stats: 'Similarité Cosinus · 3 résultats en 0,3 ms · Vecteur 100% Côté Client',
      matchLabel: 'correspondance',
      cards: [
        {
          id: 'auth-sessions',
          title: 'Authentification des Utilisateurs & Sessions',
          path: '/fr/getting-started/security',
          body: 'Configurez la gestion des <mark class="search-highlight">connexions utilisateurs</mark>, des cookies sécurisés, des tokens et de la validation de session sans état.',
          startScore: 74,
          midScore: 91,
          endScore: 99
        },
        {
          id: 'oauth-sso',
          title: 'OAuth & Authentification Unique (SSO)',
          path: '/fr/plugins/auth-providers',
          body: 'Authentifiez l\'accès à la documentation via GitHub, Google et les fournisseurs d\'entreprise <mark class="search-highlight">OAuth</mark> SAML.',
          startScore: 88,
          midScore: 84,
          endScore: 87
        },
        {
          id: 'route-guards',
          title: 'Gardes de Route & Tokens de Sécurité',
          path: '/fr/configuration/routing',
          body: 'Définissez des répertoires privés, vérifiez les <mark class="search-highlight">tokens</mark> cryptographiques et empêchez les accès non autorisés.',
          startScore: 61,
          midScore: 78,
          endScore: 94
        }
      ]
    },
    {
      id: 'theme',
      query: 'couleurs theme sombre personnalisees',
      stats: 'Vecteur Dense 384-Dim · 3 résultats en 0,4 ms · Vecteur 100% Côté Client',
      matchLabel: 'correspondance',
      cards: [
        {
          id: 'theme-colors',
          title: 'Variables CSS Personnalisées & Tokens',
          path: '/fr/theming/available-themes',
          body: 'Surchargez les variables CSS dans <mark class="search-highlight">custom.css</mark> pour ajuster les palettes sombres, les contrastes et les <mark class="search-highlight">couleurs</mark> de marque.',
          startScore: 70,
          midScore: 92,
          endScore: 99
        },
        {
          id: 'syntax-schemes',
          title: 'Coloration Syntaxique Mode Sombre',
          path: '/fr/theming/code-blocks',
          body: 'Choisissez parmi plus de 40 thèmes Prism et Shiki avec adaptation automatique aux modes clair et <mark class="search-highlight">sombre</mark>.',
          startScore: 65,
          midScore: 86,
          endScore: 93
        },
        {
          id: 'theme-switch',
          title: 'Sélecteur de Thème Dynamique',
          path: '/fr/content/theming-api',
          body: 'Changement de thème côté client sans scintillement avec détection automatique du système et sauvegarde du choix.',
          startScore: 86,
          midScore: 83,
          endScore: 88
        }
      ]
    },
    {
      id: 'wasm',
      query: 'plongements vectoriels wasm hors ligne',
      stats: 'Vecteur Quantifié Int8 · 3 résultats en 0,2 ms · Zéro Appel Réseau',
      matchLabel: 'correspondance',
      cards: [
        {
          id: 'wasm-runtime',
          title: 'Moteur de Recherche Navigateur (<3 Ko)',
          path: '/fr/plugins/search/architecture',
          body: 'Un <mark class="search-highlight">moteur de recherche client</mark> ultra-léger exécute les calculs vectoriels directement dans le navigateur sans dépendance.',
          startScore: 72,
          midScore: 93,
          endScore: 99
        },
        {
          id: 'build-quant',
          title: 'Quantification Vectorielle à la Compilation',
          path: '/fr/plugins/search/indexing',
          body: 'Précalcule les <mark class="search-highlight">plongements</mark> lors de la compilation et assemble l\'index dans des fichiers JSON hors ligne compacts.',
          startScore: 84,
          midScore: 86,
          endScore: 96
        },
        {
          id: 'hybrid-rank',
          title: 'Reclassement Hybride BM25 + Cosinus',
          path: '/fr/plugins/search/ranking',
          body: 'Combine la recherche par mot-clé exacte et les vecteurs denses pour une pertinence instantanée tolérante aux fautes de frappe.',
          startScore: 68,
          midScore: 79,
          endScore: 89
        }
      ]
    }
  ],
  ru: [
    {
      id: 'auth',
      query: 'аутентификация токены безопасности',
      stats: 'Косинусное сходство · 3 совпадения за 0,3 мс · 100% Векторный клиентский поиск',
      matchLabel: 'совпадение',
      cards: [
        {
          id: 'auth-sessions',
          title: 'Аутентификация пользователей и сессии',
          path: '/ru/getting-started/security',
          body: 'Настройте обработку <mark class="search-highlight">входа пользователей</mark>, безопасных cookies, генерации токенов и проверки сессий без сохранения состояния.',
          startScore: 74,
          midScore: 91,
          endScore: 99
        },
        {
          id: 'oauth-sso',
          title: 'OAuth и единый вход (SSO)',
          path: '/ru/plugins/auth-providers',
          body: 'Аутентифицируйте доступ к документации через GitHub, Google и корпоративные <mark class="search-highlight">OAuth</mark> SAML-провайдеры.',
          startScore: 88,
          midScore: 84,
          endScore: 87
        },
        {
          id: 'route-guards',
          title: 'Защита маршрутов и приватные документы',
          path: '/ru/configuration/routing',
          body: 'Определяйте закрытые директории, проверяйте криптографические <mark class="search-highlight">токены</mark> и блокируйте доступ к защищенным путям.',
          startScore: 61,
          midScore: 78,
          endScore: 94
        }
      ]
    },
    {
      id: 'theme',
      query: 'пользовательские цвета темной темы',
      stats: 'Плотный 384-мерный вектор · 3 совпадения за 0,4 мс · 100% Векторный клиентский поиск',
      matchLabel: 'совпадение',
      cards: [
        {
          id: 'theme-colors',
          title: 'Пользовательские переменные CSS и токены',
          path: '/ru/theming/available-themes',
          body: 'Переопределяйте переменные CSS в <mark class="search-highlight">custom.css</mark> для настройки тёмных палитр, контраста и фирменных <mark class="search-highlight">цветов</mark>.',
          startScore: 70,
          midScore: 92,
          endScore: 99
        },
        {
          id: 'syntax-schemes',
          title: 'Подсветка синтаксиса в тёмной теме',
          path: '/ru/theming/code-blocks',
          body: 'Выбирайте из более чем 40 встроенных тем Prism и Shiki с автоматической адаптацией к светлой и <mark class="search-highlight">тёмной теме</mark>.',
          startScore: 65,
          midScore: 86,
          endScore: 93
        },
        {
          id: 'theme-switch',
          title: 'Динамический переключатель темы',
          path: '/ru/content/theming-api',
          body: 'Мгновенное переключение темы на клиенте без мерцания с автоматическим определением темы ОС и сохранением настроек.',
          startScore: 86,
          midScore: 83,
          endScore: 88
        }
      ]
    },
    {
      id: 'wasm',
      query: 'офлайн wasm векторные эмбеддинги',
      stats: 'Квантованный Int8 вектор · 3 совпадения за 0,2 мс · Ноль сетевых запросов',
      matchLabel: 'совпадение',
      cards: [
        {
          id: 'wasm-runtime',
          title: 'Браузерный поисковый движок (<3КБ)',
          path: '/ru/plugins/search/architecture',
          body: 'Легковесный <mark class="search-highlight">клиентский поисковый движок</mark> вычисляет векторные операции прямо в браузере без внешних зависимостей.',
          startScore: 72,
          midScore: 93,
          endScore: 99
        },
        {
          id: 'build-quant',
          title: 'Квантование векторов при сборке',
          path: '/ru/plugins/search/indexing',
          body: 'Предварительно вычисляет <mark class="search-highlight">эмбеддинги</mark> фрагментов текста при сборке и упаковывает индекс в компактные офлайн JSON-файлы.',
          startScore: 84,
          midScore: 86,
          endScore: 96
        },
        {
          id: 'hybrid-rank',
          title: 'Гибридный реранкер BM25 + Косинус',
          path: '/ru/plugins/search/ranking',
          body: 'Объединяет точный лексический поиск по ключевым словам и плотные смысловые векторы для мгновенных результатов.',
          startScore: 68,
          midScore: 79,
          endScore: 89
        }
      ]
    }
  ]
};

function initSearchSandbox() {
  const palette = document.querySelector('.search-live-palette');
  if (!palette) return;

  const queryEl = palette.querySelector('#live-search-query');
  const resultsEl = palette.querySelector('#live-search-results');
  const statsEl = palette.querySelector('#live-search-stats');

  const locale = getAppLocale();
  const scenarios = SEARCH_SCENARIOS[locale] || SEARCH_SCENARIOS.en;

  function buildScenarioDom(scenario) {
    if (!resultsEl) return;
    const matchLabel = scenario.matchLabel || 'match';
    resultsEl.innerHTML = scenario.cards.map((item, idx) => `
      <div class="palette-result-card ${idx === 0 ? 'is-top-match' : ''}" data-card-id="${item.id}" role="listitem">
        <div class="palette-result-header">
          <div class="palette-result-title-group">
            <div class="palette-result-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
            </div>
            <div>
              <div class="palette-result-title">${item.title}</div>
              <div class="palette-result-path">${item.path}</div>
            </div>
          </div>
          <span class="palette-score-badge high-score">
            <span class="score-num">--%</span> ${matchLabel}
          </span>
        </div>
        <div class="palette-result-body">${item.body}</div>
      </div>
    `).join('');

    scenario.cardNodes = Array.from(resultsEl.querySelectorAll('.palette-result-card')).map((el, idx) => ({
      el,
      meta: scenario.cards[idx],
      currentScore: scenario.cards[idx].startScore
    }));
  }

  function updateAndSortCards(scenario, progress) {
    if (!scenario.cardNodes || !resultsEl) return;

    scenario.cardNodes.forEach(item => {
      let score;
      if (progress <= 0.5) {
        const p = progress / 0.5;
        score = Math.round(item.meta.startScore + (item.meta.midScore - item.meta.startScore) * p);
      } else {
        const p = (progress - 0.5) / 0.5;
        score = Math.round(item.meta.midScore + (item.meta.endScore - item.meta.midScore) * p);
      }
      item.currentScore = Math.min(100, Math.max(35, score));

      const badge = item.el.querySelector('.palette-score-badge');
      if (badge) {
        badge.classList.toggle('high-score', item.currentScore >= 90);
        const scoreNum = badge.querySelector('.score-num');
        if (scoreNum) scoreNum.textContent = `${item.currentScore}%`;
      }
    });

    // Sort descending by currentScore
    const sorted = [...scenario.cardNodes].sort((a, b) => b.currentScore - a.currentScore);

    // Re-append existing DOM nodes in sorted order
    let orderChanged = false;
    sorted.forEach((item, index) => {
      if (resultsEl.children[index] !== item.el) {
        orderChanged = true;
      }
    });

    if (orderChanged) {
      sorted.forEach(item => resultsEl.appendChild(item.el));
    }

    // Ensure is-top-match highlight follows top result
    sorted.forEach((item, index) => {
      item.el.classList.toggle('is-top-match', index === 0);
    });
  }

  let currentScenarioIdx = 0;
  let isDeleting = false;
  let charIdx = 0;
  let isPaused = false;
  let timeoutId = null;

  function tick() {
    if (isPaused) {
      timeoutId = setTimeout(tick, 200);
      return;
    }

    const currentScenario = scenarios[currentScenarioIdx];
    const fullQuery = currentScenario.query;

    if (!isDeleting) {
      charIdx++;
      if (queryEl) queryEl.textContent = fullQuery.slice(0, charIdx);

      const progress = fullQuery.length > 0 ? charIdx / fullQuery.length : 0;
      updateAndSortCards(currentScenario, progress);

      if (charIdx === fullQuery.length) {
        // Full query typed! Show finalized stats
        if (statsEl) statsEl.textContent = currentScenario.stats;

        // Pause before deleting
        timeoutId = setTimeout(() => {
          isDeleting = true;
          tick();
        }, 4200);
        return;
      }

      // Varied typing cadence
      const delay = 40 + Math.random() * 35;
      timeoutId = setTimeout(tick, delay);
    } else {
      // Deleting phase
      charIdx -= 2;
      if (charIdx < 0) charIdx = 0;
      if (queryEl) queryEl.textContent = fullQuery.slice(0, charIdx);

      const progress = fullQuery.length > 0 ? charIdx / fullQuery.length : 0;
      updateAndSortCards(currentScenario, progress);

      if (charIdx === 0) {
        // Move to next scenario
        isDeleting = false;
        currentScenarioIdx = (currentScenarioIdx + 1) % scenarios.length;
        const nextScenario = scenarios[currentScenarioIdx];

        // Setup DOM for next scenario
        buildScenarioDom(nextScenario);
        if (statsEl) statsEl.textContent = nextScenario.stats;

        timeoutId = setTimeout(tick, 450);
        return;
      }

      timeoutId = setTimeout(tick, 30 + Math.random() * 10);
    }
  }

  palette.addEventListener('mouseenter', () => { isPaused = true; });
  palette.addEventListener('mouseleave', () => { isPaused = false; });

  // Initial pause on the first fully-rendered query before deleting
  timeoutId = setTimeout(() => {
    isDeleting = true;
    tick();
  }, 2800);
}

/* --- AI Assistant Interactive Live Preview Scenarios --- */
const ASSISTANT_LABELS = {
  en: {
    searching: 'Searching "{query}" in docs...',
    reading: 'Reading {doc}...',
    sources: 'Sources:',
    copy: 'Copy',
    copied: 'Copied!'
  },
  de: {
    searching: 'Suche "{query}" in der Dokumentation...',
    reading: 'Lese {doc}...',
    sources: 'Quellen:',
    copy: 'Kopieren',
    copied: 'Kopiert!'
  },
  zh: {
    searching: '正在文档中检索 "{query}"...',
    reading: '正在读取 {doc}...',
    sources: '参考文档:',
    copy: '复制',
    copied: '已复制!'
  },
  es: {
    searching: 'Buscando "{query}" en la documentación...',
    reading: 'Leyendo {doc}...',
    sources: 'Fuentes:',
    copy: 'Copiar',
    copied: '¡Copiado!'
  },
  ja: {
    searching: 'ドキュメント内で "{query}" を検索中...',
    reading: '{doc} を読み込み中...',
    sources: '参照ソース:',
    copy: 'コピー',
    copied: 'コピー完了!'
  },
  fr: {
    searching: 'Recherche de "{query}" dans la documentation...',
    reading: 'Lecture de {doc}...',
    sources: 'Sources :',
    copy: 'Copier',
    copied: 'Copié !'
  },
  ru: {
    searching: 'Поиск "{query}" в документации...',
    reading: 'Чтение {doc}...',
    sources: 'Источники:',
    copy: 'Копировать',
    copied: 'Скопировано!'
  }
};

const ASSISTANT_SCENARIOS = {
  en: [
    {
      query: 'How do I run docmd-assistant completely offline with a local model?',
      searchQuery: 'offline local model',
      readingDoc: '/guides/ai/ai-assistant.md',
      introText: 'Configure DocmdAssistantEngine to connect directly to your local Ollama instance. Both embeddings and responses compute locally with zero cloud API keys or telemetry.',
      codeBlock: {
        lang: 'TYPESCRIPT',
        code: `<span class="tok-kw">import</span> { DocmdAssistantEngine } <span class="tok-kw">from</span> <span class="tok-str">'docmd-assistant'</span>;\n\n<span class="tok-kw">const</span> engine = <span class="tok-kw">new</span> <span class="tok-cls">DocmdAssistantEngine</span>({\n  provider: <span class="tok-str">'ollama'</span>,\n  model: <span class="tok-str">'llama3.2'</span>,\n  baseUrl: <span class="tok-str">'http://localhost:11434'</span>\n});`
      },
      outroText: 'Zero network telemetry and zero external token fees.',
      citations: [
        { name: '/guides/ai/ai-assistant.md', url: 'https://docs.docmd.io/guides/ai/ai-assistant/' },
        { name: '/plugins/usage/', url: 'https://docs.docmd.io/plugins/usage/' }
      ]
    },
    {
      query: 'Can the assistant cite specific Markdown headings and prevent hallucinations?',
      searchQuery: 'AST chunks citation rules',
      readingDoc: '/architecture/search-rag.md',
      introText: 'Yes. docmd compiles your documentation into typed AST chunks with exact heading anchors. The engine retrieves matching sections via hybrid BM25 and vector search, strictly enforcing citation bounds.',
      codeBlock: null,
      outroText: 'Unverified claims and hallucinated APIs are rejected before generating responses.',
      citations: [
        { name: '/architecture/search-rag.md', url: 'https://docs.docmd.io/architecture/search-rag/' },
        { name: '/guides/content/search.md', url: 'https://docs.docmd.io/guides/content/search/' }
      ]
    },
    {
      query: 'How are team API keys protected in production deployments?',
      searchQuery: 'KMS envelope encryption',
      readingDoc: '/security/kms-envelope.md',
      introText: 'Provider credentials are encrypted at rest with AES-256-GCM hardware KMS envelopes. Plaintext keys are decrypted only in secure server memory during request execution and never exposed to the client browser.',
      codeBlock: {
        lang: 'JSON · docmd.config.json',
        code: `{\n  <span class="tok-prop">"assistant"</span>: {\n    <span class="tok-prop">"kms"</span>: { <span class="tok-prop">"provider"</span>: <span class="tok-str">"aws-kms"</span>, <span class="tok-prop">"keyId"</span>: <span class="tok-str">"alias/docmd-keys"</span> },\n    <span class="tok-prop">"relay"</span>: { <span class="tok-prop">"endpoint"</span>: <span class="tok-str">"/api/assistant/relay"</span> }\n  }\n}`
      },
      outroText: 'Client sessions receive transient signed streaming tokens over SSE.',
      citations: [
        { name: '/security/kms-envelope.md', url: 'https://docs.docmd.io/security/kms-envelope/' },
        { name: '/configuration/security.md', url: 'https://docs.docmd.io/configuration/overview/' }
      ]
    }
  ],
  de: [
    {
      query: 'Wie führe ich docmd-assistant vollständig offline mit einem lokalen Modell aus?',
      searchQuery: 'offline lokales Modell',
      readingDoc: '/de/guides/ai/ai-assistant.md',
      introText: 'Konfigurieren Sie die DocmdAssistantEngine für eine direkte Verbindung zu Ihrer lokalen Ollama-Instanz. Vektoreinbettungen und Inferenz werden lokal berechnet – ohne Cloud-API-Schlüssel oder Telemetrie.',
      codeBlock: {
        lang: 'TYPESCRIPT',
        code: `<span class="tok-kw">import</span> { DocmdAssistantEngine } <span class="tok-kw">from</span> <span class="tok-str">'docmd-assistant'</span>;\n\n<span class="tok-kw">const</span> engine = <span class="tok-kw">new</span> <span class="tok-cls">DocmdAssistantEngine</span>({\n  provider: <span class="tok-str">'ollama'</span>,\n  model: <span class="tok-str">'llama3.2'</span>,\n  baseUrl: <span class="tok-str">'http://localhost:11434'</span>\n});`
      },
      outroText: 'Null Netzwerktelemetrie und keinerlei externe Token-Gebühren.',
      citations: [
        { name: '/de/guides/ai/ai-assistant.md', url: 'https://docs.docmd.io/guides/ai/ai-assistant/' },
        { name: '/de/plugins/usage/', url: 'https://docs.docmd.io/plugins/usage/' }
      ]
    },
    {
      query: 'Kann der Assistent bestimmte Markdown-Überschriften zitieren und Halluzinationen verhindern?',
      searchQuery: 'AST-Chunks Zitierregeln',
      readingDoc: '/de/architecture/search-rag.md',
      introText: 'Ja. docmd kompiliert Ihre Dokumentation in typisierte AST-Chunks mit exakten Überschriften-Ankern. Die Engine ruft passende Abschnitte per hybridem BM25 und Vektorsuche ab und erzwingt strikte Zitiereinschränkungen.',
      codeBlock: null,
      outroText: 'Unbelegte Behauptungen und erfundene APIs werden vor der Antwortgenerierung verworfen.',
      citations: [
        { name: '/de/architecture/search-rag.md', url: 'https://docs.docmd.io/architecture/search-rag/' },
        { name: '/de/guides/content/search.md', url: 'https://docs.docmd.io/guides/content/search/' }
      ]
    },
    {
      query: 'Wie werden Team-API-Schlüssel im Produktiveinsatz geschützt?',
      searchQuery: 'KMS-Umschlagverschlüsselung',
      readingDoc: '/de/security/kms-envelope.md',
      introText: 'Provider-Anmeldedaten werden im Ruhezustand mit hardwarebasierten AES-256-GCM KMS-Umschlägen verschlüsselt. Klartextschlüssel verbleiben ausschließlich im gesicherten Serverspeicher und gelangen niemals in den Browser.',
      codeBlock: {
        lang: 'JSON · docmd.config.json',
        code: `{\n  <span class="tok-prop">"assistant"</span>: {\n    <span class="tok-prop">"kms"</span>: { <span class="tok-prop">"provider"</span>: <span class="tok-str">"aws-kms"</span>, <span class="tok-prop">"keyId"</span>: <span class="tok-str">"alias/docmd-keys"</span> },\n    <span class="tok-prop">"relay"</span>: { <span class="tok-prop">"endpoint"</span>: <span class="tok-str">"/api/assistant/relay"</span> }\n  }\n}`
      },
      outroText: 'Clientsitzungen erhalten kurzlebige, signierte Streaming-Tokens über SSE.',
      citations: [
        { name: '/de/security/kms-envelope.md', url: 'https://docs.docmd.io/security/kms-envelope/' },
        { name: '/de/configuration/security.md', url: 'https://docs.docmd.io/configuration/overview/' }
      ]
    }
  ],
  zh: [
    {
      query: '如何使用本地大模型完全离线运行 docmd-assistant？',
      searchQuery: '离线 本地模型',
      readingDoc: '/zh/guides/ai/ai-assistant.md',
      introText: '配置 DocmdAssistantEngine 直接连接到您的本地 Ollama 实例。向量嵌入与大模型推理均在本地离线计算，无需任何云端 API 密钥或遥测数据外发。',
      codeBlock: {
        lang: 'TYPESCRIPT',
        code: `<span class="tok-kw">import</span> { DocmdAssistantEngine } <span class="tok-kw">from</span> <span class="tok-str">'docmd-assistant'</span>;\n\n<span class="tok-kw">const</span> engine = <span class="tok-kw">new</span> <span class="tok-cls">DocmdAssistantEngine</span>({\n  provider: <span class="tok-str">'ollama'</span>,\n  model: <span class="tok-str">'llama3.2'</span>,\n  baseUrl: <span class="tok-str">'http://localhost:11434'</span>\n});`
      },
      outroText: '零网络遥测上传，零外部模型调用费用。',
      citations: [
        { name: '/zh/guides/ai/ai-assistant.md', url: 'https://docs.docmd.io/guides/ai/ai-assistant/' },
        { name: '/zh/plugins/usage/', url: 'https://docs.docmd.io/plugins/usage/' }
      ]
    },
    {
      query: '助手能否精确引用 Markdown 标题并杜绝模型幻觉？',
      searchQuery: 'AST 文档切片 引用规则',
      readingDoc: '/zh/architecture/search-rag.md',
      introText: '可以。docmd 会将您的文档编译为带有精确标题锚点的类型化 AST 语法树切块。检索系统通过混合 BM25 与向量算法精准召回，严格约束大模型仅根据文档事实回答。',
      codeBlock: null,
      outroText: '未经文档证实的推断和臆造的 API 在生成前会被严格拦截过滤。'
      ,citations: [
        { name: '/zh/architecture/search-rag.md', url: 'https://docs.docmd.io/architecture/search-rag/' },
        { name: '/zh/guides/content/search.md', url: 'https://docs.docmd.io/guides/content/search/' }
      ]
    },
    {
      query: '在生产环境中团队 API 密钥如何获得安全保护？',
      searchQuery: 'KMS 信封加密',
      readingDoc: '/zh/security/kms-envelope.md',
      introText: '大模型提供商密钥使用 AES-256-GCM 硬件 KMS 信封加密落盘存储。明文密钥仅在受保护的服务器内存执行期间解密，绝不会泄漏或暴露给客户端浏览器。',
      codeBlock: {
        lang: 'JSON · docmd.config.json',
        code: `{\n  <span class="tok-prop">"assistant"</span>: {\n    <span class="tok-prop">"kms"</span>: { <span class="tok-prop">"provider"</span>: <span class="tok-str">"aws-kms"</span>, <span class="tok-prop">"keyId"</span>: <span class="tok-str">"alias/docmd-keys"</span> },\n    <span class="tok-prop">"relay"</span>: { <span class="tok-prop">"endpoint"</span>: <span class="tok-str">"/api/assistant/relay"</span> }\n  }\n}`
      },
      outroText: '客户端会话仅通过 SSE 获得受保护的短期签名流式传输令牌。',
      citations: [
        { name: '/zh/security/kms-envelope.md', url: 'https://docs.docmd.io/security/kms-envelope/' },
        { name: '/zh/configuration/security.md', url: 'https://docs.docmd.io/configuration/overview/' }
      ]
    }
  ],
  es: [
    {
      query: '¿Cómo ejecuto docmd-assistant completamente fuera de línea con un modelo local?',
      searchQuery: 'modelo local fuera de línea',
      readingDoc: '/es/guides/ai/ai-assistant.md',
      introText: 'Configure DocmdAssistantEngine para conectarse directamente a su instancia local de Ollama. Las incrustaciones vectoriales y la inferencia se computan localmente sin claves API en la nube ni telemetría.',
      codeBlock: {
        lang: 'TYPESCRIPT',
        code: `<span class="tok-kw">import</span> { DocmdAssistantEngine } <span class="tok-kw">from</span> <span class="tok-str">'docmd-assistant'</span>;\n\n<span class="tok-kw">const</span> engine = <span class="tok-kw">new</span> <span class="tok-cls">DocmdAssistantEngine</span>({\n  provider: <span class="tok-str">'ollama'</span>,\n  model: <span class="tok-str">'llama3.2'</span>,\n  baseUrl: <span class="tok-str">'http://localhost:11434'</span>\n});`
      },
      outroText: 'Cero telemetría de red y sin tarifas de tokens externas.',
      citations: [
        { name: '/es/guides/ai/ai-assistant.md', url: 'https://docs.docmd.io/guides/ai/ai-assistant/' },
        { name: '/es/plugins/usage/', url: 'https://docs.docmd.io/plugins/usage/' }
      ]
    },
    {
      query: '¿Puede el asistente citar encabezados Markdown específicos y evitar alucinaciones?',
      searchQuery: 'fragmentos AST reglas de citación',
      readingDoc: '/es/architecture/search-rag.md',
      introText: 'Sí. docmd compila su documentación en fragmentos AST tipados con anclajes exactos en los encabezados. El motor recupera secciones coincidentes mediante búsqueda híbrida BM25 y vectorial, aplicando estrictos límites de citación.',
      codeBlock: null,
      outroText: 'Las afirmaciones no verificadas y las API inventadas se descartan antes de generar respuestas.',
      citations: [
        { name: '/es/architecture/search-rag.md', url: 'https://docs.docmd.io/architecture/search-rag/' },
        { name: '/es/guides/content/search.md', url: 'https://docs.docmd.io/guides/content/search/' }
      ]
    },
    {
      query: '¿Cómo se protegen las claves API del equipo en implementaciones de producción?',
      searchQuery: 'cifrado de sobre KMS',
      readingDoc: '/es/security/kms-envelope.md',
      introText: 'Las credenciales del proveedor se cifran en reposo con sobres KMS de hardware AES-256-GCM. Las claves en texto plano solo se descifran en la memoria segura del servidor y nunca se exponen al navegador.',
      codeBlock: {
        lang: 'JSON · docmd.config.json',
        code: `{\n  <span class="tok-prop">"assistant"</span>: {\n    <span class="tok-prop">"kms"</span>: { <span class="tok-prop">"provider"</span>: <span class="tok-str">"aws-kms"</span>, <span class="tok-prop">"keyId"</span>: <span class="tok-str">"alias/docmd-keys"</span> },\n    <span class="tok-prop">"relay"</span>: { <span class="tok-prop">"endpoint"</span>: <span class="tok-str">"/api/assistant/relay"</span> }\n  }\n}`
      },
      outroText: 'Las sesiones del cliente reciben tokens de transmisión firmados y temporales mediante SSE.',
      citations: [
        { name: '/es/security/kms-envelope.md', url: 'https://docs.docmd.io/security/kms-envelope/' },
        { name: '/es/configuration/security.md', url: 'https://docs.docmd.io/configuration/overview/' }
      ]
    }
  ],
  ja: [
    {
      query: 'ローカルモデルを使用して docmd-assistant を完全にオフラインで実行するにはどうすればよいですか？',
      searchQuery: 'オフライン ローカルモデル',
      readingDoc: '/ja/guides/ai/ai-assistant.md',
      introText: 'DocmdAssistantEngine を設定してローカルの Ollama インスタンスに直接接続します。ベクトル埋め込みと推論の両方がローカルで実行され、クラウド API キーや外部テレメトリは一切不要です。',
      codeBlock: {
        lang: 'TYPESCRIPT',
        code: `<span class="tok-kw">import</span> { DocmdAssistantEngine } <span class="tok-kw">from</span> <span class="tok-str">'docmd-assistant'</span>;\n\n<span class="tok-kw">const</span> engine = <span class="tok-kw">new</span> <span class="tok-cls">DocmdAssistantEngine</span>({\n  provider: <span class="tok-str">'ollama'</span>,\n  model: <span class="tok-str">'llama3.2'</span>,\n  baseUrl: <span class="tok-str">'http://localhost:11434'</span>\n});`
      },
      outroText: 'ネットワークテレメトリ送信ゼロ、外部トークン課金ゼロ。',
      citations: [
        { name: '/ja/guides/ai/ai-assistant.md', url: 'https://docs.docmd.io/guides/ai/ai-assistant/' },
        { name: '/ja/plugins/usage/', url: 'https://docs.docmd.io/plugins/usage/' }
      ]
    },
    {
      query: 'アシスタントは特定の Markdown 見出しを引用し、ハルシネーションを防ぐことができますか？',
      searchQuery: 'ASTチャンク 引用ルール',
      readingDoc: '/ja/architecture/search-rag.md',
      introText: 'はい。docmd はドキュメントを正確な見出しアンカー付きの型付き AST チャンクにコンパイルします。エンジンはハイブリッド BM25 とベクトル検索で関連セクションを取得し、引用根拠を厳密に強制します。'
      ,codeBlock: null,
      outroText: '未検証の主張や架空の API 生成は、回答生成前に厳密に除外されます。',
      citations: [
        { name: '/ja/architecture/search-rag.md', url: 'https://docs.docmd.io/architecture/search-rag/' },
        { name: '/ja/guides/content/search.md', url: 'https://docs.docmd.io/guides/content/search/' }
      ]
    },
    {
      query: '本番環境でのチーム API キーはどのように保護されますか？',
      searchQuery: 'KMS エンベロープ暗号化',
      readingDoc: '/ja/security/kms-envelope.md',
      introText: 'プロバイダークレデンシャルはハードウェア KMS による AES-256-GCM エンベロープ暗号化で保存されます。平文キーはリクエスト実行中に保護されたサーバーメモリ内でのみ復号され、ブラウザには一切公開されません。',
      codeBlock: {
        lang: 'JSON · docmd.config.json',
        code: `{\n  <span class="tok-prop">"assistant"</span>: {\n    <span class="tok-prop">"kms"</span>: { <span class="tok-prop">"provider"</span>: <span class="tok-str">"aws-kms"</span>, <span class="tok-prop">"keyId"</span>: <span class="tok-str">"alias/docmd-keys"</span> },\n    <span class="tok-prop">"relay"</span>: { <span class="tok-prop">"endpoint"</span>: <span class="tok-str">"/api/assistant/relay"</span> }\n  }\n}`
      },
      outroText: 'クライアントセッションは SSE 経由で一時的な署名付きストリーミングトークンのみを受信します。',
      citations: [
        { name: '/ja/security/kms-envelope.md', url: 'https://docs.docmd.io/security/kms-envelope/' },
        { name: '/ja/configuration/security.md', url: 'https://docs.docmd.io/configuration/overview/' }
      ]
    }
  ],
  fr: [
    {
      query: 'Comment exécuter docmd-assistant complètement hors ligne avec un modèle local ?',
      searchQuery: 'modèle local hors ligne',
      readingDoc: '/fr/guides/ai/ai-assistant.md',
      introText: 'Configurez DocmdAssistantEngine pour vous connecter directement à votre instance locale Ollama. Les plongements vectoriels et l\'inférence sont calculés localement, sans clés API cloud ni télémétrie.',
      codeBlock: {
        lang: 'TYPESCRIPT',
        code: `<span class="tok-kw">import</span> { DocmdAssistantEngine } <span class="tok-kw">from</span> <span class="tok-str">'docmd-assistant'</span>;\n\n<span class="tok-kw">const</span> engine = <span class="tok-kw">new</span> <span class="tok-cls">DocmdAssistantEngine</span>({\n  provider: <span class="tok-str">'ollama'</span>,\n  model: <span class="tok-str">'llama3.2'</span>,\n  baseUrl: <span class="tok-str">'http://localhost:11434'</span>\n});`
      },
      outroText: 'Zéro télémétrie réseau et aucun coût de jetons externes.',
      citations: [
        { name: '/fr/guides/ai/ai-assistant.md', url: 'https://docs.docmd.io/guides/ai/ai-assistant/' },
        { name: '/fr/plugins/usage/', url: 'https://docs.docmd.io/plugins/usage/' }
      ]
    },
    {
      query: 'L\'assistant peut-il citer des titres Markdown spécifiques et éviter les hallucinations ?',
      searchQuery: 'blocs AST règles de citation',
      readingDoc: '/fr/architecture/search-rag.md',
      introText: 'Oui. docmd compile votre documentation en fragments AST typés avec des ancres de titres exactes. Le moteur récupère les sections correspondantes via une recherche hybride BM25 et vectorielle, en appliquant des limites de citation strictes.',
      codeBlock: null,
      outroText: 'Les affirmations non vérifiées et les API inventées sont rejetées avant la génération de la réponse.',
      citations: [
        { name: '/fr/architecture/search-rag.md', url: 'https://docs.docmd.io/architecture/search-rag/' },
        { name: '/fr/guides/content/search.md', url: 'https://docs.docmd.io/guides/content/search/' }
      ]
    },
    {
      query: 'Comment les clés API d\'équipe sont-elles protégées en production ?',
      searchQuery: 'chiffrement d\'enveloppe KMS',
      readingDoc: '/fr/security/kms-envelope.md',
      introText: 'Les identifiants sont chiffrés au repos avec des enveloppes KMS matérielles AES-256-GCM. Les clés en clair ne sont déchiffrées que dans la mémoire sécurisée du serveur et ne sont jamais exposées au navigateur client.',
      codeBlock: {
        lang: 'JSON · docmd.config.json',
        code: `{\n  <span class="tok-prop">"assistant"</span>: {\n    <span class="tok-prop">"kms"</span>: { <span class="tok-prop">"provider"</span>: <span class="tok-str">"aws-kms"</span>, <span class="tok-prop">"keyId"</span>: <span class="tok-str">"alias/docmd-keys"</span> },\n    <span class="tok-prop">"relay"</span>: { <span class="tok-prop">"endpoint"</span>: <span class="tok-str">"/api/assistant/relay"</span> }\n  }\n}`
      },
      outroText: 'Les sessions clientes reçoivent des jetons de streaming signés et éphémères via SSE.',
      citations: [
        { name: '/fr/security/kms-envelope.md', url: 'https://docs.docmd.io/security/kms-envelope/' },
        { name: '/fr/configuration/security.md', url: 'https://docs.docmd.io/configuration/overview/' }
      ]
    }
  ],
  ru: [
    {
      query: 'Как запустить docmd-assistant полностью автономно с локальной моделью?',
      searchQuery: 'автономная локальная модель',
      readingDoc: '/ru/guides/ai/ai-assistant.md',
      introText: 'Настройте DocmdAssistantEngine для прямого подключения к локальному экземпляру Ollama. Векторные эмбеддинги и инференс выполняются локально без облачных API-ключей и телеметрии.',
      codeBlock: {
        lang: 'TYPESCRIPT',
        code: `<span class="tok-kw">import</span> { DocmdAssistantEngine } <span class="tok-kw">from</span> <span class="tok-str">'docmd-assistant'</span>;\n\n<span class="tok-kw">const</span> engine = <span class="tok-kw">new</span> <span class="tok-cls">DocmdAssistantEngine</span>({\n  provider: <span class="tok-str">'ollama'</span>,\n  model: <span class="tok-str">'llama3.2'</span>,\n  baseUrl: <span class="tok-str">'http://localhost:11434'</span>\n});`
      },
      outroText: 'Ноль сетевой телеметрии и никаких внешних расходов на токены.',
      citations: [
        { name: '/ru/guides/ai/ai-assistant.md', url: 'https://docs.docmd.io/guides/ai/ai-assistant/' },
        { name: '/ru/plugins/usage/', url: 'https://docs.docmd.io/plugins/usage/' }
      ]
    },
    {
      query: 'Может ли ассистент цитировать заголовки Markdown и предотвращать галлюцинации?',
      searchQuery: 'AST фрагменты правила цитирования',
      readingDoc: '/ru/architecture/search-rag.md',
      introText: 'Да. docmd компилирует документацию в типизированные фрагменты AST с точными якорями заголовков. Движок извлекает релевантные разделы с помощью гибридного BM25 и векторного поиска, строго соблюдая границы цитирования.',
      codeBlock: null,
      outroText: 'Неподтверждённые утверждения и вымышленные API отсекаются до генерации ответа.',
      citations: [
        { name: '/ru/architecture/search-rag.md', url: 'https://docs.docmd.io/architecture/search-rag/' },
        { name: '/ru/guides/content/search.md', url: 'https://docs.docmd.io/guides/content/search/' }
      ]
    },
    {
      query: 'Как защищены командные API-ключи в продакшене?',
      searchQuery: 'конвертное шифрование KMS',
      readingDoc: '/ru/security/kms-envelope.md',
      introText: 'Учётные данные провайдеров шифруются в покое с использованием аппаратных KMS-конвертов AES-256-GCM. Незашифрованные ключи расшифровываются исключительно в защищённой памяти сервера и никогда не попадают в браузер.',
      codeBlock: {
        lang: 'JSON · docmd.config.json',
        code: `{\n  <span class="tok-prop">"assistant"</span>: {\n    <span class="tok-prop">"kms"</span>: { <span class="tok-prop">"provider"</span>: <span class="tok-str">"aws-kms"</span>, <span class="tok-prop">"keyId"</span>: <span class="tok-str">"alias/docmd-keys"</span> },\n    <span class="tok-prop">"relay"</span>: { <span class="tok-prop">"endpoint"</span>: <span class="tok-str">"/api/assistant/relay"</span> }\n  }\n}`
      },
      outroText: 'Клиентские сессии получают временные подписанные потоковые токены через SSE.',
      citations: [
        { name: '/ru/security/kms-envelope.md', url: 'https://docs.docmd.io/security/kms-envelope/' },
        { name: '/ru/configuration/security.md', url: 'https://docs.docmd.io/configuration/overview/' }
      ]
    }
  ]
};

function initAssistantSandbox() {
  const card = document.getElementById('assistant-chat-card');
  if (!card) return;

  const promptTextEl = document.getElementById('assistant-prompt-text');
  const shortcutBtn = document.querySelector('.assistant-prompt-submit') || document.querySelector('.assistant-prompt-shortcut');
  const retrievalBar = document.getElementById('assistant-retrieval-bar');
  const retrievalText = document.getElementById('assistant-retrieval-text');
  const bubbleContent = document.getElementById('assistant-bubble-content');
  const citationsBar = document.getElementById('assistant-citations-bar');

  if (!promptTextEl || !bubbleContent) return;

  const locale = getAppLocale();
  const scenarios = ASSISTANT_SCENARIOS[locale] || ASSISTANT_SCENARIOS.en;
  const labels = ASSISTANT_LABELS[locale] || ASSISTANT_LABELS.en;

  let currentIndex = 0;
  let isPaused = false;
  let activeTicket = 0;

  const previewBox = document.querySelector('.assistant-live-preview') || card;
  previewBox.addEventListener('mouseenter', () => { isPaused = true; });
  previewBox.addEventListener('mouseleave', () => { isPaused = false; });

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function waitWhilePaused(ticket) {
    while (isPaused) {
      if (ticket !== activeTicket) return false;
      await sleep(200);
    }
    return ticket === activeTicket;
  }

  async function typeString(targetEl, text, speedMs, ticket) {
    targetEl.textContent = '';
    const chars = Array.from(text);
    for (let i = 0; i < chars.length; i++) {
      if (ticket !== activeTicket) return false;
      if (isPaused) {
        const ok = await waitWhilePaused(ticket);
        if (!ok) return false;
      }
      targetEl.textContent += chars[i];
      await sleep(speedMs);
    }
    return true;
  }

  async function streamTextParagraph(parentEl, text, ticket) {
    const p = document.createElement('p');
    p.className = 'assistant-bubble-text';
    const textNode = document.createTextNode('');
    const cursor = document.createElement('span');
    cursor.className = 'assistant-stream-cursor';
    p.appendChild(textNode);
    p.appendChild(cursor);
    parentEl.appendChild(p);

    // Natural token streaming: character-by-character for CJK, word-by-word for western languages
    const isCJK = locale === 'zh' || locale === 'ja';
    const tokens = isCJK
      ? (text.match(/[\u4e00-\u9fa5\u3040-\u30ff\u3400-\u4dbf]|[a-zA-Z0-9_]+|[^\s\w]/g) || Array.from(text))
      : text.split(' ');
    const joiner = isCJK ? '' : ' ';

    for (let i = 0; i < tokens.length; i++) {
      if (ticket !== activeTicket) return false;
      if (isPaused) {
        const ok = await waitWhilePaused(ticket);
        if (!ok) return false;
      }
      textNode.textContent += (i > 0 && joiner ? joiner : '') + tokens[i];
      await sleep(isCJK ? 20 : 28);
    }
    cursor.remove();
    return true;
  }

  async function runCycle() {
    const ticket = ++activeTicket;
    const scenario = scenarios[currentIndex];

    // 1. Reset prompt and retrieval bar
    promptTextEl.textContent = '';
    if (retrievalBar) retrievalBar.classList.add('hidden');

    // 2. Type question
    const typed = await typeString(promptTextEl, scenario.query, 24, ticket);
    if (!typed) return;

    await sleep(350);
    if (ticket !== activeTicket) return;

    // 3. Simulate enter press
    if (shortcutBtn) shortcutBtn.classList.add('active');
    await sleep(180);
    if (shortcutBtn) shortcutBtn.classList.remove('active');
    if (ticket !== activeTicket) return;

    // 4. Localized Retrieval Steps
    if (retrievalBar && retrievalText) {
      retrievalText.textContent = labels.searching.replace('{query}', scenario.searchQuery);
      retrievalBar.classList.remove('hidden');
      await sleep(750);
      if (ticket !== activeTicket) return;

      retrievalText.textContent = labels.reading.replace('{doc}', scenario.readingDoc);
      await sleep(650);
      if (ticket !== activeTicket) return;

      retrievalBar.classList.add('hidden');
      await sleep(150);
    }

    // 5. Stream Response
    bubbleContent.innerHTML = '';
    if (citationsBar) citationsBar.classList.add('hidden');

    const streamed = await streamTextParagraph(bubbleContent, scenario.introText, ticket);
    if (!streamed) return;

    // 6. Optional Code Block
    if (scenario.codeBlock) {
      await sleep(200);
      if (ticket !== activeTicket) return;

      const codeBlockEl = document.createElement('div');
      codeBlockEl.className = 'assistant-code-block';
      codeBlockEl.innerHTML = `
        <div class="assistant-code-header">
          <span class="assistant-code-lang">${scenario.codeBlock.lang}</span>
          <button class="assistant-code-copy" type="button" onclick="copyCodeBlock(this, '${labels.copied}')" aria-label="Copy code">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
            <span>${labels.copy}</span>
          </button>
        </div>
        <pre class="assistant-code-pre"><code>${scenario.codeBlock.code}</code></pre>
      `;
      bubbleContent.appendChild(codeBlockEl);
    }

    // 7. Optional Outro Text
    if (scenario.outroText) {
      await sleep(150);
      if (ticket !== activeTicket) return;
      const outroP = document.createElement('p');
      outroP.className = 'assistant-bubble-text';
      outroP.textContent = scenario.outroText;
      bubbleContent.appendChild(outroP);
    }

    // 8. Localized Citations
    if (citationsBar && scenario.citations) {
      citationsBar.innerHTML = `<span class="assistant-citations-label">${labels.sources}</span> ` +
        scenario.citations.map(c => `<a href="${c.url}" target="_blank" rel="noopener" class="assistant-citation-tag"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg> ${c.name}</a>`).join(' ');
      citationsBar.classList.remove('hidden');
    }

    // 9. Read time pause before next cycle
    await sleep(4600);
    if (ticket !== activeTicket) return;
    await waitWhilePaused(ticket);
    if (ticket !== activeTicket) return;

    // Advance to next scenario
    currentIndex = (currentIndex + 1) % scenarios.length;
    runCycle();
  }

  // Allow initial static slide (already rendered in active locale) to be read before animating to slide 2
  setTimeout(() => {
    currentIndex = 1;
    runCycle();
  }, 3800);
}

/* --- Developer Integration Code Tabs --- */
function initAssistantCodeTabs() {
  const featCards = document.querySelectorAll('.assistant-dev-section .api-feat-card');
  const panes = document.querySelectorAll('.dev-code-body .dev-code-pane');
  if (!panes.length) return;

  const fileMap = {
    'tab-plugin': 'docmd.config.json',
    'tab-node': 'assistant-engine.ts',
    'tab-tools': 'register-tools.ts',
    'tab-config': 'docmd.config.json',
    'tab-engine': 'register-tools.ts'
  };

  function activateTab(tabTarget) {
    let targetFile = '';
    featCards.forEach(c => {
      const isMatch = c.getAttribute('data-tab') === tabTarget;
      c.classList.toggle('active', isMatch);
      if (isMatch) {
        targetFile = c.getAttribute('data-file') || c.querySelector('h4')?.textContent.trim();
      }
    });
    panes.forEach(p => {
      const isMatch = p.id === tabTarget;
      p.classList.toggle('active', isMatch);
      if (isMatch && !targetFile) {
        targetFile = p.getAttribute('data-file');
      }
    });

    const finalTitle = targetFile || fileMap[tabTarget] || 'docmd.config.json';
    const titleEls = document.querySelectorAll('.assistant-dev-section .dev-code-title, #assistant-active-file');
    titleEls.forEach(el => {
      el.textContent = finalTitle;
    });
  }

  featCards.forEach(card => {
    card.addEventListener('click', () => {
      const tabTarget = card.getAttribute('data-tab');
      if (tabTarget) activateTab(tabTarget);
    });
  });

  window.switchAssistantTab = activateTab;
}

/* --- Developer Code Window Copy Handler --- */
function initCodeWindowCopy() {
  document.querySelectorAll('.dev-code-window .btn-copy-code').forEach(btn => {
    btn.addEventListener('click', async () => {
      const windowFrame = btn.closest('.dev-code-window');
      if (!windowFrame) return;

      const pre = windowFrame.querySelector('.dev-code-pane.active pre') || windowFrame.querySelector('pre');
      if (!pre) return;

      const codeText = pre.innerText || pre.textContent;

      try {
        await navigator.clipboard.writeText(codeText.trim());
        const originalHtml = btn.innerHTML;
        btn.classList.add('copied');
        btn.innerHTML = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polyline points="20 6 9 17 4 12"/></svg> Copied!`;

        setTimeout(() => {
          btn.classList.remove('copied');
          btn.innerHTML = originalHtml;
        }, 2000);
      } catch (err) {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = codeText.trim();
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);

        const originalHtml = btn.innerHTML;
        btn.classList.add('copied');
        btn.innerHTML = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polyline points="20 6 9 17 4 12"/></svg> Copied!`;

        setTimeout(() => {
          btn.classList.remove('copied');
          btn.innerHTML = originalHtml;
        }, 2000);
      }
    });
  });
}