// Crypto Education Content - Teaches concepts through tarot
// Maps card meanings to educational crypto concepts

export const CRYPTO_CONCEPTS = {
  // What makes crypto
  fundamentals: {
    blockchain:
      'A decentralized ledger that records transactions across many computers. Each block contains a cryptographic hash of the previous block, creating an unbreakable chain.',
    cryptography:
      'The mathematical foundation that secures blockchain. Uses public/private key pairs to ensure only you can access your funds.',
    decentralization:
      'Removing intermediaries (banks, governments) from financial transactions. No single point of control means no single point of failure.',
    consensus:
      'How networks agree on transaction validity. Proof of Work (mining) and Proof of Stake (staking) are common mechanisms.',
    'smart-contracts':
      'Self-executing code on blockchain. Automatically execute when conditions are met, enabling DeFi, NFTs, and more.',
  },
  // What moves crypto
  'market-forces': {
    'supply-demand':
      'Token prices reflect scarcity. Fixed supply (Bitcoin) vs. inflation (fiat) drives different price dynamics.',
    adoption:
      'Real-world usage increases value. More users, merchants, and developers = stronger network effects.',
    regulation:
      'Government policies create uncertainty (bearish) or clarity (bullish). Different regions have different approaches.',
    technology:
      'Protocol upgrades (Ethereum 2.0, Bitcoin halvings) change fundamentals. L2s, bridges, and scaling solutions matter.',
    narrative:
      'Stories drive markets. Hype cycles, FOMO, and media coverage can move prices faster than fundamentals.',
  },
  // How to interact with crypto
  interaction: {
    wallets:
      "Software (hot) or hardware (cold) storage for keys. Never share your private key - it's like a password that can't be reset.",
    exchanges:
      'CEX (centralized like Coinbase) vs DEX (decentralized like Uniswap). CEXs are easier; DEXs are more private.',
    defi: 'Decentralized Finance - lending, borrowing, trading without banks. Higher yields, higher risks. DYOR (Do Your Own Research).',
    staking:
      'Locking tokens to secure a network. Earn rewards but capital is locked. Research lock-up periods and slashing risks.',
    nfts: 'Non-fungible tokens prove ownership. Can represent art, domain names, in-game items, or real-world assets.',
    airdrops:
      'Free tokens distributed to early supporters. Often for participating in governance or using protocols. Tax implications vary.',
  },
  // Risk management
  'risk-management': {
    diversification:
      "Don't put all funds in one token. Spread across assets, protocols, and chains to reduce risk.",
    volatility:
      'Prices swing wildly. Only invest what you can afford to lose. Set stop-losses and take profits.',
    scams:
      'Rug pulls, phishing, fake projects. Always verify contracts, check team doxxing, and use official links.',
    'impermanent-loss':
      'LP providers risk losing value when token ratios change. Understand before providing liquidity.',
    'gas-fees':
      'Transaction costs on networks. High fees can eat profits. Use L2s or choose lower-fee chains for small transactions.',
  },
  // Strategy
  strategy: {
    hodl: 'Hold On for Dear Life - long-term holding through volatility. Works if you believe in fundamentals.',
    dca: 'Dollar Cost Averaging - buy fixed amounts regularly. Reduces impact of timing the market.',
    research: 'DYOR - read whitepapers, check audits, verify teams. Understand before investing.',
    community:
      'Join DAOs, follow builders, avoid echo chambers. Real value comes from utility, not hype.',
    taxes:
      'Crypto transactions are taxable events in many countries. Track trades and consult tax professionals.',
  },
};

// Map tarot cards to educational concepts
export const CARD_TO_CONCEPT = {
  'The HODLer': ['strategy.hodl', 'risk-management.volatility'],
  'The Miner': ['fundamentals.consensus', 'fundamentals.blockchain'],
  'The Oracle': ['interaction.research', 'risk-management.scams'],
  'The Empress Node': ['interaction.defi', 'market-forces.adoption'],
  'The Emperor Chain': ['fundamentals.decentralization', 'market-forces.regulation'],
  'The Hierophant Whale': ['strategy.community', 'interaction.exchanges'],
  'The Lovers Fork': ['fundamentals.consensus', 'market-forces.technology'],
  'The Chariot Pump': ['market-forces.narrative', 'risk-management.volatility'],
  'Strength HODL': ['strategy.hodl', 'risk-management.volatility'],
  'The Hermit Dev': ['interaction.research', 'fundamentals.smart-contracts'],
  'Wheel of Fortune Cycle': ['market-forces.supply-demand', 'market-forces.adoption'],
  'Justice Ledger': ['fundamentals.blockchain', 'market-forces.regulation'],
  'The Hanged Man Flip': ['strategy.research', 'market-forces.narrative'],
  'Death Rug': ['risk-management.scams', 'market-forces.technology'],
  'Temperance Mix': ['risk-management.diversification', 'strategy.dca'],
  'The Devil Scam': ['risk-management.scams', 'interaction.wallets'],
  'The Tower Hack': ['risk-management.scams', 'fundamentals.smart-contracts'],
  'The Star Airdrop': ['interaction.airdrops', 'strategy.community'],
  'The Moon Illusion': ['market-forces.narrative', 'risk-management.scams'],
  'The Sun Bull': ['market-forces.adoption', 'market-forces.supply-demand'],
  'Judgment Halving': ['fundamentals.blockchain', 'market-forces.supply-demand'],
  'The World Ecosystem': ['market-forces.adoption', 'fundamentals.decentralization'],
  'Ace of Tokens': ['interaction.wallets', 'interaction.exchanges'],
  'Two of Tokens': ['risk-management.diversification', 'strategy.dca'],
  'Three of Tokens': ['strategy.community', 'fundamentals.smart-contracts'],
  'Four of Tokens': ['interaction.wallets', 'risk-management.volatility'],
  'Five of Tokens': ['risk-management.volatility', 'strategy.community'],
  'Six of Tokens': ['interaction.airdrops', 'strategy.community'],
  'Seven of Tokens': ['interaction.staking', 'strategy.hodl'],
  'Eight of Tokens': ['fundamentals.consensus', 'interaction.staking'],
  'Nine of Tokens': ['market-forces.supply-demand', 'strategy.taxes'],
  'Ten of Tokens': ['strategy.taxes', 'interaction.wallets'],
};

// Get educational context for a card
export function getCardEducation(cardTitle) {
  const concepts = CARD_TO_CONCEPT[cardTitle] || [];
  const education = [];

  concepts.forEach(conceptPath => {
    const [category, concept] = conceptPath.split('.');
    const categoryData = CRYPTO_CONCEPTS[category];
    if (categoryData && categoryData[concept]) {
      education.push({
        category: category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        concept: concept.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        explanation: categoryData[concept],
      });
    }
  });

  return education;
}
