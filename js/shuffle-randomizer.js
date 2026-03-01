// Crypto Tarot Shuffle & Randomizer Utility
// Ensures each visitor gets truly random cards every time

/**
 * Enhanced random number generator with multiple entropy sources
 * Combines timestamp, Math.random(), and crypto API if available
 */
function getEnhancedRandom() {
  // Use crypto.getRandomValues if available (more secure)
  if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
    const array = new Uint32Array(1);
    crypto.getRandomValues(array);
    // Convert to 0-1 range
    return array[0] / (0xffffffff + 1);
  }

  // Fallback: Combine multiple entropy sources
  const timestamp = Date.now();
  const random1 = Math.random();
  const random2 = Math.random();
  const userAgent = navigator.userAgent.length;
  const screenData = (screen.width * screen.height) % 1000;

  // Combine entropy sources
  const combined =
    ((timestamp % 1000) / 1000 +
      random1 * 0.3 +
      random2 * 0.3 +
      ((userAgent % 100) / 100) * 0.2 +
      (screenData / 1000) * 0.2) %
    1;

  return combined;
}

/**
 * Fisher-Yates shuffle algorithm - truly random shuffle
 * @param {Array} array - Array to shuffle
 * @returns {Array} - New shuffled array (doesn't mutate original)
 */
function fisherYatesShuffle(array) {
  const shuffled = [...array]; // Create copy
  let currentIndex = shuffled.length;
  let randomIndex;

  // While there remain elements to shuffle
  while (currentIndex !== 0) {
    // Pick a remaining element using enhanced random
    randomIndex = Math.floor(getEnhancedRandom() * currentIndex);
    currentIndex--;

    // Swap it with the current element
    [shuffled[currentIndex], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[currentIndex],
    ];
  }

  return shuffled;
}

/**
 * Shuffle deck with multiple passes for better randomness
 * @param {Array} deck - Full deck of cards
 * @param {number} passes - Number of shuffle passes (default: 3)
 * @returns {Array} - Shuffled deck
 */
export function shuffleDeck(deck, passes = 3) {
  if (!deck || deck.length === 0) {
    console.warn('Empty deck provided to shuffleDeck');
    return [];
  }

  let shuffled = [...deck];

  // Multiple shuffle passes for better randomness
  for (let i = 0; i < passes; i++) {
    shuffled = fisherYatesShuffle(shuffled);

    // Add additional entropy between passes
    const entropy = getEnhancedRandom();
    if (entropy > 0.5) {
      // Sometimes reverse the deck after shuffle
      shuffled = shuffled.reverse();
    }
  }

  return shuffled;
}

/**
 * Draw random cards from deck without replacement
 * @param {Array} deck - Full deck of cards
 * @param {number} count - Number of cards to draw (default: 3)
 * @returns {Array} - Array of drawn cards with random orientations
 */
export function drawRandomCards(deck, count = 3) {
  if (!deck || deck.length === 0) {
    console.warn('Empty deck provided to drawRandomCards');
    return [];
  }

  if (count > deck.length) {
    console.warn(`Requested ${count} cards but only ${deck.length} available`);
    count = deck.length;
  }

  // Shuffle the deck first
  const shuffled = shuffleDeck(deck);

  // Draw cards from the shuffled deck
  const drawn = shuffled.slice(0, count);

  // Assign random orientations
  return drawn.map(card => ({
    ...card,
    orientation: getEnhancedRandom() > 0.5 ? 'Upright' : 'Reversed',
  }));
}

/**
 * Create a seeded random generator (for reproducible results if needed)
 * @param {number} seed - Seed value
 * @returns {Function} - Seeded random function
 */
export function createSeededRandom(seed) {
  let value = seed;
  return function () {
    value = (value * 9301 + 49297) % 233280;
    return value / 233280;
  };
}

/**
 * Generate a unique session seed based on timestamp and user data
 * @returns {number} - Unique seed for this session
 */
export function generateSessionSeed() {
  const timestamp = Date.now();
  const userAgent = navigator.userAgent.length;
  const screenData = screen.width * screen.height;
  const timezone = new Date().getTimezoneOffset();

  return (timestamp + userAgent * 1000 + screenData + timezone) % 1000000;
}

/**
 * Shuffle with session-based seed (ensures different results per session)
 * @param {Array} deck - Full deck of cards
 * @returns {Array} - Shuffled deck
 */
export function shuffleWithSessionSeed(deck) {
  const seed = generateSessionSeed();
  const seededRandom = createSeededRandom(seed);

  // Use seeded random for this shuffle
  const shuffled = [...deck];
  let currentIndex = shuffled.length;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(seededRandom() * currentIndex);
    currentIndex--;
    [shuffled[currentIndex], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[currentIndex],
    ];
  }

  // Then apply one more pass with enhanced random for extra entropy
  return fisherYatesShuffle(shuffled);
}

/**
 * Draw cards with guaranteed uniqueness across multiple draws
 * Tracks drawn cards in session to prevent duplicates if needed
 */
export class CardDrawer {
  constructor(deck) {
    this.deck = [...deck];
    this.drawnCards = new Set();
    this.shuffledDeck = null;
    this.shuffleIndex = 0;
  }

  /**
   * Shuffle the deck and reset draw tracking
   */
  shuffle() {
    this.shuffledDeck = shuffleDeck(this.deck);
    this.shuffleIndex = 0;
    this.drawnCards.clear();
  }

  /**
   * Draw cards from shuffled deck
   * @param {number} count - Number of cards to draw
   * @param {boolean} allowDuplicates - Allow drawing same card multiple times (default: false)
   * @returns {Array} - Drawn cards with orientations
   */
  draw(count = 3, allowDuplicates = false) {
    if (!this.shuffledDeck) {
      this.shuffle();
    }

    const drawn = [];
    let attempts = 0;
    const maxAttempts = this.deck.length * 2;

    while (drawn.length < count && attempts < maxAttempts) {
      // If we've gone through the deck, reshuffle
      if (this.shuffleIndex >= this.shuffledDeck.length) {
        this.shuffle();
      }

      const card = this.shuffledDeck[this.shuffleIndex];
      const cardId = card.id || card.title;

      // Check if we can draw this card
      if (allowDuplicates || !this.drawnCards.has(cardId)) {
        drawn.push({
          ...card,
          orientation: getEnhancedRandom() > 0.5 ? 'Upright' : 'Reversed',
        });

        if (!allowDuplicates) {
          this.drawnCards.add(cardId);
        }

        this.shuffleIndex++;
      } else {
        // Skip this card, try next
        this.shuffleIndex++;
      }

      attempts++;
    }

    return drawn;
  }

  /**
   * Reset the drawer (reshuffle and clear drawn cards)
   */
  reset() {
    this.shuffle();
  }
}

// Export default instance creator
export function createCardDrawer(deck) {
  return new CardDrawer(deck);
}

// Make available globally for non-module scripts
if (typeof window !== 'undefined') {
  window.shuffleRandomizer = {
    shuffleDeck,
    drawRandomCards,
    createCardDrawer,
    CardDrawer,
    getEnhancedRandom: function () {
      if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
        const array = new Uint32Array(1);
        crypto.getRandomValues(array);
        return array[0] / (0xffffffff + 1);
      }
      const timestamp = Date.now();
      const random1 = Math.random();
      const random2 = Math.random();
      return ((timestamp % 1000) / 1000 + random1 * 0.5 + random2 * 0.5) % 1;
    },
  };
}
