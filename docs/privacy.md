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
    </div>
    <div class="nav-right">
      <a href="https://github.com/docmd-io/docmd" class="nav-github" target="_blank" rel="noopener" aria-label="GitHub Repository">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
      </a>
    </div>
  </div>
</nav>

<div class="legal-page container" style="max-width:800px; margin:120px auto 80px; padding:0 24px; color:var(--color-text-main, #0f172a); font-family:var(--font-sans, sans-serif); line-height:1.7;">
  <h1 style="font-size: 2.25rem; font-weight:700; letter-spacing:-0.025em; margin-bottom: 8px;">Privacy Policy</h1>
  <p style="color:#64748b; font-size:0.95rem; margin-bottom: 40px;">Last updated: July 28, 2026</p>

  <section style="margin-bottom: 32px;">
    <h2 style="font-size:1.35rem; font-weight:600; margin-bottom:12px;">1. Zero Telemetry in Core Tools</h2>
    <p>The open-source docmd CLI engine (`@docmd/core`) operates with strict <strong>zero telemetry</strong> by default. We do not track, collect, or transmit your local file structures, command usage, build metrics, or documentation content.</p>
  </section>

  <section style="margin-bottom: 32px;">
    <h2 style="font-size:1.35rem; font-weight:600; margin-bottom:12px;">2. docmd cloud & Account Authentication</h2>
    <p>When you register for a docmd cloud dashboard account via GitHub or Google OAuth, we collect minimal profile metadata necessary to maintain your session:</p>
    <ul style="padding-left:20px; margin-top:8px;">
      <li>Account ID, Name, and Email address provided by your OAuth identity provider.</li>
      <li>Session tokens stored securely in HTTP-only browser cookies.</li>
    </ul>
  </section>

  <section style="margin-bottom: 32px;">
    <h2 style="font-size:1.35rem; font-weight:600; margin-bottom:12px;">3. BYOK API Key Security & Encryption</h2>
    <p>When you configure Bring Your Own Key (BYOK) AI provider keys in your docmd cloud dashboard:</p>
    <ul style="padding-left:20px; margin-top:8px;">
      <li>Keys are encrypted client-side and stored in AWS DynamoDB encrypted with dedicated hardware keys managed by AWS KMS (Key Management Service).</li>
      <li>Relay requests decrypt keys temporarily in serverless Lambda memory solely for forwarding authorized API calls to your configured provider (OpenAI, Anthropic, Gemini).</li>
      <li>We <strong>never log, store, or sell</strong> your API keys or completion prompts.</li>
    </ul>
  </section>

  <section style="margin-bottom: 32px;">
    <h2 style="font-size:1.35rem; font-weight:600; margin-bottom:12px;">4. Analytics & Web Privacy</h2>
    <p>On docmd.io static marketing pages, we utilize Google Analytics 4 (GA4) with IP anonymization enabled to aggregate page view metrics and optimize site navigation. No personal data or search queries are stored or shared.</p>
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
      <a href="https://live.docmd.io" data-i18n="footer.liveEditor">Live Editor</a>
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