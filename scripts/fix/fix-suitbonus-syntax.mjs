/**
 * Fix suitBonus object syntax - convert string keys to proper object keys
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CARD_MEANINGS_PATH = path.join(__dirname, '..', 'data', 'card-meanings.js');

console.log('🔧 Fixing suitBonus syntax...\n');

let content = fs.readFileSync(CARD_MEANINGS_PATH, 'utf8');
let fixed = 0;

// Fix pattern: "rallyBonus: 'value", -> rallyBonus: 'value',
// Fix pattern: "chainBonus: 'value", -> chainBonus: 'value',
// Fix pattern: "battleBonus: 'value", -> battleBonus: 'value',
content = content.replace(/"rallyBonus: '([^']+)",/g, (match, value) => {
  fixed++;
  return `rallyBonus: '${value}',`;
});

content = content.replace(/"chainBonus: '([^']+)",/g, (match, value) => {
  fixed++;
  return `chainBonus: '${value}',`;
});

content = content.replace(/"battleBonus: '([^']+)",/g, (match, value) => {
  fixed++;
  return `battleBonus: '${value}',`;
});

// Fix aceEffect quote mismatches
content = content.replace(/aceEffect: "([^"]*)'$/gm, (match, value) => {
  fixed++;
  return `aceEffect: "${value}"`;
});

fs.writeFileSync(CARD_MEANINGS_PATH, content, 'utf8');

console.log(`✅ Fixed ${fixed} syntax issues`);
console.log('✅ File updated!');
