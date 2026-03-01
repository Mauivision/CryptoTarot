import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { CARD_MEANINGS } from '../data/card-meanings.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUTPUT_DIR = path.join(__dirname, 'cards');
const TEMPLATE_PATH = path.join(__dirname, 'template.json');
const DEFAULT_IPFS_HASH = 'QmYourIPFSHashHere';
const DEFAULT_CREATOR = 'YOUR_WALLET_HERE';

const IPFS_HASH = process.env.IPFS_HASH || DEFAULT_IPFS_HASH;
const CREATOR_WALLET = process.env.CREATOR_WALLET || DEFAULT_CREATOR;

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function loadTemplate() {
  return fs.readFileSync(TEMPLATE_PATH, 'utf8');
}

function fillTemplate(template, replacements) {
  return Object.entries(replacements).reduce(
    (acc, [key, value]) => acc.replace(new RegExp(`{{${key}}}`, 'g'), value),
    template
  );
}

function buildTraits(baseAttributes, card, title) {
  const attributes = Array.isArray(baseAttributes) ? [...baseAttributes] : [];

  const pushTrait = (trait, value) => {
    if (value !== undefined && value !== null && value !== '') {
      attributes.push({ trait_type: trait, value });
    }
  };

  pushTrait('Arcana', card.arcana);
  pushTrait('Suit', card.suit);
  pushTrait('Rank', card.rank);
  pushTrait('Role', card.role);
  pushTrait('Planet', card.cosmicRuler || card.planet);
  pushTrait('Numerology', typeof card.number === 'number' ? card.number : undefined);
  pushTrait('Upright', card.upright);
  pushTrait('Reversed', card.reversed);
  pushTrait('Crypto Flavor', card.cryptoFlavor);
  pushTrait('Cosmic Summary', card.cosmicSummary);
  pushTrait('Title', title);

  return attributes;
}

function buildMetadataEntries() {
  return Object.entries(CARD_MEANINGS).map(([title, data], index) => {
    const id = index + 1;
    const slug = slugify(title);

    const replacements = {
      id: String(id),
      slug,
      ipfs_hash: IPFS_HASH,
      creator_wallet: CREATOR_WALLET,
    };

    return { id, slug, title, data, replacements };
  });
}

function writeMetadataFiles(template) {
  ensureDir(OUTPUT_DIR);

  const entries = buildMetadataEntries();

  entries.forEach(({ id, slug, title, data, replacements }) => {
    const filled = fillTemplate(template, replacements);
    const meta = JSON.parse(filled);

    meta.attributes = buildTraits(meta.attributes, data, title);

    const filePath = path.join(OUTPUT_DIR, `${String(id).padStart(2, '0')}-${slug}.json`);
    fs.writeFileSync(filePath, JSON.stringify(meta, null, 2), 'utf8');
  });

  console.log(`✅ Generated ${entries.length} NFT metadata files in ${OUTPUT_DIR}`);
  console.log(`   IPFS hash: ${IPFS_HASH}`);
  console.log(`   Creator wallet: ${CREATOR_WALLET}`);
}

function main() {
  if (!fs.existsSync(TEMPLATE_PATH)) {
    console.error(`Template not found at ${TEMPLATE_PATH}`);
    process.exit(1);
  }

  const template = loadTemplate();
  writeMetadataFiles(template);
}

main();
