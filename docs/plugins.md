---
title: "docmd Plugins – Marketplace"
description: "Browse every official docmd plugin. Search, filter by tag, and view capabilities, permissions, and install instructions."
titleAppend: false
noStyle: true
keywords:
  - "docmd"
  - "plugins"
  - "marketplace"
  - "documentation"
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
  <meta property="og:title" content="docmd Plugins Marketplace">
  <meta property="og:description" content="Browse 13 official docmd plugins. Search, filter by tag, view capabilities and permissions.">
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
      <a href="/plugins/" class="nav-link active active-plugins" data-i18n="nav.plugins">Plugins</a>
      <a href="/assistant/" class="nav-link" data-i18n="nav.assistant">AI Assistant</a>
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
      <a href="/plugins/" class="nav-link" data-i18n="nav.plugins">Plugins</a>
      <a href="/assistant/" class="nav-link" data-i18n="nav.assistant">AI Assistant</a>
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
          <a class="lang-option active" href="/plugins/" data-lang="en">
            <svg class="lang-flag" width="16" height="12" viewBox="0 0 60 30"><path fill="#012169" d="M0 0h60v30H0z"/><path stroke="#fff" stroke-width="6" d="m0 0 60 30m0-30L0 30"/><path stroke="#C8102E" stroke-width="4" d="m0 0 60 30m0-30L0 30"/><path stroke="#fff" stroke-width="10" d="M30 0v30M0 15h60"/><path stroke="#C8102E" stroke-width="6" d="M30 0v30M0 15h60"/></svg>
            English
          </a>
          <a class="lang-option" href="/de/plugins/" data-lang="de">
            <svg class="lang-flag" width="16" height="12" viewBox="0 0 5 3"><rect width="5" height="3" fill="#000"/><rect width="5" height="2" y="1" fill="#D00"/><rect width="5" height="1" y="2" fill="#FFCE00"/></svg>
            Deutsch
          </a>
          <a class="lang-option" href="/zh/plugins/" data-lang="zh">
            <svg class="lang-flag" width="16" height="12" viewBox="0 0 30 20"><path fill="#de2910" d="M0 0h30v20H0z"/><path fill="#ffde00" d="M6 2 4.4 6.8 8.6 3.8H3.4l4.2 3L6 2zm6 1-1.3 2 .8-2.3h1.1L12 4.3l.6-1.3zm3 2-1.3 2 .8-2.3h1.1L15 6.3l.6-1.3zm1 4-1.3 2 .8-2.3h1.1L16 10.3l.6-1.3zm-2 3-1.3 2 .8-2.3h1.1L14 13.3l.6-1.3z"/></svg>
            中文
          </a>
          <a class="lang-option" href="/es/plugins/" data-lang="es">
            <svg class="lang-flag" width="16" height="12" viewBox="0 0 750 500"><rect width="750" height="500" fill="#c60b1e"/><rect width="750" height="250" y="125" fill="#ffc400"/></svg>
            Español
          </a>
          <a class="lang-option" href="/ja/plugins/" data-lang="ja">
            <svg class="lang-flag" width="16" height="12" viewBox="0 0 900 600"><rect width="900" height="600" fill="#fff"/><circle cx="450" cy="300" r="180" fill="#bc002d"/></svg>
            日本語
          </a>
          <a class="lang-option" href="/fr/plugins/" data-lang="fr">
            <svg class="lang-flag" width="16" height="12" viewBox="0 0 3 2"><rect width="1" height="2" fill="#002395"/><rect width="1" height="2" x="1" fill="#fff"/><rect width="1" height="2" x="2" fill="#ed2939"/></svg>
            Français
          </a>
          <a class="lang-option" href="/ru/plugins/" data-lang="ru">
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
<header class="mp-hero">
  <div class="container">
    <h1 data-i18n-html="marketplace.title">Plugin <span class="gradient-text">marketplace.</span></h1>
    <p class="hero-sub" data-i18n="marketplace.sub">Every official plugin for docmd, in one place. Built-ins ship with the core. Installable plugins add with one command. Filter by tag or capability, then click through for install instructions and the full permission table.</p>
    <div class="mp-hero-actions">
      <a class="btn-primary mp-hero-add-btn" href="https://github.com/docmd-io/docmd.io/issues/new?template=submit-plugin.yml" target="_blank" rel="noopener">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
        <span data-i18n="marketplace.submitPlugin">Submit Plugin</span>
      </a>
    </div>
    <div class="mp-hero-stats">
      <span data-i18n-html="marketplace.stats.plugins"><strong>13</strong> plugins</span>
      <span data-i18n-html="marketplace.stats.tags"><strong>36</strong> tags</span>
    </div>
  </div>
</header>

<div class="container">
  <div class="mp-layout">
    <aside class="mp-sidebar" aria-label="Plugin filters">
      <div class="mp-search">
        <span class="mp-search-icon" aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        </span>
        <input id="mp-search-input" type="search" placeholder="Search plugins…" aria-label="Search plugins" data-i18n-placeholder="marketplace.search.placeholder"/>
      </div>

      <div class="mp-filter-group">
        <h3 data-i18n="marketplace.filter.type">Type</h3>
        <ul class="mp-filter-list">
          <li><label class="mp-filter-option"><input type="checkbox" data-group="kind" value="builtin"/> <span data-i18n="marketplace.filter.builtin">Built-in</span><span class="mp-filter-count">10</span></label></li>
          <li><label class="mp-filter-option"><input type="checkbox" data-group="kind" value="installable"/> <span data-i18n="marketplace.filter.installable">Installable</span><span class="mp-filter-count">3</span></label></li>
        </ul>
      </div>

      <div class="mp-filter-group">
        <h3 data-i18n="marketplace.filter.tags">Tags</h3>
        <ul class="mp-filter-list">
            <li><label class="mp-filter-option"><input type="checkbox" data-group="tag" value="agents"/> agents<span class="mp-filter-count">1</span></label></li>
            <li><label class="mp-filter-option"><input type="checkbox" data-group="tag" value="ai"/> ai<span class="mp-filter-count">3</span></label></li>
            <li><label class="mp-filter-option"><input type="checkbox" data-group="tag" value="analytics"/> analytics<span class="mp-filter-count">1</span></label></li>
            <li><label class="mp-filter-option"><input type="checkbox" data-group="tag" value="api"/> api<span class="mp-filter-count">1</span></label></li>
            <li><label class="mp-filter-option"><input type="checkbox" data-group="tag" value="chat"/> chat<span class="mp-filter-count">1</span></label></li>
            <li><label class="mp-filter-option"><input type="checkbox" data-group="tag" value="client-side"/> client-side<span class="mp-filter-count">1</span></label></li>
            <li><label class="mp-filter-option"><input type="checkbox" data-group="tag" value="comments"/> comments<span class="mp-filter-count">1</span></label></li>
            <li><label class="mp-filter-option"><input type="checkbox" data-group="tag" value="community"/> community<span class="mp-filter-count">1</span></label></li>
            <li><label class="mp-filter-option"><input type="checkbox" data-group="tag" value="context"/> context<span class="mp-filter-count">1</span></label></li>
            <li><label class="mp-filter-option"><input type="checkbox" data-group="tag" value="diagrams"/> diagrams<span class="mp-filter-count">1</span></label></li>
            <li><label class="mp-filter-option"><input type="checkbox" data-group="tag" value="git"/> git<span class="mp-filter-count">1</span></label></li>
            <li><label class="mp-filter-option"><input type="checkbox" data-group="tag" value="history"/> history<span class="mp-filter-count">1</span></label></li>
            <li><label class="mp-filter-option"><input type="checkbox" data-group="tag" value="index"/> index<span class="mp-filter-count">1</span></label></li>
            <li><label class="mp-filter-option"><input type="checkbox" data-group="tag" value="katex"/> katex<span class="mp-filter-count">1</span></label></li>
            <li><label class="mp-filter-option"><input type="checkbox" data-group="tag" value="knowledge"/> knowledge<span class="mp-filter-count">1</span></label></li>
            <li><label class="mp-filter-option"><input type="checkbox" data-group="tag" value="latex"/> latex<span class="mp-filter-count">1</span></label></li>
            <li><label class="mp-filter-option"><input type="checkbox" data-group="tag" value="live"/> live<span class="mp-filter-count">1</span></label></li>
            <li><label class="mp-filter-option"><input type="checkbox" data-group="tag" value="llm"/> llm<span class="mp-filter-count">1</span></label></li>
            <li><label class="mp-filter-option"><input type="checkbox" data-group="tag" value="markdown"/> markdown<span class="mp-filter-count">1</span></label></li>
            <li><label class="mp-filter-option"><input type="checkbox" data-group="tag" value="math"/> math<span class="mp-filter-count">1</span></label></li>
            <li><label class="mp-filter-option"><input type="checkbox" data-group="tag" value="mermaid"/> mermaid<span class="mp-filter-count">1</span></label></li>
            <li><label class="mp-filter-option"><input type="checkbox" data-group="tag" value="meta"/> meta<span class="mp-filter-count">1</span></label></li>
            <li><label class="mp-filter-option"><input type="checkbox" data-group="tag" value="metadata"/> metadata<span class="mp-filter-count">1</span></label></li>
            <li><label class="mp-filter-option"><input type="checkbox" data-group="tag" value="metrics"/> metrics<span class="mp-filter-count">1</span></label></li>
            <li><label class="mp-filter-option"><input type="checkbox" data-group="tag" value="offline"/> offline<span class="mp-filter-count">1</span></label></li>
            <li><label class="mp-filter-option"><input type="checkbox" data-group="tag" value="openapi"/> openapi<span class="mp-filter-count">1</span></label></li>
            <li><label class="mp-filter-option"><input type="checkbox" data-group="tag" value="opengraph"/> opengraph<span class="mp-filter-count">1</span></label></li>
            <li><label class="mp-filter-option"><input type="checkbox" data-group="tag" value="pwa"/> pwa<span class="mp-filter-count">1</span></label></li>
            <li><label class="mp-filter-option"><input type="checkbox" data-group="tag" value="rag"/> rag<span class="mp-filter-count">1</span></label></li>
            <li><label class="mp-filter-option"><input type="checkbox" data-group="tag" value="search"/> search<span class="mp-filter-count">1</span></label></li>
            <li><label class="mp-filter-option"><input type="checkbox" data-group="tag" value="seo"/> seo<span class="mp-filter-count">2</span></label></li>
            <li><label class="mp-filter-option"><input type="checkbox" data-group="tag" value="service-worker"/> service-worker<span class="mp-filter-count">1</span></label></li>
            <li><label class="mp-filter-option"><input type="checkbox" data-group="tag" value="sitemap"/> sitemap<span class="mp-filter-count">1</span></label></li>
            <li><label class="mp-filter-option"><input type="checkbox" data-group="tag" value="swagger"/> swagger<span class="mp-filter-count">1</span></label></li>
            <li><label class="mp-filter-option"><input type="checkbox" data-group="tag" value="tracking"/> tracking<span class="mp-filter-count">1</span></label></li>
            <li><label class="mp-filter-option"><input type="checkbox" data-group="tag" value="xml"/> xml<span class="mp-filter-count">1</span></label></li>
        </ul>
      </div>

      <button id="mp-clear" class="mp-clear" type="button" data-i18n="marketplace.filter.clear">Clear filters</button>

      <div class="mp-filter-group" style="margin-top:auto;">
        <a class="btn-primary mp-sidebar-add" href="https://github.com/docmd-io/docmd.io/issues/new?template=submit-plugin.yml" target="_blank" rel="noopener">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          <span data-i18n="marketplace.submitPlugin">Submit Plugin</span>
        </a>
        <p style="font-size:0.75rem;color:var(--mp-text-muted);margin:0;line-height:1.5;">
          <span data-i18n="marketplace.filter.showing">Showing</span> <strong id="mp-count" style="color:var(--mp-text-primary);">13</strong> <span data-i18n="marketplace.filter.of">of</span> 13.
          <br/><br/>
          <span data-i18n-html="marketplace.filter.contribute">Want to list your plugin? Click &ldquo;Submit Plugin&rdquo; above or open a PR adding it to <code>data/plugins.json</code>.</span>
        </p>
      </div>
    </aside>

    <div class="mp-grid" id="mp-grid">
      <a class="mp-card" href="/plugins/ai/" data-name="AI Chat" data-desc="Interactive AI chat grounded in your docs." data-kind="builtin" data-tags="chat,ai,rag">
        <div class="mp-card-head">
          <div class="mp-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/></svg></div>
          <div class="mp-card-title-row">
            <h3 class="mp-card-title" data-i18n="marketplace.plugin.ai.name">AI Chat</h3>
            <span class="mp-card-kind mp-card-kind-builtin" data-i18n="marketplace.filter.builtin">Built-in</span>
          </div>
        </div>
        <p class="mp-card-desc" data-i18n="marketplace.plugin.ai.tagline">Interactive AI chat grounded in your docs.</p>
        <div class="mp-card-tags"><span class="mp-tag">chat</span><span class="mp-tag">ai</span><span class="mp-tag">rag</span></div>
      </a>
      <a class="mp-card" href="/plugins/git/" data-name="Git" data-desc="Last-updated timestamps and commit history from git." data-kind="builtin" data-tags="git,history,metadata">
        <div class="mp-card-head">
          <div class="mp-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/></svg></div>
          <div class="mp-card-title-row">
            <h3 class="mp-card-title" data-i18n="marketplace.plugin.git.name">Git</h3>
            <span class="mp-card-kind mp-card-kind-builtin" data-i18n="marketplace.filter.builtin">Built-in</span>
          </div>
        </div>
        <p class="mp-card-desc" data-i18n="marketplace.plugin.git.tagline">Last-updated timestamps and commit history from git.</p>
        <div class="mp-card-tags"><span class="mp-tag">git</span><span class="mp-tag">history</span><span class="mp-tag">metadata</span></div>
      </a>
      <a class="mp-card" href="/plugins/search/" data-name="Search" data-desc="Full-text search with MiniSearch, built at compile time." data-kind="builtin" data-tags="search,index,client-side">
        <div class="mp-card-head">
          <div class="mp-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></div>
          <div class="mp-card-title-row">
            <h3 class="mp-card-title" data-i18n="marketplace.plugin.search.name">Search</h3>
            <span class="mp-card-kind mp-card-kind-builtin" data-i18n="marketplace.filter.builtin">Built-in</span>
          </div>
        </div>
        <p class="mp-card-desc" data-i18n="marketplace.plugin.search.tagline">Full-text search with MiniSearch, built at compile time.</p>
        <div class="mp-card-tags"><span class="mp-tag">search</span><span class="mp-tag">index</span><span class="mp-tag">client-side</span></div>
      </a>
      <a class="mp-card" href="/plugins/seo/" data-name="SEO" data-desc="Meta tags, Open Graph, Twitter cards, JSON-LD." data-kind="builtin" data-tags="seo,meta,opengraph">
        <div class="mp-card-head">
          <div class="mp-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></div>
          <div class="mp-card-title-row">
            <h3 class="mp-card-title" data-i18n="marketplace.plugin.seo.name">SEO</h3>
            <span class="mp-card-kind mp-card-kind-builtin" data-i18n="marketplace.filter.builtin">Built-in</span>
          </div>
        </div>
        <p class="mp-card-desc" data-i18n="marketplace.plugin.seo.tagline">Meta tags, Open Graph, Twitter cards, JSON-LD.</p>
        <div class="mp-card-tags"><span class="mp-tag">seo</span><span class="mp-tag">meta</span><span class="mp-tag">opengraph</span></div>
      </a>
      <a class="mp-card" href="/plugins/sitemap/" data-name="Sitemap" data-desc="sitemap.xml and robots.txt at the site root." data-kind="builtin" data-tags="sitemap,seo,xml">
        <div class="mp-card-head">
          <div class="mp-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg></div>
          <div class="mp-card-title-row">
            <h3 class="mp-card-title" data-i18n="marketplace.plugin.sitemap.name">Sitemap</h3>
            <span class="mp-card-kind mp-card-kind-builtin" data-i18n="marketplace.filter.builtin">Built-in</span>
          </div>
        </div>
        <p class="mp-card-desc" data-i18n="marketplace.plugin.sitemap.tagline">sitemap.xml and robots.txt at the site root.</p>
        <div class="mp-card-tags"><span class="mp-tag">sitemap</span><span class="mp-tag">seo</span><span class="mp-tag">xml</span></div>
      </a>
      <a class="mp-card" href="/plugins/mermaid/" data-name="Mermaid" data-desc="Render Mermaid.js diagrams from fenced code blocks." data-kind="builtin" data-tags="diagrams,mermaid,markdown">
        <div class="mp-card-head">
          <div class="mp-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg></div>
          <div class="mp-card-title-row">
            <h3 class="mp-card-title" data-i18n="marketplace.plugin.mermaid.name">Mermaid</h3>
            <span class="mp-card-kind mp-card-kind-builtin" data-i18n="marketplace.filter.builtin">Built-in</span>
          </div>
        </div>
        <p class="mp-card-desc" data-i18n="marketplace.plugin.mermaid.tagline">Render Mermaid.js diagrams from fenced code blocks.</p>
        <div class="mp-card-tags"><span class="mp-tag">diagrams</span><span class="mp-tag">mermaid</span><span class="mp-tag">markdown</span></div>
      </a>
      <a class="mp-card" href="/plugins/llms/" data-name="LLMs" data-desc="llms.txt and llms-full.txt context files for AI agents." data-kind="builtin" data-tags="ai,llm,context">
        <div class="mp-card-head">
          <div class="mp-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg></div>
          <div class="mp-card-title-row">
            <h3 class="mp-card-title" data-i18n="marketplace.plugin.llms.name">LLMs</h3>
            <span class="mp-card-kind mp-card-kind-builtin" data-i18n="marketplace.filter.builtin">Built-in</span>
          </div>
        </div>
        <p class="mp-card-desc" data-i18n="marketplace.plugin.llms.tagline">llms.txt and llms-full.txt context files for AI agents.</p>
        <div class="mp-card-tags"><span class="mp-tag">ai</span><span class="mp-tag">llm</span><span class="mp-tag">context</span></div>
      </a>
      <a class="mp-card" href="/plugins/okf/" data-name="OKF" data-desc="Open Knowledge Format bundle for AI agent consumption." data-kind="builtin" data-tags="ai,agents,knowledge">
        <div class="mp-card-head">
          <div class="mp-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg></div>
          <div class="mp-card-title-row">
            <h3 class="mp-card-title" data-i18n="marketplace.plugin.okf.name">OKF</h3>
            <span class="mp-card-kind mp-card-kind-builtin" data-i18n="marketplace.filter.builtin">Built-in</span>
          </div>
        </div>
        <p class="mp-card-desc" data-i18n="marketplace.plugin.okf.tagline">Open Knowledge Format bundle for AI agent consumption.</p>
        <div class="mp-card-tags"><span class="mp-tag">ai</span><span class="mp-tag">agents</span><span class="mp-tag">knowledge</span></div>
      </a>
      <a class="mp-card" href="/plugins/analytics/" data-name="Analytics" data-desc="Inject analytics scripts without editing templates." data-kind="builtin" data-tags="analytics,tracking,metrics">
        <div class="mp-card-head">
          <div class="mp-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg></div>
          <div class="mp-card-title-row">
            <h3 class="mp-card-title" data-i18n="marketplace.plugin.analytics.name">Analytics</h3>
            <span class="mp-card-kind mp-card-kind-builtin" data-i18n="marketplace.filter.builtin">Built-in</span>
          </div>
        </div>
        <p class="mp-card-desc" data-i18n="marketplace.plugin.analytics.tagline">Inject analytics scripts without editing templates.</p>
        <div class="mp-card-tags"><span class="mp-tag">analytics</span><span class="mp-tag">tracking</span><span class="mp-tag">metrics</span></div>
      </a>
      <a class="mp-card" href="/plugins/openapi/" data-name="OpenAPI" data-desc="Render OpenAPI 3 and Swagger specs as browsable docs." data-kind="builtin" data-tags="api,openapi,swagger">
        <div class="mp-card-head">
          <div class="mp-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg></div>
          <div class="mp-card-title-row">
            <h3 class="mp-card-title" data-i18n="marketplace.plugin.openapi.name">OpenAPI</h3>
            <span class="mp-card-kind mp-card-kind-builtin" data-i18n="marketplace.filter.builtin">Built-in</span>
          </div>
        </div>
        <p class="mp-card-desc" data-i18n="marketplace.plugin.openapi.tagline">Render OpenAPI 3 and Swagger specs as browsable docs.</p>
        <div class="mp-card-tags"><span class="mp-tag">api</span><span class="mp-tag">openapi</span><span class="mp-tag">swagger</span></div>
      </a>
      <a class="mp-card" href="/plugins/math/" data-name="Math" data-desc="KaTeX-rendered math from $...$ and $$...$$ blocks." data-kind="installable" data-tags="latex,katex,math">
        <div class="mp-card-head">
          <div class="mp-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 7V4H6l6 8-6 8h12v-3"/></svg></div>
          <div class="mp-card-title-row">
            <h3 class="mp-card-title" data-i18n="marketplace.plugin.math.name">Math</h3>
            
          </div>
        </div>
        <p class="mp-card-desc" data-i18n="marketplace.plugin.math.tagline">KaTeX-rendered math from $...$ and $$...$$ blocks.</p>
        <div class="mp-card-tags"><span class="mp-tag">latex</span><span class="mp-tag">katex</span><span class="mp-tag">math</span></div>
      </a>
      <a class="mp-card" href="/plugins/pwa/" data-name="PWA" data-desc="Service worker, manifest, and offline caching." data-kind="installable" data-tags="pwa,offline,service-worker">
        <div class="mp-card-head">
          <div class="mp-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg></div>
          <div class="mp-card-title-row">
            <h3 class="mp-card-title" data-i18n="marketplace.plugin.pwa.name">PWA</h3>
            
          </div>
        </div>
        <p class="mp-card-desc" data-i18n="marketplace.plugin.pwa.tagline">Service worker, manifest, and offline caching.</p>
        <div class="mp-card-tags"><span class="mp-tag">pwa</span><span class="mp-tag">offline</span><span class="mp-tag">service-worker</span></div>
      </a>
      <a class="mp-card" href="/plugins/threads/" data-name="Threads" data-desc="Inline discussion comments stored as Markdown." data-kind="installable" data-tags="comments,community,live">
        <div class="mp-card-head">
          <div class="mp-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div>
          <div class="mp-card-title-row">
            <h3 class="mp-card-title" data-i18n="marketplace.plugin.threads.name">Threads</h3>
            
          </div>
        </div>
        <p class="mp-card-desc" data-i18n="marketplace.plugin.threads.tagline">Inline discussion comments stored as Markdown.</p>
        <div class="mp-card-tags"><span class="mp-tag">comments</span><span class="mp-tag">community</span><span class="mp-tag">live</span></div>
      </a>
      <div id="mp-empty" class="mp-empty" style="display:none;" data-i18n="marketplace.filter.empty">No plugins match the current filters.</div>
    </div>
  </div>
</div>
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
      <a href="/plugins/" data-i18n="footer.plugins">Plugins</a>
      <a href="https://docs.docmd.io/content/markdown-syntax/" data-i18n="footer.syntax">Markdown Syntax</a>
      <a href="https://docs.docmd.io/guides/ai/mcp-and-agent-skills/" data-i18n="footer.skills">Agent Skills &amp; MCP</a>
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
