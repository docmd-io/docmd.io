---
title: "Sitemap plugin for docmd"
description: "sitemap.xml and robots.txt at the site root."
titleAppend: false
noStyle: true
keywords:
  - "docmd"
  - "plugin"
  - "sitemap"
  - "sitemap"
  - "seo"
  - "xml"
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
<section class="mp-detail">
  <div class="container">
    <a href="/plugins/" class="mp-detail-back">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
      <span data-i18n="marketplace.detail.allPlugins">All plugins</span>
    </a>
    <div class="mp-detail-hero">
      <div class="mp-detail-hero-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg></div>
      <div>
        <h1 data-i18n="marketplace.plugin.sitemap.name">Sitemap</h1>
        <p data-i18n="marketplace.plugin.sitemap.tagline">sitemap.xml and robots.txt at the site root.</p>
        <div class="mp-detail-meta">
          <span class="mp-card-kind mp-card-kind-builtin" data-i18n="marketplace.filter.builtin">Built-in</span>
          <span class="mp-tag"><code>@docmd/plugin-sitemap</code></span>
        </div>
      </div>
    </div>

    <div class="mp-detail-body">
      <div>
        <div class="mp-detail-section">
          <h2 data-i18n="marketplace.detail.overview">Overview</h2>
          <p data-i18n="marketplace.plugin.sitemap.desc">Walks the rendered output and writes a standards-compliant sitemap.xml and robots.txt. Respects page-level noindex frontmatter and uses canonical URLs configured in docmd.config.json.</p>
        </div>

        <div class="mp-detail-section">
          <h2 data-i18n="marketplace.detail.installation">Installation</h2>
          <div class="mp-code"><span class="tok-cmt"># Sitemap ships with docmd — nothing to install.</span>
<span class="tok-cmd">docmd build</span></div>
          <p class="hero-sub" style="font-size:0.85rem;">This plugin is built into docmd — nothing to install.</p>
        </div>

        <div class="mp-detail-section">
          <h2 data-i18n="marketplace.detail.permissions">Permissions</h2>
          <p data-i18n="marketplace.detail.permissionsDesc">Runtime behaviour of this plugin during a build:</p>
          <table class="mp-perm-table">
            <thead><tr><th data-i18n="marketplace.perm.capability">Capability</th><th data-i18n="marketplace.perm.used">Used</th></tr></thead>
            <tbody>
      <tr><td data-i18n="marketplace.perm.readsProject">Reads project files</td><td><span class="mp-perm-yes" data-i18n="marketplace.perm.yes">Yes</span></td></tr>
      <tr><td data-i18n="marketplace.perm.writesSite">Writes to site/</td><td><span class="mp-perm-yes" data-i18n="marketplace.perm.yes">Yes</span></td></tr>
      <tr><td data-i18n="marketplace.perm.network">Network requests</td><td><span class="mp-perm-no" data-i18n="marketplace.perm.no">No</span></td></tr>
      <tr><td data-i18n="marketplace.perm.subprocess">Runs subprocess</td><td><span class="mp-perm-no" data-i18n="marketplace.perm.no">No</span></td></tr>
            </tbody>
          </table>
        </div>

        <div class="mp-detail-section">
          <h2 data-i18n="marketplace.detail.capabilities">Capabilities</h2>
          <p data-i18n="marketplace.detail.capabilitiesDesc">docmd hooks this plugin registers:</p>
          <p><code>post-build</code></p>
        </div>

        <div class="mp-detail-section">
          <h2 data-i18n="marketplace.detail.tags">Tags</h2>
          <div class="mp-card-tags"><span class="mp-tag">sitemap</span><span class="mp-tag">seo</span><span class="mp-tag">xml</span></div>
        </div>

        <div class="mp-related">
          <h2 data-i18n="marketplace.detail.otherPlugins">Other plugins</h2>
          <div class="mp-related-grid">
    <a class="mp-card" href="/plugins/search/">
      <div class="mp-card-head">
        <div class="mp-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></div>
        <div>
          <h3 class="mp-card-title" data-i18n="marketplace.plugin.search.name">Search</h3>
        </div>
      </div>
      <p class="mp-card-desc" data-i18n="marketplace.plugin.search.tagline">Full-text search with MiniSearch, built at compile time.</p>
    </a>
    <a class="mp-card" href="/plugins/mdx/">
      <div class="mp-card-head">
        <div class="mp-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg></div>
        <div>
          <h3 class="mp-card-title" data-i18n="marketplace.plugin.mdx.name">MDX Components</h3>
        </div>
      </div>
      <p class="mp-card-desc" data-i18n="marketplace.plugin.mdx.tagline">Interactive MDX and JSX components with zero client overhead.</p>
    </a>
    <a class="mp-card" href="/plugins/ai/">
      <div class="mp-card-head">
        <div class="mp-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/></svg></div>
        <div>
          <h3 class="mp-card-title" data-i18n="marketplace.plugin.ai.name">AI Chat</h3>
        </div>
      </div>
      <p class="mp-card-desc" data-i18n="marketplace.plugin.ai.tagline">Interactive AI chat grounded in your docs.</p>
    </a>
          </div>
        </div>
      </div>

      <aside class="mp-detail-aside">
        <h3 data-i18n="marketplace.detail.package">Package</h3>
        <dl>
          <dt data-i18n="marketplace.detail.name">Name</dt><dd><code>@docmd/plugin-sitemap</code></dd>
          <dt data-i18n="marketplace.detail.version">Version</dt><dd>v0.9.7</dd>
          <dt data-i18n="marketplace.detail.kind">Kind</dt><dd><span data-i18n="marketplace.filter.builtin">Built-in</span></dd>
        </dl>
        <div class="mp-btn-row">
          <a class="btn-primary mp-detail-btn" href="https://github.com/docmd-io/docmd/tree/main/packages/plugins/sitemap" target="_blank" rel="noopener">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            <span data-i18n="marketplace.detail.source">Source</span>
          </a>
          <a class="btn-secondary mp-detail-btn" href="https://www.npmjs.com/package/@docmd/plugin-sitemap" target="_blank" rel="noopener">npm</a>
        </div>
      </aside>
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
