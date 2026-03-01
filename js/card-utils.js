/**
 * Shared card utility functions
 * Used across multiple modules for consistency
 */

/**
 * Convert a card title to a file-safe ID
 * @param {string} name - Card title
 * @returns {string} File-safe ID
 */
export function fileSafe(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

/**
 * Get card image path - checks ai-generated first, then CryptoTarot1-78
 * NO SVG cards - only uses JPG from ai-generated or CryptoTarot1-78
 * @param {Object} card - Card object with type, title, suit
 * @param {boolean} randomVariant - If true, picks random variant; if false, uses hash-based consistent selection
 * @returns {string} Image path
 */
export function getCardImagePath(card, randomVariant = false) {
  // Convert card title to directory name format
  // Major: "The HODLer" -> "the-hodler"
  // Minor: "Ace of Tokens" -> "ace-of-tokens"
  let dirName = '';
  if (card.type === 'Major') {
    dirName = fileSafe(card.title);
  } else {
    // Minor Arcana: "Ace of Tokens" -> "ace-of-tokens"
    const [rank, suit] = card.title.split(' of ');
    dirName = `${fileSafe(rank)}-of-${fileSafe(suit)}`;
  }

  // First, try ai-generated directory: assets/cards/ai-generated/{dirName}/v1.jpg, v2.jpg, etc.
  // Check if directory exists (we'll assume v1, v2, v3, v4 are available)
  const aiGeneratedVariants = ['v1', 'v2', 'v3', 'v4'];
  const cardHash = card.title.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);

  if (randomVariant) {
    const variantIndex = Math.floor(Math.random() * aiGeneratedVariants.length);
    const variant = aiGeneratedVariants[variantIndex];
    return `assets/cards/ai-generated/${dirName}/${variant}.jpg`;
  } else {
    const variantIndex = cardHash % aiGeneratedVariants.length;
    const variant = aiGeneratedVariants[variantIndex];
    return `assets/cards/ai-generated/${dirName}/${variant}.jpg`;
  }
}

/**
 * Get card image path from CryptoTarot1-78 directory (fallback)
 * @param {Object} card - Card object with type, title, suit
 * @param {boolean} randomVariant - If true, picks random variant
 * @returns {string} Image path
 */
export function getCardImagePathFromCryptoTarot(card, randomVariant = false) {
  // For Major Arcana: major-{title-lowercase-hyphenated}-{number}.jpg
  if (card.type === 'Major') {
    const baseName = `major-${fileSafe(card.title)}`;
    const cardHash = card.title.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const commonVariants = [
      '02',
      '04',
      '07',
      '08',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
      '16',
      '03',
      '05',
      '06',
      '09',
    ];

    if (randomVariant) {
      const variantIndex = Math.floor(Math.random() * commonVariants.length);
      return `tools/CryptoTarot1-78/${baseName}-${commonVariants[variantIndex]}.jpg`;
    } else {
      const variantIndex = cardHash % commonVariants.length;
      return `tools/CryptoTarot1-78/${baseName}-${commonVariants[variantIndex]}.jpg`;
    }
  }

  // For Minor Arcana: minor-{rank-lowercase}-of-{suit-lowercase}-{number}.jpg
  if (card.type === 'Minor') {
    const [rank, suit] = card.title.split(' of ');
    const baseName = `minor-${fileSafe(rank)}-of-${fileSafe(suit)}`;
    const cardHash = card.title.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const commonVariants = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

    if (randomVariant) {
      const variantIndex = Math.floor(Math.random() * commonVariants.length);
      return `tools/CryptoTarot1-78/${baseName}-${commonVariants[variantIndex]}.jpg`;
    } else {
      const variantIndex = cardHash % commonVariants.length;
      return `tools/CryptoTarot1-78/${baseName}-${commonVariants[variantIndex]}.jpg`;
    }
  }

  return '';
}

/**
 * Escape HTML to prevent XSS attacks
 * @param {string} value - String to escape
 * @returns {string} Escaped string
 */
export function escapeHtml(value = '') {
  return value.replace(
    /[&<>"']/g,
    char =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
      })[char]
  );
}
