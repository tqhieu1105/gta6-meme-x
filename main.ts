import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const botDirectory = process.env.MAKEFUN_BOT_DIR || '/bot';
const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const postFile = join(botDirectory, 'POST.json');
const outputFile = join(outputDirectory, 'POST.json');
const postUrlPattern = /^https:\/\/(?:x|twitter)\.com\/[A-Za-z0-9_]{1,15}\/status\/\d+$/;

try {
  const postBytes = readFileSync(postFile);
  const post = JSON.parse(postBytes.toString('utf8'));

  if (post === null || typeof post !== 'object' || Array.isArray(post)) {
    throw new Error('POST.json must contain a JSON object.');
  }
  if (typeof post.url !== 'string' || !postUrlPattern.test(post.url)) {
    throw new Error('POST.json url must be an X status URL with a numeric post ID.');
  }

  mkdirSync(outputDirectory, { recursive: true });

  // Keep the grader payload identical to the repository file, including its whitespace and final newline.
  writeFileSync(outputFile, postBytes);
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`Cannot prepare POST.json: ${message}`);
  process.exitCode = 1;
}
