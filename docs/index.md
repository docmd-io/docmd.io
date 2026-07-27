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
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
---

<nav class="nav">
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
<header class="hero">
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
    <a href="https://github.com/docmd-io/docmd/releases" target="_blank" rel="noopener" class="hero-badge">
      <span class="badge-dot"></span>
      <span id="npm-version">v0.9.0</span> is now available →
    </a>
    <h1 data-i18n="hero.title">Documentation built for speed.<br>One command. <span class="gradient-text">Zero overhead.</span></h1>
    <p class="hero-sub" data-i18n="hero.sub">Static HTML for instant SEO. SPA-speed navigation. AI-first by design.<br>Native MCP server. Agent skills. Zero config. No framework required.</p>
    <div class="hero-actions">
      <a href="https://docs.docmd.io/getting-started/installation" class="btn-primary" data-i18n="hero.cta">Get Started</a>
      <button class="btn-code" onclick="copyCmd(this)" data-cmd="npx @docmd/core dev">
        <span class="dollar">$</span>
        npx @docmd/core dev
      </button>
    </div>
    <div class="metrics-strip">
      <div class="metric-item">
        <div class="metric-val">100</div>
        <div class="metric-lbl" data-i18n="hero.metric.perf">Lighthouse Score</div>
      </div>
      <div class="metric-item">
        <div class="metric-val">&lt; 18 KB</div>
        <div class="metric-lbl" data-i18n="hero.metric.js">Main Client JS</div>
      </div>
      <div class="metric-item">
        <div class="metric-val">0</div>
        <div class="metric-lbl" data-i18n="hero.metric.config">Framework Lock-in</div>
      </div>
      <div class="metric-item">
        <div class="metric-val">100%</div>
        <div class="metric-lbl" data-i18n="hero.metric.search">Offline &amp; AI-Ready</div>
      </div>
    </div>
    <div class="hero-visual">
      <div class="window">
        <div class="window-bar">
          <div class="window-dots">
            <span class="window-dot red"></span>
            <span class="window-dot yellow"></span>
            <span class="window-dot green"></span>
          </div>
          <div class="window-tabs">
            <button class="hero-tab-btn active" data-tab="tab-terminal">Terminal</button>
            <button class="hero-tab-btn" data-tab="tab-config">docmd.config.json</button>
            <button class="hero-tab-btn" data-tab="tab-markdown">docs/index.md</button>
          </div>
          <span class="window-title">docmd v0.9.0</span>
        </div>
        <div class="window-body">
          <div class="hero-pane active" id="tab-terminal">
            <pre><span class="cmd">$</span> npx @docmd/core dev
<span class="comment"># Compiling markdown documentation...</span>
<span class="success">✓</span> Loaded 12 markdown files in /docs
<span class="success">✓</span> Generated static HTML + local vector index
<span class="success">✓</span> Built site in 340ms — Lighthouse score 100
→ Server running at http://localhost:3000</pre>
          </div>
          <div class="hero-pane" id="tab-config">
            <pre>

```json
{
  "title": "My Project Docs",
  "src": "docs",
  "out": "site",
  "plugins": {
    "search": {},
    "seo": {},
    "llms": {},
    "mcp": {},
    "openapi": {}
  }
}
```

</pre>
          </div>
          <div class="hero-pane" id="tab-markdown">
            <pre>

```
---
title: Quick Start
description: Get your documentation live in 2 minutes.
---

# Getting Started

::: callout info
Zero config required. Just run `npx @docmd/core dev`!
:::
```

</pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
<section class="bento-section">
  <div class="container">
    <div class="section-header">
      <div class="section-tag" data-i18n="bento.tag">Why docmd</div>
      <h2 class="section-title" data-i18n="bento.title">Everything you need for world-class documentation.</h2>
      <p class="section-sub" data-i18n="bento.sub">Zero-config defaults with enterprise power under the hood.</p>
    </div>
    <div class="bento-grid">
      <div class="bento-card tint-blue col-span-2">
        <div>
          <div class="bento-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
          </div>
          <h3 data-i18n="bento.card1.title">Zero-Config Instant Dev Server</h3>
          <p data-i18n="bento.card1.desc">Point docmd at any directory containing Markdown files. It instantly builds standalone static HTML pages with hot-reloading and zero configuration.</p>
        </div>
        <div class="bento-code-box">
          <span style="color:var(--accent);">$</span> docmd build --offline<br>
          ✓ Generated 12 pages in 340ms (Lighthouse 100)
        </div>
      </div>
      <div class="bento-card tint-purple">
        <div>
          <div class="bento-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2"/></svg>
          </div>
          <h3 data-i18n="bento.card2.title">Built for AI Agents</h3>
          <p data-i18n="bento.card2.desc">Ships with native `@docmd/plugin-mcp` server, auto-generated `llms.txt`, and `SKILL.md` for AI agent integration.</p>
        </div>
        <div class="bento-code-box">docmd mcp — Ready for Claude &amp; Cursor</div>
      </div>
<<<<<<< HEAD
      <div class="bento-card tint-pink">
        <div>
          <div class="bento-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
=======
    </div>
    <!-- Feature 4: Themes + i18n - visual preview -->
    <div class="feature reverse">
      <div class="feature-text">
        <div class="feature-label" data-i18n="feature.extras.label">Production Ready</div>
        <h2 data-i18n="feature.extras.title">Themes, i18n, versioning, and one-command deploy.</h2>
        <p class="feature-desc" data-i18n="feature.extras.desc">Everything you need for production - light and dark themes, multi-language support, version switching, and deployment configs for Docker, Nginx, and Caddy.</p>
        <ul class="feature-list">
          <li data-i18n="feature.extras.li1">Native i18n with locale-first URLs</li>
          <li data-i18n="feature.extras.li2">Light &amp; dark themes with custom CSS</li>
          <li data-i18n="feature.extras.li3">Multi-version documentation support</li>
          <li data-i18n="feature.extras.li4">docmd deploy generates production configs</li>
        </ul>
        <a href="https://docs.docmd.io/configuration/overview/" class="feature-link" data-i18n="feature.extras.link">Configuration docs →</a>
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
            <div class="window-body"><pre><span class="cmd">$</span> docmd deploy --docker
<span class="success">✓</span> Generated Dockerfile
<span class="success">✓</span> Generated nginx.conf
  <span class="highlight">→ docker build -t docs .</span></pre></div>
>>>>>>> 4ea5947 (Fix broken link)
          </div>
          <h3 data-i18n="bento.card3.title">100% Offline Search</h3>
          <p data-i18n="bento.card3.desc">Full-text fuzzy &amp; vector search compiled into local index files. No cloud APIs, zero costs, works completely offline.</p>
        </div>
        <div class="bento-code-box">Press <kbd style="background:var(--border); padding:2px 6px; border-radius:4px;">⌘K</kbd> to search docs</div>
      </div>
      <div class="bento-card tint-amber col-span-2">
        <div>
          <div class="bento-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
          </div>
          <h3 data-i18n="bento.card4.title">Rich Markdown Containers</h3>
          <p data-i18n="bento.card4.desc">Write callouts, tabbed code snippets, warning boxes, cards, and Mermaid diagrams using standard Markdown container syntax. No HTML or React required.</p>
        </div>
        <div class="bento-code-box">::: callout info<br>Native Markdown callouts &amp; tabs!<br>:::</div>
      </div>
    </div>
  </div>
</section>
<section class="ai-section">
  <div class="container">
    <div class="section-header">
      <div class="section-tag" data-i18n="ai.tag">AI &amp; Open Ecosystem</div>
      <h2 class="section-title" data-i18n="ai.title">Built for AI Agents. Owned by you.</h2>
      <p class="section-sub" data-i18n="ai.sub">Native MCP server, auto-generated LLM context, and Bring-Your-Own-Key (BYOK) AI security — zero platform lock-in.</p>
    </div>
    <div class="ai-grid">
      <div class="ai-card">
        <div>
          <span class="ai-card-tag" data-i18n="ai.byok.tag">BYOK Security</span>
          <h3 data-i18n="ai.byok.title">AI Assistant</h3>
          <p data-i18n-html="ai.byok.desc">Embed an interactive documentation assistant (<code>@docmd/plugin-ai</code>) powered by RAG vector search and <code>aiplug</code>, supporting 100+ AI model providers with Bring Your Own Key (BYOK) security.</p>
        </div>
        <div class="bento-code-box">plugin-ai: { provider: "byok" }</div>
      </div>
      <div class="ai-card">
        <div>
          <span class="ai-card-tag" data-i18n="ai.mcp.tag">Model Context Protocol</span>
          <h3 data-i18n="ai.mcp.title">Native MCP Server</h3>
          <p data-i18n-html="ai.mcp.desc">Expose your documentation live to AI agents in Claude Desktop, Cursor, and Windsurf (<code>@docmd/plugin-mcp</code>). Let AI code assistants search and read your docs directly.</p>
        </div>
        <div class="bento-code-box">$ npx @docmd/plugin-mcp</div>
      </div>
      <div class="ai-card">
        <div>
          <span class="ai-card-tag" data-i18n="ai.llms.tag">Machine-Readable Context</span>
          <h3 data-i18n="ai.llms.title">LLM Manifests &amp; Agent Skills</h3>
          <p data-i18n-html="ai.llms.desc">Auto-generate <code>llms.txt</code>, <code>llms-full.txt</code>, and <code>SKILL.md</code> manifests (<code>@docmd/plugin-llms</code>) so LLMs get structured, accurate documentation context automatically.</p>
        </div>
        <div class="bento-code-box">✓ Exported /site/llms.txt</div>
      </div>
    </div>
  </div>
</section>
<section class="plugins-section">
  <div class="container">
    <div class="section-header">
      <div class="section-tag" data-i18n="plugins.tag">Modular Ecosystem</div>
      <h2 class="section-title" data-i18n="plugins.title">Official docmd Plugins</h2>
      <p class="section-sub" data-i18n="plugins.sub">Zero-config official plugins built for production documentation.</p>
    </div>
    <div class="plugins-grid">
      <div class="plugin-card">
        <span class="plugin-badge">@docmd/plugin-search</span>
        <h4 data-i18n="plugins.item.search.title">Offline Vector Search</h4>
        <p data-i18n="plugins.item.search.desc">Client-side vector search index compiled during build time.</p>
      </div>
      <div class="plugin-card">
        <span class="plugin-badge">@docmd/plugin-mcp</span>
        <h4 data-i18n="plugins.item.mcp.title">Native MCP Server</h4>
        <p data-i18n="plugins.item.mcp.desc">Expose documentation directly to AI agents via Model Context Protocol.</p>
      </div>
      <div class="plugin-card">
        <span class="plugin-badge">@docmd/plugin-ai</span>
        <h4 data-i18n="plugins.item.ai.title">AI Assistant</h4>
        <p data-i18n="plugins.item.ai.desc">Interactive RAG-powered documentation assistant with server-side BYOK key security.</p>
      </div>
      <div class="plugin-card">
        <span class="plugin-badge">@docmd/plugin-llms</span>
        <h4 data-i18n="plugins.item.llms.title">AI LLM Context Generator</h4>
        <p data-i18n-html="plugins.item.llms.desc">Auto-generate structured <code>llms.txt</code>, <code>llms-full.txt</code>, and <code>SKILL.md</code> manifests.</p>
      </div>
      <div class="plugin-card">
        <span class="plugin-badge">@docmd/plugin-openapi</span>
        <h4 data-i18n="plugins.item.openapi.title">OpenAPI &amp; Swagger Docs</h4>
        <p data-i18n="plugins.item.openapi.desc">Render interactive API endpoints directly from OpenAPI specification files.</p>
      </div>
      <div class="plugin-card">
        <span class="plugin-badge">@docmd/plugin-seo</span>
        <h4 data-i18n="plugins.item.seo.title">SEO &amp; Schema JSON-LD</h4>
        <p data-i18n="plugins.item.seo.desc">Automatic sitemap generation, open-graph metadata, and search engine indexing.</p>
      </div>
      <div class="plugin-card">
        <span class="plugin-badge">@docmd/plugin-math</span>
        <h4 data-i18n="plugins.item.math.title">KaTeX Math Formulae</h4>
        <p data-i18n="plugins.item.math.desc">Fast LaTeX mathematical expressions rendering without heavy JS frameworks.</p>
      </div>
      <div class="plugin-card">
        <span class="plugin-badge">@docmd/plugin-mermaid</span>
        <h4 data-i18n="plugins.item.mermaid.title">Mermaid Diagrams</h4>
        <p data-i18n="plugins.item.mermaid.desc">Client-side rendering for flowcharts, sequence diagrams, and architecture maps.</p>
      </div>
    </div>
  </div>
</section>
<section class="comparison-section">
  <div class="container">
<<<<<<< HEAD
    <div class="section-header">
      <div class="section-tag" data-i18n="benchmark.tag">Performance Benchmark</div>
      <h2 class="section-title" data-i18n="benchmark.title">Built for speed, not framework bloat</h2>
      <p class="section-sub" data-i18n="benchmark.sub">Compare docmd against heavy JavaScript documentation frameworks.</p>
    </div>
    <div class="comparison-grid">
      <div class="comp-card highlight">
        <div class="comp-val" data-i18n="benchmark.card1.val">340 ms</div>
        <div class="comp-lbl" data-i18n="benchmark.card1.lbl">Build Time</div>
        <div class="comp-desc" data-i18n="benchmark.card1.desc">Instant static site compilation with docmd binary engine.</div>
      </div>
      <div class="comp-card">
        <div class="comp-val" data-i18n-html="benchmark.card2.val">&lt; 18 KB</div>
        <div class="comp-lbl" data-i18n="benchmark.card2.lbl">Client Footprint</div>
        <div class="comp-desc" data-i18n="benchmark.card2.desc">Ultra-lightweight vanilla JS script runtime for max speed.</div>
      </div>
      <div class="comp-card">
        <div class="comp-val" data-i18n="benchmark.card3.val">0 MB</div>
        <div class="comp-lbl" data-i18n="benchmark.card3.lbl">Framework Overhead</div>
        <div class="comp-desc" data-i18n="benchmark.card3.desc">No React or Vue hydration lag. Pure static HTML output.</div>
      </div>
    </div>
  </div>
</section>
<section class="deploy-section">
  <div class="container">
    <div class="section-header">
      <div class="section-tag" data-i18n="deploy.tag">Deployment</div>
      <h2 class="section-title" data-i18n="deploy.title">Deploy anywhere in seconds.</h2>
      <p class="section-sub" data-i18n="deploy.sub">Static files that run on GitHub Pages, Vercel, Netlify, Docker, or Nginx.</p>
    </div>
    <div class="deploy-grid">
      <div class="deploy-card">
        <h3 data-i18n="deploy.card1.title">🗂 GitHub Pages Template</h3>
        <p data-i18n="deploy.card1.desc">One click to create a pre-configured documentation repository with automated GitHub Actions workflow.</p>
        <a href="https://github.com/docmd-io/docmd-template/generate" target="_blank" rel="noopener" class="btn-secondary" data-i18n="deploy.card1.cta">Use GitHub Template →</a>
      </div>
      <div class="deploy-card">
        <h3 data-i18n="deploy.card2.title">⚡ One-Command Deploy Config</h3>
        <p data-i18n="deploy.card2.desc">Generate Dockerfile and Nginx configuration for your static site in a single command.</p>
        <div class="bento-code-box">$ docmd deploy --docker</div>
      </div>
    </div>
=======
    <h2 data-i18n="faq.title">Frequently asked questions</h2>
    <p class="section-sub" data-i18n="faq.sub">Quick answers to common questions about docmd.</p>
    <details class="faq-item">
      <summary data-i18n="faq.q1">What is docmd?</summary>
      <div class="faq-answer" data-i18n-html="faq.a1">docmd is an open-source, zero-config documentation engine that converts Markdown files into production-ready documentation sites. It generates static HTML for SEO while providing SPA-like navigation for speed.<br/><br/><a href="https://docs.docmd.io/getting-started/quick-start/">Read the quick start guide →</a></div>
    </details>
    <details class="faq-item">
      <summary data-i18n="faq.q2">How is it different from Docusaurus, MkDocs or VitePress?</summary>
      <div class="faq-answer" data-i18n-html="faq.a2">docmd requires no configuration, no React, no Vue, no framework knowledge. It produces standalone HTML with less than 20kb client JS, scores Lighthouse 100, and includes search, SEO, and AI context (llms.txt) without any setup.<br/><br/><a href="https://docs.docmd.io/comparison/">See the full comparison →</a></div>
    </details>
    <details class="faq-item">
      <summary data-i18n="faq.q3">Do I need React or any framework?</summary>
      <div class="faq-answer" data-i18n="faq.a3">No. docmd is framework-free. You write Markdown, run one command, and get a production site. Plain HTML + minimal vanilla JS. No bundlers, no framework lock-in.</div>
    </details>
    <details class="faq-item">
      <summary data-i18n="faq.q4">How does the AI-first integration work?</summary>
      <div class="faq-answer" data-i18n-html="faq.a4">docmd ships a native MCP server (<code>docmd mcp</code>) so AI agents can search, read, and validate your docs live. It auto-generates <code>llms.txt</code> and <code>llms-full.txt</code> context files, and <code>docmd init</code> creates a <code>SKILL.md</code> instruction file for coding agents.<br/><br/><a href="https://docs.docmd.io/reference/mcp-server/">MCP server docs →</a></div>
    </details>
    <details class="faq-item">
      <summary data-i18n="faq.q5">Is docmd free?</summary>
      <div class="faq-answer" data-i18n-html="faq.a5">Yes. Completely free and open source under MIT License. All core features and plugins are included by default.<br/><br/><a href="https://github.com/docmd-io/docmd">View on GitHub →</a></div>
    </details>
    <details class="faq-item">
      <summary data-i18n="faq.q6">Can I use it with my existing documentation files?</summary>
      <div class="faq-answer" data-i18n-html="faq.a6">Yes. Point docmd at any directory of Markdown files. It supports standard Markdown, frontmatter, and adds container syntax (callouts, tabs, cards) on top.<br/><br/><a href="https://docs.docmd.io/content/syntax/">Markdown syntax reference →</a></div>
    </details>
    <details class="faq-item">
      <summary data-i18n="faq.q7">Does docmd support multiple languages?</summary>
      <div class="faq-answer" data-i18n-html="faq.a7">Yes. Native i18n with locale-first URLs, per-locale search indexes, and translated UI strings. Start with a simple locales array or build custom configurations.<br/><br/><a href="https://docs.docmd.io/configuration/localisation/">Localisation configuration →</a></div>
    </details>
  </div>
</section>
<section class="ask-section">
  <div class="container">
    <h2 class="section-title" data-i18n="ask.title">Write documentation with your favourite AI</h2>
    <p class="section-sub" style="margin-bottom:24px;" data-i18n="ask.sub">Provide docmd context directly to Claude, ChatGPT, Gemini, or DeepSeek.</p>
    <div class="ask-links">
      <a href="https://claude.ai/new?q=Read%20https%3A%2F%2Fdocs.docmd.io%2Fllms.txt%20then%20help%20me%20write%20documentation%20using%20docmd." target="_blank" rel="noopener" class="ask-link">Claude</a>
      <a href="https://chatgpt.com/?q=Read%20https%3A%2F%2Fdocs.docmd.io%2Fllms.txt%20then%20help%20me%20write%20documentation%20using%20docmd." target="_blank" rel="noopener" class="ask-link">ChatGPT</a>
      <a href="https://gemini.google.com/app?q=Read%20https%3A%2F%2Fdocs.docmd.io%2Fllms.txt%20then%20help%20me%20write%20documentation%20using%20docmd." target="_blank" rel="noopener" class="ask-link">Gemini</a>
      <a href="https://chat.deepseek.com/?q=Read%20https%3A%2F%2Fdocs.docmd.io%2Fllms.txt%20then%20help%20me%20write%20documentation%20using%20docmd." target="_blank" rel="noopener" class="ask-link">DeepSeek</a>
      <a href="https://github.com/docmd-io/docmd-skills" target="_blank" rel="noopener" class="ask-link" data-i18n="ask.skills">Agent Skills (SKILL.md)</a>
    </div>
  </div>
</section>
<section class="faq-section">
  <div class="container">
    <h2 class="section-title" data-i18n="faq.title">Frequently asked questions</h2>
    <p class="section-sub" style="margin-bottom:28px; text-align:center;" data-i18n="faq.sub">Everything you need to know about docmd.</p>
    <details class="faq-item">
      <summary data-i18n="faq.q1">What is docmd?</summary>
      <div class="faq-answer" data-i18n-html="faq.a1">docmd is an open-source, zero-config documentation engine that converts Markdown files into production-ready documentation sites. It generates static HTML for SEO while providing SPA-like navigation for speed.</div>
    </details>
    <details class="faq-item">
      <summary data-i18n="faq.q2">How is docmd different from Docusaurus, MkDocs or VitePress?</summary>
      <div class="faq-answer" data-i18n-html="faq.a2">docmd requires no configuration, no React, no Vue, and no framework knowledge. It generates standalone HTML with less than 18KB client JS, scores Lighthouse 100, and includes search, SEO, and AI context (`llms.txt`) without setup.</div>
    </details>
    <details class="faq-item">
      <summary data-i18n="faq.q3">Do I need React or any frontend framework?</summary>
      <div class="faq-answer" data-i18n="faq.a3">No. docmd is framework-free. You write Markdown, run one command, and get a production site. Plain HTML + minimal vanilla JS.</div>
    </details>
    <details class="faq-item">
      <summary data-i18n="faq.q4">How does AI Agent integration work?</summary>
      <div class="faq-answer" data-i18n-html="faq.a4">docmd ships a native MCP server (`docmd mcp`) via `@docmd/plugin-mcp` so AI agents can search and read your docs live. It auto-generates `llms.txt` and `SKILL.md` files out of the box.</div>
    </details>
    <details class="faq-item">
      <summary data-i18n="faq.q8">What are docmd Agent Skills (SKILL.md) and how do I install them?</summary>
      <div class="faq-answer" data-i18n-html="faq.a8">docmd supports <code>SKILL.md</code> manifests so AI coding agents (Claude Desktop, Cursor, Windsurf) can read and execute documentation tasks automatically. Install official skills into your workspace using:
      <br/><br/><b><code>npx docmd-skills [target-directory]</code></b></div>
    </details>
  </div>
</section>
<section class="cta-section">
  <div class="container">
    <h2 data-i18n="cta.title">Ready to write better docs?</h2>
    <p class="section-sub" style="margin-bottom:20px;" data-i18n="cta.desc">Join thousands of developers building fast, clean documentation with docmd.</p>
    <div class="hero-actions">
      <a href="https://docs.docmd.io" class="btn-primary" data-i18n="cta.docs">Read Documentation</a>
      <a href="https://github.com/docmd-io/docmd" class="btn-secondary" target="_blank" rel="noopener" data-i18n="cta.github">Star on GitHub</a>
    </div>
  </div>
</section>
<section class="sponsors-section">
  <div class="container">
    <h3 data-i18n="sponsors.title">Community Sponsors</h3>
    <div id="sponsors-grid" class="sponsors-grid"></div>
  </div>
</section>
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
      <a href="https://live.docmd.io" data-i18n="footer.liveEditor">Live Editor</a>
      <a href="https://github.com/docmd-io/docmd/releases" data-i18n="footer.releases">Releases</a>
    </div>
  </div>
  <div class="footer-bottom">
    <span>2026 © docmd.io</span>
    <span data-i18n="footer.license">MIT License</span>
  </div>
</footer>
<script src="/assets/js/script.js"></script>
