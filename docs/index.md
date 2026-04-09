---
title: "The Universal Documentation Engine"
description: "Generate beautiful, lightweight static documentation sites directly from your Markdown files. Zero config, zero clutter."
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
    description: "docmd is a Node.js-powered static site generator for Markdown documentation. It features custom containers, multiple themes, and zero client-side bloat."
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
            <a href="https://docs.docmd.io" class="nav-link">Documentation</a>
            <a href="https://live.docmd.io" class="nav-link">Live Editor</a>
            <a href="https://github.com/docmd-io/docmd" class="icon-btn" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            </a>
            <button class="icon-btn" id="theme-toggle" aria-label="Toggle theme">
                <span class="theme-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-icon lucide-sun"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg></span>
            </button>
        </div>
    </div>
</nav>

<header class="hero">
    <div class="container">
        <a href="https://www.npmjs.com/package/@docmd/core" target="_blank" rel="noopener" class="hero-badge">
            <span class="badge-dot"></span> <span id="npm-version">v0.5.x</span> Now Available
        </a>
        <h1>
            <span class="text-flow">Beautiful Documentation.</span><br>
            <span class="text-fade">Zero Clutter.</span>
        </h1>
        <div class="cta-row">
            <a href="https://docs.docmd.io/getting-started/installation" class="btn btn-primary">Get Started</a>
            <button class="btn btn-secondary" onclick="copyCmd()">
                <span class="eis-span-1">$</span>
                npm i @docmd/core
                <span class="cmd-icon eis-span-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy-icon lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
                </span>
            </button>
        </div>
        <p class="subtitle">The minimalist, zero-config engine for professional documentation. <br>No React, no heavy frameworks.</p>
    </div>
</header>

<!--
<section class="hero-image-section">
    <div class="container">
        <div class="hero-image-wrapper">
            <img src="https://github.com/user-attachments/assets/58c0f85d-8bdc-41e8-af06-01427beb32e8" alt="docmd preview" class="hero-screenshot"> 
        </div>
    </div>
</section>
-->

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
        <h2 class="section-title">Engineered for Maturity</h2>
        <p class="section-desc">More than just a generator. A comprehensive documentation system that bridges the gap between human readers and AI agents.</p>
    </div>
    <div class="bento-grid">
        <div class="b-card span-2">
            <div class="b-header">
                <div class="b-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-box-icon lucide-box"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg></div>
                <h3 class="b-title">Rich Containers</h3>
            </div>
            <p class="b-desc">Callouts, cards, tabs, and more. Use our custom markdown syntax to create complex layouts.</p>
            <div class="eis-div-4">
                <div class="hide-768 eis-div-5">
                    <code class="eis-code-6">Callouts</code> are perfect for drawing the user’s attention to a specific piece of information.
                </div>
                <div class="eis-div-7">
                    <strong class="eis-strong-8"><span class="eis-span-9">JavaScript</span><span class="eis-span-10">Python</span></strong><p class="eis-p-11">
                    <code class="eis-code-12">
                        func (){
                            <br>
                            &nbsp;&nbsp; echo "Organize content into multiple tabbed sections."
                            <br>
                        }
                    </code></p>
                </div>
                <div class="eis-div-13">
                    <strong class="eis-strong-14">Card Containers</strong>They can feature overviews, summaries, or linking to other sections.
                </div>  
            </div>
        </div>
        <div class="b-card theme-card">
            <div class="b-header">
                <div class="b-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-palette-icon lucide-palette"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle></svg></div>
                <h3 class="b-title">Themes</h3>
            </div>
            <p class="b-desc">Built-in Light &amp; Dark modes. Futuristic gradients or clean corporate looks.</p>
            <div class="vis-container vis-theme-preview">
                <div class="theme-swatch sw-light"></div>
                <div class="theme-swatch sw-dark"></div>
            </div>
        </div>
        <div class="b-card">
            <div class="b-header">
                <div class="b-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg></div>
                <h3 class="b-title">Offline Search</h3>
            </div>
            <p class="b-desc">Instant fuzzy search with zero API keys. 100% private.</p>
            <div class="vis-container vis-search">
                <div class="fake-search-bar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg> Search...
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
                <h3 class="b-title">Plugins</h3>
            </div>
            <p class="b-desc">Extend functionality with SEO, Analytics, and Sitemap plugins.</p>
            <div class="vis-container vis-plugins">
                <div class="plug-item">SEO</div>
                <div class="plug-item">Sitemap</div>
                <div class="plug-item">GA4</div>
                <div class="plug-item">Robots</div>
            </div>
        </div>
        <div class="b-card">
            <div class="b-header">
                <div class="b-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-git-branch-icon lucide-git-branch"><path d="M15 6a9 9 0 0 0-9 9V3"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/></svg></div>
                <h3 class="b-title">Versioning</h3>
            </div>
            <p class="b-desc">Native multi-version support. Switch between legacy, stable, and experimental docs seamlessly.</p>
            <div class="vis-container" style="margin-top: auto; border-color: rgba(255,255,255,0.1); padding: 8px;">
                <div style="display: flex; align-items: center; justify-content: space-between; padding: 10px 12px; border-radius: 6px; border: 1px solid rgba(59, 130, 246, 0.2); margin-bottom: 10px;">
                    <span style="font-size: 0.8rem; font-weight: 600; color: #3b82f6;">v0.7.0 (Stable)</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #3b82f6;"><path d="m6 9 6 6 6-6"/></svg>
                </div>
                <div style="padding: 10px 12px; font-size: 0.75rem; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 8px;">v0.6.3 (Legacy)</div>
                <div style="padding: 10px 12px; font-size: 0.75rem;">v0.5.11 (Archived)</div>
            </div>
        </div>
        <div class="b-card">
            <div class="b-header">
                <div class="b-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cpu-icon lucide-cpu"><path d="M12 20v2"/><path d="M12 2v2"/><path d="M17 20v2"/><path d="M17 2v2"/><path d="M2 12h2"/><path d="M2 17h2"/><path d="M2 7h2"/><path d="M20 12h2"/><path d="M20 17h2"/><path d="M20 7h2"/><path d="M7 20v2"/><path d="M7 2v2"/><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="8" y="8" width="8" height="8" rx="1"/></svg></div>
                <h3 class="b-title">AI-Ready Pipeline</h3>
            </div>
            <p class="b-desc">Our Semantic Containers act as high-fidelity signals for AI agents. Every site ships with a native `llms-full.txt` context stream.</p>
            <div class="vis-container vis-search" style="height:auto; padding:15px; background:var(--bg-canvas);">
                <code style="font-size:0.75rem; opacity:0.8; line-height:1.75;">
                    {<br/>&nbsp;&nbsp;&nbsp;ai-ready: true,<br/>&nbsp;&nbsp;&nbsp;semantic-context: "developer-guide"<br/>}
                </code>
            </div>
        </div>
        <div class="b-card">
            <div class="b-header">
                <div class="b-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap-icon lucide-zap"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg></div>
                <h3 class="b-title">Micro-SPA Core</h3>
            </div>
            <p class="b-desc">Zero-reload navigation with standalone HTML files. Ultra-light &lt; 20kb reachability layer.</p>
            <div class="vis-container vis-changelog" style="align-items:center; justify-content:center; text-align:center; height: 80px; flex-direction: column; gap: 4px;">
                <div style="font-size:1.8rem; font-weight:800; color:var(--accent-success);">100</div>
                <div style="font-size:0.6rem; opacity:0.6; letter-spacing:1px; text-transform:uppercase; font-weight:600;">Performance Score</div>
            </div>
        </div>
        <div class="b-card">
            <div class="b-header">
                <div class="b-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-history-icon lucide-history"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M12 7v5l4 2"></path></svg></div>
                <h3 class="b-title">Changelogs</h3>
            </div>
            <p class="b-desc">Beautiful timeline component for your release notes.</p>
            <div class="vis-container vis-changelog">
                <div class="cl-item">
                    <div class="cl-date">v1.2</div>
                    <div class="cl-content">
                        <span class="cl-ver">Feature Drop</span>
                        <span class="cl-txt">Added new dark mode.</span>
                    </div>
                </div>
                <div class="cl-item">
                    <div class="cl-date">v2.0</div>
                    <div class="cl-content">
                        <span class="cl-ver">Stable Release</span>
                        <span class="cl-txt">Started MCP support.</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="container plugins-showcase" id="plugins">
    <div class="section-header">
        <h2 class="section-title">Plugin Ecosystem</h2>
        <p class="section-desc">Everything you need, built in. Optional add-ons when you want more.</p>
    </div>
    <div class="plugins-grid">
        <div class="plugin-card plugin-required">
            <div class="plugin-status"><span class="status-check">✓</span> Included</div>
            <h4 class="plugin-name">Search</h4>
            <p class="plugin-desc">Offline full-text fuzzy search. Zero API keys, 100% private.</p>
        </div>
        <div class="plugin-card plugin-required">
            <div class="plugin-status"><span class="status-check">✓</span> Included</div>
            <h4 class="plugin-name">SEO</h4>
            <p class="plugin-desc">Meta tags, Open Graph, Twitter cards, and AI bot controls.</p>
        </div>
        <div class="plugin-card plugin-required">
            <div class="plugin-status"><span class="status-check">✓</span> Included</div>
            <h4 class="plugin-name">Sitemap</h4>
            <p class="plugin-desc">Automatic sitemap.xml generation with priority and frequency.</p>
        </div>
        <div class="plugin-card plugin-required">
            <div class="plugin-status"><span class="status-check">✓</span> Included</div>
            <h4 class="plugin-name">Analytics</h4>
            <p class="plugin-desc">Google Analytics v4 with zero-config injection.</p>
        </div>
        <div class="plugin-card plugin-required">
            <div class="plugin-status"><span class="status-check">✓</span> Included</div>
            <h4 class="plugin-name">PWA</h4>
            <p class="plugin-desc">Progressive Web App support with offline caching.</p>
        </div>
        <div class="plugin-card plugin-required">
            <div class="plugin-status"><span class="status-check">✓</span> Included</div>
            <h4 class="plugin-name">LLMs</h4>
            <p class="plugin-desc">Auto-generate llms.txt and llms-full.txt for AI context.</p>
        </div>
        <div class="plugin-card plugin-required">
            <div class="plugin-status"><span class="status-check">✓</span> Included</div>
            <h4 class="plugin-name">Mermaid</h4>
            <p class="plugin-desc">Native interactive diagrams with dark/light theme support.</p>
        </div>
        <div class="plugin-card plugin-optional">
            <div class="plugin-status"><span class="status-badge">Optional</span></div>
            <h4 class="plugin-name">Threads</h4>
            <p class="plugin-desc">Inline discussion comments stored in your markdown files.</p>
            <button class="plugin-install-btn" onclick="copyPluginCmd(this, 'docmd add threads')">
                <span class="install-text">$ docmd add threads</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
            </button>
        </div>
    </div>
</section>

<section class="metrics-banner">
    <div class="container metrics-grid">
        <div class="metric-item">
            <div class="metric-value">~20<span class="metric-unit">kb</span></div>
            <div class="metric-label">Client JS Payload</div>
        </div>
        <div class="metric-item">
            <div class="metric-value">~0<span class="metric-unit">ms</span></div>
            <div class="metric-label">SPA Transition Delay</div>
        </div>
        <div class="metric-item">
            <div class="metric-value">100<span class="metric-unit">%</span></div>
            <div class="metric-label">Offline Search Ready</div>
        </div>
        <div class="metric-item">
            <div class="metric-value">Zero</div>
            <div class="metric-label">Config Required</div>
        </div>
    </div>
</section>

<section class="bottom-cta">
    <div class="container text-center">
        <h2 class="section-title">Ready to write better docs?</h2>
        <p class="section-desc" style="margin-bottom: 30px;">Join the developers building fast, beautiful documentation with docmd.</p>
        <div class="cta-row">
            <a href="https://docs.docmd.io" class="btn btn-primary">Read the Documentation</a>
            <a href="https://github.com/docmd-io/docmd" class="btn btn-secondary">Star on GitHub</a>
        </div>
    </div>
</section>

<section class="container eis-section-15">
    <h3 class="eis-h3-16">Community Sponsors</h3>
    <div id="sponsors-grid" class="sponsors-grid"></div>
</section>

<footer class="footer">
    <div class="watermark">docmd</div>
    <div class="container footer-grid">
        <div class="f-col eis-div-17">
            <a href="/" class="logo eis-a-18" aria-label="docmd footer" alt="docmd">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line></svg>
            </a>
            <p class="eis-p-19">
                The universal documentation engine for modern developers. 
                <br><br>
                Open Source under MIT License. <br>
                © 2026 docmd.io
            </p>
        </div>
        <div class="f-col">
            <div class="f-head">Product</div>
            <a href="https://docs.docmd.io/getting-started/installation" class="f-link">Installation</a>
            <a href="https://docs.docmd.io/configuration/general" class="f-link">Configuration</a>
            <a href="https://docs.docmd.io/cli-commands" class="f-link">CLI Reference</a>
            <a href="https://docs.docmd.io/comparison" class="f-link">Comparisons</a>
        </div>
        <div class="f-col">
            <div class="f-head">Features</div>
            <a href="https://docs.docmd.io/content/containers/" class="f-link">UI Containers</a>
            <a href="https://docs.docmd.io/theming/available-themes/" class="f-link">Theming</a>
            <a href="https://docs.docmd.io/plugins/usage/" class="f-link">Plugins</a>
            <a href="https://docs.docmd.io/api/node-api/" class="f-link">API Resources</a>
        </div>
        <div class="f-col">
            <div class="f-head">Ecosystem</div>
            <a href="https://github.com/docmd-io/docmd" class="f-link">GitHub</a>
            <a href="https://live.docmd.io" class="f-link">Live Editor</a>
            <a href="https://github.com/docmd-io/docmd/releases" class="f-link">Releases</a>
            <a href="https://github.com/sponsors/mgks" class="f-link">Sponsor</a>
        </div>
    </div>
</footer>
<div class="edge-glow"></div>

<script src="/assets/js/script.js"></script>