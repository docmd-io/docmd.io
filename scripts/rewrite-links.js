const fs = require('fs');
const path = require('path');
const config = require('../docmd.config.js');

const siteDir = path.join(__dirname, '../site');
const locales = config.i18n.locales.map(l => l.id).filter(id => id !== config.i18n.default);

// Process localized directories
locales.forEach(locale => {
    const filePath = path.join(siteDir, locale, 'index.html');
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf-8');

        // Automatically inject the /locale/ prefix into docs.docmd.io URLs
        content = content.replace(/href="https:\/\/docs\.docmd\.io([^"]*)"/g, (match, pathname) => {
            if (pathname === '' || pathname === '/') {
                return `href="https://docs.docmd.io/${locale}/"`;
            } else if (pathname.startsWith(`/${locale}/`)) {
                return match;
            } else {
                return `href="https://docs.docmd.io/${locale}${pathname}"`;
            }
        });
        
        // Strip the auto-injected client script to resolve the 404 error
        content = content.replace(/<script src="\/docmd-i18n-strings\.js"><\/script>/g, '');

        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(`[rewrite-links] Rewrote docs.docmd.io links for locale: ${locale}`);
    }
});

// Process default directory to remove the 404 client-script
const defaultFilePath = path.join(siteDir, 'index.html');
if (fs.existsSync(defaultFilePath)) {
    let content = fs.readFileSync(defaultFilePath, 'utf-8');
    content = content.replace(/<script src="\/docmd-i18n-strings\.js"><\/script>/g, '');
    fs.writeFileSync(defaultFilePath, content, 'utf-8');
    console.log(`[rewrite-links] Removed docmd-i18n-strings.js from default locale`);
}