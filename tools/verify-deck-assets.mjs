#!/usr/bin/env node
/**
 * Verifies that all Crypto Tarot cards have corresponding metadata and assets.
 *
 * Checks:
 *   1. Deck size = 78 unique cards.
 *   2. Every card has a matching SVG asset in assets/cards/.
 *   3. Every card title exists in CARD_MEANINGS (or reports missing entries).
 *   4. Spread definitions have matching cardCount and position labels.
 *
 * Usage:
 *   node tools/verify-deck-assets.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');

const dataPath = path.resolve(projectRoot, 'data', 'card-meanings.js');
const spreadPath = path.resolve(projectRoot, 'js', 'spread-types.js');
const assetsDir = path.resolve(projectRoot, 'assets', 'cards');

let CARD_MEANINGS = {};
let SPREAD_TYPES = {};

async function loadCardData() {
  try {
    const module = await import(url.pathToFileURL(dataPath));
    CARD_MEANINGS = module.CARD_MEANINGS || {};
  } catch (error) {
    throw new Error(`Failed to import card meanings from ${dataPath}: ${error.message}`);
  }
}

async function loadSpreadTypes() {
  try {
    const module = await import(url.pathToFileURL(spreadPath));
    SPREAD_TYPES = module.SPREAD_TYPES || {};
  } catch (error) {
    throw new Error(`Failed to import spread definitions from ${spreadPath}: ${error.message}`);
  }
}

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

function buildDeck() {
  const cards = [];
  MAJOR_TITLES.forEach(title => {
    cards.push({
      id: `major-${fileSafe(title)}`,
      title,
      type: 'Major',
      suit: 'Major',
      asset: path.join(assetsDir, `major-${fileSafe(title)}.svg`),
    });
  });

  SUITS.forEach(suit => {
    RANKS.forEach(rank => {
      const title = `${rank} of ${suit}`;
      cards.push({
        id: `minor-${fileSafe(title)}`,
        title,
        type: 'Minor',
        suit,
        asset: path.join(assetsDir, `minor-${fileSafe(title)}.svg`),
      });
    });
    COURTS.forEach(court => {
      const title = `${court} of ${suit}`;
      cards.push({
        id: `minor-${fileSafe(title)}`,
        title,
        type: 'Minor',
        suit,
        asset: path.join(assetsDir, `minor-${fileSafe(title)}.svg`),
      });
    });
  });

  return cards;
}

function verifyDeck(deck) {
  const issues = [];
  const titleSet = new Set();

  if (deck.length !== 78) {
    issues.push(`Deck size expected 78, found ${deck.length}.`);
  }

  deck.forEach(card => {
    if (titleSet.has(card.title)) {
      issues.push(`Duplicate card detected: ${card.title} (${card.id}).`);
    } else {
      titleSet.add(card.title);
    }

    if (!fs.existsSync(card.asset)) {
      issues.push(`Missing asset: ${path.relative(projectRoot, card.asset)}`);
    }

    if (!CARD_MEANINGS[card.title]) {
      issues.push(`Missing card metadata in CARD_MEANINGS: "${card.title}"`);
    }
  });

  return issues;
}

function verifySpreads() {
  const issues = [];
  const entries = Object.entries(SPREAD_TYPES);

  if (entries.length === 0) {
    issues.push('No spreads defined in SPREAD_TYPES.');
    return issues;
  }

  entries.forEach(([key, spread]) => {
    if (!spread.cardCount || !Array.isArray(spread.positions)) {
      issues.push(`Spread "${key}" missing cardCount or positions array.`);
      return;
    }

    if (spread.positions.length !== spread.cardCount) {
      issues.push(
        `Spread "${key}" mismatch: cardCount=${spread.cardCount} but positions length=${spread.positions.length}.`
      );
    }

    const emptyLabels = spread.positions.filter(p => !p || typeof p !== 'string');
    if (emptyLabels.length > 0) {
      issues.push(`Spread "${key}" has empty/invalid position labels: ${emptyLabels.join(', ')}`);
    }
  });

  return issues;
}

async function main() {
  try {
    await loadCardData();
    await loadSpreadTypes();
  } catch (error) {
    console.error('✖', error.message);
    process.exitCode = 1;
    return;
  }

  const deck = buildDeck();
  const deckIssues = verifyDeck(deck);
  const spreadIssues = verifySpreads();

  if (deckIssues.length || spreadIssues.length) {
    console.error('✖ Verification failed:');
    deckIssues.forEach(issue => console.error('  -', issue));
    spreadIssues.forEach(issue => console.error('  -', issue));
    process.exitCode = 1;
    return;
  }

  console.log('✔ All cards and spreads verified successfully.');
  console.log(`  • Deck size: ${deck.length} unique cards`);
  console.log(`  • Card meanings loaded: ${Object.keys(CARD_MEANINGS).length}`);
  console.log(`  • Spreads available: ${Object.keys(SPREAD_TYPES).length}`);
}

main();
