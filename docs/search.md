---
title: "docmd Search – Client-Side Vector and Keyword Search"
description: "Client-side vector and keyword search compiled at build time into local index files. Fast in-browser search with zero cloud dependencies."
titleAppend: false
noStyle: true
keywords: 
  - "offline search"
  - "semantic search"
  - "documentation search"
  - "browser search engine"
  - "docmd-search"
  - "private search"
  - "vector search docs"
components:
  meta: true
  favicon: true
  scripts: false
  css: false
  theme: false
customHead: |
  <link rel="stylesheet" href="/assets/css/style.css">
  <link rel="apple-touch-icon" href="/assets/images/apple-touch-icon.png">
  <link rel="manifest" href="/assets/manifest.json">
  <meta property="og:site_name" content="docmd">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">
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
      <a href="/search/" class="nav-link active active-search" data-i18n="nav.search">Semantic Search</a>
      <a href="https://live.docmd.io" class="nav-link" data-i18n="nav.editor" target="_blank">Live Editor</a>
      <a href="https://cloud.docmd.io" class="nav-link nav-link--cloud" target="_blank"><span data-i18n="nav.cloud">Cloud</span><span class="nav-badge-free">Free Relay</span></a>
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
      <a href="/search/" class="nav-link active active-search" data-i18n="nav.search">Semantic Search</a>
      <a href="https://live.docmd.io" class="nav-link" data-i18n="nav.editor" target="_blank">Live Editor</a>
      <a href="https://cloud.docmd.io" class="nav-link nav-link--cloud" target="_blank"><span data-i18n="nav.cloud">Cloud</span><span class="nav-badge-free">Free Relay</span></a>
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
          <a class="lang-option active" href="/search/" data-lang="en">
            <svg class="lang-flag" width="16" height="12" viewBox="0 0 60 30"><path fill="#012169" d="M0 0h60v30H0z"/><path stroke="#fff" stroke-width="6" d="m0 0 60 30m0-30L0 30"/><path stroke="#C8102E" stroke-width="4" d="m0 0 60 30m0-30L0 30"/><path stroke="#fff" stroke-width="10" d="M30 0v30M0 15h60"/><path stroke="#C8102E" stroke-width="6" d="M30 0v30M0 15h60"/></svg>
            English
          </a>
          <a class="lang-option" href="/de/search/" data-lang="de">
            <svg class="lang-flag" width="16" height="12" viewBox="0 0 5 3"><rect width="5" height="3" fill="#000"/><rect width="5" height="2" y="1" fill="#D00"/><rect width="5" height="1" y="2" fill="#FFCE00"/></svg>
            Deutsch
          </a>
          <a class="lang-option" href="/zh/search/" data-lang="zh">
            <svg class="lang-flag" width="16" height="12" viewBox="0 0 30 20"><path fill="#de2910" d="M0 0h30v20H0z"/><path fill="#ffde00" d="M6 2 4.4 6.8 8.6 3.8H3.4l4.2 3L6 2zm6 1-1.3 2 .8-2.3h1.1L12 4.3l.6-1.3zm3 2-1.3 2 .8-2.3h1.1L15 6.3l.6-1.3zm1 4-1.3 2 .8-2.3h1.1L16 10.3l.6-1.3zm-2 3-1.3 2 .8-2.3h1.1L14 13.3l.6-1.3z"/></svg>
            中文
          </a>
          <a class="lang-option" href="/es/search/" data-lang="es">
            <svg class="lang-flag" width="16" height="12" viewBox="0 0 750 500"><rect width="750" height="500" fill="#c60b1e"/><rect width="750" height="250" y="125" fill="#ffc400"/></svg>
            Español
          </a>
          <a class="lang-option" href="/ja/search/" data-lang="ja">
            <svg class="lang-flag" width="16" height="12" viewBox="0 0 900 600"><rect width="900" height="600" fill="#fff"/><circle cx="450" cy="300" r="180" fill="#bc002d"/></svg>
            日本語
          </a>
          <a class="lang-option" href="/fr/search/" data-lang="fr">
            <svg class="lang-flag" width="16" height="12" viewBox="0 0 3 2"><rect width="1" height="2" fill="#002395"/><rect width="1" height="2" x="1" fill="#fff"/><rect width="1" height="2" x="2" fill="#ed2939"/></svg>
            Français
          </a>
          <a class="lang-option" href="/ru/search/" data-lang="ru">
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
<main class="search-page">
<header class="hero search-hero">
  <div class="search-hero-glow"></div>
  <div class="search-bg-grid">
    <canvas id="search-vector-canvas" class="search-vector-canvas"></canvas>
  </div>
  <div class="container">
    <a href="https://github.com/docmd-io/docmd-search" target="_blank" rel="noopener" class="hero-badge search-badge">
      <span class="badge-dot" style="background:var(--search-accent);"></span>
      <span class="badge-version" id="npm-version-search"><span class="badge-pkg-name">docmd-search</span><span class="badge-ver-num">v0.1.5</span></span>
      <span class="badge-divider" aria-hidden="true"></span>
      <span class="badge-downloads" id="npm-downloads-search">
        <span class="badge-dl-text">186k+</span>
        <span class="badge-dl-label">installs</span>
      </span>
      <span class="badge-arrow" aria-hidden="true">→</span>
    </a>
    <h1 data-i18n="search.hero.title">Search that understands meaning.<br>Runs in the browser. <span class="gradient-text-search">Completely private.</span></h1>
    <p class="hero-sub" data-i18n="search.hero.sub">Offline semantic search for any documentation site. Understands meaning, runs entirely in the browser, and never sends data to the cloud.</p>
    <div class="hero-actions">
      <a href="https://docs.docmd.io/search/" class="btn-primary" style="background:var(--search-accent); color:#fff;" data-i18n="search.hero.cta">Get Started</a>
      <button class="btn-code" onclick="copyCmd(this)" data-cmd="npm install docmd-search">
        <span class="dollar" style="color:var(--search-accent);">$</span>
        npm install docmd-search
      </button>
    </div>
    <div class="hero-metrics">
      <span class="metric-badge">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" style="vertical-align:-1px; margin-right:4px;"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
        <span data-i18n="search.hero.metric.local">Local Vector Engine</span>
      </span>
      <span class="metric-badge">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" style="vertical-align:-1px; margin-right:4px;"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
        <span data-i18n="search.hero.metric.private">100% Private</span>
      </span>
      <span class="metric-badge">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" style="vertical-align:-1px; margin-right:4px;"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <span data-i18n="search.hero.metric.vector">Quantised Index</span>
      </span>
      <span class="metric-badge">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" style="vertical-align:-1px; margin-right:4px;"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
        <span data-i18n="search.hero.metric.cost">Zero Cloud Costs</span>
      </span>
    </div>
    <div class="search-live-palette" role="region" aria-label="Interactive Search Preview">
      <div class="palette-input-wrap">
        <div class="palette-search-icon" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
        </div>
        <div class="palette-input-box">
          <span class="palette-query-text" id="live-search-query" data-i18n="search.preview.q1">user authentication</span>
          <span class="palette-cursor" aria-hidden="true"></span>
        </div>
        <div class="palette-shortcut-badge" title="Keyboard shortcut">
          <kbd>⌘</kbd><kbd>K</kbd>
        </div>
      </div>

      <div class="palette-results-list" id="live-search-results" role="list">
        <div class="palette-result-card is-top-match" data-card-id="card-0" role="listitem">
          <div class="palette-result-header">
            <div class="palette-result-title-group">
              <div class="palette-result-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
              </div>
              <div>
                <div class="palette-result-title" data-i18n="search.preview.card1.title">User Authentication &amp; Sessions</div>
                <div class="palette-result-path">/getting-started/security</div>
              </div>
            </div>
            <span class="palette-score-badge high-score">
              <span class="score-num">98%</span> <span data-i18n="search.preview.match">match</span>
            </span>
          </div>
          <div class="palette-result-body" data-i18n-html="search.preview.card1.body">Configure how your application handles user login, secure cookies, token generation, and stateless session verification.</div>
        </div>
        <div class="palette-result-card" data-card-id="card-1" role="listitem">
          <div class="palette-result-header">
            <div class="palette-result-title-group">
              <div class="palette-result-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
              </div>
              <div>
                <div class="palette-result-title" data-i18n="search.preview.card2.title">OAuth &amp; Single Sign-On (SSO)</div>
                <div class="palette-result-path">/plugins/auth-providers</div>
              </div>
            </div>
            <span class="palette-score-badge high-score">
              <span class="score-num">92%</span> <span data-i18n="search.preview.match">match</span>
            </span>
          </div>
          <div class="palette-result-body" data-i18n-html="search.preview.card2.body">Authenticate documentation access through GitHub, Google, and enterprise OAuth SAML providers.</div>
        </div>
        <div class="palette-result-card" data-card-id="card-2" role="listitem">
          <div class="palette-result-header">
            <div class="palette-result-title-group">
              <div class="palette-result-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
              </div>
              <div>
                <div class="palette-result-title" data-i18n="search.preview.card3.title">Route Guards &amp; Private Docs</div>
                <div class="palette-result-path">/configuration/routing</div>
              </div>
            </div>
            <span class="palette-score-badge">
              <span class="score-num">86%</span> <span data-i18n="search.preview.match">match</span>
            </span>
          </div>
          <div class="palette-result-body" data-i18n-html="search.preview.card3.body">Define private directories and redirect configurations for unauthenticated guest sessions trying to access protected paths.</div>
        </div>
      </div>

      <div class="palette-footer">
        <div class="palette-footer-nav">
          <span class="palette-key-tip"><kbd>↑</kbd><kbd>↓</kbd> <span data-i18n="search.preview.nav.navigate">Navigate</span></span>
          <span class="palette-key-tip"><kbd>↵</kbd> <span data-i18n="search.preview.nav.select">Select</span></span>
          <span class="palette-key-tip"><kbd>ESC</kbd> <span data-i18n="search.preview.nav.clear">Clear</span></span>
        </div>
        <div class="palette-footer-stats" id="live-search-stats" data-i18n="search.preview.stats1">
          Cosine Similarity · 3 matches in 0.3ms · 100% Client-Side Vector
        </div>
      </div>
    </div>
  </div>
</header>
<section class="bento-section" aria-label="Features">
  <div class="container">
    <div class="section-header">
      <div class="section-tag" style="color:var(--search-accent);" data-i18n="search.tag.architecture">Architecture</div>
      <h2 class="section-title" data-i18n="search.features.title">How it works</h2>
      <p class="section-sub" data-i18n="search.features.sub">Smart search for static documentation, with no servers or third-party services required.</p>
    </div>
    <div class="bento-grid">
      <div class="bento-card">
        <div>
          <div class="bento-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <h3 data-i18n="search.feature.local.title">Runs Locally in the Browser</h3>
          <p data-i18n="search.feature.local.desc">Uses lightweight AI models that execute directly in the browser. No data ever leaves your users' devices.</p>
        </div>
        <div class="bento-code-box" data-i18n="search.feature.local.badge">Int8 Quantised Vectors · Zero Telemetry · &lt;3 KB Client</div>
      </div>
      <div class="bento-card">
        <div>
          <div class="bento-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>
          </div>
          <h3 data-i18n="search.feature.semantic.title">Understands What You Mean</h3>
          <p data-i18n="search.feature.semantic.desc">Goes beyond exact keyword matching. Searching for 'authentication' also finds results about 'sign-in', 'login', and 'sessions'.</p>
        </div>
        <div class="bento-code-box" data-i18n="search.feature.semantic.badge">Dense 384-Dim Embeddings · Cosine Similarity Re-ranker</div>
      </div>
      <div class="bento-card">
        <div>
          <div class="bento-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 3h5v5"/><path d="M4 20L21 3"/><path d="M21 16v5h-5"/><path d="M15 15l6 6"/><path d="M4 4l6 6"/></svg>
          </div>
          <h3 data-i18n="search.feature.hybrid.title">Hybrid Keyword + Semantic</h3>
          <p data-i18n="search.feature.hybrid.desc">Combines fast keyword matching with meaning-aware similarity scoring for the most relevant results, instantly.</p>
        </div>
        <div class="bento-code-box" data-i18n="search.feature.hybrid.badge">BM25 Lexical + Cosine Vector Fusion · Typo-Tolerant</div>
      </div>
    </div>
  </div>
</section>
<section class="search-compare-section" aria-label="Comparison">
  <div class="container">
    <div class="section-header">
      <div class="section-tag" style="color:var(--search-accent);" data-i18n="search.compare.tag">Comparison</div>
      <h2 class="section-title" data-i18n="search.compare.title">How docmd-search compares</h2>
      <p class="section-sub" data-i18n="search.compare.sub">Client-side AI vector search vs traditional cloud APIs and static keyword engines.</p>
    </div>
    <div class="compare-table-wrap">
      <table class="search-compare-table">
        <thead>
          <tr>
            <th class="col-feature" data-i18n="search.compare.col.feature">Capability</th>
            <th class="col-highlight" data-i18n="search.compare.col.docmd">docmd Search</th>
            <th data-i18n="search.compare.col.algolia">Algolia / Cloud Search</th>
            <th data-i18n="search.compare.col.pagefind">Pagefind / Lunr</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="feat-name" data-i18n="search.compare.row1.name">Semantic Understanding</div>
              <div class="feat-desc" data-i18n="search.compare.row1.desc">Finds concepts by meaning, not just exact keyword strings</div>
            </td>
            <td class="col-highlight"><span class="badge-pill success" data-i18n="search.compare.val.vector">Dense Vector AI</span></td>
            <td><span class="badge-pill neutral" data-i18n="search.compare.val.paidadd">NeuralSearch (Enterprise)</span></td>
            <td><span class="badge-pill alert" data-i18n="search.compare.val.none">Keyword / Lexical Only</span></td>
          </tr>
          <tr>
            <td>
              <div class="feat-name" data-i18n="search.compare.row2.name">Infrastructure &amp; Monthly Bill</div>
              <div class="feat-desc" data-i18n="search.compare.row2.desc">Ongoing hosting, vector DB, or API query subscription costs</div>
            </td>
            <td class="col-highlight"><span class="badge-pill success" data-i18n="search.compare.val.free">$0 / Forever Free</span></td>
            <td><span class="badge-pill alert" data-i18n="search.compare.val.expensive">Usage-Based / $$$ Contract</span></td>
            <td><span class="badge-pill neutral" data-i18n="search.compare.val.free">$0 / Forever Free</span></td>
          </tr>
          <tr>
            <td>
              <div class="feat-name" data-i18n="search.compare.row3.name">Offline &amp; Air-Gapped Operation</div>
              <div class="feat-desc" data-i18n="search.compare.row3.desc">Runs on intranets, offline PWA, local dev without internet</div>
            </td>
            <td class="col-highlight"><span class="badge-pill success" data-i18n="search.compare.val.offline">100% Offline</span></td>
            <td><span class="badge-pill alert" data-i18n="search.compare.val.internet">Requires Internet</span></td>
            <td><span class="badge-pill neutral" data-i18n="search.compare.val.offline">100% Offline</span></td>
          </tr>
          <tr>
            <td>
              <div class="feat-name" data-i18n="search.compare.row4.name">User Privacy &amp; Data Residency</div>
              <div class="feat-desc" data-i18n="search.compare.row4.desc">Where queries are processed and logged</div>
            </td>
            <td class="col-highlight"><span class="badge-pill success" data-i18n="search.compare.val.private">Zero Data Sent</span></td>
            <td><span class="badge-pill alert" data-i18n="search.compare.val.logged">Queries Logged to Cloud</span></td>
            <td><span class="badge-pill neutral" data-i18n="search.compare.val.private">Zero Data Sent</span></td>
          </tr>
          <tr>
            <td>
              <div class="feat-name" data-i18n="search.compare.row5.name">Search Latency</div>
              <div class="feat-desc" data-i18n="search.compare.row5.desc">Response speed per typed keystroke</div>
            </td>
            <td class="col-highlight"><span class="badge-pill success" data-i18n="search.compare.val.subms">&lt; 1ms (In-Memory)</span></td>
            <td><span class="badge-pill neutral" data-i18n="search.compare.val.network">50–250ms (Network)</span></td>
            <td><span class="badge-pill neutral" data-i18n="search.compare.val.fast">&lt; 5ms (In-Memory)</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
<section class="search-models-section" aria-label="Embeddings and Models">
  <div class="container">
    <div class="section-header">
      <div class="section-tag" style="color:var(--search-accent);" data-i18n="search.tag.embeddings">Embeddings</div>
      <h2 class="section-title" data-i18n="search.models.title">Choose your search model</h2>
      <p class="section-sub" data-i18n="search.models.sub">Pick the model that fits your documentation size and language requirements.</p>
    </div>
    <div class="model-table-container">
      <table class="model-spec-table">
        <thead>
          <tr>
            <th style="text-align: left;" data-i18n="search.models.th.model">Model</th>
            <th style="text-align: center;" data-i18n="search.models.th.dimensions">Dimensions</th>
            <th style="text-align: center;" data-i18n="search.models.th.size">Size</th>
            <th style="text-align: left;" data-i18n="search.models.th.languages">Languages</th>
            <th style="text-align: left;" data-i18n="search.models.th.bestfor">Best For</th>
          </tr>
        </thead>
        <tbody>
          <tr class="recommended-row">
            <td style="font-weight: 600; color: var(--text);">
              MiniLM L6 v2 <span class="badge-pill highlight" style="margin-left:6px;" data-i18n="search.models.badge.recommended">Recommended ★</span>
            </td>
            <td style="text-align: center; font-family: var(--mono); font-size: 0.8rem;">384</td>
            <td style="text-align: center; font-family: var(--mono); font-size: 0.8rem;">~23 MB</td>
            <td data-i18n="search.models.row1.lang">English only</td>
            <td data-i18n="search.models.row1.best">Fast, general English docs</td>
          </tr>
          <tr>
            <td style="font-weight: 600; color: var(--text);">Multilingual MiniLM L12</td>
            <td style="text-align: center; font-family: var(--mono); font-size: 0.8rem;">384</td>
            <td style="text-align: center; font-family: var(--mono); font-size: 0.8rem;">~118 MB</td>
            <td data-i18n="search.models.row2.lang">50+ languages</td>
            <td style="font-weight: 600; color: var(--search-accent);" data-i18n="search.models.row2.best">i18n documentation</td>
          </tr>
          <tr>
            <td style="font-weight: 600; color: var(--text);">Multilingual E5 Small</td>
            <td style="text-align: center; font-family: var(--mono); font-size: 0.8rem;">384</td>
            <td style="text-align: center; font-family: var(--mono); font-size: 0.8rem;">~118 MB</td>
            <td data-i18n="search.models.row3.lang">100+ languages</td>
            <td data-i18n="search.models.row3.best">Wide language coverage</td>
          </tr>
          <tr>
            <td style="font-weight: 600; color: var(--text);">Multilingual MPNet Base</td>
            <td style="text-align: center; font-family: var(--mono); font-size: 0.8rem;">768</td>
            <td style="text-align: center; font-family: var(--mono); font-size: 0.8rem;">~270 MB</td>
            <td data-i18n="search.models.row4.lang">50+ languages</td>
            <td data-i18n="search.models.row4.best">Best multilingual quality</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="model-alert-box">
      <p style="margin: 0; font-size: 0.85rem; line-height: 1.6; color: var(--text-2);" data-i18n-html="search.models.alert">Multilingual documentation: If your documentation website contains multiple languages (such as English, Chinese, German, Spanish, etc.), select a multilingual model using docmd-search --settings. The default model is English-only and will produce poor search relevance for other languages.</p>
    </div>
  </div>
</section>
<section class="search-dev-section" aria-label="Developer API">
  <div class="container">
    <div class="section-header">
      <div class="section-tag" style="color:var(--search-accent);" data-i18n="search.tag.api">Developer API</div>
      <h2 class="section-title" data-i18n="search.api.title">Use it anywhere: the client API</h2>
      <p class="section-sub" data-i18n="search.api.desc1">A lightweight client runtime (&lt;3 KB gzipped) that runs entirely in the browser. Build custom search UIs for any website or application.</p>
    </div>
    <div class="dev-api-layout">
      <div class="dev-api-features">
        <div class="api-feat-card">
          <div class="api-feat-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
          </div>
          <div>
            <h4 data-i18n="search.api.f1.title">Under 3 KB Gzipped</h4>
            <p data-i18n="search.api.f1.desc">Pure lightweight JavaScript. No WASM, no model downloads, zero third-party dependencies.</p>
          </div>
        </div>
        <div class="api-feat-card">
          <div class="api-feat-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
          </div>
          <div>
            <h4 data-i18n="search.api.f2.title">Progressive Batch Streaming</h4>
            <p data-i18n="search.api.f2.desc">Batch 0 loads instantly for immediate search while remaining chunks stream in background.</p>
          </div>
        </div>
        <div class="api-feat-card">
          <div class="api-feat-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="10"/><path d="m10 15 5-3-5-3v6Z"/></svg>
          </div>
          <div>
            <h4 data-i18n="search.api.f3.title">Framework Agnostic</h4>
            <p data-i18n="search.api.f3.desc">Drop into React, Vue, Next.js, Astro, or static HTML. Full TypeScript definitions included.</p>
          </div>
        </div>
        <div class="api-feat-card">
          <div class="api-feat-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          </div>
          <div>
            <h4 data-i18n="search.api.f4.title">100% Local Privacy</h4>
            <p data-i18n="search.api.f4.desc">Evaluates queries in device memory with zero telemetry. Fully compliant with strict GDPR policies.</p>
          </div>
        </div>
      </div>
      <div class="dev-api-code-col">
        <div class="dev-code-window">
          <div class="dev-code-header">
            <div class="dev-code-dots">
              <span class="dev-code-dot red"></span>
              <span class="dev-code-dot yellow"></span>
              <span class="dev-code-dot green"></span>
            </div>
            <div class="dev-code-title">search-client.ts</div>
            <button class="btn-copy-code" type="button" aria-label="Copy code" onclick="copySnippet(this)">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
              Copy
            </button>
          </div>
          <div class="dev-code-body">
<pre style="margin: 0; font-family: var(--mono); font-size: 0.8rem; color: var(--text);">
<span style="color: var(--search-accent);">import</span> { load, search } <span style="color: var(--search-accent);">from</span> <span style="color: var(--search-accent-hover);">'docmd-search/client'</span>;

<span style="color: var(--text-4);">// 1. Initialise index (batch 000 loads instantly, rest stream in background)</span>
<span style="color: var(--search-accent);">await</span> <span style="color: var(--indigo);">load</span>(<span style="color: var(--search-accent);">'/_docmd-search'</span>, (loaded, total) => {
  console.log(<span style="color: var(--search-accent);">`Loaded batch ${loaded}/${total}`</span>);
});

<span style="color: var(--text-4);">// 2. Query search with hybrid vector + keyword scoring (&lt;1ms)</span>
<span style="color: var(--search-accent);">const</span> results = <span style="color: var(--indigo);">search</span>(<span style="color: var(--search-accent);">'authentication secure routes'</span>, <span style="color: #f59e0b;">5</span>);
results.forEach(({ score, chunk }) => {
  console.log(<span style="color: var(--search-accent);">`[${Math.round(score * 100)}%] ${chunk.file}#${chunk.heading || ''}`</span>);
});</pre>
          </div>
          <div class="dev-code-output">
            <div class="output-label" data-i18n="search.api.console.title">Console Output</div>
            <div class="output-line"><span class="out-dim">[0.3ms]</span> <span class="out-score">[98%]</span> /getting-started/security#authentication</div>
            <div class="output-line"><span class="out-dim">[0.4ms]</span> <span class="out-score">[92%]</span> /plugins/auth-providers#oauth-sso</div>
          </div>
        </div>
      </div>
    </div>
    <div class="dev-config-note">
      <div class="config-note-icon">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
      </div>
      <div class="config-note-text" data-i18n-html="search.api.config_note">Using docmd? Enable semantic search directly in docmd.config.json under plugins.search.semantic = true – no custom JavaScript required.</div>
    </div>
  </div>
</section>
<section class="faq-section" aria-label="Frequently asked questions">
  <div class="container">
    <h2 class="section-title" data-i18n="search.faq.title">Frequently asked questions</h2>
    <p class="section-sub" style="margin-bottom:28px; text-align:center;" data-i18n="search.faq.sub">Common questions about docmd-search and offline semantic search.</p>
    <details class="faq-item">
      <summary data-i18n="search.faq.q1">Does it run entirely in the browser?</summary>
      <div class="faq-answer" data-i18n-html="search.faq.a1">Yes. All search happens directly in your users' browsers. No cloud infrastructure, no search API, and no data ever leaves the device.</div>
    </details>
    <details class="faq-item">
      <summary data-i18n="search.faq.q2">Do users need to download AI models?</summary>
      <div class="faq-answer" data-i18n-html="search.faq.a2">No. The AI models are only used at build time on your machine to generate pre-computed search indices. Users' browsers only download the resulting index files – small, compressed JSON chunks.</div>
    </details>
    <details class="faq-item">
      <summary data-i18n="search.faq.q3">Does it work with multiple languages?</summary>
      <div class="faq-answer" data-i18n-html="search.faq.a3">Yes. For multilingual documentation, choose a multilingual model such as paraphrase-multilingual-MiniLM-L12-v2, which supports over 50 languages. The default model is English-only.</div>
    </details>
    <details class="faq-item">
      <summary data-i18n="search.faq.q4">What is the confidence score badge?</summary>
      <div class="faq-answer" data-i18n-html="search.faq.a4">When enabled, the showConfidence setting displays a percentage badge next to each search result showing how closely it matches the query. This helps users quickly judge which results are most relevant.</div>
    </details>
  </div>
</section>
<section class="cta-section cta-section-with-sponsor" aria-label="Get started">
  <div class="container">
    <div class="cta-card search-cta-card">
      <h2 data-i18n="cta.title">Add smart search to your docs</h2>
      <p class="section-sub" style="margin-bottom:24px;" data-i18n="cta.desc">Open source, works with any documentation site. One install, zero cloud bills.</p>
      <div class="cta-actions">
        <a href="https://docs.docmd.io/search/" class="btn-primary" style="background:var(--search-accent); color:#fff;" data-i18n="cta.docs">Read Documentation</a>
        <a href="https://github.com/docmd-io/docmd-search" class="btn-secondary" target="_blank" rel="noopener" data-i18n="cta.github">Star on GitHub</a>
      </div>
    </div>

    <!-- GitHub Sponsor Highlight Card -->
    <div class="sponsor-callout-card">
      <div class="sponsor-callout-left">
        <div class="sponsor-callout-icon" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
        </div>
        <div>
          <h3 class="sponsor-callout-title" data-i18n="sponsor.card.title">Support docmd on GitHub Sponsors</h3>
          <p class="sponsor-callout-desc" data-i18n="sponsor.card.desc">docmd is 100% free and open source. Sponsoring directly sustains development and free public relay infrastructure.</p>
        </div>
      </div>
      <a href="https://github.com/sponsors/docmd-io" target="_blank" rel="noopener" class="btn-sponsor" data-i18n="sponsor.card.cta">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
        Sponsor on GitHub →
      </a>
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