// Script to add beautiful artwork to SVG card images
// Usage: node scripts/add-artwork-to-cards.js

const fs = require('fs');
const path = require('path');

const cardsDir = path.join(__dirname, '..', 'assets', 'cards');

// Artwork generators for each card
const artworkGenerators = {
  // Major Arcana
  'The HODLer': colors => `
    <!-- Starry crypto sky -->
    <g opacity="0.6">
      ${Array.from({ length: 12 }, (_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const radius = 180 + Math.random() * 40;
        const x = 350 + Math.cos(angle) * radius;
        const y = 500 + Math.sin(angle) * radius;
        return `<circle cx="${x}" cy="${y}" r="3" fill="${colors.primary}" filter="url(#glow)"/>`;
      }).join('')}
    </g>
    <!-- Novice trader figure -->
    <g transform="translate(350, 500)">
      <!-- Body -->
      <ellipse cx="0" cy="20" rx="25" ry="40" fill="${colors.primary}" opacity="0.3"/>
      <!-- Head -->
      <circle cx="0" cy="-30" r="15" fill="${colors.primary}" opacity="0.4"/>
      <!-- Wallet in hand -->
      <rect x="-8" y="-20" width="16" height="24" rx="2" fill="${colors.accent}" opacity="0.6"/>
      <!-- Diamond hands symbol -->
      <path d="M-15,10 L-10,20 L-5,10 M5,10 L10,20 L15,10" stroke="${colors.primary}" stroke-width="2" fill="none" filter="url(#glow)"/>
    </g>
    <!-- Blockchain cliff edge -->
    <path d="M100,600 L350,550 L600,600" stroke="${colors.primary}" stroke-width="3" fill="none" opacity="0.5"/>
    <!-- Meme coin dog -->
    <g transform="translate(450, 580)">
      <circle cx="0" cy="0" r="20" fill="${colors.accent}" opacity="0.4"/>
      <circle cx="-8" cy="-5" r="3" fill="#fff"/>
      <circle cx="8" cy="-5" r="3" fill="#fff"/>
    </g>
  `,

  'The Miner': colors => `
    <!-- Blockchain mountain -->
    <polygon points="200,600 350,400 500,600" fill="${colors.primary}" opacity="0.2" filter="url(#glow)"/>
    <!-- Mining figure -->
    <g transform="translate(350, 500)">
      <!-- Body -->
      <ellipse cx="0" cy="20" rx="20" ry="35" fill="${colors.primary}" opacity="0.4"/>
      <!-- Head -->
      <circle cx="0" cy="-25" r="12" fill="${colors.primary}" opacity="0.5"/>
      <!-- Pickaxe -->
      <line x1="-30" y1="-10" x2="-50" y2="-30" stroke="${colors.accent}" stroke-width="4"/>
      <line x1="-30" y1="-10" x2="-10" y2="10" stroke="${colors.accent}" stroke-width="4"/>
    </g>
    <!-- Crypto blocks being mined -->
    ${Array.from({ length: 5 }, (_, i) => {
      const x = 250 + i * 40;
      const y = 550 + Math.sin(i) * 20;
      return `<rect x="${x}" y="${y}" width="30" height="30" fill="${colors.primary}" opacity="0.5" filter="url(#glow)"/>`;
    }).join('')}
  `,

  'Strength HODL': colors => `
    <!-- Bear figure -->
    <g transform="translate(350, 500)">
      <!-- Bear body -->
      <ellipse cx="0" cy="30" rx="50" ry="60" fill="${colors.accent}" opacity="0.3"/>
      <!-- Bear head -->
      <circle cx="0" cy="-20" r="35" fill="${colors.accent}" opacity="0.4"/>
      <!-- Bear ears -->
      <circle cx="-20" cy="-35" r="12" fill="${colors.accent}" opacity="0.4"/>
      <circle cx="20" cy="-35" r="12" fill="${colors.accent}" opacity="0.4"/>
    </g>
    <!-- Figure taming bear -->
    <g transform="translate(350, 450)">
      <!-- Body -->
      <ellipse cx="0" cy="20" rx="18" ry="30" fill="${colors.primary}" opacity="0.5"/>
      <!-- Head -->
      <circle cx="0" cy="-15" r="12" fill="${colors.primary}" opacity="0.6"/>
      <!-- Diamond hands -->
      <path d="M-20,25 L-15,35 L-10,25 M10,25 L15,35 L20,25" stroke="${colors.primary}" stroke-width="3" fill="none" filter="url(#glow)"/>
    </g>
    <!-- Inner strength aura -->
    <circle cx="350" cy="500" r="120" fill="none" stroke="${colors.primary}" stroke-width="2" opacity="0.3" stroke-dasharray="5,5"/>
  `,

  'Justice Ledger': colors => `
    <!-- Scales of justice -->
    <g transform="translate(350, 500)">
      <!-- Balance beam -->
      <line x1="-60" y1="0" x2="60" y2="0" stroke="${colors.primary}" stroke-width="4" filter="url(#glow)"/>
      <!-- Left scale -->
      <ellipse cx="-60" cy="20" rx="25" ry="8" fill="${colors.primary}" opacity="0.4"/>
      <line x1="-60" y1="0" x2="-60" y2="28" stroke="${colors.primary}" stroke-width="2"/>
      <!-- Right scale -->
      <ellipse cx="60" cy="20" rx="25" ry="8" fill="${colors.primary}" opacity="0.4"/>
      <line x1="60" y1="0" x2="60" y2="28" stroke="${colors.primary}" stroke-width="2"/>
      <!-- Blockchain transactions in scales -->
      <rect x="-80" y="15" width="15" height="10" fill="${colors.accent}" opacity="0.6"/>
      <rect x="-65" y="15" width="15" height="10" fill="${colors.accent}" opacity="0.6"/>
      <rect x="65" y="15" width="15" height="10" fill="${colors.accent}" opacity="0.6"/>
      <rect x="80" y="15" width="15" height="10" fill="${colors.accent}" opacity="0.6"/>
    </g>
    <!-- Transparent ledger lines -->
    ${Array.from({ length: 8 }, (_, i) => {
      const y = 400 + i * 25;
      return `<line x1="150" y1="${y}" x2="550" y2="${y}" stroke="${colors.primary}" stroke-width="1" opacity="0.2"/>`;
    }).join('')}
  `,

  'The Chariot Pump': colors => `
    <!-- Rocket ship -->
    <g transform="translate(350, 500)">
      <!-- Rocket body -->
      <ellipse cx="0" cy="0" rx="25" ry="80" fill="${colors.primary}" opacity="0.6" filter="url(#glow)"/>
      <!-- Rocket nose -->
      <polygon points="0,-80 20,-60 -20,-60" fill="${colors.accent}" opacity="0.7"/>
      <!-- Rocket fins -->
      <polygon points="-25,40 -40,60 -25,50" fill="${colors.accent}" opacity="0.6"/>
      <polygon points="25,40 40,60 25,50" fill="${colors.accent}" opacity="0.6"/>
      <!-- Flame -->
      <ellipse cx="0" cy="80" rx="15" ry="30" fill="${colors.accent}" opacity="0.8" filter="url(#glow)"/>
    </g>
    <!-- Price chart ascending -->
    <path d="M150,600 L200,550 L250,500 L300,450 L350,400 L400,350 L450,300 L500,250 L550,200" 
          stroke="${colors.primary}" stroke-width="3" fill="none" opacity="0.6" filter="url(#glow)"/>
    <!-- Moonshot stars -->
    ${Array.from({ length: 6 }, (_, i) => {
      const x = 200 + i * 60;
      const y = 300 + Math.sin(i) * 50;
      return `<polygon points="${x},${y} ${x + 5},${y + 10} ${x + 15},${y + 10} ${x + 7},${y + 18} ${x + 10},${y + 28} ${x},${y + 22} ${x - 10},${y + 28} ${x - 7},${y + 18} ${x - 15},${y + 10} ${x - 5},${y + 10}" 
              fill="${colors.accent}" opacity="0.5" filter="url(#glow)"/>`;
    }).join('')}
  `,

  'The Star Airdrop': colors => `
    <!-- Starry sky background -->
    ${Array.from({ length: 20 }, (_, i) => {
      const angle = Math.random() * Math.PI * 2;
      const radius = 100 + Math.random() * 150;
      const x = 350 + Math.cos(angle) * radius;
      const y = 400 + Math.sin(angle) * radius;
      const size = 3 + Math.random() * 4;
      return `<circle cx="${x}" cy="${y}" r="${size}" fill="${colors.primary}" opacity="0.7" filter="url(#glow)"/>`;
    }).join('')}
    <!-- Large central star -->
    <polygon points="350,400 360,430 395,430 365,450 375,480 350,460 325,480 335,450 305,430 340,430" 
             fill="${colors.accent}" opacity="0.8" filter="url(#glow)"/>
    <!-- Falling tokens (airdrop) -->
    ${Array.from({ length: 8 }, (_, i) => {
      const x = 200 + i * 50;
      const y = 350 + (i % 2) * 100;
      return `<circle cx="${x}" cy="${y}" r="8" fill="${colors.primary}" opacity="0.6" filter="url(#glow)"/>
              <text x="${x}" y="${y + 3}" text-anchor="middle" font-size="10" fill="#fff">₿</text>`;
    }).join('')}
    <!-- Figure reaching up -->
    <g transform="translate(350, 550)">
      <ellipse cx="0" cy="10" rx="15" ry="25" fill="${colors.primary}" opacity="0.4"/>
      <circle cx="0" cy="-15" r="10" fill="${colors.primary}" opacity="0.5"/>
    </g>
  `,

  'Death Rug': colors => `
    <!-- Dead coins (faded) -->
    ${Array.from({ length: 6 }, (_, i) => {
      const x = 200 + i * 60;
      const y = 500 + Math.sin(i) * 30;
      return `<circle cx="${x}" cy="${y}" r="20" fill="${colors.accent}" opacity="0.2" stroke="${colors.accent}" stroke-width="1" opacity="0.3">
              <animate attributeName="opacity" values="0.2;0.1;0.2" dur="2s" repeatCount="indefinite"/>
              </circle>`;
    }).join('')}
    <!-- Phoenix rising -->
    <g transform="translate(350, 500)">
      <!-- Phoenix body -->
      <ellipse cx="0" cy="0" rx="30" ry="50" fill="${colors.primary}" opacity="0.6" filter="url(#glow)"/>
      <!-- Phoenix wings -->
      <path d="M-30,0 Q-60,-30 -50,-60 Q-40,-40 -30,-20" fill="${colors.accent}" opacity="0.5" filter="url(#glow)"/>
      <path d="M30,0 Q60,-30 50,-60 Q40,-40 30,-20" fill="${colors.accent}" opacity="0.5" filter="url(#glow)"/>
      <!-- Phoenix head -->
      <circle cx="0" cy="-50" r="12" fill="${colors.primary}" opacity="0.7" filter="url(#glow)"/>
      <!-- Rising flames -->
      <ellipse cx="0" cy="50" rx="20" ry="40" fill="${colors.accent}" opacity="0.6" filter="url(#glow)"/>
    </g>
    <!-- Transformation energy -->
    <circle cx="350" cy="500" r="100" fill="none" stroke="${colors.primary}" stroke-width="2" opacity="0.3" stroke-dasharray="3,3">
      <animate attributeName="r" values="100;120;100" dur="3s" repeatCount="indefinite"/>
    </circle>
  `,

  'Wheel of Fortune Cycle': colors => `
    <!-- Spinning wheel -->
    <g transform="translate(350, 500)">
      <!-- Outer wheel -->
      <circle cx="0" cy="0" r="100" fill="none" stroke="${colors.primary}" stroke-width="4" opacity="0.6" filter="url(#glow)"/>
      <!-- Spokes -->
      ${Array.from({ length: 8 }, (_, i) => {
        const angle = (i * 45 * Math.PI) / 180;
        const x = Math.cos(angle) * 100;
        const y = Math.sin(angle) * 100;
        return `<line x1="0" y1="0" x2="${x}" y2="${y}" stroke="${colors.primary}" stroke-width="2" opacity="0.4"/>`;
      }).join('')}
      <!-- Center hub -->
      <circle cx="0" cy="0" r="20" fill="${colors.accent}" opacity="0.6" filter="url(#glow)"/>
      <!-- Bull/Bear symbols on wheel -->
      <text x="-60" y="-60" font-size="24" fill="${colors.primary}" opacity="0.7">🐂</text>
      <text x="60" y="60" font-size="24" fill="${colors.accent}" opacity="0.7">🐻</text>
    </g>
    <!-- Market cycle arrows -->
    <path d="M200,500 Q350,400 500,500" stroke="${colors.primary}" stroke-width="3" fill="none" opacity="0.4" marker-end="url(#arrowhead)"/>
    <path d="M500,500 Q350,600 200,500" stroke="${colors.accent}" stroke-width="3" fill="none" opacity="0.4" marker-end="url(#arrowhead)"/>
  `,

  // Minor Arcana - Tokens
  'Ace of Tokens': colors => `
    <!-- New coin emerging -->
    <g transform="translate(350, 500)">
      <!-- Coin emerging from blockchain -->
      <circle cx="0" cy="0" r="50" fill="${colors.primary}" opacity="0.7" filter="url(#glow)"/>
      <circle cx="0" cy="0" r="40" fill="${colors.accent}" opacity="0.5"/>
      <text x="0" y="5" text-anchor="middle" font-size="36" fill="#fff" font-weight="bold">₿</text>
      <!-- Blockchain blocks below -->
      ${Array.from({ length: 3 }, (_, i) => {
        return `<rect x="${-60 + i * 40}" y="60" width="30" height="30" fill="${colors.primary}" opacity="0.4"/>`;
      }).join('')}
      <!-- Growth rays -->
      ${Array.from({ length: 8 }, (_, i) => {
        const angle = (i * 45 * Math.PI) / 180;
        const x1 = Math.cos(angle) * 50;
        const y1 = Math.sin(angle) * 50;
        const x2 = Math.cos(angle) * 70;
        const y2 = Math.sin(angle) * 70;
        return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${colors.primary}" stroke-width="2" opacity="0.5" filter="url(#glow)"/>`;
      }).join('')}
    </g>
  `,

  // Add more artwork generators as needed...
};

// Default artwork for cards without specific generators
function generateDefaultArtwork(cardName, cardType, suit, colors) {
  if (cardType === 'major') {
    return `
      <!-- Mystical energy waves -->
      <g transform="translate(350, 500)">
        ${Array.from({ length: 5 }, (_, i) => {
          const radius = 60 + i * 20;
          return `<circle cx="0" cy="0" r="${radius}" fill="none" stroke="${colors.primary}" stroke-width="2" opacity="${0.4 - i * 0.08}">
                <animate attributeName="r" values="${radius};${radius + 10};${radius}" dur="${3 + i}s" repeatCount="indefinite"/>
                </circle>`;
        }).join('')}
        <!-- Central symbol -->
        <circle cx="0" cy="0" r="40" fill="${colors.primary}" opacity="0.3" filter="url(#glow)"/>
      </g>
    `;
  } else {
    // Minor arcana - suit-specific artwork
    const suitSymbols = {
      Tokens: '₿',
      Liquidity: '💧',
      Security: '🔒',
      Nodes: '⚡',
    };
    const symbol = suitSymbols[suit] || '●';

    return `
      <!-- Suit-themed artwork -->
      <g transform="translate(350, 500)">
        <!-- Suit symbol -->
        <circle cx="0" cy="0" r="60" fill="${colors.primary}" opacity="0.2" filter="url(#glow)"/>
        <text x="0" y="10" text-anchor="middle" font-size="64" fill="${colors.primary}" opacity="0.6" filter="url(#glow)">${symbol}</text>
        <!-- Decorative elements -->
        ${Array.from({ length: 6 }, (_, i) => {
          const angle = (i * 60 * Math.PI) / 180;
          const x = Math.cos(angle) * 80;
          const y = Math.sin(angle) * 80;
          return `<circle cx="${x}" cy="${y}" r="8" fill="${colors.accent}" opacity="0.4" filter="url(#glow)"/>`;
        }).join('')}
      </g>
    `;
  }
}

// Function to get colors based on card type
function getCardColors(cardType, suit) {
  if (cardType === 'major') {
    return {
      primary: '#00f5a0',
      accent: '#8b5cf6',
      border: '#8b5cf6',
    };
  }

  const suitColors = {
    Tokens: { primary: '#00f5a0', accent: '#07f7d1', border: '#00f5a0' },
    Liquidity: { primary: '#3ec0ff', accent: '#8b5cf6', border: '#3ec0ff' },
    Security: { primary: '#ff3864', accent: '#ffb3c7', border: '#ff3864' },
    Nodes: { primary: '#ff3cac', accent: '#ffb86b', border: '#ff3cac' },
  };

  return suitColors[suit] || { primary: '#00f5a0', accent: '#8b5cf6', border: '#203047' };
}

// Function to add artwork to SVG
function addArtworkToSVG(svgContent, cardName, cardType, suit) {
  // Extract existing gradient and filter definitions
  const hasGrad = svgContent.includes('id="grad"');
  const hasGlow = svgContent.includes('id="glow"');
  const hasArrowhead = svgContent.includes('id="arrowhead"');

  // Add arrowhead marker if needed
  let arrowheadDef = '';
  if (!hasArrowhead && cardName === 'Wheel of Fortune Cycle') {
    arrowheadDef = `
    <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
      <polygon points="0 0, 10 3, 0 6" fill="#00f5a0"/>
    </marker>`;
  }

  // Get artwork
  const colors = getCardColors(cardType, suit);
  const generator = artworkGenerators[cardName];
  const artwork = generator
    ? generator(colors)
    : generateDefaultArtwork(cardName, cardType, suit, colors);

  // Find the center artwork section (between the decorative path and bottom box)
  // Replace the simple circle/polygon with the new artwork
  const artworkPattern = /<g>[\s\S]*?<\/g>\s*(?=<rect x="40" y="800")/;

  // If pattern found, replace it
  if (artworkPattern.test(svgContent)) {
    const newArtworkSection = `
  <!-- Beautiful artwork representing ${cardName} -->
  <g>
    ${artwork}
  </g>`;

    return svgContent.replace(artworkPattern, newArtworkSection);
  }

  // If pattern not found, insert before bottom box
  const bottomBoxPattern = /(<rect x="40" y="800")/;
  if (bottomBoxPattern.test(svgContent)) {
    const newArtworkSection = `
  <!-- Beautiful artwork representing ${cardName} -->
  <g>
    ${artwork}
  </g>
  
  $1`;
    return svgContent.replace(bottomBoxPattern, newArtworkSection);
  }

  return svgContent;
}

// Helper function to get card name from filename
function getCardNameFromFilename(filename) {
  const base = path.basename(filename, '.svg');

  if (base.startsWith('major-')) {
    const name = base.replace('major-', '').replace(/-/g, ' ');
    const words = name.split(' ');
    const titleCase = words.map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

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
  console.log('Adding beautiful artwork to SVG card files...\n');

  const files = fs.readdirSync(cardsDir).filter(f => f.endsWith('.svg'));
  let updated = 0;
  let skipped = 0;
  let errors = 0;

  for (const file of files) {
    const filePath = path.join(cardsDir, file);
    const cardName = getCardNameFromFilename(file);
    const cardType = getCardTypeFromFilename(file);
    const suit = cardType === 'major' ? null : cardType;

    if (!cardName) {
      console.log(`⚠️  Could not parse card name from: ${file}`);
      errors++;
      continue;
    }

    try {
      let svgContent = fs.readFileSync(filePath, 'utf8');

      // Check if already has custom artwork (has comment with "Beautiful artwork")
      if (svgContent.includes('<!-- Beautiful artwork representing')) {
        console.log(`⏭  Already has artwork: ${cardName}`);
        skipped++;
        continue;
      }

      const updatedSVG = addArtworkToSVG(svgContent, cardName, cardType, suit);
      fs.writeFileSync(filePath, updatedSVG, 'utf8');
      console.log(`✓ Added artwork: ${cardName}`);
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
