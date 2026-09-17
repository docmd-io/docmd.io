---
title: "docmd - Documentation for Humans and Machines"
description: "Open-source documentation compiler. One Markdown source, one command - generates website, search, AI context, agent protocols, and knowledge formats together."
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
    description: "docmd is an open-source documentation compiler. One Markdown source, one command — generates website, search index, AI context, MCP agent endpoints, and knowledge formats together."
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
    "description": "Open-source documentation compiler. One Markdown source, one command — generates website, search, AI context, agent protocols, and knowledge formats together.",
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
    <a href="https://github.com/docmd-io/docmd/releases" target="_blank" rel="noopener" class="hero-badge">
      <span class="badge-dot"></span>
      <span id="npm-version">docmd v0.9.6</span> <span data-i18n="hero.badge">is now available →</span>
    </a>
    <h1 data-i18n="hero.title">Documentation for humans<br>and <span class="gradient-text">machines.</span></h1>
    <p class="hero-sub" data-i18n="hero.sub">The open source documentation compiler. One Markdown source, one command — generates website, search, AI context, agent protocols, and knowledge formats together.</p>
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
        <div class="metric-lbl">Build Speed</div>
      </div>
      <div class="metric-item">
        <div class="metric-val">0 MB</div>
        <div class="metric-lbl">Framework Runtime</div>
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
      <div class="window">
        <div class="window-bar">
          <div class="window-dots">
            <span class="window-dot red"></span>
            <span class="window-dot yellow"></span>
            <span class="window-dot green"></span>
          </div>
          <div class="window-tabs">
            <button class="hero-tab-btn active" data-tab="tab-terminal">terminal</button>
            <button class="hero-tab-btn" data-tab="tab-markdown">docs/index.md</button>
            <button class="hero-tab-btn" data-tab="tab-preview">rendered output</button>
          </div>
          <span class="window-title">docmd v0.9.6</span>
        </div>
        <div class="window-body">
          <div class="hero-pane active" id="tab-terminal">
            <pre><span class="cmd">$</span> npx @docmd/core dev
<span class="comment"># Initializing docmd compiler in /docs...</span>
<span class="success">✓</span> Discovered 16 Markdown source files
<span class="success">✓</span> Generated static HTML + client-side vector search index
<span class="success">✓</span> Exported llms.txt, llms-full.txt &amp; OKF graph bundles
<span class="success">✓</span> Built production documentation in 240ms — Lighthouse 100/100
→ Dev server running at <span style="color:var(--accent);">http://localhost:3000</span> <span class="term-cursor"></span></pre>
          </div>
          <div class="hero-pane" id="tab-markdown">

```markdown
---
title: Quick Start
description: Get your documentation live in 2 minutes.
---

# Getting Started

::: callout info
Zero config required. Point docmd at Markdown files and run `npx @docmd/core dev`!
:::

```bash
npm install -g @docmd/core
```
```

</div>
          <div class="hero-pane" id="tab-preview">
            <div class="hero-rendered-preview">
              <div class="preview-badge">DOCS PREVIEW</div>
              <h3>Welcome to docmd</h3>
              <div class="preview-callout">
                <div class="preview-callout-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                </div>
                <div><strong>Zero configuration required.</strong> Point docmd at Markdown files and run <code>npx @docmd/core dev</code>!</div>
              </div>
              <div class="preview-code-block">
                <span>$ npm install -g @docmd/core</span>
                <span class="preview-copy-pill">Copied ✓</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
<section class="compiler-section" aria-label="Compiler Architecture">
  <div class="container">
    <div class="section-header">
      <div class="section-tag" data-i18n="bento.tag">Why docmd</div>
      <h2 class="section-title">The documentation engine built for speed.</h2>
      <p class="section-sub">No bloated framework runtimes, no complex build scripts. Pure, ultra-fast static HTML.</p>
    </div>
    <div class="compiler-pillars">
      <div class="pillar-card">
        <div>
          <div class="pillar-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>
          </div>
          <h3>0 MB Framework Runtime</h3>
          <p>No React, Vue, or heavy virtual DOM shipped to users. Pure static HTML and lightweight CSS. Under 25 KB total client JavaScript guarantees instant page loads and a permanent 100/100 Lighthouse score.</p>
        </div>
        <div class="pillar-metric">Lighthouse 100/100 · 0 React Overhead</div>
      </div>
      <div class="pillar-card">
        <div>
          <div class="pillar-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          </div>
          <h3>Sub-300ms Build Speed</h3>
          <p>Compiles complete documentation sites in milliseconds. Instant hot-reloading keeps your focus in the flow state while writing. Point docmd at any folder of Markdown files and you have a live website immediately.</p>
        </div>
        <div class="pillar-metric">&lt; 300ms Compile Time</div>
      </div>
      <div class="pillar-card">
        <div>
          <div class="pillar-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1 4-10z"/></svg>
          </div>
          <h3>100% Portable &amp; Offline</h3>
          <p>Produces pure standard HTML files that deploy anywhere without a node server: GitHub Pages, Cloudflare Pages, Vercel, Netlify, Docker, or completely offline directly via <code>file://</code> protocol.</p>
        </div>
        <div class="pillar-metric">file:// Offline Ready</div>
      </div>
    </div>
  </div>
</section>
<section class="agent-stack-section" aria-label="AI & Agent Knowledge Stack">
  <div class="container">
    <div class="section-header">
      <div class="section-tag" data-i18n="ai.tag">AI &amp; Open Ecosystem</div>
      <h2 class="section-title">Built for autonomous AI coding agents.</h2>
      <p class="section-sub">Expose your documentation to Claude, Cursor, Windsurf, and custom LLMs through open machine-readable standards.</p>
    </div>
    <div class="agent-stack-grid">
      <div class="agent-card">
        <div>
          <span class="agent-card-tag">Model Context Protocol</span>
          <h3>Native MCP Server</h3>
          <p>Let AI coding assistants like Claude Desktop, Cursor, and Windsurf search, read, and inspect your docs directly over stdio or SSE.</p>
        </div>
        <div class="agent-code-box">$ npx @docmd/plugin-mcp</div>
      </div>
      <div class="agent-card">
        <div>
          <span class="agent-card-tag">Standard Feeds</span>
          <h3>llms.txt &amp; llms-full.txt</h3>
          <p>Automatically generates standard LLM feeds so any language model can ingest your full documentation in one request without scraping.</p>
        </div>
        <div class="agent-code-box">Exported /site/llms.txt</div>
      </div>
      <div class="agent-card">
        <div>
          <span class="agent-card-tag">Agent Actions</span>
          <h3>Agent Skills (SKILL.md)</h3>
          <p>Pack actionable CLI patterns, code examples, and domain workflows into discoverable skill files for coding assistants.</p>
        </div>
        <div class="agent-code-box">$ npx docmd-skills</div>
      </div>
      <div class="agent-card">
        <div>
          <span class="agent-card-tag">Knowledge Graph</span>
          <h3>Open Knowledge (okf.yaml)</h3>
          <p>Compiles documentation into machine-readable concept graphs, ontology tags, and semantic bundles for multi-agent workflows.</p>
        </div>
        <div class="agent-code-box">Exported okf.yaml bundle</div>
      </div>
    </div>
    <div class="agent-prompts-bar">
      <span class="agent-prompts-label">Write documentation with your favourite AI assistant:</span>
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
    <div class="cloud-relay-card">
      <div class="relay-card-left">
        <div class="relay-badge-wrap">
          <span class="relay-badge-pulse"></span>
          <span>Free Platform Service</span>
        </div>
        <h2 class="relay-title">Power your docs with <span class="gradient-text">docmd Cloud Relay</span></h2>
        <p class="relay-desc">Connect your documentation to our free serverless cloud relay in seconds. Enjoy instant AI search proxies, secure API key management, and real-time query telemetry — with zero infrastructure to maintain.</p>
        <ul class="relay-points">
          <li>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
            <span><strong>1-Click AI Assistant Proxy</strong> — Serve questions securely without exposing private API keys to clients</span>
          </li>
          <li>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
            <span><strong>Real-time Telemetry &amp; Insights</strong> — Understand search volume, discover missing docs, and track engagement</span>
          </li>
          <li>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
            <span><strong>100% Free &amp; Serverless</strong> — Sign in with GitHub, create your project ID, and connect immediately</span>
          </li>
        </ul>
        <div class="relay-actions">
          <a href="https://cloud.docmd.io" target="_blank" rel="noopener" class="btn-primary">Connect Free on Cloud Relay →</a>
          <a href="https://docs.docmd.io/guides/ai/ai-assistant/" class="btn-secondary">Read Cloud Docs</a>
        </div>
      </div>
      <div class="relay-card-right">
        <div class="relay-code-box">
          <div class="relay-code-header">
            <span>docmd.config.json</span>
            <span>json</span>
          </div>
          <pre class="relay-code-body"><code>{
  <span class="tok-key">"plugins"</span>: {
    <span class="tok-key">"ai"</span>: {
      <span class="tok-key">"assistant"</span>: <span class="tok-bool">true</span>,
      <span class="tok-key">"projectId"</span>: <span class="tok-str">"docmd_proj_abc123"</span>
    }
  }
}</code></pre>
          <div class="relay-code-status">
            <span class="relay-status-dot"></span>
            <span>Cloud Relay Active · Serverless · 0ms Cold Start</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="playground-section" aria-label="Live Editor Playground">
  <div class="container">
    <div class="playground-card">
      <div class="playground-card-left">
        <div class="playground-badge-wrap">
          <span>live.docmd.io</span>
        </div>
        <h2 class="playground-title">Test Markdown, containers &amp; themes live.</h2>
        <p class="playground-desc">Jump into the in-browser live editor playground with zero setup required. Write Markdown on the left, watch your documentation render instantly on the right.</p>
        <ul class="playground-features">
          <li>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            <span>Real-time split-screen Markdown and UI container preview</span>
          </li>
          <li>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            <span>Test callouts, cards, tabs, math formulas, and code highlighting</span>
          </li>
          <li>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            <span>Export complete site zip or copy HTML with one click</span>
          </li>
        </ul>
        <a href="https://live.docmd.io" target="_blank" rel="noopener" class="btn-primary">Launch Live Editor Playground →</a>
      </div>
      <div class="playground-card-right">
        <div class="playground-preview-frame">
          <div class="playground-frame-header">
            <span>live.docmd.io — Playground</span>
            <span>Dual View</span>
          </div>
          <div class="playground-frame-body">
            <div class="playground-pane-editor">
              <span style="color:var(--text-4);"># Quick Guide</span><br><br>
              <span style="color:var(--accent);">::: callout info</span><br>
              Live Markdown compiler<br>
              <span style="color:var(--accent);">:::</span><br><br>
              <span style="color:#10b981;">```js</span><br>
              console.log('fast');<br>
              <span style="color:#10b981;">```</span>
            </div>
            <div class="playground-pane-preview">
              <strong style="font-size:0.9rem;">Quick Guide</strong>
              <div style="background:var(--accent-soft); border-left:3px solid var(--accent); padding:6px 8px; border-radius:4px; font-size:0.75rem;">
                Live Markdown compiler
              </div>
              <div style="background:var(--surface); border:1px solid var(--border); padding:6px 8px; border-radius:4px; font-family:var(--mono); font-size:0.72rem;">
                console.log('fast');
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="philosophy-section" aria-label="Open Source Philosophy and Contributors">
  <div class="container">
    <div class="section-header">
      <div class="section-tag">OPEN SOURCE SOVEREIGNTY</div>
      <h2 class="section-title">Built in the open. Owned by developers.</h2>
      <p class="section-sub">Documentation belongs in Git, not behind proprietary SaaS walled gardens.</p>
    </div>
    <div class="philosophy-manifesto">
      <blockquote class="manifesto-quote">
        “Your documentation is the intellectual heart of your project. It belongs as plain Markdown files in your Git repository — permanent, version-controlled, auditable, and free forever. docmd will always be 100% MIT licensed with zero paywalled compiler features.”
      </blockquote>
      <div class="manifesto-author">— Ghazi, Creator of docmd</div>
    </div>
    <div class="tenets-grid">
      <div class="tenet-card">
        <div class="tenet-num">01 / SOVEREIGNTY</div>
        <h4>Data Sovereignty</h4>
        <p>Your documentation is plain Markdown in your Git repo. No proprietary databases or schemas. If you ever switch, you take all your content with you cleanly.</p>
      </div>
      <div class="tenet-card">
        <div class="tenet-num">02 / INDEPENDENCE</div>
        <h4>Zero Vendor Lock-in</h4>
        <p>Compile to standard static HTML. Host on any static cloud or CDN for $0. Zero monthly fees, zero runtime dependencies, zero surprises.</p>
      </div>
      <div class="tenet-card">
        <div class="tenet-num">03 / OPENNESS</div>
        <h4>Permissive MIT License</h4>
        <p>Free for personal, open-source, and commercial use. Built by engineers who believe documentation infrastructure should be open to all.</p>
      </div>
    </div>
    <div class="contributors-showcase">
      <div class="contributors-header">
        <h3>Community Contributors</h3>
        <p>Thank you to the engineers who contribute code, report issues, and build the future of docmd.</p>
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
      <div class="contributors-footer">
        <span>Want to contribute? Check out our <a href="https://github.com/docmd-io/docmd" target="_blank" rel="noopener">GitHub repository</a></span>
        <span>·</span>
        <span>Support the project on <a href="https://github.com/sponsors/mgks" target="_blank" rel="noopener">GitHub Sponsors</a></span>
      </div>
    </div>
  </div>
</section>
<section class="sponsors-section" aria-label="Community sponsors">
  <div class="container">
    <h3 data-i18n="sponsors.title">Community Sponsors</h3>
    <div id="sponsors-grid" class="sponsors-grid"></div>
  </div>
</section>
<section class="faq-section" aria-label="Frequently asked questions">
  <div class="container">
    <h2 class="section-title" data-i18n="faq.title">Frequently asked questions</h2>
    <p class="section-sub" style="margin-bottom:28px; text-align:center;" data-i18n="faq.sub">Everything you need to know about docmd.</p>
    <details class="faq-item">
      <summary data-i18n="faq.q1">What is docmd?</summary>
      <div class="faq-answer" data-i18n-html="faq.a1">docmd is an open-source documentation compiler. You give it a folder of Markdown files, run one command, and it produces a website, search index, AI context, and knowledge formats — all together, no configuration needed.</div>
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
      <div class="faq-answer" data-i18n-html="faq.a4">docmd includes a built-in MCP server that lets AI coding tools like Claude, Cursor, and Windsurf search and read your documentation directly. It also auto-generates <code>llms.txt</code> and <code>SKILL.md</code> files so any language model can understand your docs.</div>
    </details>
    <details class="faq-item">
      <summary data-i18n="faq.q8">What are Agent Skills (SKILL.md) and how do I install them?</summary>
      <div class="faq-answer" data-i18n-html="faq.a8">Agent Skills are instruction files that AI coding assistants (Claude, Cursor, Windsurf) can read to understand how to work with your project. Install official docmd skills into your workspace with:
      <p><b><code>npx docmd-skills [target-directory]</code></b></p></div>
    </details>
  </div>
</section>
<section class="cta-section" aria-label="Get started">
  <div class="container">
    <h2 data-i18n="cta.title">Start building in minutes</h2>
    <p class="section-sub" style="margin-bottom:20px;" data-i18n="cta.desc">Open source, MIT licensed. One command to your first documentation site.</p>
    <div class="cta-actions">
      <a href="https://docs.docmd.io" class="btn-primary" data-i18n="cta.docs">Read Documentation</a>
      <a href="https://github.com/docmd-io/docmd" class="btn-secondary" target="_blank" rel="noopener" data-i18n="cta.github">Star on GitHub</a>
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