// Add detailed descriptions to cards and make text light colored
// Usage: node scripts/add-detailed-descriptions.js

const fs = require('fs');
const path = require('path');

const cardsDir = path.join(__dirname, '..', 'assets', 'cards');
const meaningsFile = path.join(__dirname, '..', 'data', 'card-meanings.js');

// Load card meanings from data/card-meanings.js (authoritative source)
let CARD_MEANINGS = {};

try {
  const fileContent = fs.readFileSync(meaningsFile, 'utf8');
  const exportMarker = 'export const CARD_MEANINGS = ';
  const startIdx = fileContent.indexOf(exportMarker);
  if (startIdx !== -1) {
    // Find the start of the object
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
    // Evaluate into CARD_MEANINGS (trusted local file)
    CARD_MEANINGS = eval('(' + objCode + ')');
  }
} catch (e) {
  console.log('Failed to load full meanings from data/card-meanings.js, falling back.');
}

// If still empty, fallback to the inline subset in script.js
if (Object.keys(CARD_MEANINGS).length === 0) {
  try {
    const scriptFile = path.join(__dirname, '..', 'script.js');
    const scriptContent = fs.readFileSync(scriptFile, 'utf8');
    const startMarker = 'const CARD_MEANINGS = {';
    const startIdx = scriptContent.indexOf(startMarker);
    if (startIdx !== -1) {
      const objStart = scriptContent.indexOf('{', startIdx);
      let braceCount = 0;
      let inString = false;
      let stringChar = '';
      let endIdx = objStart;
      for (let i = objStart; i < scriptContent.length; i++) {
        const ch = scriptContent[i];
        const prev = scriptContent[i - 1];
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
      const objCode = scriptContent.substring(objStart, endIdx);
      CARD_MEANINGS = eval('(' + objCode + ')');
    }
  } catch (e) {
    console.log('Could not load meanings from script.js either.');
  }
}

// Get card title from filename
function getCardTitleFromFile(filename) {
  const base = path.basename(filename, '.svg');

  if (base.startsWith('major-')) {
    const name = base.replace('major-', '').replace(/-/g, ' ');
    const titleCase = name
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    const nameMap = {
      'The Hodler': 'The HODLer',
      'Strength Hodl': 'Strength HODL',
      'Wheel Of Fortune Cycle': 'Wheel of Fortune Cycle',
    };
    return nameMap[titleCase] || titleCase;
  }

  if (base.startsWith('minor-')) {
    const name = base.replace('minor-', '').replace(/-of-/g, ' of ').replace(/-/g, ' ');
    const words = name.split(' ');
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

function synthesizeMeanings(cardTitle) {
  // Generate tasteful, on-theme fallbacks when CARD_MEANINGS lacks an entry
  const isMajor = !cardTitle.includes(' of ');
  if (isMajor) {
    return {
      upright: `Core archetype energy of ${cardTitle}. Growth, awareness, and guidance for your crypto path.`,
      reversed: `Blocked aspects of ${cardTitle}. Reflect, rebalance, and course-correct with care.`,
      foresight: '',
    };
  }
  const [rank, suit] = cardTitle.split(' of ');
  const suitThemes = {
    Tokens: 'assets, value, portfolio, coin launches',
    Liquidity: 'cash flow, AMMs, DeFi pools, slippage',
    Security: 'wallet safety, audits, keys, threat awareness',
    Nodes: 'infrastructure, validators, networks, uptime',
  };
  const rankPrompts = {
    Ace: 'beginnings, raw potential, first steps',
    Two: 'choices, balance, alignment',
    Three: 'teamwork, planning, early progress',
    Four: 'stability, structure, consolidation',
    Five: 'tests, volatility, resilience',
    Six: 'recovery, support, fair exchange',
    Seven: 'assessment, strategy, patience',
    Eight: 'skill, diligence, iteration',
    Nine: 'fruition, comfort, refinement',
    Ten: 'completion, legacy, long view',
    Page: 'curiosity, learning, messenger energy',
    Knight: 'movement, drive, consistent action',
    Queen: 'nurturing mastery, wisdom, quality',
    King: 'authority, leadership, strategic vision',
  };
  const suitText = suitThemes[suit] || 'core crypto themes';
  const rankText = rankPrompts[rank] || 'meaningful momentum';
  return {
    upright: `${rank} of ${suit}: ${rankText} applied to ${suitText}. Move with intention and learn actively.`,
    reversed: `${rank} of ${suit} reversed: address blind spots and overexposure in ${suitText}. Simplify and secure.`,
    foresight: '',
  };
}

// Wrap text to fit in card width
function wrapText(text, maxLength = 50) {
  const words = text.split(' ');
  const lines = [];
  let currentLine = '';

  for (const word of words) {
    if ((currentLine + ' ' + word).length <= maxLength) {
      currentLine = currentLine ? currentLine + ' ' + word : word;
    } else {
      if (currentLine) lines.push(currentLine);
      currentLine = word;
    }
  }
  if (currentLine) lines.push(currentLine);

  return lines;
}

function updateCardWithDetailedDescriptions(svgContent, cardTitle) {
  const meanings = CARD_MEANINGS[cardTitle] || synthesizeMeanings(cardTitle);

  // Ensure emboss filter exists
  if (!svgContent.includes('id="embossText"')) {
    const filterDef = `
    <filter id="embossText" x="-50%" y="-50%" width="200%" height="200%">
      <feOffset dx="0.8" dy="0.8" in="SourceAlpha" result="off"/>
      <feGaussianBlur in="off" stdDeviation="0.6" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>`;

    if (svgContent.includes('<defs>')) {
      svgContent = svgContent.replace(
        /<defs>([\s\S]*?)<\/defs>/,
        (m, inner) => `<defs>${inner}\n${filterDef}\n<\/defs>`
      );
    } else {
      svgContent = svgContent.replace(
        /<svg([^>]*)>/,
        (m, attrs) => `<svg${attrs}>\n  <defs>\n${filterDef}\n  </defs>`
      );
    }
  }

  // Find the bottom text box area (around y="800")
  const bottomBoxPattern = /<rect x="40" y="800"[\s\S]*?<\/text>[\s\S]*?<\/text>[\s\S]*?<\/text>/;

  // We won't rely on existing bottom box; we will APPEND our own consistent panel so every card gets a readable section

  // Build detailed description text - use full meanings
  const uprightText = wrapText(meanings.upright || 'Meaning not available', 50);
  const reversedText = meanings.reversed ? wrapText(meanings.reversed, 50) : [];

  // Determine card type for label
  const isMajor =
    cardTitle.includes('The ') ||
    cardTitle.includes('Strength') ||
    cardTitle.includes('Wheel') ||
    cardTitle.includes('Judgment');
  const suit = isMajor ? 'Major Arcana' : cardTitle.split(' of ')[1] || 'Unknown';

  // Calculate dynamic height based on content (bigger typography)
  const baseHeight = 200;
  const lineHeight = 24;
  const uprightLines = uprightText.length;
  const reversedLines = reversedText.length;
  const totalHeight = baseHeight + (uprightLines + reversedLines) * lineHeight;
  const startY = 1000 - totalHeight - 20;

  // Create new bottom section with detailed descriptions and LIGHT text colors
  const newBottomSection = `
  <rect x="40" y="${startY}" width="620" height="${totalHeight}" rx="16" fill="rgba(15,21,32,0.95)" stroke="#d4af37" stroke-width="2.2" opacity="0.98"/>
  
  <!-- Suit/Type label - Light gold -->
  <text x="350" y="${startY + 34}" text-anchor="middle" font-family="Crimson Text, Georgia, serif" font-size="20" font-weight="700" fill="#d4af37" filter="url(#embossText)">${suit}</text>
  
  <!-- Upright meaning header - Light white -->
  <text x="350" y="${startY + 62}" text-anchor="middle" font-family="Crimson Text, Georgia, serif" font-size="16" font-weight="700" fill="#f5e6ff" filter="url(#embossText)">Upright:</text>
  ${uprightText
    .map(
      (line, i) =>
        `<text x="350" y="${startY + 88 + i * lineHeight}" text-anchor="middle" font-family="Crimson Text, Georgia, serif" font-size="15" font-weight="600" fill="#e6f1ff" filter="url(#embossText)">${line}</text>`
    )
    .join('\n  ')}
  
  ${
    reversedText.length > 0
      ? `
  <!-- Reversed meaning header - Light purple -->
  <text x="350" y="${startY + 92 + uprightText.length * lineHeight}" text-anchor="middle" font-family="Crimson Text, Georgia, serif" font-size="16" font-weight="700" fill="#c9a8e8" filter="url(#embossText)">Reversed:</text>
  ${reversedText
    .map(
      (line, i) =>
        `<text x="350" y="${startY + 118 + uprightText.length * lineHeight + i * lineHeight}" text-anchor="middle" font-family="Crimson Text, Georgia, serif" font-size="15" font-weight="600" fill="#f8f2ff" filter="url(#embossText)">${line}</text>`
    )
    .join('\n  ')}`
      : ''
  }
  
  <!-- Brand footer - Muted -->
  <text x="350" y="${startY + totalHeight - 16}" text-anchor="middle" font-family="Crimson Text, Georgia, serif" font-size="12" fill="#5f7494" opacity="0.65">Crypto Tarot</text>`;

  // Append new section just before closing </svg> so it renders on top
  if (svgContent.includes('</svg>')) {
    svgContent = svgContent.replace(/<\/svg>/, `${newBottomSection}\n</svg>`);
  } else {
    svgContent += `\n${newBottomSection}`;
  }
  return svgContent;
}

function main() {
  console.log('Adding detailed descriptions and light text to cards...\n');

  const files = fs.readdirSync(cardsDir).filter(f => f.endsWith('.svg'));
  let updated = 0;
  let errors = 0;

  for (const file of files) {
    const filePath = path.join(cardsDir, file);
    const cardTitle = getCardTitleFromFile(file);

    if (!cardTitle) {
      console.log(`⚠️  Could not parse title from: ${file}`);
      errors++;
      continue;
    }

    try {
      let svgContent = fs.readFileSync(filePath, 'utf8');
      const original = svgContent;

      svgContent = updateCardWithDetailedDescriptions(svgContent, cardTitle);

      if (svgContent !== original) {
        fs.writeFileSync(filePath, svgContent, 'utf8');
        console.log(`✓ Updated: ${cardTitle}`);
        updated++;
      } else {
        console.log(`- Skipped (no changes): ${cardTitle}`);
      }
    } catch (error) {
      console.error(`✗ Error updating ${file}:`, error.message);
      errors++;
    }
  }

  console.log(`\n${'='.repeat(60)}`);
  console.log(`Summary:`);
  console.log(`  Updated: ${updated} cards`);
  console.log(`  Errors: ${errors} cards`);
  console.log(`  Total: ${files.length} files`);
  console.log(`${'='.repeat(60)}`);
}

main();
