---
title: "Privacy Policy"
description: "Privacy Policy outlining data handling, zero-telemetry defaults, KMS key encryption, and user rights for docmd and docmd cloud."
titleAppend: true
noStyle: true
keywords:
  - "privacy policy"
  - "data privacy"
  - "docmd cloud privacy"
  - "kms encryption"
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
      <a href="https://cloud.docmd.io" class="nav-link" data-i18n="nav.cloud">Cloud</a>
      <a href="/assistant/" class="nav-link" data-i18n="nav.assistant">AI Assistant</a>
      <a href="/search/" class="nav-link" data-i18n="nav.search">Semantic Search</a>
      <a href="https://live.docmd.io" class="nav-link" data-i18n="nav.editor">Live Editor</a>
      <span class="nav-divider"></span>
      <a href="https://docs.docmd.io/" class="nav-link" data-i18n="nav.docs">Documentation</a>
    </div>
    <div class="nav-right">
      <a href="https://github.com/docmd-io/docmd" class="icon-btn" aria-label="GitHub" target="_blank" rel="noopener">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
      </a>
      <button class="icon-btn" id="theme-toggle" aria-label="Toggle theme">
        <span class="theme-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg></span>
      </button>
    </div>
  </div>
</nav>

<div class="legal-page container" style="max-width:800px; margin:120px auto 80px; padding:0 24px; color:var(--text); font-family:var(--font); line-height:1.7;">
  <h1 style="font-size: 2.25rem; font-weight:700; letter-spacing:-0.025em; margin-bottom: 8px;">Privacy Policy</h1>
  <p style="color:var(--text-3); font-size:0.95rem; margin-bottom: 40px;">Last updated: July 28, 2026</p>

  <section style="margin-bottom: 32px;">
    <h2 style="font-size:1.35rem; font-weight:600; margin-bottom:12px;">1. Zero Telemetry in Core Tools</h2>
    <p>The open-source docmd CLI engine (`@docmd/core`) operates with strict <strong>zero telemetry</strong> by default. We do not track, collect, or transmit your local file structures, command usage, build metrics, or documentation content.</p>
  </section>

  <section style="margin-bottom: 32px;">
    <h2 style="font-size:1.35rem; font-weight:600; margin-bottom:12px;">2. docmd cloud & Account Authentication</h2>
    <p>When you register for a docmd cloud dashboard account via OAuth, we collect minimal profile metadata necessary to maintain your session:</p>
    <ul style="padding-left:20px; margin-top:8px;">
      <li>Account ID, Name, and Email address provided by your chosen identity provider.</li>
      <li>Session tokens stored securely in HTTP-only browser cookies.</li>
    </ul>
  </section>

  <section style="margin-bottom: 32px;">
    <h2 style="font-size:1.35rem; font-weight:600; margin-bottom:12px;">3. BYOK Key Encryption & Relay Security</h2>
    <p>When you configure Bring Your Own Key (BYOK) AI provider keys in your docmd cloud dashboard:</p>
    <ul style="padding-left:20px; margin-top:8px;">
      <li>Keys are encrypted client-side and stored in cloud data stores encrypted at rest with envelope encryption and hardware security module (HSM) key management systems.</li>
      <li>Relay requests decrypt keys temporarily in serverless memory solely for forwarding authorized API calls to your configured model endpoints.</li>
      <li>We <strong>never log, store, or sell</strong> your API keys or completion prompts.</li>
    </ul>
  </section>

  <section style="margin-bottom: 32px;">
    <h2 style="font-size:1.35rem; font-weight:600; margin-bottom:12px;">4. Analytics & Web Privacy</h2>
    <p>On docmd.io static marketing pages, we utilize standard website analytics with IP anonymization enabled to aggregate page view metrics and optimize site navigation. No personal data or search queries are stored or shared.</p>
  </section>

  <section style="margin-bottom: 32px;">
    <h2 style="font-size:1.35rem; font-weight:600; margin-bottom:12px;">5. Your Rights & Data Deletion</h2>
    <p>You have the right to request full deletion of your registered docmd cloud account, registered site origins, and encrypted API key records at any time by deleting your site configurations directly in the dashboard or by contacting support.</p>
  </section>
</div>

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