---
title: "Build production-ready documentation from Markdown in seconds"
description: "The zero-config documentation engine that starts instantly and scales with you, fast, SEO-friendly, and AI-ready by default."
titleAppend: false
noStyle: true
keywords: 
  - "static site generator"
  - "documentation generator"
  - "markdown to html"
  - "nodejs ssg"
  - "docmd"
  - "open source documentation"
components:
  meta: true
  favicon: true
  scripts: false
  css: false
  theme: false
seo:
  ldJson:
    "@context": "https://schema.org"
    "@type": "SoftwareApplication"
    name: "docmd"
    operatingSystem: "Any"
    applicationCategory: "DeveloperApplication"
    url: "https://docmd.io"
    description: "The zero-config documentation engine that starts instantly and scales with you, fast, SEO-friendly, and AI-ready by default."
    creator:
      "@type": "Person"
      name: "Ghazi"
      sameAs:
        - "https://github.com/mgks"
        - "https://mgks.dev"
    codeRepository: "https://github.com/docmd-io/docmd"
    releaseNotes: "https://github.com/docmd-io/docmd/releases"
    programmingLanguage: "Node.js"
    installUrl: "https://www.npmjs.com/package/@docmd/core"
customHead: |
  <link rel="stylesheet" href="/assets/css/style.css">
  <link rel="apple-touch-icon" href="/assets/images/apple-touch-icon.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono&display=swap" rel="stylesheet">
---

<!-- ─── Navigation ─── -->
<nav class="nav">
  <div class="nav-pill">
    <div class="nav-left">
      <a href="/" class="nav-logo" aria-label="docmd home">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line></svg>
          docmd
      </a>
    </div>
    <div class="nav-center">
      <a href="https://docs.docmd.io" class="nav-link" data-i18n="nav.docs">Documentation</a>
      <a href="https://docs.docmd.io/plugins/usage/" class="nav-link" data-i18n="nav.plugins">Plugins</a>
      <a href="https://docs.docmd.io/comparison" class="nav-link" data-i18n="nav.compare">Compare</a>
      <a href="https://live.docmd.io" class="nav-link" data-i18n="nav.editor">Editor</a>
    </div>
    <div class="nav-right">
      <a href="https://github.com/docmd-io/docmd" class="icon-btn" aria-label="GitHub">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
      </a>
      <div class="lang-switcher" id="lang-switcher">
        <button class="icon-btn" id="lang-toggle" aria-label="Switch language">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
        </button>
        <div class="lang-dropdown" id="lang-dropdown">
          <a class="lang-option active" href="/" data-lang="en">English</a>
          <a class="lang-option" href="/de/" data-lang="de">Deutsch</a>
          <a class="lang-option" href="/zh/" data-lang="zh">中文</a>
        </div>
      </div>
      <button class="icon-btn" id="theme-toggle" aria-label="Toggle theme">
        <span class="theme-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg></span>
      </button>
    </div>
  </div>
</nav>
<!-- ─── Hero ─── -->
<header class="hero">
  <div class="container">
    <a href="https://www.npmjs.com/package/@docmd/core" target="_blank" rel="noopener" class="hero-badge">
      <span class="badge-dot"></span>
      <span id="npm-version">v0.7.0</span>
      <span data-i18n="hero.badge">Now Available</span>
    </a>
    <h1 data-i18n="hero.title">Markdown to production docs.<br>One command. Zero config.</h1>
    <p class="hero-sub" data-i18n="hero.sub">Static HTML for SEO. SPA-speed navigation. AI-ready by default.<br>No React. No framework lock-in. No learning curve.</p>
    <div class="hero-actions">
      <a href="https://docs.docmd.io/getting-started/installation" class="btn-primary" data-i18n="hero.cta">Get Started</a>
      <button class="btn-code" onclick="copyCmd()">
        <span class="dollar">$</span>
        npm i @docmd/core
        <span class="copy-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
        </span>
      </button>
    </div>
    <div class="hero-metrics">
      <span class="metric-badge" data-i18n="hero.metric.js">~18kb JS</span>
      <span class="metric-badge" data-i18n="hero.metric.perf">Lighthouse 100</span>
      <span class="metric-badge" data-i18n="hero.metric.config">Zero config</span>
      <span class="metric-badge" data-i18n="hero.metric.search">Offline search</span>
    </div>
  </div>
</header>
<!-- ─── Preview ─── -->
<section class="preview-section">
  <div class="container">
    <div class="window">
      <div class="window-bar">
        <span class="window-dot red"></span>
        <span class="window-dot yellow"></span>
        <span class="window-dot green"></span>
        <span class="window-title">docs.docmd.io</span>
      </div>
      <div class="window-body">
        <video class="preview-video" muted loop playsinline preload="none" poster="/assets/images/preview.webp" data-src="/assets/videos/preview.webm">
        </video>
      </div>
    </div>
  </div>
</section>
<!-- ─── Features ─── -->
<section class="features">
  <div class="container">
    <!-- Feature 1: Zero Config -->
    <div class="feature">
      <div class="feature-text">
        <div class="feature-label" data-i18n="feature.zeroconfig.label">Getting Started</div>
        <h2 data-i18n="feature.zeroconfig.title">Zero config to start. Full control when you need it.</h2>
        <p class="feature-desc" data-i18n="feature.zeroconfig.desc">Run one command. Get a production docs site. Customize later with a simple config file — no boilerplate, no framework lock-in.</p>
        <ul class="feature-list">
          <li data-i18n="feature.zeroconfig.li1">Single command setup with npx docmd init</li>
          <li data-i18n="feature.zeroconfig.li2">Optional docmd.config.js for full customization</li>
          <li data-i18n="feature.zeroconfig.li3">Works with any existing markdown structure</li>
        </ul>
        <a href="https://docs.docmd.io/getting-started/installation" class="feature-link" data-i18n="feature.zeroconfig.link">Installation guide →</a>
      </div>
      <div class="feature-visual">
        <div class="window">
          <div class="window-bar">
            <span class="window-dot red"></span>
            <span class="window-dot yellow"></span>
            <span class="window-dot green"></span>
            <span class="window-title">Terminal</span>
          </div>
          <div class="window-body"><pre><span class="cmd">$</span> npx docmd dev
<span class="success">✓</span> Found 12 markdown files
<span class="success">✓</span> Built in 340ms
<span class="success">✓</span> Search index ready
  <span class="highlight">→ http://localhost:3000</span></pre></div>
        </div>
      </div>
    </div>
    <!-- Feature 2: Markdown Containers — rendered mockups -->
    <div class="feature reverse">
      <div class="feature-text">
        <div class="feature-label" data-i18n="feature.containers.label">Content</div>
        <h2 data-i18n="feature.containers.title">Rich layouts without HTML.</h2>
        <p class="feature-desc" data-i18n="feature.containers.desc">Write callouts, tabs, cards, and more using native Markdown container syntax. Complex layouts, zero HTML required.</p>
        <ul class="feature-list">
          <li data-i18n="feature.containers.li1">Callouts, warnings, and info boxes</li>
          <li data-i18n="feature.containers.li2">Tabbed content with syntax highlighting</li>
          <li data-i18n="feature.containers.li3">Card grids and layout containers</li>
          <li data-i18n="feature.containers.li4">Icon support in all container types</li>
        </ul>
        <a href="https://docs.docmd.io/content/containers/" class="feature-link" data-i18n="feature.containers.link">Container docs →</a>
      </div>
      <div class="feature-visual">
        <div class="feature-visual-stack">
          <!-- Rendered callout -->
          <div class="demo-callout">
            <div class="demo-callout-title">⚠️ Warning</div>
            <p>Be careful with this setting. It affects all deployments.</p>
          </div>
          <div class="demo-callout info">
            <div class="demo-callout-title">ℹ️ Note</div>
            <p>This feature requires docmd v0.7.0 or later.</p>
          </div>
          <!-- Rendered tabs -->
          <div style="border:1px solid var(--border); border-radius:var(--r-sm); overflow:hidden;">
            <div class="demo-tabs-bar">
              <div class="demo-tab active">JavaScript</div>
              <div class="demo-tab">Python</div>
              <div class="demo-tab">Go</div>
            </div>
            <div class="demo-tab-content">npm install @docmd/core</div>
          </div>
          <!-- Rendered cards -->
          <div class="demo-cards">
            <div class="demo-card">
              <div class="demo-card-title">Quick Start</div>
              <div class="demo-card-desc">Get running in under 2 minutes</div>
            </div>
            <div class="demo-card">
              <div class="demo-card-title">Configuration</div>
              <div class="demo-card-desc">Customize every aspect</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Feature 3: Search — search dialog mockup -->
    <div class="feature">
      <div class="feature-text">
        <div class="feature-label" data-i18n="feature.search.label">Search</div>
        <h2 data-i18n="feature.search.title">Instant search. Zero API keys. 100% offline.</h2>
        <p class="feature-desc" data-i18n="feature.search.desc">Full-text fuzzy search built into every site. No cloud dependencies, no API costs. Works completely offline with per-locale indexes for multilingual docs.</p>
        <ul class="feature-list">
          <li data-i18n="feature.search.li1">Fuzzy matching across all content</li>
          <li data-i18n="feature.search.li2">Keyboard shortcut ⌘K to open</li>
          <li data-i18n="feature.search.li3">Per-locale search indexes for i18n</li>
        </ul>
        <a href="https://docs.docmd.io/plugins/search/" class="feature-link" data-i18n="feature.search.link">Search plugin docs →</a>
      </div>
      <div class="feature-visual">
        <div class="demo-search">
          <div class="demo-search-input">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
            <span>Search documentation...</span>
            <kbd>⌘K</kbd>
          </div>
          <div class="demo-search-results">
            <div class="demo-result">
              <span class="demo-result-title">Installation Guide</span>
              <span class="demo-result-path">/getting-started</span>
            </div>
            <div class="demo-result">
              <span class="demo-result-title">Configuration Reference</span>
              <span class="demo-result-path">/configuration</span>
            </div>
            <div class="demo-result">
              <span class="demo-result-title">CLI Commands</span>
              <span class="demo-result-path">/cli-commands</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Feature 4: Themes + i18n — visual preview -->
    <div class="feature reverse">
      <div class="feature-text">
        <div class="feature-label" data-i18n="feature.extras.label">Production Ready</div>
        <h2 data-i18n="feature.extras.title">Themes, i18n, versioning, and one-command deploy.</h2>
        <p class="feature-desc" data-i18n="feature.extras.desc">Everything you need for production — light and dark themes, multi-language support, version switching, and deployment configs for Docker, Nginx, and Caddy.</p>
        <ul class="feature-list">
          <li data-i18n="feature.extras.li1">Native i18n with locale-first URLs</li>
          <li data-i18n="feature.extras.li2">Light &amp; dark themes with custom CSS</li>
          <li data-i18n="feature.extras.li3">Multi-version documentation support</li>
          <li data-i18n="feature.extras.li4">docmd deploy generates production configs</li>
        </ul>
        <a href="https://docs.docmd.io/configuration/general" class="feature-link" data-i18n="feature.extras.link">Configuration docs →</a>
      </div>
      <div class="feature-visual">
        <div class="feature-visual-stack">
          <div class="demo-themes">
            <div class="demo-theme-card light">
              <div class="demo-theme-title">Light</div>
              <div class="demo-theme-bar" style="width:80%"></div>
              <div class="demo-theme-bar accent"></div>
              <div class="demo-theme-bar" style="width:60%"></div>
              <div class="demo-theme-bar" style="width:90%"></div>
            </div>
            <div class="demo-theme-card dark">
              <div class="demo-theme-title">Dark</div>
              <div class="demo-theme-bar" style="width:80%"></div>
              <div class="demo-theme-bar accent"></div>
              <div class="demo-theme-bar" style="width:60%"></div>
              <div class="demo-theme-bar" style="width:90%"></div>
            </div>
          </div>
          <div class="window">
            <div class="window-bar">
              <span class="window-dot red"></span>
              <span class="window-dot yellow"></span>
              <span class="window-dot green"></span>
              <span class="window-title">Terminal</span>
            </div>
            <div class="window-body"><pre><span class="cmd">$</span> docmd deploy docker
<span class="success">✓</span> Generated Dockerfile
<span class="success">✓</span> Generated nginx.conf
  <span class="highlight">→ docker build -t docs .</span></pre></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- ─── Built For ─── -->
<section class="built-for">
  <div class="container">
    <h2 data-i18n="built.title">Built for every documentation need.</h2>
    <p class="section-sub" data-i18n="built.desc">From open-source READMEs to enterprise knowledge bases.</p>
    <div class="built-for-grid">
      <div class="built-for-card">
        <div class="built-for-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/></svg></div>
        <h3>Developer Docs</h3>
        <p>API references, guides, and tutorials for your open-source project or product.</p>
      </div>
      <div class="built-for-card">
        <div class="built-for-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"/></svg></div>
        <h3>Knowledge Bases</h3>
        <p>Internal wikis, team documentation, and onboarding guides with search and versioning.</p>
      </div>
      <div class="built-for-card">
        <div class="built-for-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20v2"/><path d="M12 2v2"/><path d="M17 20v2"/><path d="M17 2v2"/><path d="M7 20v2"/><path d="M7 2v2"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg></div>
        <h3>API References</h3>
        <p>Structured endpoint documentation with code examples, tabs, and syntax highlighting.</p>
      </div>
      <div class="built-for-card">
        <div class="built-for-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg></div>
        <h3>Technical Guides</h3>
        <p>Step-by-step tutorials with callouts, warnings, and multi-language code examples.</p>
      </div>
      <div class="built-for-card">
        <div class="built-for-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg></div>
        <h3>Multilingual Sites</h3>
        <p>Documentation in every language with locale-first URLs and per-locale search.</p>
      </div>
      <div class="built-for-card">
        <div class="built-for-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M12 7v5l4 2"></path></svg></div>
        <h3>Changelogs</h3>
        <p>Beautiful release timelines with version history and structured release notes.</p>
      </div>
    </div>
  </div>
</section>

<!-- ─── Plugins ─── -->
<section class="plugins-section">
  <div class="container">
    <h2 data-i18n="plugins.title">Everything included.</h2>
    <p class="section-sub" data-i18n="plugins.desc">Core plugins ship by default. Add optional ones when you need them.</p>
    <div class="plugins-row">
      <a href="https://docs.docmd.io/plugins/search/" class="plugin-tag included" data-i18n="plugins.search">Search</a>
      <a href="https://docs.docmd.io/plugins/seo/" class="plugin-tag included" data-i18n="plugins.seo">SEO</a>
      <a href="https://docs.docmd.io/plugins/sitemap/" class="plugin-tag included" data-i18n="plugins.sitemap">Sitemap</a>
      <a href="https://docs.docmd.io/plugins/analytics/" class="plugin-tag included" data-i18n="plugins.analytics">Analytics</a>
      <a href="https://docs.docmd.io/plugins/llms/" class="plugin-tag included" data-i18n="plugins.llms">LLMs</a>
      <a href="https://docs.docmd.io/plugins/mermaid/" class="plugin-tag included" data-i18n="plugins.mermaid">Mermaid</a>
    </div>
    <div class="plugins-row">
      <a href="https://docs.docmd.io/plugins/pwa/" class="plugin-tag optional">+ PWA</a>
      <a href="https://docs.docmd.io/plugins/threads/" class="plugin-tag optional">+ Threads</a>
      <a href="https://docs.docmd.io/plugins/math/" class="plugin-tag optional">+ Math (KaTeX)</a>
    </div>
  </div>
</section>

<!-- ─── FAQ ─── -->
<section class="faq-section">
  <div class="container">
    <h2 data-i18n="faq.title">Frequently asked questions</h2>
    <p class="section-sub" data-i18n="faq.sub">Quick answers to common questions about docmd.</p>
    <details class="faq-item">
      <summary data-i18n="faq.q1">What is docmd?</summary>
      <div class="faq-answer" data-i18n-html="faq.a1">docmd is an open-source, zero-config documentation engine that converts Markdown files into production-ready documentation sites. It generates static HTML for SEO while providing SPA-like navigation for speed. <a href="https://docs.docmd.io/getting-started/quick-start">Read the quick start guide →</a></div>
    </details>
    <details class="faq-item">
      <summary data-i18n="faq.q2">How is it different from Docusaurus or VitePress?</summary>
      <div class="faq-answer" data-i18n-html="faq.a2">docmd requires zero configuration — no React, no Vue, no framework knowledge. It produces standalone HTML with &lt;20kb client JS, scores Lighthouse 100, and includes search, SEO, AI context (llms.txt), and i18n without setup. <a href="https://docs.docmd.io/comparison">See the full comparison →</a></div>
    </details>
    <details class="faq-item">
      <summary data-i18n="faq.q3">Do I need React or any framework?</summary>
      <div class="faq-answer" data-i18n="faq.a3">No. docmd is framework-free. You write Markdown, run one command, and get a production site. Plain HTML + minimal vanilla JS. No bundlers, no framework lock-in.</div>
    </details>
    <details class="faq-item">
      <summary data-i18n="faq.q4">How does the AI-ready feature work?</summary>
      <div class="faq-answer" data-i18n-html="faq.a4">docmd auto-generates llms.txt and llms-full.txt files that give AI models structured context about your docs. Combined with semantic HTML containers, AI agents navigate your documentation with high fidelity. <a href="https://docs.docmd.io/plugins/usage/">Learn about the LLMs plugin →</a></div>
    </details>
    <details class="faq-item">
      <summary data-i18n="faq.q5">Is docmd free?</summary>
      <div class="faq-answer" data-i18n-html="faq.a5">Yes. Completely free and open source under MIT License. All core plugins are included by default. <a href="https://github.com/docmd-io/docmd">View on GitHub →</a></div>
    </details>
    <details class="faq-item">
      <summary data-i18n="faq.q6">Can I use it with my existing Markdown files?</summary>
      <div class="faq-answer" data-i18n-html="faq.a6">Yes. Point docmd at any directory of Markdown files. It supports standard Markdown, frontmatter, and adds container syntax (callouts, tabs, cards) on top. <a href="https://docs.docmd.io/content/markdown-syntax/">Markdown syntax reference →</a></div>
    </details>
    <details class="faq-item">
      <summary data-i18n="faq.q7">Does docmd support multiple languages?</summary>
      <div class="faq-answer" data-i18n-html="faq.a7">Yes. Native i18n with locale-first URLs, per-locale search indexes, and translated UI strings. Configure with a simple locales array. <a href="https://docs.docmd.io/configuration/general">i18n configuration →</a></div>
    </details>
  </div>
</section>

<!-- ─── Ask AI ─── -->
<section class="ask-section">
  <div class="container">
    <h2 data-i18n="ask.title">Still deciding?</h2>
    <p class="section-sub" data-i18n="ask.sub">Ask your favorite AI about docmd, or read the docs yourself.</p>
    <div class="ask-links">
      <a href="https://chatgpt.com/?q=How%20does%20docmd%20(docmd.io)%20compare%20to%20Docusaurus%2C%20VitePress%2C%20MkDocs%2C%20and%20Mintlify%3F%20Zero-config%20Markdown-to-docs%20with%20%3C20kb%20JS%2C%20Lighthouse%20100%2C%20built-in%20search%2C%20SEO%2C%20i18n.%20Context%3A%20https%3A%2F%2Fdocs.docmd.io%2Fllms.txt" target="_blank" rel="noopener" class="ask-link">Ask ChatGPT</a>
      <a href="https://claude.ai/new?q=How%20does%20docmd%20(docmd.io)%20compare%20to%20Docusaurus%2C%20VitePress%2C%20MkDocs%2C%20and%20Mintlify%3F%20Zero-config%20Markdown-to-docs%20with%20%3C20kb%20JS%2C%20Lighthouse%20100%2C%20built-in%20search%2C%20SEO%2C%20i18n.%20Context%3A%20https%3A%2F%2Fdocs.docmd.io%2Fllms.txt" target="_blank" rel="noopener" class="ask-link">Ask Claude</a>
      <a href="https://www.google.com/search?q=docmd.io+documentation+generator+vs+Docusaurus+VitePress+MkDocs+Mintlify" target="_blank" rel="noopener" class="ask-link">Ask Gemini</a>
      <a href="https://perplexity.ai/?q=How%20does%20docmd%20(docmd.io)%20compare%20to%20Docusaurus%2C%20VitePress%2C%20MkDocs%2C%20and%20Mintlify%3F%20Zero-config%20Markdown-to-docs%20with%20%3C20kb%20JS%2C%20Lighthouse%20100%2C%20built-in%20search%2C%20SEO%2C%20i18n.%20Context%3A%20https%3A%2F%2Fdocs.docmd.io%2Fllms.txt" target="_blank" rel="noopener" class="ask-link">Ask Perplexity</a>
      <a href="https://docs.docmd.io/llms.txt" target="_blank" rel="noopener" class="ask-link">Read llms.txt</a>
    </div>
  </div>
</section>

<!-- ─── CTA ─── -->
<section class="cta-section">
  <div class="container">
    <h2 data-i18n="cta.title">Ready to write better docs?</h2>
    <p class="section-sub" data-i18n="cta.desc">Join the developers building fast, beautiful documentation with docmd.</p>
    <div class="cta-actions">
      <a href="https://docs.docmd.io" class="btn-primary" data-i18n="cta.docs">Read the Documentation</a>
      <a href="https://github.com/docmd-io/docmd" class="btn-secondary" data-i18n="cta.github">Star on GitHub</a>
    </div>
  </div>
</section>

<!-- ─── Sponsors ─── -->
<section class="sponsors-section">
  <div class="container">
    <h3 data-i18n="sponsors.title">Community Sponsors</h3>
    <div id="sponsors-grid" class="sponsors-grid"></div>
  </div>
</section>

<!-- ─── Footer ─── -->
<footer class="footer">
  <div class="container footer-inner">
    <div class="footer-brand">
      <a href="/" class="nav-logo" aria-label="docmd">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line></svg>
        docmd
      </a>
      <p data-i18n-html="footer.tagline">The zero-config documentation engine.<br>Open source under MIT License.</p>
    </div>
    <div class="footer-col">
      <h4 data-i18n="footer.product">Product</h4>
      <a href="https://docs.docmd.io/getting-started/installation" data-i18n="footer.installation">Installation</a>
      <a href="https://docs.docmd.io/configuration/general" data-i18n="footer.configuration">Configuration</a>
      <a href="https://docs.docmd.io/cli-commands" data-i18n="footer.cli">CLI Reference</a>
      <a href="https://docs.docmd.io/comparison" data-i18n="footer.comparisons">Comparisons</a>
    </div>
    <div class="footer-col">
      <h4 data-i18n="footer.features">Features</h4>
      <a href="https://docs.docmd.io/content/containers/" data-i18n="footer.containers">UI Containers</a>
      <a href="https://docs.docmd.io/theming/available-themes/" data-i18n="footer.theming">Theming</a>
      <a href="https://docs.docmd.io/plugins/usage/" data-i18n="footer.plugins">Plugins</a>
      <a href="https://docs.docmd.io/api/node-api/" data-i18n="footer.api">API Resources</a>
    </div>
    <div class="footer-col">
      <h4 data-i18n="footer.ecosystem">Ecosystem</h4>
      <a href="https://github.com/docmd-io/docmd">GitHub</a>
      <a href="https://live.docmd.io" data-i18n="footer.liveEditor">Live Editor</a>
      <a href="https://github.com/docmd-io/docmd/releases" data-i18n="footer.releases">Releases</a>
      <a href="https://github.com/sponsors/mgks" data-i18n="footer.sponsor">Sponsor</a>
    </div>
  </div>
  <div class="footer-bottom">
    <span>2026 © docmd.io</span>
    <span>MIT License</span>
  </div>
</footer>
<script src="/assets/js/script.js"></script>