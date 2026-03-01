/**
 * Add Chain Game mechanics to all 78 cards
 * Adds: value, power, suit bonuses, spell effects, rarity, etc.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CARD_MEANINGS_PATH = path.join(__dirname, '..', 'data', 'card-meanings.js');

// Game mechanics definitions from chain-game/REFERENCE.md
const MAJOR_SPELL_EFFECTS = {
  'The HODLer': {
    spellUpright: 'Steal 1 block + 1 Life',
    spellReversed: 'Draw 2 cards',
    rarity: 'Genesis',
  },
  'The Miner': {
    spellUpright: 'Play extra minor free',
    spellReversed: '+2 power next battle',
    rarity: 'Common',
  },
  'The Oracle': {
    spellUpright: 'Reveal opponent hand (1 turn)',
    spellReversed: 'Peek top 3 deck cards',
    rarity: 'Common',
  },
  'The Empress Node': {
    spellUpright: 'Rally 2 minors',
    spellReversed: 'Heal 3 Life',
    rarity: 'Epic',
  },
  'The Emperor Chain': {
    spellUpright: 'Lock opponent marches (1 turn)',
    spellReversed: 'Gain 1 extra action',
    rarity: 'Epic',
  },
  'The Hierophant Whale': {
    spellUpright: "Copy opponent's last minor",
    spellReversed: 'All discard 1',
    rarity: 'Rare',
  },
  'The Lovers Fork': {
    spellUpright: 'Merge 2 of your chains',
    spellReversed: 'Split opponent chain (-2 blocks)',
    rarity: 'Rare',
  },
  'The Chariot Pump': {
    spellUpright: 'March all units forward',
    spellReversed: '+3 power to army',
    rarity: 'Rare',
  },
  'Strength HODL': {
    spellUpright: 'Negate opponent spell',
    spellReversed: 'Protect block for 1 battle',
    rarity: 'Rare',
  },
  'The Hermit Dev': {
    spellUpright: 'Draw 3 cards',
    spellReversed: 'Opponent skips draw',
    rarity: 'Rare',
  },
  'Wheel of Fortune Cycle': {
    spellUpright: 'Shuffle discard into deck',
    spellReversed: 'Swap 1 random card with all',
    rarity: 'Rare',
  },
  'Justice Ledger': {
    spellUpright: 'Balance Life totals',
    spellReversed: 'Destroy weakest block',
    rarity: 'Epic',
  },
  'The Hanged Man Flip': {
    spellUpright: 'Reverse next opponent battle',
    spellReversed: 'Skip opponent turn',
    rarity: 'Rare',
  },
  'Death Rug': {
    spellUpright: 'Destroy 3 lowest blocks',
    spellReversed: 'Revive 1 destroyed block',
    rarity: 'Epic',
  },
  'Temperance Mix': {
    spellUpright: 'Average all chain lengths',
    spellReversed: 'Heal all players 2',
    rarity: 'Rare',
  },
  'The Devil Scam': {
    spellUpright: 'Steal 2 blocks + 2 Life',
    spellReversed: 'Take 2 Life damage',
    rarity: 'Epic',
  },
  'The Tower Hack': {
    spellUpright: 'Destroy all blocks in a row',
    spellReversed: 'Deal 5 Life damage',
    rarity: 'Epic',
  },
  'The Star Airdrop': {
    spellUpright: 'Everyone gains 1 block',
    spellReversed: 'Draw 1 Major',
    rarity: 'Epic',
  },
  'The Moon Illusion': {
    spellUpright: 'Swap hidden card with opponent',
    spellReversed: 'Reveal swap (lose turn)',
    rarity: 'Epic',
  },
  'The Sun Bull': {
    spellUpright: '+5 army power',
    spellReversed: 'Everyone gain 3 Life',
    rarity: 'Epic',
  },
  'Judgment Halving': {
    spellUpright: 'Halve all chains (round down)',
    spellReversed: 'Double next rally',
    rarity: 'Epic',
  },
  'The World Ecosystem': {
    spellUpright: 'Trigger final scoring now',
    spellReversed: 'Reset game (new deal)',
    rarity: 'Legendary',
  },
};

// Suit bonuses from chain-game/README.md
const SUIT_BONUSES = {
  Tokens: {
    rallyBonus: '+1 value',
    chainBonus: '+1 per matching block',
    battleBonus: '+1 defense',
  },
  Liquidity: {
    rallyBonus: 'Heal 1 Life',
    chainBonus: '+1 per 3 cards',
    battleBonus: '+1 vs. Security',
  },
  Security: {
    rallyBonus: 'Block undestroyable',
    chainBonus: '+2 defense',
    battleBonus: '+1 vs. Nodes',
  },
  Nodes: {
    rallyBonus: '+1 march',
    chainBonus: '+1 power',
    battleBonus: '+1 vs. Tokens',
  },
};

// Court card effects
const COURT_EFFECTS = {
  Tokens: {
    Page: 'Draw 1 when rallied',
    Knight: '+1 power attacking',
    Queen: 'Steal 1 Life on win',
    King: 'Army +1 power',
  },
  Liquidity: {
    Page: 'Heal 2 on rally',
    Knight: '+2 power defending',
    Queen: 'Team heal 1 on win',
    King: 'Swap 1 card with opponent',
  },
  Security: {
    Page: '+2 defense',
    Knight: 'Cannot be stolen',
    Queen: 'Allies +1 defense',
    King: 'Reveal opponent hand',
  },
  Nodes: {
    Page: 'Draw 1 tech card',
    Knight: '+2 march',
    Queen: 'All allies +1 march',
    King: 'Doubles next effect',
  },
};

// Ace effects
const ACE_EFFECTS = {
  Tokens: 'Genesis (first block gains +2 chain score)',
  Liquidity: 'Heal 1 Life',
  Security: 'Audit (negate next spell)',
  Nodes: 'Deploy (free rally)',
};

// Rank to value mapping
const RANK_TO_VALUE = {
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

// Rarity mapping
const RARITY_MAP = {
  // Genesis (1)
  'The HODLer': 'Genesis',
  // Legendary (4) - Kings
  'King of Tokens': 'Legendary',
  'King of Liquidity': 'Legendary',
  'King of Security': 'Legendary',
  'King of Nodes': 'Legendary',
  'The World Ecosystem': 'Legendary',
  // Epic (12) - Queens + late Majors
  'Queen of Tokens': 'Epic',
  'Queen of Liquidity': 'Epic',
  'Queen of Security': 'Epic',
  'Queen of Nodes': 'Epic',
  'The Star Airdrop': 'Epic',
  'The Moon Illusion': 'Epic',
  'The Sun Bull': 'Epic',
  'Judgment Halving': 'Epic',
  'The Empress Node': 'Epic',
  'The Emperor Chain': 'Epic',
  'Justice Ledger': 'Epic',
  'Death Rug': 'Epic',
  'The Devil Scam': 'Epic',
  'The Tower Hack': 'Epic',
  // Rare (22) - Knights + mid Majors
  'Knight of Tokens': 'Rare',
  'Knight of Liquidity': 'Rare',
  'Knight of Security': 'Rare',
  'Knight of Nodes': 'Rare',
  'The Hierophant Whale': 'Rare',
  'The Lovers Fork': 'Rare',
  'The Chariot Pump': 'Rare',
  'Strength HODL': 'Rare',
  'The Hermit Dev': 'Rare',
  'Wheel of Fortune Cycle': 'Rare',
  'The Hanged Man Flip': 'Rare',
  'Temperance Mix': 'Rare',
  // Common (39) - Aces-10s + Pages + early Majors
  'The Miner': 'Common',
  'The Oracle': 'Common',
};

function getCardRarity(cardTitle, cardData) {
  // Check explicit mapping first
  if (RARITY_MAP[cardTitle]) {
    return RARITY_MAP[cardTitle];
  }

  // Determine by card type
  if (cardData.arcana === 'Major') {
    // Late Majors (17-20) are Epic, except World Ecosystem (Legendary)
    if (cardData.number >= 17 && cardData.number <= 20) {
      return 'Epic';
    }
    // Mid Majors (5-16) are Rare
    if (cardData.number >= 5 && cardData.number <= 16) {
      return 'Rare';
    }
    // Early Majors (1-4) are Common
    return 'Common';
  }

  // Minor Arcana
  if (cardData.rank === 'King') return 'Legendary';
  if (cardData.rank === 'Queen') return 'Epic';
  if (cardData.rank === 'Knight') return 'Rare';
  if (cardData.rank === 'Page') return 'Common';
  // Numbered cards (Ace-10) are Common
  return 'Common';
}

function getCardValue(cardTitle, cardData) {
  if (cardData.arcana === 'Major') {
    return 0; // Majors have no value, they're spells
  }

  // Minor Arcana - use rank
  if (cardData.rank && RANK_TO_VALUE[cardData.rank]) {
    return RANK_TO_VALUE[cardData.rank];
  }

  // Fallback: try to extract from title
  const rankMatch = cardTitle.match(
    /^(Ace|Two|Three|Four|Five|Six|Seven|Eight|Nine|Ten|Page|Knight|Queen|King) of/
  );
  if (rankMatch) {
    return RANK_TO_VALUE[rankMatch[1]] || 1;
  }

  return 1; // Default
}

function getCardPower(cardTitle, cardData) {
  if (cardData.arcana === 'Major') {
    return 0; // Majors are spells, not units
  }

  // Power = value (baseline), modified by suit bonuses
  return getCardValue(cardTitle, cardData);
}

function getSuitBonus(cardData) {
  if (cardData.arcana === 'Major') {
    return null; // Majors don't have suit bonuses
  }

  const suit = cardData.suit;
  if (suit && SUIT_BONUSES[suit]) {
    return SUIT_BONUSES[suit];
  }

  return null;
}

function getCourtEffect(cardTitle, cardData) {
  if (cardData.arcana === 'Major') {
    return null;
  }

  const suit = cardData.suit;
  const rank = cardData.rank;

  if (suit && rank && COURT_EFFECTS[suit] && COURT_EFFECTS[suit][rank]) {
    return COURT_EFFECTS[suit][rank];
  }

  return null;
}

function getAceEffect(cardTitle, cardData) {
  if (cardData.arcana === 'Major') {
    return null;
  }

  if (cardData.rank === 'Ace' && cardData.suit && ACE_EFFECTS[cardData.suit]) {
    return ACE_EFFECTS[cardData.suit];
  }

  return null;
}

function getSpellEffects(cardTitle) {
  return MAJOR_SPELL_EFFECTS[cardTitle] || null;
}

// Format JavaScript object with proper indentation
function formatCardObject(cardData, indent = 2) {
  const spaces = ' '.repeat(indent);
  const lines = ['{'];

  for (const [key, value] of Object.entries(cardData)) {
    if (value === null || value === undefined) continue;

    if (typeof value === 'string') {
      // Escape quotes and handle multiline
      const escaped = value.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
      lines.push(`${spaces}${key}: '${escaped}',`);
    } else if (typeof value === 'number' || typeof value === 'boolean') {
      lines.push(`${spaces}${key}: ${value},`);
    } else if (Array.isArray(value)) {
      lines.push(`${spaces}${key}: [`);
      value.forEach(item => {
        if (typeof item === 'object') {
          lines.push(`${spaces}  ${JSON.stringify(item)},`);
        } else {
          lines.push(`${spaces}  '${item}',`);
        }
      });
      lines.push(`${spaces}],`);
    } else if (typeof value === 'object') {
      lines.push(
        `${spaces}${key}: ${JSON.stringify(value, null, indent + 2).replace(/\n/g, '\n' + spaces)},`
      );
    }
  }

  lines.push(' '.repeat(indent - 2) + '}');
  return lines.join('\n');
}

// Parse the card meanings file and add game mechanics
async function addGameMechanics() {
  console.log('🎮 Adding Chain Game mechanics to all 78 cards...\n');

  // Import the card meanings using dynamic import
  const filePath = `file://${CARD_MEANINGS_PATH.replace(/\\/g, '/')}`;
  const cardMeaningsModule = await import(filePath);
  const CARD_MEANINGS = cardMeaningsModule.CARD_MEANINGS;

  let updated = 0;
  let added = 0;

  // Process each card
  for (const [cardTitle, cardData] of Object.entries(CARD_MEANINGS)) {
    const gameMechanics = {};

    // Add rarity
    gameMechanics.rarity = getCardRarity(cardTitle, cardData);

    if (cardData.arcana === 'Major') {
      // Major Arcana = Spells
      const spellEffects = getSpellEffects(cardTitle);
      if (spellEffects) {
        gameMechanics.spellUpright = spellEffects.spellUpright;
        gameMechanics.spellReversed = spellEffects.spellReversed;
        if (spellEffects.rarity) {
          gameMechanics.rarity = spellEffects.rarity;
        }
      }
      gameMechanics.energyCost = 1; // All Majors cost 1 block
      gameMechanics.type = 'spell';
    } else {
      // Minor Arcana = Units
      gameMechanics.value = getCardValue(cardTitle, cardData);
      gameMechanics.power = getCardPower(cardTitle, cardData);
      gameMechanics.type = 'unit';

      // Suit bonuses
      const suitBonus = getSuitBonus(cardData);
      if (suitBonus) {
        gameMechanics.suitBonus = suitBonus;
      }

      // Court effects
      const courtEffect = getCourtEffect(cardTitle, cardData);
      if (courtEffect) {
        gameMechanics.courtEffect = courtEffect;
      }

      // Ace effects
      const aceEffect = getAceEffect(cardTitle, cardData);
      if (aceEffect) {
        gameMechanics.aceEffect = aceEffect;
      }
    }

    // Add game mechanics to card data
    if (!cardData.gameMechanics) {
      cardData.gameMechanics = gameMechanics;
      added++;
    } else {
      // Merge with existing
      cardData.gameMechanics = { ...cardData.gameMechanics, ...gameMechanics };
      updated++;
    }
  }

  // Read original file to get the structure
  const originalContent = fs.readFileSync(CARD_MEANINGS_PATH, 'utf8');

  // Build new content by adding gameMechanics to each card
  let newContent = originalContent;

  // For each card, find its entry and add gameMechanics
  for (const [cardTitle, cardData] of Object.entries(CARD_MEANINGS)) {
    if (!cardData.gameMechanics) continue;

    // Find the card entry - look for the card title followed by opening brace
    const cardKey = `'${cardTitle}':`;
    const cardIndex = newContent.indexOf(cardKey);

    if (cardIndex === -1) continue;

    // Find the closing brace of this card object
    let braceCount = 0;
    let foundOpen = false;
    let insertPos = -1;

    for (let i = cardIndex; i < newContent.length; i++) {
      if (newContent[i] === '{') {
        braceCount++;
        foundOpen = true;
      } else if (newContent[i] === '}') {
        braceCount--;
        if (foundOpen && braceCount === 0) {
          insertPos = i;
          break;
        }
      }
    }

    if (insertPos !== -1) {
      // Check if gameMechanics already exists
      const cardSection = newContent.substring(cardIndex, insertPos);
      if (!cardSection.includes('gameMechanics:')) {
        // Insert gameMechanics before closing brace
        const gameMechJson = JSON.stringify(cardData.gameMechanics, null, 4)
          .split('\n')
          .map((line, idx) => (idx === 0 ? line : '    ' + line))
          .join('\n');

        const gameMechStr = `,\n    gameMechanics: ${gameMechJson}`;
        newContent =
          newContent.slice(0, insertPos) + gameMechStr + '\n  ' + newContent.slice(insertPos);
      }
    }
  }

  // Update the header comment
  newContent = newContent.replace(
    '// Used for UI rendering, AI readings, and SVG generation',
    '// Used for UI rendering, AI readings, SVG generation, and Chain Game mechanics'
  );

  fs.writeFileSync(CARD_MEANINGS_PATH, newContent, 'utf8');

  console.log(`✅ Added game mechanics to ${added} cards`);
  console.log(`✅ Updated game mechanics for ${updated} cards`);
  console.log(`\n📊 Total cards processed: ${Object.keys(CARD_MEANINGS).length}`);
  console.log('\n🎮 Chain Game mechanics added successfully!');
}

// Run the script
addGameMechanics().catch(console.error);
