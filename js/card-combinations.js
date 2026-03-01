/**
 * Card Combinations Analysis
 * Shows how cards interact when drawn together
 */

// CARD_MEANINGS will be passed in or accessed via window
let CARD_MEANINGS = null;

export function setCardMeanings(meanings) {
  CARD_MEANINGS = meanings;
}

export function analyzeCardCombination(cards) {
  const combinations = [];

  // Check for Major Arcana combinations
  const majorCards = cards.filter(c => {
    const meaning = CARD_MEANINGS[c.title];
    return meaning && meaning.arcana === 'Major';
  });

  if (majorCards.length >= 2) {
    combinations.push({
      type: 'major-power',
      message:
        'Multiple Major Arcana cards indicate a powerful, transformative period in your crypto journey.',
      cards: majorCards.map(c => c.title),
    });
  }

  // Check for all same suit
  const suits = cards
    .map(c => {
      const meaning = CARD_MEANINGS[c.title];
      return meaning?.suit;
    })
    .filter(Boolean);

  if (suits.length === cards.length && new Set(suits).size === 1) {
    const suit = suits[0];
    combinations.push({
      type: 'same-suit',
      message: `All cards from the ${suit} suit suggest a focused theme: ${getSuitTheme(suit)}`,
      cards: cards.map(c => c.title),
      suit,
    });
  }

  // Check for all reversed
  const allReversed = cards.every(c => c.orientation === 'Reversed');
  if (allReversed) {
    combinations.push({
      type: 'all-reversed',
      message:
        'All cards reversed suggests blocked energy or challenges ahead. Time to reflect and adjust your strategy.',
      cards: cards.map(c => c.title),
    });
  }

  // Check for all upright
  const allUpright = cards.every(c => c.orientation === 'Upright');
  if (allUpright) {
    combinations.push({
      type: 'all-upright',
      message:
        'All cards upright indicates clear, positive energy flowing. Trust your path forward.',
      cards: cards.map(c => c.title),
    });
  }

  // Check for specific card pairs
  const cardNames = cards.map(c => c.title);

  // HODLer + Miner = Genesis combo
  if (cardNames.includes('The HODLer') && cardNames.includes('The Miner')) {
    combinations.push({
      type: 'genesis-combo',
      message:
        "The HODLer and The Miner together: You're at the genesis of something new. Patience and skill will build your foundation.",
      cards: ['The HODLer', 'The Miner'],
    });
  }

  // Tower + Star = Crisis to Hope
  if (cardNames.includes('The Tower Hack') && cardNames.includes('The Star Airdrop')) {
    combinations.push({
      type: 'crisis-hope',
      message:
        'The Tower Hack followed by The Star Airdrop: After disruption comes renewal. Hope emerges from challenges.',
      cards: ['The Tower Hack', 'The Star Airdrop'],
    });
  }

  // Devil + Strength = Breaking Free
  if (cardNames.includes('The Devil Scam') && cardNames.includes('Strength HODL')) {
    combinations.push({
      type: 'breaking-free',
      message:
        'The Devil Scam with Strength HODL: You have the power to break free from FOMO and bad habits. Diamond hands prevail.',
      cards: ['The Devil Scam', 'Strength HODL'],
    });
  }

  // Ace + Ten of same suit = Full cycle
  cards.forEach(card => {
    if (card.title.includes('Ace of')) {
      const suit = card.title.split(' of ')[1];
      const tenCard = cards.find(c => c.title === `Ten of ${suit}`);
      if (tenCard) {
        combinations.push({
          type: 'full-cycle',
          message: `Ace and Ten of ${suit} together: A complete cycle from beginning to completion. Full journey ahead.`,
          cards: [card.title, tenCard.title],
          suit,
        });
      }
    }
  });

  return combinations;
}

function getSuitTheme(suit) {
  const themes = {
    Tokens: 'material wealth, assets, and value',
    Liquidity: 'emotions, flow, and community',
    Security: 'intellect, challenges, and protection',
    Nodes: 'creativity, action, and innovation',
  };
  return themes[suit] || 'a focused theme';
}
