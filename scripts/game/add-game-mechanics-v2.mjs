/**
 * Add Chain Game mechanics to all 78 cards (Version 2 - Proper formatting)
 * Adds: value, power, suit bonuses, spell effects, rarity, etc.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CARD_MEANINGS_PATH = path.join(__dirname, '..', 'data', 'card-meanings.js');

// Import card meanings
const cardMeaningsModule = await import(`file://${CARD_MEANINGS_PATH.replace(/\\/g, '/')}`);
const CARD_MEANINGS = cardMeaningsModule.CARD_MEANINGS;

// Game mechanics definitions
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
  Nodes: { rallyBonus: '+1 march', chainBonus: '+1 power', battleBonus: '+1 vs. Tokens' },
};

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

const ACE_EFFECTS = {
  Tokens: 'Genesis (first block gains +2 chain score)',
  Liquidity: 'Heal 1 Life',
  Security: 'Audit (negate next spell)',
  Nodes: 'Deploy (free rally)',
};

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

const RARITY_MAP = {
  'The HODLer': 'Genesis',
  'King of Tokens': 'Legendary',
  'King of Liquidity': 'Legendary',
  'King of Security': 'Legendary',
  'King of Nodes': 'Legendary',
  'The World Ecosystem': 'Legendary',
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
};

function getCardRarity(cardTitle, cardData) {
  if (RARITY_MAP[cardTitle]) return RARITY_MAP[cardTitle];
  if (cardData.arcana === 'Major') {
    if (cardData.number >= 17 && cardData.number <= 20) return 'Epic';
    if (cardData.number >= 5 && cardData.number <= 16) return 'Rare';
    return 'Common';
  }
  if (cardData.rank === 'King') return 'Legendary';
  if (cardData.rank === 'Queen') return 'Epic';
  if (cardData.rank === 'Knight') return 'Rare';
  return 'Common';
}

function getCardValue(cardTitle, cardData) {
  if (cardData.arcana === 'Major') return 0;
  if (cardData.rank && RANK_TO_VALUE[cardData.rank]) return RANK_TO_VALUE[cardData.rank];
  const rankMatch = cardTitle.match(
    /^(Ace|Two|Three|Four|Five|Six|Seven|Eight|Nine|Ten|Page|Knight|Queen|King) of/
  );
  return rankMatch ? RANK_TO_VALUE[rankMatch[1]] || 1 : 1;
}

// Add game mechanics to all cards
console.log('🎮 Adding Chain Game mechanics to all 78 cards...\n');

let added = 0;
for (const [cardTitle, cardData] of Object.entries(CARD_MEANINGS)) {
  const gameMechanics = { rarity: getCardRarity(cardTitle, cardData) };

  if (cardData.arcana === 'Major') {
    const spell = MAJOR_SPELL_EFFECTS[cardTitle];
    if (spell) {
      gameMechanics.spellUpright = spell.spellUpright;
      gameMechanics.spellReversed = spell.spellReversed;
      if (spell.rarity) gameMechanics.rarity = spell.rarity;
    }
    gameMechanics.energyCost = 1;
    gameMechanics.type = 'spell';
  } else {
    gameMechanics.value = getCardValue(cardTitle, cardData);
    gameMechanics.power = gameMechanics.value;
    gameMechanics.type = 'unit';
    if (cardData.suit && SUIT_BONUSES[cardData.suit]) {
      gameMechanics.suitBonus = SUIT_BONUSES[cardData.suit];
    }
    if (
      cardData.rank &&
      cardData.suit &&
      COURT_EFFECTS[cardData.suit] &&
      COURT_EFFECTS[cardData.suit][cardData.rank]
    ) {
      gameMechanics.courtEffect = COURT_EFFECTS[cardData.suit][cardData.rank];
    }
    if (cardData.rank === 'Ace' && cardData.suit && ACE_EFFECTS[cardData.suit]) {
      gameMechanics.aceEffect = ACE_EFFECTS[cardData.suit];
    }
  }

  cardData.gameMechanics = gameMechanics;
  added++;
}

// Write updated file with proper formatting
const fileContent = fs.readFileSync(CARD_MEANINGS_PATH, 'utf8');
let newContent = fileContent.replace(
  '// Used for UI rendering, AI readings, and SVG generation',
  '// Used for UI rendering, AI readings, SVG generation, and Chain Game mechanics'
);

// Add gameMechanics to each card by finding the card entry and inserting before closing brace
for (const [cardTitle, cardData] of Object.entries(CARD_MEANINGS)) {
  if (!cardData.gameMechanics) continue;

  const cardKey = `'${cardTitle}':`;
  const keyIndex = newContent.indexOf(cardKey);
  if (keyIndex === -1) continue;

  // Find the closing brace of this card
  let braceCount = 0;
  let foundOpen = false;
  let insertPos = -1;

  for (let i = keyIndex; i < newContent.length; i++) {
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
    // Check if already exists
    const cardSection = newContent.substring(keyIndex, insertPos);
    if (!cardSection.includes('gameMechanics:')) {
      // Format gameMechanics as JavaScript object
      const gm = cardData.gameMechanics;
      let gmStr = ',\n    gameMechanics: {\n';

      for (const [key, value] of Object.entries(gm)) {
        if (value === null || value === undefined) continue;
        if (typeof value === 'string') {
          gmStr += `      ${key}: '${value.replace(/'/g, "\\'")}',\n`;
        } else if (typeof value === 'object') {
          gmStr += `      ${key}: ${JSON.stringify(value, null, 8).replace(/\n/g, '\n      ')},\n`;
        } else {
          gmStr += `      ${key}: ${value},\n`;
        }
      }
      gmStr += '    }';

      newContent = newContent.slice(0, insertPos) + gmStr + '\n  ' + newContent.slice(insertPos);
    }
  }
}

fs.writeFileSync(CARD_MEANINGS_PATH, newContent, 'utf8');

console.log(`✅ Added game mechanics to ${added} cards`);
console.log(`📊 Total cards: ${Object.keys(CARD_MEANINGS).length}`);
console.log('\n🎮 Chain Game mechanics added successfully!');
