---
title: "docmd – Documentation for Humans and Machines"
description: "Open-source documentation compiler. One Markdown source, one command – generates website, search, AI context, agent protocols, and knowledge formats together."
titleAppend: false
noStyle: true
keywords: 
  - "documentation compiler"
  - "markdown to html"
  - "static site generator"
  - "open source docs"
  - "docmd"
  - "documentation engine"
  - "markdown documentation tool"
  - "zero config docs"
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
    description: "docmd is an open-source documentation compiler. One Markdown source, one command – generates website, search index, AI context, MCP agent endpoints, and knowledge formats together."
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
  <link rel="manifest" href="/assets/manifest.json">
  <meta property="og:site_name" content="docmd">
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "docmd",
    "url": "https://docmd.io",
    "description": "Open-source documentation compiler. One Markdown source, one command – generates website, search, AI context, agent protocols, and knowledge formats together.",
    "publisher": {
      "@type": "Organization",
      "name": "docmd",
      "url": "https://docmd.io"
    }
  }
  </script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
---

<nav class="nav" aria-label="Main navigation">
  <div class="nav-pill">
    <div class="nav-left">
      <a href="/" class="nav-logo" aria-label="docmd home">
        <span class="nav-logo-icon">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line></svg>
        </span>
        docmd
      </a>
    </div>
    <div class="nav-center">
      <a href="/assistant/" class="nav-link" data-i18n="nav.assistant">AI Assistant</a>
      <a href="/search/" class="nav-link" data-i18n="nav.search">Semantic Search</a>
      <a href="https://live.docmd.io" class="nav-link" data-i18n="nav.editor" target="_blank">Live Editor</a>
      <a href="https://cloud.docmd.io" class="nav-link nav-link--cloud" target="_blank"><span data-i18n="nav.cloud">Cloud</span><span class="nav-badge-free">Free</span></a>
      <span class="nav-divider"></span>
      <a href="https://docs.docmd.io/" class="nav-link" data-i18n="nav.docs">Documentation</a>
      <a href="https://docs.docmd.io/comparison/" class="nav-link" data-i18n="nav.compare">Comparison</a>
      <span class="nav-divider"></span>
    </div>
    <button class="nav-dropdown-toggle" aria-label="Toggle menu">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="nav-dropdown-menu">
      <a href="/assistant/" class="nav-link" data-i18n="nav.assistant">AI Assistant</a>
      <a href="/search/" class="nav-link" data-i18n="nav.search">Semantic Search</a>
      <a href="https://live.docmd.io" class="nav-link" data-i18n="nav.editor" target="_blank">Live Editor</a>
      <a href="https://cloud.docmd.io" class="nav-link nav-link--cloud" target="_blank"><span data-i18n="nav.cloud">Cloud</span><span class="nav-badge-free">Free</span></a>
      <span class="nav-divider"></span>
      <a href="https://docs.docmd.io/" class="nav-link" data-i18n="nav.docs">Documentation</a>
      <a href="https://docs.docmd.io/comparison/" class="nav-link" data-i18n="nav.compare">Comparison</a>
      <span class="nav-divider"></span>
      <a href="https://github.com/sponsors/docmd-io" class="nav-link nav-link-sponsor" target="_blank" rel="noopener">
        <svg class="nav-sponsor-heart" viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
        <span data-i18n="nav.sponsor">Sponsor</span>
      </a>
    </div>
    <div class="nav-right">
      <a href="https://github.com/sponsors/docmd-io" class="nav-sponsor-btn" target="_blank" rel="noopener" aria-label="Sponsor docmd on GitHub">
        <svg class="nav-sponsor-heart" viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
        <span class="nav-sponsor-text" data-i18n="nav.sponsor">Sponsor</span>
      </a>
      <a href="https://github.com/docmd-io/docmd" class="icon-btn" aria-label="GitHub" target="_blank" rel="noopener">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
      </a>
      <div class="lang-switcher" id="lang-switcher">
        <button class="icon-btn" id="lang-toggle" aria-label="Switch language">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
        </button>
        <div class="lang-dropdown" id="lang-dropdown">
          <a class="lang-option active" href="/" data-lang="en">
            <svg class="lang-flag" width="16" height="12" viewBox="0 0 60 30"><path fill="#012169" d="M0 0h60v30H0z"/><path stroke="#fff" stroke-width="6" d="m0 0 60 30m0-30L0 30"/><path stroke="#C8102E" stroke-width="4" d="m0 0 60 30m0-30L0 30"/><path stroke="#fff" stroke-width="10" d="M30 0v30M0 15h60"/><path stroke="#C8102E" stroke-width="6" d="M30 0v30M0 15h60"/></svg>
            English
          </a>
          <a class="lang-option" href="/de/" data-lang="de">
            <svg class="lang-flag" width="16" height="12" viewBox="0 0 5 3"><rect width="5" height="3" fill="#000"/><rect width="5" height="2" y="1" fill="#D00"/><rect width="5" height="1" y="2" fill="#FFCE00"/></svg>
            Deutsch
          </a>
          <a class="lang-option" href="/zh/" data-lang="zh">
            <svg class="lang-flag" width="16" height="12" viewBox="0 0 30 20"><path fill="#de2910" d="M0 0h30v20H0z"/><path fill="#ffde00" d="M6 2 4.4 6.8 8.6 3.8H3.4l4.2 3L6 2zm6 1-1.3 2 .8-2.3h1.1L12 4.3l.6-1.3zm3 2-1.3 2 .8-2.3h1.1L15 6.3l.6-1.3zm1 4-1.3 2 .8-2.3h1.1L16 10.3l.6-1.3zm-2 3-1.3 2 .8-2.3h1.1L14 13.3l.6-1.3z"/></svg>
            中文
          </a>
          <a class="lang-option" href="/es/" data-lang="es">
            <svg class="lang-flag" width="16" height="12" viewBox="0 0 750 500"><rect width="750" height="500" fill="#c60b1e"/><rect width="750" height="250" y="125" fill="#ffc400"/></svg>
            Español
          </a>
          <a class="lang-option" href="/ja/" data-lang="ja">
            <svg class="lang-flag" width="16" height="12" viewBox="0 0 900 600"><rect width="900" height="600" fill="#fff"/><circle cx="450" cy="300" r="180" fill="#bc002d"/></svg>
            日本語
          </a>
          <a class="lang-option" href="/fr/" data-lang="fr">
            <svg class="lang-flag" width="16" height="12" viewBox="0 0 3 2"><rect width="1" height="2" fill="#002395"/><rect width="1" height="2" x="1" fill="#fff"/><rect width="1" height="2" x="2" fill="#ed2939"/></svg>
            Français
          </a>
          <a class="lang-option" href="/ru/" data-lang="ru">
            <svg class="lang-flag" width="16" height="12" viewBox="0 0 9 6"><rect width="9" height="6" fill="#fff"/><rect width="9" height="4" y="2" fill="#0039a6"/><rect width="9" height="2" y="4" fill="#d52b1e"/></svg>
            Русский
          </a>
        </div>
      </div>
      <button class="icon-btn" id="theme-toggle" aria-label="Toggle theme">
        <span class="theme-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg></span>
      </button>
    </div>
  </div>
</nav>
<main>
<header class="hero" role="banner">
  <div class="hero-ambient-glow"></div>
  <div class="hero-bg-grid">
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="hero-grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" class="grid-line" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hero-grid-pattern)" />
      <path d="M 120 80 H 360" class="moving-dot dot-1" />
      <path d="M 640 160 H 960" class="moving-dot dot-2" />
      <path d="M 280 240 H 520" class="moving-dot dot-3" />
      <path d="M 800 320 H 1160" class="moving-dot dot-4" />
      <path d="M 40 400 H 320" class="moving-dot dot-5" />
      <path d="M 1040 120 H 1360" class="moving-dot dot-6" />
      <path d="M 240 40 V 280" class="moving-dot dot-7" />
      <path d="M 560 120 V 400" class="moving-dot dot-8" />
      <path d="M 880 80 V 320" class="moving-dot dot-9" />
      <path d="M 400 200 V 480" class="moving-dot dot-10" />
      <path d="M 1200 160 V 440" class="moving-dot dot-11" />
      <path d="M 1440 80 V 360" class="moving-dot dot-12" />
    </svg>
  </div>
  <div class="container">
    <a href="https://github.com/docmd-io/docmd" target="_blank" rel="noopener" class="hero-badge">
      <span class="badge-dot"></span>
      <span class="badge-version" id="npm-version"><span class="badge-pkg-name">docmd</span><span class="badge-ver-num">v0.9.6</span></span>
      <span class="badge-divider" aria-hidden="true"></span>
      <span class="badge-downloads" id="npm-downloads">
        <span class="badge-dl-text">2.5M+</span>
        <span class="badge-dl-label">installs</span>
      </span>
      <span class="badge-arrow" aria-hidden="true">→</span>
    </a>
    <h1 data-i18n="hero.title">Documentation for humans<br>and <span class="gradient-text">machines.</span></h1>
    <p class="hero-sub" data-i18n="hero.sub">The open source documentation compiler. One Markdown source, one command – generates website, search, AI context, agent protocols, and knowledge formats together.</p>
    <div class="hero-actions">
      <a href="https://docs.docmd.io/getting-started/installation/" class="btn-primary" data-i18n="hero.cta">Get Started</a>
      <button class="btn-code" onclick="copyCmd(this)" data-cmd="npx @docmd/core dev">
        <span class="dollar">$</span>
        npx @docmd/core dev
      </button>
    </div>
    <div class="metrics-strip">
      <div class="metric-item">
        <div class="metric-val">&lt; 300ms</div>
        <div class="metric-lbl" data-i18n="hero.metric.speed">Build Speed</div>
      </div>
      <div class="metric-item">
        <div class="metric-val">0 MB</div>
        <div class="metric-lbl" data-i18n="hero.metric.runtime">Framework Runtime</div>
      </div>
      <div class="metric-item">
        <div class="metric-val">100/100</div>
        <div class="metric-lbl" data-i18n="hero.metric.perf">Lighthouse Score</div>
      </div>
      <div class="metric-item">
        <div class="metric-val">100%</div>
        <div class="metric-lbl" data-i18n="hero.metric.oss">Open Source (MIT)</div>
      </div>
    </div>
    <div class="hero-visual">
      <div class="terminal-window">
        <div class="terminal-header">
          <div class="terminal-dots">
            <span class="terminal-dot red"></span>
            <span class="terminal-dot yellow"></span>
            <span class="terminal-dot green"></span>
          </div>
          <span class="terminal-title">docmd-compiler – zsh</span>
          <span class="terminal-badge">240ms</span>
        </div>
        <div class="terminal-body">
          <pre><span class="cmd-line"><span class="cmd">$</span> <span class="cmd-highlight">npx @docmd/core dev</span></span>

<span class="comment"># Initialising docmd compiler in /docs...</span>
<span class="success">✓</span> Discovered 16 Markdown source files
<span class="success">✓</span> Generated static HTML + client-side vector search index
<span class="success">✓</span> Exported llms.txt, llms-full.txt &amp; OKF graph bundles
<span class="success">✓</span> Built production documentation in 240ms – Lighthouse 100/100
→ Dev server running at <span style="color:var(--accent);">http://localhost:3000</span> <span class="term-cursor"></span></pre>
        </div>
      </div>
    </div>
  </div>
</header>
<section class="bento-section" aria-label="Features">
  <div class="container">
    <div class="section-header">
      <div class="section-tag" data-i18n="bento.tag">Why docmd</div>
      <h2 class="section-title" data-i18n="bento.title">Everything works out of the box.</h2>
      <p class="section-sub" data-i18n="bento.sub">Search, SEO, themes, and AI tooling built in. Add only what you need.</p>
    </div>
    <div class="bento-grid">
      <div class="bento-card col-span-2">
        <div>
          <div class="bento-header">
            <div class="bento-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            </div>
            <h3 data-i18n="bento.card1.title">Write Markdown, Get a Website</h3>
          </div>
          <p data-i18n="bento.card1.desc">Point docmd at any folder of Markdown files. It builds a complete documentation site instantly – with navigation, hot-reloading, and zero configuration needed.</p>
        </div>
        <div class="bento-code-box">
          <span style="color:var(--accent);">$</span> docmd build --offline<br>
          ✓ Generated 12 pages in 340ms (Lighthouse 100)
        </div>
      </div>
      <div class="bento-card">
        <div>
          <div class="bento-header">
            <div class="bento-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2"/></svg>
            </div>
            <h3 data-i18n="bento.card2.title">Native AI Agent Support</h3>
          </div>
          <p data-i18n="bento.card2.desc">Expose your docs to AI coding assistants like Claude, Cursor, and Windsurf through a built-in MCP server and auto-generated context files.</p>
        </div>
        <div class="bento-code-box">docmd mcp – Ready for Claude &amp; Cursor</div>
      </div>
      <div class="bento-card">
        <div>
          <div class="bento-header">
            <div class="bento-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </div>
            <h3 data-i18n="bento.card3.title">Built-in Search, Zero Cloud Costs</h3>
          </div>
          <p data-i18n="bento.card3.desc">Semantic and keyword search compiled at build time into local index files. Runs entirely in the browser – no cloud APIs, no hosting costs.</p>
        </div>
        <div class="bento-code-box">Press <kbd style="background:var(--border); padding:2px 6px; border-radius:4px;">⌘K</kbd> to search docs</div>
      </div>
      <div class="bento-card col-span-2">
        <div>
          <div class="bento-header">
            <div class="bento-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
            </div>
            <h3 data-i18n="bento.card4.title">Rich Content from Plain Markdown</h3>
          </div>
          <p data-i18n="bento.card4.desc">Write callouts, tabbed code blocks, warning boxes, cards, and diagrams using simple Markdown syntax. No HTML or JSX needed.</p>
        </div>
        <div class="bento-code-box">::: callout info<br>Native Markdown callouts &amp; tabs!<br>:::</div>
      </div>
    </div>
  </div>
</section>
<section class="plugins-section" aria-label="Plugin ecosystem">
  <div class="container">
    <div class="section-header">
      <div class="section-tag" data-i18n="plugins.tag">Modular Ecosystem</div>
      <h2 class="section-title" data-i18n="plugins.title">Modular plugin ecosystem</h2>
      <p class="section-sub" data-i18n="plugins.sub">Each plugin works out of the box with zero configuration. Enable only what you need.</p>
    </div>
    <div class="plugins-grid">
      <div class="plugin-card">
        <span class="plugin-badge">@docmd/plugin-search</span>
        <h4 data-i18n="plugins.item.search.title">Offline Vector Search</h4>
        <p data-i18n="plugins.item.search.desc">Semantic and keyword search that runs entirely in the browser.</p>
      </div>
      <div class="plugin-card">
        <span class="plugin-badge">@docmd/plugin-mcp</span>
        <h4 data-i18n="plugins.item.mcp.title">MCP Server</h4>
        <p data-i18n="plugins.item.mcp.desc">Let AI coding assistants search and read your docs directly.</p>
      </div>
      <div class="plugin-card">
        <span class="plugin-badge">@docmd/plugin-ai</span>
        <h4 data-i18n="plugins.item.ai.title">AI Assistant</h4>
        <p data-i18n="plugins.item.ai.desc">AI assistant that answers questions using your documentation as context.</p>
      </div>
      <div class="plugin-card">
        <span class="plugin-badge">@docmd/plugin-llms</span>
        <h4 data-i18n="plugins.item.llms.title">AI Context Generator</h4>
        <p data-i18n-html="plugins.item.llms.desc">Auto-generate llms.txt, llms-full.txt, and SKILL.md for AI tools.</p>
      </div>
      <div class="plugin-card">
        <span class="plugin-badge">@docmd/plugin-openapi</span>
        <h4 data-i18n="plugins.item.openapi.title">OpenAPI &amp; Swagger Docs</h4>
        <p data-i18n="plugins.item.openapi.desc">Generate interactive API reference pages from OpenAPI spec files.</p>
      </div>
      <div class="plugin-card">
        <span class="plugin-badge">@docmd/plugin-seo</span>
        <h4 data-i18n="plugins.item.seo.title">SEO &amp; Schema JSON-LD</h4>
        <p data-i18n="plugins.item.seo.desc">Sitemaps, meta tags, and structured data for search engine visibility.</p>
      </div>
      <div class="plugin-card">
        <span class="plugin-badge">@docmd/plugin-math</span>
        <h4 data-i18n="plugins.item.math.title">KaTeX Maths</h4>
        <p data-i18n="plugins.item.math.desc">Render LaTeX mathematical expressions with lightweight KaTeX.</p>
      </div>
      <div class="plugin-card">
        <span class="plugin-badge">@docmd/plugin-mermaid</span>
        <h4 data-i18n="plugins.item.mermaid.title">Mermaid Diagrams</h4>
        <p data-i18n="plugins.item.mermaid.desc">Flowcharts, sequence diagrams, and architecture maps from Markdown.</p>
      </div>
    </div>
    <div class="plugins-mobile-wrap">
      <a href="https://docs.docmd.io/plugins/" target="_blank" rel="noopener" class="plugins-mobile-cta">
        <span data-i18n="plugins.mobile.cta">Explore all 8 modular plugins</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
    </div>
  </div>
</section>
<section class="agent-stack-section" aria-label="AI & Agent Knowledge Stack">
  <div class="container">
    <div class="section-header">
      <div class="section-tag" data-i18n="ai.tag">AI &amp; Open Ecosystem</div>
      <h2 class="section-title" data-i18n="ai.title">Built for autonomous AI coding agents.</h2>
      <p class="section-sub" data-i18n="ai.sub">Expose your documentation to Claude, Cursor, Windsurf, and custom LLMs through open machine-readable standards.</p>
    </div>
    <div class="agent-stack-grid">
      <div class="agent-card">
        <div>
          <span class="agent-card-tag" data-i18n="ai.card1.tag">Model Context Protocol</span>
          <h3 data-i18n="ai.card1.title">Native MCP Server</h3>
          <p data-i18n="ai.card1.desc">Allows Claude Desktop, Cursor, and Windsurf to search, inspect, and read your docs directly over stdio or SSE.</p>
        </div>
        <div class="agent-code-box">$ npx @docmd/plugin-mcp</div>
      </div>
      <div class="agent-card">
        <div>
          <span class="agent-card-tag" data-i18n="ai.card2.tag">Standard Feeds</span>
          <h3 data-i18n="ai.card2.title">llms.txt &amp; llms-full.txt</h3>
          <p data-i18n="ai.card2.desc">Generates standard LLM feeds so any language model can ingest your full documentation in one request without web scraping.</p>
        </div>
        <div class="agent-code-box">Exported /site/llms.txt</div>
      </div>
      <div class="agent-card">
        <div>
          <span class="agent-card-tag" data-i18n="ai.card3.tag">Agent Actions</span>
          <h3 data-i18n="ai.card3.title">Agent Skills (SKILL.md)</h3>
          <p data-i18n="ai.card3.desc">Packages actionable CLI workflows, architecture rules, and code patterns into discoverable skill files for coding agents.</p>
        </div>
        <div class="agent-code-box">$ npx docmd-skills</div>
      </div>
      <div class="agent-card">
        <div>
          <span class="agent-card-tag" data-i18n="ai.card4.tag">Knowledge Graph</span>
          <h3 data-i18n="ai.card4.title">Open Knowledge (okf.yaml)</h3>
          <p data-i18n="ai.card4.desc">Compiles docs into machine-readable ontology tags, concept graphs, and semantic bundles for multi-agent workflows.</p>
        </div>
        <div class="agent-code-box">Exported okf.yaml bundle</div>
      </div>
    </div>
    <div class="agent-prompts-bar">
      <span class="agent-prompts-label" data-i18n="ai.prompts.label">Write documentation with your favourite AI assistant:</span>
      <div class="agent-prompts-links">
        <a href="https://claude.ai/new?q=Read%20https%3A%2F%2Fdocs.docmd.io%2Fllms.txt%20then%20help%20me%20write%20documentation%20using%20docmd." target="_blank" rel="noopener" class="agent-prompt-btn">Claude</a>
        <a href="https://chatgpt.com/?q=Read%20https%3A%2F%2Fdocs.docmd.io%2Fllms.txt%20then%20help%20me%20write%20documentation%20using%20docmd." target="_blank" rel="noopener" class="agent-prompt-btn">ChatGPT</a>
        <a href="https://gemini.google.com/app?q=Read%20https%3A%2F%2Fdocs.docmd.io%2Fllms.txt%20then%20help%20me%20write%20documentation%20using%20docmd." target="_blank" rel="noopener" class="agent-prompt-btn">Gemini</a>
        <a href="https://chat.deepseek.com/?q=Read%20https%3A%2F%2Fdocs.docmd.io%2Fllms.txt%20then%20help%20me%20write%20documentation%20using%20docmd." target="_blank" rel="noopener" class="agent-prompt-btn">DeepSeek</a>
      </div>
    </div>
  </div>
</section>
<section class="cloud-relay-section" aria-label="docmd Cloud Relay">
  <div class="container">
    <div class="cloud-relay-container">
      <div class="relay-halo-glow" aria-hidden="true"></div>
      <div class="cloud-relay-card">
        <div class="relay-card-left">
        <div class="relay-live-tracker" aria-label="Live Relay Telemetry">
          <span class="tracker-status-dot"></span>
          <span class="tracker-title">docmd Cloud</span>
          <span class="tracker-sep">·</span>
          <span class="tracker-stat"><span id="tracker-rps" class="tracker-num">492</span> <span data-i18n="relay.stat.qpm_unit">queries/min</span></span>
          <span class="tracker-sep">·</span>
          <span class="tracker-stat"><span id="tracker-lat" class="tracker-num">3.4ms</span></span>
          <span class="tracker-badge"><span id="tracker-uptime">99.9%</span> <span data-i18n="relay.stat.uptime_unit">uptime</span></span>
        </div>
        <h2 class="relay-title" data-i18n-html="relay.title">Add AI assistant capabilities to your docs with free docmd Cloud Relay</h2>
        <p class="relay-desc" data-i18n="relay.desc">Connect in seconds with GitHub. Get real-time search analytics, uncover missing documentation gaps, and proxy AI assistant queries securely.</p>
        <ul class="relay-points">
          <li>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
            <span data-i18n-html="relay.point1">AI Assistant Proxy – BYOK routing for 100+ LLMs without exposing API keys.</span>
          </li>
          <li>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
            <span data-i18n-html="relay.point2">Documentation Analytics – Discover top queries, volume trends, and content gaps.</span>
          </li>
          <li>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
            <span data-i18n-html="relay.point3">Free &amp; Serverless – Connect in seconds via GitHub with zero maintenance.</span>
          </li>
        </ul>
        <div class="relay-actions">
          <a href="https://cloud.docmd.io" target="_blank" rel="noopener" class="btn-primary" data-i18n="relay.cta">Sign up for Cloud Relay →</a>
          <a href="https://docs.docmd.io/guides/ai/ai-assistant/" class="btn-secondary" data-i18n="relay.docs">View Documentation</a>
        </div>
      </div>
      <div class="relay-card-right">
        <div class="relay-console-frame">
          <div class="relay-console-header">
            <div class="relay-console-tabs">
              <span class="relay-tab active" data-i18n="relay.tab.usage">Relay Request Usage</span>
              <span class="relay-tab" data-i18n="relay.tab.queries">Live Queries</span>
            </div>
            <div class="relay-console-status">
              <span class="tracker-status-dot"></span>
              <span data-i18n="relay.stat.connected">CONNECTED</span>
            </div>
          </div>
          <div class="relay-stream-body">
            <div class="relay-analytics-bar">
              <div class="analytics-stat">
                <span class="analytics-val">48</span>
                <span class="analytics-lbl" data-i18n="relay.stat.qpm">Queries / min</span>
              </div>
              <div class="analytics-stat">
                <span class="analytics-val">18.4k</span>
                <span class="analytics-lbl" data-i18n="relay.stat.total">30d Total</span>
              </div>
              <div class="analytics-stat">
                <span class="analytics-val" style="color:var(--accent);">3.4ms</span>
                <span class="analytics-lbl" data-i18n="relay.stat.latency">Avg latency</span>
              </div>
              <div class="analytics-stat">
                <span class="analytics-val" style="color:#10b981;">99.9%</span>
                <span class="analytics-lbl" data-i18n="relay.stat.uptime">Uptime</span>
              </div>
            </div>
            <div class="relay-graph-card">
              <div class="relay-graph-header">
                <span class="relay-graph-title" data-i18n="relay.stat.graph_title">Relay Request Usage</span>
                <div class="relay-time-filters">
                  <span class="relay-filter">24h</span>
                  <span class="relay-filter">7d</span>
                  <span class="relay-filter active">30d</span>
                </div>
              </div>
              <div class="relay-graph-svg-wrap">
                <svg viewBox="0 0 440 70" preserveAspectRatio="none">
                  <line x1="0" y1="20" x2="440" y2="20" stroke="currentColor" stroke-opacity="0.07" stroke-dasharray="3 3"/>
                  <line x1="0" y1="45" x2="440" y2="45" stroke="currentColor" stroke-opacity="0.07" stroke-dasharray="3 3"/>
                  <rect class="relay-bar" x="8" y="44" width="16" height="24" rx="2"/>
                  <rect class="relay-bar" x="34" y="38" width="16" height="30" rx="2"/>
                  <rect class="relay-bar" x="60" y="42" width="16" height="26" rx="2"/>
                  <rect class="relay-bar" x="86" y="32" width="16" height="36" rx="2"/>
                  <rect class="relay-bar" x="112" y="36" width="16" height="32" rx="2"/>
                  <rect class="relay-bar" x="138" y="28" width="16" height="40" rx="2"/>
                  <rect class="relay-bar" x="164" y="24" width="16" height="44" rx="2"/>
                  <rect class="relay-bar" x="190" y="30" width="16" height="38" rx="2"/>
                  <rect class="relay-bar" x="216" y="22" width="16" height="46" rx="2"/>
                  <rect class="relay-bar" x="242" y="18" width="16" height="50" rx="2"/>
                  <rect class="relay-bar" x="268" y="25" width="16" height="43" rx="2"/>
                  <rect class="relay-bar" x="294" y="15" width="16" height="53" rx="2"/>
                  <rect class="relay-bar" x="320" y="12" width="16" height="56" rx="2"/>
                  <rect class="relay-bar" x="346" y="18" width="16" height="50" rx="2"/>
                  <rect class="relay-bar" x="372" y="8" width="16" height="60" rx="2"/>
                  <rect class="relay-bar peak" x="398" y="4" width="16" height="64" rx="2"/>
                </svg>
              </div>
              <div class="relay-graph-labels">
                <span data-i18n="relay.graph.label1">30 days ago</span>
                <span data-i18n="relay.graph.label2">15 days ago</span>
                <span style="color:var(--accent); font-weight:600;" data-i18n="relay.graph.peak">Peak: 1,842 req/day</span>
              </div>
            </div>
            <div class="relay-queries-list">
              <div class="relay-query-row">
                <span class="query-tag user" data-i18n="relay.query.tag.search">Search</span>
                <span class="query-text" data-i18n="relay.query.text1">"How do I deploy offline with file:// protocol?"</span>
                <span class="query-count" data-i18n="relay.query.count1">142 asks</span>
              </div>
              <div class="relay-query-row">
                <span class="query-tag agent" data-i18n="relay.query.tag.cursor">Cursor</span>
                <span class="query-text" data-i18n="relay.query.text2">"Where is the config schema for custom callouts?"</span>
                <span class="query-count" data-i18n="relay.query.count2">98 asks</span>
              </div>
              <div class="relay-query-row">
                <span class="query-tag missing" data-i18n="relay.query.tag.missing">Missing Doc</span>
                <span class="query-text" data-i18n="relay.query.text3">"How to migrate from MkDocs Material"</span>
                <span class="query-badge-alert" data-i18n="relay.query.badge.needs">Needs page</span>
              </div>
            </div>
          </div>
          <div class="relay-stream-summary">
            <span data-i18n-html="relay.stream.proxy">AI Proxy: Active (BYOK)</span>
            <span data-i18n-html="relay.stream.status">Status: Operational</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</section>
<script>
(() => {
  const rpsEl = document.getElementById('tracker-rps');
  const latEl = document.getElementById('tracker-lat');
  const uptimeEl = document.getElementById('tracker-uptime');
  if (!rpsEl) return;

  let currentRpm = 450 + Math.floor(Math.random() * 101);
  rpsEl.textContent = currentRpm;

  function tickTelemetry() {
    // Continuous organic variation (-14 to +14) with soft boundary clamping
    const drift = Math.floor((Math.random() - 0.48) * 28);
    currentRpm += drift;

    if (currentRpm < 450 || currentRpm > 550) {
      currentRpm = 450 + Math.floor(Math.random() * 101);
    }
    rpsEl.textContent = currentRpm;

    if (latEl) {
      const lat = (2.9 + Math.random() * 1.2).toFixed(1);
      latEl.textContent = lat + 'ms';
    }
    if (uptimeEl) {
      uptimeEl.textContent = '99.9%';
    }

    // Dynamic arrival interval (1800ms - 2800ms) matching live socket traffic
    const nextInterval = 1800 + Math.floor(Math.random() * 1000);
    setTimeout(tickTelemetry, nextInterval);
  }

  setTimeout(tickTelemetry, 2200);
})();
</script>
<section class="philosophy-section" aria-label="Open Source Philosophy and Contributors">
  <div class="container">
    <div class="section-header">
      <div class="section-tag" data-i18n="oss.tag">OPEN SOURCE SOVEREIGNTY</div>
      <h2 class="section-title" data-i18n="oss.title">Built in the open. Owned by developers.</h2>
      <p class="section-sub" data-i18n="oss.sub">Documentation belongs in Git, not behind proprietary SaaS walled gardens.</p>
    </div>
    <div class="philosophy-manifesto">
      <div class="manifesto-badge">
        <span class="manifesto-badge-dot"></span>
        <span data-i18n="oss.manifesto.badge">OPEN SOURCE COMMITMENT</span>
      </div>
      <blockquote class="manifesto-quote" data-i18n="oss.manifesto.quote">“Your documentation is the intellectual heart of your project. It belongs as plain Markdown files in your Git repository – permanent, version-controlled, auditable, and free forever. docmd will always be 100% MIT licensed with zero paywalled compiler features.”</blockquote>
      <div class="manifesto-signoff" data-i18n="oss.manifesto.signoff">The docmd Open Source Manifesto</div>
    </div>
    <div class="tenets-grid">
      <div class="tenet-card">
        <div class="tenet-num" data-i18n="oss.tenet1.num">01 / SOVEREIGNTY</div>
        <h4 data-i18n="oss.tenet1.title">Data Sovereignty</h4>
        <p data-i18n="oss.tenet1.desc">Your documentation is plain Markdown in your Git repo. No proprietary databases or schemas. If you ever switch, you take all your content with you cleanly.</p>
      </div>
      <div class="tenet-card">
        <div class="tenet-num" data-i18n="oss.tenet2.num">02 / INDEPENDENCE</div>
        <h4 data-i18n="oss.tenet2.title">Zero Vendor Lock-in</h4>
        <p data-i18n="oss.tenet2.desc">Compile to standard static HTML. Host on any static cloud or CDN for $0. Zero monthly fees, zero runtime dependencies, zero surprises.</p>
      </div>
      <div class="tenet-card">
        <div class="tenet-num" data-i18n="oss.tenet3.num">03 / OPENNESS</div>
        <h4 data-i18n="oss.tenet3.title">Permissive MIT License</h4>
        <p data-i18n="oss.tenet3.desc">Free for personal, open-source, and commercial use. Built by engineers who believe documentation infrastructure should be open to all.</p>
      </div>
    </div>
    <div class="community-showcase">
      <div class="community-header">
        <div class="community-header-left">
          <span class="community-pill" data-i18n="community.pill">ECOSYSTEM &amp; COMMUNITY</span>
          <h3 class="community-title" data-i18n="community.title">Built together with the open source community</h3>
          <p class="community-sub" data-i18n="community.sub">Powered by independent developers, code contributors, and sponsors around the world.</p>
        </div>
        <div class="community-header-actions">
          <a href="https://github.com/docmd-io/docmd" target="_blank" rel="noopener" class="btn-community-gh">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            <span data-i18n="community.btn.github">Contribute on GitHub</span>
          </a>
          <a href="https://github.com/sponsors/mgks" target="_blank" rel="noopener" class="btn-community-sponsor">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            <span data-i18n="community.btn.sponsor">Become a Sponsor</span>
          </a>
        </div>
      </div>
      <div class="community-subpanel">
        <div class="subpanel-title">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          <span data-i18n="community.contributors.title">Code Contributors</span>
        </div>
        <div id="contributors-grid" class="contributors-grid">
          <a href="https://github.com/mgks" target="_blank" rel="noopener" class="contributor-item" title="mgks · 2448 contributions">
            <div class="contributor-avatar" style="background-image:url(https://avatars.githubusercontent.com/u/5517406?v=4)"></div>
            <span class="contributor-name">mgks</span>
            <span class="contributor-handle">@mgks</span>
          </a>
          <a href="https://github.com/svallory" target="_blank" rel="noopener" class="contributor-item" title="svallory · 16 contributions">
            <div class="contributor-avatar" style="background-image:url(https://avatars.githubusercontent.com/u/117560?v=4)"></div>
            <span class="contributor-name">svallory</span>
            <span class="contributor-handle">@svallory</span>
          </a>
          <a href="https://github.com/sinsombat" target="_blank" rel="noopener" class="contributor-item" title="sinsombat · 10 contributions">
            <div class="contributor-avatar" style="background-image:url(https://avatars.githubusercontent.com/u/32062005?v=4)"></div>
            <span class="contributor-name">sinsombat</span>
            <span class="contributor-handle">@sinsombat</span>
          </a>
          <a href="https://github.com/yuciferr" target="_blank" rel="noopener" class="contributor-item" title="yuciferr · 6 contributions">
            <div class="contributor-avatar" style="background-image:url(https://avatars.githubusercontent.com/u/94411717?v=4)"></div>
            <span class="contributor-name">yuciferr</span>
            <span class="contributor-handle">@yuciferr</span>
          </a>
          <a href="https://github.com/tonidy" target="_blank" rel="noopener" class="contributor-item" title="tonidy · 4 contributions">
            <div class="contributor-avatar" style="background-image:url(https://avatars.githubusercontent.com/u/823034?v=4)"></div>
            <span class="contributor-name">tonidy</span>
            <span class="contributor-handle">@tonidy</span>
          </a>
          <a href="https://github.com/cdervis" target="_blank" rel="noopener" class="contributor-item" title="cdervis · 2 contributions">
            <div class="contributor-avatar" style="background-image:url(https://avatars.githubusercontent.com/u/198066854?v=4)"></div>
            <span class="contributor-name">cdervis</span>
            <span class="contributor-handle">@cdervis</span>
          </a>
          <a href="https://github.com/ghunteranderson" target="_blank" rel="noopener" class="contributor-item" title="ghunteranderson · 2 contributions">
            <div class="contributor-avatar" style="background-image:url(https://avatars.githubusercontent.com/u/10344028?v=4)"></div>
            <span class="contributor-name">ghunteranderson</span>
            <span class="contributor-handle">@ghunteranderson</span>
          </a>
          <a href="https://github.com/chocolatecake777" target="_blank" rel="noopener" class="contributor-item" title="chocolatecake777 · 2 contributions">
            <div class="contributor-avatar" style="background-image:url(https://avatars.githubusercontent.com/u/285001473?v=4)"></div>
            <span class="contributor-name">chocolatecake777</span>
            <span class="contributor-handle">@chocolatecake777</span>
          </a>
          <a href="https://github.com/MSOB7YY" target="_blank" rel="noopener" class="contributor-item" title="MSOB7YY · 1 contribution">
            <div class="contributor-avatar" style="background-image:url(https://avatars.githubusercontent.com/u/85245079?v=4)"></div>
            <span class="contributor-name">MSOB7YY</span>
            <span class="contributor-handle">@MSOB7YY</span>
          </a>
          <a href="https://github.com/w666" target="_blank" rel="noopener" class="contributor-item" title="w666 · 1 contribution">
            <div class="contributor-avatar" style="background-image:url(https://avatars.githubusercontent.com/u/2047943?v=4)"></div>
            <span class="contributor-name">w666</span>
            <span class="contributor-handle">@w666</span>
          </a>
          <a href="https://github.com/eeshsaxena" target="_blank" rel="noopener" class="contributor-item" title="eeshsaxena · 1 contribution">
            <div class="contributor-avatar" style="background-image:url(https://avatars.githubusercontent.com/u/139802361?v=4)"></div>
            <span class="contributor-name">eeshsaxena</span>
            <span class="contributor-handle">@eeshsaxena</span>
          </a>
        </div>
      </div>
      <div class="community-subpanel sponsors-subpanel">
        <div class="subpanel-title">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="color:#ec4899;"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
          <span data-i18n="community.sponsors.title">Community Sponsors &amp; Backers</span>
        </div>
        <div class="sponsors-wrapper">
          <div id="sponsors-grid" class="sponsors-grid"></div>
          <p class="sponsors-note" data-i18n="community.sponsors.note">Help keep docmd 100% free and open source. All sponsor funds directly support ongoing compiler performance, agent protocol standards, and serverless relay infrastructure.</p>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="faq-section" aria-label="Frequently asked questions">
  <div class="container">
    <h2 class="section-title" data-i18n="faq.title">Frequently asked questions</h2>
    <p class="section-sub" style="margin-bottom:28px; text-align:center;" data-i18n="faq.sub">Everything you need to know about docmd.</p>
    <details class="faq-item">
      <summary data-i18n="faq.q1">What is docmd?</summary>
      <div class="faq-answer" data-i18n-html="faq.a1">docmd is an open-source documentation compiler. You give it a folder of Markdown files, run one command, and it produces a website, search index, AI context, and knowledge formats – all together, no configuration needed.</div>
    </details>
    <details class="faq-item">
      <summary data-i18n="faq.q2">How is docmd different from Docusaurus, MkDocs, or Mintlify?</summary>
      <div class="faq-answer" data-i18n-html="faq.a2">docmd requires no configuration, no React, no Vue, and no framework knowledge. One command produces website, local vector search, llms.txt, OKF bundles, sitemap, SEO meta, and MCP server. The output is pure static HTML that works even offline via file://.</div>
    </details>
    <details class="faq-item">
      <summary data-i18n="faq.q3">Do I need React or any front-end framework?</summary>
      <div class="faq-answer" data-i18n="faq.a3">No. docmd is entirely framework-free. You write Markdown, run one command, and get a production-ready website. The output is plain HTML with minimal vanilla JavaScript.</div>
    </details>
    <details class="faq-item">
      <summary data-i18n="faq.q4">How does AI agent integration work?</summary>
      <div class="faq-answer" data-i18n-html="faq.a4">docmd includes a built-in MCP server that lets AI coding tools like Claude, Cursor, and Windsurf search and read your documentation directly. It also auto-generates llms.txt and SKILL.md files so any language model can understand your docs.</div>
    </details>
    <details class="faq-item">
      <summary data-i18n="faq.q8">What are Agent Skills (SKILL.md) and how do I install them?</summary>
      <div class="faq-answer" data-i18n-html="faq.a8">Agent Skills are instruction files that AI coding assistants (Claude, Cursor, Windsurf) can read to understand how to work with your project. Install official docmd skills into your workspace with: npx docmd-skills [target-directory]</div>
    </details>
  </div>
</section>
<section class="cta-section" aria-label="Get started">
  <div class="container">
    <div class="cta-card">
      <h2 data-i18n="cta.title">Start building in minutes</h2>
      <p class="section-sub" style="margin-bottom:28px;" data-i18n="cta.desc">Open source, MIT licensed. One command to your first documentation site, or experiment live in your browser.</p>
      <div class="cta-actions">
        <a href="https://docs.docmd.io" class="btn-primary" data-i18n="cta.docs">Read Documentation</a>
        <a href="https://live.docmd.io" target="_blank" rel="noopener" class="btn-secondary">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          <span data-i18n="cta.editor">Try Live Editor</span> ↗
        </a>
        <a href="https://github.com/docmd-io/docmd" class="btn-secondary" target="_blank" rel="noopener" data-i18n="cta.github">Star on GitHub</a>
      </div>
    </div>
  </div>
</section>
</main>
<footer class="footer">
  <div class="container footer-inner">
    <div class="footer-brand">
      <a href="/" class="nav-logo" aria-label="docmd">
        <span class="nav-logo-icon">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line></svg>
        </span>
        docmd
      </a>
      <p data-i18n-html="footer.tagline">Documentation for humans and machines.<br>Open source under MIT License.</p>
    </div>
    <div class="footer-col">
      <h4 data-i18n="footer.product">Product</h4>
      <a href="https://docs.docmd.io/getting-started/installation/" data-i18n="footer.installation">Installation</a>
      <a href="https://docs.docmd.io/configuration/overview/" data-i18n="footer.configuration">Configuration</a>
      <a href="https://docs.docmd.io/reference/cli-commands/" data-i18n="footer.cli">CLI Reference</a>
      <a href="/search/" data-i18n="footer.search">docmd Search</a>
      <a href="/assistant/" data-i18n="footer.assistant">docmd Assistant</a>
    </div>
    <div class="footer-col">
      <h4 data-i18n="footer.features">Features</h4>
      <a href="https://docs.docmd.io/content/containers/" data-i18n="footer.containers">UI Containers</a>
      <a href="https://docs.docmd.io/theming/available-themes/" data-i18n="footer.theming">Theming</a>
      <a href="https://docs.docmd.io/plugins/usage/" data-i18n="footer.plugins">Plugins</a>
      <a href="https://docs.docmd.io/content/markdown-syntax/" data-i18n="footer.syntax">Markdown Syntax</a>
      <a href="https://docs.docmd.io/guides/ai/overview/" data-i18n="footer.skills">Agent Skills &amp; MCP</a>
    </div>
    <div class="footer-col">
      <h4 data-i18n="footer.ecosystem">Ecosystem</h4>
      <a href="https://github.com/docmd-io/docmd">GitHub</a>
      <a href="https://github.com/sponsors/docmd-io" target="_blank" rel="noopener" data-i18n="footer.sponsor">Sponsor</a>
      <a href="https://cloud.docmd.io" data-i18n="footer.cloud">Cloud Relay</a>
      <a href="https://live.docmd.io" data-i18n="footer.liveEditor">Live Editor</a>
      <a href="https://github.com/docmd-io/docmd/releases" data-i18n="footer.releases">Releases</a>
      <a href="/terms/" data-i18n="footer.terms">Terms of Service</a>
      <a href="/privacy/" data-i18n="footer.privacy">Privacy Policy</a>
    </div>
  </div>
  <div class="footer-bottom">
    <span>2026 © docmd.io</span>
    <span data-i18n="footer.license">MIT License</span>
  </div>
</footer>
<script src="/assets/js/script.js"></script>