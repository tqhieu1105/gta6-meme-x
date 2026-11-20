import { writeFileSync } from 'node:fs';

const postUrl = process.argv[2];
const validPostUrl = /^https:\/\/(?:x|twitter)\.com\/[A-Za-z0-9_]{1,15}\/status\/\d+$/;

if (!postUrl || !validPostUrl.test(postUrl)) {
  console.error('Usage: node scripts/set-post-url.mjs https://x.com/<handle>/status/<id>');
  process.exit(1);
}

writeFileSync(new URL('../POST.json', import.meta.url), `${JSON.stringify({ url: postUrl })}\n`);
