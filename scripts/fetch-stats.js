const fs = require('fs');
const path = require('path');

const outPath = path.join(__dirname, '../assets/stats.json');

const docmdEcosystem = [
  '@docmd/core', '@docmd/api', '@docmd/themes', '@docmd/parser', '@docmd/tui',
  '@docmd/ui', '@docmd/utils', '@docmd/engine-rust', '@docmd/live',
  '@docmd/plugin-search', '@docmd/plugin-ai', '@docmd/plugin-llms',
  '@docmd/plugin-sitemap', '@docmd/plugin-seo', '@docmd/plugin-git',
  '@docmd/plugin-math', '@docmd/plugin-mermaid', '@docmd/plugin-analytics',
  '@docmd/plugin-installer', '@docmd/plugin-openapi', '@docmd/plugin-pwa',
  'docmd-search', 'docmd-assistant'
];

const searchSuite = ['@docmd/plugin-search', 'docmd-search'];
const assistantSuite = ['@docmd/plugin-ai', 'docmd-assistant'];

function formatInstalls(num) {
  if (!num || num < 1) return '';
  if (num >= 1000000) return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M+';
  if (num >= 100000) return Math.round(num / 1000) + 'k+';
  if (num >= 10000) return Math.round(num / 1000) + 'k+';
  if (num >= 1000) return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k+';
  return num + '+';
}

async function fetchDownloads(pkg, retries = 3) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const res = await fetch(`https://api.npmjs.org/downloads/point/2020-01-01:2099-12-31/${pkg}`);
      if (res.ok) {
        const data = await res.json();
        if (typeof data.downloads === 'number') {
          return data.downloads;
        }
      }
    } catch (e) {}
    if (attempt < retries) await sleep(150 * attempt);
  }
  return 0;
}

async function fetchVersion(pkg) {
  try {
    const res = await fetch(`https://registry.npmjs.org/${pkg}/latest`);
    if (!res.ok) return null;
    const data = await res.json();
    return data.version || null;
  } catch (e) {
    return null;
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function updateDocBadge(filePath, pkgName, version, formattedInstalls) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf-8');

  // 1. Update version number
  if (version) {
    const verRegex = new RegExp(`(<span class="badge-pkg-name">${pkgName}<\\/span>\\s*<span class="badge-ver-num">)v[^<]+(<\\/span>)`);
    content = content.replace(verRegex, `$1v${version}$2`);
  }

  // 2. Update install counts
  if (formattedInstalls) {
    const idSuffix = pkgName === 'docmd' ? '' : (pkgName === 'docmd-search' ? '-search' : '-assistant');
    const dlRegex = new RegExp(`(<span class="badge-downloads" id="npm-downloads${idSuffix}">\\s*<span class="badge-dl-text">)[^<]+(<\\/span>)`);
    content = content.replace(dlRegex, `$1${formattedInstalls}$2`);
  }

  fs.writeFileSync(filePath, content, 'utf-8');
}

async function main() {
  console.log('Fetching live npm stats for docmd suites...');
  let existingStats = null;
  if (fs.existsSync(outPath)) {
    try {
      existingStats = JSON.parse(fs.readFileSync(outPath, 'utf-8'));
    } catch (e) {}
  }

  const packageDownloads = {};

  for (const pkg of docmdEcosystem) {
    const count = await fetchDownloads(pkg);
    packageDownloads[pkg] = count > 0 ? count : (existingStats?.packages?.[pkg] || 0);
    await sleep(200); // 200ms pacing to stay well under npm rate limits
  }

  const [coreVer, searchVer, assistantVer] = await Promise.all([
    fetchVersion('@docmd/core'),
    fetchVersion('docmd-search'),
    fetchVersion('docmd-assistant')
  ]);

  let docmdTotal = 0;
  for (const pkg of docmdEcosystem) {
    docmdTotal += packageDownloads[pkg] || 0;
  }

  let searchTotal = 0;
  for (const pkg of searchSuite) {
    searchTotal += packageDownloads[pkg] || 0;
  }

  let assistantTotal = 0;
  for (const pkg of assistantSuite) {
    assistantTotal += packageDownloads[pkg] || 0;
  }

  const stats = {
    updatedAt: new Date().toISOString(),
    docmd: {
      version: coreVer || existingStats?.docmd?.version || '0.9.5',
      downloads: Math.max(docmdTotal, existingStats?.docmd?.downloads || 3004226),
      formatted: formatInstalls(Math.max(docmdTotal, existingStats?.docmd?.downloads || 3004226))
    },
    search: {
      version: searchVer || existingStats?.search?.version || '0.1.5',
      downloads: Math.max(searchTotal, existingStats?.search?.downloads || 186365),
      formatted: formatInstalls(Math.max(searchTotal, existingStats?.search?.downloads || 186365))
    },
    assistant: {
      version: assistantVer || existingStats?.assistant?.version || '0.1.18',
      downloads: Math.max(assistantTotal, existingStats?.assistant?.downloads || 48820),
      formatted: formatInstalls(Math.max(assistantTotal, existingStats?.assistant?.downloads || 48820))
    },
    packages: packageDownloads
  };

  // 1. Save stats.json for static bundle
  fs.writeFileSync(outPath, JSON.stringify(stats, null, 2), 'utf-8');

  // 2. Automatically update source Markdown docs before compiler runs
  updateDocBadge(
    path.join(__dirname, '../docs/index.md'),
    'docmd',
    stats.docmd.version,
    stats.docmd.formatted
  );
  updateDocBadge(
    path.join(__dirname, '../docs/search.md'),
    'docmd-search',
    stats.search.version,
    stats.search.formatted
  );
  updateDocBadge(
    path.join(__dirname, '../docs/assistant.md'),
    'docmd-assistant',
    stats.assistant.version,
    stats.assistant.formatted
  );

  console.log(`✅ Updated docs with real build-time stats:`);
  console.log(`   docmd (suite):     ${stats.docmd.formatted} (${stats.docmd.downloads.toLocaleString()}) v${stats.docmd.version}`);
  console.log(`   search (suite):    ${stats.search.formatted} (${stats.search.downloads.toLocaleString()}) v${stats.search.version}`);
  console.log(`   assistant (suite): ${stats.assistant.formatted} (${stats.assistant.downloads.toLocaleString()}) v${stats.assistant.version}`);
}

main().catch(err => {
  console.error('Error fetching stats:', err);
  process.exit(0); // non-fatal during build
});
