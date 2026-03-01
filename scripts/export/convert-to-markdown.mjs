/**
 * Convert card meanings to clean Markdown format
 * Format: # CARD_NAME \n ## Upright: \n ## Reversed: \n ## Reading Context:
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { CARD_MEANINGS } from '../data/card-meanings.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUTPUT_FILE = path.join(__dirname, '..', 'print', 'book', 'crypto-tarot-book.md');

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
  // For Major Arcana: major-{title-lowercase-hyphenated}-{number}.jpg
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

  // For Minor Arcana: minor-{rank-lowercase}-of-{suit-lowercase}-{number}.jpg
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

  // Add image if available
  if (imagePath) {
    markdown += `${imageRef}\n\n`;
  }

  // Upright meaning
  markdown += `## Upright:\n\n`;
  if (card.upright) {
    markdown += `${card.upright}\n\n`;
  }

  // Reversed meaning
  markdown += `## Reversed:\n\n`;
  if (card.reversed) {
    markdown += `${card.reversed}\n\n`;
  }

  // Reading Context (book chapter)
  markdown += `## Reading Context:\n\n`;
  if (card.bookChapter) {
    // Format book chapter with proper paragraph breaks
    const paragraphs = card.bookChapter.split('\n\n').filter(p => p.trim());
    paragraphs.forEach(para => {
      markdown += `${para.trim()}\n\n`;
    });
  } else if (card.extendedReflection) {
    markdown += `${card.extendedReflection}\n\n`;
  }

  // Add page break for PDF (using Pandoc syntax)
  markdown += `\n\\newpage\n\n`;

  return markdown;
}

function buildMarkdown() {
  let content = `# Crypto Tarot: Book of Meanings\n\n`;
  content += `*Generated ${new Date().toISOString()}*\n\n`;
  content += `---\n\n`;

  // Major Arcana
  content += `# Major Arcana\n\n`;
  for (const title of MAJOR_ORDER) {
    if (CARD_MEANINGS[title]) {
      content += formatCardMarkdown(title, CARD_MEANINGS[title]);
    }
  }

  // Minor Arcana
  content += `# Minor Arcana\n\n`;
  for (const suit of SUITS) {
    for (const rank of RANKS) {
      const title = `${rank} of ${suit}`;
      if (CARD_MEANINGS[title]) {
        content += formatCardMarkdown(title, CARD_MEANINGS[title]);
      }
    }
  }

  return content;
}

function main() {
  console.log('📝 Converting card meanings to Markdown...\n');

  const markdown = buildMarkdown();

  // Ensure output directory exists
  const outputDir = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(OUTPUT_FILE, markdown, 'utf8');

  console.log(`✅ Markdown file created: ${OUTPUT_FILE}`);
  console.log(`\n📖 Next step: Export to PDF using Pandoc`);
  console.log(`   Command: pandoc ${OUTPUT_FILE} -o crypto-tarot-book.pdf --pdf-engine=xelatex`);
}

main();
