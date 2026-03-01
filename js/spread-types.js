/**
 * Multiple Reading Spread Types
 * Supports different tarot spread layouts
 */

export const SPREAD_TYPES = {
  '1-card': {
    name: 'Daily Oracle',
    description: "One card for today's guidance",
    cardCount: 1,
    positions: ['Your Card'],
  },
  '3-card': {
    name: 'Past, Present, Future',
    description: 'Three cards showing your journey',
    cardCount: 3,
    positions: ['Past', 'Present', 'Future'],
  },
  '5-card': {
    name: 'Celtic Cross',
    description: 'Five cards for deeper insight',
    cardCount: 5,
    positions: ['Situation', 'Challenge', 'Past', 'Future', 'Outcome'],
  },
};

export function drawCardsForSpread(deck, spreadType) {
  const spread = SPREAD_TYPES[spreadType];
  if (!spread) {
    throw new Error(`Unknown spread type: ${spreadType}`);
  }

  // Shuffle deck
  const shuffled = [...deck];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  // Draw cards
  const picks = shuffled.slice(0, spread.cardCount).map((card, idx) => ({
    ...card,
    orientation: Math.random() > 0.5 ? 'Upright' : 'Reversed',
    position: spread.positions[idx],
  }));

  return picks;
}
