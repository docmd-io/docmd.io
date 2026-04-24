document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLangSwitcher();
  loadSponsors();
  fetchLatestVersion();
  initLazyVideos();
});

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
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
          viewBox="0 0 24 24" fill="none" stroke="currentColor"
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/>
        </svg>
        `
        : `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
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

/* --- Language Switcher --- */
function initLangSwitcher() {
  const toggle = document.getElementById('lang-toggle');
  const dropdown = document.getElementById('lang-dropdown');
  if (!toggle || !dropdown) return;

  // Detect current locale from URL path
  const pathSegment = window.location.pathname.split('/').filter(Boolean)[0] || '';
  const langOptions = Array.from(dropdown.querySelectorAll('.lang-option'));
  const currentLocale = langOptions.some(btn => btn.dataset.lang === pathSegment)
    ? pathSegment
    : 'en';

  // Mark the active option
  dropdown.querySelectorAll('.lang-option').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLocale);
  });

  // Toggle dropdown
  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('active');
  });

  // Close dropdown on outside click
  document.addEventListener('click', () => {
    dropdown.classList.remove('active');
  });
}

/* --- Sponsors --- */
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
    console.warn('Could not fetch sponsors', e);
    grid.innerHTML = `
            <a href="https://github.com/${githubUsername}" target="_blank" class="sp-img" style="background-image:url(https://github.com/${githubUsername}.png)" title="${githubUsername}"></a>
            ${addSponsorBtn}
        `;
  }
}

/* --- Copy Command --- */
window.copyCmd = function () {
  navigator.clipboard.writeText('npm i @docmd/core');

  const icon = document.querySelector('.copy-icon');
  if (!icon) return;

  icon.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
      viewBox="0 0 24 24" fill="none" stroke="#16a34a"
      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 6 9 17l-5-5"/>
    </svg>
  `;

  setTimeout(() => {
    icon.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
        viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
      </svg>
    `;
  }, 2000);
};

/* --- Version Fetcher --- */
async function fetchLatestVersion() {
  const badge = document.getElementById('npm-version');
  if (!badge) return;

  try {
    const res = await fetch('https://registry.npmjs.org/@docmd/core/latest');
    if (res.ok) {
      const data = await res.json();
      if (data.version) {
        badge.innerText = 'v' + data.version;
      }
    }
  } catch (e) {
    console.warn('Failed to fetch version', e);
  }
}

/* --- Lazy Video Loader --- */
function initLazyVideos() {
  const videos = document.querySelectorAll('video[data-src]');
  
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const video = entry.target;
          video.src = video.dataset.src;
          video.load();
          video.removeAttribute('data-src');
          
          // Play when ready
          video.play().catch(e => {
            console.warn("Autoplay prevented:", e);
          });
          
          observer.unobserve(video);
        }
      });
    }, { rootMargin: '0px 0px 200px 0px' });

    videos.forEach(video => {
      observer.observe(video);
    });
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    videos.forEach(video => {
      video.src = video.dataset.src;
      video.load();
      video.play().catch(e => {});
    });
  }
}