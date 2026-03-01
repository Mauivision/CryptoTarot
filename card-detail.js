// Card Detail Page - Shows individual card meaning
// Gets card ID from URL parameter and displays full meaning

import { CARD_MEANINGS } from './data/card-meanings.js';
import { fileSafe, getCardImagePath, escapeHtml } from './js/card-utils.js';

// fileSafe, getCardImagePath, and escapeHtml are now imported from js/card-utils.js

function getCardFromId(cardId) {
  // Try to find card by ID
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

  const SUITS = ['Tokens', 'Liquidity', 'Security', 'Nodes'];
  const RANKS = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];
  const COURTS = ['Page', 'Knight', 'Queen', 'King'];

  // Check if it's a major
  for (const title of MAJOR_TITLES) {
    if (fileSafe(`major-${title}`) === cardId || fileSafe(title) === cardId.replace('major-', '')) {
      const card = {
        title,
        type: 'Major',
        suit: 'Major',
        img: `assets/cards/major-${fileSafe(title)}.svg`,
        id: cardId,
      };
      // Override with correct image path
      card.img = getCardImagePath(card);
      return card;
    }
  }

  // Check if it's a minor
  for (const suit of SUITS) {
    for (const rank of [...RANKS, ...COURTS]) {
      const title = `${rank} of ${suit}`;
      const id = `minor-${fileSafe(title)}`;
      if (id === cardId || fileSafe(title) === cardId.replace('minor-', '')) {
        const card = {
          title,
          type: 'Minor',
          suit,
          img: `assets/cards/${id}.svg`,
          id: cardId,
        };
        // Override with correct image path
        card.img = getCardImagePath(card);
        return card;
      }
    }
  }

  return null;
}

function displayCardDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const cardId = urlParams.get('id');

  if (!cardId) {
    document.getElementById('cardDetail').innerHTML = `
      <div style="text-align: center; padding: 40px;">
        <h2>Card Not Found</h2>
        <p>No card ID provided. <a href="index.html">Return to deck</a></p>
      </div>
    `;
    return;
  }

  const card = getCardFromId(cardId);
  if (!card) {
    document.getElementById('cardDetail').innerHTML = `
      <div style="text-align: center; padding: 40px;">
        <h2>Card Not Found</h2>
        <p>Card "${cardId}" not found. <a href="index.html">Return to deck</a></p>
      </div>
    `;
    return;
  }

  const meanings = CARD_MEANINGS[card.title] || {
    upright: 'Meaning not available',
    reversed: 'Meaning not available',
    foresight: 'Foresight not available',
  };
  const arcanaLabel = card.type === 'Major' ? 'Major Arcana' : `${card.suit} Suit`;
  const cosmicLine = meanings.cosmicRuler
    ? `Cosmic Ruler: <strong>${meanings.cosmicRuler}</strong>${meanings.cosmicSummary ? ` — ${meanings.cosmicSummary}` : ''}`
    : '';
  const numberLine =
    typeof meanings.number === 'number'
      ? `${card.type === 'Major' ? 'Major Key' : 'Rank'} Number: ${meanings.number}`
      : '';
  const cryptoLine = meanings.cryptoFlavor ? meanings.cryptoFlavor : '';

  // Update page title
  document.getElementById('pageTitle').textContent = `${card.title} - Crypto Tarot`;

  // Display card detail
  document.getElementById('cardDetail').innerHTML = `
    <div class="card-detail-container">
      <div class="card-detail-image">
        <img src="${card.img}" alt="${escapeHtml(card.title)}" loading="lazy" onerror="this.onerror=null; this.src='tools/CryptoTarot1-78/Cardback-01.jpg';" />
      </div>
      <div class="card-detail-content">
        <h1 style="margin: 0 0 8px; font-size: 32px;">${escapeHtml(card.title)}</h1>
        <p class="note" style="margin-bottom: 12px;">${arcanaLabel}</p>
        ${numberLine ? `<p class="note" style="margin-bottom: 12px;">${numberLine}</p>` : ''}
        ${
          cosmicLine
            ? `
        <div class="card-meaning-section" style="background: rgba(139,92,246,.08); padding: 16px; border-radius: 10px; border-left: 3px solid var(--accent); margin-bottom: 20px;">
          <h2 style="color: var(--accent); margin-bottom: 8px;">Cosmic Alignment</h2>
          <p style="font-size: 15px; line-height: 1.7; margin: 0;">${cosmicLine}</p>
        </div>`
            : ''
        }
        ${
          cryptoLine
            ? `
        <div class="card-meaning-section" style="background: rgba(0,245,160,.08); padding: 16px; border-radius: 10px; border-left: 3px solid var(--primary); margin-bottom: 20px;">
          <h2 style="color: var(--primary); margin-bottom: 8px;">Crypto Flavor</h2>
          <p style="font-size: 15px; line-height: 1.7; margin: 0;">${cryptoLine}</p>
        </div>`
            : ''
        }

        <div class="card-meaning-section">
          <h2 style="color: var(--primary); margin-bottom: 12px;">Upright Meaning</h2>
          <p style="font-size: 16px; line-height: 1.8; margin-bottom: 24px;">${meanings.upright}</p>
        </div>

        <div class="card-meaning-section">
          <h2 style="color: var(--accent); margin-bottom: 12px;">Reversed Meaning</h2>
          <p style="font-size: 16px; line-height: 1.8; margin-bottom: 24px;">${meanings.reversed}</p>
        </div>

        <div class="card-meaning-section" style="background: rgba(0,245,160,.05); padding: 16px; border-radius: 10px; border-left: 3px solid var(--primary);">
          <h3 style="color: var(--primary); margin-bottom: 8px;">Crypto Foresight</h3>
          <p style="font-size: 15px; line-height: 1.7; margin: 0;">${meanings.foresight}</p>
        </div>

        ${
          meanings.bookChapter
            ? `
        <div class="card-meaning-section" style="background: rgba(155,89,182,.1); padding: 24px; border-radius: 10px; border-left: 3px solid #9b59b6; margin-top: 24px;">
          <h2 style="color: #bb86fc; margin-bottom: 16px; font-size: 22px;">Book Chapter</h2>
          <div style="font-size: 16px; line-height: 1.85;">
            ${meanings.bookChapter
              .split('\n\n')
              .filter(p => p.trim())
              .map(p => `<p style="margin: 12px 0;">${p.trim()}</p>`)
              .join('')}
          </div>
        </div>
        `
            : ''
        }

        <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #152034;">
          <a href="index.html" class="btn btn-primary">← Back to Deck</a>
        </div>
      </div>
    </div>
  `;
}

// Initialize year
document.getElementById('year').textContent = new Date().getFullYear().toString();

// Load card detail
displayCardDetail();
