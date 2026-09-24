import { CARD_MEANINGS } from '../data/card-meanings.js';
import { fileSafe } from './card-utils.js';

/**
 * Read a card image path back into the slug used by the deck filenames.
 * Painted files look like major-the-hodler-02.jpg or minor-ace-of-tokens-01.jpg.
 * Missing paintings use assets/cards/minor-ace-of-nodes.svg.
 * @param {string} imagePath
 * @returns {{ type: string|null, slug: string }}
 */
export function parseCardImagePath(imagePath) {
  const path = String(imagePath || '').split('?')[0];
  const parts = path.split('/').filter(Boolean);
  const file = parts.pop() || '';
  const parent = parts.pop() || '';
  const stem = file.replace(/\.(jpg|jpeg|png|webp|svg)$/i, '');

  if (stem.startsWith('major-')) {
    return { type: 'Major', slug: stem.slice('major-'.length).replace(/-\d{1,2}$/, '') };
  }
  if (stem.startsWith('minor-')) {
    return { type: 'Minor', slug: stem.slice('minor-'.length).replace(/-\d{1,2}$/, '') };
  }
  if (/^v\d+$/i.test(stem) && parent) {
    return { type: null, slug: parent };
  }
  return { type: null, slug: '' };
}

/**
 * Name a drawn card from the deck record and check that the image filename agrees.
 * @param {object} card
 * @param {string} imagePath
 */
export function recognizeDrawnCard(card, imagePath) {
  const title = card?.title || 'Unknown card';
  const type =
    card?.type === 'Major'
      ? 'Major'
      : card?.type === 'Minor' || title.includes(' of ')
        ? 'Minor'
        : 'Major';
  const suit = type === 'Major' ? 'Major' : card?.suit || title.split(' of ')[1] || '';
  const orientation = card?.orientation === 'Reversed' ? 'Reversed' : 'Upright';
  const parsed = parseCardImagePath(imagePath);
  const entry = CARD_MEANINGS[title] || {};
  const meaning = orientation === 'Reversed' ? entry.reversed || '' : entry.upright || '';

  return {
    title,
    suit,
    type,
    orientation,
    position: card?.position || '',
    image: imagePath || '',
    filenameMatches: parsed.slug === fileSafe(title),
    upright: entry.upright || '',
    reversed: entry.reversed || '',
    meaning,
    flavor: entry.cryptoFlavor || '',
  };
}

function meaningLine(card) {
  const text = (card.meaning || '').trim().replace(/\s+/g, ' ');
  if (!text) return 'the deck keeps its own counsel';
  return /[.!?]$/.test(text) ? text : `${text}.`;
}

function identity(card) {
  const where = card.type === 'Major' ? 'Major Arcana' : `the ${card.suit} suit`;
  const way = card.orientation === 'Reversed' ? 'reversed' : 'upright';
  return `${card.title}, ${where}, ${way}`;
}

/**
 * Pieces of a fortune: the question, one beat per card, and a single tying line.
 * @param {string} question
 * @param {Array<object>} cards
 */
export function fortuneParts(question, cards) {
  const asked = question && String(question).trim() ? String(question).trim() : '';
  const drawn = (cards || []).filter(Boolean);
  const beats = drawn.map(card => ({
    position: card.position || '',
    title: card.title,
    way: card.orientation === 'Reversed' ? 'Reversed' : 'Upright',
    identity: identity(card),
    meaning: meaningLine(card),
  }));

  const storyName = beat => (beat.way === 'Reversed' ? `${beat.title}, reversed,` : beat.title);

  let tie = 'The deck has nothing to show yet.';
  if (beats.length === 1) {
    tie = `The deck reads it as: ${beats[0].meaning} Sit with that picture.`;
  } else if (beats.length > 1) {
    const [past, present, future] = beats;
    tie = `${storyName(past)} opened this, ${storyName(present)} is here now, and ${storyName(future)} is the turn ahead.`;
  }

  return { asked, beats, tie };
}

/**
 * A short fortune for this exact draw, using the meanings already on the cards.
 * @param {string} question
 * @param {Array<object>} cards
 * @returns {string}
 */
export function composeSpecialReading(question, cards) {
  const { asked, beats, tie } = fortuneParts(question, cards);
  const ask = asked ? `You asked, “${asked}” ` : '';
  if (beats.length <= 1) {
    const card = beats[0];
    if (!card) return `${ask}${tie} Entertainment only, not financial advice.`;
    return `${ask}Your card is ${card.identity}. ${tie} Entertainment only, not financial advice.`;
  }

  const lines = beats.map(beat => `${beat.position}: ${beat.identity}. ${beat.meaning}`).join(' ');
  return `${ask}${lines} Read as one story: ${tie} Entertainment only, not financial advice.`;
}
