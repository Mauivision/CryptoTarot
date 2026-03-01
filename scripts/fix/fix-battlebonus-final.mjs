/**
 * Fix remaining battleBonus syntax issues
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CARD_MEANINGS_PATH = path.join(__dirname, '..', 'data', 'card-meanings.js');

console.log('🔧 Fixing battleBonus syntax...\n');

let content = fs.readFileSync(CARD_MEANINGS_PATH, 'utf8');
let fixed = 0;

// Fix pattern: "battleBonus: 'value" -> battleBonus: 'value',
content = content.replace(/"battleBonus: '([^']+)"/g, (match, value) => {
  fixed++;
  return `battleBonus: '${value}'`;
});

fs.writeFileSync(CARD_MEANINGS_PATH, content, 'utf8');

console.log(`✅ Fixed ${fixed} battleBonus syntax issues`);
console.log('✅ File updated!');
