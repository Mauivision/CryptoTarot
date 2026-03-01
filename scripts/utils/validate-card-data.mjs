#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const projectRoot = path.resolve(url.fileURLToPath(new URL('../../', import.meta.url)));
const dataPath = path.join(projectRoot, 'data', 'card-meanings.js');
const cardmapPath = path.join(projectRoot, 'assets', 'cardmap.json');
const aiDir = path.join(projectRoot, 'assets', 'cards', 'ai-generated');
const ctDir = path.join(projectRoot, 'tools', 'CryptoTarot1-78');

function toFileUrl(p) {
  return url.pathToFileURL(p).href;
}

function readJsonSafe(p) {
  try {
    const raw = fs.readFileSync(p, 'utf8');
    return JSON.parse(raw);
  } catch (e) {
    return null;
  }
}

function hasImageForTitle(title, cardmap) {
  // Prefer cardmap variants if present
  const entry = (cardmap?.cards || []).find(c => c.title === title);
  if (entry && Array.isArray(entry.variants) && entry.variants.length > 0) {
    // Check first variant exists on disk
    const rel = entry.variants[0];
    const p = path.join(projectRoot, rel);
    return fs.existsSync(p);
  }
  // Fallback: check ai-generated dir and CryptoTarot1-78 by heuristics
  const safe = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
  // Major: major-the-hodler-*.jpg
  // Minor: minor-ace-of-tokens-*.jpg
  const isMajor = !title.includes(' of ');
  if (isMajor) {
    const base = `major-${safe}-`;
    const found = fs.readdirSync(ctDir).some(f => f.startsWith(base) && f.endsWith('.jpg'));
    return found;
  } else {
    const [rank, suit] = title.split(' of ');
    const dirName = `${rank.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-of-${suit.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
    const aiPathV1 = path.join(aiDir, dirName, 'v1.jpg');
    if (fs.existsSync(aiPathV1)) return true;
    const base = `minor-${rank.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-of-${suit.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-`;
    const found = fs.readdirSync(ctDir).some(f => f.startsWith(base) && f.endsWith('.jpg'));
    return found;
  }
}

async function main() {
  let failures = 0;
  // Attempt to import data module
  let CARD_MEANINGS;
  try {
    const mod = await import(toFileUrl(dataPath));
    CARD_MEANINGS = mod.CARD_MEANINGS;
  } catch (e) {
    console.error('❌ Failed to import data/card-meanings.js:', e.message);
    process.exit(1);
  }

  if (!CARD_MEANINGS || typeof CARD_MEANINGS !== 'object') {
    console.error('❌ CARD_MEANINGS not found or invalid.');
    process.exit(1);
  }

  const cardmap = readJsonSafe(cardmapPath);

  const requiredBase = ['upright', 'reversed'];
  const gmMajReq = ['rarity', 'spellUpright', 'spellReversed', 'energyCost', 'type'];
  const gmMinReq = ['rarity', 'value', 'power', 'type', 'suitBonus'];

  for (const [title, meta] of Object.entries(CARD_MEANINGS)) {
    // Base fields
    for (const k of requiredBase) {
      if (!(k in meta)) {
        console.error(`❌ Missing base field "${k}" in "${title}"`);
        failures++;
      }
    }
    // Game mechanics (optional but recommended)
    if (meta.gameMechanics) {
      const isMajor = (meta.type || '').toLowerCase() === 'major' || !title.includes(' of ');
      const req = isMajor ? gmMajReq : gmMinReq;
      for (const k of req) {
        if (!(k in meta.gameMechanics)) {
          console.error(`❌ Missing gameMechanics.${k} in "${title}"`);
          failures++;
        }
      }
    }
    // Image existence (best-effort)
    const okImg = hasImageForTitle(title, cardmap);
    if (!okImg) {
      console.warn(`⚠️  No image file found for "${title}" in ai-generated/ or CryptoTarot1-78/`);
    }
  }

  if (failures > 0) {
    console.error(`\n❌ Data validation failed with ${failures} issue(s).`);
    process.exit(2);
  }
  console.log('✅ Data validation passed.');
}

main().catch(err => {
  console.error('❌ Validation runtime error:', err);
  process.exit(1);
});
