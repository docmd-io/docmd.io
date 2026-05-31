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
      <a href="/search/" class="nav-link" data-i18n="nav.search">Semantic Search</a>
      <a href="https://docs.docmd.io/plugins/usage/" class="nav-link" data-i18n="nav.plugins">Plugins</a>
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
      <span id="npm-version-search">v0.1.0-alpha.0</span>–<span data-i18n="hero.badge">Preview</span>
    </a>
    <h1 data-i18n="search.hero.title">Local Semantic Search.<br>Zero API keys. 100% Private.</h1>
    <p class="hero-sub" data-i18n="search.hero.sub">Enable context-aware search results powered by local embeddings in the browser. Zero network dependencies, zero costs, instant client-side retrieval.</p>
    <div class="hero-actions">
      <a href="https://docs.docmd.io/search/" class="btn-primary" data-i18n="search.hero.cta">Get Started</a>
      <button class="btn-code" onclick="navigator.clipboard.writeText('npx docmd-search')">
        <span class="dollar">$</span>
        npx docmd-search
        <span class="copy-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
        </span>
      </button>
    </div>
    <div class="hero-metrics">
      <span class="metric-badge" data-i18n="search.hero.metric.local">Local Models</span>
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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 3h5v5"/><path d="M4 20L21 3"/><path d="M21 16v5h-5"/><path d="M15 15l6 6"/><path d="M4 4l6 6"/></svg>
        </div>
        <h3 data-i18n="search.feature.hybrid.title">Hybrid Re-ranking</h3>
        <p data-i18n="search.feature.hybrid.desc">Combines fast BM25 keyword matching with vector similarity for the absolute best search relevance and speed.</p>
      </div>
    </div>
  </div>
</section>

<!-- ─── Model Selection Section ─── -->
<section class="built-for" style="border-top: 1px solid var(--border); border-bottom: none; padding: 60px 0 20px;">
  <div class="container">
    <h2 style="font-size: 1.5rem; font-weight: 700; letter-spacing: -0.02em; margin-bottom: 8px;" data-i18n="search.models.title">Supported Embedding Models</h2>
    <p class="section-sub" style="margin-bottom: 32px;" data-i18n="search.models.sub">Select the perfect embedding model tailored for your documentation size and languages.</p>
    <div style="max-width: 800px; margin: 0 auto; text-align: left; overflow-x: auto;">
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 0.875rem;">
        <thead>
          <tr style="border-bottom: 2px solid var(--border); color: var(--text-3); font-weight: 600;">
            <th style="padding: 12px 8px; text-align: left;" data-i18n="search.models.th.model">Model</th>
            <th style="padding: 12px 8px; text-align: center;" data-i18n="search.models.th.dimensions">Dimensions</th>
            <th style="padding: 12px 8px; text-align: center;" data-i18n="search.models.th.size">Size</th>
            <th style="padding: 12px 8px; text-align: left;" data-i18n="search.models.th.languages">Languages</th>
            <th style="padding: 12px 8px; text-align: left;" data-i18n="search.models.th.bestfor">Best For</th>
          </tr>
        </thead>
        <tbody style="color: var(--text-2);">
          <tr style="border-bottom: 1px solid var(--border);">
            <td style="padding: 12px 8px; font-weight: 600; color: var(--text);">MiniLM L6 v2 ★</td>
            <td style="padding: 12px 8px; text-align: center; font-family: var(--mono); font-size: 0.75rem;">384</td>
            <td style="padding: 12px 8px; text-align: center; font-family: var(--mono); font-size: 0.75rem;">~23 MB</td>
            <td style="padding: 12px 8px;" data-i18n="search.models.row1.lang">English only</td>
            <td style="padding: 12px 8px;" data-i18n="search.models.row1.best">Fast, general English docs</td>
          </tr>
          <tr style="border-bottom: 1px solid var(--border);">
            <td style="padding: 12px 8px; font-weight: 600; color: var(--text);">Multilingual MiniLM L12</td>
            <td style="padding: 12px 8px; text-align: center; font-family: var(--mono); font-size: 0.75rem;">384</td>
            <td style="padding: 12px 8px; text-align: center; font-family: var(--mono); font-size: 0.75rem;">~118 MB</td>
            <td style="padding: 12px 8px;" data-i18n="search.models.row2.lang">50+ languages</td>
            <td style="padding: 12px 8px; font-weight: 500; color: var(--accent);" data-i18n="search.models.row2.best">i18n documentation</td>
          </tr>
          <tr style="border-bottom: 1px solid var(--border);">
            <td style="padding: 12px 8px; font-weight: 600; color: var(--text);">Multilingual E5 Small</td>
            <td style="padding: 12px 8px; text-align: center; font-family: var(--mono); font-size: 0.75rem;">384</td>
            <td style="padding: 12px 8px; text-align: center; font-family: var(--mono); font-size: 0.75rem;">~118 MB</td>
            <td style="padding: 12px 8px;" data-i18n="search.models.row3.lang">100+ languages</td>
            <td style="padding: 12px 8px;" data-i18n="search.models.row3.best">Wide language coverage</td>
          </tr>
          <tr style="border-bottom: 1px solid var(--border);">
            <td style="padding: 12px 8px; font-weight: 600; color: var(--text);">Multilingual MPNet Base</td>
            <td style="padding: 12px 8px; text-align: center; font-family: var(--mono); font-size: 0.75rem;">768</td>
            <td style="padding: 12px 8px; text-align: center; font-family: var(--mono); font-size: 0.75rem;">~270 MB</td>
            <td style="padding: 12px 8px;" data-i18n="search.models.row4.lang">50+ languages</td>
            <td style="padding: 12px 8px;" data-i18n="search.models.row4.best">Best multilingual quality</td>
          </tr>
        </tbody>
      </table>
      <div style="border: 1px solid var(--border); border-left: 4px solid var(--accent); border-radius: var(--r-sm); padding: 14px 16px; background: var(--surface);">
        <p style="margin: 0; font-size: 0.8125rem; line-height: 1.5; color: var(--text-2);" data-i18n="search.models.alert">
          <strong>💡 Multilingual documentation:</strong> If your documentation website contains multiple languages (such as English, Chinese, German, Spanish, etc.), select a multilingual model using <code>docmd-search --settings</code>. The default model is English-only and will produce poor search relevance for other languages.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- ─── Developer API Section ─── -->
<section class="built-for" style="border-top: 1px solid var(--border); border-bottom: none; padding: 60px 0 20px;">
  <div class="container" style="max-width: 800px; text-align: left;">
    <h2 style="font-size: 1.5rem; font-weight: 700; letter-spacing: -0.02em; margin-bottom: 8px; text-align: center;" data-i18n="search.api.title">Pure-Client API: Build Custom UIs</h2>
    <p class="section-sub" style="margin-bottom: 32px; text-align: center;" data-i18n="search.api.desc1">An ultra-lightweight client runtime (&lt;5KB minified) that executes entirely in the browser using hybrid BM25 and vector cosine similarity scoring.</p>
    <!-- Beautiful Code Sandbox -->
    <div style="background: var(--surface); border: 1px solid var(--border); border-radius: var(--r); padding: 20px; overflow-x: auto; margin-bottom: 24px;">
<pre style="margin: 0; font-family: var(--mono); font-size: 0.8125rem; line-height: 2.25; color: var(--text);"><span style="color: var(--accent);">import</span> * <span style="color: var(--accent);">as</span> Search <span style="color: var(--accent);">from</span> <span style="color: var(--green);">'docmd-search/client'</span>;
<span style="color: var(--text-3);">// 1. Initialise and load index folder.
// Batch 0 is loaded instantly for sub-millisecond search startup,
// while remaining chunk batches load progressively in background.</span>
<span style="color: var(--accent);">await</span> Search.<span style="color: #6366f1;">load</span>(<span style="color: var(--green);">'/.docmd-search'</span>, (loaded, total) => {
  console.log(<span style="color: var(--green);">`Loaded batch ${loaded}/${total}`</span>);
});
<span style="color: var(--text-3);">// 2. Query search using hybrid vector + keyword matching.</span>
<span style="color: var(--accent);">const</span> results = Search.<span style="color: #6366f1;">search</span>(<span style="color: var(--green);">'authentication secure routes'</span>, <span style="color: #f59e0b;">10</span>);
results.forEach(({ score, chunk }) => {
  console.log(<span style="color: var(--green);">`[${(score * 100).toFixed(0)}%] ${chunk.file}#${chunk.heading || ''}`</span>);
  console.log(chunk.text);
});
</pre>
    </div>
  </div>
</section>

<!-- ─── Build Index CLI Section ─── -->
<section class="cli-demo" style="border-top: 1px solid var(--border); border-bottom: none; padding: 60px 0 20px;">
  <div class="container" style="max-width: 600px; text-align: center;">
    <h2 style="font-size: 1.5rem; font-weight: 700; letter-spacing: -0.02em; margin-bottom: 8px;" data-i18n="search.cli.title">Build Index in One Command</h2>
    <p class="section-sub" style="margin-bottom: 32px;" data-i18n="search.cli.sub">Run the indexing engine to generate static search chunks for your site.</p>
    <div class="window" style="text-align: left; box-shadow: 0 10px 30px rgba(0,0,0,0.05); margin-top: 24px;">
      <div class="window-bar">
        <span class="window-dot red"></span>
        <span class="window-dot yellow"></span>
        <span class="window-dot green"></span>
        <span class="window-title" data-i18n="search.cli.terminal">Terminal</span>
      </div>
      <div class="window-body">
        <pre><span class="cmd">$</span> npx docmd-search --build
<span class="success">✓</span> Loaded local vector model
<span class="success">✓</span> Generated static index: .docmd-search/index.json</pre>
      </div>
    </div>
  </div>
</section>

<!-- ─── FAQ Section ─── -->
<section class="faq-section" style="border-top: 1px solid var(--border); border-bottom: none; padding: 60px 0 20px;">
  <div class="container" style="max-width: 800px; text-align: left;">
    <h2 style="text-align: center;" data-i18n="search.faq.title">Search Frequently Asked Questions</h2>
    <p class="section-sub" style="text-align: center; margin-bottom: 40px;" data-i18n="search.faq.sub">Everything you need to know about docmd offline semantic search.</p>
    <details class="faq-item">
      <summary data-i18n="search.faq.q1">Does docmd search run entirely client-side?</summary>
      <div class="faq-answer" data-i18n-html="search.faq.a1">Yes. The search runtime performs all vector similarity calculations and keyword indexing directly in the user's browser. It requires zero cloud infrastructure or search APIs.<br/><br/><a href="https://docs.docmd.io/search/">Read docmd-search documentation →</a></div>
    </details>
    <details class="faq-item">
      <summary data-i18n="search.faq.q2">Are ONNX model weights downloaded on every visit?</summary>
      <div class="faq-answer" data-i18n-html="search.faq.a2">No. Model weights are only loaded during compilation/build time using Node.js to generate static search vector indices. The client-side runtime only downloads the pre-built indices, which are compressed JSON chunks.<br/><br/><a href="https://docs.docmd.io/search/how-it-works/">Learn how offline search works →</a></div>
    </details>
    <details class="faq-item">
      <summary data-i18n="search.faq.q3">Can I use the search plugin with multiple languages?</summary>
      <div class="faq-answer" data-i18n-html="search.faq.a3">Yes. If your documentation is multilingual, you should choose a multilingual embedding model like <code>paraphrase-multilingual-MiniLM-L12-v2</code> which supports over 50 languages.<br/><br/><a href="https://docs.docmd.io/search/configuration/">Learn about multi-language search models →</a></div>
    </details>
    <details class="faq-item">
      <summary data-i18n="search.faq.q4">What is showConfidence and how does it work?</summary>
      <div class="faq-answer" data-i18n-html="search.faq.a4">The <code>showConfidence</code> flag, when enabled, displays the exact similarity matching percentage badge next to each semantic result, helping users visually understand search relevance.<br/><br/><a href="https://docs.docmd.io/search/browser-client/">Read about browser-client settings →</a></div>
    </details>
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