#!/usr/bin/env node
/**
 * Quick QA script to validate fortune teller spread definitions.
 * Ensures card counts and position labels align, and the draw helper
 * returns unique position labels for each spread.
 */
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');

const { SPREAD_TYPES, drawCardsForSpread } = await import(
  url.pathToFileURL(path.join(projectRoot, 'js', 'spread-types.js'))
);

function buildMockDeck(size = 78) {
  return Array.from({ length: size }).map((_, idx) => ({
    id: `card-${idx}`,
    title: `Card ${idx + 1}`,
    type: idx < 22 ? 'Major' : 'Minor',
    suit: idx < 22 ? 'Major' : 'Tokens',
    img: `assets/cards/card-${idx + 1}.svg`,
  }));
}

function validateSpreadDefinitions() {
  const errors = [];
  for (const [key, spread] of Object.entries(SPREAD_TYPES)) {
    if (!spread.positions || spread.positions.length !== spread.cardCount) {
      errors.push(
        `Spread "${key}" mismatch: cardCount=${spread.cardCount} positions=${spread.positions?.length ?? 0}`
      );
    }
    const blanks = spread.positions?.filter(p => !p?.trim());
    if (blanks?.length) {
      errors.push(`Spread "${key}" has empty position labels.`);
    }
  }
  return errors;
}

function simulateDraws(iterations = 10) {
  const deck = buildMockDeck();
  const errors = [];

  for (const key of Object.keys(SPREAD_TYPES)) {
    for (let i = 0; i < iterations; i++) {
      const result = drawCardsForSpread(deck, key);
      const positions = result.map(card => card.position);
      if (result.length !== SPREAD_TYPES[key].cardCount) {
        errors.push(
          `Spread "${key}" returned ${result.length} cards (expected ${SPREAD_TYPES[key].cardCount}).`
        );
      }
      if (new Set(positions).size !== positions.length) {
        errors.push(`Spread "${key}" produced duplicate positions: ${positions.join(', ')}`);
      }
    }
  }

  return errors;
}

const definitionErrors = validateSpreadDefinitions();
const drawErrors = simulateDraws();

if (definitionErrors.length || drawErrors.length) {
  console.error('Spread QA failed:');
  definitionErrors.concat(drawErrors).forEach(err => console.error(' -', err));
  process.exitCode = 1;
} else {
  console.log('✔ Spread QA passed: definitions and draw flow look healthy.');
}
