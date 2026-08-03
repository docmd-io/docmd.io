---
title: "docmd-assistant — AI-Powered Docs Assistant, Any LLM"
description: "AI assistant that reads your documentation and answers questions in context. Works with 100+ models, any website, and keeps your API keys secure."
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
      <a href="https://cloud.docmd.io" class="nav-link" data-i18n="nav.cloud">Cloud</a>
      <a href="/assistant/" class="nav-link" style="color:var(--assistant-accent); font-weight:600;" data-i18n="nav.assistant">AI Assistant</a>
      <a href="/search/" class="nav-link" data-i18n="nav.search">Semantic Search</a>
      <a href="https://live.docmd.io" class="nav-link" data-i18n="nav.editor">Live Editor</a>
      <span class="nav-divider"></span>
      <a href="https://docs.docmd.io/" class="nav-link" data-i18n="nav.docs">Documentation</a>
      <a href="https://docs.docmd.io/plugins/usage/" class="nav-link" data-i18n="nav.plugins">Plugins</a>
      <a href="https://docs.docmd.io/comparison/" class="nav-link" data-i18n="nav.compare">Comparison</a>
    </div>
    <button class="nav-dropdown-toggle" aria-label="Toggle menu">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
    </button>
    <div class="nav-dropdown-menu">
      <a href="https://cloud.docmd.io" class="nav-link" data-i18n="nav.cloud">Cloud</a>
      <a href="/assistant/" class="nav-link" style="color:var(--assistant-accent); font-weight:600;" data-i18n="nav.assistant">AI Assistant</a>
      <a href="/search/" class="nav-link" data-i18n="nav.search">Semantic Search</a>
      <a href="https://live.docmd.io" class="nav-link" data-i18n="nav.editor">Live Editor</a>
      <span class="nav-divider"></span>
      <a href="https://docs.docmd.io/" class="nav-link" data-i18n="nav.docs">Documentation</a>
      <a href="https://docs.docmd.io/plugins/usage/" class="nav-link" data-i18n="nav.plugins">Plugins</a>
      <a href="https://docs.docmd.io/comparison/" class="nav-link" data-i18n="nav.compare">Comparison</a>
    </div>
    <div class="nav-right">
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
  <div class="assistant-bg-grid">
    <svg width="100%" height="100%" viewBox="-100 0 1400 400" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="aiGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="var(--assistant-accent)" stop-opacity="0.05" />
          <stop offset="50%" stop-color="var(--assistant-cyan)" stop-opacity="0.75" />
          <stop offset="100%" stop-color="var(--assistant-emerald)" stop-opacity="0.05" />
        </linearGradient>
        <linearGradient id="aiGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="var(--assistant-cyan)" stop-opacity="0.05" />
          <stop offset="50%" stop-color="var(--assistant-accent)" stop-opacity="0.7" />
          <stop offset="100%" stop-color="var(--assistant-accent)" stop-opacity="0.05" />
        </linearGradient>
      </defs>
      <!-- Clean, Non-Overlapping AI Wave Streams with Uniform 1.8px Thickness -->
      <path d="M -100 80 Q 300 20 650 90 T 1300 40" fill="none" stroke="url(#aiGradient1)" stroke-width="1.8" class="ai-stream-beam ai-p-1" />
      <path d="M -100 200 Q 350 260 700 180 T 1300 220" fill="none" stroke="url(#aiGradient2)" stroke-width="1.8" class="ai-stream-beam ai-p-2" />
      <path d="M -100 320 Q 400 270 750 340 T 1300 290" fill="none" stroke="url(#aiGradient1)" stroke-width="1.8" class="ai-stream-beam ai-p-3" />
    </svg>
  </div>
  <div class="container">
    <a href="https://www.npmjs.com/package/docmd-assistant" target="_blank" rel="noopener" class="hero-badge assistant-badge">
      <span class="badge-dot" style="background:var(--assistant-accent);"></span>
      <span id="npm-version-assistant" data-i18n="assistant.hero.badge">docmd-assistant v0.1.0</span> <span data-i18n="assistant.hero.badgeCta">is now available →</span>
    </a>
    <h1 data-i18n-html="assistant.hero.title">AI assistant grounded in your docs.<br>Any LLM provider. <span class="gradient-text-assistant">Your keys never leave your server.</span></h1>
    <p class="hero-sub" data-i18n="assistant.hero.sub">Reads your documentation, answers questions in context. Works with 100+ models, any website, and keeps your API keys secure.</p>
    <div class="hero-actions">
      <a href="https://docs.docmd.io/assistant/" class="btn-primary" style="background:var(--assistant-accent); color:#fff;" data-i18n="assistant.hero.cta">Get Started</a>
      <button class="btn-code" onclick="copyCmd(this)" data-cmd="npm install docmd-assistant">
        <span class="dollar" style="color:var(--assistant-accent);">$</span> npm install docmd-assistant
      </button>
    </div>
    <div class="hero-metrics">
      <span class="metric-badge" style="background:var(--assistant-soft); border-color:var(--assistant-border); color:var(--assistant-accent);">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" style="vertical-align:-1px; margin-right:4px;"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
        <span data-i18n="assistant.hero.metric.engine">Headless Core Engine</span>
      </span>
      <span class="metric-badge" style="background:var(--assistant-soft); border-color:var(--assistant-border); color:var(--assistant-accent);">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" style="vertical-align:-1px; margin-right:4px;"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        <span data-i18n="assistant.hero.metric.byok">Server-Side BYOK</span>
      </span>
      <span class="metric-badge" style="background:var(--assistant-soft); border-color:var(--assistant-border); color:var(--assistant-accent);">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" style="vertical-align:-1px; margin-right:4px;"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <span data-i18n="assistant.hero.metric.rag">Search-Aware RAG</span>
      </span>
      <span class="metric-badge" style="background:var(--assistant-soft); border-color:var(--assistant-border); color:var(--assistant-accent);">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" style="vertical-align:-1px; margin-right:4px;"><path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2"/></svg>
        <span data-i18n="assistant.hero.metric.models">100+ AI Models</span>
      </span>
    </div>
    <div class="demo-sandbox" style="border-color:var(--assistant-border);">
      <div class="sandbox-header">
        <div class="sandbox-dots">
          <span class="sandbox-dot" style="background:#ef4444"></span>
          <span class="sandbox-dot" style="background:#f59e0b"></span>
          <span class="sandbox-dot" style="background:#10b981"></span>
        </div>
        <div class="sandbox-title" data-i18n="assistant.sandbox.title">docmd-assistant runtime demo</div>
        <div style="width: 42px"></div>
      </div>
      <div class="sandbox-search-bar">
        <div class="sandbox-search-icon" style="color:var(--assistant-accent)">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2"/></svg>
        </div>
        <div class="sandbox-input-simulate" data-i18n="assistant.sandbox.query">How do I configure multi-workspace routing in docmd?</div>
      </div>
      <div class="sandbox-results">
        <div class="sandbox-card" style="border-color:var(--assistant-border);">
          <div class="sandbox-card-header">
            <div>
              <div class="sandbox-card-title" data-i18n="assistant.sandbox.card.title">docmd assistant response</div>
              <span class="sandbox-card-path" data-i18n="assistant.sandbox.card.path">RAG Context: /configuration/workspaces & docmd.config.json</span>
            </div>
            <span class="sandbox-score high" style="background:var(--assistant-soft); color:var(--assistant-accent);" data-i18n="assistant.sandbox.card.model">OpenAI gpt-4o-mini</span>
          </div>
          <div class="sandbox-card-body" data-i18n-html="assistant.sandbox.card.body">
            To configure multi-workspace routing, define a top-level <code>workspaces</code> array inside your <code>docmd.config.json</code> with <code>prefix</code> and <code>src</code> properties for each project site.
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
    <div class="bento-grid">
      <div class="bento-card tint-purple">
        <div>
          <div class="bento-icon" style="background:var(--assistant-soft); color:var(--assistant-accent);">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
          </div>
          <h3 data-i18n="assistant.feature.headless.title">Headless, Use Anywhere</h3>
          <p data-i18n-html="assistant.feature.headless.desc"><code>docmd-assistant</code> is a standalone library with no UI opinions. Integrate it into React, Vue, Svelte, Node.js, or any JavaScript application.</p>
        </div>
        <div class="bento-code-box">DocmdAssistantEngine (ESM/CJS)</div>
      </div>
      <div class="bento-card tint-pink">
        <div>
          <div class="bento-icon" style="background:rgba(13, 148, 136, 0.12); color:var(--assistant-accent);">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <h3 data-i18n="assistant.feature.byok.title">API Keys Stay on Your Server</h3>
          <p data-i18n-html="assistant.feature.byok.desc">Your AI provider credentials remain securely on the server. The browser client never holds, transmits, or exposes raw API keys.</p>
        </div>
        <div class="bento-code-box">KMS Envelope Encryption</div>
      </div>
      <div class="bento-card tint-emerald">
        <div>
          <div class="bento-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          </div>
          <h3 data-i18n="assistant.feature.rag.title">Answers Grounded in Your Content</h3>
          <p data-i18n-html="assistant.feature.rag.desc">Before answering, the engine retrieves relevant passages from your documentation using <code>docmd-search</code> indices, so responses are accurate and context-aware.</p>
        </div>
        <div class="bento-code-box">RAG Search Index Binding</div>
      </div>
    </div>
  </div>
</section>

<section class="built-for" style="padding: 56px 0 30px;">
  <div class="container">
    <div class="section-header">
      <div class="section-tag" style="color:var(--assistant-accent);" data-i18n="assistant.tag.providers">LLM Providers</div>
      <h2 class="section-title" data-i18n="assistant.providers.title">Works with any AI provider</h2>
      <p class="section-sub" data-i18n="assistant.providers.sub">Connect to cloud providers directly or route securely through a relay. Run entirely offline with local models.</p>
    </div>
    <div style="max-width: 860px; margin: 0 auto; text-align: left; overflow-x: auto;">
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 0.875rem;">
        <thead>
          <tr style="border-bottom: 2px solid var(--border); color: var(--text-4); font-weight: 600;">
            <th style="padding: 14px 12px; text-align: left;" data-i18n="assistant.providers.th.provider">Provider</th>
            <th style="padding: 14px 12px; text-align: center;" data-i18n="assistant.providers.th.models">Supported Models</th>
            <th style="padding: 14px 12px; text-align: center;" data-i18n="assistant.providers.th.mode">Connection Mode</th>
            <th style="padding: 14px 12px; text-align: left;" data-i18n="assistant.providers.th.security">Security Architecture</th>
          </tr>
        </thead>
        <tbody style="color: var(--text-2);">
          <tr style="border-bottom: 1px solid var(--border);">
            <td style="padding: 14px 12px; font-weight: 600; color: var(--text);">OpenAI</td>
            <td style="padding: 14px 12px; text-align: center; font-family: var(--mono); font-size: 0.8rem;">gpt-4o, gpt-4o-mini</td>
            <td style="padding: 14px 12px; text-align: center; font-family: var(--mono); font-size: 0.8rem;">Direct / Relay</td>
            <td style="padding: 14px 12px; font-weight: 600; color: var(--assistant-accent);" data-i18n="assistant.providers.row1.sec">Server-side KMS Envelope Encryption</td>
          </tr>
          <tr style="border-bottom: 1px solid var(--border);">
            <td style="padding: 14px 12px; font-weight: 600; color: var(--text);">Anthropic</td>
            <td style="padding: 14px 12px; text-align: center; font-family: var(--mono); font-size: 0.8rem;">claude-3-5-sonnet, haiku</td>
            <td style="padding: 14px 12px; text-align: center; font-family: var(--mono); font-size: 0.8rem;">Direct / Relay</td>
            <td style="padding: 14px 12px; font-weight: 600; color: var(--assistant-accent);" data-i18n="assistant.providers.row2.sec">Server-side KMS Envelope Encryption</td>
          </tr>
          <tr style="border-bottom: 1px solid var(--border);">
            <td style="padding: 14px 12px; font-weight: 600; color: var(--text);">Google Gemini</td>
            <td style="padding: 14px 12px; text-align: center; font-family: var(--mono); font-size: 0.8rem;">gemini-1.5-flash, pro</td>
            <td style="padding: 14px 12px; text-align: center; font-family: var(--mono); font-size: 0.8rem;">Direct / Relay</td>
            <td style="padding: 14px 12px;" data-i18n="assistant.providers.row3.sec">Server-side KMS Envelope Encryption</td>
          </tr>
          <tr style="border-bottom: 1px solid var(--border);">
            <td style="padding: 14px 12px; font-weight: 600; color: var(--text);">DeepSeek &amp; Groq</td>
            <td style="padding: 14px 12px; text-align: center; font-family: var(--mono); font-size: 0.8rem;">deepseek-chat, llama-3.3</td>
            <td style="padding: 14px 12px; text-align: center; font-family: var(--mono); font-size: 0.8rem;">Direct / Relay</td>
            <td style="padding: 14px 12px;" data-i18n="assistant.providers.row4.sec">Server-side KMS Envelope Encryption</td>
          </tr>
          <tr style="border-bottom: 1px solid var(--border);">
            <td style="padding: 14px 12px; font-weight: 600; color: var(--text);">Ollama (Local)</td>
            <td style="padding: 14px 12px; text-align: center; font-family: var(--mono); font-size: 0.8rem;">llama3, mistral, qwen</td>
            <td style="padding: 14px 12px; text-align: center; font-family: var(--mono); font-size: 0.8rem;">Direct Offline</td>
            <td style="padding: 14px 12px;" data-i18n="assistant.providers.row5.sec">100% Local / Zero Cloud</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<section class="built-for" style="padding: 56px 0 30px;">
  <div class="container" style="max-width: 860px; text-align: left;">
    <div class="section-header">
      <div class="section-tag" style="color:var(--assistant-accent);" data-i18n="assistant.tag.api">Developer Integration</div>
      <h2 class="section-title" data-i18n="assistant.api.title">Integrate in a few lines of code</h2>
      <p class="section-sub" data-i18n="assistant.api.sub">Create an engine instance, connect your search index, and start answering questions. Supports streaming, custom tools, and full conversation history.</p>
    </div>
    <div style="background: var(--surface); border: 1px solid var(--border); border-radius: var(--r-lg); padding: 24px; overflow-x: auto; margin-bottom: 24px; box-shadow: var(--shadow-sm);">
<pre style="margin: 0; font-family: var(--mono); font-size: 0.8rem; color: var(--text);">
<span style="color: var(--assistant-accent);">import</span> { DocmdAssistantEngine } <span style="color: var(--assistant-accent);">from</span> <span style="color: var(--assistant-accent-hover);">'docmd-assistant'</span>;
<span style="color: var(--assistant-accent);">import</span> * <span style="color: var(--assistant-accent);">as</span> Search <span style="color: var(--assistant-accent);">from</span> <span style="color: var(--assistant-accent-hover);">'@docmd/plugin-search/client'</span>;

<span style="color: var(--text-4);">
// 1. Initialise engine instance with provider configuration</span>
<span style="color: var(--assistant-accent);">const</span> engine = <span style="color: var(--assistant-accent);">new</span> <span style="color: var(--indigo);">DocmdAssistantEngine</span>({
  provider: <span style="color: var(--assistant-accent);">'openai'</span>,
  model: <span style="color: var(--assistant-accent);">'gpt-4o-mini'</span>,
  systemPrompt: <span style="color: var(--assistant-accent);">'You are a helpful software documentation assistant.'</span>,
  ragCallback: <span style="color: var(--assistant-accent);">async</span> (query) => {
    <span style="color: var(--assistant-accent);">const</span> matches = <span style="color: var(--assistant-accent);">await</span> Search.<span style="color: var(--indigo);">search</span>(query, <span style="color: #f59e0b;">5</span>);
    <span style="color: var(--assistant-accent);">return</span> matches.map(m => m.chunk.text).join(<span style="color: var(--assistant-accent);">'\\n\\n'</span>);
  }
});

<span style="color: var(--text-4);">
// 2. Register custom client-side execution tool</span>
engine.<span style="color: var(--indigo);">registerTool</span>({
  name: <span style="color: var(--assistant-accent);">'fetch_user_workspace'</span>,
  description: <span style="color: var(--assistant-accent);">'Retrieve active workspace configuration'</span>,
  parameters: { type: <span style="color: var(--assistant-accent);">'object'</span>, properties: { workspaceId: { type: <span style="color: var(--assistant-accent);">'string'</span> } } },
  handler: <span style="color: var(--assistant-accent);">async</span> ({ workspaceId }) => ({ activeTheme: <span style="color: var(--assistant-accent);">'summer'</span>, mode: <span style="color: var(--assistant-accent);">'spa'</span> })
});

<span style="color: var(--text-4);">
// 3. Listen to real-time stream events and execute query turn</span>
engine.<span style="color: var(--indigo);">on</span>(<span style="color: var(--assistant-accent);">'token'</span>, (chunk) => process.stdout.write(chunk));
<span style="color: var(--assistant-accent);">await</span> engine.<span style="color: var(--indigo);">sendMessage</span>(<span style="color: var(--assistant-accent);">'How do I set up custom navigation in docmd?'</span>);</pre>
    </div>
  </div>
</section>

<section class="faq-section" aria-label="Frequently asked questions">
  <div class="container">
    <h2 class="section-title" data-i18n="assistant.faq.title">Frequently asked questions</h2>
    <p class="section-sub" style="margin-bottom:28px; text-align:center;" data-i18n="assistant.faq.sub">Common questions about docmd-assistant and the AI plugin.</p>
    <details class="faq-item">
      <summary data-i18n="assistant.faq.q1">How does it know the right answer?</summary>
      <div class="faq-answer" data-i18n-html="assistant.faq.a1">Before querying the language model, the engine retrieves relevant passages from your documentation's search index and includes them in the prompt. This grounds every answer in your actual content.</div>
    </details>
    <details class="faq-item">
      <summary data-i18n="assistant.faq.q2">Are my API keys safe?</summary>
      <div class="faq-answer" data-i18n-html="assistant.faq.a2">Yes. API keys are decrypted and used only on the server side. The browser client never receives, stores, or transmits raw credentials.</div>
    </details>
    <details class="faq-item">
      <summary data-i18n="assistant.faq.q3">Can it run completely offline?</summary>
      <div class="faq-answer" data-i18n-html="assistant.faq.a3">Yes. By connecting to a local model provider like Ollama, the entire pipeline — search retrieval and AI response — runs on your own hardware with no external network requests.</div>
    </details>
  </div>
</section>

<section class="cta-section" aria-label="Get started">
  <div class="container">
    <h2 data-i18n="assistant.cta.title">Add an AI assistant to your docs</h2>
    <p class="section-sub" style="margin-bottom:20px;" data-i18n="assistant.cta.desc">Open source, works with any documentation site. Set up in minutes.</p>
    <div class="cta-actions">
      <a href="https://docs.docmd.io/assistant/" class="btn-primary" style="background:var(--assistant-accent); color:#fff;" data-i18n="cta.docs">Read Documentation</a>
      <a href="https://github.com/docmd-io/docmd-assistant" class="btn-secondary" target="_blank" rel="noopener" data-i18n="cta.github">Star on GitHub</a>
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
      <p data-i18n-html="footer.tagline">The zero-config documentation engine.<br>Open source under MIT License.</p>
    </div>
    <div class="footer-col">
      <h4 data-i18n="footer.product">Product</h4>
      <a href="https://docs.docmd.io/getting-started/installation/" data-i18n="footer.installation">Installation</a>
      <a href="https://docs.docmd.io/configuration/overview/" data-i18n="footer.configuration">Configuration</a>
      <a href="https://docs.docmd.io/reference/cli-commands/" data-i18n="footer.cli">CLI Reference</a>
    </div>
    <div class="footer-col">
      <h4 data-i18n="footer.features">Features</h4>
      <a href="https://docs.docmd.io/content/containers/" data-i18n="footer.containers">UI Containers</a>
      <a href="https://docs.docmd.io/theming/available-themes/" data-i18n="footer.theming">Theming</a>
      <a href="https://docs.docmd.io/plugins/usage/" data-i18n="footer.plugins">Plugins</a>
    </div>
    <div class="footer-col">
      <h4 data-i18n="footer.ecosystem">Ecosystem</h4>
      <a href="https://github.com/docmd-io/docmd">GitHub</a>
      <a href="https://cloud.docmd.io" data-i18n="nav.cloud">Cloud</a>
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