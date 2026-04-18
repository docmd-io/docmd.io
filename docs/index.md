---
title: "Markdown to Production Docs in One Command"
description: "The zero-config documentation engine. Static HTML for SEO. SPA for speed. AI-ready by default. No framework required."
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
    description: "docmd is the zero-config documentation engine. Markdown to production docs in one command. Static HTML for SEO. SPA for speed. AI-ready by default."
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
    offers:
      "@type": "Offer"
      price: "0"
      priceCurrency: "USD"
customHead: |
  <link rel="stylesheet" href="/assets/css/style.css">
  <link rel="apple-touch-icon" href="/assets/images/apple-touch-icon.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&family=JetBrains+Mono&display=swap" rel="stylesheet">
---

<div class="flare flare-1"></div>
<div class="flare flare-2"></div>

<nav class="navbar">
    <div class="container nav-inner">
        <a href="/" class="logo" aria-label="docmd home" alt="docmd">
            <svg width="24" height="24" id="icon-feather" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line></svg>
            docmd
        </a>
        <div class="nav-links">
            <a href="https://docs.docmd.io" class="nav-link" data-i18n="nav.docs">Documentation</a>
            <a href="https://live.docmd.io" class="nav-link" data-i18n="nav.editor">Live Editor</a>
            <a href="https://github.com/docmd-io/docmd" class="icon-btn" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            </a>
            <div class="lang-switcher" id="lang-switcher">
                <button class="icon-btn" id="lang-toggle" aria-label="Switch language">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
                </button>
                <div class="lang-dropdown" id="lang-dropdown">
                    <a class="lang-option active" href="/" data-lang="en">English</a>
                    <a class="lang-option" href="/zh/" data-lang="zh">中文</a>
                </div>
            </div>
            <button class="icon-btn" id="theme-toggle" aria-label="Toggle theme">
                <span class="theme-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-icon lucide-sun"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg></span>
            </button>
        </div>
    </div>
</nav>

<header class="hero">
    <!--<div class="hero-image-section">
        <div class="hero-image-wrapper">
            <img src="/assets/images/docmd-preview-en.png" alt="docmd documentation preview" class="hero-screenshot" data-i18n-src="hero.preview.src" data-i18n-alt="hero.preview.alt">
        </div>
    </div>-->
    <div class="container hero-content">
        <a href="https://www.npmjs.com/package/@docmd/core" target="_blank" rel="noopener" class="hero-badge">
            <span class="badge-dot"></span> <span id="npm-version">v0.7.0</span> <span data-i18n="hero.badge">Now Available</span>
        </a>
        <h1>
            <span class="text-flow" data-i18n="hero.title1">Markdown → Production Docs</span><br>
            <span class="text-fade" data-i18n="hero.title2">in One Command.</span>
        </h1>
        <div class="cta-row">
            <a href="https://docs.docmd.io/getting-started/installation" class="btn btn-primary" data-i18n="hero.cta.start">Get Started</a>
            <button class="btn btn-secondary" onclick="copyCmd()">
                <span class="eis-span-1">$</span>
                npm i @docmd/core
                <span class="cmd-icon eis-span-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy-icon lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
                </span>
            </button>
        </div>
        <p class="subtitle" data-i18n-html="hero.subtitle">Static HTML for SEO. SPA for speed. AI-ready by default. <br>No React. No config files. No learning curve.</p>
    </div>
</header>

<section class="perspective-wrap">
    <div class="container">
        <div class="browser-mockup">
            <div class="browser-header">
                <div class="dot dot-r"></div><div class="dot dot-y"></div><div class="dot dot-g"></div>
                <div class="url-bar">live.docmd.io</div>
            </div>
            <div class="browser-body">
                <div class="code-editor" id="typing-code"></div>
                <div class="live-preview" id="live-preview-pane">
                    <div id="preview-content" class="preview-content"></div>                    
                </div>
            </div>
        </div>
    </div>
</section>
<section class="container eis-section-3">
    <div class="section-header">
        <h2 class="section-title" data-i18n="why.title">Why docmd?</h2>
        <p class="section-desc" data-i18n="why.desc">Production-grade documentation infrastructure. Comprehensive features with clean developer experience.</p>
    </div>
    <div class="bento-grid">
        <div class="b-card span-2">
            <div class="b-header">
                <div class="b-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-box-icon lucide-box"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg></div>
                <h3 class="b-title" data-i18n="bento.layouts.title">Write Complex Layouts in Markdown</h3>
            </div>
            <p class="b-desc" data-i18n="bento.layouts.desc">Callouts, cards, tabs, and more. Native container syntax for complex layouts — no HTML required.</p>
            <div class="eis-div-4">
                <div class="hide-768 eis-div-5">
                    <code class="eis-code-6" data-i18n="bento.layouts.callouts">Callouts</code> are perfect for drawing the user's attention to a specific piece of information.
                </div>
                <div class="eis-div-7">
                    <strong class="eis-strong-8"><span class="eis-span-9">JavaScript</span><span class="eis-span-10">Python</span></strong><p class="eis-p-11">
                    <code class="eis-code-12">
                        func (){
                            <br>
                            &nbsp;&nbsp; echo "<span data-i18n="bento.layouts.tabs.desc">Organise content into multiple tabbed sections.</span>"
                            <br>
                        }
                    </code></p>
                </div>
                <div class="eis-div-13">
                    <strong class="eis-strong-14" data-i18n="bento.layouts.cards">Card Containers</strong><span data-i18n="bento.layouts.cards.desc">They can feature overviews, summaries, or linking to other sections.</span>
                </div>  
            </div>
        </div>
        <div class="b-card theme-card">
            <div class="b-header">
                <div class="b-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-palette-icon lucide-palette"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle></svg></div>
                <h3 class="b-title" data-i18n="bento.themes.title">Themes</h3>
            </div>
            <p class="b-desc" data-i18n="bento.themes.desc">Built-in Light &amp; Dark modes. Futuristic gradients or clean corporate looks.</p>
            <div class="vis-container vis-theme-preview">
                <div class="theme-swatch sw-light"></div>
                <div class="theme-swatch sw-dark"></div>
            </div>
        </div>
        <div class="b-card">
            <div class="b-header">
                <div class="b-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg></div>
                <h3 class="b-title" data-i18n="bento.search.title">Search That Works Everywhere</h3>
            </div>
            <p class="b-desc" data-i18n="bento.search.desc">Instant fuzzy search with zero API keys. No cloud. Works offline. 100% private.</p>
            <div class="vis-container vis-search">
                <div class="fake-search-bar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg> <span data-i18n="bento.search.placeholder">Search...</span>
                </div>
                <div class="fake-results">
                    <div class="fake-res"></div>
                    <div class="fake-res"></div>
                </div>
            </div>
        </div>
        <div class="b-card">
            <div class="b-header">
                <div class="b-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-puzzle-icon lucide-puzzle"><path d="M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z"></path></svg></div>
                <h3 class="b-title" data-i18n="bento.plugins.title">Plugins</h3>
            </div>
            <p class="b-desc" data-i18n="bento.plugins.desc">All 6 core plugins included by default. Zero config required.</p>
            <div class="vis-container vis-plugins">
                <div class="plug-item">Search</div>
                <div class="plug-item">SEO</div>
                <div class="plug-item">Sitemap</div>
                <div class="plug-item">Analytics</div>
                <div class="plug-item">LLMs</div>
                <div class="plug-item">Mermaid</div>
            </div>
        </div>
        <div class="b-card">
            <div class="b-header">
                <div class="b-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-git-branch-icon lucide-git-branch"><path d="M15 6a9 9 0 0 0-9 9V3"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/></svg></div>
                <h3 class="b-title" data-i18n="bento.versioning.title">Versioning</h3>
            </div>
            <p class="b-desc" data-i18n="bento.versioning.desc">Native multi-version support. Switch between legacy, stable, and experimental docs seamlessly.</p>
            <div class="vis-container" style="margin-top: auto; border-color: rgba(255,255,255,0.1); padding: 8px;">
                <div style="display: flex; align-items: center; justify-content: space-between; padding: 10px 12px; border-radius: 6px; border: 1px solid rgba(59, 130, 246, 0.2); margin-bottom: 10px;">
                    <span style="font-size: 0.8rem; font-weight: 600; color: #3b82f6;" data-i18n="bento.versioning.latest">v0.7.0 (Latest)</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #3b82f6;"><path d="m6 9 6 6 6-6"/></svg>
                </div>
                <div style="padding: 10px 12px; font-size: 0.75rem; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 8px;" data-i18n="bento.versioning.previous">v0.6.0 (Previous)</div>
                <div style="padding: 10px 12px; font-size: 0.75rem;" data-i18n="bento.versioning.legacy">v0.5.0 (Legacy)</div>
            </div>
        </div>
        <div class="b-card">
            <div class="b-header">
                <div class="b-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cpu-icon lucide-cpu"><path d="M12 20v2"/><path d="M12 2v2"/><path d="M17 20v2"/><path d="M17 2v2"/><path d="M2 12h2"/><path d="M2 17h2"/><path d="M2 7h2"/><path d="M20 12h2"/><path d="M20 17h2"/><path d="M20 7h2"/><path d="M7 20v2"/><path d="M7 2v2"/><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="8" y="8" width="8" height="8" rx="1"/></svg></div>
                <h3 class="b-title" data-i18n="bento.ai.title">Built for the AI Era</h3>
            </div>
            <p class="b-desc" data-i18n="bento.ai.desc">Semantic containers provide high-fidelity signals for AI agents. Every site ships with llms.txt and llms-full.txt context streams.</p>
            <div class="vis-container vis-search" style="height:auto; padding:15px; background:var(--bg-canvas);">
                <code style="font-size:0.75rem; opacity:0.8; line-height:1.75;">
                    {<br/>&nbsp;&nbsp;&nbsp;ai-ready: true,<br/>&nbsp;&nbsp;&nbsp;semantic-context: "developer-guide"<br/>}
                </code>
            </div>
        </div>
        <div class="b-card">
            <div class="b-header">
                <div class="b-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap-icon lucide-zap"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg></div>
                <h3 class="b-title" data-i18n="bento.fast.title">Fast Without the Framework Tax</h3>
            </div>
            <p class="b-desc" data-i18n="bento.fast.desc">Zero-reload navigation with standalone HTML files. &lt; 20kb client JS. Lighthouse 100.</p>
            <div class="vis-container vis-changelog" style="align-items:center; justify-content:center; text-align:center; height: 80px; flex-direction: column; gap: 4px;">
                <div style="font-size:1.8rem; font-weight:800; color:var(--accent-success);">100</div>
                <div style="font-size:0.6rem; opacity:0.6; letter-spacing:1px; text-transform:uppercase; font-weight:600;" data-i18n="bento.fast.score">Performance Score</div>
            </div>
        </div>
        <div class="b-card">
            <div class="b-header">
                <div class="b-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-history-icon lucide-history"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M12 7v5l4 2"></path></svg></div>
                <h3 class="b-title" data-i18n="bento.changelog.title">Changelogs</h3>
            </div>
            <p class="b-desc" data-i18n="bento.changelog.desc">Beautiful timeline component for your release notes.</p>
            <div class="vis-container vis-changelog">
                <div class="cl-item">
                    <div class="cl-date">v1.2</div>
                    <div class="cl-content">
                        <span class="cl-ver" data-i18n="bento.changelog.v1">Feature Drop</span>
                        <span class="cl-txt" data-i18n="bento.changelog.v1.desc">Added new dark mode.</span>
                    </div>
                </div>
                <div class="cl-item">
                    <div class="cl-date">v2.0</div>
                    <div class="cl-content">
                        <span class="cl-ver" data-i18n="bento.changelog.v2">Stable Release</span>
                        <span class="cl-txt" data-i18n="bento.changelog.v2.desc">Started MCP support.</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="b-card span-3">
            <div class="b-header">
                <div class="b-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg></div>
                <h3 class="b-title" data-i18n="bento.i18n.title">Native i18n</h3>
            </div>
            <p class="b-desc" data-i18n="bento.i18n.desc">First-class multi-language support with locale-first URLs, per-locale search, and translated UI strings.</p>
            <div class="vis-container" style="margin-top: auto; padding: 12px; height: auto;">
                <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                    <span class="plug-item">English</span>
                    <span class="plug-item">中文</span>
                    <span class="plug-item">हिन्दी</span>
                    <span class="plug-item">日本語</span>
                    <span class="plug-item">+∞</span>
                </div>
            </div>
        </div>
    </div>
</section>
    <div class="section-header">
        <h2 class="section-title" data-i18n="plugins.title">Plugin Ecosystem</h2>
        <p class="section-desc" data-i18n="plugins.desc">Everything you need, built in. Optional add-ons when you want more.</p>
    </div>
    <div class="plugins-grid">
        <div class="plugin-card plugin-required">
            <div class="plugin-status"><span class="status-check">✓</span> <span data-i18n="plugins.status.included">Included</span></div>
            <h4 class="plugin-name" data-i18n="plugins.search.name">Search</h4>
            <p class="plugin-desc" data-i18n="plugins.search.desc">Offline full-text fuzzy search. Zero API keys, 100% private.</p>
        </div>
        <div class="plugin-card plugin-required">
            <div class="plugin-status"><span class="status-check">✓</span> <span data-i18n="plugins.status.included">Included</span></div>
            <h4 class="plugin-name" data-i18n="plugins.seo.name">SEO</h4>
            <p class="plugin-desc" data-i18n="plugins.seo.desc">Meta tags, Open Graph, Twitter cards, and AI bot controls.</p>
        </div>
        <div class="plugin-card plugin-required">
            <div class="plugin-status"><span class="status-check">✓</span> <span data-i18n="plugins.status.included">Included</span></div>
            <h4 class="plugin-name" data-i18n="plugins.sitemap.name">Sitemap</h4>
            <p class="plugin-desc" data-i18n="plugins.sitemap.desc">Automatic sitemap.xml generation with priority and frequency.</p>
        </div>
        <div class="plugin-card plugin-required">
            <div class="plugin-status"><span class="status-check">✓</span> <span data-i18n="plugins.status.included">Included</span></div>
            <h4 class="plugin-name" data-i18n="plugins.analytics.name">Analytics</h4>
            <p class="plugin-desc" data-i18n="plugins.analytics.desc">Google Analytics v4 with zero-config injection.</p>
        </div>
        <div class="plugin-card plugin-required">
            <div class="plugin-status"><span class="status-check">✓</span> <span data-i18n="plugins.status.included">Included</span></div>
            <h4 class="plugin-name" data-i18n="plugins.llms.name">LLMs</h4>
            <p class="plugin-desc" data-i18n="plugins.llms.desc">Auto-generate llms.txt and llms-full.txt for AI context.</p>
        </div>
        <div class="plugin-card plugin-required">
            <div class="plugin-status"><span class="status-check">✓</span> <span data-i18n="plugins.status.included">Included</span></div>
            <h4 class="plugin-name" data-i18n="plugins.mermaid.name">Mermaid</h4>
            <p class="plugin-desc" data-i18n="plugins.mermaid.desc">Native interactive diagrams with dark/light theme support.</p>
        </div>
        <div class="plugin-card plugin-optional">
            <div class="plugin-status"><span class="status-badge" data-i18n="plugins.status.optional">Optional</span></div>
            <h4 class="plugin-name" data-i18n="plugins.pwa.name">PWA</h4>
            <p class="plugin-desc" data-i18n="plugins.pwa.desc">Progressive Web App support with offline caching.</p>
            <button class="plugin-install-btn" onclick="copyPluginCmd(this, 'docmd add pwa')">
                <span class="install-text">$ docmd add pwa</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
            </button>
        </div>
        <div class="plugin-card plugin-optional">
            <div class="plugin-status"><span class="status-badge" data-i18n="plugins.status.optional">Optional</span></div>
            <h4 class="plugin-name" data-i18n="plugins.threads.name">Threads</h4>
            <p class="plugin-desc" data-i18n="plugins.threads.desc">Inline discussion comments stored in your markdown files.</p>
            <button class="plugin-install-btn" onclick="copyPluginCmd(this, 'docmd add threads')">
                <span class="install-text">$ docmd add threads</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
            </button>
        </div>
        <div class="plugin-card plugin-optional">
            <div class="plugin-status"><span class="status-badge" data-i18n="plugins.status.optional">Optional</span></div>
            <h4 class="plugin-name" data-i18n="plugins.math.name">Math (KaTeX)</h4>
            <p class="plugin-desc" data-i18n="plugins.math.desc">Beautiful math equations with KaTeX rendering. Inline and block support.</p>
            <button class="plugin-install-btn" onclick="copyPluginCmd(this, 'docmd add math')">
                <span class="install-text">$ docmd add math</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
            </button>
        </div>
    </div>
</section>

<section class="metrics-banner">
    <div class="container metrics-grid">
        <div class="metric-item">
            <div class="metric-value">~18<span class="metric-unit">kb</span></div>
            <div class="metric-label" data-i18n="metrics.js">Client JS Payload</div>
        </div>
        <div class="metric-item">
            <div class="metric-value">~0<span class="metric-unit">ms</span></div>
            <div class="metric-label" data-i18n="metrics.spa">SPA Transition Delay</div>
        </div>
        <div class="metric-item">
            <div class="metric-value">100<span class="metric-unit">%</span></div>
            <div class="metric-label" data-i18n="metrics.offline">Offline Search Ready</div>
        </div>
        <div class="metric-item">
            <div class="metric-value" data-i18n="metrics.zeroValue">Zero</div>
            <div class="metric-label" data-i18n="metrics.config">Config Required</div>
        </div>
    </div>
</section>

<section class="bottom-cta">
    <div class="container text-center">
        <h2 class="section-title" data-i18n="cta.title">Ready to write better docs?</h2>
        <p class="section-desc" style="margin-bottom: 30px;" data-i18n="cta.desc">Join the developers building fast, beautiful documentation with docmd.</p>
        <div class="cta-row">
            <a href="https://docs.docmd.io" class="btn btn-primary" data-i18n="cta.docs">Read the Documentation</a>
            <a href="https://github.com/docmd-io/docmd" class="btn btn-secondary" data-i18n="cta.github">Star on GitHub</a>
        </div>
    </div>
</section>

<section class="container eis-section-15">
    <h3 class="eis-h3-16" data-i18n="sponsors.title">Community Sponsors</h3>
    <div id="sponsors-grid" class="sponsors-grid"></div>
</section>

<footer class="footer">
    <div class="watermark">docmd</div>
    <div class="container footer-grid">
        <div class="f-col eis-div-17">
            <a href="/" class="logo eis-a-18" aria-label="docmd footer" alt="docmd">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line></svg>
            </a>
            <p class="eis-p-19" data-i18n-html="footer.tagline">
                The zero-config documentation engine. 
                <br><br>
                Open Source under MIT License. <br>
                © 2026 docmd.io
            </p>
        </div>
        <div class="f-col">
            <div class="f-head" data-i18n="footer.product">Product</div>
            <a href="https://docs.docmd.io/getting-started/installation" class="f-link" data-i18n="footer.installation">Installation</a>
            <a href="https://docs.docmd.io/configuration/general" class="f-link" data-i18n="footer.configuration">Configuration</a>
            <a href="https://docs.docmd.io/cli-commands" class="f-link" data-i18n="footer.cli">CLI Reference</a>
            <a href="https://docs.docmd.io/comparison" class="f-link" data-i18n="footer.comparisons">Comparisons</a>
        </div>
        <div class="f-col">
            <div class="f-head" data-i18n="footer.features">Features</div>
            <a href="https://docs.docmd.io/content/containers/" class="f-link" data-i18n="footer.containers">UI Containers</a>
            <a href="https://docs.docmd.io/theming/available-themes/" class="f-link" data-i18n="footer.theming">Theming</a>
            <a href="https://docs.docmd.io/plugins/usage/" class="f-link" data-i18n="footer.plugins">Plugins</a>
            <a href="https://docs.docmd.io/api/node-api/" class="f-link" data-i18n="footer.api">API Resources</a>
        </div>
        <div class="f-col">
            <div class="f-head" data-i18n="footer.ecosystem">Ecosystem</div>
            <a href="https://github.com/docmd-io/docmd" class="f-link">GitHub</a>
            <a href="https://live.docmd.io" class="f-link" data-i18n="footer.liveEditor">Live Editor</a>
            <a href="https://github.com/docmd-io/docmd/releases" class="f-link" data-i18n="footer.releases">Releases</a>
            <a href="https://github.com/sponsors/mgks" class="f-link" data-i18n="footer.sponsor">Sponsor</a>
        </div>
    </div>
</footer>
<div class="edge-glow"></div>

<script src="/assets/js/script.js"></script>