// Script to revert SVG cards to simple, working structure
// Usage: node scripts/revert-svg-to-simple.js

const fs = require('fs');
const path = require('path');

const cardsDir = path.join(__dirname, '..', 'assets', 'cards');

// Simple, working SVG template
function createSimpleSVG(cardName, cardType, suit, borderColor, colorA, colorB, meaning) {
  const isMajor = cardType === 'major';
  const emblem = isMajor
    ? `<polygon points="350,400 370,470 445,470 385,515 405,585 350,545 295,585 315,515 255,470 330,470" fill="url(#grad)"/>`
    : `<circle cx="350" cy="500" r="100" fill="url(#grad)" opacity="0.25"/>
       <text x="350" y="515" text-anchor="middle" font-family="Inter,Segoe UI,Arial" font-size="96" fill="#e6f1ff">${getSuitCode(suit)}</text>`;

  const bottomLabel = isMajor ? 'Major Arcana' : suit;
  const wrappedMeaning = wrapText(meaning, 45);

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="700" height="1000" viewBox="0 0 700 1000" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${colorA}"/>
      <stop offset="100%" stop-color="${colorB}"/>
    </linearGradient>
    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="8" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect x="20" y="20" width="660" height="960" rx="24" fill="#0b0f15" stroke="${borderColor}" stroke-width="3"/>
  <rect x="40" y="60" width="620" height="120" rx="14" fill="#0f1520" stroke="${borderColor}" stroke-width="1.5"/>
  <text x="350" y="130" text-anchor="middle" font-family="Inter,Segoe UI,Arial" font-size="28" fill="#e6f1ff">${cardName}</text>

  <g filter="url(#glow)">
    <path d="M120,780 C240,620 460,560 580,580" stroke="url(#grad)" stroke-width="10" fill="none"/>
  </g>

  <g>
    <circle cx="350" cy="500" r="140" fill="#0f1520" stroke="${borderColor}" stroke-width="2"/>
    ${emblem}
  </g>

  <rect x="40" y="800" width="620" height="160" rx="14" fill="#0f1520" stroke="${borderColor}" stroke-width="1.5"/>
  <text x="350" y="830" text-anchor="middle" font-family="Inter,Segoe UI,Arial" font-size="18" fill="#9bb0c8">${bottomLabel}</text>
  <text x="350" y="860" text-anchor="middle" font-family="Inter,Segoe UI,Arial" font-size="14" fill="${colorA}">${wrappedMeaning[0] || meaning.substring(0, 45)}</text>
  ${wrappedMeaning[1] ? `<text x="350" y="880" text-anchor="middle" font-family="Inter,Segoe UI,Arial" font-size="14" fill="${colorA}">${wrappedMeaning[1]}</text>` : ''}
  <text x="350" y="940" text-anchor="middle" font-family="Inter,Segoe UI,Arial" font-size="14" fill="#5f7494">Crypto Tarot</text>
</svg>`;
}

function getSuitCode(suit) {
  const codes = {
    Tokens: 'T',
    Liquidity: 'L',
    Security: 'S',
    Nodes: 'N',
  };
  return codes[suit] || '●';
}

function wrapText(text, maxLength) {
  if (text.length <= maxLength) return [text];
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
  return lines.slice(0, 2);
}

// Card meanings
const CARD_MEANINGS = {
  'The HODLer': 'Patience, long-term vision, unshakeable faith in bull runs.',
  'The Miner': 'Creation from effort, hashing out value, resource discovery.',
  'The Oracle': 'Intuition, hidden chains, blockchain whispers.',
  'The Empress Node': 'Abundance, yield farming, nurturing ecosystems.',
  'The Emperor Chain': 'Structure, governance, secure protocols.',
  'The Hierophant Whale': 'Mentorship, community wisdom, DAO guidance.',
  'The Lovers Fork': 'Partnerships, mergers, symbiotic tokens.',
  'The Chariot Pump': 'Momentum, rapid gains, moonshot drives.',
  'Strength HODL': 'Resilience, taming bears, inner fortitude.',
  'The Hermit Dev': 'Solitude coding, deep research, enlightened audits.',
  'Wheel of Fortune Cycle': 'Market turns, bull/bear shifts, lucky halvings.',
  'Justice Ledger': 'Fair play, transparent txns, balanced scales.',
  'The Hanged Man Flip': 'Perspective shift, flipping narratives, enlightened waits.',
  'Death Rug': 'Transformation, ending cycles, phoenix projects.',
  'Temperance Mix': 'Balance, diversified portfolios, harmonious blends.',
  'The Devil Scam': 'Addictions, FOMO chains, material traps.',
  'The Tower Hack': 'Sudden disruptions, exploits, rebuilding stronger.',
  'The Star Airdrop': 'Hope, free tokens, celestial guidance.',
  'The Moon Illusion': 'Deceptions, shadow markets, intuitive doubts.',
  'The Sun Bull': 'Prosperity, golden runs, enlightened gains.',
  'Judgment Halving': 'Reckonings, scarcity events, awakenings.',
  'The World Ecosystem': 'Completion, interconnected webs, global adoption.',
  'Ace of Tokens': 'New coin birth, seed investments.',
  'Two of Tokens': 'Balancing bags.',
  'Three of Tokens': 'Collaborative mints.',
  'Four of Tokens': 'Stable holdings.',
  'Five of Tokens': 'Bear hardships.',
  'Six of Tokens': 'Generous airdrops.',
  'Seven of Tokens': 'Long-term farming.',
  'Eight of Tokens': 'Skilled mining.',
  'Nine of Tokens': 'Luxury gains.',
  'Ten of Tokens': 'Legacy portfolios.',
  'Page of Tokens': 'Curious newbie.',
  'Knight of Tokens': 'Steady trader.',
  'Queen of Tokens': 'Nurturing yields.',
  'King of Tokens': 'Master whale.',
  'Ace of Liquidity': 'Fresh pools.',
  'Two of Liquidity': 'Partnership flows.',
  'Three of Liquidity': 'Celebratory pumps.',
  'Four of Liquidity': 'Emotional stability.',
  'Five of Liquidity': 'Loss grief.',
  'Six of Liquidity': 'Nostalgic moons.',
  'Seven of Liquidity': 'Dreamy visions.',
  'Eight of Liquidity': 'Flowing away.',
  'Nine of Liquidity': 'Wish fulfillment.',
  'Ten of Liquidity': 'Harmonious communities.',
  'Page of Liquidity': 'Enthusiastic shiller.',
  'Knight of Liquidity': 'Dynamic pumper.',
  'Queen of Liquidity': 'Intuitive influencer.',
  'King of Liquidity': 'Wise DAO leader.',
  'Ace of Security': 'Sharp insights.',
  'Two of Security': 'Dueling choices.',
  'Three of Security': 'Heartbreak hacks.',
  'Four of Security': 'Mental rest.',
  'Five of Security': 'Defeats in wars.',
  'Six of Security': 'Victorious retreats.',
  'Seven of Security': 'Stealthy strategies.',
  'Eight of Security': 'Quick escapes.',
  'Nine of Security': 'Anxious vigils.',
  'Ten of Security': 'Overwhelming burdens.',
  'Page of Security': 'Curious hacker.',
  'Knight of Security': 'Bold auditor.',
  'Queen of Security': 'Discerning regulator.',
  'King of Security': 'Master chief.',
  'Ace of Nodes': 'Spark of ideas.',
  'Two of Nodes': 'Planning visions.',
  'Three of Nodes': 'Team creations.',
  'Four of Nodes': 'Festive launches.',
  'Five of Nodes': 'Competitive sparks.',
  'Six of Nodes': 'Triumphant parades.',
  'Seven of Nodes': 'Defending innovations.',
  'Eight of Nodes': 'Swift developments.',
  'Nine of Nodes': 'Enduring passions.',
  'Ten of Nodes': 'Burdens of growth.',
  'Page of Nodes': 'Budding innovator.',
  'Knight of Nodes': 'Adventurous founder.',
  'Queen of Nodes': 'Inspiring visionary.',
  'King of Nodes': 'Legendary Satoshi.',
};

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

function main() {
  console.log('Reverting SVG cards to simple, working structure...\n');

  const files = fs.readdirSync(cardsDir).filter(f => f.endsWith('.svg'));
  let reverted = 0;
  let errors = 0;

  const suits = {
    Tokens: { colorA: '#00f5a0', colorB: '#07f7d1', borderColor: '#00f5a0' },
    Liquidity: { colorA: '#3ec0ff', colorB: '#8b5cf6', borderColor: '#3ec0ff' },
    Security: { colorA: '#ff3864', colorB: '#ffb3c7', borderColor: '#ff3864' },
    Nodes: { colorA: '#ff3cac', colorB: '#ffb86b', borderColor: '#ff3cac' },
  };

  for (const file of files) {
    const filePath = path.join(cardsDir, file);
    const cardName = getCardNameFromFilename(file);
    const cardType = getCardTypeFromFilename(file);
    const suit = cardType === 'major' ? null : cardType;

    if (!cardName) {
      console.log(`⚠️  Could not parse: ${file}`);
      errors++;
      continue;
    }

    const meaning = CARD_MEANINGS[cardName];
    if (!meaning) {
      console.log(`⚠️  No meaning for: ${cardName}`);
      errors++;
      continue;
    }

    try {
      let colors, borderColor;
      if (cardType === 'major') {
        colors = { colorA: '#00f5a0', colorB: '#8b5cf6' };
        borderColor = '#8b5cf6';
      } else {
        colors = suits[suit];
        borderColor = colors.borderColor;
      }

      const newSVG = createSimpleSVG(
        cardName,
        cardType,
        suit,
        borderColor,
        colors.colorA,
        colors.colorB,
        meaning
      );

      fs.writeFileSync(filePath, newSVG, 'utf8');
      console.log(`✓ Reverted: ${cardName}`);
      reverted++;
    } catch (error) {
      console.error(`✗ Error reverting ${file}:`, error.message);
      errors++;
    }
  }

  console.log(`\n${'='.repeat(60)}`);
  console.log(`Summary:`);
  console.log(`  Reverted: ${reverted} cards`);
  console.log(`  Errors: ${errors} cards`);
  console.log(`  Total: ${files.length} files`);
  console.log(`${'='.repeat(60)}`);
  console.log('\nAll cards reverted to simple, working structure!');
  console.log('Cards should now display properly in preview.');
}

main();
