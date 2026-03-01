/**
 * Import custom card images from tools/CryptoTarot1-78/
 * Organizes images and updates cardmap.json
 *
 * Usage: node scripts/utils/import-custom-images.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..', '..');

const SOURCE_DIR = path.join(projectRoot, 'tools', 'CryptoTarot1-78');
const CARDMAP_PATH = path.join(projectRoot, 'assets', 'cardmap.json');
const AI_GENERATED_DIR = path.join(projectRoot, 'assets', 'cards', 'ai-generated');

// Card titles matching the deck
const MAJOR_TITLES = [
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
const RANKS = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];
const COURTS = ['Page', 'Knight', 'Queen', 'King'];

function fileSafe(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function findCardImages(cardTitle, cardType) {
  const images = [];

  if (cardType === 'Major') {
    const baseName = `major-${fileSafe(cardTitle)}`;
    const pattern = new RegExp(
      `^${baseName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}-(\\d+)\\.jpg$`,
      'i'
    );

    const files = fs.readdirSync(SOURCE_DIR);
    files.forEach(file => {
      const match = file.match(pattern);
      if (match) {
        images.push({
          filename: file,
          variant: match[1],
          path: path.join(SOURCE_DIR, file),
        });
      }
    });
  } else if (cardType === 'Minor') {
    const [rank, suit] = cardTitle.split(' of ');
    const baseName = `minor-${fileSafe(rank)}-of-${fileSafe(suit)}`;
    const pattern = new RegExp(
      `^${baseName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}-(\\d+)\\.jpg$`,
      'i'
    );

    const files = fs.readdirSync(SOURCE_DIR);
    files.forEach(file => {
      const match = file.match(pattern);
      if (match) {
        images.push({
          filename: file,
          variant: match[1],
          path: path.join(SOURCE_DIR, file),
        });
      }
    });
  }

  // Sort by variant number
  images.sort((a, b) => parseInt(a.variant) - parseInt(b.variant));

  return images;
}

function organizeImages() {
  console.log('Organizing custom card images...\n');

  // Ensure ai-generated directory exists
  if (!fs.existsSync(AI_GENERATED_DIR)) {
    fs.mkdirSync(AI_GENERATED_DIR, { recursive: true });
  }

  let totalImages = 0;
  let organizedCount = 0;

  // Process Major Arcana
  MAJOR_TITLES.forEach(title => {
    const images = findCardImages(title, 'Major');
    if (images.length > 0) {
      const cardDir = path.join(AI_GENERATED_DIR, fileSafe(title));
      if (!fs.existsSync(cardDir)) {
        fs.mkdirSync(cardDir, { recursive: true });
      }

      images.forEach((img, index) => {
        const destPath = path.join(cardDir, `v${index + 1}.jpg`);
        if (!fs.existsSync(destPath)) {
          fs.copyFileSync(img.path, destPath);
          organizedCount++;
        }
        totalImages++;
      });

      console.log(`✓ ${title}: ${images.length} variant(s)`);
    }
  });

  // Process Minor Arcana
  SUITS.forEach(suit => {
    [...RANKS, ...COURTS].forEach(rank => {
      const title = `${rank} of ${suit}`;
      const images = findCardImages(title, 'Minor');
      if (images.length > 0) {
        const cardDir = path.join(AI_GENERATED_DIR, fileSafe(title));
        if (!fs.existsSync(cardDir)) {
          fs.mkdirSync(cardDir, { recursive: true });
        }

        images.forEach((img, index) => {
          const destPath = path.join(cardDir, `v${index + 1}.jpg`);
          if (!fs.existsSync(destPath)) {
            fs.copyFileSync(img.path, destPath);
            organizedCount++;
          }
          totalImages++;
        });

        console.log(`✓ ${title}: ${images.length} variant(s)`);
      }
    });
  });

  console.log(`\n✅ Organized ${organizedCount} new images`);
  console.log(`📊 Total images found: ${totalImages}`);

  // Update cardmap
  console.log('\n📝 Updating cardmap.json...');
  console.log('   Run: npm run update:cardmap');
}

// Main execution
try {
  if (!fs.existsSync(SOURCE_DIR)) {
    console.error(`❌ Source directory not found: ${SOURCE_DIR}`);
    process.exit(1);
  }

  organizeImages();
  console.log('\n✅ Image import complete!');
} catch (error) {
  console.error('❌ Error importing images:', error);
  process.exit(1);
}
