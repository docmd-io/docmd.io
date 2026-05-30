---
title: "docmd search - Offline Semantic Search"
description: "Offline semantic search engine for documentation. Local embeddings, browser-ready indexes."
titleAppend: false
noStyle: true
keywords: 
  - "semantic search"
  - "vector search"
  - "local embeddings"
  - "docmd"
  - "docmd-search"
  - "offline search"
components:
  meta: true
  favicon: true
  scripts: false
  css: false
  theme: false
customHead: |
  <link rel="stylesheet" href="/assets/css/style.css">
  <link rel="apple-touch-icon" href="/assets/images/apple-touch-icon.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono&display=swap" rel="stylesheet">
  <style>
    /* Custom CSS elements to give the search page an independent, premium look */
    .search-hero {
      background: radial-gradient(circle at top, var(--accent-soft) 0%, transparent 70%);
    }
    
    .demo-sandbox {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--r);
      max-width: 680px;
      margin: 40px auto 0;
      overflow: hidden;
      box-shadow: 0 20px 48px rgba(0,0,0,0.06);
    }
    
    [data-theme="dark"] .demo-sandbox {
      box-shadow: 0 20px 48px rgba(0,0,0,0.4);
    }
    
    .sandbox-header {
      background: var(--bg);
      border-bottom: 1px solid var(--border);
      padding: 16px 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    
    .sandbox-dots {
      display: flex;
      gap: 6px;
    }
    
    .sandbox-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }
    
    .sandbox-title {
      font-size: 0.75rem;
      font-family: var(--mono);
      color: var(--text-3);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    
    .sandbox-search-bar {
      padding: 16px 20px;
      background: var(--bg);
      border-bottom: 1px solid var(--border);
      display: flex;
      align-items: center;
      gap: 12px;
    }
    
    .sandbox-search-icon {
      color: var(--accent);
      display: flex;
      align-items: center;
    }
    
    .sandbox-input-simulate {
      font-size: 0.9375rem;
      font-weight: 500;
      color: var(--text);
      flex: 1;
      position: relative;
    }
    
    .sandbox-input-simulate::after {
      content: '';
      position: absolute;
      width: 2px;
      height: 18px;
      background: var(--accent);
      margin-left: 2px;
      animation: blink 1s step-end infinite;
    }
    
    @keyframes blink {
      from, to { background-color: transparent }
      50% { background-color: var(--accent) }
    }
    
    .sandbox-results {
      padding: 12px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    
    .sandbox-card {
      background: var(--bg);
      border: 1px solid var(--border);
      border-radius: var(--r-sm);
      padding: 16px;
      transition: border-color 0.2s, transform 0.2s;
      cursor: default;
    }
    
    .sandbox-card:hover {
      border-color: var(--accent);
      transform: translateY(-1px);
    }
    
    .sandbox-card-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 6px;
    }
    
    .sandbox-card-meta {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    
    .sandbox-card-title {
      font-size: 0.875rem;
      font-weight: 700;
      color: var(--text);
    }
    
    .sandbox-card-path {
      font-family: var(--mono);
      font-size: 0.6875rem;
      color: var(--text-3);
    }
    
    .sandbox-score {
      font-size: 0.6875rem;
      font-weight: 600;
      padding: 2px 8px;
      border-radius: 100px;
      background: var(--accent-soft);
      color: var(--accent);
    }
    
    .sandbox-score.high {
      background: rgba(22, 163, 74, 0.08);
      color: var(--green);
    }
    
    .sandbox-card-body {
      font-size: 0.8125rem;
      color: var(--text-2);
      line-height: 1.5;
    }
    
    .sandbox-card-highlight {
      background: rgba(245, 158, 11, 0.15);
      border-radius: 2px;
      padding: 0 2px;
      color: var(--text);
    }
    
    /* Interactive CLI Section */
    .cli-demo {
      padding: 80px 0;
      border-top: 1px solid var(--border);
    }
    
    .cli-demo .window {
      max-width: 680px;
      margin: 32px auto 0;
    }
  </style>
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
      <a href="https://docs.docmd.io/" class="nav-link" data-i18n="nav.docs">Documentation</a>
      <a href="https://docs.docmd.io/plugins/usage/" class="nav-link" data-i18n="nav.plugins">Plugins</a>
      <a href="/search/" class="nav-link" data-i18n="nav.search">Search CLI</a>
      <a href="https://docs.docmd.io/comparison/" class="nav-link" data-i18n="nav.compare">Comparison</a>
      <a href="https://live.docmd.io" class="nav-link" data-i18n="nav.editor">Live Editor</a>
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
        </div>
      </div>
      <button class="icon-btn" id="theme-toggle" aria-label="Toggle theme">
        <span class="theme-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg></span>
      </button>
    </div>
  </div>
</nav>

<!-- ─── Hero ─── -->
<header class="hero search-hero">
  <div class="container">
    <a href="https://www.npmjs.com/package/docmd-search" target="_blank" rel="noopener" class="hero-badge">
      <span class="badge-dot"></span>
      <span data-i18n="search.hero.badge">docmd-search alpha</span>
    </a>
    <h1 data-i18n="search.hero.title">Local Semantic Search.<br>Zero API keys. 100% Private.</h1>
    <p class="hero-sub" data-i18n="search.hero.sub">Enable context-aware search results powered by local embeddings in the browser. Zero network dependencies, zero costs, instant client-side retrieval.</p>
    <div class="hero-actions">
      <a href="https://docs.docmd.io/search/" class="btn-primary" data-i18n="search.hero.cta">Get Started</a>
      <button class="btn-code" onclick="navigator.clipboard.writeText('npx docmd-search --ui')">
        <span class="dollar">$</span>
        npx docmd-search --ui
        <span class="copy-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
        </span>
      </button>
    </div>
    <div class="hero-metrics">
      <span class="metric-badge" data-i18n="search.hero.metric.local">Local Embeddings</span>
      <span class="metric-badge" data-i18n="search.hero.metric.private">100% Private</span>
      <span class="metric-badge" data-i18n="search.hero.metric.vector">Vector Embeddings</span>
      <span class="metric-badge" data-i18n="search.hero.metric.cost">Zero Cost</span>
    </div>
    <!-- Stunning Search Sandbox Mockup -->
    <div class="demo-sandbox">
      <div class="sandbox-header">
        <div class="sandbox-dots">
          <span class="sandbox-dot" style="background:#ef4444"></span>
          <span class="sandbox-dot" style="background:#f59e0b"></span>
          <span class="sandbox-dot" style="background:#22c55e"></span>
        </div>
        <div class="sandbox-title">docmd-search sandbox</div>
        <div style="width: 42px"></div>
      </div>
      <div class="sandbox-search-bar">
        <div class="sandbox-search-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
        </div>
        <div class="sandbox-input-simulate">authentication</div>
      </div>
      <div class="sandbox-results">
        <!-- Result 1 -->
        <div class="sandbox-card">
          <div class="sandbox-card-header">
            <div>
              <div class="sandbox-card-title">User Authentication & Sessions</div>
              <span class="sandbox-card-path">/getting-started/security</span>
            </div>
            <span class="sandbox-score high">98% match</span>
          </div>
          <div class="sandbox-card-body">
            Configure how your application handles <span class="sandbox-card-highlight">user login</span>, secure cookies, token generation, and stateless session verification.
          </div>
        </div>
        <!-- Result 2 -->
        <div class="sandbox-card">
          <div class="sandbox-card-header">
            <div>
              <div class="sandbox-card-title">Configuring Custom Secure Routes</div>
              <span class="sandbox-card-path">/configuration/routing</span>
            </div>
            <span class="sandbox-score">89% match</span>
          </div>
          <div class="sandbox-card-body">
            Define private directories and redirect configurations for unauthenticated guest sessions trying to access <span class="sandbox-card-highlight">signin</span> paths.
          </div>
        </div>
      </div>
    </div>
  </div>
</header>

<!-- ─── Capabilities Section ─── -->
<section class="built-for" style="border-bottom: none;">
  <div class="container">
    <h2 data-i18n="search.features.title">Private Semantic Search</h2>
    <p class="section-sub" data-i18n="search.features.sub">Bring modern vector search directly to your static docs without third-party services.</p>
    <div class="built-for-grid">
      <div class="built-for-card">
        <div class="built-for-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        </div>
        <h3 data-i18n="search.feature.local.title">Local Vector Models</h3>
        <p data-i18n="search.feature.local.desc">Uses lightweight ONNX models executing directly on the client side. No data ever leaves the user's browser.</p>
      </div>
      <div class="built-for-card">
        <div class="built-for-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>
        </div>
        <h3 data-i18n="search.feature.semantic.title">Semantic Intent</h3>
        <p data-i18n="search.feature.semantic.desc">Understands queries conceptually. Searching 'authentication' yields results for 'sign-in' and 'login' automatically.</p>
      </div>
      <div class="built-for-card">
        <div class="built-for-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
        </div>
        <h3 data-i18n="search.feature.sandbox.title">Interactive CLI Sandbox</h3>
        <p data-i18n="search.feature.sandbox.desc">Run the CLI with the --ui flag to test embeddings, adjust text chunking size, and visually inspect search scores.</p>
      </div>
    </div>
  </div>
</section>

<!-- ─── Model Selection Section ─── -->
<section class="built-for" style="border-top: 1px solid var(--border); border-bottom: none; padding: 60px 0 20px;">
  <div class="container">
    <h2 style="font-size: 1.5rem; font-weight: 700; letter-spacing: -0.02em; margin-bottom: 8px;">Supported Embedding Models</h2>
    <p class="section-sub" style="margin-bottom: 32px;">Select the perfect embedding model tailored for your documentation size and languages.</p>
    <div style="max-width: 800px; margin: 0 auto; text-align: left; overflow-x: auto;">
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 0.875rem;">
        <thead>
          <tr style="border-bottom: 2px solid var(--border); color: var(--text-3); font-weight: 600;">
            <th style="padding: 12px 8px; text-align: left;">Model</th>
            <th style="padding: 12px 8px; text-align: center;">Dimensions</th>
            <th style="padding: 12px 8px; text-align: center;">Size</th>
            <th style="padding: 12px 8px; text-align: left;">Languages</th>
            <th style="padding: 12px 8px; text-align: left;">Best For</th>
          </tr>
        </thead>
        <tbody style="color: var(--text-2);">
          <tr style="border-bottom: 1px solid var(--border);">
            <td style="padding: 12px 8px; font-weight: 600; color: var(--text);">MiniLM L6 v2 ★</td>
            <td style="padding: 12px 8px; text-align: center; font-family: var(--mono); font-size: 0.75rem;">384</td>
            <td style="padding: 12px 8px; text-align: center; font-family: var(--mono); font-size: 0.75rem;">~23 MB</td>
            <td style="padding: 12px 8px;">English only</td>
            <td style="padding: 12px 8px;">Fast, general English docs</td>
          </tr>
          <tr style="border-bottom: 1px solid var(--border);">
            <td style="padding: 12px 8px; font-weight: 600; color: var(--text);">Multilingual MiniLM L12</td>
            <td style="padding: 12px 8px; text-align: center; font-family: var(--mono); font-size: 0.75rem;">384</td>
            <td style="padding: 12px 8px; text-align: center; font-family: var(--mono); font-size: 0.75rem;">~118 MB</td>
            <td style="padding: 12px 8px;">50+ languages</td>
            <td style="padding: 12px 8px; font-weight: 500; color: var(--accent);">i18n documentation</td>
          </tr>
          <tr style="border-bottom: 1px solid var(--border);">
            <td style="padding: 12px 8px; font-weight: 600; color: var(--text);">Multilingual E5 Small</td>
            <td style="padding: 12px 8px; text-align: center; font-family: var(--mono); font-size: 0.75rem;">384</td>
            <td style="padding: 12px 8px; text-align: center; font-family: var(--mono); font-size: 0.75rem;">~118 MB</td>
            <td style="padding: 12px 8px;">100+ languages</td>
            <td style="padding: 12px 8px;">Wide language coverage</td>
          </tr>
          <tr style="border-bottom: 1px solid var(--border);">
            <td style="padding: 12px 8px; font-weight: 600; color: var(--text);">Multilingual MPNet Base</td>
            <td style="padding: 12px 8px; text-align: center; font-family: var(--mono); font-size: 0.75rem;">768</td>
            <td style="padding: 12px 8px; text-align: center; font-family: var(--mono); font-size: 0.75rem;">~270 MB</td>
            <td style="padding: 12px 8px;">50+ languages</td>
            <td style="padding: 12px 8px;">Best multilingual quality</td>
          </tr>
        </tbody>
      </table>
      <div style="border: 1px solid var(--border); border-left: 4px solid var(--accent); border-radius: var(--r-sm); padding: 14px 16px; background: var(--surface);">
        <p style="margin: 0; font-size: 0.8125rem; line-height: 1.5; color: var(--text-2);">
          <strong>💡 Multilingual documentation:</strong> If your documentation website contains multiple languages (such as English, Chinese, German, Spanish, etc.), select a multilingual model using <code>docmd-search --settings</code>. The default model is English-only and will produce poor search relevance for other languages.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- ─── Interactive CLI Section ─── -->
<section class="cli-demo">
  <div class="container">
    <h2 style="text-align: center; font-size: 1.5rem; font-weight: 700; letter-spacing: -0.02em; margin-bottom: 8px;">Easy Command Line Integration</h2>
    <p style="text-align: center; font-size: 0.9375rem; color: var(--text-3); margin-bottom: 32px;">Build your local index and preview the search relevance in seconds.</p>
    <div class="window">
      <div class="window-bar">
        <span class="window-dot red"></span>
        <span class="window-dot yellow"></span>
        <span class="window-dot green"></span>
        <span class="window-title">Terminal</span>
      </div>
      <div class="window-body">
        <pre><span class="cmd">$</span> npm install -g docmd-search
<span class="success">✓</span> Installed docmd-search CLI

<span class="cmd">$</span> docmd-search --build
<span class="success">✓</span> Parsed 24 markdown files
<span class="success">✓</span> Loaded local MiniLM-L6 vector model
<span class="success">✓</span> Chunked 142 sections with overlap
<span class="success">✓</span> Built semantic vector index: .docmd-search/index.json (1.2 MB)

<span class="cmd">$</span> docmd-search --ui
<span class="success">✓</span> Started interactive search sandbox at: <span class="highlight">http://localhost:8080</span></pre>
      </div>
    </div>
  </div>
</section>

<!-- ─── CTA ─── -->
<section class="cta-section" style="border-top: 1px solid var(--border);">
  <div class="container">
    <h2 data-i18n="cta.title">Ready to write better docs?</h2>
    <p class="section-sub" data-i18n="cta.desc">Join the developers building fast, beautiful documentation with docmd.</p>
    <div class="cta-actions">
      <a href="https://docs.docmd.io" class="btn-primary" data-i18n="cta.docs">Read the Documentation</a>
      <a href="https://github.com/docmd-io/docmd" class="btn-secondary" data-i18n="cta.github">Star on GitHub</a>
    </div>
  </div>
</section>

<!-- ─── Footer ─── -->
<footer class="footer">
  <div class="container footer-inner">
    <div class="footer-brand">
      <span class="nav-logo" aria-label="docmd">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line></svg>
        docmd
      </span>
      <p data-i18n-html="footer.tagline">The zero-config documentation engine.<br>Open source under MIT License.</p>
    </div>
    <div class="footer-col">
      <h4 data-i18n="footer.product">Product</h4>
      <a href="https://docs.docmd.io/getting-started/installation/" data-i18n="footer.installation">Installation</a>
      <a href="https://docs.docmd.io/configuration/general/" data-i18n="footer.configuration">Configuration</a>
      <a href="https://docs.docmd.io/api/cli-commands/" data-i18n="footer.cli">CLI Reference</a>
      <a href="https://docs.docmd.io/comparison/" data-i18n="footer.comparisons">Comparisons</a>
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
    <span data-i18n="footer.license">MIT License</span>
  </div>
</footer>
<script src="/assets/js/script.js"></script>