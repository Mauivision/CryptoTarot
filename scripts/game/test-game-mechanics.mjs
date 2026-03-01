/**
 * Test Chain Game mechanics for all 78 cards
 * Validates game properties, effects, and balance
 */

import { CARD_MEANINGS } from '../data/card-meanings.js';

console.log('🧪 Testing Chain Game Mechanics...\n');

const errors = [];
const warnings = [];
const stats = {
  total: 0,
  majors: 0,
  minors: 0,
  withGameMech: 0,
  missingGameMech: 0,
  byRarity: {},
  byType: {},
};

// Test each card
for (const [cardTitle, cardData] of Object.entries(CARD_MEANINGS)) {
  stats.total++;

  if (cardData.arcana === 'Major') {
    stats.majors++;
  } else {
    stats.minors++;
  }

  // Check if gameMechanics exists
  if (!cardData.gameMechanics) {
    errors.push(`❌ ${cardTitle}: Missing gameMechanics`);
    stats.missingGameMech++;
    continue;
  }

  stats.withGameMech++;
  const gm = cardData.gameMechanics;

  // Validate rarity
  if (!gm.rarity) {
    errors.push(`❌ ${cardTitle}: Missing rarity`);
  } else {
    stats.byRarity[gm.rarity] = (stats.byRarity[gm.rarity] || 0) + 1;
  }

  // Validate type
  if (!gm.type) {
    errors.push(`❌ ${cardTitle}: Missing type`);
  } else {
    stats.byType[gm.type] = (stats.byType[gm.type] || 0) + 1;
  }

  if (cardData.arcana === 'Major') {
    // Major Arcana validation
    if (!gm.spellUpright) {
      errors.push(`❌ ${cardTitle}: Missing spellUpright`);
    }
    if (!gm.spellReversed) {
      errors.push(`❌ ${cardTitle}: Missing spellReversed`);
    }
    if (gm.energyCost === undefined) {
      errors.push(`❌ ${cardTitle}: Missing energyCost`);
    }
    if (gm.type !== 'spell') {
      errors.push(`❌ ${cardTitle}: Type should be 'spell' for Major Arcana`);
    }
  } else {
    // Minor Arcana validation
    if (gm.value === undefined) {
      errors.push(`❌ ${cardTitle}: Missing value`);
    }
    if (gm.power === undefined) {
      errors.push(`❌ ${cardTitle}: Missing power`);
    }
    if (gm.type !== 'unit') {
      errors.push(`❌ ${cardTitle}: Type should be 'unit' for Minor Arcana`);
    }

    // Check suit bonus
    if (!gm.suitBonus && cardData.suit) {
      warnings.push(`⚠️ ${cardTitle}: Missing suitBonus (has suit: ${cardData.suit})`);
    }

    // Check court/ace effects
    if (cardData.rank === 'Ace' && !gm.aceEffect) {
      warnings.push(`⚠️ ${cardTitle}: Missing aceEffect`);
    }
    if (['Page', 'Knight', 'Queen', 'King'].includes(cardData.rank) && !gm.courtEffect) {
      warnings.push(`⚠️ ${cardTitle}: Missing courtEffect (rank: ${cardData.rank})`);
    }

    // Validate value/power relationship
    if (gm.value !== gm.power) {
      warnings.push(
        `⚠️ ${cardTitle}: Value (${gm.value}) != Power (${gm.power}) - may be intentional`
      );
    }
  }
}

// Print results
console.log('📊 Statistics:');
console.log(`  Total cards: ${stats.total}`);
console.log(`  Major Arcana: ${stats.majors}`);
console.log(`  Minor Arcana: ${stats.minors}`);
console.log(`  With gameMechanics: ${stats.withGameMech}`);
console.log(`  Missing gameMechanics: ${stats.missingGameMech}`);
console.log('\n📈 By Rarity:');
for (const [rarity, count] of Object.entries(stats.byRarity)) {
  console.log(`  ${rarity}: ${count}`);
}
console.log('\n📈 By Type:');
for (const [type, count] of Object.entries(stats.byType)) {
  console.log(`  ${type}: ${count}`);
}

if (warnings.length > 0) {
  console.log(`\n⚠️ Warnings (${warnings.length}):`);
  warnings.slice(0, 10).forEach(w => console.log(`  ${w}`));
  if (warnings.length > 10) {
    console.log(`  ... and ${warnings.length - 10} more warnings`);
  }
}

if (errors.length > 0) {
  console.log(`\n❌ Errors (${errors.length}):`);
  errors.forEach(e => console.log(`  ${e}`));
  console.log('\n❌ Game mechanics validation FAILED');
  process.exit(1);
} else {
  console.log('\n✅ All game mechanics validated successfully!');
  console.log('🎮 Cards are ready for Chain Game!');
}
