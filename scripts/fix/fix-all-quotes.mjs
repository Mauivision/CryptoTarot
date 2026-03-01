/**
 * Comprehensive fix for all quote mismatches in card-meanings.js
 * Fixes strings that start with " but end with ' or vice versa
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CARD_MEANINGS_PATH = path.join(__dirname, '..', 'data', 'card-meanings.js');

console.log('🔧 Comprehensive quote fix for card-meanings.js...\n');

let content = fs.readFileSync(CARD_MEANINGS_PATH, 'utf8');
let fixed = 0;

// Fix strings that start with " but end with ',
// Pattern: "text...',
const pattern1 = /("(?:[^"\\]|\\.)*)',/g;
content = content.replace(pattern1, match => {
  fixed++;
  return match.slice(0, -2) + '",';
});

// Fix strings that start with ' but end with ",
// Pattern: 'text...",
const pattern2 = /('(?:[^'\\]|\\.)*)",/g;
content = content.replace(pattern2, match => {
  fixed++;
  return match.slice(0, -2) + "',";
});

// Fix strings that start with " but end with ' (without comma)
const pattern3 = /("(?:[^"\\]|\\.)*)'$/gm;
content = content.replace(pattern3, match => {
  fixed++;
  return match.slice(0, -1) + '"';
});

// Fix strings that start with ' but end with " (without comma)
const pattern4 = /('(?:[^'\\]|\\.)*)"$/gm;
content = content.replace(pattern4, match => {
  fixed++;
  return match.slice(0, -1) + "'";
});

fs.writeFileSync(CARD_MEANINGS_PATH, content, 'utf8');

console.log(`✅ Fixed ${fixed} quote mismatches`);
console.log('✅ File updated successfully!');
console.log('\n🔍 Verifying syntax...');

// Try to import to verify
try {
  const module = await import(`file://${CARD_MEANINGS_PATH.replace(/\\/g, '/')}`);
  console.log(`✅ Syntax OK! Loaded ${Object.keys(module.CARD_MEANINGS).length} cards`);
} catch (e) {
  console.log(`❌ Still has errors: ${e.message.split('\n')[0]}`);
  console.log('   You may need to manually fix remaining issues.');
}
