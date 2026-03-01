// Import and normalize custom images from tools/CryptoTarot1-78 into assets/cards/ai-generated
// Usage: node scripts/import-custom-images.js

const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '..', 'tools', 'CryptoTarot1-78');
const targetRoot = path.join(__dirname, '..', 'assets', 'cards', 'ai-generated');
const cardmapFile = path.join(__dirname, '..', 'assets', 'cardmap.json');

function ensureDir(p) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

function fileSafe(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// Normalize various filename typos to canonical titles
const TITLE_FIXES = new Map([
  ['theemperorchain', 'The Emperor Chain'],
  ['theemporerchain', 'The Emperor Chain'],
  ['thehierophantwhale', 'The Hierophant Whale'],
  ['theloversfork', 'The Lovers Fork'],
  ['thetowerhack', 'The Tower Hack'],
  ['thesunbull', 'The Sun Bull'],
  ['theworldecosystem', 'The World Ecosystem'],
  ['thehermitdev', 'The Hermit Dev'],
  ['judgment', 'Judgment Halving'],
  ['temperancemix', 'Temperance Mix'],
  ['thehodler', 'The HODLer'],
  ['hodl', 'The HODLer'],
  ['fiveoftokens', 'Five of Tokens'],
  ['threeoftokens', 'Three of Tokens'],
]);

function guessTitleFromName(name) {
  const base = name
    .toLowerCase()
    .replace(/\.(jpg|jpeg|png|webp)$/, '')
    .replace(/[^a-z0-9]+/g, '');
  // Direct fixes first
  if (TITLE_FIXES.has(base)) return TITLE_FIXES.get(base);
  // Heuristics for Major
  const majors = [
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
  for (const t of majors) {
    const key = t.toLowerCase().replace(/[^a-z0-9]+/g, '');
    if (base.includes(key)) return t;
  }
  // Heuristics for Minor
  const suits = ['Tokens', 'Liquidity', 'Security', 'Nodes'];
  const ranks = [
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
  for (const suit of suits) {
    const suitKey = suit.toLowerCase();
    if (base.includes(suitKey)) {
      for (const rank of ranks) {
        const rankKey = rank.toLowerCase();
        if (base.includes(rankKey)) return `${rank} of ${suit}`;
      }
    }
  }
  // Fallbacks for short names
  if (base.startsWith('hodl')) return 'The HODLer';
  return null;
}

function main() {
  if (!fs.existsSync(sourceDir)) {
    console.error('Source folder not found:', sourceDir);
    process.exit(1);
  }
  ensureDir(targetRoot);

  const files = fs.readdirSync(sourceDir).filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f));
  const imported = [];
  const unresolved = [];

  // Load existing cardmap if present
  let cardmap = { generatedAt: '', totalCards: 0, cards: [] };
  try {
    if (fs.existsSync(cardmapFile)) {
      cardmap = JSON.parse(fs.readFileSync(cardmapFile, 'utf8'));
    }
  } catch {}

  const titleToVariants = new Map(cardmap.cards?.map(c => [c.title, c.variants]) || []);

  for (const f of files) {
    const abs = path.join(sourceDir, f);
    const title =
      guessTitleFromName(f) || guessTitleFromName(path.basename(f).replace(/\([^\)]*\)/g, ''));
    if (!title) {
      unresolved.push(f);
      continue;
    }
    const slug = fileSafe(title);
    const targetDir = path.join(targetRoot, slug);
    ensureDir(targetDir);
    // Determine next variant number
    const existing = fs.readdirSync(targetDir).filter(x => /\.(jpg|jpeg|png|webp)$/i.test(x));
    const next = existing.length + 1;
    const ext = path.extname(f).toLowerCase() || '.jpg';
    const dest = path.join(targetDir, `v${next}${ext}`);
    fs.copyFileSync(abs, dest);
    imported.push({
      title,
      from: f,
      to: path.relative(path.join(__dirname, '..'), dest).replace(/\\/g, '/'),
    });
    const rel = imported[imported.length - 1].to;
    const list = titleToVariants.get(title) || [];
    if (!list.includes(rel)) list.push(rel);
    titleToVariants.set(title, list);
  }

  // Rebuild cardmap
  const entries = Array.from(titleToVariants.entries()).map(([title, variants]) => ({
    title,
    variants: variants.sort(),
  }));
  // Sort: major first then by suit/rank
  function sortBySuitAndRank(arr) {
    const order = { major: 0, Tokens: 1, Liquidity: 2, Security: 3, Nodes: 4 };
    const rankOrder = {
      Ace: 1,
      Two: 2,
      Three: 3,
      Four: 4,
      Five: 5,
      Six: 6,
      Seven: 7,
      Eight: 8,
      Nine: 9,
      Ten: 10,
      Page: 11,
      Knight: 12,
      Queen: 13,
      King: 14,
    };
    return arr.sort((a, b) => {
      const [ar, as] = a.title.includes(' of ') ? a.title.split(' of ') : [null, null];
      const [br, bs] = b.title.includes(' of ') ? b.title.split(' of ') : [null, null];
      const aMajor = !as,
        bMajor = !bs;
      if (aMajor && bMajor) return a.title.localeCompare(b.title);
      if (aMajor !== bMajor) return aMajor ? -1 : 1;
      const sc = (order[as] ?? 99) - (order[bs] ?? 99);
      if (sc !== 0) return sc;
      return (rankOrder[ar] ?? 99) - (rankOrder[br] ?? 99);
    });
  }
  const sorted = sortBySuitAndRank(entries);
  const out = { generatedAt: new Date().toISOString(), totalCards: sorted.length, cards: sorted };
  fs.writeFileSync(cardmapFile, JSON.stringify(out, null, 2), 'utf8');

  console.log(`Imported ${imported.length} images to ${targetRoot}`);
  if (unresolved.length) {
    console.log('Unresolved filenames (needs manual rename or mapping):');
    unresolved.forEach(x => console.log(' -', x));
  }
}

main();
