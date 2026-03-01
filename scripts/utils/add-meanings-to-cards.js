// Script to add card meanings to existing SVG card images
// Usage: node scripts/add-meanings-to-cards.js

const fs = require('fs');
const path = require('path');

const cardsDir = path.join(__dirname, '..', 'assets', 'cards');
const meaningsFile = path.join(__dirname, '..', 'data', 'card-meanings.js');

let CARD_MEANINGS = {};

function loadCardMeanings() {
  try {
    const fileContent = fs.readFileSync(meaningsFile, 'utf8');
    const exportMarker = 'export const CARD_MEANINGS = ';
    const startIdx = fileContent.indexOf(exportMarker);
    if (startIdx !== -1) {
      const objStart = fileContent.indexOf('{', startIdx);
      let braceCount = 0;
      let inString = false;
      let stringChar = '';
      let endIdx = objStart;
      for (let i = objStart; i < fileContent.length; i++) {
        const ch = fileContent[i];
        const prev = fileContent[i - 1];
        if (!inString && (ch === '"' || ch === "'")) {
          inString = true;
          stringChar = ch;
        } else if (inString && ch === stringChar && prev !== '\\') {
          inString = false;
        } else if (!inString) {
          if (ch === '{') braceCount++;
          if (ch === '}') {
            braceCount--;
            if (braceCount === 0) {
              endIdx = i + 1;
              break;
            }
          }
        }
      }
      const objCode = fileContent.substring(objStart, endIdx);
      CARD_MEANINGS = eval('(' + objCode + ')');
    }
  } catch (error) {
    console.warn('Could not load card meanings from data/card-meanings.js:', error.message);
  }
}

loadCardMeanings();

if (Object.keys(CARD_MEANINGS).length === 0) {
  console.error('No card meanings found. Please ensure data/card-meanings.js is available.');
  process.exit(1);
}

// Helper function to extract card name from filename
function getCardNameFromFilename(filename) {
  // Remove extension and path
  const base = path.basename(filename, '.svg');

  // Handle major arcana
  if (base.startsWith('major-')) {
    const name = base.replace('major-', '').replace(/-/g, ' ');
    // Convert to title case and handle special cases
    const words = name.split(' ');
    const titleCase = words.map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

    // Handle special name mappings
    const nameMap = {
      'The Hodler': 'The HODLer',
      'The Miner': 'The Miner',
      'The Oracle': 'The Oracle',
      'The Empress Node': 'The Empress Node',
      'The Emperor Chain': 'The Emperor Chain',
      'The Hierophant Whale': 'The Hierophant Whale',
      'The Lovers Fork': 'The Lovers Fork',
      'The Chariot Pump': 'The Chariot Pump',
      'Strength Hodl': 'Strength HODL',
      'The Hermit Dev': 'The Hermit Dev',
      'Wheel Of Fortune Cycle': 'Wheel of Fortune Cycle',
      'Justice Ledger': 'Justice Ledger',
      'The Hanged Man Flip': 'The Hanged Man Flip',
      'Death Rug': 'Death Rug',
      'Temperance Mix': 'Temperance Mix',
      'The Devil Scam': 'The Devil Scam',
      'The Tower Hack': 'The Tower Hack',
      'The Star Airdrop': 'The Star Airdrop',
      'The Moon Illusion': 'The Moon Illusion',
      'The Sun Bull': 'The Sun Bull',
      'Judgment Halving': 'Judgment Halving',
      'The World Ecosystem': 'The World Ecosystem',
    };

    return nameMap[titleCase] || titleCase;
  }

  // Handle minor arcana
  if (base.startsWith('minor-')) {
    const name = base.replace('minor-', '').replace(/-of-/g, ' of ').replace(/-/g, ' ');
    const words = name.split(' ');
    // Capitalize first letter of each word, but keep "of" lowercase
    const titleCase = words
      .map((w, i) => {
        if (w.toLowerCase() === 'of' && i > 0) return 'of';
        return w.charAt(0).toUpperCase() + w.slice(1);
      })
      .join(' ');
    return titleCase;
  }

  return null;
}

// Function to truncate text to fit in SVG
function truncateText(text, maxLength = 50) {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength - 3) + '...';
}

// Function to wrap text for SVG (split into multiple lines if needed)
function formatLine(prefix, text, maxLength = 45) {
  if (!text) return '';
  const raw = prefix ? `${prefix}${text}` : text;
  if (raw.length <= maxLength) return raw;
  return raw.slice(0, maxLength - 1).trimEnd() + '…';
}

function buildBottomLines(meta) {
  if (!meta) return [];
  const lines = [];
  if (meta.cosmicRuler) {
    const summary = meta.cosmicSummary ? meta.cosmicSummary.split(/[,.;]/)[0].trim() : '';
    const cosmicText = summary ? `${meta.cosmicRuler} – ${summary}` : meta.cosmicRuler;
    lines.push(formatLine('Cosmic: ', cosmicText));
  }
  if (meta.cryptoFlavor) {
    lines.push(formatLine('Crypto: ', meta.cryptoFlavor));
  }
  if (lines.length === 0 && meta.upright) {
    lines.push(formatLine('', meta.upright));
  } else if (lines.length === 1 && meta.upright) {
    lines.push(formatLine('', meta.upright));
  }
  return lines.slice(0, 2);
}

// Function to update SVG with meaning
function updateSVGWithMeaning(svgContent, meta, cardType) {
  // Find the bottom text box section
  // Current structure has:
  // <text x="350" y="890" ...>Major Arcana</text>
  // <text x="350" y="940" ...>Crypto Tarot</text>

  // We'll replace the bottom section to include meaning
  // Adjust the bottom box to be taller to fit meaning

  const lines = buildBottomLines(meta);
  const lineOne = lines[0] || '';
  const lineTwo = lines[1] || '';

  // Build new bottom section
  let newBottomSection = '';

  if (cardType === 'major') {
    // For major: Show "Major Arcana" on first line, meaning on second, "Crypto Tarot" on third
    newBottomSection = `
  <rect x="40" y="800" width="620" height="160" rx="14" fill="#0f1520" stroke="#8b5cf6" stroke-width="1.5"/>
  <text x="350" y="830" text-anchor="middle" font-family="Inter,Segoe UI,Arial" font-size="18" fill="#9bb0c8">Major Arcana</text>
  <text x="350" y="860" text-anchor="middle" font-family="Inter,Segoe UI,Arial" font-size="14" fill="#00f5a0">${lineOne}</text>
  ${lineTwo ? `<text x="350" y="880" text-anchor="middle" font-family="Inter,Segoe UI,Arial" font-size="14" fill="#00f5a0">${lineTwo}</text>` : ''}
  <text x="350" y="940" text-anchor="middle" font-family="Inter,Segoe UI,Arial" font-size="14" fill="#5f7494">Crypto Tarot</text>`;
  } else {
    // For minor: Show suit name, meaning, then "Crypto Tarot"
    const suitName = cardType; // cardType will be the suit name
    newBottomSection = `
  <rect x="40" y="800" width="620" height="160" rx="14" fill="#0f1520" stroke="${getSuitBorderColor(suitName)}" stroke-width="1.5"/>
  <text x="350" y="830" text-anchor="middle" font-family="Inter,Segoe UI,Arial" font-size="18" fill="#9bb0c8">${suitName}</text>
  <text x="350" y="860" text-anchor="middle" font-family="Inter,Segoe UI,Arial" font-size="14" fill="${getSuitColor(suitName)}">${lineOne}</text>
  ${lineTwo ? `<text x="350" y="880" text-anchor="middle" font-family="Inter,Segoe UI,Arial" font-size="14" fill="${getSuitColor(suitName)}">${lineTwo}</text>` : ''}
  <text x="350" y="940" text-anchor="middle" font-family="Inter,Segoe UI,Arial" font-size="14" fill="#5f7494">Crypto Tarot</text>`;
  }

  // Replace the old bottom section
  const oldBottomPattern = /<rect x="40" y="820"[^>]*>[\s\S]*?<\/text>\s*<\/svg>/;
  const newContent = svgContent.replace(oldBottomPattern, newBottomSection + '\n</svg>');

  return newContent;
}

function getSuitColor(suitName) {
  const colors = {
    Tokens: '#00f5a0',
    Liquidity: '#3ec0ff',
    Security: '#ff3864',
    Nodes: '#ff3cac',
  };
  return colors[suitName] || '#9bb0c8';
}

function getSuitBorderColor(suitName) {
  const colors = {
    Tokens: '#00f5a0',
    Liquidity: '#3ec0ff',
    Security: '#ff3864',
    Nodes: '#ff3cac',
  };
  return colors[suitName] || '#203047';
}

function getCardTypeFromFilename(filename) {
  const base = path.basename(filename, '.svg');
  if (base.startsWith('major-')) return 'major';

  if (base.includes('tokens')) return 'Tokens';
  if (base.includes('liquidity')) return 'Liquidity';
  if (base.includes('security')) return 'Security';
  if (base.includes('nodes')) return 'Nodes';

  return 'major';
}

// Main function
function main() {
  console.log('Adding card meanings to SVG files...\n');

  const files = fs.readdirSync(cardsDir).filter(f => f.endsWith('.svg'));
  let updated = 0;
  let skipped = 0;
  let errors = 0;

  for (const file of files) {
    const filePath = path.join(cardsDir, file);
    const cardName = getCardNameFromFilename(file);
    const cardType = getCardTypeFromFilename(file);

    if (!cardName) {
      console.log(`⚠️  Could not parse card name from: ${file}`);
      errors++;
      continue;
    }

    const meta = CARD_MEANINGS[cardName];

    if (!meta) {
      console.log(`⚠️  No meaning found for: ${cardName} (${file})`);
      skipped++;
      continue;
    }

    try {
      let svgContent = fs.readFileSync(filePath, 'utf8');

      // Check if already updated (has meaning text)
      if (
        svgContent.includes(
          'text-anchor="middle" font-family="Inter,Segoe UI,Arial" font-size="14" fill="#00f5a0"'
        ) ||
        svgContent.includes(
          'text-anchor="middle" font-family="Inter,Segoe UI,Arial" font-size="14" fill="#3ec0ff"'
        )
      ) {
        console.log(`⏭  Already updated: ${cardName}`);
        continue;
      }

      const updatedSVG = updateSVGWithMeaning(svgContent, meta, cardType);
      fs.writeFileSync(filePath, updatedSVG, 'utf8');
      console.log(`✓ Updated: ${cardName}`);
      updated++;
    } catch (error) {
      console.error(`✗ Error updating ${file}:`, error.message);
      errors++;
    }
  }

  console.log(`\n${'='.repeat(60)}`);
  console.log(`Summary:`);
  console.log(`  Updated: ${updated} cards`);
  console.log(`  Skipped: ${skipped} cards`);
  console.log(`  Errors: ${errors} cards`);
  console.log(`  Total: ${files.length} files`);
  console.log(`${'='.repeat(60)}`);
}

main();
