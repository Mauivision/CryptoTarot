/**
 * Generate comprehensive Crypto Tarot book with full detailed descriptions
 * Includes all card information: cosmic correspondences, crypto flavor, foresight, etc.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { CARD_MEANINGS } from '../data/card-meanings.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUTPUT_MD = path.join(__dirname, '..', 'print', 'book', 'crypto-tarot-comprehensive-book.md');

const MAJOR_ORDER = [
  'The HODLer',
  'The Miner',
  'The Oracle',
  'The Empress Node',
  'The Emperor Chain',
  'The Hierophant Whale',
  'The Lovers Fork',
  'The Chariot Pump',
  'Strength HODL',
  'The Hermit Dev',
  'Wheel of Fortune Cycle',
  'Justice Ledger',
  'The Hanged Man Flip',
  'Death Rug',
  'Temperance Mix',
  'The Devil Scam',
  'The Tower Hack',
  'The Star Airdrop',
  'The Moon Illusion',
  'The Sun Bull',
  'Judgment Halving',
  'The World Ecosystem',
];

const SUITS = ['Tokens', 'Liquidity', 'Security', 'Nodes'];
const RANKS = [
  'Ace',
  'Two',
  'Three',
  'Four',
  'Five',
  'Six',
  'Seven',
  'Eight',
  'Nine',
  'Ten',
  'Page',
  'Knight',
  'Queen',
  'King',
];

function fileSafe(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function getCardImagePath(card, title) {
  if (card.arcana === 'Major') {
    const baseName = `major-${fileSafe(title)}`;
    const cardHash = title.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const commonVariants = [
      '02',
      '04',
      '07',
      '08',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
      '16',
      '03',
      '05',
      '06',
      '09',
    ];
    const variantIndex = cardHash % commonVariants.length;
    const variantNum = commonVariants[variantIndex];
    return `tools/CryptoTarot1-78/${baseName}-${variantNum}.jpg`;
  }

  if (card.arcana === 'Minor') {
    const [rank, suit] = title.split(' of ');
    const baseName = `minor-${fileSafe(rank)}-of-${fileSafe(suit)}`;
    const cardHash = title.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const commonVariants = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    const variantIndex = cardHash % commonVariants.length;
    const variantNum = commonVariants[variantIndex];
    return `tools/CryptoTarot1-78/${baseName}-${variantNum}.jpg`;
  }

  return '';
}

function formatCardMarkdown(title, card) {
  const imagePath = getCardImagePath(card, title);
  const imageRef = imagePath ? `![${title}](${imagePath})` : '';

  let markdown = `# ${title}\n\n`;

  // Card metadata
  if (card.number !== undefined) {
    markdown += `**Card Number:** ${card.number}\n\n`;
  }
  if (card.cosmicRuler) {
    markdown += `**Cosmic Ruler:** ${card.cosmicRuler}\n\n`;
  }
  if (card.cosmicSummary) {
    markdown += `*${card.cosmicSummary}*\n\n`;
  }

  // Image
  if (imagePath) {
    markdown += `${imageRef}\n\n`;
  }

  // Visual Description
  if (card.visualDescription) {
    markdown += `## Visual Description\n\n`;
    markdown += `${card.visualDescription}\n\n`;
  }

  // Upright meaning
  markdown += `## Upright Meaning\n\n`;
  if (card.upright) {
    markdown += `${card.upright}\n\n`;
  }

  // Reversed meaning
  markdown += `## Reversed Meaning\n\n`;
  if (card.reversed) {
    markdown += `${card.reversed}\n\n`;
  }

  // Crypto Flavor
  if (card.cryptoFlavor) {
    markdown += `## Crypto Flavor\n\n`;
    markdown += `*${card.cryptoFlavor}*\n\n`;
  }

  // Foresight
  if (card.foresight) {
    markdown += `## Crypto Foresight\n\n`;
    markdown += `${card.foresight}\n\n`;
  }

  // Educational Insight
  if (card.educationalInsight) {
    markdown += `## Educational Insight\n\n`;
    markdown += `${card.educationalInsight}\n\n`;
  }

  // Strategy
  if (card.strategy) {
    markdown += `## Strategy\n\n`;
    markdown += `*${card.strategy}*\n\n`;
  }

  // Extended Reflection
  if (card.extendedReflection) {
    markdown += `## Extended Reflection\n\n`;
    markdown += `${card.extendedReflection}\n\n`;
  }

  // Reading Context (Book Chapter)
  if (card.bookChapter) {
    markdown += `## Reading Context\n\n`;
    const paragraphs = card.bookChapter.split('\n\n').filter(p => p.trim());
    paragraphs.forEach(para => {
      markdown += `${para.trim()}\n\n`;
    });
  } else if (card.extendedReflection) {
    markdown += `## Reading Context\n\n`;
    markdown += `${card.extendedReflection}\n\n`;
  }

  // Page break for PDF
  markdown += `\\newpage\n\n`;

  return markdown;
}

function buildComprehensiveMarkdown() {
  let content = `# Crypto Tarot: Complete Guide to Card Meanings\n\n`;
  content += `*The Comprehensive Book of Descriptions, Meanings, and Reading Context*\n\n`;
  content += `*Generated ${new Date().toISOString()}*\n\n`;
  content += `---\n\n`;
  content += `## Introduction\n\n`;
  content += `Welcome to the Crypto Tarot, where ancient divination meets the digital frontier. This comprehensive guide provides detailed meanings, cosmic correspondences, and practical wisdom for all 78 cards in the deck.\n\n`;
  content += `Each card entry includes:\n\n`;
  content += `- **Visual Description**: What you see when you gaze upon the card\n`;
  content += `- **Upright & Reversed Meanings**: Core interpretations for both orientations\n`;
  content += `- **Crypto Flavor**: Real-world Web3 scenarios this card represents\n`;
  content += `- **Crypto Foresight**: Forward-looking guidance for your crypto journey\n`;
  content += `- **Educational Insight**: Technical knowledge embedded in the card\n`;
  content += `- **Strategy**: Practical action steps when this card appears\n`;
  content += `- **Extended Reflection**: Deeper philosophical and spiritual insights\n`;
  content += `- **Reading Context**: Comprehensive narrative for understanding the card's full significance\n\n`;
  content += `---\n\n`;

  // Major Arcana
  content += `# Major Arcana\n\n`;
  content += `The Major Arcana represent the archetypal journey through the crypto realm—the fundamental forces, transformations, and milestones that shape your Web3 path. These 22 cards speak to the soul of blockchain, the spirit of decentralization, and the essence of digital transformation.\n\n`;
  content += `---\n\n`;

  for (const title of MAJOR_ORDER) {
    if (CARD_MEANINGS[title]) {
      content += formatCardMarkdown(title, CARD_MEANINGS[title]);
    }
  }

  // Minor Arcana
  content += `# Minor Arcana\n\n`;
  content += `The Minor Arcana reflect the day-to-day experiences, practical challenges, and material aspects of your crypto journey. Organized into four suits—Tokens (Earth), Liquidity (Water), Security (Air), and Nodes (Fire)—these 56 cards address the tangible realities of Web3 life.\n\n`;
  content += `---\n\n`;

  for (const suit of SUITS) {
    content += `## ${suit} Suit\n\n`;
    const suitDescription = {
      Tokens:
        'The Tokens suit represents material value, sustainable growth, and practical stewardship. These cards speak to your portfolio, assets, and tangible resources in the crypto ecosystem.',
      Liquidity:
        'The Liquidity suit embodies emotional flow, trust channels, and feeling intelligence. These cards reflect the currents of DeFi, pools, and the emotional landscape of trading.',
      Security:
        'The Security suit represents strategic clarity, mental agility, and logic. These cards address wallet safety, audits, keys, and the intellectual aspects of crypto.',
      Nodes:
        'The Nodes suit embodies creative ignition, signal broadcasting, and passionate output. These cards speak to validators, network health, decentralization, and creative energy.',
    };
    content += `*${suitDescription[suit]}*\n\n`;
    content += `---\n\n`;

    for (const rank of RANKS) {
      const title = `${rank} of ${suit}`;
      if (CARD_MEANINGS[title]) {
        content += formatCardMarkdown(title, CARD_MEANINGS[title]);
      }
    }
  }

  // Appendix
  content += `# Appendix\n\n`;
  content += `## How to Use This Book\n\n`;
  content += `1. **Daily Draws**: Pull a single card each day for guidance\n`;
  content += `2. **Three-Card Spreads**: Use Past-Present-Future for timeline readings\n`;
  content += `3. **Celtic Cross**: Apply the traditional 10-card spread for complex questions\n`;
  content += `4. **Card Combinations**: Study how cards interact when drawn together\n`;
  content += `5. **Reversed Cards**: Pay special attention to shadow aspects and warnings\n\n`;
  content += `## Reading Tips\n\n`;
  content += `- Trust your intuition when interpreting cards\n`;
  content += `- Consider both upright and reversed meanings\n`;
  content += `- Look for patterns across multiple cards\n`;
  content += `- Apply crypto foresight to your actual portfolio decisions\n`;
  content += `- Use educational insights to deepen your Web3 knowledge\n\n`;
  content += `## Disclaimer\n\n`;
  content += `*This book is for entertainment purposes only. Not financial advice. Cryptocurrency investments carry risk. Always DYOR (Do Your Own Research).*\n\n`;
  content += `---\n\n`;
  content += `*© ${new Date().getFullYear()} Crypto Tarot. All rights reserved.*\n`;

  return content;
}

function main() {
  console.log('📚 Generating comprehensive Crypto Tarot book...\n');

  const markdown = buildComprehensiveMarkdown();

  // Ensure output directory exists
  const outputDir = path.dirname(OUTPUT_MD);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(OUTPUT_MD, markdown, 'utf8');

  console.log(`✅ Comprehensive book created: ${OUTPUT_MD}`);
  console.log(`\n📖 Next: Generate LaTeX and PDF`);
  console.log(`   Run: node scripts/generate-comprehensive-latex.mjs`);
}

main();
