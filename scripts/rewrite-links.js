const fs = require('fs');
const path = require('path');
const config = require('../docmd.config.json');

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

// Locales currently supported on docs.docmd.io
const supportedDocsLocales = ['de', 'zh'];

/**
 * Rewrite docs.docmd.io links to include the locale prefix ONLY if supported by docs.docmd.io.
 * Supported: 'de', 'zh'. Unsupported locales ('es', 'ja', 'fr', 'ru') fall back to English docs.
 */
function rewriteDocsLinks(html, locale) {
    if (!supportedDocsLocales.includes(locale)) {
        // For unsupported locales on docs.docmd.io, strip any locale prefix so links point to default English docs
        return html.replace(/href="https:\/\/docs\.docmd\.io\/(de|zh|es|ja|fr|ru)(\/|$)/g, 'href="https://docs.docmd.io/');
    }
    return html.replace(/href="https:\/\/docs\.docmd\.io([^"]*)"/g, (match, pathname) => {
        // Already has current locale prefix
        if (pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`) {
            return match;
        }
        // Strip any other locale prefix if present
        let cleanPath = pathname.replace(/^\/(de|zh|es|ja|fr|ru)(\/|$)/, '$2');
        cleanPath = (cleanPath === '' || cleanPath === '/') ? '' : cleanPath;
        return `href="https://docs.docmd.io/${locale}${cleanPath}"`;
    });
}

/**
 * Rewrite local site links to keep navigation localized on non-default locale pages.
 * e.g. href="/search/" -> href="/zh/search/"
 *      href="/" -> href="/zh/"
 */
function rewriteLocalLinks(html, locale) {
    if (locale === 'en') return html;
    return html
        .replace(/href="\/assistant\/" class="nav-link"/g, `href="/${locale}/assistant/" class="nav-link"`)
        .replace(/href="\/search\/" class="nav-link"/g, `href="/${locale}/search/" class="nav-link"`)
        .replace(/href="\/" class="nav-logo"/g, `href="/${locale}/" class="nav-logo"`);
}

/**
 * Extract clean page route (un-localized path) from relative file path.
 * e.g. "index.html" -> "/"
 *      "assistant/index.html" -> "/assistant/"
 *      "de/index.html" -> "/"
 *      "de/assistant/index.html" -> "/assistant/"
 *      "zh/search/index.html" -> "/search/"
 */
function getCleanPagePath(relativePath) {
    let norm = relativePath.replace(/\\/g, '/');
    const parts = norm.split('/');
    if (nonDefaultLocales.includes(parts[0])) {
        parts.shift();
        norm = parts.join('/');
    }
    if (norm === 'index.html' || norm === '404.html' || norm === '') {
        return '/';
    }
    if (norm.endsWith('/index.html')) {
        return '/' + norm.slice(0, -'index.html'.length);
    }
    return '/' + norm;
}

/**
 * Ensure language switcher links preserve current page route (e.g. href="/de/assistant/" instead of href="/de/").
 * Also dynamically sets the 'active' class for currentLocale.
 */
function fixLangSwitcherLinks(html, cleanPagePath, currentLocale) {
    return html.replace(/<a class="lang-option\b([^"]*)" href="[^"]*" data-lang="([^"]+)"/g, (match, classes, lang) => {
        let classList = classes.replace(/\bactive\b/g, '').replace(/\s+/g, ' ').trim();
        if (lang === currentLocale) {
            classList = classList ? `${classList} active` : 'active';
        }
        const classAttr = classList ? `class="lang-option ${classList}"` : 'class="lang-option"';
        const targetHref = lang === defaultLocale ? cleanPagePath : `/${lang}${cleanPagePath}`;
        return `<a ${classAttr} href="${targetHref}" data-lang="${lang}"`;
    });
}

// --- Helper to recursively find all HTML files ---
function getAllHtmlFiles(dir) {
    let results = [];
    if (!fs.existsSync(dir)) return results;
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            results = results.concat(getAllHtmlFiles(filePath));
        } else if (file.endsWith('.html')) {
            results.push(filePath);
        }
    });
    return results;
}

// Cache for loaded translation JSONs
const translationsCache = {};
function getTranslations(locale) {
    if (!translationsCache[locale]) {
        const jsonPath = path.join(__dirname, `../assets/i18n/${locale}.json`);
        if (fs.existsSync(jsonPath)) {
            translationsCache[locale] = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
        } else {
            translationsCache[locale] = {};
        }
    }
    return translationsCache[locale];
}

/**
 * Cleanly apply translations to all data-i18n and data-i18n-html elements,
 * completely replacing any duplicated or concatenated text generated by docmd build.
 */
function cleanI18nTranslations(html, locale) {
    const dict = getTranslations(locale);
    if (!dict || Object.keys(dict).length === 0) return html;

    const regex = /<([a-z0-9]+)\b([^>]*?\bdata-i18n(-html)?=["\x27]([^"\x27]+)["\x27][^>]*)>([\s\S]*?)<\/\1>/gi;

    const replaceFn = (fullMatch, tagName, attrString, isHtml, key, innerContent) => {
        if (key in dict) {
            const val = dict[key];
            return `<${tagName}${attrString}>${val}</${tagName}>`;
        }
        return fullMatch;
    };

    // Run 2 passes to ensure sibling/nested data-i18n tags are cleanly resolved
    let result = html.replace(regex, replaceFn);
    result = result.replace(regex, replaceFn);
    return result;
}

// --- Process all HTML files recursively ---
const htmlFiles = getAllHtmlFiles(siteDir);
htmlFiles.forEach(filePath => {
    const relativePath = path.relative(siteDir, filePath);
    const firstSegment = relativePath.split(path.sep)[0];
    const isLocale = nonDefaultLocales.includes(firstSegment);
    const fileLocale = isLocale ? firstSegment : defaultLocale;
    const cleanPagePath = getCleanPagePath(relativePath);

    let html = fs.readFileSync(filePath, 'utf-8');
    html = stripI18nClientScript(html);
    html = cleanI18nTranslations(html, fileLocale);
    html = fixLangSwitcherLinks(html, cleanPagePath, fileLocale);
    if (isLocale) {
        html = rewriteDocsLinks(html, fileLocale);
        html = rewriteLocalLinks(html, fileLocale);
    }
    fs.writeFileSync(filePath, html, 'utf-8');
    console.log(`[rewrite-links] ${relativePath} → stripped i18n client runtime, applied clean i18n for locale: ${fileLocale}`);
});

// --- Clean up the runtime file itself (optional, saves bytes) ---
const runtimeFile = path.join(siteDir, 'assets/js/docmd-i18n-strings.js');
if (fs.existsSync(runtimeFile)) {
    fs.unlinkSync(runtimeFile);
    console.log(`[rewrite-links] Deleted orphaned assets/js/docmd-i18n-strings.js`);
}