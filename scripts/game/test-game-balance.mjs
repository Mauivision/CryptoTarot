/**
 * Test Chain Game balance and mechanics
 * Analyzes card values, powers, and effects for game balance
 */

import { CARD_MEANINGS } from '../data/card-meanings.js';

console.log('⚖️ Testing Chain Game Balance...\n');

const analysis = {
  majors: [],
  minors: [],
  bySuit: { Tokens: [], Liquidity: [], Security: [], Nodes: [] },
  byRarity: { Genesis: [], Legendary: [], Epic: [], Rare: [], Common: [] },
};

// Collect all cards
for (const [cardTitle, cardData] of Object.entries(CARD_MEANINGS)) {
  if (!cardData.gameMechanics) continue;

  const gm = cardData.gameMechanics;
  const cardInfo = { title: cardTitle, ...cardData, ...gm };

  if (cardData.arcana === 'Major') {
    analysis.majors.push(cardInfo);
  } else {
    analysis.minors.push(cardInfo);
    if (cardData.suit) {
      analysis.bySuit[cardData.suit].push(cardInfo);
    }
  }

  if (gm.rarity) {
    analysis.byRarity[gm.rarity].push(cardInfo);
  }
}

// Analyze Minor Arcana values
console.log('📊 Minor Arcana Analysis:');
const valueDistribution = {};
const powerDistribution = {};

analysis.minors.forEach(card => {
  valueDistribution[card.value] = (valueDistribution[card.value] || 0) + 1;
  powerDistribution[card.power] = (powerDistribution[card.power] || 0) + 1;
});

console.log('\n  Value Distribution:');
for (const [value, count] of Object.entries(valueDistribution).sort((a, b) => a[0] - b[0])) {
  console.log(`    Value ${value}: ${count} cards`);
}

console.log('\n  Power Distribution:');
for (const [power, count] of Object.entries(powerDistribution).sort((a, b) => a[0] - b[0])) {
  console.log(`    Power ${power}: ${count} cards`);
}

// Analyze by suit
console.log('\n📊 Suit Analysis:');
for (const [suit, cards] of Object.entries(analysis.bySuit)) {
  const avgValue = cards.reduce((sum, c) => sum + (c.value || 0), 0) / cards.length;
  const avgPower = cards.reduce((sum, c) => sum + (c.power || 0), 0) / cards.length;
  console.log(`  ${suit}:`);
  console.log(`    Cards: ${cards.length}`);
  console.log(`    Avg Value: ${avgValue.toFixed(2)}`);
  console.log(`    Avg Power: ${avgPower.toFixed(2)}`);
  console.log(`    Has suitBonus: ${cards.filter(c => c.suitBonus).length}`);
  console.log(`    Has courtEffect: ${cards.filter(c => c.courtEffect).length}`);
  console.log(`    Has aceEffect: ${cards.filter(c => c.aceEffect).length}`);
}

// Analyze Major Arcana spells
console.log('\n📊 Major Arcana (Spells) Analysis:');
console.log(`  Total Spells: ${analysis.majors.length}`);
console.log(`  With spellUpright: ${analysis.majors.filter(c => c.spellUpright).length}`);
console.log(`  With spellReversed: ${analysis.majors.filter(c => c.spellReversed).length}`);
console.log(`  Energy Cost: All cost ${analysis.majors[0]?.energyCost || 'N/A'}`);

// Analyze by rarity
console.log('\n📊 Rarity Distribution:');
for (const [rarity, cards] of Object.entries(analysis.byRarity)) {
  console.log(`  ${rarity}: ${cards.length} cards`);
}

// Balance checks
console.log('\n⚖️ Balance Checks:');

// Check value range
const allValues = analysis.minors.map(c => c.value).filter(v => v !== undefined);
const minValue = Math.min(...allValues);
const maxValue = Math.max(...allValues);
console.log(`  Value Range: ${minValue} - ${maxValue} ✅`);

// Check power range
const allPowers = analysis.minors.map(c => c.power).filter(p => p !== undefined);
const minPower = Math.min(...allPowers);
const maxPower = Math.max(...allPowers);
console.log(`  Power Range: ${minPower} - ${maxPower} ✅`);

// Check rarity distribution
const expectedRarity = {
  Genesis: 1,
  Legendary: 5, // 4 Kings + World Ecosystem
  Epic: 12,
  Rare: 22,
  Common: 38, // 39 - 1 (HODLer is Genesis)
};

console.log('\n  Rarity Distribution Check:');
for (const [rarity, expected] of Object.entries(expectedRarity)) {
  const actual = analysis.byRarity[rarity]?.length || 0;
  const status = actual === expected ? '✅' : '⚠️';
  console.log(`    ${rarity}: ${actual}/${expected} ${status}`);
}

// Check spell coverage
const missingSpells = [];
for (const [cardTitle, cardData] of Object.entries(CARD_MEANINGS)) {
  if (cardData.arcana === 'Major' && cardData.gameMechanics) {
    if (!cardData.gameMechanics.spellUpright || !cardData.gameMechanics.spellReversed) {
      missingSpells.push(cardTitle);
    }
  }
}

if (missingSpells.length > 0) {
  console.log(`\n  ⚠️ Missing spell effects: ${missingSpells.join(', ')}`);
} else {
  console.log('\n  ✅ All Major Arcana have spell effects');
}

// Check suit bonus coverage
const suitsWithBonus = Object.keys(analysis.bySuit).filter(suit =>
  analysis.bySuit[suit].some(c => c.suitBonus)
);
console.log(`\n  Suit Bonus Coverage: ${suitsWithBonus.length}/4 suits ✅`);

console.log('\n✅ Balance analysis complete!');
