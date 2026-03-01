// Enhanced Fortune Teller Content Library
// Rich, detailed, caring interpretations for Crypto Tarot readings

export const FORTUNE_TELLER_PHRASES = {
  opening: [
    'Welcome, seeker of digital destinies... The mystical cards sense your presence in this sacred space.',
    'Ah, traveler of the blockchain realm... The cards whisper your name as they await your question.',
    'Greetings, brave explorer of Web3... The ancient wisdom of crypto tarot stirs at your arrival.',
    'Come, sit in the glow of the digital oracle... The cards have been waiting to reveal your path.',
    'Welcome to the palace of crypto wisdom... The cards sense the energy of your question.',
  ],

  shuffling: [
    'The deck awakens... shuffling through the digital ether, seeking your truth.',
    'Cards dance in mystical patterns... each shuffle brings us closer to your answer.',
    'The blockchain whispers... the cards align themselves to your energy.',
    'Ancient algorithms stir... the deck reshuffles with cosmic precision.',
    'Mystical forces gather... the cards prepare to reveal their secrets.',
  ],

  drawing: [
    'Three cards emerge from the digital void... they call to you.',
    'The cards choose themselves... drawn by the force of your question.',
    'From the depths of the blockchain... three cards rise to meet you.',
    'The oracle selects... three cards that hold your destiny.',
    'Cards float from the mystical deck... each one a piece of your puzzle.',
  ],

  interpretation: [
    'Let the cards speak their truth...',
    'The cards reveal a story written in code and destiny...',
    'Listen closely, for the cards have much to say...',
    'The wisdom of the blockchain flows through these cards...',
    'Each card holds a key to understanding your path...',
  ],

  closing: [
    'May the wisdom of the cards guide your crypto journey. Trust in the blockchain, but always DYOR.',
    'The cards have spoken. Carry their wisdom with you as you navigate the digital realm.',
    'Remember: the future is not set in stone, but these cards illuminate the path ahead.',
    "The oracle's words fade, but their meaning remains. Use this wisdom wisely.",
    'The cards return to the deck, but their message stays with you. Walk your path with confidence.',
  ],
};

// Detailed card combination interpretations
export const CARD_COMBINATIONS = {
  // Major Arcana combinations
  'hodler-miner': {
    title: 'The Foundation Builders',
    interpretation:
      "When The HODLer meets The Miner, you're building something lasting. Your patience (HODLer) combined with active creation (Miner) suggests a methodical approach to crypto wealth. You're not just waiting—you're actively mining value through effort and persistence. This combination speaks to long-term strategies: staking, yield farming, or building in bear markets. The cards suggest: patience in holding, but also active participation in the ecosystem. Don't just HODL—contribute, mine, and build.",
  },

  'oracle-hermit': {
    title: 'The Seekers of Truth',
    interpretation:
      "The Oracle and The Hermit Dev together create a powerful combination of intuition and deep research. You're being called to trust your instincts (Oracle) while also doing thorough research (Hermit). This is the perfect balance for crypto: listen to your gut feelings about projects, but always verify with code audits and deep dives. The cards suggest: your intuition is valuable, but it must be backed by knowledge. Study the blockchain, read the whitepapers, audit the smart contracts. Your inner knowing combined with technical understanding will guide you well.",
  },

  'chariot-wheel': {
    title: 'The Cycle of Momentum',
    interpretation:
      "The Chariot Pump and Wheel of Fortune Cycle together indicate powerful market forces at play. You're in a period of momentum (Chariot) during a significant market cycle (Wheel). This could mean a bull run is building, or you're experiencing rapid changes. The cards suggest: ride the wave, but stay aware of the cycle. Markets move in patterns—what goes up must come down, and vice versa. Use momentum wisely, but prepare for the cycle's turn. Don't get caught in FOMO when the wheel turns.",
  },

  'death-tower': {
    title: 'The Great Transformation',
    interpretation:
      "Death Rug and The Tower Hack together signal a major disruption and transformation. Something is ending (Death) through a sudden event (Tower). In crypto terms, this could mean: a project rug pull, a market crash, a hack, or a major shift in your strategy. The cards suggest: this ending is necessary for rebirth. What falls away makes room for something stronger. After the Tower falls, you rebuild with better security, wiser choices, and stronger foundations. This is not destruction—it's evolution.",
  },

  'star-sun': {
    title: 'The Celestial Blessing',
    interpretation:
      "The Star Airdrop and The Sun Bull together create an incredibly positive combination. Hope (Star) meets prosperity (Sun) in a powerful alignment. This suggests: rewards coming your way, airdrops, successful investments, or a period of great abundance. The cards suggest: this is a time of great potential. Opportunities are aligning. Stay open to airdrops, new projects, and positive developments. But remember: even in the sun, don't forget to protect yourself. Prosperity requires wisdom to maintain.",
  },
};

export function getCosmicData(title) {
  if (window.CosmicLibrary?.getCosmicData) {
    return window.CosmicLibrary.getCosmicData(title);
  }
  return null;
}

// Detailed position interpretations
export function getPositionMeaning(position, cardTitle, orientation) {
  // Slim, advisory tone per position
  const tone = orientation === 'Upright' ? 'Do' : 'Watch out';
  const lines = {
    Past: `${tone}: carry forward only what works from ${cardTitle}. Drop habits that cost you energy or capital.`,
    Present: `${tone}: act intentionally with ${cardTitle}. Focus on one clear step you can take today.`,
    Future: `${tone}: shape the path ahead with ${cardTitle}. Prepare now so you’re not rushed later.`,
  };
  return lines[position] || `${tone}: stay aware and make the next step simple and safe.`;
}

// Enhanced fortune reading builder
export function buildDetailedFortuneReading(question, cards) {
  const positions = ['Past', 'Present', 'Future'];
  const phrases = FORTUNE_TELLER_PHRASES;

  // Opening
  const opening = phrases.opening[Math.floor(Math.random() * phrases.opening.length)];

  // Build concise, action-oriented advice per card
  const cardReadings = cards.map((card, idx) => {
    const position = positions[idx];
    const advisory = buildAdvisoryLine(card.title, card.orientation, position, card.meaning);
    const cosmic = getCosmicData(card.title);
    return { position, title: card.title, orientation: card.orientation, advisory, cosmic };
  });

  // Check for special combinations
  const cardIds = cards.map(c => c.title.toLowerCase().replace(/\s+/g, '-'));
  let combination = null;

  // Check for known combinations
  for (const [key, value] of Object.entries(CARD_COMBINATIONS)) {
    const [card1, card2] = key.split('-');
    if (cardIds.includes(card1) && cardIds.includes(card2)) {
      combination = value;
      break;
    }
  }

  // Build the reading
  let reading = `<div class="fortune-opening">${opening}</div>\n\n`;
  reading += `<div class="fortune-question"><strong>Your Question:</strong> "${question}"</div>\n\n`;

  // Single, concise descriptions that feel like instructions from the cards
  reading += `<div class="fortune-cards">`;
  cardReadings.forEach(card => {
    reading += `
      <div class="fortune-card-section">
        <h4 class="fortune-position">${card.position}: ${card.title} (${card.orientation})</h4>
        <p class="fortune-card-interpretation">${card.advisory}</p>
        ${
          card.cosmic
            ? `
          <p class="fortune-cosmic" style="margin: 10px 0 0; color: var(--primary); font-size: 12px; letter-spacing: 0.6px; text-transform: uppercase;">
            Cosmic Link: ${card.cosmic.anchor}
          </p>
          ${card.cosmic.element ? `<p style=\"margin: 2px 0 0; color: var(--muted); font-size: 13px; line-height: 1.6;\">Element & Mode: ${card.cosmic.element} • ${card.cosmic.modality}</p>` : ''}
          ${card.cosmic.numerology ? `<p style=\"margin: 2px 0 0; color: var(--muted); font-size: 13px; line-height: 1.6;\">Numerology: ${card.cosmic.numerology}</p>` : ''}
          ${card.cosmic.window ? `<p style=\"margin: 2px 0 0; color: var(--muted); font-size: 13px; line-height: 1.6;\">Astro Window: ${card.cosmic.window}</p>` : ''}
          <p style="margin: 2px 0 0; color: var(--muted); font-size: 13px; line-height: 1.6;">
            ${card.cosmic.keywords}
          </p>
        `
            : ''
        }
      </div>
    `;
  });
  reading += `</div>\n\n`;

  // Add combination interpretation if found
  if (combination) {
    reading += `<div class="fortune-combination">\n`;
    reading += `<h4 class="fortune-combination-title">${combination.title}</h4>\n`;
    reading += `<p class="fortune-combination-interpretation">${combination.interpretation}</p>\n`;
    reading += `</div>\n\n`;
  }

  // Closing
  const closing = phrases.closing[Math.floor(Math.random() * phrases.closing.length)];
  reading += `<div class="fortune-closing">${closing}</div>`;

  return reading;
}

// Build advisory line for a card
function buildAdvisoryLine(cardTitle, orientation, position, meaning) {
  const tone = orientation === 'Upright' ? 'Do' : 'Watch out';
  const baseAdvice = getPositionMeaning(position, cardTitle, orientation);

  // Enhance with card meaning if available
  if (meaning) {
    return `${baseAdvice} ${meaning}`;
  }

  return baseAdvice;
}
