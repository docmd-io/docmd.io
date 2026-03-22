const fs = require('fs');
const https = require('https');
const path = require('path');

const USERNAME = 'mgks';
const TOKEN = process.env.SPONSORS_TOKEN || process.env.GITHUB_TOKEN;

const outPath = path.join(__dirname, '../assets/sponsors.json');

// If no token is provided (like in local dev), just write an empty array to not break UI
if (!TOKEN) {
  console.log('Skipping sponsors fetch: No SPONSORS_TOKEN or GITHUB_TOKEN environment variable provided.');
  if (fs.existsSync(path.dirname(outPath))) {
    fs.writeFileSync(outPath, '[]');
  }
  process.exit(0);
}

const query = JSON.stringify({
  query: `
    {
      user(login: "${USERNAME}") {
        sponsorshipsAsMaintainer(first: 100) {
          nodes {
            sponsorEntity {
              ... on User { login: login avatarUrl: avatarUrl url: url }
              ... on Organization { login: login avatarUrl: avatarUrl url: url }
            }
          }
        }
      }
    }
  `
});

const req = https.request({
  hostname: 'api.github.com',
  path: '/graphql',
  method: 'POST',
  headers: {
    'User-Agent': 'docmd-sponsors-fetcher',
    'Authorization': `bearer ${TOKEN}`,
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(query)
  }
}, (res) => {
  let data = '';
  res.on('data', d => data += d);
  res.on('end', () => {
    try {
      const parsed = JSON.parse(data);
      if (parsed.errors) {
        throw new Error(parsed.errors[0].message);
      }
      
      const sponsors = parsed.data.user.sponsorshipsAsMaintainer.nodes.map(n => n.sponsorEntity);
      
      // Ensure directory exists
      const dir = path.dirname(outPath);
      if (!fs.existsSync(dir)){
          fs.mkdirSync(dir, { recursive: true });
      }

      fs.writeFileSync(outPath, JSON.stringify(sponsors, null, 2));
      console.log(`✅ Successfully fetched ${sponsors.length} sponsors for ${USERNAME}.`);
    } catch(e) {
      console.error('❌ Failed parsing sponsors:', e.message);
      if (fs.existsSync(path.dirname(outPath))) {
        fs.writeFileSync(outPath, '[]'); // Fallback
      }
    }
  });
});

req.on('error', e => {
  console.error('❌ Request failed:', e);
  if (fs.existsSync(path.dirname(outPath))) {
        fs.writeFileSync(outPath, '[]'); // Fallback
  }
});

req.write(query);
req.end();
