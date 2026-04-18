const fs = require('fs');
const path = require('path');
const config = require('../docmd.config.js');

const siteDir = path.join(__dirname, '../site');
const defaultLocale = config.i18n.default;
const locales = config.i18n.locales.map(l => l.id);
const nonDefaultLocales = locales.filter(id => id !== defaultLocale);

/**
 * Strip the auto-injected docmd client-side i18n runtime.
 *
 * In stringMode, translations are already baked into the HTML at build time.
 * The client-side script conflicts by re-applying translations (and worse,
 * uses localStorage to bleed locale preferences across pages — e.g. visiting
 * /zh/ then going back to / would show Chinese on the English page).
 *
 * We remove:
 *   1. <script>window.DOCMD_I18N = {...};</script>  (inline config)
 *   2. <script src="./assets/js/docmd-i18n-strings.js?v=..."></script>  (runtime)
 */
function stripI18nClientScript(html) {
    // Remove inline DOCMD_I18N config
    html = html.replace(/<script>window\.DOCMD_I18N\s*=\s*\{[^<]*\};\s*<\/script>\s*/g, '');
    // Remove the runtime script tag (handles relative paths and cache-bust query strings)
    html = html.replace(/<script\s+src="[^"]*docmd-i18n-strings\.js[^"]*">\s*<\/script>\s*/g, '');
    return html;
}

/**
 * Rewrite docs.docmd.io links to include the locale prefix.
 * e.g. href="https://docs.docmd.io/getting-started/installation"
 *   → href="https://docs.docmd.io/zh/getting-started/installation"
 */
function rewriteDocsLinks(html, locale) {
    return html.replace(/href="https:\/\/docs\.docmd\.io([^"]*)"/g, (match, pathname) => {
        // Already has locale prefix
        if (pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`) {
            return match;
        }
        const cleanPath = pathname === '' || pathname === '/' ? '' : pathname;
        return `href="https://docs.docmd.io/${locale}${cleanPath}"`;
    });
}

// --- Process non-default locale pages ---
nonDefaultLocales.forEach(locale => {
    const filePath = path.join(siteDir, locale, 'index.html');
    if (!fs.existsSync(filePath)) return;

    let html = fs.readFileSync(filePath, 'utf-8');
    html = stripI18nClientScript(html);
    html = rewriteDocsLinks(html, locale);
    fs.writeFileSync(filePath, html, 'utf-8');
    console.log(`[rewrite-links] ${locale}/index.html → rewrote docs links, stripped i18n client runtime`);
});

// --- Process default locale page ---
const defaultPath = path.join(siteDir, 'index.html');
if (fs.existsSync(defaultPath)) {
    let html = fs.readFileSync(defaultPath, 'utf-8');
    html = stripI18nClientScript(html);
    fs.writeFileSync(defaultPath, html, 'utf-8');
    console.log(`[rewrite-links] index.html → stripped i18n client runtime`);
}

// --- Clean up the runtime file itself (optional, saves bytes) ---
const runtimeFile = path.join(siteDir, 'assets/js/docmd-i18n-strings.js');
if (fs.existsSync(runtimeFile)) {
    fs.unlinkSync(runtimeFile);
    console.log(`[rewrite-links] Deleted orphaned assets/js/docmd-i18n-strings.js`);
}