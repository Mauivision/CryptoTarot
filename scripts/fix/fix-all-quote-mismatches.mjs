/**
 * Comprehensive fix for ALL quote mismatches
 * Fixes strings that start with " but end with ' or vice versa
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CARD_MEANINGS_PATH = path.join(__dirname, '..', 'data', 'card-meanings.js');

console.log('🔧 Comprehensive quote fix for ALL mismatches...\n');

let content = fs.readFileSync(CARD_MEANINGS_PATH, 'utf8');
let fixed = 0;

// Fix all patterns: "text...', -> "text...",
content = content.replace(/("(?:[^"\\]|\\.)*)',/g, match => {
  fixed++;
  return match.slice(0, -2) + '",';
});

// Fix all patterns: 'text...", -> 'text...',
content = content.replace(/('(?:[^'\\]|\\.)*)",/g, match => {
  fixed++;
  return match.slice(0, -2) + "',";
});

// Fix all patterns: "text...' (without comma) -> "text..."
content = content.replace(/("(?:[^"\\]|\\.)*)'$/gm, match => {
  fixed++;
  return match.slice(0, -1) + '"';
});

// Fix all patterns: 'text..." (without comma) -> 'text...'
content = content.replace(/('(?:[^'\\]|\\.)*)"$/gm, match => {
  fixed++;
  return match.slice(0, -1) + "'";
});

fs.writeFileSync(CARD_MEANINGS_PATH, content, 'utf8');

console.log(`✅ Fixed ${fixed} quote mismatches`);
console.log('✅ File updated!');

// Try to import to verify
try {
  const module = await import(`file://${CARD_MEANINGS_PATH.replace(/\\/g, '/')}`);
  console.log(
    `✅✅✅ SUCCESS! Syntax OK! Loaded ${Object.keys(module.CARD_MEANINGS).length} cards`
  );
} catch (e) {
  console.log(`❌ Still has errors: ${e.message.split('\n')[0]}`);
}
