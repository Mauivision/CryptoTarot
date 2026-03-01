// Educational Crypto Tarot - Main Script
// Import modules (will be converted to work with current setup)

import { CARD_MEANINGS } from './data/card-meanings.js';
import { getCardEducation } from './data/crypto-education.js';
import { isAIConfigured, setAPIKey, getAIReading, getFallbackReading } from './js/ai-service.js';

// ========== DOM Elements ==========
const questionInput = document.getElementById('questionInput');
const drawCardsBtn = document.getElementById('drawCardsBtn');
const readingStatus = document.getElementById('readingStatus');
const readingCards = document.getElementById('readingCards');
const aiReading = document.getElementById('aiReading');
const apiKeyModal = document.getElementById('apiKeyModal');
const apiKeyInput = document.getElementById('apiKeyInput');
const saveApiKeyBtn = document.getElementById('saveApiKeyBtn');
const apiKeyClose = document.getElementById('apiKeyClose');

// ========== Card Meanings Data ==========
// Import from card-meanings.js or define inline
const cardMeanings = CARD_MEANINGS || {};

// ========== Educational Reading Flow ==========
async function performEducationalReading() {
  const question = questionInput?.value.trim() || 'Teach me about crypto';

  if (!question) {
    readingStatus.textContent = 'Please enter a question about crypto.';
    readingStatus.className = 'reading-status error';
    return;
  }

  // Show loading
  readingStatus.textContent = 'Shuffling the deck and drawing your cards...';
  readingStatus.className = 'reading-status loading';
  readingCards.innerHTML = '';
  aiReading.classList.remove('show');
  aiReading.innerHTML = '';

  // Draw 3 cards
  const picks = drawThree();

  // Show cards face down first, then flip
  renderCardsFaceDown(picks);

  // After delay, flip cards
  setTimeout(() => {
    flipCards(picks);
  }, 800);

  // Get AI reading (or fallback)
  setTimeout(async () => {
    try {
      let readingText;
      if (isAIConfigured()) {
        readingStatus.textContent = 'Generating educational reading...';
        readingText = await getAIReading(
          question,
          picks.map(p => ({
            title: p.title,
            orientation: p.orientation,
            meaning: getCardMeaning(p.title, p.orientation),
          }))
        );
      } else {
        readingText = getFallbackReading(
          question,
          picks.map(p => ({
            title: p.title,
            orientation: p.orientation,
            meaning: getCardMeaning(p.title, p.orientation),
          }))
        );
      }

      displayAIReading(readingText, picks);
      readingStatus.textContent = '';
      readingStatus.className = 'reading-status';
    } catch (error) {
      console.error('Reading error:', error);
      readingStatus.textContent = error.message || 'Error generating reading. Using fallback.';
      readingStatus.className = 'reading-status error';
      const fallback = getFallbackReading(
        question,
        picks.map(p => ({
          title: p.title,
          orientation: p.orientation,
          meaning: getCardMeaning(p.title, p.orientation),
        }))
      );
      displayAIReading(fallback, picks);
    }
  }, 2000);
}

function getCardMeaning(title, orientation) {
  const card = cardMeanings[title];
  if (!card) return 'Card meaning not available.';
  return orientation === 'Upright' ? card.upright : card.reversed;
}

function renderCardsFaceDown(cards) {
  readingCards.innerHTML = '';
  cards.forEach((card, idx) => {
    const el = document.createElement('div');
    el.className = 'reading-card';
    el.innerHTML = `
      <div class="card-inner">
        <div class="card-front">
          <div class="card-front-content">
            <div class="card-icon">🔮</div>
            <div>Card ${idx + 1}</div>
          </div>
        </div>
        <div class="card-back">
          <img src="${card.img}" alt="${card.title}" />
        </div>
      </div>
      <div class="rc-meta" style="display: none;"></div>
    `;
    readingCards.appendChild(el);
  });
}

function flipCards(cards) {
  const cardElements = readingCards.querySelectorAll('.reading-card');
  cardElements.forEach((el, idx) => {
    setTimeout(() => {
      el.classList.add('flipping');
      const meta = el.querySelector('.rc-meta');
      if (meta) {
        meta.textContent = `${cards[idx].title} • ${cards[idx].orientation}`;
        meta.style.display = 'block';
        // Add educational tooltip
        const education = getCardEducation(cards[idx].title);
        if (education.length > 0) {
          const eduText = education.map(e => `${e.concept}: ${e.explanation}`).join('\n');
          meta.title = eduText;
        }
      }
    }, idx * 300);
  });
}

function displayAIReading(text, cards) {
  aiReading.innerHTML = `
    <h3>📚 Your Educational Reading</h3>
    <div class="ai-reading-content">${formatReading(text)}</div>
    <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid rgba(0,245,160,.2);">
      <strong style="color: var(--primary);">💡 Concepts to Explore:</strong>
      <ul style="margin: 8px 0 0 20px; color: var(--muted); font-size: 13px; line-height: 1.6;">
        ${getEducationList(cards)}
      </ul>
    </div>
  `;
  aiReading.classList.add('show');
}

function formatReading(text) {
  // Convert markdown-like formatting to HTML
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n/g, '<br>')
    .replace(/^/, '<p>')
    .replace(/$/, '</p>');
}

function getEducationList(cards) {
  const concepts = new Set();
  cards.forEach(card => {
    const edu = getCardEducation(card.title);
    edu.forEach(e => {
      concepts.add(`<li>${e.concept} - ${e.explanation.substring(0, 80)}...</li>`);
    });
  });
  return Array.from(concepts).join('') || '<li>Explore the deck to learn more concepts!</li>';
}

// ========== Draw Three Cards ==========
function drawThree() {
  const pool = [...FULL_DECK];
  const picks = [];
  for (let i = 0; i < 3 && pool.length > 0; i++) {
    const idx = Math.floor(Math.random() * pool.length);
    const card = pool.splice(idx, 1)[0];
    const orientation = Math.random() > 0.5 ? 'Upright' : 'Reversed';
    picks.push({ ...card, orientation });
  }
  return picks;
}

// ========== Event Listeners ==========
drawCardsBtn?.addEventListener('click', performEducationalReading);

// API Key Modal
saveApiKeyBtn?.addEventListener('click', () => {
  const key = apiKeyInput?.value.trim();
  if (key) {
    setAPIKey(key);
    closeModal(apiKeyModal);
    alert('API key saved! You can now use AI-powered readings.');
  }
});

apiKeyClose?.addEventListener('click', () => closeModal(apiKeyModal));
apiKeyModal?.addEventListener('click', e => {
  if (e.target === apiKeyModal) closeModal(apiKeyModal);
});

// Check for API key on load
if (!isAIConfigured()) {
  // Show subtle prompt to configure API key
  setTimeout(() => {
    const prompt = document.createElement('div');
    prompt.className = 'reading-status';
    prompt.style.cssText = 'margin-top: 8px; font-size: 12px;';
    prompt.innerHTML =
      '💡 <a href="#" id="configureApiKey" style="color: var(--primary);">Configure AI key</a> for enhanced educational readings';
    questionInput?.parentElement?.appendChild(prompt);
    document.getElementById('configureApiKey')?.addEventListener('click', e => {
      e.preventDefault();
      apiKeyModal?.classList.add('show');
      apiKeyModal?.setAttribute('aria-hidden', 'false');
    });
  }, 1000);
}
