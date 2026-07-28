---
title: "Terms of Service"
description: "Terms and conditions governing the use of docmd open-source tools, docmd cloud relay, and associated documentation services."
titleAppend: true
noStyle: true
keywords:
  - "terms of service"
  - "legal"
  - "docmd cloud terms"
  - "license"
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
      <a href="https://docs.docmd.io/plugins/usage/" class="nav-link" data-i18n="nav.plugins">Plugins</a>
      <a href="https://docs.docmd.io/comparison/" class="nav-link" data-i18n="nav.compare">Comparison</a>
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
  <h1 style="font-size: 2.25rem; font-weight:700; letter-spacing:-0.025em; margin-bottom: 8px;">Terms of Service</h1>
  <p style="color:var(--text-3); font-size:0.95rem; margin-bottom: 40px;">Last updated: July 28, 2026</p>

  <section style="margin-bottom: 32px;">
    <h2 style="font-size:1.35rem; font-weight:600; margin-bottom:12px;">1. Acceptance of Terms</h2>
    <p>By accessing or using docmd open-source software, docmd cloud relay infrastructure, or associated websites (collectively, "Services"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our Services.</p>
  </section>

  <section style="margin-bottom: 32px;">
    <h2 style="font-size:1.35rem; font-weight:600; margin-bottom:12px;">2. Open Source Software & License</h2>
    <p>The core docmd static site generator (`@docmd/core`) and official plugins are distributed under the open-source MIT License. You are free to use, modify, and distribute the software in accordance with the terms of the MIT License.</p>
  </section>

  <section style="margin-bottom: 32px;">
    <h2 style="font-size:1.35rem; font-weight:600; margin-bottom:12px;">3. docmd cloud Relay & BYOK Security</h2>
    <p>docmd cloud operates a Bring Your Own Key (BYOK) relay for documentation AI assistants:</p>
    <ul style="padding-left:20px; margin-top:8px;">
      <li><strong>API Key Confidentiality:</strong> All user-provided AI provider API keys are encrypted at rest using dedicated hardware security modules (HSM) and envelope key encryption.</li>
      <li><strong>Stateless Proxying:</strong> Request payloads proxied through docmd cloud are processed strictly in-memory within isolated serverless runtime environments and are never written to persistent disk storage.</li>
      <li><strong>User Responsibility:</strong> You are responsible for maintaining and configuring appropriate spending limits and access controls with your chosen AI key provider.</li>
    </ul>
  </section>

  <section style="margin-bottom: 32px;">
    <h2 style="font-size:1.35rem; font-weight:600; margin-bottom:12px;">4. Acceptable Use Policy</h2>
    <p>You agree not to use docmd cloud or docmd tools to:</p>
    <ul style="padding-left:20px; margin-top:8px;">
      <li>Engage in unlawful activities or unauthorized access to external network services.</li>
      <li>Attempt denial-of-service (DoS) attacks, exploit rate limits, or disrupt infrastructure nodes.</li>
      <li>Proxy abusive, malicious, or illegal content through docmd cloud AI relay endpoints.</li>
    </ul>
  </section>

  <section style="margin-bottom: 32px;">
    <h2 style="font-size:1.35rem; font-weight:600; margin-bottom:12px;">5. Limitation of Liability</h2>
    <p>THE SERVICES ARE PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED. IN NO EVENT SHALL THE AUTHORS, MAINTAINERS, OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES, OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT, OR OTHERWISE, ARISING FROM, OUT OF, OR IN CONNECTION WITH THE SOFTWARE OR THE USE OF THE SERVICES.</p>
  </section>

  <section style="margin-bottom: 32px;">
    <h2 style="font-size:1.35rem; font-weight:600; margin-bottom:12px;">6. Modifications to Terms</h2>
    <p>We reserve the right to modify or replace these Terms at any time. Changes will be posted to this page with an updated revision date.</p>
  </section>

  <section style="margin-bottom: 32px;">
    <h2 style="font-size:1.35rem; font-weight:600; margin-bottom:12px;">7. Contact Information</h2>
    <p>If you have any questions regarding these Terms, please reach out via <a href="https://github.com/docmd-io/docmd/discussions" target="_blank" rel="noopener">GitHub Discussions</a>.</p>
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