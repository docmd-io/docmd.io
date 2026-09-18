#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const I18N_DIR = path.join(ROOT, 'assets', 'i18n');
const DOCS_DIR = path.join(ROOT, 'docs');

const LANGUAGES = ['en', 'de', 'es', 'fr', 'ja', 'ru', 'zh'];

// 1. Collect all keys used in docs (*.md)
const usedKeys = new Set();
const keySources = new Map();

function scanFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const regex = /data-i18n(?:-html)?=["']([^"']+)["']/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const key = match[1].trim();
    usedKeys.add(key);
    if (!keySources.has(key)) keySources.set(key, []);
    keySources.get(key).push(path.relative(ROOT, filePath));
  }
}

const docFiles = fs.readdirSync(DOCS_DIR).filter(f => f.endsWith('.md'));
for (const f of docFiles) {
  scanFile(path.join(DOCS_DIR, f));
}

console.log(`\n🔍 Found ${usedKeys.size} distinct i18n keys referenced across ${docFiles.length} documentation pages.`);

// 2. Load all language dictionaries
const dicts = {};
for (const lang of LANGUAGES) {
  const p = path.join(I18N_DIR, `${lang}.json`);
  if (!fs.existsSync(p)) {
    console.error(`❌ Missing dictionary file: ${p}`);
    process.exit(1);
  }
  dicts[lang] = JSON.parse(fs.readFileSync(p, 'utf-8'));
}

// 3. Verify used keys against en.json
let missingInEn = [];
for (const key of usedKeys) {
  if (!(key in dicts.en)) {
    missingInEn.push(key);
  }
}

if (missingInEn.length > 0) {
  console.error(`\n❌ ${missingInEn.length} keys used in templates are missing from en.json:`);
  missingInEn.forEach(k => console.error(`  - ${k} (used in: ${keySources.get(k).join(', ')})`));
} else {
  console.log(`✅ All ${usedKeys.size} keys referenced in templates exist in en.json.`);
}

// 4. Verify all languages against en.json keys
const enKeys = Object.keys(dicts.en);
console.log(`\n📊 en.json contains ${enKeys.length} total keys.`);

let totalMissing = 0;
const missingByLang = {};
for (const lang of LANGUAGES) {
  if (lang === 'en') continue;
  const missing = [];
  const empty = [];
  for (const k of enKeys) {
    if (!(k in dicts[lang])) {
      missing.push(k);
    } else if (typeof dicts[lang][k] !== 'string' || dicts[lang][k].trim() === '') {
      empty.push(k);
    }
  }

  if (missing.length > 0 || empty.length > 0) {
    console.warn(`⚠️  [${lang.toUpperCase()}] Missing ${missing.length} keys, Empty ${empty.length} keys.`);
    missingByLang[lang] = missing;
    totalMissing += missing.length + empty.length;
  } else {
    console.log(`✅ [${lang.toUpperCase()}] 100% key parity with en.json (${Object.keys(dicts[lang]).length} keys).`);
  }
}

if (totalMissing === 0 && missingInEn.length === 0) {
  console.log(`\n🎉 Full i18n key parity confirmed across all ${LANGUAGES.length} languages!\n`);
} else {
  console.log(`\n⚠️  Total missing/empty keys across foreign locales: ${totalMissing}`);
}
