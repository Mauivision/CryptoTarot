// Normalize filenames in tools/CryptoTarot1-78 to match deck slug conventions
// Usage: node scripts/rename-crypto-images.js

const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '..', 'tools', 'CryptoTarot1-78');
const meaningsFile = path.join(__dirname, '..', 'data', 'card-meanings.js');

function fileSafe(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function loadCardTitles() {
  try {
    const fileContent = fs.readFileSync(meaningsFile, 'utf8');
    const exportMarker = 'export const CARD_MEANINGS = ';
    const idx = fileContent.indexOf(exportMarker);
    if (idx === -1) return [];
    const objStart = fileContent.indexOf('{', idx);
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
    const data = eval('(' + objCode + ')');
    return Object.keys(data || {});
  } catch {
    return [];
  }
}

const CARD_TITLES = loadCardTitles();
const TITLE_LOOKUP = CARD_TITLES.map(title => ({
  title,
  key: title.toLowerCase().replace(/[^a-z0-9]+/g, ''),
}));

const MANUAL_OVERRIDES = new Map([
  ['5e42f159-60b3-4a1d-ad31-8649d9f3e8d2', 'Queen of Liquidity'],
  ['6b041bc9-24c6-44c9-bc5a-df0c877f640e (1)', 'The Oracle'],
  ['993cf30b-03fe-4b67-b1a7-a32119aa977c (1)', 'The Miner'],
  ['02879d06-ad11-4ebe-a21a-0aaab500fc60', 'Nine of Security'],
  ['0316a2dc-1c75-4b6f-9fc3-2b20d37423fc', 'Eight of Tokens'],
  ['0683cf16-60b4-43ca-8d32-b7b6f0f8947a', 'Knight of Liquidity'],
  ['0a77c430-5882-4950-ac2e-ac763c773ebd', 'Ace of Liquidity'],
  ['168395b4-ae66-4e60-a75b-04adfc24febb', 'Justice Ledger'],
  ['169ad497-b611-439e-908e-a0627682df90', 'Nine of Liquidity'],
  ['193e427e-b063-4504-8d8c-91a292eb1b8c', 'Strength HODL'],
  ['2051a921-b943-4f44-b988-64940ec15afc', 'The Hermit Dev'],
  ['276a2b85-17ab-4685-96f4-4c275e8890fd', 'Seven of Security'],
  ['289e42d2-8e14-4e17-b2da-30c3f36b123a', 'Ace of Liquidity'],
  ['303b990b-a8d2-4aaf-afaf-5febdff782bc', 'Ace of Tokens'],
  ['32775e61-cfc3-457c-8aab-b098690c87f8', 'King of Liquidity'],
  ['378f93c1-ce20-4824-bb00-e67a323cd3ec', 'Six of Tokens'],
  ['38d38ca7-6685-44dd-8ce5-058efbd695b2', 'Two of Liquidity'],
  ['43976662-e462-47bf-9c1f-be343c848368', 'The Empress Node'],
  ['44ba4c07-70e5-47af-9025-69573ba6dea3', 'The Chariot Pump'],
  ['480f47d1-3598-4117-934e-bf2e9c129022', 'Ace of Liquidity'],
  ['50a070e2-ac75-4c79-8573-cf820c4a088a', 'Judgment Halving'],
  ['51d7da75-e8aa-4a53-8854-886b3e677d2e', 'Ace of Liquidity'],
  ['53f7007b-77b2-4289-91f7-eb4704583447', 'The Lovers Fork'],
  ['55410d55-d9b3-427b-a7a3-be770af8c172', 'The Chariot Pump'],
  ['558efd56-c8d6-49a9-9234-901ebea0804a', 'The Empress Node'],
  ['61de6ac6-773b-4263-b429-50cdfdd8b1cd', 'Ten of Liquidity'],
  ['63104bcb-9bcd-4d9d-a533-cda5bc1b8f09', 'Two of Tokens'],
  ['6628e471-c6b0-4201-96b4-33678172bb1d', 'Four of Security'],
  ['6a125e6a-5f00-40e1-8541-afd00b581593', 'Two of Liquidity'],
  ['6b041bc9-24c6-44c9-bc5a-df0c877f640e', 'The Oracle'],
  ['6c5dfe6d-da82-4b37-a231-ce6e46429567', 'The World Ecosystem'],
  ['71267b7e-595e-498d-9fcc-fac9098b47c2', 'Six of Security'],
  ['736b14be-cdea-45c4-bfd9-a2d3fd025422', 'Six of Liquidity'],
  ['75aeb81d-c458-44d6-b8d8-c293a06ec722', 'The Hanged Man Flip'],
  ['7866649c-f6e3-4a52-acca-f58359374136', 'Page of Liquidity'],
  ['82431d98-ed3e-4207-b6ff-845e75c423e0', 'Knight of Liquidity'],
  ['85bf9f01-f3b6-49f8-944d-13dce005b5f6', 'Ace of Tokens'],
  ['8770d196-011a-4e51-8116-d3f1377d96b7', 'Nine of Security'],
  ['88c4061d-a981-4433-b30e-7a18116a5cb3', 'Eight of Security'],
  ['95969ca2-ec3f-47f5-b442-69078ab7688c', 'Judgment Halving'],
  ['993cf30b-03fe-4b67-b1a7-a32119aa977c', 'The Miner'],
  ['a10f1dfe-bf1b-4597-b82f-2620523c67c5', 'Five of Security'],
  ['a63be663-d350-4971-9518-37cbfcf7432e', 'Nine of Tokens'],
  ['a6c3f2e3-efdc-4588-95fc-56629ea87978', 'Seven of Liquidity'],
  ['a6ec7f38-12ab-4c79-9666-b3b0b4de3a82', 'Death Rug'],
  ['b0edfa45-90b5-4dbe-ba6c-d5e78438e586', 'The Hierophant Whale'],
  ['f12278f5-8bcf-4468-84cd-95670a480668', 'Five of Liquidity'],
  ['f80ded8a-f826-4a14-ad77-cd0ecbed888a', 'The Moon Illusion'],
  ['f849f715-8fc4-4384-bbd1-3dba50e55192', 'King of Liquidity'],
  ['f99c0bbc-a768-4fa8-8dc1-36f9fef3d62a', 'Page of Liquidity'],
  ['fad6e32b-0614-4d42-b39f-8ba240ea8e46', 'Six of Liquidity'],
  ['fb6b15b4-6afd-4aed-8923-640f9fe9333c', 'Seven of Security'],
  ['court-1', 'Court of Tokens'],
  ['image.jpg (1)', 'Court of Tokens'],
  ['image.jpg (2)', 'Justice Ledger'],
  ['11liquid', 'Ten of Liquidity'],
  ['ace-00', 'Ace of Liquidity'],
  ['aceofspades', 'Ace of Liquidity'],
  ['miner', 'The Miner'],
  ['judgment', 'Judgment Halving'],
  ['nineof', 'Nine of Tokens'],
  ['temerancemix', 'Temperance Mix'],
  ['tenofliquid-1', 'Ten of Liquidity'],
  ['theemporerchain', 'The Emperor Chain'],
  ['thehangedman-01', 'The Hanged Man Flip'],
  ['theworld-01', 'The World Ecosystem'],
  ['thehangedman', 'The Hanged Man Flip'],
  ['wheeloffortune-01', 'Wheel of Fortune Cycle'],
  ['wheeloffortune-1', 'Wheel of Fortune Cycle'],
  ['pageofliquidiity-01', 'Page of Liquidity'],
]);

const MANUAL_SANITIZED = new Map();
MANUAL_OVERRIDES.forEach((value, key) => {
  const sanitized = key.toLowerCase().replace(/[^a-z0-9]+/g, '');
  MANUAL_SANITIZED.set(sanitized, value);
});

function guessTitle(filename) {
  const rawBase = filename.replace(/\.(jpg|jpeg|png|webp)$/i, '');
  if (MANUAL_OVERRIDES.has(rawBase)) return MANUAL_OVERRIDES.get(rawBase);
  const base = filename
    .toLowerCase()
    .replace(/\.(jpg|jpeg|png|webp)$/i, '')
    .replace(/[^a-z0-9]+/g, '');
  if (MANUAL_OVERRIDES.has(base)) return MANUAL_OVERRIDES.get(base);
  if (MANUAL_SANITIZED.has(base)) return MANUAL_SANITIZED.get(base);
  // direct match
  for (const entry of TITLE_LOOKUP) {
    if (base.includes(entry.key)) return entry.title;
  }
  // handle extra shorthand
  if (base.startsWith('hodl')) return 'The HODLer';
  return null;
}

function slugFromTitle(title) {
  if (!title.includes(' of ')) {
    return `major-${fileSafe(title)}`;
  }
  const [rank, suit] = title.split(' of ');
  return `minor-${fileSafe(rank)}-of-${fileSafe(suit)}`;
}

function padVariant(n) {
  return String(n).padStart(2, '0');
}

function main() {
  if (!fs.existsSync(sourceDir)) {
    console.error('Source directory not found:', sourceDir);
    process.exit(1);
  }

  const files = fs
    .readdirSync(sourceDir)
    .filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f))
    .sort((a, b) => a.localeCompare(b));

  const slugCounts = new Map();
  const operations = [];
  const missed = [];

  // Pre-populate counts with existing canonical filenames
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    const base = path.basename(file, ext);
    const canonMatch = base.match(/^(major|minor|reference|guide|court)-.+-(\d{2})$/);
    if (canonMatch) {
      const slug = base.replace(/-\d{2}$/, '');
      const variant = parseInt(canonMatch[2], 10);
      const current = slugCounts.get(slug) || 0;
      if (variant > current) slugCounts.set(slug, variant);
    }
  }

  for (const file of files) {
    const title = guessTitle(file);
    if (!title) {
      const ext = path.extname(file).toLowerCase();
      const base = path.basename(file, ext);
      if (/^(major|minor|reference|guide|court)-.+-\d{2}$/i.test(base)) {
        continue; // already in canonical format, no action needed
      }
      missed.push(file);
      continue;
    }

    const slug = slugFromTitle(title);
    const count = (slugCounts.get(slug) || 0) + 1;
    slugCounts.set(slug, count);
    const ext = path.extname(file).toLowerCase() || '.jpg';
    const newName = `${slug}-${padVariant(count)}${ext}`;

    if (newName === file) continue;
    operations.push({ from: file, to: newName });
  }

  // Detect collisions
  const targets = new Set();
  for (const op of operations) {
    if (targets.has(op.to)) {
      console.error('Collision detected for target filename:', op.to);
      process.exit(1);
    }
    targets.add(op.to);
  }

  // Rename using temporary names to avoid conflicts
  operations.forEach((op, idx) => {
    const tmp = `${op.to}.renaming-${idx}`;
    fs.renameSync(path.join(sourceDir, op.from), path.join(sourceDir, tmp));
    op.tmp = tmp;
  });

  operations.forEach(op => {
    fs.renameSync(path.join(sourceDir, op.tmp), path.join(sourceDir, op.to));
  });

  console.log(`Renamed ${operations.length} files in ${sourceDir}`);
  if (missed.length) {
    console.log('Unmatched files (please review manually):');
    missed.forEach(f => console.log(' -', f));
  }
}

main();
