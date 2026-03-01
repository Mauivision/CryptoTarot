/**
 * Fix mismatched quotes in card-meanings.js
 * Fixes strings that start with " but end with ',
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CARD_MEANINGS_PATH = path.join(__dirname, '..', 'data', 'card-meanings.js');

console.log('🔧 Fixing mismatched quotes in card-meanings.js...\n');

let content = fs.readFileSync(CARD_MEANINGS_PATH, 'utf8');

// Fix strings that start with " but end with ',
// Pattern: "text...',
const pattern = /("(?:[^"\\]|\\.)*)',/g;
let fixed = 0;

content = content.replace(pattern, match => {
  // Replace the trailing ', with ",
  const fixed = match.slice(0, -2) + '",';
  return fixed;
});

// Also fix any remaining ', at end of lines that should be ",
content = content.replace(/("(?:[^"\\]|\\.)*)',\n/g, match => {
  fixed++;
  return match.slice(0, -2) + '",\n';
});

fs.writeFileSync(CARD_MEANINGS_PATH, content, 'utf8');

console.log(`✅ Fixed ${fixed} mismatched quotes`);
console.log('✅ File updated successfully!');
