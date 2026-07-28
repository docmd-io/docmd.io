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
    </div>
    <div class="nav-right">
      <a href="https://github.com/docmd-io/docmd" class="nav-github" target="_blank" rel="noopener" aria-label="GitHub Repository">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
      </a>
    </div>
  </div>
</nav>

<div class="legal-page container" style="max-width:800px; margin:120px auto 80px; padding:0 24px; color:var(--color-text-main, #0f172a); font-family:var(--font-sans, sans-serif); line-height:1.7;">
  <h1 style="font-size: 2.25rem; font-weight:700; letter-spacing:-0.025em; margin-bottom: 8px;">Terms of Service</h1>
  <p style="color:#64748b; font-size:0.95rem; margin-bottom: 40px;">Last updated: July 28, 2026</p>

  <section style="margin-bottom: 32px;">
    <h2 style="font-size:1.35rem; font-weight:600; margin-bottom:12px;">1. Acceptance of Terms</h2>
    <p>By accessing or using docmd open-source tools, docmd cloud relay services, or associated websites (collectively, "Services"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our Services.</p>
  </section>

  <section style="margin-bottom: 32px;">
    <h2 style="font-size:1.35rem; font-weight:600; margin-bottom:12px;">2. Open Source Software & License</h2>
    <p>The core docmd static site generator (`@docmd/core`) and official plugins are distributed under the open-source MIT License. You are free to use, modify, and distribute the software in accordance with the terms of the MIT License.</p>
  </section>

  <section style="margin-bottom: 32px;">
    <h2 style="font-size:1.35rem; font-weight:600; margin-bottom:12px;">3. docmd cloud Relay & BYOK Security</h2>
    <p>docmd cloud operates a Bring Your Own Key (BYOK) relay for documentation AI assistants:</p>
    <ul style="padding-left:20px; margin-top:8px;">
      <li><strong>API Key Confidentiality:</strong> All user-provided AI provider API keys (OpenAI, Anthropic, Gemini, etc.) are encrypted at rest using AWS Key Management Service (KMS) hardware security modules.</li>
      <li><strong>Stateless Proxying:</strong> Request payloads proxied through docmd cloud are processed in-memory and are never stored or logged to persistent disks.</li>
      <li><strong>User Responsibility:</strong> You are responsible for ensuring your API keys have appropriate usage caps and permissions configured with your respective AI provider.</li>
    </ul>
  </section>

  <section style="margin-bottom: 32px;">
    <h2 style="font-size:1.35rem; font-weight:600; margin-bottom:12px;">4. Acceptable Use Policy</h2>
    <p>You agree not to use docmd cloud or docmd tools to:</p>
    <ul style="padding-left:20px; margin-top:8px;">
      <li>Engage in illegal activities, abuse, or unauthorized access to third-party services.</li>
      <li>Exceed rate limits, attempt denial-of-service (DoS) attacks, or disrupt the relay infrastructure.</li>
      <li>Proxy harmful, malicious, or abusive content through docmd cloud AI endpoints.</li>
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