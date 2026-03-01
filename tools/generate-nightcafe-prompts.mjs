/**
 * Crypto Tarot NightCafe Prompt Generator
 * Reads from data/card-meanings.js and generates optimized prompts for NightCafe Creator
 * Usage: node tools/generate-nightcafe-prompts.mjs
 */

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT_DIR = join(__dirname, '..');

// Import card meanings - use dynamic import
const cardMeaningsPath = join(ROOT_DIR, 'data', 'card-meanings.js');
const cardMeaningsUrl = `file://${cardMeaningsPath}`;
const { CARD_MEANINGS } = await import(cardMeaningsUrl);

// Numerology associations
const NUMEROLOGY_ASSOCIATIONS = {
  0: {
    label: 'Pluto',
    description:
      'transformation, rebirth, and the unknown; the Crypto Pioneer leaping into uncharted digital realms',
  },
  1: {
    label: 'Sun',
    description:
      'vitality, new beginnings, and radiant core energy; the spark for fresh protocols and token launches',
  },
  2: {
    label: 'Moon',
    description:
      'duality, intuition, and emotional flow; balanced decisions and liquidity partnerships guided by instinct',
  },
  3: {
    label: 'Mercury',
    description:
      'communication, intellect, and collaboration; community pulses, dev syncs, and network broadcasts',
  },
  4: {
    label: 'Uranus',
    description:
      'structure, innovation, and sudden change; resilient frameworks with disruptive breakthrough potential',
  },
  5: {
    label: 'Mars',
    description:
      'conflict, action, and challenges; rivalries, audits under fire, and bear-market stress tests',
  },
  6: {
    label: 'Venus',
    description:
      'harmony, balance, and relationships; generosity, nostalgic bonds, and rewarding ecosystems',
  },
  7: {
    label: 'Neptune',
    description:
      'illusion, spirituality, and dreams; visionary strategies, stealth modes, and meditative planning',
  },
  8: {
    label: 'Saturn',
    description:
      'discipline, restriction, and achievement; skilled craftsmanship, mining pressure, and earned mastery',
  },
  9: {
    label: 'Jupiter',
    description:
      'expansion, wisdom, and fulfillment; persistent growth, wealth realized, and elevated perspective',
  },
  10: {
    label: 'Earth',
    description:
      'completion, manifestation, and cycles; mature networks, legacy portfolios, and grounded scaling',
  },
  11: {
    label: 'Air/Earth (Mutable)',
    description:
      'youthful curiosity and exploration; budding innovators bridging ideas into experimental action',
  },
  12: {
    label: 'Fire (Cardinal)',
    description:
      'dynamic action and questing; adventurous founders charging forward to ignite adoption',
  },
  13: {
    label: 'Water (Fixed)',
    description:
      'receptive intuition and nurturing balance; inspiring visionaries guiding communities with care',
  },
  14: {
    label: 'Air/Fire (Sovereign)',
    description:
      'authoritative mastery blending intellect and will; legendary architects stewarding whole ecosystems',
  },
};

// Output files
const PROMPTS_FILE = join(ROOT_DIR, 'assets', 'nightcafe-prompts.json');
const BATCH_FILE = join(ROOT_DIR, 'assets', 'nightcafe-batch-prompts.txt');

function getCardSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function buildNightcafePrompt(cardName, cardData) {
  const styleBase =
    'cyberpunk tarot card, neon art, digital painting, mystical, ethereal, holographic effects, blockchain aesthetic, vertical portrait, high detail, 4k, NFT art style';

  const number = cardData.number ?? cardData.rank;
  const association = NUMEROLOGY_ASSOCIATIONS[number];
  const numerologyText = association
    ? `, numerology ${number} aligned with ${association.label} (${association.description})`
    : '';

  // Use visualDescription if available, otherwise fall back to symbolism or cryptoFlavor
  const visualDesc =
    cardData.visualDescription || cardData.symbolism || cardData.cryptoFlavor || '';

  if (cardData.arcana === 'Major') {
    return `${visualDesc}, ${cardName} tarot card, ${styleBase}, vibrant neon colors (greens #00f5a0, purples #8b5cf6), dark background #0b0f15, blockchain patterns in border, futuristic design, traditional tarot layout with crypto twist, vertical orientation 2:3 ratio${numerologyText}`;
  } else {
    // Minor Arcana - determine suit color
    const suitColors = {
      Tokens: 'Green/Teal neon',
      Liquidity: 'Blue/Purple neon',
      Security: 'Red/Pink neon',
      Nodes: 'Pink/Orange neon',
    };
    const suitColor = suitColors[cardData.suit] || 'neon';

    return `${visualDesc}, ${cardData.rank} of ${cardData.suit} tarot card, ${styleBase}, ${suitColor} colors, dark background #0b0f15, blockchain patterns in border, futuristic design, traditional tarot layout with crypto twist, vertical orientation 2:3 ratio${numerologyText}`;
  }
}

function generateAllPrompts() {
  const allPrompts = [];

  // Process all cards from CARD_MEANINGS
  for (const [cardName, cardData] of Object.entries(CARD_MEANINGS)) {
    const cardSlug = getCardSlug(cardName);
    const cardType = cardData.arcana === 'Major' ? 'major' : 'minor';
    const cardId = cardType === 'major' ? `major-${cardSlug}` : `minor-${cardSlug}`;

    const prompt = buildNightcafePrompt(cardName, cardData);
    const number =
      cardData.number ??
      (cardData.rank
        ? ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'].indexOf(
            cardData.rank
          ) + 1 || ['Page', 'Knight', 'Queen', 'King'].indexOf(cardData.rank) + 11
        : null);
    const association = number !== null ? NUMEROLOGY_ASSOCIATIONS[number] : null;

    allPrompts.push({
      id: cardId,
      name: cardName,
      type: cardType,
      suit: cardData.suit || null,
      rank: cardData.rank || null,
      prompt: prompt,
      filename: `${cardId}.png`,
      numerology_number: number,
      numerology_association: association,
      visualDescription: cardData.visualDescription || null,
    });
  }

  // Sort: Major Arcana first (by number), then Minor Arcana (by suit, then rank)
  allPrompts.sort((a, b) => {
    if (a.type !== b.type) {
      return a.type === 'major' ? -1 : 1;
    }
    if (a.type === 'major') {
      return (a.numerology_number || 0) - (b.numerology_number || 0);
    }
    const suitOrder = { Tokens: 0, Liquidity: 1, Security: 2, Nodes: 3 };
    const suitDiff = (suitOrder[a.suit] || 99) - (suitOrder[b.suit] || 99);
    if (suitDiff !== 0) return suitDiff;
    return (a.numerology_number || 0) - (b.numerology_number || 0);
  });

  return allPrompts;
}

async function main() {
  console.log('='.repeat(60));
  console.log('NightCafe Prompt Generator for Crypto Tarot');
  console.log('='.repeat(60));
  console.log();

  const prompts = generateAllPrompts();

  // Save as JSON
  writeFileSync(PROMPTS_FILE, JSON.stringify(prompts, null, 2), 'utf-8');
  console.log(`Saved ${prompts.length} prompts to: ${PROMPTS_FILE}`);

  // Save as text file for easy copy-paste
  let batchContent = '='.repeat(60) + '\n';
  batchContent += 'NIGHTCAFE PROMPTS FOR CRYPTO TAROT DECK\n';
  batchContent += '='.repeat(60) + '\n\n';
  batchContent += 'Copy each prompt below into NightCafe Creator\n';
  batchContent += 'Recommended settings: DALL-E 3 or Stable Diffusion XL\n';
  batchContent += 'Aspect Ratio: 2:3 (portrait)\n';
  batchContent += 'Quality: High\n\n';
  batchContent += '='.repeat(60) + '\n\n';

  prompts.forEach((item, i) => {
    batchContent += `\n--- Card ${i + 1}/78: ${item.name} ---\n`;
    batchContent += `Filename: ${item.filename}\n`;
    if (item.numerology_association) {
      batchContent += `Numerology: ${item.numerology_number} - ${item.numerology_association.label}\n`;
    }
    batchContent += `Prompt:\n${item.prompt}\n`;
    batchContent += '-'.repeat(60) + '\n';
  });

  writeFileSync(BATCH_FILE, batchContent, 'utf-8');
  console.log(`Saved batch file to: ${BATCH_FILE}`);
  console.log();
  console.log('='.repeat(60));
  console.log('NEXT STEPS:');
  console.log('='.repeat(60));
  console.log('1. Open NightCafe Creator (https://creator.nightcafe.studio)');
  console.log('2. Open the batch file:', BATCH_FILE);
  console.log('3. Copy each prompt and paste into NightCafe');
  console.log('4. Use settings: DALL-E 3 or SDXL, 2:3 ratio, High quality');
  console.log('5. Download images and save to: assets/cards/');
  console.log('6. Name files exactly as shown in the batch file');
  console.log();
  console.log(`Total cards: ${prompts.length}`);
  console.log(`  - Major Arcana: ${prompts.filter(p => p.type === 'major').length}`);
  console.log(`  - Minor Arcana: ${prompts.filter(p => p.type === 'minor').length}`);
  console.log();
}

main();
