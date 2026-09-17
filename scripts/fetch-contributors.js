const fs = require('fs');
const https = require('https');
const path = require('path');

const REPO = 'docmd-io/docmd';
const TOKEN = process.env.SPONSORS_TOKEN || process.env.GITHUB_TOKEN;
const outPath = path.join(__dirname, '../assets/contributors.json');

const headers = {
  'User-Agent': 'docmd-contributors-fetcher',
  'Accept': 'application/vnd.github.v3+json'
};

if (TOKEN) {
  headers['Authorization'] = `token ${TOKEN}`;
}

const req = https.request({
  hostname: 'api.github.com',
  path: `/repos/${REPO}/contributors?per_page=100`,
  method: 'GET',
  headers: headers
}, (res) => {
  let data = '';
  res.on('data', d => data += d);
  res.on('end', () => {
    try {
      if (res.statusCode !== 200) {
        throw new Error(`GitHub API returned status ${res.statusCode}: ${data}`);
      }
      const parsed = JSON.parse(data);
      if (!Array.isArray(parsed)) {
        throw new Error('Expected array of contributors');
      }

      // Filter out bots like dependabot[bot]
      const contributors = parsed
        .filter(c => c.type !== 'Bot' && !c.login.includes('[bot]'))
        .map(c => ({
          login: c.login,
          avatarUrl: c.avatar_url,
          url: c.html_url,
          contributions: c.contributions
        }));

      const dir = path.dirname(outPath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      fs.writeFileSync(outPath, JSON.stringify(contributors, null, 2));
      console.log(`✅ Successfully fetched ${contributors.length} contributors for ${REPO}.`);
    } catch (e) {
      console.error('❌ Failed fetching contributors:', e.message);
      if (!fs.existsSync(outPath) && fs.existsSync(path.dirname(outPath))) {
        fs.writeFileSync(outPath, '[]');
      }
    }
  });
});

req.on('error', e => {
  console.error('❌ Request failed:', e);
  if (!fs.existsSync(outPath) && fs.existsSync(path.dirname(outPath))) {
    fs.writeFileSync(outPath, '[]');
  }
});

req.end();
