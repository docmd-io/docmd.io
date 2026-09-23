---
title: "docmd Assistant – Offline and Cloud Documentation Assistant"
description: "Documentation AI assistant supporting offline embeddings and cloud relay. Context-aware AI answers, BYOK security, and universal framework integration."
titleAppend: false
noStyle: true
keywords: 
  - "documentation ai assistant"
  - "docs chatbot"
  - "ai for documentation"
  - "docmd-assistant"
  - "byok ai"
  - "rag documentation"
  - "self-hosted ai assistant"
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
      <a href="/assistant/" class="nav-link active active-assistant" data-i18n="nav.assistant">AI Assistant</a>
      <a href="/search/" class="nav-link" data-i18n="nav.search">Semantic Search</a>
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
      <a href="/assistant/" class="nav-link active active-assistant" data-i18n="nav.assistant">AI Assistant</a>
      <a href="/search/" class="nav-link" data-i18n="nav.search">Semantic Search</a>
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
          <a class="lang-option active" href="/assistant/" data-lang="en">
            <svg class="lang-flag" width="16" height="12" viewBox="0 0 60 30"><path fill="#012169" d="M0 0h60v30H0z"/><path stroke="#fff" stroke-width="6" d="m0 0 60 30m0-30L0 30"/><path stroke="#C8102E" stroke-width="4" d="m0 0 60 30m0-30L0 30"/><path stroke="#fff" stroke-width="10" d="M30 0v30M0 15h60"/><path stroke="#C8102E" stroke-width="6" d="M30 0v30M0 15h60"/></svg>
            English
          </a>
          <a class="lang-option" href="/de/assistant/" data-lang="de">
            <svg class="lang-flag" width="16" height="12" viewBox="0 0 5 3"><rect width="5" height="3" fill="#000"/><rect width="5" height="2" y="1" fill="#D00"/><rect width="5" height="1" y="2" fill="#FFCE00"/></svg>
            Deutsch
          </a>
          <a class="lang-option" href="/zh/assistant/" data-lang="zh">
            <svg class="lang-flag" width="16" height="12" viewBox="0 0 30 20"><path fill="#de2910" d="M0 0h30v20H0z"/><path fill="#ffde00" d="M6 2 4.4 6.8 8.6 3.8H3.4l4.2 3L6 2zm6 1-1.3 2 .8-2.3h1.1L12 4.3l.6-1.3zm3 2-1.3 2 .8-2.3h1.1L15 6.3l.6-1.3zm1 4-1.3 2 .8-2.3h1.1L16 10.3l.6-1.3zm-2 3-1.3 2 .8-2.3h1.1L14 13.3l.6-1.3z"/></svg>
            中文
          </a>
          <a class="lang-option" href="/es/assistant/" data-lang="es">
            <svg class="lang-flag" width="16" height="12" viewBox="0 0 750 500"><rect width="750" height="500" fill="#c60b1e"/><rect width="750" height="250" y="125" fill="#ffc400"/></svg>
            Español
          </a>
          <a class="lang-option" href="/ja/assistant/" data-lang="ja">
            <svg class="lang-flag" width="16" height="12" viewBox="0 0 900 600"><rect width="900" height="600" fill="#fff"/><circle cx="450" cy="300" r="180" fill="#bc002d"/></svg>
            日本語
          </a>
          <a class="lang-option" href="/fr/assistant/" data-lang="fr">
            <svg class="lang-flag" width="16" height="12" viewBox="0 0 3 2"><rect width="1" height="2" fill="#002395"/><rect width="1" height="2" x="1" fill="#fff"/><rect width="1" height="2" x="2" fill="#ed2939"/></svg>
            Français
          </a>
          <a class="lang-option" href="/ru/assistant/" data-lang="ru">
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
<header class="hero assistant-hero">
  <div class="assistant-halo" aria-hidden="true"></div>
  <div class="container">
    <a href="https://github.com/docmd-io/docmd-assistant" target="_blank" rel="noopener" class="hero-badge assistant-badge">
      <span class="badge-dot" style="background:var(--assistant-accent);"></span>
      <span class="badge-version" id="npm-version-assistant"><span class="badge-pkg-name">docmd-assistant</span><span class="badge-ver-num">v0.1.18</span></span>
      <span class="badge-divider" aria-hidden="true"></span>
      <span class="badge-downloads" id="npm-downloads-assistant">
        <span class="badge-dl-text">49k+</span>
        <span class="badge-dl-label">installs</span>
      </span>
      <span class="badge-arrow" aria-hidden="true">→</span>
    </a>
    <h1 data-i18n-html="assistant.hero.title">AI assistant grounded in your docs. Any LLM provider. Your keys never leave your server.</h1>
    <p class="hero-sub" data-i18n="assistant.hero.sub">Reads your documentation, answers questions in context. Works with 100+ models, any website, and keeps your API keys secure.</p>
    <div class="hero-actions">
      <a href="https://docs.docmd.io/assistant/" class="btn-primary btn-assistant-cta" data-i18n="assistant.hero.cta">Get Started</a>
      <button class="btn-code" onclick="copyCmd(this)" data-cmd="npm install docmd-assistant">
        <span class="dollar" style="color:var(--assistant-accent);">$</span> npm install docmd-assistant
      </button>
    </div>
    <div class="hero-metrics">
      <span class="metric-badge metric-badge-assistant">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" style="vertical-align:-1px; margin-right:4px;"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
        <span data-i18n="assistant.hero.metric.engine">Zero UI Dependencies</span>
      </span>
      <span class="metric-badge metric-badge-assistant">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" style="vertical-align:-1px; margin-right:4px;"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
        <span data-i18n="assistant.hero.metric.byok">Hardware KMS Security</span>
      </span>
      <span class="metric-badge metric-badge-assistant">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" style="vertical-align:-1px; margin-right:4px;"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <span data-i18n="assistant.hero.metric.rag">AST Index Grounding</span>
      </span>
      <span class="metric-badge metric-badge-assistant">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" style="vertical-align:-1px; margin-right:4px;"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/></svg>
        <span data-i18n="assistant.hero.metric.models">Local Ollama &amp; Cloud</span>
      </span>
    </div>
    <div class="assistant-live-preview" role="region" aria-label="Interactive AI Assistant Preview">
      <div class="assistant-prompt-bar-detached" id="assistant-prompt-bar">
        <div class="assistant-prompt-icon" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/></svg>
        </div>
        <div class="assistant-prompt-input">
          <span class="assistant-prompt-text" id="assistant-prompt-text" data-i18n="assistant.preview.q1">How do I run docmd-assistant completely offline with a local model?</span>
          <span class="assistant-prompt-cursor" id="assistant-prompt-cursor" aria-hidden="true"></span>
        </div>
        <div class="assistant-prompt-actions">
          <span class="assistant-prompt-badge">⌘I</span>
          <div class="assistant-prompt-submit" title="Ask AI Assistant">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 10 4 15 9 20"></polyline><path d="M20 4v7a4 4 0 0 1-4 4H4"></path></svg>
          </div>
        </div>
      </div>

      <div class="assistant-chat-card" id="assistant-chat-card">
        <div class="assistant-retrieval-bar" id="assistant-retrieval-bar" aria-live="polite">
          <div class="assistant-retrieval-step">
            <span class="assistant-retrieval-spinner" aria-hidden="true"></span>
            <span class="assistant-retrieval-text" id="assistant-retrieval-text" data-i18n="assistant.preview.retrieval1">Searching "offline local model" in docs...</span>
          </div>
        </div>

        <div class="assistant-chat-thread" id="assistant-chat-thread">
          <div class="assistant-msg-ai">
            <div class="assistant-avatar-ai" aria-hidden="true">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/></svg>
            </div>
            <div class="assistant-bubble-ai">
              <div class="assistant-bubble-content" id="assistant-bubble-content">
                <p class="assistant-bubble-text" data-i18n-html="assistant.preview.ans1.intro">Configure DocmdAssistantEngine to connect directly to your local Ollama instance. Both embeddings and responses compute locally with zero cloud API keys or telemetry.</p>
                <div class="assistant-code-block">
                  <div class="assistant-code-header">
                    <span class="assistant-code-lang">TYPESCRIPT</span>
                    <button class="assistant-code-copy" type="button" onclick="copyCodeBlock(this)" aria-label="Copy code">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                      <span>Copy</span>
                    </button>
                  </div>
                  <pre class="assistant-code-pre"><code><span class="tok-kw">import</span> { DocmdAssistantEngine } <span class="tok-kw">from</span> <span class="tok-str">'docmd-assistant'</span>;

<span class="tok-kw">const</span> engine = <span class="tok-kw">new</span> <span class="tok-cls">DocmdAssistantEngine</span>({
  provider: <span class="tok-str">'ollama'</span>,
  model: <span class="tok-str">'llama3.2'</span>,
  baseUrl: <span class="tok-str">'http://localhost:11434'</span>
});</code></pre>
                </div>
              </div>
              <div class="assistant-citations-bar" id="assistant-citations-bar">
                <span class="assistant-citations-label" data-i18n="assistant.preview.sources.label">Sources:</span>
                <a href="https://docs.docmd.io/guides/ai/ai-assistant/" target="_blank" rel="noopener" class="assistant-citation-tag"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg> /guides/ai/ai-assistant.md</a>
                <a href="https://docs.docmd.io/plugins/usage/" target="_blank" rel="noopener" class="assistant-citation-tag"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg> /plugins/usage/</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>

<section class="bento-section" aria-label="Features">
  <div class="container">
    <div class="section-header">
      <div class="section-tag" style="color:var(--assistant-accent);" data-i18n="assistant.tag.architecture">Architecture</div>
      <h2 class="section-title" data-i18n="assistant.features.title">How it works</h2>
      <p class="section-sub" data-i18n="assistant.features.sub">A headless engine and a framework plugin, designed to work independently or together.</p>
    </div>
    <div class="bento-grid bento-grid-4">
      <div class="bento-card">
        <div>
          <div class="bento-icon" style="background:var(--assistant-soft); color:var(--assistant-accent);">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
          </div>
          <h3 data-i18n="assistant.feature.headless.title">Headless, Framework-Agnostic Core</h3>
          <p data-i18n-html="assistant.feature.headless.desc">docmd-assistant is a standalone engine with zero UI dependencies. Import into React, Vue, Svelte, Node.js, or vanilla JavaScript.</p>
        </div>
      </div>
      <div class="bento-card">
        <div>
          <div class="bento-icon" style="background:var(--assistant-soft); color:var(--assistant-accent);">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <h3 data-i18n="assistant.feature.byok.title">Server-Side BYOK &amp; Hardware KMS</h3>
          <p data-i18n-html="assistant.feature.byok.desc">Provider credentials never touch the browser. API keys stay securely encrypted with hardware KMS envelopes on your server or relay.</p>
        </div>
      </div>
      <div class="bento-card">
        <div>
          <div class="bento-icon" style="background:var(--assistant-soft); color:var(--assistant-accent);">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          </div>
          <h3 data-i18n="assistant.feature.rag.title">Grounded AST &amp; Search RAG</h3>
          <p data-i18n-html="assistant.feature.rag.desc">Queries your site pre-compiled search index before querying the model, eliminating hallucinations.</p>
        </div>
      </div>
      <div class="bento-card">
        <div>
          <div class="bento-icon" style="background:var(--assistant-soft); color:var(--assistant-accent);">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 8h6"/><path d="M9 12h6"/><path d="M9 16h6"/></svg>
          </div>
          <h3 data-i18n="assistant.feature.offline.title">100% Offline with Local Models</h3>
          <p data-i18n-html="assistant.feature.offline.desc">Seamlessly connect to local Ollama for air-gapped, zero-cloud operations.</p>
        </div>
      </div>
    </div>
  </div>
</section>
 
<section class="assistant-providers-section" aria-label="LLM Providers">
  <div class="container">
    <div class="section-header">
      <div class="section-tag" style="color:var(--assistant-accent);" data-i18n="assistant.tag.providers">LLM Providers &amp; Transport</div>
      <h2 class="section-title" data-i18n="assistant.providers.title">Works with 100+ AI providers and bespoke endpoints</h2>
      <p class="section-sub" data-i18n="assistant.providers.sub">Powered by the AIPlug universal transport runtime. Connect directly to frontier cloud models, route via Cloud Relay, run completely offline on local hardware, or dispatch to bespoke enterprise APIs with zero vendor lock-in.</p>
    </div>

    <div class="aiplug-callout">
      <div class="aiplug-callout-left">
        <div class="aiplug-callout-text" data-i18n-html="assistant.providers.aiplug.desc">
          docmd assistant orchestrates connections via AIPlug (@memoryblock/aiplug), a lightweight runtime unifying 100+ providers and bespoke API endpoints under a single standard protocol.
        </div>
      </div>
      <a href="https://github.com/mgks/aiplug" target="_blank" rel="noopener" class="aiplug-callout-link">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
        <span data-i18n="assistant.providers.aiplug.cta">Explore AIPlug on GitHub →</span>
      </a>
    </div>

    <div class="provider-table-wrapper">
      <table class="provider-table">
        <thead>
          <tr>
            <th data-i18n="assistant.providers.th.provider">Provider</th>
            <th data-i18n="assistant.providers.th.models">Supported Models</th>
            <th data-i18n="assistant.providers.th.mode">Connection Mode</th>
            <th data-i18n="assistant.providers.th.security">Security Architecture</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="font-weight: 600; color: var(--text);">OpenAI</td>
            <td style="font-family: var(--mono); font-size: 0.8rem;">gpt-4o, gpt-4o-mini, o1, o3-mini</td>
            <td><span class="badge-neutral" data-i18n="assistant.providers.mode.direct_relay">Direct / Relay</span></td>
            <td><span class="badge-kms" data-i18n="assistant.providers.row1.sec">Hardware KMS Secure</span></td>
          </tr>
          <tr>
            <td style="font-weight: 600; color: var(--text);">Anthropic</td>
            <td style="font-family: var(--mono); font-size: 0.8rem;">claude-3-7-sonnet, haiku</td>
            <td><span class="badge-neutral" data-i18n="assistant.providers.mode.direct_relay">Direct / Relay</span></td>
            <td><span class="badge-kms" data-i18n="assistant.providers.row2.sec">Hardware KMS Secure</span></td>
          </tr>
          <tr>
            <td style="font-weight: 600; color: var(--text);">Google Gemini</td>
            <td style="font-family: var(--mono); font-size: 0.8rem;">gemini-2.0-flash, pro</td>
            <td><span class="badge-neutral" data-i18n="assistant.providers.mode.direct_relay">Direct / Relay</span></td>
            <td><span class="badge-kms" data-i18n="assistant.providers.row3.sec">Hardware KMS Secure</span></td>
          </tr>
          <tr>
            <td style="font-weight: 600; color: var(--text);">DeepSeek &amp; Groq</td>
            <td style="font-family: var(--mono); font-size: 0.8rem;">deepseek-chat, deepseek-r1, llama-3.3</td>
            <td><span class="badge-neutral" data-i18n="assistant.providers.mode.direct_relay">Direct / Relay</span></td>
            <td><span class="badge-kms" data-i18n="assistant.providers.row4.sec">Hardware KMS Secure</span></td>
          </tr>
          <tr>
            <td style="font-weight: 600; color: var(--text);">Ollama (Local)</td>
            <td style="font-family: var(--mono); font-size: 0.8rem;">llama3.3, mistral, qwen2.5, phi-4</td>
            <td><span class="badge-neutral" data-i18n="assistant.providers.mode.direct_offline">Direct Offline</span></td>
            <td><span class="badge-local" data-i18n="assistant.providers.row5.sec">100% Local / Zero Cloud</span></td>
          </tr>
          <tr>
            <td style="font-weight: 600; color: var(--text);" data-i18n="assistant.providers.row6.provider">Bespoke &amp; Enterprise APIs</td>
            <td style="font-family: var(--mono); font-size: 0.8rem;" data-i18n="assistant.providers.row6.models">vLLM, LocalAI, internal OpenAI-compatible relays, custom models</td>
            <td><span class="badge-neutral" data-i18n="assistant.providers.row6.mode">Custom Base URL</span></td>
            <td><span class="badge-kms" data-i18n="assistant.providers.row6.sec">Zero Telemetry / On-Premise</span></td>
          </tr>
          <tr>
            <td style="font-weight: 600; color: var(--text);" data-i18n="assistant.providers.row7.provider">100+ via AIPlug Runtime</td>
            <td style="font-family: var(--mono); font-size: 0.8rem;" data-i18n="assistant.providers.row7.models">Mistral, Cohere, Bedrock, Together AI, Azure OpenAI, OpenRouter</td>
            <td><span class="badge-neutral" data-i18n="assistant.providers.row7.mode">AIPlug Unified Transport</span></td>
            <td><span class="badge-kms" data-i18n="assistant.providers.row7.sec">Unified BYOK &amp; KMS Secure</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<!-- Free docmd Cloud Relay Section -->
<section class="assistant-relay-section" aria-label="docmd Cloud Relay">
  <div class="container">
    <div class="section-header">
      <div class="section-tag" style="color:var(--assistant-accent);" data-i18n="assistant.tag.relay">Zero Infrastructure</div>
      <h2 class="section-title" data-i18n="assistant.relay.title">Free docmd Cloud Relay for static docs</h2>
      <p class="section-sub" data-i18n="assistant.relay.sub">Deploying on GitHub Pages, Cloudflare Pages, Netlify, or Vercel? Enable AI documentation assistance with zero server setup.</p>
    </div>

    <div class="relay-steps-grid">
      <div class="relay-step-card">
        <div class="relay-step-header">
          <div class="relay-step-num">01</div>
          <h3 class="relay-step-title" data-i18n="assistant.relay.step1.title">Connect Your Domain</h3>
        </div>
        <p class="relay-step-desc" data-i18n="assistant.relay.step1.desc">Sign in to cloud.docmd.io with GitHub and associate your documentation domain name.</p>
      </div>
      <div class="relay-step-card">
        <div class="relay-step-header">
          <div class="relay-step-num">02</div>
          <h3 class="relay-step-title" data-i18n="assistant.relay.step2.title">Save Encrypted BYOK Key</h3>
        </div>
        <p class="relay-step-desc" data-i18n="assistant.relay.step2.desc">Store your OpenAI, Anthropic, or Gemini API key. Encrypted at rest via hardware KMS envelopes.</p>
      </div>
      <div class="relay-step-card">
        <div class="relay-step-header">
          <div class="relay-step-num">03</div>
          <h3 class="relay-step-title" data-i18n="assistant.relay.step3.title">Paste Project ID in Config</h3>
        </div>
        <p class="relay-step-desc" data-i18n="assistant.relay.step3.desc">Add projectId to docmd.config.json. The client connects securely via domain-verified sessions.</p>
      </div>
    </div>

    <div class="relay-features-bar">
      <div class="relay-feature-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
        <span data-i18n="assistant.relay.feat1">Zero Backend Infrastructure</span>
      </div>
      <div class="relay-feature-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
        <span data-i18n="assistant.relay.feat2">Domain Whitelisting &amp; Abuse Guard</span>
      </div>
      <div class="relay-feature-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
        <span data-i18n="assistant.relay.feat3">Hardware KMS Envelope Encryption</span>
      </div>
      <div class="relay-feature-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
        <span data-i18n="assistant.relay.feat4">100% Free for Open Source</span>
      </div>
    </div>

    <div>
      <a href="https://cloud.docmd.io" target="_blank" rel="noopener" class="btn-primary" style="background:var(--assistant-accent); color:#fff; display: inline-flex;" data-i18n="assistant.relay.cta">Launch Cloud Relay Console →</a>
    </div>
  </div>
</section>

<!-- Developer Integration Section with Interactive Tabs -->
<section class="assistant-dev-section" aria-label="Developer Integration">
  <div class="container">
    <div class="section-header">
      <div class="section-tag" style="color:var(--assistant-accent);" data-i18n="assistant.tag.api">Developer Integration</div>
      <h2 class="section-title" data-i18n="assistant.api.title">Integrate in a few lines of code</h2>
      <p class="section-sub" data-i18n="assistant.api.sub">Choose between the zero-config framework plugin, the headless TypeScript engine, or extensible tool execution.</p>
    </div>
    <div class="dev-api-layout">
      <div class="dev-api-features">
        <div class="api-feat-card active" data-tab="tab-plugin" data-file="docmd.config.json">
          <div class="api-feat-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
          </div>
          <div>
            <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
              <h4 style="margin:0; font-size:0.92rem;">docmd.config.json</h4>
              <span class="badge-neutral" style="font-size:0.68rem; padding:1px 6px;">JSON</span>
            </div>
            <p style="margin:0; font-size:0.8rem; color:var(--text-3); line-height:1.45;" data-i18n="assistant.api.feat1.desc">Zero-config framework plugin. Enable the floating AI assistant and link Cloud Relay directly in your project configuration.</p>
          </div>
        </div>
        <div class="api-feat-card" data-tab="tab-node" data-file="assistant-engine.ts">
          <div class="api-feat-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
          </div>
          <div>
            <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
              <h4 style="margin:0; font-size:0.92rem;">assistant-engine.ts</h4>
              <span class="badge-neutral" style="font-size:0.68rem; padding:1px 6px;">TypeScript</span>
            </div>
            <p style="margin:0; font-size:0.8rem; color:var(--text-3); line-height:1.45;" data-i18n="assistant.api.feat2.desc">Headless engine for Node.js and modern runtimes. Initialise Anthropic, OpenAI, or Ollama and stream token deltas directly.</p>
          </div>
        </div>
        <div class="api-feat-card" data-tab="tab-tools" data-file="register-tools.ts">
          <div class="api-feat-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
          </div>
          <div>
            <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
              <h4 style="margin:0; font-size:0.92rem;">register-tools.ts</h4>
              <span class="badge-neutral" style="font-size:0.68rem; padding:1px 6px;">TypeScript</span>
            </div>
            <p style="margin:0; font-size:0.8rem; color:var(--text-3); line-height:1.45;" data-i18n="assistant.api.feat3.desc">Extensible tool execution. Register custom functions, documentation navigation, or server-side domain lookups.</p>
          </div>
        </div>
      </div>
      <div class="dev-api-code-col">
        <div class="dev-code-window" style="margin: 0;">
          <div class="dev-code-header">
            <div class="dev-code-dots">
              <span class="dev-code-dot red"></span>
              <span class="dev-code-dot yellow"></span>
              <span class="dev-code-dot green"></span>
            </div>
            <div class="dev-code-title" id="assistant-active-file">docmd.config.json</div>
            <button class="btn-copy-code" type="button" aria-label="Copy code">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
              Copy
            </button>
          </div>
          <div class="dev-code-body">
            <div class="dev-code-pane active" id="tab-plugin" data-file="docmd.config.json">
<pre style="margin: 0; font-family: var(--mono); font-size: 0.8rem; color: var(--text);">
<span style="color: var(--text-4);">// 1. Drop into docmd.config.json — zero server maintenance</span>
{
  <span style="color: var(--assistant-accent);">"plugins"</span>: {
    <span style="color: var(--assistant-accent);">"search"</span>: { <span style="color: var(--assistant-accent);">"indexBody"</span>: <span style="color: #f59e0b;">true</span> },
    <span style="color: var(--assistant-accent);">"ai"</span>: {
      <span style="color: var(--assistant-accent);">"assistant"</span>: <span style="color: #f59e0b;">true</span>,
      <span style="color: var(--assistant-accent);">"projectId"</span>: <span style="color: var(--assistant-accent-hover);">"docmd_aiv77jc8ms8qtpvd"</span>,
      <span style="color: var(--assistant-accent);">"position"</span>: <span style="color: var(--assistant-accent-hover);">"bottom-center"</span>,
      <span style="color: var(--assistant-accent);">"greeting"</span>: <span style="color: var(--assistant-accent-hover);">"How can I help with these docs today?"</span>
    }
  }
}</pre>
            </div>
            <div class="dev-code-pane" id="tab-node" data-file="assistant-engine.ts">
<pre style="margin: 0; font-family: var(--mono); font-size: 0.8rem; color: var(--text);">
<span style="color: var(--assistant-accent);">import</span> { DocmdAssistantEngine } <span style="color: var(--assistant-accent);">from</span> <span style="color: var(--assistant-accent-hover);">'docmd-assistant'</span>;

<span style="color: var(--text-4);">// Initialise headless engine with any provider or custom gateway</span>
<span style="color: var(--assistant-accent);">const</span> assistant = <span style="color: var(--assistant-accent);">new</span> <span style="color: var(--indigo);">DocmdAssistantEngine</span>({
  provider: <span style="color: var(--assistant-accent);">'anthropic'</span>,
  model: <span style="color: var(--assistant-accent);">'claude-3-5-haiku-20241022'</span>,
  apiKey: process.env.ANTHROPIC_API_KEY,
  systemPrompt: <span style="color: var(--assistant-accent);">'You are an expert technical guide for our documentation.'</span>
});

<span style="color: var(--text-4);">// Subscribe to streaming response deltas</span>
assistant.<span style="color: var(--indigo);">on</span>(<span style="color: var(--assistant-accent);">'chunk'</span>, (event) => process.stdout.write(event.data));

<span style="color: var(--assistant-accent);">const</span> response = <span style="color: var(--assistant-accent);">await</span> assistant.<span style="color: var(--indigo);">sendMessage</span>(<span style="color: var(--assistant-accent);">'How do I configure custom plugins?'</span>);
console.log(response.message);</pre>
            </div>
            <div class="dev-code-pane" id="tab-tools" data-file="register-tools.ts">
<pre style="margin: 0; font-family: var(--mono); font-size: 0.8rem; color: var(--text);">
<span style="color: var(--assistant-accent);">import</span> { DocmdAssistantEngine, createStandardTools } <span style="color: var(--assistant-accent);">from</span> <span style="color: var(--assistant-accent-hover);">'docmd-assistant'</span>;

<span style="color: var(--text-4);">// Connect via Cloud Relay with zero API key exposure on clients</span>
<span style="color: var(--assistant-accent);">const</span> assistant = <span style="color: var(--assistant-accent);">new</span> <span style="color: var(--indigo);">DocmdAssistantEngine</span>({
  projectId: <span style="color: var(--assistant-accent);">'docmd_aiv77jc8ms8qtpvd'</span>,
  endpoint: <span style="color: var(--assistant-accent);">'https://api.docmd.io/v1/ai/chat'</span>
});

<span style="color: var(--text-4);">// Register built-in search & navigation tools</span>
<span style="color: var(--assistant-accent);">for</span> (<span style="color: var(--assistant-accent);">const</span> tool <span style="color: var(--assistant-accent);">of</span> <span style="color: var(--indigo);">createStandardTools</span>()) {
  assistant.<span style="color: var(--indigo);">registerTool</span>(tool);
}

<span style="color: var(--text-4);">// Register custom domain tool (executed securely on server)</span>
assistant.<span style="color: var(--indigo);">registerTool</span>({
  name: <span style="color: var(--assistant-accent);">'lookup_account'</span>,
  description: <span style="color: var(--assistant-accent);">'Retrieve user account plan details'</span>,
  execute: <span style="color: var(--assistant-accent);">async</span> ({ email }) => ({ plan: <span style="color: var(--assistant-accent);">'enterprise'</span>, active: <span style="color: #f59e0b;">true</span> })
});</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="faq-section" aria-label="Frequently asked questions">
  <div class="container">
    <h2 class="section-title" data-i18n="assistant.faq.title">Frequently asked questions</h2>
    <p class="section-sub" style="margin-bottom:28px; text-align:center;" data-i18n="assistant.faq.sub">Common questions about docmd-assistant, security, and the AI plugin.</p>
    <details class="faq-item">
      <summary data-i18n="assistant.faq.q1">How does the assistant ground answers in my docs?</summary>
      <div class="faq-answer" data-i18n-html="assistant.faq.a1">Before querying the language model, the engine retrieves relevant passages from your documentation's pre-compiled search index and includes them in the prompt. Every response cites the exact documentation file it used.</div>
    </details>
    <details class="faq-item">
      <summary data-i18n="assistant.faq.q2">How does docmd Cloud Relay keep my API keys secure?</summary>
      <div class="faq-answer" data-i18n-html="assistant.faq.a2">Your provider API keys are encrypted with AWS KMS hardware envelope encryption at rest. The relay decrypts keys only in memory during the request lifecycle, enforces domain whitelisting, and never transmits credentials to the browser.</div>
    </details>
    <details class="faq-item">
      <summary data-i18n="assistant.faq.q3">Can I run the assistant completely offline?</summary>
      <div class="faq-answer" data-i18n-html="assistant.faq.a3">Yes. By connecting to local Ollama (e.g. http://localhost:11434), the entire pipeline – vector search retrieval and LLM response generation – runs 100% offline on your own hardware with zero cloud calls.</div>
    </details>
    <details class="faq-item">
      <summary data-i18n="assistant.faq.q4">Does docmd retain user questions or documentation data?</summary>
      <div class="faq-answer" data-i18n-html="assistant.faq.a4">No. docmd operates on a zero-retention policy. Questions and answers are streamed transiently and never stored, logged, or used for model training.</div>
    </details>
  </div>
</section>

<section class="cta-section cta-section-with-sponsor" aria-label="Get started">
  <div class="container">
    <div class="cta-card assistant-cta-card">
      <h2 data-i18n="assistant.cta.title">Add an AI assistant to your docs</h2>
      <p class="section-sub" style="margin-bottom:24px;" data-i18n="assistant.cta.desc">Open source, works with any documentation site. Set up in minutes.</p>
      <div class="cta-actions">
        <a href="https://docs.docmd.io/guides/ai/ai-assistant/" class="btn-primary" style="background:var(--assistant-accent); color:#fff;" data-i18n="cta.docs">Read Documentation</a>
        <a href="https://github.com/docmd-io/docmd-assistant" class="btn-secondary" target="_blank" rel="noopener" data-i18n="cta.github">Star on GitHub</a>
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