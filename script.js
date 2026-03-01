import { CARD_MEANINGS } from './data/card-meanings.js';
import { readingHistory } from './js/reading-history.js';
import { SPREAD_TYPES, drawCardsForSpread } from './js/spread-types.js';
import { analyzeCardCombination, setCardMeanings } from './js/card-combinations.js';
import {
  fileSafe,
  getCardImagePath,
  getCardImagePathFromCryptoTarot,
  escapeHtml,
} from './js/card-utils.js';

// Initialize card combinations with meanings
setCardMeanings(CARD_MEANINGS);

// ========== DOM Elements ==========
const readingText = document.getElementById('readingText');
const shuffleBtn = document.getElementById('shuffleBtn');
const connectWalletBtn = document.getElementById('connectWalletBtn');
const mintBtn = document.getElementById('mintBtn');
const yearSpan = document.getElementById('year');
const deckGrid = document.getElementById('deckGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const gallerySearch = document.getElementById('gallerySearch');
const typeFilter = document.getElementById('typeFilter');
const suitFilter = document.getElementById('suitFilter');
const rankFilter = document.getElementById('rankFilter');
const readingCards = document.getElementById('readingCards');
const readingSkeleton = document.getElementById('readingSkeleton');
const questionInput = document.getElementById('questionInput');
const drawCardsBtn = document.getElementById('drawCardsBtn');
const readingStatus = document.getElementById('readingStatus');
const themeToggle = document.getElementById('themeToggle');
const aiReading = document.getElementById('aiReading');
const fortuneReading = document.getElementById('fortuneReading');
const modal = document.getElementById('cardModal');
const modalClose = document.getElementById('modalClose');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalMeta = document.getElementById('modalMeta');
const modalCosmic = document.getElementById('modalCosmic');
const modalCrypto = document.getElementById('modalCrypto');
const modalUpright = document.getElementById('modalUpright');
const modalReversed = document.getElementById('modalReversed');
const apiKeyModal = document.getElementById('apiKeyModal');
const apiKeyInput = document.getElementById('apiKeyInput');
const saveApiKeyBtn = document.getElementById('saveApiKeyBtn');
const apiKeyClose = document.getElementById('apiKeyClose');
const spreadTypeSelect = document.getElementById('spreadType');
const viewHistoryBtn = document.getElementById('viewHistoryBtn');
const revealAllBtn = document.getElementById('revealAllBtn');
const copyLinkBtn = document.getElementById('copyLinkBtn');
const printReadingBtn = document.getElementById('printReadingBtn');
const cardCombinations = document.getElementById('cardCombinations');
const countdownDisplay = document.getElementById('countdownTimer');
const ambientAudioToggle = document.getElementById('ambientAudioToggle');

// Analytics stub
const analyticsLog = [];
function trackEvent(name, detail = {}) {
  const entry = { name, detail, timestamp: new Date().toISOString() };
  analyticsLog.push(entry);
  if (window.cryptoTarotAnalytics?.send) {
    window.cryptoTarotAnalytics.send(entry);
  } else {
    console.info('[CryptoTarot Analytics]', entry);
  }
}
window.cryptoTarotAnalyticsLog = analyticsLog;

function updateThemeToggleLabel(isLight) {
  if (!themeToggle) return;
  themeToggle.setAttribute('aria-pressed', isLight ? 'true' : 'false');
  themeToggle.textContent = isLight ? '🌙 Dark Mode' : '☀️ Light Mode';
}

function applyThemePreference(theme) {
  const isLight = theme === 'light';
  if (isLight) {
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
  updateThemeToggleLabel(isLight);
  try {
    localStorage.setItem(THEME_STORAGE_KEY, isLight ? 'light' : 'dark');
  } catch (error) {
    console.warn('[CryptoTarot] Unable to store theme preference:', error);
  }
}

if (themeToggle) {
  updateThemeToggleLabel(bootTheme === 'light');
  themeToggle.addEventListener('click', () => {
    const nextTheme =
      document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    applyThemePreference(nextTheme);
    trackEvent('theme_toggle', { theme: nextTheme });
  });
}

// Initialize year
if (yearSpan) yearSpan.textContent = new Date().getFullYear().toString();

// ========== Deck Configuration ==========
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

const SUITS = {
  Tokens: { code: 'T', borderColor: '#00f5a0' },
  Liquidity: { code: 'L', borderColor: '#3ec0ff' },
  Security: { code: 'S', borderColor: '#ff3864' },
  Nodes: { code: 'N', borderColor: '#ff3cac' },
};

const RANKS = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];
const COURTS = ['Page', 'Knight', 'Queen', 'King'];
const MAJOR_BORDER_COLOR = '#8b5cf6';
const LAUNCH_DATE = new Date('2025-12-01T00:00:00Z');
let launchCountdownNotified = false;
const THEME_STORAGE_KEY = 'cryptoTarotTheme';
const GALLERY_PLACEHOLDER_IMAGE =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 480"%3E%3Cdefs%3E%3ClinearGradient id="g" x1="0" y1="0" x2="1" y2="1"%3E%3Cstop offset="0"%20stop-color="%23261a40"/%3E%3Cstop offset="1"%20stop-color="%23140d24"/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill="url(%23g)" width="300" height="480" rx="24"/%3E%3C/svg%3E';

let bootTheme = 'dark';
try {
  const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
  if (storedTheme === 'light') {
    bootTheme = 'light';
    document.documentElement.setAttribute('data-theme', 'light');
  }
} catch (error) {
  console.warn('[CryptoTarot] Unable to access theme preference:', error);
}

let galleryImageObserver = null;

function ensureGalleryImageObserver() {
  if (galleryImageObserver) return galleryImageObserver;
  galleryImageObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const img = entry.target;
        if (!img.dataset) return;
        const dataSrc = img.dataset.src;
        if (dataSrc && img.dataset.state === 'pending') {
          img.dataset.state = 'loading';
          img.src = dataSrc;
        }
        observer.unobserve(img);
      });
    },
    {
      // Preload earlier for smoother gallery scroll
      rootMargin: '300px',
      threshold: 0.1,
    }
  );
  return galleryImageObserver;
}

function setupGalleryImage(img) {
  const observer = ensureGalleryImageObserver();
  observer.observe(img);
}
// fileSafe, getCardImagePath, and escapeHtml are now imported from js/card-utils.js

function startLaunchCountdown() {
  if (!countdownDisplay || Number.isNaN(LAUNCH_DATE.getTime())) return;
  const tick = () => {
    const now = new Date();
    const diff = LAUNCH_DATE.getTime() - now.getTime();
    if (diff <= 0) {
      countdownDisplay.textContent = '✨ Launch window open!';
      if (!launchCountdownNotified) {
        trackEvent('launch_window_open', { now: now.toISOString() });
        launchCountdownNotified = true;
      }
      clearInterval(interval);
      return;
    }
    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    countdownDisplay.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };
  tick();
  const interval = setInterval(tick, 1000);
}

// ===== Cosmic correspondences =====
function getCosmicData(title) {
  if (window.CosmicLibrary?.getCosmicData) {
    return window.CosmicLibrary.getCosmicData(title);
  }
  return null;
}

const NUMEROLOGY_TEXT = {
  Ace: '1 • Seed potential · Initiate the path',
  Two: '2 • Partnership · Align the flow',
  Three: '3 • Synthesis · Grow the network',
  Four: '4 • Structure · Build stable frames',
  Five: '5 • Challenge · Adapt with agility',
  Six: '6 • Harmony · Share the wealth',
  Seven: '7 • Assessment · Refine strategy',
  Eight: '8 • Mastery · Commit to craft',
  Nine: '9 • Fruition · Enjoy earned gains',
  Ten: '10 • Completion · Reset the cycle',
};

const COURT_NUMEROLOGY = {
  Page: 'Page • Messenger spark · Fresh curiosity',
  Knight: 'Knight • Motion · Active pursuit',
  Queen: 'Queen • Intuitive mastery · Nurture outcomes',
  King: 'King • Sovereign strategy · Lead decisively',
};

const SUIT_FALLBACKS = {
  Tokens: {
    element: 'Earth',
    modality: 'Mutable',
    anchor: 'Elemental Earth',
    keywords: 'Material value • Sustainable growth',
    window: 'Earth current · Practical stewardship',
  },
  Liquidity: {
    element: 'Water',
    modality: 'Mutable',
    anchor: 'Elemental Water',
    keywords: 'Emotional flow • Trust channels',
    window: 'Water current · Feeling intelligence',
  },
  Security: {
    element: 'Air',
    modality: 'Mutable',
    anchor: 'Elemental Air',
    keywords: 'Strategic clarity • Mental agility',
    window: 'Air current · Logic & analysis',
  },
  Nodes: {
    element: 'Fire',
    modality: 'Mutable',
    anchor: 'Elemental Fire',
    keywords: 'Creative ignition • Signal broadcasting',
    window: 'Fire current · Passionate output',
  },
};

const MINOR_DECANS = {
  Nodes: {
    Two: {
      sign: 'Aries',
      window: '0°–10°',
      ruler: 'Mars',
      keywords: 'Ignite the signal • Take decisive action',
    },
    Three: {
      sign: 'Aries',
      window: '10°–20°',
      ruler: 'Sun',
      keywords: 'Broadcast vision • Radiant leadership',
    },
    Four: {
      sign: 'Aries',
      window: '20°–30°',
      ruler: 'Venus',
      keywords: 'Stabilize momentum • Harmonize teams',
    },
    Five: {
      sign: 'Leo',
      window: '0°–10°',
      ruler: 'Saturn',
      keywords: 'Test resilience • Hold your ground',
    },
    Six: {
      sign: 'Leo',
      window: '10°–20°',
      ruler: 'Jupiter',
      keywords: 'Celebrate progress • Share recognition',
    },
    Seven: {
      sign: 'Leo',
      window: '20°–30°',
      ruler: 'Mars',
      keywords: 'Defend your position • Courageous persistence',
    },
    Eight: {
      sign: 'Sagittarius',
      window: '0°–10°',
      ruler: 'Mercury',
      keywords: 'Rapid expansion • Agile execution',
    },
    Nine: {
      sign: 'Sagittarius',
      window: '10°–20°',
      ruler: 'Moon',
      keywords: 'Spiritual endurance • Inner illumination',
    },
    Ten: {
      sign: 'Sagittarius',
      window: '20°–30°',
      ruler: 'Saturn',
      keywords: 'Finalize quests • Channel discipline',
    },
  },
  Liquidity: {
    Two: {
      sign: 'Cancer',
      window: '0°–10°',
      ruler: 'Venus',
      keywords: 'Bond heartfelt alliances • Share trust',
    },
    Three: {
      sign: 'Cancer',
      window: '10°–20°',
      ruler: 'Mercury',
      keywords: 'Celebrate kinship • Exchange signals of joy',
    },
    Four: {
      sign: 'Cancer',
      window: '20°–30°',
      ruler: 'Moon',
      keywords: 'Emotional reassessment • Re-center your tide',
    },
    Five: {
      sign: 'Scorpio',
      window: '0°–10°',
      ruler: 'Mars',
      keywords: 'Process grief • Confront shadow feelings',
    },
    Six: {
      sign: 'Scorpio',
      window: '10°–20°',
      ruler: 'Sun',
      keywords: 'Nostalgic healing • Light up loyal bonds',
    },
    Seven: {
      sign: 'Scorpio',
      window: '20°–30°',
      ruler: 'Venus',
      keywords: 'Discern illusions • Choose soul-aligned options',
    },
    Eight: {
      sign: 'Pisces',
      window: '0°–10°',
      ruler: 'Saturn',
      keywords: 'Transition onward • Commit to soul truth',
    },
    Nine: {
      sign: 'Pisces',
      window: '10°–20°',
      ruler: 'Jupiter',
      keywords: 'Wish fulfillment • Emotional abundance',
    },
    Ten: {
      sign: 'Pisces',
      window: '20°–30°',
      ruler: 'Mars',
      keywords: 'Collective bliss • Elation worth sharing',
    },
  },
  Security: {
    Two: {
      sign: 'Libra',
      window: '0°–10°',
      ruler: 'Moon',
      keywords: 'Balanced decisions • Harmonize perspectives',
    },
    Three: {
      sign: 'Libra',
      window: '10°–20°',
      ruler: 'Saturn',
      keywords: 'Truth cuts • Face necessary outcomes',
    },
    Four: {
      sign: 'Libra',
      window: '20°–30°',
      ruler: 'Jupiter',
      keywords: 'Strategic rest • Restore mental clarity',
    },
    Five: {
      sign: 'Aquarius',
      window: '0°–10°',
      ruler: 'Venus',
      keywords: 'Conflicting agendas • Reclaim autonomy',
    },
    Six: {
      sign: 'Aquarius',
      window: '10°–20°',
      ruler: 'Mercury',
      keywords: 'Navigate change • Chart new routes',
    },
    Seven: {
      sign: 'Aquarius',
      window: '20°–30°',
      ruler: 'Moon',
      keywords: 'Stealth strategy • Protect your intel',
    },
    Eight: {
      sign: 'Gemini',
      window: '0°–10°',
      ruler: 'Jupiter',
      keywords: 'Mental binds • Reframe the narrative',
    },
    Nine: {
      sign: 'Gemini',
      window: '10°–20°',
      ruler: 'Mars',
      keywords: 'Overthinking loops • Practice compassion',
    },
    Ten: {
      sign: 'Gemini',
      window: '20°–30°',
      ruler: 'Sun',
      keywords: 'Release ruin • Mindful closure',
    },
  },
  Tokens: {
    Two: {
      sign: 'Capricorn',
      window: '0°–10°',
      ruler: 'Jupiter',
      keywords: 'Set solid foundations • Expand resource streams',
    },
    Three: {
      sign: 'Capricorn',
      window: '10°–20°',
      ruler: 'Mars',
      keywords: 'Collaborative build • Strategic momentum',
    },
    Four: {
      sign: 'Capricorn',
      window: '20°–30°',
      ruler: 'Sun',
      keywords: 'Consolidate assets • Highlight stewardship',
    },
    Five: {
      sign: 'Taurus',
      window: '0°–10°',
      ruler: 'Mercury',
      keywords: 'Navigate scarcity • Invent practical solutions',
    },
    Six: {
      sign: 'Taurus',
      window: '10°–20°',
      ruler: 'Moon',
      keywords: 'Mutual aid • Generous equilibrium',
    },
    Seven: {
      sign: 'Taurus',
      window: '20°–30°',
      ruler: 'Saturn',
      keywords: 'Long-term patience • Cultivate endurance',
    },
    Eight: {
      sign: 'Virgo',
      window: '0°–10°',
      ruler: 'Sun',
      keywords: 'Craft excellence • Iterate with pride',
    },
    Nine: {
      sign: 'Virgo',
      window: '10°–20°',
      ruler: 'Venus',
      keywords: 'Comfort in self-reliance • Enjoy refined harvests',
    },
    Ten: {
      sign: 'Virgo',
      window: '20°–30°',
      ruler: 'Mercury',
      keywords: 'Legacy planning • Systems mastery',
    },
  },
};

class AmbientSoundscape {
  constructor(toggleButton) {
    this.button = toggleButton;
    this.context = null;
    this.masterGain = null;
    this.oscillators = [];
    this.isPlaying = false;
    this.enabled = localStorage.getItem('ambientAudioEnabled') === 'true';
    this.init();
  }

  init() {
    if (!this.button) return;

    this.button.addEventListener('click', () => this.toggle());

    document.addEventListener(
      'pointerdown',
      () => {
        this.setupContext();
        if (this.enabled && !this.isPlaying) {
          this.start();
        }
      },
      { once: true }
    );

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.stop(false);
      } else if (this.enabled && !this.isPlaying) {
        this.start();
      }
    });

    this.syncButton();
  }

  setupContext() {
    if (this.context) return;
    try {
      this.context = new (window.AudioContext || window.webkitAudioContext)();
    } catch (error) {
      console.warn('Ambient audio unavailable:', error.message);
      this.enabled = false;
      localStorage.setItem('ambientAudioEnabled', 'false');
      this.syncButton();
    }
  }

  start() {
    this.setupContext();
    if (!this.context) return;

    if (this.context.state === 'suspended') {
      this.context.resume();
    }

    if (this.isPlaying) return;

    this.masterGain = this.context.createGain();
    this.masterGain.gain.setValueAtTime(0.0001, this.context.currentTime);
    this.masterGain.connect(this.context.destination);

    const layers = [
      { frequency: 172, type: 'sine', lfo: 0.05 },
      { frequency: 224, type: 'triangle', lfo: 0.08 },
      { frequency: 310, type: 'sine', lfo: 0.11 },
    ];

    layers.forEach(({ frequency, type, lfo }, index) => {
      const osc = this.context.createOscillator();
      osc.type = type;
      osc.frequency.setValueAtTime(frequency, this.context.currentTime);

      const gain = this.context.createGain();
      gain.gain.setValueAtTime(0.0001, this.context.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.06 / (index + 1), this.context.currentTime + 2.5);

      const modulationOsc = this.context.createOscillator();
      modulationOsc.type = 'sine';
      modulationOsc.frequency.setValueAtTime(lfo, this.context.currentTime);

      const modulationGain = this.context.createGain();
      modulationGain.gain.setValueAtTime(12 + index * 6, this.context.currentTime);

      modulationOsc.connect(modulationGain);
      modulationGain.connect(osc.frequency);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start();
      modulationOsc.start();

      this.oscillators.push({ osc, gain, modulationOsc, modulationGain });
    });

    this.masterGain.gain.exponentialRampToValueAtTime(0.2, this.context.currentTime + 3);

    this.isPlaying = true;
    this.enabled = true;
    localStorage.setItem('ambientAudioEnabled', 'true');
    this.syncButton();
  }

  stop(permanent = true) {
    if (!this.context || !this.isPlaying) {
      if (permanent) {
        this.enabled = false;
        localStorage.setItem('ambientAudioEnabled', 'false');
        this.syncButton();
      }
      return;
    }

    const stopTime = this.context.currentTime + 1.5;
    if (this.masterGain) {
      this.masterGain.gain.exponentialRampToValueAtTime(0.0001, stopTime);
    }

    this.oscillators.forEach(({ osc, gain, modulationOsc }) => {
      if (gain) gain.gain.exponentialRampToValueAtTime(0.0001, stopTime);
      if (osc) osc.stop(stopTime);
      if (modulationOsc) modulationOsc.stop(stopTime);
    });

    setTimeout(() => {
      this.oscillators = [];
    }, 1800);

    this.isPlaying = false;
    if (permanent) {
      this.enabled = false;
      localStorage.setItem('ambientAudioEnabled', 'false');
    }
    this.syncButton();
  }

  toggle() {
    if (this.enabled && this.isPlaying) {
      this.stop(true);
    } else {
      this.enabled = true;
      this.start();
    }
  }

  syncButton() {
    if (!this.button) return;
    const active = this.enabled;
    this.button.textContent = active ? '🔊 Ambient On' : '🔈 Ambient Off';
    this.button.classList.toggle('active', active);
    this.button.setAttribute('aria-pressed', active ? 'true' : 'false');
  }
}

// ========== Deck Building ==========
function buildDeck() {
  const deck = [];
  // Major Arcana
  MAJOR_TITLES.forEach(title => {
    const id = `major-${fileSafe(title)}`;
    const card = {
      id,
      title,
      type: 'Major',
      suit: 'Major',
      borderColor: MAJOR_BORDER_COLOR,
    };
    // Use getCardImagePath to get correct .jpg image
    card.img = getCardImagePath(card);
    deck.push(card);
  });
  // Minor Arcana - Numbers and Courts
  Object.keys(SUITS).forEach(suit => {
    const suitData = SUITS[suit];
    // Numbered cards
    RANKS.forEach(rank => {
      const title = `${rank} of ${suit}`;
      const id = `minor-${fileSafe(title)}`;
      const card = {
        id,
        title,
        type: 'Minor',
        suit,
        borderColor: suitData.borderColor,
      };
      // Use getCardImagePath to get correct .jpg image
      card.img = getCardImagePath(card);
      deck.push(card);
    });
    // Court cards (filenames use simple titles without role parentheses)
    COURTS.forEach(court => {
      const title = `${court} of ${suit}`;
      const id = `minor-${fileSafe(title)}`;
      const card = {
        id,
        title,
        type: 'Minor',
        suit,
        borderColor: suitData.borderColor,
      };
      // Use getCardImagePath to get correct .jpg image
      card.img = getCardImagePath(card);
      deck.push(card);
    });
  });
  return deck;
}

const FULL_DECK = buildDeck();

// Load card variants map (from assets/cardmap.json) so we can use custom images
let CARD_VARIANTS = new Map();
let CARDMAP_LOADED = false;
async function loadCardVariants() {
  try {
    const res = await fetch('assets/cardmap.json', { cache: 'no-store' });
    if (!res.ok) {
      console.warn('Could not load cardmap.json, using fallback paths');
      return;
    }
    const data = await res.json();
    if (Array.isArray(data.cards)) {
      CARD_VARIANTS = new Map(data.cards.map(c => [c.title, c.variants]));
      CARDMAP_LOADED = true;
      console.log(`✅ Loaded ${data.cards.length} cards from cardmap.json`);

      // Verify all deck cards have images
      const missingCards = FULL_DECK.filter(card => {
        const variants = CARD_VARIANTS.get(card.title);
        return !variants || variants.length === 0;
      });
      if (missingCards.length > 0) {
        console.warn(
          `⚠️ ${missingCards.length} cards missing from cardmap:`,
          missingCards.map(c => c.title)
        );
      } else {
        console.log(`✅ All ${FULL_DECK.length} cards have image variants!`);
      }
    }
  } catch (e) {
    console.warn('Could not load card variants:', e.message);
  }
}

// Consistent card back image for all face-down cards
// Using JPG card back from tools directory (no SVG)
const CARD_BACK_IMAGE = 'tools/CryptoTarot1-78/Cardback-01.jpg';

// Don't block draws: wait for cardmap with timeout so reader always works
let cardmapReady = false;
async function ensureCardmapLoaded() {
  if (cardmapReady) return true;
  if (!CARDMAP_LOADED) {
    await Promise.race([
      loadCardVariants().then(() => new Promise(r => setTimeout(r, 100))),
      new Promise(r => setTimeout(r, 2000)),
    ]);
  }
  cardmapReady = true; // allow draw even if cardmap failed (fallback to CryptoTarot1-78 paths)
  if (CARDMAP_LOADED || CARD_VARIANTS.size > 0) {
    console.log(`✅ Cardmap ready: ${CARD_VARIANTS.size} cards loaded`);
  }
  return cardmapReady;
}

function resolveCardImage(card, useVariant = true, randomVariant = false) {
  // First check if there's a cardmap.json variant (for custom overrides)
  // cardmap.json should point to tools/CryptoTarot1-78/ or assets/cards/ai-generated/
  const variants = CARD_VARIANTS.get(card.title);
  if (variants && variants.length) {
    if (useVariant) {
      if (randomVariant) {
        // For fortune teller: use random variant for each draw (one of a kind)
        const variantIndex = Math.floor(Math.random() * variants.length);
        return variants[variantIndex];
      } else {
        // Use hash-based selection for consistent variant per card (gallery)
        const cardHash = card.title.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        const variantIndex = cardHash % variants.length;
        return variants[variantIndex];
      }
    }
    // Return all variants for display purposes
    return variants;
  }

  // Priority: CryptoTarot1-78 deck first (game reader deck), then ai-generated, then card back
  const cryptoPath = getCardImagePathFromCryptoTarot(card, randomVariant);
  const aiPath = getCardImagePath(card, randomVariant);
  return cryptoPath || aiPath || CARD_BACK_IMAGE;
}

// ========== Gallery Rendering ==========
let galleryFilters = {
  quick: 'all', // 'all' | 'Major' | suit
  query: '',
  type: 'all', // 'all' | 'Major' | 'Minor'
  suit: 'all', // 'all' | Tokens | Liquidity | Security | Nodes
  rank: 'all', // 'all' | Ace|Two|...|King
};

function getCardRank(card) {
  if (card.type === 'Major') return null;
  const [rank] = (card.title || '').split(' of ');
  return rank || null;
}

function matchesFilters(card) {
  // Quick filter (existing buttons)
  if (galleryFilters.quick !== 'all') {
    if (galleryFilters.quick === 'Major') {
      if (card.type !== 'Major') return false;
    } else {
      if (card.suit !== galleryFilters.quick) return false;
    }
  }
  // Type filter
  if (galleryFilters.type !== 'all' && card.type !== galleryFilters.type) return false;
  // Suit filter (only applies to Minor)
  if (galleryFilters.suit !== 'all' && card.suit !== galleryFilters.suit) return false;
  // Rank filter (only applies to Minor)
  if (galleryFilters.rank !== 'all') {
    const r = getCardRank(card);
    if (!r || r !== galleryFilters.rank) return false;
  }
  // Query (simple case-insensitive substring on title)
  if (galleryFilters.query) {
    const q = galleryFilters.query.toLowerCase();
    const t = (card.title || '').toLowerCase();
    if (!t.includes(q)) return false;
  }
  return true;
}

function renderGallery(filter = 'all') {
  if (!deckGrid || !FULL_DECK) return;

  // Clear grid immediately - no fade delays
  deckGrid.innerHTML = '';
  deckGrid.style.opacity = '1';
  deckGrid.style.transform = 'translateY(0)';

  // Verify all 78 cards are present
  const totalCards = FULL_DECK.length;
  if (totalCards !== 78) {
    console.warn(`Expected 78 cards, found ${totalCards}. Some cards may be missing.`);
  }

  // If a direct filter is passed (from quick buttons), mirror into galleryFilters.quick
  if (typeof filter === 'string') {
    galleryFilters.quick = filter || 'all';
  }

  const items = FULL_DECK.filter(card => matchesFilters(card));

  if (items.length === 0) {
    deckGrid.innerHTML =
      '<p class="note" style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--muted);">No cards found.</p>';
    return;
  }

  items.forEach(card => {
    const tile = document.createElement('button');
    tile.className = 'card-tile';
    tile.setAttribute('aria-label', `View ${card.title} details`);
    tile.setAttribute('data-suit', card.suit);
    tile.setAttribute('data-type', card.type);

    const img = document.createElement('img');
    const resolvedSrc = resolveCardImage(card, true);
    // Ensure we have a valid image path
    if (!resolvedSrc || resolvedSrc === CARD_BACK_IMAGE) {
      console.warn(`No image found for card: ${card.title}, using fallback`);
    }
    img.src = resolvedSrc || CARD_BACK_IMAGE;
    img.alt = `${card.title} card`;
    img.loading = 'lazy';
    img.onerror = () => {
      img.src = CARD_BACK_IMAGE;
    };
    tile.appendChild(img);

    const meta = document.createElement('div');
    meta.className = 'tile-meta';
    meta.innerHTML = `
      <p class="tile-title">${escapeHtml(card.title)}</p>
      <p class="tile-sub">${card.type === 'Major' ? 'Major Arcana' : card.suit}</p>
    `;
    tile.appendChild(meta);

    tile.addEventListener('click', () => {
      window.location.href = `card-detail.html?id=${card.id}`;
    });

    deckGrid.appendChild(tile);
  });
}

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.getAttribute('data-filter');
    renderGallery(f);
  });
});

// Search & filter controls
gallerySearch?.addEventListener('input', e => {
  galleryFilters.query = String(e.target.value || '').trim();
  renderGallery();
});
typeFilter?.addEventListener('change', e => {
  galleryFilters.type = e.target.value || 'all';
  renderGallery();
});
suitFilter?.addEventListener('change', e => {
  galleryFilters.suit = e.target.value || 'all';
  renderGallery();
});
rankFilter?.addEventListener('change', e => {
  galleryFilters.rank = e.target.value || 'all';
  renderGallery();
});

// ========== Modal Functions ==========
function openModal(card) {
  if (!modal || !card) return;
  modalImg.src = resolveCardImage(card, true) || CARD_BACK_IMAGE;
  modalImg.alt = `${card.title} card`;
  modalImg.onerror = () => {
    modalImg.src = CARD_BACK_IMAGE;
    modalImg.alt = 'Card image placeholder';
  };
  modalTitle.textContent = card.title;
  const arcanaLabel = card.type === 'Major' ? 'Major Arcana' : `${card.suit} Suit`;
  modalMeta.textContent = arcanaLabel;

  const meta = CARD_MEANINGS[card.title] || {};
  if (modalCosmic) {
    if (meta.cosmicRuler) {
      const summary = meta.cosmicSummary ? ` — ${meta.cosmicSummary}` : '';
      modalCosmic.textContent = `Cosmic Ruler: ${meta.cosmicRuler}${summary}`;
      modalCosmic.style.display = 'block';
    } else {
      modalCosmic.textContent = '';
      modalCosmic.style.display = 'none';
    }
  }
  if (modalCrypto) {
    if (meta.cryptoFlavor) {
      modalCrypto.textContent = `Crypto Flavor: ${meta.cryptoFlavor}`;
      modalCrypto.style.display = 'block';
    } else {
      modalCrypto.textContent = '';
      modalCrypto.style.display = 'none';
    }
  }

  // Get actual meanings from Book of Crypto Tarot Life Meanings
  const uprightMeaning = getCardMeaning(card.title, 'Upright');
  const reversedMeaning = getCardMeaning(card.title, 'Reversed');

  modalUpright.textContent = `Upright: ${uprightMeaning}`;
  modalReversed.textContent = `Reversed: ${reversedMeaning}`;

  modal.classList.add('show');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  if (!modal) return;
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

modalClose?.addEventListener('click', closeModal);
modal?.addEventListener('click', e => {
  if (e.target === modal) closeModal();
});

// Build shareable permalink for current reading
function buildReadingPermalink() {
  try {
    const url = new URL(window.location.href);
    url.searchParams.set('page', 'fortune');
    url.searchParams.set('spread', currentSpreadType);
    if (currentQuestion) url.searchParams.set('q', currentQuestion);
    if (currentReadingCards && currentReadingCards.length) {
      const list = currentReadingCards
        .map(c => `${encodeURIComponent(c.title)}|${c.orientation === 'Reversed' ? 'R' : 'U'}`)
        .join(',');
      url.searchParams.set('cards', list);
    }
    url.hash = '';
    return url.toString();
  } catch (e) {
    console.warn('Failed to build permalink:', e);
    return window.location.href;
  }
}

copyLinkBtn?.addEventListener('click', async () => {
  const link = buildReadingPermalink();
  try {
    await navigator.clipboard.writeText(link);
    const prev = copyLinkBtn.textContent;
    copyLinkBtn.textContent = '✅ Copied!';
    copyLinkBtn.disabled = true;
    setTimeout(() => {
      copyLinkBtn.textContent = prev;
      copyLinkBtn.disabled = false;
    }, 1400);
    trackEvent('reading_link_copied', { spreadType: currentSpreadType });
  } catch (e) {
    console.warn('Clipboard copy failed:', e);
    prompt('Copy this link:', link);
  }
});

printReadingBtn?.addEventListener('click', () => {
  trackEvent('reading_print', { spreadType: currentSpreadType });
  window.print();
});

// Initial gallery render
renderGallery('all');
document.querySelector('.filter-btn[data-filter="all"]')?.classList.add('active');

// ========== Shuffle & Randomizer ==========
// Import shuffle utilities (will be loaded as module or inline)
let cardDrawer = null;

// Initialize card drawer when deck is ready
function initializeCardDrawer() {
  if (typeof window !== 'undefined' && window.shuffleRandomizer) {
    cardDrawer = window.shuffleRandomizer.createCardDrawer(FULL_DECK);
  }
}

// Enhanced random number generator
function getEnhancedRandom() {
  if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
    const array = new Uint32Array(1);
    crypto.getRandomValues(array);
    return array[0] / (0xffffffff + 1);
  }
  const timestamp = Date.now();
  const random1 = Math.random();
  const random2 = Math.random();
  return ((timestamp % 1000) / 1000 + random1 * 0.5 + random2 * 0.5) % 1;
}

// Fisher-Yates shuffle algorithm
function fisherYatesShuffle(array) {
  const shuffled = [...array];
  let currentIndex = shuffled.length;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(getEnhancedRandom() * currentIndex);
    currentIndex--;
    [shuffled[currentIndex], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[currentIndex],
    ];
  }

  return shuffled;
}

// ========== Helper Functions ==========
// escapeHtml is now imported from js/card-utils.js

// ========== Reading Functions ==========
function drawCards(spreadType = '3-card') {
  if (!FULL_DECK || FULL_DECK.length === 0) {
    console.warn('Deck not loaded yet');
    return [];
  }

  try {
    return drawCardsForSpread(FULL_DECK, spreadType);
  } catch (e) {
    console.error('Error drawing cards:', e);
    // Fallback - simple shuffle
    const shuffled = [...FULL_DECK];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    const spread = SPREAD_TYPES[spreadType] || SPREAD_TYPES['3-card'];
    return shuffled.slice(0, spread.cardCount).map((card, idx) => ({
      ...card,
      orientation: Math.random() > 0.5 ? 'Upright' : 'Reversed',
      position: spread.positions[idx] || `Card ${idx + 1}`,
    }));
  }
}

// Legacy function for compatibility
function drawThree() {
  return drawCards('3-card');
}

function renderReading() {
  if (!readingCards || !readingText) return;
  const picks = drawThree();
  if (picks.length === 0) {
    if (readingText) {
      readingText.textContent = 'Error: No cards available.';
      readingText.style.display = 'block';
    }
    return;
  }
  readingCards.innerHTML = '';
  picks.forEach(p => {
    const el = document.createElement('div');
    el.className = 'reading-card';
    const img = document.createElement('img');
    img.src = resolveCardImage(p, true) || CARD_BACK_IMAGE;
    img.alt = `${p.title} (${p.orientation})`;
    img.onerror = () => {
      img.src = CARD_BACK_IMAGE;
      img.alt = 'Card placeholder';
    };
    el.appendChild(img);
    const meta = document.createElement('div');
    meta.className = 'rc-meta';
    meta.textContent = `${p.title} • ${p.orientation}`;
    el.appendChild(meta);
    el.addEventListener('click', () => openModal(p));
    readingCards.appendChild(el);
  });
  if (readingText) {
    readingText.textContent =
      'Your spread is drawn. Click each card to flip and reveal its meaning.';
    readingText.style.display = 'block';
  }
}

// ========== Initialize Deck ==========
// console.log(`Loaded ${FULL_DECK.length} cards from deck.`);
// Verify first few card images exist
FULL_DECK.slice(0, 3).forEach(card => {
  // console.log(`Card: ${card.title}, ID: ${card.id}, Image: ${card.img}`);
});

// Verify deckGrid exists
if (!deckGrid) {
  console.info('Deck gallery not rendered on this layout.');
} else {
  // console.log('deckGrid element found, ready to render');
}

// ========== Event Listeners ==========
// Filter buttons
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.getAttribute('data-filter');
    renderGallery(f);
  });
});

// Modal
modalClose?.addEventListener('click', closeModal);
modal?.addEventListener('click', e => {
  if (e.target === modal) closeModal();
});

// Escape key to close modal
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && modal?.classList.contains('show')) {
    closeModal();
  }
});

// Shuffle button
// Shuffle button - Enhanced shuffle with visual feedback
shuffleBtn?.addEventListener('click', () => {
  shuffleCount++;
  // console.log('Manual shuffle triggered - Shuffle #', shuffleCount);
  trackEvent('deck_shuffled', { shuffleCount });

  // Visual feedback with smooth transitions
  if (shuffleBtn) {
    const originalText = shuffleBtn.textContent;
    shuffleBtn.style.transform = 'scale(0.95)';
    shuffleBtn.textContent = '🔮 Shuffling...';
    shuffleBtn.disabled = true;
    readingCards?.classList.add('is-shuffling');

    setTimeout(() => {
      shuffleBtn.style.transition = 'transform .3s ease';
      shuffleBtn.style.transform = 'scale(1)';
      shuffleBtn.textContent = originalText;
      shuffleBtn.disabled = false;
      setTimeout(() => readingCards?.classList.remove('is-shuffling'), 300);

      // Trigger a new reading
      performFortuneReading();

      // Scroll to reading section after a brief delay
      setTimeout(() => {
        document.getElementById('reading')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }, 500);
  } else {
    // Fallback to old method if button not found
    renderReading();
  }
});

// Wallet connection
connectWalletBtn?.addEventListener('click', async () => {
  if (typeof window.ethereum === 'undefined') {
    alert('No wallet detected. Install a Web3 wallet (e.g., MetaMask) to continue.');
    return;
  }
  try {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    const accounts = await window.ethereum.request({ method: 'eth_accounts' });
    const addr = accounts?.[0];
    if (addr) {
      connectWalletBtn.textContent = `${addr.slice(0, 6)}…${addr.slice(-4)}`;
      connectWalletBtn.classList.add('connected');
    }
  } catch (err) {
    console.error(err);
    alert('Wallet connection was rejected.');
  }
});

// Mint button
mintBtn?.addEventListener('click', async () => {
  if (typeof window.ethereum === 'undefined') {
    alert('Connect a Web3 wallet to mint.');
    return;
  }
  alert('Demo mint triggered. Integrate your contract call here.');
});

// Fallback synthesis for cards not listed in CARD_MEANINGS (Liquidity/Security/Nodes, courts, etc.)
function synthesizeMeaning(title, orientation) {
  const isMajor = !title.includes(' of ');
  if (isMajor) {
    const base = `Core archetype of ${title}.`;
    return orientation === 'Upright'
      ? `${base} Guidance, growth, and clear direction on your crypto path.`
      : `${base} Blocked energy. Reflect, rebalance, and adjust strategy.`;
  }
  const [rank, suit] = title.split(' of ');
  const suitThemes = {
    Tokens: 'assets, value, portfolio construction',
    Liquidity: 'cash flow, AMMs, pools, slippage control',
    Security: 'wallet safety, audits, keys, threat awareness',
    Nodes: 'validators, uptime, decentralization, network health',
  };
  const rankPrompts = {
    Ace: 'beginnings and raw potential',
    Two: 'choices, balance, and alignment',
    Three: 'teamwork, coordination, and planning',
    Four: 'stability, consolidation, and structure',
    Five: 'tests, volatility, and resilience',
    Six: 'recovery, support, and fair exchange',
    Seven: 'assessment, strategy, and patience',
    Eight: 'skill, diligence, and iteration',
    Nine: 'fruition, comfort, and refinement',
    Ten: 'completion, legacy, and long view',
    Page: 'curiosity, study, and messages',
    Knight: 'movement, drive, and consistent action',
    Queen: 'nurturing mastery, quality, and wisdom',
    King: 'authority, leadership, and strategic vision',
  };
  const suitText = suitThemes[suit] || 'core crypto themes';
  const rankText = rankPrompts[rank] || 'meaningful momentum';
  if (orientation === 'Upright') {
    return `${rank} of ${suit}: ${rankText} applied to ${suitText}. Move with intention and learn actively.`;
  }
  return `${rank} of ${suit} reversed: address blind spots and overexposure in ${suitText}. Simplify and secure.`;
}

function getCardMeaning(title, orientation) {
  const card = CARD_MEANINGS[title];
  if (!card) return synthesizeMeaning(title, orientation);
  const m = orientation === 'Upright' ? card.upright : card.reversed;
  return m || synthesizeMeaning(title, orientation);
}

// Store current reading cards globally
let currentReadingCards = [];
let readingStatusTimer = null;
let currentQuestion = '';
let currentSpreadType = '3-card';
let currentReadingId = null;
let shuffleCount = 0; // Track shuffle count for better randomness
let currentReadingCards = [];

// Preload a set of images to warm up cache
function preloadImages(urls = [], timeoutMs = 5000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  const loads = urls.map(
    src =>
      new Promise(resolve => {
        try {
          const img = new Image();
          img.onload = () => resolve({ src, ok: true });
          img.onerror = () => resolve({ src, ok: false });
          img.src = src;
        } catch {
          resolve({ src, ok: false });
        }
      })
  );
  return Promise.race([
    Promise.all(loads).finally(() => clearTimeout(timer)),
    new Promise(resolve => setTimeout(() => resolve([]), timeoutMs)),
  ]);
}

// Fortune Teller Reading - Draw cards based on selected spread
async function performFortuneReading() {
  // Ensure cardmap is loaded before drawing cards
  await ensureCardmapLoaded();

  currentQuestion = questionInput?.value.trim() || 'What does my crypto future hold?';
  currentSpreadType = spreadTypeSelect?.value || '3-card';

  // Increment shuffle count for additional entropy
  shuffleCount++;

  // Show mystical prompt with shuffle animation
  const spread = SPREAD_TYPES[currentSpreadType] || SPREAD_TYPES['3-card'];
  if (!spread) {
    console.error(`Invalid spread type: ${currentSpreadType}, defaulting to 3-card`);
    currentSpreadType = '3-card';
  }
  // Disable share/print until reveal completes
  if (copyLinkBtn) copyLinkBtn.disabled = true;
  if (printReadingBtn) printReadingBtn.disabled = true;
  if (readingStatus) {
    readingStatus.textContent = `🔮 Shuffling the deck for ${spread.name}... Focus on your question...`;
    readingStatus.className = 'reading-status loading';
  }
  if (readingCards) {
    readingCards.innerHTML = '';
    readingCards.style.display = 'flex';
    readingCards.style.opacity = '0';
    readingCards.style.visibility = 'visible';
  }
  if (readingSkeleton) {
    readingSkeleton.classList.add('active');
  }
  if (fortuneReading) {
    fortuneReading.classList.remove('show');
    fortuneReading.innerHTML = '';
    fortuneReading.classList.add('loading');
    fortuneReading.style.display = 'block';
  }
  if (aiReading) {
    aiReading.classList.remove('show');
    aiReading.innerHTML = '';
  }
  if (cardCombinations) {
    cardCombinations.style.display = 'none';
    cardCombinations.innerHTML = '';
  }

  // Draw cards based on spread type
  console.log(
    `Drawing ${spread.cardCount} cards for ${currentSpreadType} spread | Shuffle #`,
    shuffleCount
  );
  if (!FULL_DECK || FULL_DECK.length === 0) {
    if (readingStatus) {
      readingStatus.textContent = 'Error: Deck not loaded. Please refresh the page.';
      readingStatus.className = 'reading-status error';
    }
    if (readingSkeleton) {
      readingSkeleton.classList.remove('active');
    }
    if (readingCards) {
      readingCards.style.display = 'flex';
      readingCards.style.visibility = 'visible';
      readingCards.style.opacity = '1';
    }
    if (fortuneReading) {
      fortuneReading.classList.remove('loading');
      fortuneReading.style.removeProperty('display');
    }
    return;
  }

  // Add small delay for shuffle animation effect
  await new Promise(resolve => setTimeout(resolve, 300 + (shuffleCount % 3) * 100));

  const picks = drawCards(currentSpreadType);
  console.log(
    'Drew cards:',
    picks.map(c => `${c.title} (${c.orientation})`)
  );
  currentReadingCards = picks;
  trackEvent('spread_drawn', {
    spreadType: currentSpreadType,
    question: currentQuestion,
    cards: picks.map(card => ({ title: card.title, orientation: card.orientation })),
  });

  // Add meanings to cards for combination analysis
  picks.forEach(card => {
    card.meaning = getCardMeaning(card.title, card.orientation);
  });

  // Preload images for the picked cards (random variants for uniqueness)
  try {
    const toPreload = picks.map(card => resolveCardImage(card, true, true)).filter(Boolean);
    preloadImages(toPreload);
  } catch (e) {
    console.warn('Preload images failed:', e);
  }

  // Show cards face down initially, then auto-flip to show faces
  renderCardsFaceDown(picks);
  readingCards?.classList.remove('is-shuffling');

  // Ensure cards are visible immediately
  if (readingCards) {
    readingCards.style.display = 'flex';
    readingCards.style.visibility = 'visible';
    readingCards.style.opacity = '1';
  }

  // Auto-flip cards one at a time for smooth performance
  const prefersReduced =
    window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  setTimeout(
    () => {
      const cardElements = Array.from(readingCards.querySelectorAll('.reading-card'));
      let currentIndex = 0;

      function flipNextCard() {
        if (currentIndex < cardElements.length) {
          const card = cardElements[currentIndex];
          if (card.getAttribute('data-flipped') !== 'true') {
            flipSingleCard(card);
          }
          currentIndex++;
          // Wait for current flip to complete before next
          if (currentIndex < cardElements.length) {
            setTimeout(flipNextCard, prefersReduced ? 0 : 600); // One at a time
          }
        }
      }

      flipNextCard();
    },
    prefersReduced ? 0 : 800
  ); // Start after cards appear

  // Smooth scroll to cards
  setTimeout(() => {
    readingCards?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 100);

  // Update status to instruct user to click
  if (readingStatus) {
    const cardWord = spread.cardCount === 1 ? 'card' : 'cards';
    readingStatus.textContent = `✨ ${spread.cardCount} ${cardWord} drawn for the ${spread.name} spread. Cards are revealing...`;
    readingStatus.className = 'reading-status';
    readingStatus.style.opacity = '0';
    readingStatus.style.transform = 'translateY(-10px)';
    setTimeout(() => {
      readingStatus.style.transition = 'opacity .5s ease, transform .5s ease';
      readingStatus.style.opacity = '1';
      readingStatus.style.transform = 'translateY(0)';
    }, 300);

    // Update message after cards flip (one at a time = cardCount * 600ms)
    setTimeout(
      () => {
        readingStatus.textContent = `✨ Your cards are revealed! Click any card to see detailed meanings and insights.`;
      },
      800 + spread.cardCount * 600
    );
  }
}

// Reveal all remaining cards (respects reduced-motion)
function revealAllCards() {
  if (!readingCards) return;
  const prefersReduced =
    window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const gapMs = prefersReduced ? 0 : 300;
  const cards = Array.from(readingCards.querySelectorAll('.reading-card'));
  let i = 0;
  // Disable controls during reveal
  drawCardsBtn && (drawCardsBtn.disabled = true);
  shuffleBtn && (shuffleBtn.disabled = true);
  revealAllBtn && (revealAllBtn.disabled = true);
  function step() {
    if (i >= cards.length) {
      // Re-enable controls shortly after completion
      setTimeout(() => {
        drawCardsBtn && (drawCardsBtn.disabled = false);
        shuffleBtn && (shuffleBtn.disabled = false);
        revealAllBtn && (revealAllBtn.disabled = false);
      }, 200);
      return;
    }
    const el = cards[i++];
    if (el.getAttribute('data-flipped') !== 'true') {
      flipSingleCard(el);
    }
    setTimeout(step, gapMs);
  }
  step();
}

revealAllBtn?.addEventListener('click', () => {
  trackEvent('reveal_all_clicked', { spreadType: currentSpreadType });
  revealAllCards();
});

function renderCardsFaceDown(cards) {
  if (!readingCards) return;
  readingCards.innerHTML = '';
  // Ensure cards container is always visible
  readingCards.style.display = 'flex';
  readingCards.style.visibility = 'visible';
  readingCards.style.opacity = '1'; // Start visible
  readingCards.style.flexDirection = 'row';
  readingCards.style.flexWrap = 'wrap';
  readingCards.style.justifyContent = 'center';
  readingCards.style.gap = '20px';
  readingCards.style.alignItems = 'flex-start';
  readingCards.style.minHeight = '200px';
  if (readingSkeleton) {
    readingSkeleton.classList.remove('active');
    readingSkeleton.style.display = 'none';
  }
  const spread = SPREAD_TYPES[currentSpreadType] || SPREAD_TYPES['3-card'];
  const positions = spread.positions || [];

  cards.forEach((card, idx) => {
    const el = document.createElement('div');
    el.className = 'reading-card';
    el.setAttribute('role', 'listitem');
    el.setAttribute('tabindex', '0');
    el.setAttribute('data-card-index', idx);
    el.setAttribute('data-flipped', 'false');
    el.style.setProperty('--delay', `${idx * 0.12}s`);
    const positionLabel = positions[idx] || `Card ${idx + 1}`;

    // Store card data on the element
    el.cardData = {
      ...card,
      position: positionLabel,
      meaning: getCardMeaning(card.title, card.orientation),
      cosmic: getCosmicData(card.title),
    };

    // For fortune teller: use random variant (one of a kind per draw)
    // This ensures each card in the reading shows a different version
    const cardImageSrc = resolveCardImage(card, true, true);
    // Get fallback path from CryptoTarot1-78
    const fallbackPath = getCardImagePathFromCryptoTarot(card, true) || CARD_BACK_IMAGE;

    if (!cardImageSrc || cardImageSrc === CARD_BACK_IMAGE) {
      console.warn(`No image found for card: ${card.title}, using fallback`);
    }
    el.innerHTML = `
      <div class="card-inner">
        <div class="card-front">
          <div class="card-front-content">
            <img src="${CARD_BACK_IMAGE}" alt="Card Back" style="width: 100%; height: 100%; object-fit: cover; position: absolute; top: 0; left: 0; border-radius: 16px;" />
            <div style="position: relative; z-index: 2; text-align: center;">
              <div class="card-icon">🔮</div>
              <div style="font-weight: 600; margin-top: 8px;">${escapeHtml(positionLabel)}</div>
              <div style="font-size: 11px; margin-top: 6px; opacity: 0.7;">Click to reveal</div>
            </div>
          </div>
        </div>
        <div class="card-back ${card.orientation === 'Reversed' ? 'reversed' : ''}">
          <img src="${cardImageSrc || CARD_BACK_IMAGE}" alt="${escapeHtml(card.title)}" loading="lazy" onerror="this.onerror=null; this.src='${fallbackPath}';" style="width: 100%; height: 100%; object-fit: cover;" />
          <div class="card-back-overlay">
            <div class="card-title">${escapeHtml(card.title)}</div>
            <div class="card-orientation">${escapeHtml(card.orientation)}</div>
          </div>
        </div>
      </div>
      <div class="rc-meta" style="display: none;"></div>
      <div class="rc-meaning" style="display: none;"></div>
    `;

    // Click: flip if face-down, open reading modal if already revealed
    el.addEventListener('click', () => {
      if (el.getAttribute('data-flipped') === 'true') {
        if (modal) openModal(el.cardData);
      } else {
        flipSingleCard(el);
      }
    });
    el.addEventListener('keydown', ev => {
      if (ev.key === 'Enter' || ev.key === ' ') {
        ev.preventDefault();
        if (el.getAttribute('data-flipped') === 'true') {
          if (modal) openModal(el.cardData);
        } else {
          flipSingleCard(el);
        }
      }
    });

    readingCards.appendChild(el);
  });

  // Ensure cards are visible with simple animation
  setTimeout(() => {
    readingCards.style.display = 'flex';
    readingCards.style.visibility = 'visible';
    readingCards.style.opacity = '1';
    // Simple fade-in animation (no complex transforms)
    const cardElements = readingCards.querySelectorAll('.reading-card');
    cardElements.forEach((card, idx) => {
      card.style.opacity = '0';
      card.style.transition = 'opacity 0.4s ease';
      // Simple fade in with slight stagger
      setTimeout(
        () => {
          card.style.opacity = '1';
        },
        idx * 80 + 100
      );
    });
  }, 50);
}

function flipSingleCard(cardElement) {
  if (!cardElement || cardElement.getAttribute('data-flipped') === 'true') {
    return; // Already flipped
  }

  // Add flip animation class (simplified - no extra scale effects)
  cardElement.classList.add('flipping');
  cardElement.setAttribute('data-flipped', 'true');

  const cardData = cardElement.cardData;
  const meta = cardElement.querySelector('.rc-meta');
  const meaningEl = cardElement.querySelector('.rc-meaning');

  // Show card info
  if (meta) {
    meta.textContent = `${cardData.title} • ${cardData.orientation}`;
    meta.style.display = 'block';
  }

  // Show meaning
  if (meaningEl) {
    const meanings = CARD_MEANINGS[cardData.title] || {};
    const uprightText = meanings.upright || cardData.meaning || 'Meaning not available';
    const reversedText = meanings.reversed || cardData.meaning || 'Meaning not available';
    const meaningText = cardData.orientation === 'Upright' ? uprightText : reversedText;

    // Get additional card info
    const cryptoFlavor = meanings.cryptoFlavor || '';
    const strategy = meanings.strategy || '';
    const gameMech = meanings.gameMechanics || null;

    meaningEl.innerHTML = `
      <div class="card-meaning-popup">
        <strong style="color: var(--primary); display: block; margin-bottom: 14px; font-size: 17px; text-transform: uppercase; letter-spacing: 0.8px; font-weight: 700;">${escapeHtml(cardData.position)}</strong>
        <div style="margin-bottom: 16px;">
          <p style="margin: 0 0 12px; color: var(--text); font-size: 16px; line-height: 1.8; font-weight: 500;">${escapeHtml(meaningText)}</p>
        </div>
        ${
          cryptoFlavor
            ? `
          <div style="margin-top: 14px; padding: 12px; background: rgba(212, 175, 55, 0.15); border-left: 3px solid var(--primary); border-radius: 8px;">
            <p style="margin: 0; color: var(--primary); font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Crypto Insight:</p>
            <p style="margin: 6px 0 0; color: var(--text); font-size: 14px; line-height: 1.7;">${escapeHtml(cryptoFlavor)}</p>
          </div>
        `
            : ''
        }
        ${
          strategy
            ? `
          <div style="margin-top: 12px; padding: 12px; background: rgba(155, 89, 182, 0.15); border-left: 3px solid var(--accent); border-radius: 8px;">
            <p style="margin: 0; color: var(--accent); font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Strategy:</p>
            <p style="margin: 6px 0 0; color: var(--text); font-size: 14px; line-height: 1.7;">${escapeHtml(strategy)}</p>
          </div>
        `
            : ''
        }
        ${
          gameMech
            ? `
          <div style="margin-top: 12px; padding: 12px; background: rgba(108, 92, 231, 0.15); border-left: 3px solid var(--secondary); border-radius: 8px;">
            <p style="margin: 0; color: var(--secondary); font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Game: ${gameMech.rarity || 'N/A'}</p>
            ${gameMech.type === 'spell' ? `<p style="margin: 6px 0 0; color: var(--text); font-size: 14px; line-height: 1.7;">${gameMech.spellUpright || ''} / ${gameMech.spellReversed || ''}</p>` : ''}
            ${gameMech.type === 'unit' ? `<p style="margin: 6px 0 0; color: var(--text); font-size: 14px; line-height: 1.7;">Value: ${gameMech.value || 0} | Power: ${gameMech.power || 0}</p>` : ''}
          </div>
        `
            : ''
        }
        ${
          cardData.cosmic
            ? `
          <div style="margin-top: 14px; padding-top: 14px; border-top: 2px solid rgba(212, 175, 55, 0.3);">
            <p style="margin: 0 0 6px; color: var(--primary); font-size: 13px; text-transform: uppercase; letter-spacing: 0.8px; font-weight: 700;">Cosmic: ${escapeHtml(cardData.cosmic.anchor || '')}</p>
            ${cardData.cosmic.element ? `<p style="margin: 4px 0; color: var(--text); font-size: 13px; font-weight: 500;">${escapeHtml(cardData.cosmic.element)} • ${escapeHtml(cardData.cosmic.modality || '')}</p>` : ''}
            ${cardData.cosmic.keywords ? `<p style="margin: 6px 0 0; color: var(--muted); font-size: 13px; font-style: italic; line-height: 1.6;">${escapeHtml(cardData.cosmic.keywords)}</p>` : ''}
          </div>
        `
            : ''
        }
      </div>
    `;
    // Inject TL;DR and Upright/Reversed tabs
    try {
      const popup = meaningEl.querySelector('.card-meaning-popup');
      const firstBlock = popup?.querySelector('strong')?.nextElementSibling;
      const tldrSource =
        (meanings.tldr || '').trim() || (uprightText || '').split(/[.!?]/)[0] || '';
      const tldr =
        tldrSource.length > 0
          ? tldrSource.length > 140
            ? `${tldrSource.slice(0, 140)}…`
            : tldrSource
          : '';
      if (popup && firstBlock) {
        const tldrDiv = document.createElement('div');
        tldrDiv.style.marginBottom = '12px';
        tldrDiv.style.padding = '12px';
        tldrDiv.style.background = 'rgba(212, 175, 55, 0.12)';
        tldrDiv.style.borderLeft = '3px solid var(--primary)';
        tldrDiv.style.borderRadius = '8px';
        tldrDiv.innerHTML = `
          <p style="margin:0; color: var(--primary); font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: .5px;">TL;DR</p>
          <p style="margin:6px 0 0; color: var(--text); font-size: 14px; line-height: 1.7;">${escapeHtml(tldr)}</p>
        `;
        const tabsDiv = document.createElement('div');
        tabsDiv.className = 'meaning-tabs';
        tabsDiv.setAttribute('role', 'tablist');
        tabsDiv.style.display = 'flex';
        tabsDiv.style.gap = '8px';
        tabsDiv.style.margin = '12px 0';
        tabsDiv.innerHTML = `
          <button class="tab-btn" data-tab="upright" role="tab" aria-selected="false" style="padding:8px 12px; border:1px solid rgba(212,175,55,.4); border-radius:8px; background:transparent; color:var(--text); cursor:pointer;">Upright</button>
          <button class="tab-btn" data-tab="reversed" role="tab" aria-selected="false" style="padding:8px 12px; border:1px solid rgba(212,175,55,.2); border-radius:8px; background:transparent; color:var(--text); cursor:pointer;">Reversed</button>
        `;
        const panesDiv = document.createElement('div');
        panesDiv.className = 'meaning-panes';
        const paneU = document.createElement('div');
        paneU.className = 'pane';
        paneU.setAttribute('data-pane', 'upright');
        paneU.style.display = 'none';
        paneU.style.marginBottom = '12px';
        paneU.innerHTML = `<p style="margin:0 0 12px; color: var(--text); font-size:16px; line-height:1.8; font-weight:500;">${escapeHtml(uprightText)}</p>`;
        const paneR = document.createElement('div');
        paneR.className = 'pane';
        paneR.setAttribute('data-pane', 'reversed');
        paneR.style.display = 'none';
        paneR.style.marginBottom = '12px';
        paneR.innerHTML = `<p style="margin:0 0 12px; color: var(--text); font-size:16px; line-height:1.8; font-weight:500;">${escapeHtml(reversedText)}</p>`;
        panesDiv.appendChild(paneU);
        panesDiv.appendChild(paneR);
        popup.insertBefore(tldrDiv, firstBlock);
        popup.insertBefore(tabsDiv, firstBlock);
        popup.insertBefore(panesDiv, firstBlock);
        popup.removeChild(firstBlock);
        const tabs = tabsDiv.querySelectorAll('.tab-btn');
        const panes = panesDiv.querySelectorAll('.pane');
        function setActive(tab) {
          tabs.forEach(b => {
            const active = b.getAttribute('data-tab') === tab;
            b.setAttribute('aria-selected', active ? 'true' : 'false');
            b.style.borderColor = active ? 'var(--primary)' : 'rgba(212,175,55,.2)';
            b.style.background = active ? 'rgba(212,175,55,.12)' : 'transparent';
          });
          panes.forEach(p => {
            p.style.display = p.getAttribute('data-pane') === tab ? 'block' : 'none';
          });
        }
        const initialTab = cardData.orientation === 'Upright' ? 'upright' : 'reversed';
        setActive(initialTab);
        tabs.forEach(b => b.addEventListener('click', () => setActive(b.getAttribute('data-tab'))));
      }
    } catch (e) {
      console.warn('Meaning tabs injection failed:', e);
    }
    meaningEl.style.display = 'block';
    meaningEl.style.opacity = '0';
    meaningEl.style.transform = 'translateY(10px)';
    meaningEl.style.width = '100%';
    meaningEl.style.maxWidth = '100%';
    setTimeout(() => {
      meaningEl.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      meaningEl.style.opacity = '1';
      meaningEl.style.transform = 'translateY(0)';
    }, 400);
  }

  // Check if all cards are flipped, then show full reading
  const allCards = readingCards.querySelectorAll('.reading-card');
  const flippedCount = Array.from(allCards).filter(
    el => el.getAttribute('data-flipped') === 'true'
  ).length;
  const spread = SPREAD_TYPES[currentSpreadType] || SPREAD_TYPES['3-card'];

  if (spread && flippedCount === spread.cardCount) {
    // All cards flipped, show full reading with smooth transition
    setTimeout(() => {
      // Remove loading state first
      if (fortuneReading) {
        fortuneReading.classList.remove('loading');
      }

      // Display reading with fade-in
      displayFortuneReading(currentQuestion, currentReadingCards);

      // Show card combinations with smooth animation
      const combinations = analyzeCardCombination(currentReadingCards);
      if (combinations.length > 0 && cardCombinations) {
        setTimeout(() => {
          displayCardCombinations(combinations);
        }, 300);
      }

      if (readingStatus) {
        readingStatus.textContent = `📖 All ${spread.cardCount} cards revealed! Your reading is below.`;
        readingStatus.className = 'reading-status';
        readingStatus.style.opacity = '0';
        readingStatus.style.transform = 'translateY(-5px)';
        setTimeout(() => {
          readingStatus.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
          readingStatus.style.opacity = '1';
          readingStatus.style.transform = 'translateY(0)';
        }, 100);
      }
      // Enable share/print controls
      if (copyLinkBtn) copyLinkBtn.disabled = false;
      if (printReadingBtn) printReadingBtn.disabled = false;
      // Smooth scroll to reading after animations
      setTimeout(() => {
        fortuneReading?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 1000);
    }, 600); // Reduced delay for faster flow
  }
}

// Legacy function kept for compatibility (not used in new interactive flow)
function flipCards(cards) {
  if (!readingCards) return;
  const cardElements = readingCards.querySelectorAll('.reading-card');
  cardElements.forEach((el, idx) => {
    setTimeout(() => {
      el.classList.add('flipping');
      el.setAttribute('data-flipped', 'true');
      const meta = el.querySelector('.rc-meta');
      if (meta) {
        meta.textContent = `${cards[idx].title} • ${cards[idx].orientation}`;
        meta.style.display = 'block';
      }
    }, idx * 300);
  });
}

function displayCardCombinations(combinations) {
  if (!cardCombinations) return;

  let html =
    '<div class="combinations-container" style="padding: 20px; background: rgba(155,89,182,.1); border: 2px solid rgba(155,89,182,.3); border-radius: 16px;">';
  html +=
    '<h4 style="margin: 0 0 16px; color: var(--accent); font-size: 18px; font-family: \'Crimson Text\', serif;">✨ Card Combinations</h4>';

  combinations.forEach((combo, idx) => {
    html += `<div class="combination-item" data-combo-index="${idx}" style="margin-bottom: 12px; padding: 12px; background: rgba(26,15,46,.5); border-left: 3px solid var(--accent); border-radius: 8px; opacity: 0; transform: translateX(-10px);">`;
    html += `<p style="margin: 0; color: var(--text); font-size: 14px; line-height: 1.6;">${combo.message}</p>`;
    html += `</div>`;
  });

  html += '</div>';
  cardCombinations.innerHTML = html;
  cardCombinations.style.display = 'block';
  cardCombinations.style.opacity = '0';
  cardCombinations.style.transform = 'translateY(10px)';

  // Fade in container
  setTimeout(() => {
    cardCombinations.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    cardCombinations.style.opacity = '1';
    cardCombinations.style.transform = 'translateY(0)';

    // Animate each combination item
    const items = cardCombinations.querySelectorAll('.combination-item');
    items.forEach((item, idx) => {
      setTimeout(
        () => {
          item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
          item.style.opacity = '1';
          item.style.transform = 'translateX(0)';
        },
        idx * 100 + 200
      );
    });
  }, 100);
}

function displayFortuneReading(question, cards) {
  if (!fortuneReading) return;

  const spread = SPREAD_TYPES[currentSpreadType];
  const positions = spread.positions;

  // Build simplified, action-oriented readings
  const mysticalOpenings = [
    'Welcome, seeker of digital destinies... The cards have chosen to reveal their wisdom to you.',
    'Ah, traveler of the blockchain realm... The oracle has heard your question and the cards respond.',
    'In this sacred moment, the cards align... Their message flows from the digital ether to your heart.',
    'The mystical deck awakens... Three cards emerge, each holding a piece of your story.',
    "Sit in the glow of the fortune teller's palace... The cards sense your energy and prepare to speak.",
  ];
  const opening = mysticalOpenings[Math.floor(Math.random() * mysticalOpenings.length)];

  // Build advisory lines for each card
  function buildAdvisoryLine(title, orientation, position, baseMeaning) {
    const isUpright = orientation === 'Upright';
    const verb = isUpright ? 'Do' : 'Avoid';
    const nudge = isUpright ? 'lean into' : 'reduce exposure to';
    const focus = baseMeaning ? baseMeaning.toLowerCase() : title;
    if (position === 'Past')
      return `${verb}: Keep what works from your past with ${title}; ${nudge} patterns that drain you.`;
    if (position === 'Present')
      return `${verb}: Take one clear step today guided by ${title}; ${nudge} distraction—act simply.`;
    return `${verb}: Prepare for what ${title} signals; ${nudge} rushed decisions—plan now.`;
  }

  // Build suggestions list
  function buildSuggestions(cardReadings) {
    const tips = [];
    cardReadings.forEach(entry => {
      const sentence = (entry.advisory || '').split('.').shift();
      if (sentence && tips.length < 4) tips.push(`${sentence.trim()}.`);
    });
    if (tips.length < 4) tips.push('DYOR: Verify claims, read docs, and confirm contract safety.');
    if (tips.length < 4)
      tips.push('Risk-manage: Size positions, avoid overexposure, keep dry powder.');
    return tips;
  }

  const cardReadings = cards.map((card, idx) => {
    const meaning = getCardMeaning(card.title, card.orientation);
    const cosmic = getCosmicData(card.title);
    const advisory = buildAdvisoryLine(card.title, card.orientation, positions[idx], meaning);
    const meta = CARD_MEANINGS[card.title] || {};
    return {
      position: positions[idx],
      title: card.title,
      orientation: card.orientation,
      meaning,
      advisory,
      cosmic,
      meta,
      originalCard: card,
    };
  });

  cardReadings.forEach((entry, idx) => {
    if (!cards[idx]) return;
    cards[idx] = {
      ...cards[idx],
      position: entry.position,
      meaning: entry.meaning,
      cosmic: entry.cosmic,
      meta: entry.meta,
      advisory: entry.advisory,
    };
  });

  const safeQuestion =
    question && question.trim().length
      ? escapeHtml(question.trim())
      : 'What does my crypto future hold?';

  const introHtml = `
    <div class="fortune-reading-intro">
      ${escapeHtml(opening)}
    </div>
  `;

  const questionHtml = `
    <div class="fortune-question">
      <strong>Question:</strong> <em>"${safeQuestion}"</em>
    </div>
  `;

  const cardSections = cardReadings
    .map((entry, index) => {
      const { meta, cosmic, originalCard } = entry;
      const orientationClass =
        entry.orientation === 'Upright'
          ? 'orientation-chip'
          : 'orientation-chip orientation-reversed';

      const tags = [];
      if (cosmic?.anchor)
        tags.push(`<span class="card-tag">Cosmic: ${escapeHtml(cosmic.anchor)}</span>`);
      if (meta.arcana) tags.push(`<span class="card-tag">${escapeHtml(meta.arcana)}</span>`);
      if (originalCard?.suit && originalCard.suit !== 'Major') {
        tags.push(`<span class="card-tag">${escapeHtml(originalCard.suit)} Suit</span>`);
      }

      const detailLines = [`<p>${escapeHtml(entry.meaning)}</p>`];

      if (meta.cryptoFlavor)
        detailLines.push(`<p><strong>Crypto Flavor:</strong> ${escapeHtml(meta.cryptoFlavor)}</p>`);
      if (meta.educationalInsight)
        detailLines.push(
          `<p><strong>Educational Insight:</strong> ${escapeHtml(meta.educationalInsight)}</p>`
        );
      if (meta.foresight)
        detailLines.push(`<p><strong>Foresight:</strong> ${escapeHtml(meta.foresight)}</p>`);
      if (meta.strategy)
        detailLines.push(`<p><strong>Strategy:</strong> ${escapeHtml(meta.strategy)}</p>`);

      const cosmicDetail = cosmic
        ? `
      <div class="card-detail-grid">
        ${cosmic.anchor ? `<p><strong>Anchor:</strong> ${escapeHtml(cosmic.anchor)}</p>` : ''}
        ${cosmic.element ? `<p><strong>Element:</strong> ${escapeHtml(cosmic.element)}</p>` : ''}
        ${cosmic.modality ? `<p><strong>Modality:</strong> ${escapeHtml(cosmic.modality)}</p>` : ''}
        ${cosmic.numerology ? `<p><strong>Numerology:</strong> ${escapeHtml(cosmic.numerology)}</p>` : ''}
        ${cosmic.window ? `<p><strong>Window:</strong> ${escapeHtml(cosmic.window)}</p>` : ''}
      </div>
      ${cosmic.keywords ? `<p>${escapeHtml(cosmic.keywords)}</p>` : ''}
    `
        : '';

      const detailsHtml =
        detailLines.length || cosmicDetail
          ? `<details class="card-details">
          <summary>Detailed meaning & lore</summary>
          ${detailLines.join('')}
          ${cosmicDetail}
        </details>`
          : '';

      const tagHtml = tags.length ? `<div class="fortune-card-tags">${tags.join('')}</div>` : '';

      return `
      <article class="fortune-card-section" data-card-index="${index}">
        <header class="fortune-card-header">
          <div>
            <span class="position-chip">${escapeHtml(entry.position)}</span>
            <h4>${escapeHtml(entry.title)}</h4>
          </div>
          <span class="${orientationClass}">${escapeHtml(entry.orientation)}</span>
        </header>
        ${tagHtml}
        <p class="card-meaning-main">${escapeHtml(entry.advisory)}</p>
        ${detailsHtml}
      </article>
    `;
    })
    .join('');

  const suggestionItems = buildSuggestions(cardReadings);
  const suggestionsHtml = suggestionItems.length
    ? `
    <div class="fortune-synthesis">
      <h4 class="fortune-synthesis-title">Suggested actions</h4>
      <ul class="fortune-suggestions">
        ${suggestionItems.map(tip => `<li>${escapeHtml(tip)}</li>`).join('')}
      </ul>
    </div>
  `
    : '';

  const closingHtml = `
    <div class="fortune-closing">
      ✨ For entertainment purposes only. Not financial advice. Always DYOR (Do Your Own Research). ✨
    </div>
  `;

  fortuneReading.innerHTML = `
    <h3>🔮 The Fortune Teller's Reading</h3>
    <div class="fortune-reading-content">
      ${introHtml}
      ${questionHtml}
      ${cardSections}
      ${suggestionsHtml}
      ${closingHtml}
    </div>
  `;
  fortuneReading.classList.remove('loading');
  fortuneReading.style.display = 'block';
  fortuneReading.style.opacity = '0';
  fortuneReading.style.transform = 'translateY(20px)';

  currentReadingCards = cards;

  // Smooth fade-in for reading container
  setTimeout(() => {
    fortuneReading.classList.add('show');
    fortuneReading.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fortuneReading.style.opacity = '1';
    fortuneReading.style.transform = 'translateY(0)';

    // Animate reading sections one by one for fluid flow
    const sections = fortuneReading.querySelectorAll(
      '.fortune-reading-intro, .fortune-question, .fortune-card-section, .fortune-synthesis, .fortune-closing'
    );
    sections.forEach((section, idx) => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(15px)';
      setTimeout(
        () => {
          section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
          section.style.opacity = '1';
          section.style.transform = 'translateY(0)';
        },
        idx * 120 + 200
      );
    });
  }, 100);

  // Save reading automatically
  const savedReading = readingHistory.saveReading({
    question,
    cards: cards.map(c => ({
      title: c.title,
      orientation: c.orientation,
      position: c.position,
      meaning: c.meaning,
    })),
    spreadType: currentSpreadType,
    reading: fortuneReading.innerHTML,
  });

  currentReadingId = savedReading.id;
}

function showReadingMessage(message, variant = 'info') {
  if (!readingStatus) return;
  readingStatus.textContent = message;
  readingStatus.className = `reading-status ${variant}`;
  if (readingStatusTimer) clearTimeout(readingStatusTimer);
  readingStatusTimer = setTimeout(() => {
    readingStatus.textContent = '';
    readingStatus.className = 'reading-status';
  }, 3200);
}

async function copyCardMeaning(index) {
  const card = currentReadingCards[index];
  if (!card) return;

  const meta = CARD_MEANINGS[card.title] || {};
  const lines = [
    `${card.position}: ${card.title} (${card.orientation})`,
    card.meaning ? `Meaning: ${card.meaning}` : '',
    meta.foresight ? `Foresight: ${meta.foresight}` : '',
    meta.cryptoFlavor ? `Crypto Flavor: ${meta.cryptoFlavor}` : '',
    meta.strategy ? `Strategy: ${meta.strategy}` : '',
  ].filter(Boolean);

  const copyText = lines.join('\n');

  try {
    if (navigator?.clipboard?.writeText) {
      await navigator.clipboard.writeText(copyText);
      showReadingMessage('Card meaning copied to clipboard ✨');
    } else {
      throw new Error('Clipboard API unavailable');
    }
  } catch (error) {
    showReadingMessage('Copy failed. Highlight and copy manually.', 'error');
    console.warn('Clipboard copy failed:', error);
  }
}

// Legacy function - kept for potential future use but not currently called
// The reading now uses simplified advisory format instead

function displayAIReading(text, cards) {
  if (!aiReading) return;
  aiReading.innerHTML = `
    <h3>📚 Your Educational Reading</h3>
    <div class="ai-reading-content">${formatReading(text)}</div>
    <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid rgba(0,245,160,.2);">
      <strong style="color: var(--primary);">💡 What You Learned:</strong>
      <p style="margin: 8px 0 0; color: var(--muted); font-size: 13px; line-height: 1.6;">
        Each card teaches crypto concepts: blockchain technology, market dynamics, DeFi protocols, risk management, and safe practices. Explore more cards to continue learning!
      </p>
    </div>
  `;
  aiReading.classList.add('show');
}

function formatReading(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n/g, '<br>')
    .replace(/^/, '<p>')
    .replace(/$/, '</p>');
}

// AI Service functions (simplified inline)
async function getAIReading(question, cards) {
  const OPENAI_API_KEY = localStorage.getItem('OPENAI_API_KEY');
  const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

  const cardDescriptions = cards
    .map((card, idx) => {
      const position = ['Past', 'Present', 'Future'][idx];
      return `${position}: ${card.title} (${card.orientation}) - ${card.meaning}`;
    })
    .join('\n');

  const prompt = `You are an educational Crypto Tarot reader who teaches blockchain and cryptocurrency concepts through mystical card readings.

The user asked: "${question}"

The three cards drawn are:
${cardDescriptions}

Provide an educational interpretation that:
1. TEACHES crypto concepts relevant to their question (explain blockchain, DeFi, staking, wallets, etc.)
2. Explains WHAT MAKES crypto work (blockchain tech, consensus mechanisms, cryptography)
3. Explains WHAT MOVES crypto markets (supply/demand, adoption, regulation, technology)
4. Explains HOW TO INTERACT with crypto safely (wallets, exchanges, DYOR, avoiding scams)
5. Weaves the three cards (Past, Present, Future) into a cohesive learning narrative
6. Uses the crypto tarot theme but prioritizes education over mysticism
7. Is clear and educational (3-4 paragraphs), suitable for beginners

Format: Start with the reading, then explain the key concepts they should learn.`;

  const response = await fetch(OPENAI_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content:
            'You are an educational Crypto Tarot reader who teaches blockchain, DeFi, NFTs, and cryptocurrency fundamentals through mystical card readings. Always prioritize clear education over mysticism.',
        },
        { role: 'user', content: prompt },
      ],
      temperature: 0.8,
      max_tokens: 600,
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error?.message || 'Failed to get AI reading');
  }

  const data = await response.json();
  return data.choices[0]?.message?.content || 'Unable to generate reading.';
}

function getFallbackReading(question, cards) {
  const positions = ['Past', 'Present', 'Future'];
  const interpretations = cards
    .map((card, idx) => {
      return `The ${positions[idx]} card is ${card.title} (${card.orientation}), which suggests: ${card.meaning}`;
    })
    .join('\n\n');

  return `**Your Question:** "${question}"\n\n**The Cards Reveal:**\n${interpretations}\n\n**What This Teaches You:**\nThese cards reflect different aspects of your crypto journey. The Past shows what brought you here, the Present reveals current opportunities or challenges, and the Future suggests where your path leads. Use this as a lens to understand blockchain fundamentals, market dynamics, and practical crypto strategies.\n\n💡 **Key Learning:** Every card in the Crypto Tarot teaches concepts about blockchain technology, DeFi protocols, market forces, or risk management. Explore the deck to discover more!`;
}

// Event listeners for fortune teller game
if (drawCardsBtn) {
  drawCardsBtn.addEventListener('click', e => {
    e.preventDefault();
    // console.log('Draw cards button clicked');
    trackEvent('draw_button_clicked', {
      spreadType: spreadTypeSelect?.value || '3-card',
      question: questionInput?.value?.trim() || '',
    });
    try {
      performFortuneReading();
    } catch (error) {
      console.error('Error in fortune reading:', error);
      if (readingStatus) {
        readingStatus.textContent = 'Error: ' + error.message;
        readingStatus.className = 'reading-status error';
      }
    }
  });
} else {
  console.error('drawCardsBtn not found!');
}

waitlistCta?.addEventListener('click', () => {
  trackEvent('cta_clicked', {
    id: 'waitlist',
    href: waitlistCta.href,
  });
});

launchPlanLink?.addEventListener('click', () => {
  trackEvent('cta_clicked', {
    id: 'launch_plan',
    href: launchPlanLink.href,
  });
});

// API Key Modal
function closeApiKeyModal() {
  if (!apiKeyModal) return;
  apiKeyModal.classList.remove('show');
  apiKeyModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

saveApiKeyBtn?.addEventListener('click', () => {
  const key = apiKeyInput?.value.trim();
  if (key) {
    localStorage.setItem('OPENAI_API_KEY', key);
    closeApiKeyModal();
    alert('API key saved! You can now use AI-powered readings.');
  }
});

apiKeyClose?.addEventListener('click', closeApiKeyModal);
apiKeyModal?.addEventListener('click', e => {
  if (e.target === apiKeyModal) closeApiKeyModal();
});

// ========== Disclaimer Banner ==========
const disclaimerBanner = document.getElementById('disclaimerBanner');
const dismissBanner = document.getElementById('dismissBanner');

dismissBanner?.addEventListener('click', () => {
  if (disclaimerBanner) {
    disclaimerBanner.style.transition = 'opacity .3s ease, transform .3s ease';
    disclaimerBanner.style.opacity = '0';
    disclaimerBanner.style.transform = 'translateY(-100%)';
    setTimeout(() => {
      disclaimerBanner.classList.add('hidden');
      localStorage.setItem('disclaimerDismissed', 'true');
    }, 300);
  }
});

// Check if banner was previously dismissed
if (localStorage.getItem('disclaimerDismissed') === 'true' && disclaimerBanner) {
  disclaimerBanner.classList.add('hidden');
}

// ========== Reading History ==========
if (viewHistoryBtn) {
  viewHistoryBtn.addEventListener('click', () => {
    showReadingHistory();
  });
}

function showReadingHistory() {
  const readings = readingHistory.getAllReadings();
  const count = readings.length;
  trackEvent('reading_history_opened', { count });

  if (count === 0) {
    alert('No readings saved yet. Draw some cards to create your first reading!');
    return;
  }

  // Create modal for history
  const historyModal = document.createElement('div');
  historyModal.className = 'modal show';
  historyModal.setAttribute('aria-hidden', 'false');
  historyModal.innerHTML = `
    <div class="modal-dialog" style="max-width: 800px; max-height: 80vh; overflow-y: auto;">
      <button class="modal-close" onclick="this.closest('.modal').remove()" aria-label="Close">×</button>
      <div class="modal-body" style="grid-template-columns: 1fr;">
        <h3>📜 Reading History (${count})</h3>
        <div style="margin-top: 16px;">
          ${readings
            .map(reading => {
              const date = new Date(reading.timestamp).toLocaleString();
              return `
              <div style="margin-bottom: 16px; padding: 16px; background: rgba(45,27,78,.4); border-radius: 12px; border-left: 3px solid var(--primary);">
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 8px;">
                  <div>
                    <strong style="color: var(--primary);">${date}</strong>
                    <p style="margin: 4px 0; color: var(--muted); font-size: 13px;">${reading.spreadType} • ${reading.question}</p>
                  </div>
                  <div style="display: flex; gap: 8px;">
                    <button onclick="window.shareReading('${reading.id}')" class="btn btn-outline" style="padding: 6px 12px; font-size: 12px;">📋</button>
                    <button onclick="window.deleteReading('${reading.id}')" class="btn btn-outline" style="padding: 6px 12px; font-size: 12px;">🗑️</button>
                  </div>
                </div>
                <div style="color: var(--text); font-size: 13px;">
                  ${reading.cards.map(c => `${c.position}: ${c.title} (${c.orientation})`).join(' • ')}
                </div>
              </div>
            `;
            })
            .join('')}
        </div>
        <div style="margin-top: 20px; padding-top: 16px; border-top: 1px solid rgba(212,175,55,.2);">
          <button onclick="window.clearAllReadings()" class="btn btn-outline" style="width: 100%;">Clear All History</button>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(historyModal);
  document.body.style.overflow = 'hidden';

  historyModal.addEventListener('click', e => {
    if (e.target === historyModal) {
      historyModal.remove();
      document.body.style.overflow = '';
    }
  });
}

// Global functions for history modal buttons
window.shareReading = async function (id) {
  const reading = readingHistory.getReading(id);
  if (reading) {
    trackEvent('reading_shared', { id });
    const success = await readingHistory.copyToClipboard(reading);
    if (success) {
      alert('Reading copied to clipboard!');
    }
  }
};

window.deleteReading = function (id) {
  if (confirm('Delete this reading?')) {
    trackEvent('reading_deleted', { id });
    readingHistory.deleteReading(id);
    document.querySelector('.modal.show')?.remove();
    document.body.style.overflow = '';
    showReadingHistory();
  }
};

window.clearAllReadings = function () {
  if (confirm('Clear all reading history? This cannot be undone.')) {
    trackEvent('reading_history_cleared', {});
    readingHistory.clearAll();
    document.querySelector('.modal.show')?.remove();
    document.body.style.overflow = '';
    alert('All readings cleared.');
  }
};

const ambientSoundscape = new AmbientSoundscape(ambientAudioToggle);
window.cryptoTarotAmbient = ambientSoundscape;

// ========== Initial Render ==========
// Wait for DOM to be fully loaded
// Initialize immediately
function initializePage() {
  // Set year
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Load card variants
  loadCardVariants();

  // Ensure reading section is visible immediately
  const readingSection = document.getElementById('reading');
  if (readingSection) {
    readingSection.style.display = 'flex';
    readingSection.style.visibility = 'visible';
    readingSection.style.opacity = '1';
  }

  // Render gallery immediately with all cards
  if (deckGrid) {
    renderGallery('all');
    document.querySelector('.filter-btn[data-filter="all"]')?.classList.add('active');
  }

  // Start countdown
  startLaunchCountdown();

  // Display deck stats
  displayDeckStats();
}

// Display deck statistics
function displayDeckStats() {
  const statsContainer = document.getElementById('deckStats');
  if (!statsContainer || !FULL_DECK) return;

  const majorCount = FULL_DECK.filter(c => c.type === 'Major').length;
  const minorCount = FULL_DECK.filter(c => c.type === 'Minor').length;
  const tokensCount = FULL_DECK.filter(c => c.suit === 'Tokens').length;
  const liquidityCount = FULL_DECK.filter(c => c.suit === 'Liquidity').length;
  const securityCount = FULL_DECK.filter(c => c.suit === 'Security').length;
  const nodesCount = FULL_DECK.filter(c => c.suit === 'Nodes').length;

  // Count cards with game mechanics
  const withGameMech = FULL_DECK.filter(c => {
    const meanings = CARD_MEANINGS[c.title];
    return meanings && meanings.gameMechanics;
  }).length;

  statsContainer.innerHTML = `
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-value">${FULL_DECK.length}</div>
        <div class="stat-label">Total Cards</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${majorCount}</div>
        <div class="stat-label">Major Arcana</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${minorCount}</div>
        <div class="stat-label">Minor Arcana</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${withGameMech}</div>
        <div class="stat-label">With Game Mechanics</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${tokensCount}</div>
        <div class="stat-label">Tokens Suit</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${liquidityCount}</div>
        <div class="stat-label">Liquidity Suit</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${securityCount}</div>
        <div class="stat-label">Security Suit</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${nodesCount}</div>
        <div class="stat-label">Nodes Suit</div>
      </div>
    </div>
  `;
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializePage);
} else {
  // DOM already loaded
  initializePage();
}
