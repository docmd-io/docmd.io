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
    installUrl: "https://www.npmjs.com/package/@docmd/cli"
    offers:
      "@type": "Offer"
      price: "0"
      priceCurrency: "USD"
customHead: |
  <link rel="stylesheet" href="/assets/css/style.css">
  <link rel="apple-touch-icon" href="/assets/images/apple-touch-icon.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono&display=swap" rel="stylesheet">
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
        <a href="https://www.npmjs.com/package/@mgks/docmd" target="_blank" rel="noopener" class="hero-badge">
            <span class="badge-dot"></span> <span id="npm-version">v0.3.8</span> Now Available
        </a>
        <h1>
            <span class="text-flow">Beautiful Documentation.</span><br>
            <span class="text-fade">Zero Clutter. Just Content.</span>
        </h1>
        <p class="subtitle">Instant docs from Markdown. No React. No bloat.</p>
        <div class="cta-row">
            <a href="https://docs.docmd.io/getting-started/installation" class="btn btn-primary">Get Started</a>
            <button class="btn btn-secondary" onclick="copyCmd()">
                <span class="eis-span-1">$</span>
                npm i -g @mgks/docmd
                <span class="cmd-icon eis-span-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy-icon lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
                </span>
            </button>
        </div>
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
        <h2 class="section-title">All You Need</h2>
        <p class="section-desc">Batteries included. We handled the complex parts so you can focus on writing.</p>
    </div>
    <div class="bento-grid">
        <!-- (Span 2) Rich Containers -->
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

        <!-- Themes -->
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

        <!-- Instant Search -->
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

        <!-- Changelogs -->
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

        <!-- Plugins -->
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

    </div>
</section>

<section class="container eis-section-15">
    <h3 class="eis-h3-16">Community Sponsors</h3>
    <div id="sponsors-grid" class="sponsors-grid"></div>
</section>

<footer class="footer">
    <div class="watermark">docmd</div>
    <div class="container footer-grid">
        <!-- Col 1 (2fr): Brand & Copyright -->
        <div class="f-col eis-div-17">
            <a href="/" class="logo eis-a-18" aria-label="docmd footer" alt="docmd">
                <svg width="24" height="24" id="icon-feather" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line></svg>
            </a>
            <p class="eis-p-19">
                The universal documentation engine for modern developers. 
                <br><br>
                Open Source under MIT License. <br>
                © 2025 docmd.io
            </p>
        </div>

        <!-- Links (Right Side) -->
        <div class="f-col">
            <div class="f-head">Explore</div>
            <a href="https://docs.docmd.io/getting-started/installation" class="f-link">Installation</a>
            <a href="https://docs.docmd.io/theming" class="f-link">Theming</a>
            <a href="https://docs.docmd.io/plugins" class="f-link">Plugins</a>
        </div>
        <div class="f-col">
            <div class="f-head">Resources</div>
            <a href="https://docs.docmd.io" class="f-link">Documentation</a>
            <a href="https://live.docmd.io" class="f-link">Live Editor</a>
            <a href="https://github.com/docmd-io/docmd/releases" class="f-link">Changelog</a>
        </div>
        <div class="f-col">
            <div class="f-head">Community</div>
            <a href="https://github.com/docmd-io/docmd" class="f-link">GitHub</a>
            <a href="https://github.com/docmd-io/docmd/issues" class="f-link">Report Issue</a>
            <a href="https://github.com/sponsors/mgks" class="f-link">Sponsor</a>
        </div>
    </div>
</footer>
<div class="edge-glow"></div>

<script src="/assets/js/script.js"></script>