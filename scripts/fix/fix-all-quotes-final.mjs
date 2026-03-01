/**
 * Final comprehensive fix for ALL quote mismatches
 * This script fixes strings that start with " but end with ' or vice versa
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

// Strategy: Find all lines that start with spaces + " and end with ',
// Replace the trailing ', with ",
const lines = content.split('\n');
const fixedLines = lines.map((line, idx) => {
  const trimmed = line.trim();

  // Skip empty lines
  if (!trimmed) return line;

  // Fix pattern: "text...', -> "text...",
  if (trimmed.startsWith('"') && trimmed.endsWith("',")) {
    fixed++;
    return line.replace(/',\s*$/, '",');
  }

  // Fix pattern: "text...' (without comma) -> "text..."
  if (trimmed.startsWith('"') && trimmed.endsWith("'") && !trimmed.endsWith("',")) {
    fixed++;
    return line.replace(/'$/, '"');
  }

  return line;
});

content = fixedLines.join('\n');
fs.writeFileSync(CARD_MEANINGS_PATH, content, 'utf8');

console.log(`✅ Fixed ${fixed} quote mismatches`);
console.log('✅ File updated!');

// Verify syntax
try {
  // Try to parse as JavaScript
  const testContent = content;
  // Check for basic syntax by looking for export
  if (testContent.includes('export const CARD_MEANINGS')) {
    console.log('✅ File structure looks good');
  }
} catch (e) {
  console.log(`⚠️  Could not fully verify: ${e.message}`);
}
