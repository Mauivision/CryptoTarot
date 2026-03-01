/**
 * Final comprehensive fix - finds ALL quote mismatches and fixes them
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CARD_MEANINGS_PATH = path.join(__dirname, '..', 'data', 'card-meanings.js');

console.log('🔧 Final comprehensive quote fix...\n');

let content = fs.readFileSync(CARD_MEANINGS_PATH, 'utf8');
let fixed = 0;

// Find all lines that start with " but end with ',
const lines = content.split('\n');
const fixedLines = lines.map((line, idx) => {
  // Check if line starts with spaces + " and ends with ',
  if (/^\s+"/.test(line) && line.trim().endsWith("',")) {
    fixed++;
    return line.replace(/',$/, '",');
  }
  // Check if line starts with spaces + " and ends with ' (without comma)
  if (/^\s+"/.test(line) && line.trim().endsWith("'") && !line.trim().endsWith("',")) {
    fixed++;
    return line.replace(/'$/, '"');
  }
  return line;
});

content = fixedLines.join('\n');
fs.writeFileSync(CARD_MEANINGS_PATH, content, 'utf8');

console.log(`✅ Fixed ${fixed} quote mismatches`);
console.log('✅ File updated!');
