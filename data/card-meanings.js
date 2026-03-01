// Comprehensive card metadata for the Crypto Tarot deck
// Used for UI rendering, AI readings, SVG generation, and Chain Game mechanics
// Includes comprehensive book chapters for print publication

export const CARD_MEANINGS = {
  // Major Arcana
  'The HODLer': {
    arcana: 'Major',
    number: 0,
    cosmicRuler: 'Pluto',
    cosmicSummary:
      'Transformation, rebirth, and the unknown; the Crypto Pioneer leaping into uncharted digital realms.',
    upright: 'New chain, leap of faith, genesis block.',
    reversed: 'Rug-pull, blind FOMO.',
    cryptoFlavor: 'Minting the first NFT on a new L2.',
    foresight: 'Embrace diamond hands; a bear market tests your resolve.',
    educationalInsight:
      'Blockchain Fundamentals – A decentralized ledger that records transactions across many computers. The HODLer is the first node in the network.',
    appIntegration: 'Animated leap into void; UV glow on "0".',
    visualDescription:
      "A hooded figure teeters at the edge of a neon abyss, ledger in hand glowing cyan and magenta. Below, voxel constellations swirl like nascent chains while holographic runes form a '0'. Reversed: the abyss cracks open, crimson glitches clawing upward.",
    extendedReflection:
      "The HODLer is not reckless — they are pre-reckless. They mint before the mint exists. They HODL before HODL is a word. In 2009, they mined Bitcoin on a laptop. In 2025, they're bridging to a chain that doesn't exist yet.",
    strategy: "If this card appears, ask: 'Am I early… or just wrong?'",
    bookChapter:
      "In the digital realm where code meets cosmos, The HODLer emerges as a beacon of pluto influence. Transformation, rebirth, and the unknown; the Crypto Pioneer leaping into uncharted digital realms. \n\nThe HODLer is not reckless — they are pre-reckless. They mint before the mint exists. They HODL before HODL is a word. In 2009, they mined Bitcoin on a laptop. In 2025, they're bridging to a chain that doesn't exist yet. \n\nWhen you gaze upon this card, a hooded figure teeters at the edge of a neon abyss, ledger in hand glowing cyan and magenta. below, voxel constellations swirl like nascent chains while holographic runes form a '0'. reversed: the abyss cracks open, crimson glitches clawing upward. This imagery speaks to the archetypal journey embedded within the Major Arcana. \n\nIn its upright position, The HODLer reveals new chain, leap of faith, genesis block.. This is a time of minting the first nft on a new l2.. \n\nWhen reversed, the card warns of rug-pull, blind fomo.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, blockchain fundamentals – a decentralized ledger that records transactions across many computers. the hodler is the first node in the network. Understanding this concept is crucial for navigating the archetypal lessons this card offers. \n\nThe practical wisdom of The HODLer suggests: If this card appears, ask: 'Am I early… or just wrong?' \n\nLooking ahead, embrace diamond hands; a bear market tests your resolve. \n\nThe HODLer teaches us that in the world of crypto, archetypes shape our journey. Whether you're embarking on a new chain, this card reminds you that patience and wisdom are your greatest assets. The blockchain never forgets, but it also never stops evolving. As one of the Major Arcana, this card represents a significant turning point in your crypto journey—a moment that will define your path forward.",
    nftMetadata: [
      { trait_type: 'Arcana', value: 'Major' },
      { trait_type: 'Role', value: 'The Pioneer' },
      { trait_type: 'Rarity', value: 'Genesis' },
    ],
    gameMechanics: {
      rarity: 'Genesis',
      spellUpright: 'Steal 1 block + 1 Life',
      spellReversed: 'Draw 2 cards',
      energyCost: 1,
      type: 'spell',
    },
  },
  'The Miner': {
    arcana: 'Major',
    number: 1,
    cosmicRuler: 'Mercury',
    cosmicSummary: 'Manifestation, smart contracts, and technical finesse guiding the network.',
    upright: 'Manifestation, smart contracts, skill.',
    reversed: 'Scams, fake whitepapers.',
    cryptoFlavor: 'Deploying a flawless DEX.',
    foresight: 'Mine new opportunities, but upgrade your tech stack.',
    educationalInsight:
      'Smart Contracts – Self-executing code on the blockchain. The Miner writes the law.',
    appIntegration: 'Glowing deploy button; error log on reverse.',
    visualDescription:
      'An engineer levitates above a holo-console, eight spectral keyboards orbiting like satellites. Golden code sigils stream from their hands into a crystalline node. Reversed: red compile errors shatter the node into shards.',
    extendedReflection:
      "The Miner doesn't dig for gold — they compile it. One line of Solidity can create a billion-dollar protocol. One bug can drain it.",
    strategy: 'Audit twice. Deploy once.',
    bookChapter:
      "In the digital realm where code meets cosmos, The Miner emerges as a beacon of mercury influence. Manifestation, smart contracts, and technical finesse guiding the network. \n\nThe Miner doesn't dig for gold — they compile it. One line of Solidity can create a billion-dollar protocol. One bug can drain it. \n\nWhen you gaze upon this card, an engineer levitates above a holo-console, eight spectral keyboards orbiting like satellites. golden code sigils stream from their hands into a crystalline node. reversed: red compile errors shatter the node into shards. This imagery speaks to the archetypal journey embedded within the Major Arcana. \n\nIn its upright position, The Miner reveals manifestation, smart contracts, skill.. This is a time of deploying a flawless dex.. \n\nWhen reversed, the card warns of scams, fake whitepapers.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, smart contracts – self-executing code on the blockchain. the miner writes the law. Understanding this concept is crucial for navigating the archetypal lessons this card offers. \n\nThe practical wisdom of The Miner suggests: Audit twice. Deploy once. \n\nLooking ahead, mine new opportunities, but upgrade your tech stack. \n\nThe Miner teaches us that in the world of crypto, archetypes shape our journey. Whether you're embarking on a new chain, this card reminds you that patience and wisdom are your greatest assets. The blockchain never forgets, but it also never stops evolving. As one of the Major Arcana, this card represents a significant turning point in your crypto journey—a moment that will define your path forward.",
    nftMetadata: [
      { trait_type: 'Skill', value: 'God Tier' },
      { trait_type: 'Action', value: 'Deploy' },
    ],
    gameMechanics: {
      rarity: 'Common',
      spellUpright: 'Play extra minor free',
      spellReversed: '+2 power next battle',
      energyCost: 1,
      type: 'spell',
    },
  },
  'The Oracle': {
    arcana: 'Major',
    number: 2,
    cosmicRuler: 'Moon',
    cosmicSummary: 'Intuition and oracle nodes revealing hidden liquidity and secret flows.',
    upright: 'Intuition, oracle nodes, hidden liquidity.',
    reversed: 'Secrets leaked, insider dumps.',
    cryptoFlavor: 'Chainlink price feeds.',
    foresight: 'Trust gut feelings on airdrops; DYOR deeply.',
    educationalInsight:
      'Oracles – External data feeds for smart contracts. The Oracle sees what the chain cannot.',
    appIntegration: 'Pulsing data streams; red alert on reverse.',
    visualDescription:
      'A masked seer floats before twin crescent nodes, silver data threads weaving between them like lunar tides. A crystal tablet displays fluctuating prices in sapphire light. Reversed: the tablet fractures, bleeding scarlet leaks.',
    extendedReflection:
      "The Oracle doesn't predict the future — it feeds it. Without oracles, DeFi is blind. With them, it's all-seeing.",
    strategy: 'Trust the data, but verify the source.',
    bookChapter:
      "In the digital realm where code meets cosmos, The Oracle emerges as a beacon of moon influence. Intuition and oracle nodes revealing hidden liquidity and secret flows. \n\nThe Oracle doesn't predict the future — it feeds it. Without oracles, DeFi is blind. With them, it's all-seeing. \n\nWhen you gaze upon this card, a masked seer floats before twin crescent nodes, silver data threads weaving between them like lunar tides. a crystal tablet displays fluctuating prices in sapphire light. reversed: the tablet fractures, bleeding scarlet leaks. This imagery speaks to the archetypal journey embedded within the Major Arcana. \n\nIn its upright position, The Oracle reveals intuition, oracle nodes, hidden liquidity.. This is a time of chainlink price feeds.. \n\nWhen reversed, the card warns of secrets leaked, insider dumps.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, oracles – external data feeds for smart contracts. the oracle sees what the chain cannot. Understanding this concept is crucial for navigating the archetypal lessons this card offers. \n\nThe practical wisdom of The Oracle suggests: Trust the data, but verify the source. \n\nLooking ahead, trust gut feelings on airdrops; dyor deeply. \n\nThe Oracle teaches us that in the world of crypto, archetypes shape our journey. Whether you're embarking on a new chain, this card reminds you that patience and wisdom are your greatest assets. The blockchain never forgets, but it also never stops evolving. As one of the Major Arcana, this card represents a significant turning point in your crypto journey—a moment that will define your path forward.",
    nftMetadata: [
      { trait_type: 'Power', value: 'Foresight' },
      { trait_type: 'Network', value: 'Chainlink' },
    ],
    gameMechanics: {
      rarity: 'Common',
      spellUpright: 'Reveal opponent hand (1 turn)',
      spellReversed: 'Peek top 3 deck cards',
      energyCost: 1,
      type: 'spell',
    },
  },
  'The Empress Node': {
    arcana: 'Major',
    number: 3,
    cosmicRuler: 'Venus',
    cosmicSummary: 'Abundance, staking rewards, and lush network growth.',
    upright: 'Abundance, staking rewards, growth.',
    reversed: 'Over-farming, inflation.',
    cryptoFlavor: 'Yield farming APY explosion.',
    foresight: 'Cultivate passive income; watch for invasive weeds.',
    educationalInsight:
      'Yield Farming – Providing liquidity to earn rewards. The Empress is the queen of passive income.',
    appIntegration: 'Blooming vines; wilted on reverse.',
    visualDescription:
      'A radiant queen reclines on a throne grown from GPUs and flowering cables. Neon vines laden with liquidity tokens drape her shoulders, while hovering jars drip stardust APY. Reversed: the vines wither, turning brittle gray.',
    extendedReflection:
      "Mother of all pumps—the creative force that turns seeds into empires. She doesn't chase gains. She grows them.",
    strategy: 'Stake early, harvest wisely.',
    bookChapter:
      "In the digital realm where code meets cosmos, The Empress Node emerges as a beacon of venus influence. Abundance, staking rewards, and lush network growth. \n\nMother of all pumps—the creative force that turns seeds into empires. She doesn't chase gains. She grows them. \n\nWhen you gaze upon this card, a radiant queen reclines on a throne grown from gpus and flowering cables. neon vines laden with liquidity tokens drape her shoulders, while hovering jars drip stardust apy. reversed: the vines wither, turning brittle gray. This imagery speaks to the archetypal journey embedded within the Major Arcana. \n\nIn its upright position, The Empress Node reveals abundance, staking rewards, growth.. This is a time of yield farming apy explosion.. \n\nWhen reversed, the card warns of over-farming, inflation.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, yield farming – providing liquidity to earn rewards. the empress is the queen of passive income. Understanding this concept is crucial for navigating the archetypal lessons this card offers. \n\nThe practical wisdom of The Empress Node suggests: Stake early, harvest wisely. \n\nLooking ahead, cultivate passive income; watch for invasive weeds. \n\nThe Empress Node teaches us that in the world of crypto, archetypes shape our journey. Whether you're embarking on a new chain, this card reminds you that patience and wisdom are your greatest assets. The blockchain never forgets, but it also never stops evolving. As one of the Major Arcana, this card represents a significant turning point in your crypto journey—a moment that will define your path forward.",
    nftMetadata: [{ trait_type: 'Yield', value: '1000%+' }],
    gameMechanics: {
      rarity: 'Epic',
      spellUpright: 'Rally 2 minors',
      spellReversed: 'Heal 3 Life',
      energyCost: 1,
      type: 'spell',
    },
  },
  'The Emperor Chain': {
    arcana: 'Major',
    number: 4,
    cosmicRuler: 'Aries',
    cosmicSummary: 'Governance, DAOs, and structure engineered for resilience.',
    upright: 'Governance, DAOs, structure.',
    reversed: 'Tyranny, 51% attack.',
    cryptoFlavor: 'On-chain voting & treasury.',
    foresight: 'Build on solid foundations; decentralize power.',
    educationalInsight:
      'DAOs – Decentralized Autonomous Organizations. The Emperor is the on-chain ruler.',
    appIntegration: 'Throne of code; cracked on reverse.',
    visualDescription:
      'A stern sovereign sits on a throne forged from validator columns, each etched with glowing governance proposals. A ruby scepter pulses with consensus light. Reversed: the columns crumble, red warnings flashing 51%.',
    extendedReflection:
      "The architect of chains—rules bring order to chaos. He doesn't rule by force. He rules by consensus.",
    strategy: 'Vote early. Govern fairly.',
    bookChapter:
      "In the digital realm where code meets cosmos, The Emperor Chain emerges as a beacon of aries influence. Governance, DAOs, and structure engineered for resilience. \n\nThe architect of chains—rules bring order to chaos. He doesn't rule by force. He rules by consensus. \n\nWhen you gaze upon this card, a stern sovereign sits on a throne forged from validator columns, each etched with glowing governance proposals. a ruby scepter pulses with consensus light. reversed: the columns crumble, red warnings flashing 51%. This imagery speaks to the archetypal journey embedded within the Major Arcana. \n\nIn its upright position, The Emperor Chain reveals governance, daos, structure.. This is a time of on-chain voting & treasury.. \n\nWhen reversed, the card warns of tyranny, 51% attack.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, daos – decentralized autonomous organizations. the emperor is the on-chain ruler. Understanding this concept is crucial for navigating the archetypal lessons this card offers. \n\nThe practical wisdom of The Emperor Chain suggests: Vote early. Govern fairly. \n\nLooking ahead, build on solid foundations; decentralize power. \n\nThe Emperor Chain teaches us that in the world of crypto, archetypes shape our journey. Whether you're embarking on a new chain, this card reminds you that patience and wisdom are your greatest assets. The blockchain never forgets, but it also never stops evolving. As one of the Major Arcana, this card represents a significant turning point in your crypto journey—a moment that will define your path forward.",
    nftMetadata: [{ trait_type: 'Governance', value: 'DAO' }],
    gameMechanics: {
      rarity: 'Epic',
      spellUpright: 'Lock opponent marches (1 turn)',
      spellReversed: 'Gain 1 extra action',
      energyCost: 1,
      type: 'spell',
    },
  },
  'The Hierophant Whale': {
    arcana: 'Major',
    number: 5,
    cosmicRuler: 'Taurus',
    cosmicSummary: 'Mentorship, documentation, and community moderators safeguarding lore.',
    upright: 'Mentorship, docs, community mods, lore.',
    reversed: 'Gatekeeping, paywall KBs, outdated forks.',
    cryptoFlavor: 'Discord mods & Notion wikis.',
    foresight: 'Learn from veterans; question echo chambers.',
    educationalInsight: 'Community Governance – The Hierophant is the keeper of the whitepaper.',
    appIntegration: 'Scroll of knowledge; locked on reverse.',
    visualDescription:
      'A colossal crypto-whale draped in ceremonial robes floats above a marble archive. Luminescent scrolls orbit its fins, each emblazoned with sacred git commits. Reversed: the archive doors slam shut under a red paywall sigil.',
    extendedReflection:
      "The keeper of code lore—tradition meets open-source. He doesn't hoard knowledge. He shares it.",
    strategy: 'Read the docs. Ask in #general.',
    bookChapter:
      "In the digital realm where code meets cosmos, The Hierophant Whale emerges as a beacon of taurus influence. Mentorship, documentation, and community moderators safeguarding lore. \n\nThe keeper of code lore—tradition meets open-source. He doesn't hoard knowledge. He shares it. \n\nWhen you gaze upon this card, a colossal crypto-whale draped in ceremonial robes floats above a marble archive. luminescent scrolls orbit its fins, each emblazoned with sacred git commits. reversed: the archive doors slam shut under a red paywall sigil. This imagery speaks to the archetypal journey embedded within the Major Arcana. \n\nIn its upright position, The Hierophant Whale reveals mentorship, docs, community mods, lore.. This is a time of discord mods & notion wikis.. \n\nWhen reversed, the card warns of gatekeeping, paywall kbs, outdated forks.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, community governance – the hierophant is the keeper of the whitepaper. Understanding this concept is crucial for navigating the archetypal lessons this card offers. \n\nThe practical wisdom of The Hierophant Whale suggests: Read the docs. Ask in #general. \n\nLooking ahead, learn from veterans; question echo chambers. \n\nThe Hierophant Whale teaches us that in the world of crypto, archetypes shape our journey. Whether you're embarking on a new chain, this card reminds you that patience and wisdom are your greatest assets. The blockchain never forgets, but it also never stops evolving. As one of the Major Arcana, this card represents a significant turning point in your crypto journey—a moment that will define your path forward.",
    nftMetadata: [{ trait_type: 'Role', value: 'Mod' }],
    gameMechanics: {
      rarity: 'Rare',
      spellUpright: "Copy opponent's last minor",
      spellReversed: 'All discard 1',
      energyCost: 1,
      type: 'spell',
    },
  },
  'The Lovers Fork': {
    arcana: 'Major',
    number: 6,
    cosmicRuler: 'Gemini',
    cosmicSummary: 'Partnerships, bridges, and cross-chain alignment.',
    upright: 'Partnerships, bridges, cross-chain synergy.',
    reversed: 'Broken bridges, oracle failure, divorce forks.',
    cryptoFlavor: 'Polygon–Ethereum bridge.',
    foresight: 'Align with complementary projects; avoid toxic pairs.',
    educationalInsight: 'Cross-Chain Bridges – The Lovers connect two worlds.',
    appIntegration: 'Glowing bridge; shattered on reverse.',
    visualDescription:
      'Two figures reach across a luminous bridge of intertwined blockchains, twin hearts formed from validator nodes floating above. Beneath, data rivers flow in mirrored hues. Reversed: the bridge fractures, packets falling into a void.',
    extendedReflection:
      'The merge of two worlds—choose your layer wisely. One bridge can make you. One break can ruin you.',
    strategy: 'Bridge with care. Use Wormhole.',
    bookChapter:
      "In the digital realm where code meets cosmos, The Lovers Fork emerges as a beacon of gemini influence. Partnerships, bridges, and cross-chain alignment. \n\nThe merge of two worlds—choose your layer wisely. One bridge can make you. One break can ruin you. \n\nWhen you gaze upon this card, two figures reach across a luminous bridge of intertwined blockchains, twin hearts formed from validator nodes floating above. beneath, data rivers flow in mirrored hues. reversed: the bridge fractures, packets falling into a void. This imagery speaks to the archetypal journey embedded within the Major Arcana. \n\nIn its upright position, The Lovers Fork reveals partnerships, bridges, cross-chain synergy.. This is a time of polygon–ethereum bridge.. \n\nWhen reversed, the card warns of broken bridges, oracle failure, divorce forks.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, cross-chain bridges – the lovers connect two worlds. Understanding this concept is crucial for navigating the archetypal lessons this card offers. \n\nThe practical wisdom of The Lovers Fork suggests: Bridge with care. Use Wormhole. \n\nLooking ahead, align with complementary projects; avoid toxic pairs. \n\nThe Lovers Fork teaches us that in the world of crypto, archetypes shape our journey. Whether you're embarking on a new chain, this card reminds you that patience and wisdom are your greatest assets. The blockchain never forgets, but it also never stops evolving. As one of the Major Arcana, this card represents a significant turning point in your crypto journey—a moment that will define your path forward.",
    nftMetadata: [{ trait_type: 'Connection', value: 'L2' }],
    gameMechanics: {
      rarity: 'Rare',
      spellUpright: 'Merge 2 of your chains',
      spellReversed: 'Split opponent chain (-2 blocks)',
      energyCost: 1,
      type: 'spell',
    },
  },
  'The Chariot Pump': {
    arcana: 'Major',
    number: 7,
    cosmicRuler: 'Cancer',
    cosmicSummary: 'Momentum, trending pumps, and emotional drive.',
    upright: 'Momentum, pumps, trending breakouts.',
    reversed: 'Crash, wick dumps, stalled tx.',
    cryptoFlavor: '1000% altcoin pump.',
    foresight: 'Ride the wave, but strap in for volatility.',
    educationalInsight: 'Market Momentum – The Chariot is the bull run.',
    appIntegration: 'Rocket launch; crash on reverse.',
    visualDescription:
      'A cyber-chariot blazes down a neon highway pulled by twin crypto-beasts, charts projected in emerald arcs behind it. Particle sparks trail like fireworks. Reversed: the wheels spark and stall, charts plummeting scarlet.',
    extendedReflection:
      "The bull run chariot—willpower drives the market. It's not about speed. It's about direction.",
    strategy: 'Set stop-loss. Enjoy the ride.',
    bookChapter:
      "In the digital realm where code meets cosmos, The Chariot Pump emerges as a beacon of cancer influence. Momentum, trending pumps, and emotional drive. \n\nThe bull run chariot—willpower drives the market. It's not about speed. It's about direction. \n\nWhen you gaze upon this card, a cyber-chariot blazes down a neon highway pulled by twin crypto-beasts, charts projected in emerald arcs behind it. particle sparks trail like fireworks. reversed: the wheels spark and stall, charts plummeting scarlet. This imagery speaks to the archetypal journey embedded within the Major Arcana. \n\nIn its upright position, The Chariot Pump reveals momentum, pumps, trending breakouts.. This is a time of 1000% altcoin pump.. \n\nWhen reversed, the card warns of crash, wick dumps, stalled tx.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, market momentum – the chariot is the bull run. Understanding this concept is crucial for navigating the archetypal lessons this card offers. \n\nThe practical wisdom of The Chariot Pump suggests: Set stop-loss. Enjoy the ride. \n\nLooking ahead, ride the wave, but strap in for volatility. \n\nThe Chariot Pump teaches us that in the world of crypto, archetypes shape our journey. Whether you're embarking on a new chain, this card reminds you that patience and wisdom are your greatest assets. The blockchain never forgets, but it also never stops evolving. As one of the Major Arcana, this card represents a significant turning point in your crypto journey—a moment that will define your path forward.",
    nftMetadata: [{ trait_type: 'Gain', value: '1000x' }],
    gameMechanics: {
      rarity: 'Rare',
      spellUpright: 'March all units forward',
      spellReversed: '+3 power to army',
      energyCost: 1,
      type: 'spell',
    },
  },
  'Strength HODL': {
    arcana: 'Major',
    number: 8,
    cosmicRuler: 'Leo',
    cosmicSummary: 'Courage, radiant willpower, and holding through market dips.',
    upright: 'Courage, holding through dips, diamond hands.',
    reversed: 'Panic sell, paper hands, weak resolve.',
    cryptoFlavor: 'Diamond-handing BTC.',
    foresight: "Weather storms; your portfolio's lion awaits.",
    educationalInsight: 'HODL – Hold On for Dear Life. Strength is the inner lion.',
    appIntegration: 'Glowing shield; cracked on reverse.',
    visualDescription:
      'A guardian embraces a roaring holographic lion, taming it with a halo of golden circuitry. Their shield bears a rising BTC candle that refuses to bend. Reversed: the lion thrashes free, shredding the shield into red shards.',
    extendedReflection: 'Inner fire defeats market lions. The bear roars. The HODLer smiles.',
    strategy: 'Zoom out. Trust the chart.',
    bookChapter:
      "In the digital realm where code meets cosmos, Strength HODL emerges as a beacon of leo influence. Courage, radiant willpower, and holding through market dips. \n\nInner fire defeats market lions. The bear roars. The HODLer smiles. \n\nWhen you gaze upon this card, a guardian embraces a roaring holographic lion, taming it with a halo of golden circuitry. their shield bears a rising btc candle that refuses to bend. reversed: the lion thrashes free, shredding the shield into red shards. This imagery speaks to the archetypal journey embedded within the Major Arcana. \n\nIn its upright position, Strength HODL reveals courage, holding through dips, diamond hands.. This is a time of diamond-handing btc.. \n\nWhen reversed, the card warns of panic sell, paper hands, weak resolve.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, hodl – hold on for dear life. strength is the inner lion. Understanding this concept is crucial for navigating the archetypal lessons this card offers. \n\nThe practical wisdom of Strength HODL suggests: Zoom out. Trust the chart. \n\nLooking ahead, weather storms; your portfolio's lion awaits. \n\nStrength HODL teaches us that in the world of crypto, archetypes shape our journey. Whether you're embarking on a new chain, this card reminds you that patience and wisdom are your greatest assets. The blockchain never forgets, but it also never stops evolving. As one of the Major Arcana, this card represents a significant turning point in your crypto journey—a moment that will define your path forward.",
    nftMetadata: [{ trait_type: 'Resolve', value: 'Diamond' }],
    gameMechanics: {
      rarity: 'Rare',
      spellUpright: 'Negate opponent spell',
      spellReversed: 'Protect block for 1 battle',
      energyCost: 1,
      type: 'spell',
    },
  },
  'The Hermit Dev': {
    arcana: 'Major',
    number: 9,
    cosmicRuler: 'Virgo',
    cosmicSummary: 'Research, whitepaper deep dives, and pristine code review.',
    upright: 'Research, whitepaper deep dive, pristine code.',
    reversed: 'Isolation, echo chamber, missed signals.',
    cryptoFlavor: 'Solo dev auditing code.',
    foresight: 'Retreat to code; emerge with breakthroughs.',
    educationalInsight: 'Code Audit – The Hermit is the lone wolf.',
    appIntegration: 'Lantern in dark; flicker on reverse.',
    visualDescription:
      'A solitary coder sits atop a snowy peak, lighting the path with a lantern that projects green audit logs across the night sky. Lines of code wrap around their cloak like constellations. Reversed: the lantern sputters, the logs glitching into static.',
    extendedReflection:
      "The lantern in the dark—self-reliance in a noisy space. He doesn't tweet. He ships.",
    strategy: 'Read the code. Not the hype.',
    bookChapter:
      "In the digital realm where code meets cosmos, The Hermit Dev emerges as a beacon of virgo influence. Research, whitepaper deep dives, and pristine code review. \n\nThe lantern in the dark—self-reliance in a noisy space. He doesn't tweet. He ships. \n\nWhen you gaze upon this card, a solitary coder sits atop a snowy peak, lighting the path with a lantern that projects green audit logs across the night sky. lines of code wrap around their cloak like constellations. reversed: the lantern sputters, the logs glitching into static. This imagery speaks to the archetypal journey embedded within the Major Arcana. \n\nIn its upright position, The Hermit Dev reveals research, whitepaper deep dive, pristine code.. This is a time of solo dev auditing code.. \n\nWhen reversed, the card warns of isolation, echo chamber, missed signals.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, code audit – the hermit is the lone wolf. Understanding this concept is crucial for navigating the archetypal lessons this card offers. \n\nThe practical wisdom of The Hermit Dev suggests: Read the code. Not the hype. \n\nLooking ahead, retreat to code; emerge with breakthroughs. \n\nThe Hermit Dev teaches us that in the world of crypto, archetypes shape our journey. Whether you're embarking on a new chain, this card reminds you that patience and wisdom are your greatest assets. The blockchain never forgets, but it also never stops evolving. As one of the Major Arcana, this card represents a significant turning point in your crypto journey—a moment that will define your path forward.",
    nftMetadata: [{ trait_type: 'Mode', value: 'Stealth' }],
    gameMechanics: {
      rarity: 'Rare',
      spellUpright: 'Draw 3 cards',
      spellReversed: 'Opponent skips draw',
      energyCost: 1,
      type: 'spell',
    },
  },
  'Wheel of Fortune Cycle': {
    arcana: 'Major',
    number: 10,
    cosmicRuler: 'Jupiter',
    cosmicSummary: 'Bull/bear cycles and fortune that favors the daring.',
    upright: 'Bull/bear cycles, airdrops, luck.',
    reversed: 'Flash crashes, bad RNG, misfortune.',
    cryptoFlavor: 'Random airdrop or rug.',
    foresight: 'Cycles repeat; position for the upswing.',
    educationalInsight: 'Market Cycles – The Wheel spins forever.',
    appIntegration: 'Spinning wheel; stuck on reverse.',
    visualDescription:
      'A colossal gyroscopic wheel spins in the void, segmented into bullish emerald and bearish crimson panels. Tokens rain from one side while liquidation smoke rises on the other. Reversed: the axle seizes, shards of broken luck scattering.',
    extendedReflection: 'The spinning block—fortune favors the prepared wallet.',
    strategy: 'DCA. Never all-in.',
    bookChapter:
      "In the digital realm where code meets cosmos, Wheel of Fortune Cycle emerges as a beacon of jupiter influence. Bull/bear cycles and fortune that favors the daring. \n\nThe spinning block—fortune favors the prepared wallet. \n\nWhen you gaze upon this card, a colossal gyroscopic wheel spins in the void, segmented into bullish emerald and bearish crimson panels. tokens rain from one side while liquidation smoke rises on the other. reversed: the axle seizes, shards of broken luck scattering. This imagery speaks to the archetypal journey embedded within the Major Arcana. \n\nIn its upright position, Wheel of Fortune Cycle reveals bull/bear cycles, airdrops, luck.. This is a time of random airdrop or rug.. \n\nWhen reversed, the card warns of flash crashes, bad rng, misfortune.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, market cycles – the wheel spins forever. Understanding this concept is crucial for navigating the archetypal lessons this card offers. \n\nThe practical wisdom of Wheel of Fortune Cycle suggests: DCA. Never all-in. \n\nLooking ahead, cycles repeat; position for the upswing. \n\nWheel of Fortune Cycle teaches us that in the world of crypto, archetypes shape our journey. Whether you're embarking on a new chain, this card reminds you that patience and wisdom are your greatest assets. The blockchain never forgets, but it also never stops evolving. As one of the Major Arcana, this card represents a significant turning point in your crypto journey—a moment that will define your path forward.",
    nftMetadata: [{ trait_type: 'Luck', value: 'RNG' }],
    gameMechanics: {
      rarity: 'Rare',
      spellUpright: 'Shuffle discard into deck',
      spellReversed: 'Swap 1 random card with all',
      energyCost: 1,
      type: 'spell',
    },
  },
  'Justice Ledger': {
    arcana: 'Major',
    number: 11,
    cosmicRuler: 'Libra',
    cosmicSummary: 'Fair launch, audits, and balanced regulation.',
    upright: 'Fair launch, audits, regulation.',
    reversed: 'Exploits, SEC crackdown.',
    cryptoFlavor: 'Certik audit pass/fail.',
    foresight: 'On-chain truth prevails; audit your deals.',
    educationalInsight: 'Audits – Justice is the final arbiter.',
    appIntegration: 'Scales of code; tipped on reverse.',
    visualDescription:
      'A blindfolded arbiter balances two holographic ledgers on radiant scales, one glowing green with verified signatures, the other pulsing red with exploit flags. Beams of light form a digital courthouse behind. Reversed: the scales tip violently, spilling corrupted data.',
    extendedReflection: "Code is law—ensure it's just. The ledger never forgets.",
    strategy: 'Use audited contracts.',
    bookChapter:
      "In the digital realm where code meets cosmos, Justice Ledger emerges as a beacon of libra influence. Fair launch, audits, and balanced regulation. \n\nCode is law—ensure it's just. The ledger never forgets. \n\nWhen you gaze upon this card, a blindfolded arbiter balances two holographic ledgers on radiant scales, one glowing green with verified signatures, the other pulsing red with exploit flags. beams of light form a digital courthouse behind. reversed: the scales tip violently, spilling corrupted data. This imagery speaks to the archetypal journey embedded within the Major Arcana. \n\nIn its upright position, Justice Ledger reveals fair launch, audits, regulation.. This is a time of certik audit pass/fail.. \n\nWhen reversed, the card warns of exploits, sec crackdown.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, audits – justice is the final arbiter. Understanding this concept is crucial for navigating the archetypal lessons this card offers. \n\nThe practical wisdom of Justice Ledger suggests: Use audited contracts. \n\nLooking ahead, on-chain truth prevails; audit your deals. \n\nJustice Ledger teaches us that in the world of crypto, archetypes shape our journey. Whether you're embarking on a new chain, this card reminds you that patience and wisdom are your greatest assets. The blockchain never forgets, but it also never stops evolving. As one of the Major Arcana, this card represents a significant turning point in your crypto journey—a moment that will define your path forward.",
    nftMetadata: [{ trait_type: 'Verdict', value: 'Pass' }],
    gameMechanics: {
      rarity: 'Epic',
      spellUpright: 'Balance Life totals',
      spellReversed: 'Destroy weakest block',
      energyCost: 1,
      type: 'spell',
    },
  },
  'The Hanged Man Flip': {
    arcana: 'Major',
    number: 12,
    cosmicRuler: 'Neptune',
    cosmicSummary: 'Pause, reflection, and seeing the mempool upside down.',
    upright: 'Pause, reflection, stuck transaction.',
    reversed: 'Gas wars, trapped in mempool.',
    cryptoFlavor: 'Waiting 48h for L2 confirm.',
    foresight: 'Hang in for reversals; new views yield profits.',
    educationalInsight: 'Mempool – The Hanged Man is in limbo.',
    appIntegration: 'Upside-down card; spinning loader.',
    visualDescription:
      'An avatar dangles serenely from a braided fiber-optic rope, upside down above a calm mempool sea. Pending transactions float as glowing bubbles around them. Reversed: the bubbles ignite, gas flames roaring toward the rope.',
    extendedReflection: "Surrender to the chain's timing. Sometimes, waiting is winning.",
    strategy: 'Be patient. Gas will drop.',
    bookChapter:
      "In the digital realm where code meets cosmos, The Hanged Man Flip emerges as a beacon of neptune influence. Pause, reflection, and seeing the mempool upside down. \n\nSurrender to the chain's timing. Sometimes, waiting is winning. \n\nWhen you gaze upon this card, an avatar dangles serenely from a braided fiber-optic rope, upside down above a calm mempool sea. pending transactions float as glowing bubbles around them. reversed: the bubbles ignite, gas flames roaring toward the rope. This imagery speaks to the archetypal journey embedded within the Major Arcana. \n\nIn its upright position, The Hanged Man Flip reveals pause, reflection, stuck transaction.. This is a time of waiting 48h for l2 confirm.. \n\nWhen reversed, the card warns of gas wars, trapped in mempool.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, mempool – the hanged man is in limbo. Understanding this concept is crucial for navigating the archetypal lessons this card offers. \n\nThe practical wisdom of The Hanged Man Flip suggests: Be patient. Gas will drop. \n\nLooking ahead, hang in for reversals; new views yield profits. \n\nThe Hanged Man Flip teaches us that in the world of crypto, archetypes shape our journey. Whether you're embarking on a new chain, this card reminds you that patience and wisdom are your greatest assets. The blockchain never forgets, but it also never stops evolving. As one of the Major Arcana, this card represents a significant turning point in your crypto journey—a moment that will define your path forward.",
    nftMetadata: [{ trait_type: 'State', value: 'Pending' }],
    gameMechanics: {
      rarity: 'Rare',
      spellUpright: 'Reverse next opponent battle',
      spellReversed: 'Skip opponent turn',
      energyCost: 1,
      type: 'spell',
    },
  },
  'Death Rug': {
    arcana: 'Major',
    number: 13,
    cosmicRuler: 'Scorpio',
    cosmicSummary: 'Hard forks, sunset protocols, and metamorphosis.',
    upright: 'Hard fork, sunset protocol.',
    reversed: 'Zombie chains, abandoned projects.',
    cryptoFlavor: 'Ethereum 1.0 → 2.0 migration.',
    foresight: 'Let dead coins go; rebirth in new metas.',
    educationalInsight: 'Hard Forks – Death is evolution.',
    appIntegration: 'Phoenix rising; tombstone on reverse.',
    visualDescription:
      'A cloaked reaper gently lifts a frayed rug emblazoned with a dying logo, revealing a luminous phoenix chain ascending beneath. Debris of abandoned tokens scatter like autumn leaves. Reversed: only ash remains, the phoenix wings clipped.',
    extendedReflection: "The phoenix fork—death is not the end. It's the upgrade.",
    strategy: 'Migrate early.',
    bookChapter:
      "In the digital realm where code meets cosmos, Death Rug emerges as a beacon of scorpio influence. Hard forks, sunset protocols, and metamorphosis. \n\nThe phoenix fork—death is not the end. It's the upgrade. \n\nWhen you gaze upon this card, a cloaked reaper gently lifts a frayed rug emblazoned with a dying logo, revealing a luminous phoenix chain ascending beneath. debris of abandoned tokens scatter like autumn leaves. reversed: only ash remains, the phoenix wings clipped. This imagery speaks to the archetypal journey embedded within the Major Arcana. \n\nIn its upright position, Death Rug reveals hard fork, sunset protocol.. This is a time of ethereum 1.0 → 2.0 migration.. \n\nWhen reversed, the card warns of zombie chains, abandoned projects.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, hard forks – death is evolution. Understanding this concept is crucial for navigating the archetypal lessons this card offers. \n\nThe practical wisdom of Death Rug suggests: Migrate early. \n\nLooking ahead, let dead coins go; rebirth in new metas. \n\nDeath Rug teaches us that in the world of crypto, archetypes shape our journey. Whether you're embarking on a new chain, this card reminds you that patience and wisdom are your greatest assets. The blockchain never forgets, but it also never stops evolving. As one of the Major Arcana, this card represents a significant turning point in your crypto journey—a moment that will define your path forward.",
    nftMetadata: [{ trait_type: 'Event', value: 'Fork' }],
    gameMechanics: {
      rarity: 'Epic',
      spellUpright: 'Destroy 3 lowest blocks',
      spellReversed: 'Revive 1 destroyed block',
      energyCost: 1,
      type: 'spell',
    },
  },
  'Temperance Mix': {
    arcana: 'Major',
    number: 14,
    cosmicRuler: 'Sagittarius',
    cosmicSummary: 'Rebalancing stables, mixing liquidity, alchemical blends.',
    upright: 'Rebase, stablecoins, balance.',
    reversed: 'Peg break, UST collapse.',
    cryptoFlavor: 'DAI / USDC peg mechanics.',
    foresight: 'Blend assets wisely; moderation in DeFi.',
    educationalInsight: 'Stablecoins – Temperance is the alchemist.',
    appIntegration: 'Pouring liquids; spill on reverse.',
    visualDescription:
      'An alchemist angel pours shimmering blue and gold liquids between two levitating chalices, the stream forming the symbol of 1:1. Around them, stablecoin sigils orbit in perfect balance. Reversed: the stream splashes wildly, chalices cracking.',
    extendedReflection:
      'The alchemist of liquidity. Too much fire, and it burns. Too little, and it freezes.',
    strategy: 'Diversify stables.',
    bookChapter:
      "In the digital realm where code meets cosmos, Temperance Mix emerges as a beacon of sagittarius influence. Rebalancing stables, mixing liquidity, alchemical blends. \n\nThe alchemist of liquidity. Too much fire, and it burns. Too little, and it freezes. \n\nWhen you gaze upon this card, an alchemist angel pours shimmering blue and gold liquids between two levitating chalices, the stream forming the symbol of 1:1. around them, stablecoin sigils orbit in perfect balance. reversed: the stream splashes wildly, chalices cracking. This imagery speaks to the archetypal journey embedded within the Major Arcana. \n\nIn its upright position, Temperance Mix reveals rebase, stablecoins, balance.. This is a time of dai / usdc peg mechanics.. \n\nWhen reversed, the card warns of peg break, ust collapse.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, stablecoins – temperance is the alchemist. Understanding this concept is crucial for navigating the archetypal lessons this card offers. \n\nThe practical wisdom of Temperance Mix suggests: Diversify stables. \n\nLooking ahead, blend assets wisely; moderation in defi. \n\nTemperance Mix teaches us that in the world of crypto, archetypes shape our journey. Whether you're embarking on a new chain, this card reminds you that patience and wisdom are your greatest assets. The blockchain never forgets, but it also never stops evolving. As one of the Major Arcana, this card represents a significant turning point in your crypto journey—a moment that will define your path forward.",
    nftMetadata: [{ trait_type: 'Peg', value: '1:1' }],
    gameMechanics: {
      rarity: 'Rare',
      spellUpright: 'Average all chain lengths',
      spellReversed: 'Heal all players 2',
      energyCost: 1,
      type: 'spell',
    },
  },
  'The Devil Scam': {
    arcana: 'Major',
    number: 15,
    cosmicRuler: 'Capricorn',
    cosmicSummary: 'Addiction, leverage, greed, and yield traps.',
    upright: 'Addiction, leverage, greed.',
    reversed: 'Debt spiral, liquidation.',
    cryptoFlavor: '125x perp trading spree.',
    foresight: 'Beware seductive rugs; liberate your funds.',
    educationalInsight: 'Leverage – The Devil is the temptation.',
    appIntegration: 'Chains glowing; broken on reverse.',
    visualDescription:
      'A horned broker in a velvet suit dangles glistening leverage contracts from chains wrapped around two traders. Neon slot-machine lights flash 125x behind them. Reversed: the chains snap, releasing them into harsh white daylight.',
    extendedReflection: 'The dark side of moonshots. The higher the leverage, the harder the fall.',
    strategy: 'Use 1x. Sleep well.',
    bookChapter:
      "In the digital realm where code meets cosmos, The Devil Scam emerges as a beacon of capricorn influence. Addiction, leverage, greed, and yield traps. \n\nThe dark side of moonshots. The higher the leverage, the harder the fall. \n\nWhen you gaze upon this card, a horned broker in a velvet suit dangles glistening leverage contracts from chains wrapped around two traders. neon slot-machine lights flash 125x behind them. reversed: the chains snap, releasing them into harsh white daylight. This imagery speaks to the archetypal journey embedded within the Major Arcana. \n\nIn its upright position, The Devil Scam reveals addiction, leverage, greed.. This is a time of 125x perp trading spree.. \n\nWhen reversed, the card warns of debt spiral, liquidation.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, leverage – the devil is the temptation. Understanding this concept is crucial for navigating the archetypal lessons this card offers. \n\nThe practical wisdom of The Devil Scam suggests: Use 1x. Sleep well. \n\nLooking ahead, beware seductive rugs; liberate your funds. \n\nThe Devil Scam teaches us that in the world of crypto, archetypes shape our journey. Whether you're embarking on a new chain, this card reminds you that patience and wisdom are your greatest assets. The blockchain never forgets, but it also never stops evolving. As one of the Major Arcana, this card represents a significant turning point in your crypto journey—a moment that will define your path forward.",
    nftMetadata: [{ trait_type: 'Risk', value: '125x' }],
    gameMechanics: {
      rarity: 'Epic',
      spellUpright: 'Steal 2 blocks + 2 Life',
      spellReversed: 'Take 2 Life damage',
      energyCost: 1,
      type: 'spell',
    },
  },
  'The Tower Hack': {
    arcana: 'Major',
    number: 16,
    cosmicRuler: 'Mars',
    cosmicSummary: 'Flash crashes, exploits, and tearing down insecure stacks.',
    upright: 'Flash crash, exploit, hack.',
    reversed: 'Slow bleed, silent drain.',
    cryptoFlavor: '$600M Poly Network hack.',
    foresight: 'Crises forge resilience; secure your nodes.',
    educationalInsight: 'Exploits – The Tower is sudden truth.',
    appIntegration: 'Lightning strike; rubble on reverse.',
    visualDescription:
      'A glass data tower explodes under a jagged bolt of crimson lightning, shards flying as alarms flash across the skyline. Streams of liquid crypto pour from a breached vault at the base. Reversed: the leak becomes a slow drip, corrosion creeping unnoticed.',
    extendedReflection: 'Sudden disruption—innovation from rubble. Every hack is a lesson.',
    strategy: 'Use hardware wallets.',
    bookChapter:
      "In the digital realm where code meets cosmos, The Tower Hack emerges as a beacon of mars influence. Flash crashes, exploits, and tearing down insecure stacks. \n\nSudden disruption—innovation from rubble. Every hack is a lesson. \n\nWhen you gaze upon this card, a glass data tower explodes under a jagged bolt of crimson lightning, shards flying as alarms flash across the skyline. streams of liquid crypto pour from a breached vault at the base. reversed: the leak becomes a slow drip, corrosion creeping unnoticed. This imagery speaks to the archetypal journey embedded within the Major Arcana. \n\nIn its upright position, The Tower Hack reveals flash crash, exploit, hack.. This is a time of $600m poly network hack.. \n\nWhen reversed, the card warns of slow bleed, silent drain.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, exploits – the tower is sudden truth. Understanding this concept is crucial for navigating the archetypal lessons this card offers. \n\nThe practical wisdom of The Tower Hack suggests: Use hardware wallets. \n\nLooking ahead, crises forge resilience; secure your nodes. \n\nThe Tower Hack teaches us that in the world of crypto, archetypes shape our journey. Whether you're embarking on a new chain, this card reminds you that patience and wisdom are your greatest assets. The blockchain never forgets, but it also never stops evolving. As one of the Major Arcana, this card represents a significant turning point in your crypto journey—a moment that will define your path forward.",
    nftMetadata: [{ trait_type: 'Event', value: 'Hack' }],
    gameMechanics: {
      rarity: 'Epic',
      spellUpright: 'Destroy all blocks in a row',
      spellReversed: 'Deal 5 Life damage',
      energyCost: 1,
      type: 'spell',
    },
  },
  'The Star Airdrop': {
    arcana: 'Major',
    number: 17,
    cosmicRuler: 'Aquarius',
    cosmicSummary: 'Hope, new L1 innovation, and futuristic networks.',
    upright: 'Hope, new L1, innovation.',
    reversed: 'Vaporware, delayed roadmap.',
    cryptoFlavor: 'Solana comeback narrative.',
    foresight: 'Stars align for rewards; qualify wisely.',
    educationalInsight: 'Airdrops – The Star is cosmic reward.',
    appIntegration: 'Falling stars; fade on reverse.',
    visualDescription:
      "A radiant figure pours shimmering token constellations from two silver pitchers into a galactic pool, each star forming a wallet address as it lands. Aurora lights streak across the sky spelling 'GM'. Reversed: the stars flicker out before they touch the water.",
    extendedReflection: "The light after the hack. Hope is not a strategy—but it's a start.",
    strategy: "Farm points. Don't chase.",
    bookChapter:
      "In the digital realm where code meets cosmos, The Star Airdrop emerges as a beacon of aquarius influence. Hope, new L1 innovation, and futuristic networks. \n\nThe light after the hack. Hope is not a strategy—but it's a start. \n\nWhen you gaze upon this card, a radiant figure pours shimmering token constellations from two silver pitchers into a galactic pool, each star forming a wallet address as it lands. aurora lights streak across the sky spelling 'gm'. reversed: the stars flicker out before they touch the water. This imagery speaks to the archetypal journey embedded within the Major Arcana. \n\nIn its upright position, The Star Airdrop reveals hope, new l1, innovation.. This is a time of solana comeback narrative.. \n\nWhen reversed, the card warns of vaporware, delayed roadmap.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, airdrops – the star is cosmic reward. Understanding this concept is crucial for navigating the archetypal lessons this card offers. \n\nThe practical wisdom of The Star Airdrop suggests: Farm points. Don't chase. \n\nLooking ahead, stars align for rewards; qualify wisely. \n\nThe Star Airdrop teaches us that in the world of crypto, archetypes shape our journey. Whether you're embarking on a new chain, this card reminds you that patience and wisdom are your greatest assets. The blockchain never forgets, but it also never stops evolving. As one of the Major Arcana, this card represents a significant turning point in your crypto journey—a moment that will define your path forward.",
    nftMetadata: [{ trait_type: 'Reward', value: 'Airdrop' }],
    gameMechanics: {
      rarity: 'Epic',
      spellUpright: 'Everyone gains 1 block',
      spellReversed: 'Draw 1 Major',
      energyCost: 1,
      type: 'spell',
    },
  },
  'The Moon Illusion': {
    arcana: 'Major',
    number: 18,
    cosmicRuler: 'Pisces',
    cosmicSummary: 'DeFi illusions, yield mirages, and shadow markets.',
    upright: 'DeFi illusions, yield mirage.',
    reversed: 'Fake APY, rug-pull revealed.',
    cryptoFlavor: 'Squid Game token scam.',
    foresight: 'Navigate FUD; illusions fade at dawn.',
    educationalInsight: 'Rug Pulls – The Moon is deception.',
    appIntegration: 'Foggy mirror; clear on reverse.',
    visualDescription:
      'Twin wolf-hounds howl at a holographic moon that projects impossible yield percentages over a misty DeFi swamp. Reflections on the water reveal skull icons beneath the glitter. Reversed: the moon flickers to expose the scam, the swamp draining dry.',
    extendedReflection: "Deception in the night market. If it looks too good, it's a mirage.",
    strategy: 'Check liquidity. Check team.',
    bookChapter:
      "In the digital realm where code meets cosmos, The Moon Illusion emerges as a beacon of pisces influence. DeFi illusions, yield mirages, and shadow markets. \n\nDeception in the night market. If it looks too good, it's a mirage. \n\nWhen you gaze upon this card, twin wolf-hounds howl at a holographic moon that projects impossible yield percentages over a misty defi swamp. reflections on the water reveal skull icons beneath the glitter. reversed: the moon flickers to expose the scam, the swamp draining dry. This imagery speaks to the archetypal journey embedded within the Major Arcana. \n\nIn its upright position, The Moon Illusion reveals defi illusions, yield mirage.. This is a time of squid game token scam.. \n\nWhen reversed, the card warns of fake apy, rug-pull revealed.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, rug pulls – the moon is deception. Understanding this concept is crucial for navigating the archetypal lessons this card offers. \n\nThe practical wisdom of The Moon Illusion suggests: Check liquidity. Check team. \n\nLooking ahead, navigate fud; illusions fade at dawn. \n\nThe Moon Illusion teaches us that in the world of crypto, archetypes shape our journey. Whether you're embarking on a new chain, this card reminds you that patience and wisdom are your greatest assets. The blockchain never forgets, but it also never stops evolving. As one of the Major Arcana, this card represents a significant turning point in your crypto journey—a moment that will define your path forward.",
    nftMetadata: [{ trait_type: 'Truth', value: 'Hidden' }],
    gameMechanics: {
      rarity: 'Epic',
      spellUpright: 'Swap hidden card with opponent',
      spellReversed: 'Reveal swap (lose turn)',
      energyCost: 1,
      type: 'spell',
    },
  },
  'The Sun Bull': {
    arcana: 'Major',
    number: 19,
    cosmicRuler: 'Sun',
    cosmicSummary: 'Bull run, euphoria, and new all-time highs.',
    upright: 'Bull run, euphoria, ATH.',
    reversed: 'Overhype, correction incoming.',
    cryptoFlavor: 'BTC blasts past $100K.',
    foresight: 'Bask in bull markets; shade for sustainability.',
    educationalInsight: 'Bull Markets – The Sun is peak energy.',
    appIntegration: 'Blazing sun; eclipse on reverse.',
    visualDescription:
      'A golden bull charges across a radiant sunflower field made of circuit boards, the sun behind it erupting into candlestick rays. Confetti of ATH banners rains from the sky. Reversed: an eclipse shadows the field, petals wilting to ash.',
    extendedReflection: 'The peak of the cycle. Enjoy it. But remember: winter follows.',
    strategy: "Take profits. Don't get greedy.",
    bookChapter:
      "In the digital realm where code meets cosmos, The Sun Bull emerges as a beacon of sun influence. Bull run, euphoria, and new all-time highs. \n\nThe peak of the cycle. Enjoy it. But remember: winter follows. \n\nWhen you gaze upon this card, a golden bull charges across a radiant sunflower field made of circuit boards, the sun behind it erupting into candlestick rays. confetti of ath banners rains from the sky. reversed: an eclipse shadows the field, petals wilting to ash. This imagery speaks to the archetypal journey embedded within the Major Arcana. \n\nIn its upright position, The Sun Bull reveals bull run, euphoria, ath.. This is a time of btc blasts past $100k.. \n\nWhen reversed, the card warns of overhype, correction incoming.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, bull markets – the sun is peak energy. Understanding this concept is crucial for navigating the archetypal lessons this card offers. \n\nThe practical wisdom of The Sun Bull suggests: Take profits. Don't get greedy. \n\nLooking ahead, bask in bull markets; shade for sustainability. \n\nThe Sun Bull teaches us that in the world of crypto, archetypes shape our journey. Whether you're embarking on a new chain, this card reminds you that patience and wisdom are your greatest assets. The blockchain never forgets, but it also never stops evolving. As one of the Major Arcana, this card represents a significant turning point in your crypto journey—a moment that will define your path forward.",
    nftMetadata: [{ trait_type: 'Market', value: 'Bull' }],
    gameMechanics: {
      rarity: 'Epic',
      spellUpright: '+5 army power',
      spellReversed: 'Everyone gain 3 Life',
      energyCost: 1,
      type: 'spell',
    },
  },
  'Judgment Halving': {
    arcana: 'Major',
    number: 20,
    cosmicRuler: 'Pluto',
    cosmicSummary: 'Hard fork votes, community reckonings, phoenix cycles.',
    upright: 'Hard fork vote, community call.',
    reversed: 'Fork war, chain split.',
    cryptoFlavor: 'ETH vs ETC showdown.',
    foresight: 'Halvings judge worth; prepare for scarcity.',
    educationalInsight: 'Halving – Judgment is scarcity reborn.',
    appIntegration: 'Trumpet call; silence on reverse.',
    visualDescription:
      'An angelic node blows a trumpet of binary light, awakening miners who rise from tombs marked with old chain logos. A radiant block descends, splitting neatly in two. Reversed: the trumpet cracks, unleashing chaotic chain fragments.',
    extendedReflection: 'Resurrection or division. The chain splits. The strong survive.',
    strategy: 'Choose your side. Or bridge both.',
    bookChapter:
      "In the digital realm where code meets cosmos, Judgment Halving emerges as a beacon of pluto influence. Hard fork votes, community reckonings, phoenix cycles. \n\nResurrection or division. The chain splits. The strong survive. \n\nWhen you gaze upon this card, an angelic node blows a trumpet of binary light, awakening miners who rise from tombs marked with old chain logos. a radiant block descends, splitting neatly in two. reversed: the trumpet cracks, unleashing chaotic chain fragments. This imagery speaks to the archetypal journey embedded within the Major Arcana. \n\nIn its upright position, Judgment Halving reveals hard fork vote, community call.. This is a time of eth vs etc showdown.. \n\nWhen reversed, the card warns of fork war, chain split.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, halving – judgment is scarcity reborn. Understanding this concept is crucial for navigating the archetypal lessons this card offers. \n\nThe practical wisdom of Judgment Halving suggests: Choose your side. Or bridge both. \n\nLooking ahead, halvings judge worth; prepare for scarcity. \n\nJudgment Halving teaches us that in the world of crypto, archetypes shape our journey. Whether you're embarking on a new chain, this card reminds you that patience and wisdom are your greatest assets. The blockchain never forgets, but it also never stops evolving. As one of the Major Arcana, this card represents a significant turning point in your crypto journey—a moment that will define your path forward.",
    nftMetadata: [{ trait_type: 'Event', value: 'Halving' }],
    gameMechanics: {
      rarity: 'Epic',
      spellUpright: 'Halve all chains (round down)',
      spellReversed: 'Double next rally',
      energyCost: 1,
      type: 'spell',
    },
  },
  'The World Ecosystem': {
    arcana: 'Major',
    number: 21,
    cosmicRuler: 'Saturn',
    cosmicSummary: 'Mainnet complete, full cycle, global adoption spinning.',
    upright: 'Mainnet complete, full cycle.',
    reversed: 'Infinite inflation, no cap.',
    cryptoFlavor: 'Bitcoin halving cycle endgame.',
    foresight: 'Unite in Web3; the cycle renews.',
    educationalInsight: 'Ecosystem – The World is completion.',
    appIntegration: 'Spinning globe; cracked on reverse.',
    visualDescription:
      'A luminous globe of interlocking blockchains spins within a wreath of satellites, each emblazoned with global protocol sigils. Aurora bridges connect every continent. Reversed: fractures spider across the globe, satellites falling dark.',
    extendedReflection:
      'The fully synced node—universe in balance. The end is just the next beginning.',
    strategy: 'Ship v1. Then ship v2.',
    bookChapter:
      "In the digital realm where code meets cosmos, The World Ecosystem emerges as a beacon of saturn influence. Mainnet complete, full cycle, global adoption spinning. \n\nThe fully synced node—universe in balance. The end is just the next beginning. \n\nWhen you gaze upon this card, a luminous globe of interlocking blockchains spins within a wreath of satellites, each emblazoned with global protocol sigils. aurora bridges connect every continent. reversed: fractures spider across the globe, satellites falling dark. This imagery speaks to the archetypal journey embedded within the Major Arcana. \n\nIn its upright position, The World Ecosystem reveals mainnet complete, full cycle.. This is a time of bitcoin halving cycle endgame.. \n\nWhen reversed, the card warns of infinite inflation, no cap.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, ecosystem – the world is completion. Understanding this concept is crucial for navigating the archetypal lessons this card offers. \n\nThe practical wisdom of The World Ecosystem suggests: Ship v1. Then ship v2. \n\nLooking ahead, unite in web3; the cycle renews. \n\nThe World Ecosystem teaches us that in the world of crypto, archetypes shape our journey. Whether you're embarking on a new chain, this card reminds you that patience and wisdom are your greatest assets. The blockchain never forgets, but it also never stops evolving. As one of the Major Arcana, this card represents a significant turning point in your crypto journey—a moment that will define your path forward.",
    nftMetadata: [{ trait_type: 'State', value: 'Mainnet' }],
    gameMechanics: {
      rarity: 'Legendary',
      spellUpright: 'Trigger final scoring now',
      spellReversed: 'Reset game (new deal)',
      energyCost: 1,
      type: 'spell',
    },
  },

  // Minor Arcana
  'Ace of Tokens': {
    arcana: 'Minor',
    number: 1,
    suit: 'Tokens',
    rank: 'Ace',
    cosmicRuler: 'Sun',
    cosmicSummary: 'Vitality, new beginnings, and core energy launching a protocol.',
    upright: 'New token, genesis drop, seed round, pure potential.',
    reversed: 'Dust, worthless launch, failed mint.',
    cryptoFlavor: 'First mint of BAYC.',
    foresight: 'Plant your sats. A new era begins.',
    educationalInsight:
      'NFTs – Unique digital assets on the blockchain. The Ace is the first edition.',
    appIntegration: 'Animated mint sparkle; "Sold Out" on reverse.',
    visualDescription:
      'A prismatic coin hovers above a neon minting pad, emerald sparks bursting outward while holographic butterflies dance around the token. Reversed, the coin turns gray and the minting pad flashes "Sold Out" as dust swirls.',
    extendedReflection:
      'This is the original sin of crypto: the first time someone paid 0.1 ETH for a JPEG. It was absurd. It was beautiful. It was the future.',
    strategy: 'Mint early. But only if you believe.',
    bookChapter:
      'In the digital realm where code meets cosmos, Ace of Tokens emerges as a beacon of sun influence. Vitality, new beginnings, and core energy launching a protocol. \n\nThis is the original sin of crypto: the first time someone paid 0.1 ETH for a JPEG. It was absurd. It was beautiful. It was the future. \n\nWhen you gaze upon this card, a prismatic coin hovers above a neon minting pad, emerald sparks bursting outward while holographic butterflies dance around the token. reversed, the coin turns gray and the minting pad flashes "sold out" as dust swirls. This imagery speaks to the practical wisdom embedded within the Tokens suit. \n\nIn its upright position, Ace of Tokens reveals new token, genesis drop, seed round, pure potential.. This is a time of first mint of bayc.. \n\nWhen reversed, the card warns of dust, worthless launch, failed mint.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, nfts – unique digital assets on the blockchain. the ace is the first edition. Understanding this concept is crucial for navigating the practical lessons this card offers. \n\nThe practical wisdom of Ace of Tokens suggests: Mint early. But only if you believe. \n\nLooking ahead, plant your sats. a new era begins. \n\nAce of Tokens teaches us that in the world of crypto, daily practices shape our journey. Whether you\'re managing your portfolio, this card reminds you that patience and wisdom are your greatest assets. The blockchain never forgets, but it also never stops evolving. As part of the Tokens suit, this card reflects the material and practical aspects of your Web3 experience.',
    nftMetadata: [
      { trait_type: 'Edition', value: '#1' },
      { trait_type: 'Rarity', value: 'Genesis' },
    ],
    gameMechanics: {
      rarity: 'Common',
      value: 1,
      power: 1,
      type: 'unit',
      suitBonus: {
        rallyBonus: '+1 value',
        chainBonus: '+1 per matching block',
        battleBonus: '+1 defense',
      },
      aceEffect: 'Genesis (first block gains +2 chain score)',
    },
  },
  'Two of Tokens': {
    arcana: 'Minor',
    number: 2,
    suit: 'Tokens',
    rank: 'Two',
    cosmicRuler: 'Moon',
    cosmicSummary: 'Duality, intuition, and balancing liquidity with instinct.',
    upright: 'HODL vs sell decision, balanced portfolio.',
    reversed: 'Flip-flop indecision, emotional trading.',
    cryptoFlavor: 'Balancing diamond hands with profit-taking.',
    foresight: 'Diversify wisely. Balance is power.',
    educationalInsight: 'Portfolio Management – The Two is the yin-yang of risk.',
    appIntegration: 'Two coins orbiting; crash on reverse.',
    visualDescription:
      'Two luminous coins spin in perfect orbit over a teal balance scale, moonlight reflecting off their surfaces. Reversed, the coins tumble apart and one crashes into a red abyss.',
    extendedReflection:
      'The duality of markets—hold or fold? One side says "moon." The other says "dip."',
    strategy: 'Set rules. Follow them.',
    bookChapter:
      'In the digital realm where code meets cosmos, Two of Tokens emerges as a beacon of moon influence. Duality, intuition, and balancing liquidity with instinct. \n\nThe duality of markets—hold or fold? One side says "moon." The other says "dip." \n\nWhen you gaze upon this card, two luminous coins spin in perfect orbit over a teal balance scale, moonlight reflecting off their surfaces. reversed, the coins tumble apart and one crashes into a red abyss. This imagery speaks to the practical wisdom embedded within the Tokens suit. \n\nIn its upright position, Two of Tokens reveals hodl vs sell decision, balanced portfolio.. This is a time of balancing diamond hands with profit-taking.. \n\nWhen reversed, the card warns of flip-flop indecision, emotional trading.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, portfolio management – the two is the yin-yang of risk. Understanding this concept is crucial for navigating the practical lessons this card offers. \n\nThe practical wisdom of Two of Tokens suggests: Set rules. Follow them. \n\nLooking ahead, diversify wisely. balance is power. \n\nTwo of Tokens teaches us that in the world of crypto, daily practices shape our journey. Whether you\'re managing your portfolio, this card reminds you that patience and wisdom are your greatest assets. The blockchain never forgets, but it also never stops evolving. As part of the Tokens suit, this card reflects the material and practical aspects of your Web3 experience.',
    nftMetadata: [{ trait_type: 'Strategy', value: 'Balanced' }],
    gameMechanics: {
      rarity: 'Common',
      value: 2,
      power: 2,
      type: 'unit',
      suitBonus: {
        rallyBonus: '+1 value',
        chainBonus: '+1 per matching block',
        battleBonus: '+1 defense',
      },
    },
  },
  'Three of Tokens': {
    arcana: 'Minor',
    number: 3,
    suit: 'Tokens',
    rank: 'Three',
    cosmicRuler: 'Mercury',
    cosmicSummary: 'Communication, collaboration, and smart token strategy.',
    upright: 'Community shill, viral collaboration, team pump.',
    reversed: 'Echo chamber hype, failed marketing.',
    cryptoFlavor: 'Three influencers coordinating a mint.',
    foresight: 'Build with trusted devs.',
    educationalInsight: 'Viral Marketing – The Three is the power of three.',
    appIntegration: 'Three speech bubbles; muted on reverse.',
    visualDescription:
      'Three holographic influencers stand in a triangle, sending emerald signals that create a neon ripple across the crowd. Reversed, their speech bubbles flicker and mute icons appear.',
    extendedReflection: 'The power of network effects. One voice is noise. Three are a movement.',
    strategy: 'Partner up. Amplify.',
    bookChapter:
      "In the digital realm where code meets cosmos, Three of Tokens emerges as a beacon of mercury influence. Communication, collaboration, and smart token strategy. \n\nThe power of network effects. One voice is noise. Three are a movement. \n\nWhen you gaze upon this card, three holographic influencers stand in a triangle, sending emerald signals that create a neon ripple across the crowd. reversed, their speech bubbles flicker and mute icons appear. This imagery speaks to the practical wisdom embedded within the Tokens suit. \n\nIn its upright position, Three of Tokens reveals community shill, viral collaboration, team pump.. This is a time of three influencers coordinating a mint.. \n\nWhen reversed, the card warns of echo chamber hype, failed marketing.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, viral marketing – the three is the power of three. Understanding this concept is crucial for navigating the practical lessons this card offers. \n\nThe practical wisdom of Three of Tokens suggests: Partner up. Amplify. \n\nLooking ahead, build with trusted devs. \n\nThree of Tokens teaches us that in the world of crypto, daily practices shape our journey. Whether you're managing your portfolio, this card reminds you that patience and wisdom are your greatest assets. The blockchain never forgets, but it also never stops evolving. As part of the Tokens suit, this card reflects the material and practical aspects of your Web3 experience.",
    nftMetadata: [{ trait_type: 'Network', value: '3x' }],
    gameMechanics: {
      rarity: 'Common',
      value: 3,
      power: 3,
      type: 'unit',
      suitBonus: {
        rallyBonus: '+1 value',
        chainBonus: '+1 per matching block',
        battleBonus: '+1 defense',
      },
    },
  },
  'Four of Tokens': {
    arcana: 'Minor',
    number: 4,
    suit: 'Tokens',
    rank: 'Four',
    cosmicRuler: 'Uranus',
    cosmicSummary: 'Structure, innovation, and safeguarding holdings with surprises.',
    upright: 'Stable wallet, cold storage, secure holdings.',
    reversed: 'Lost seed phrase scare, recovery drama.',
    cryptoFlavor: 'Ledger hardware tucked away.',
    foresight: 'Secure vaults. Protect your future.',
    educationalInsight: 'Cold Storage – The Four is the fortress.',
    appIntegration: 'Locked vault; open on reverse.',
    visualDescription:
      'A crystal vault glows with teal light as four keys lock into place, guarded by emerald sentinels. Reversed, the vault door swings open and pale warning lights flash.',
    extendedReflection: 'Foundations for long-term wealth. The storm comes. The vault stands.',
    strategy: 'Backup. Test recovery.',
    bookChapter:
      "In the digital realm where code meets cosmos, Four of Tokens emerges as a beacon of uranus influence. Structure, innovation, and safeguarding holdings with surprises. \n\nFoundations for long-term wealth. The storm comes. The vault stands. \n\nWhen you gaze upon this card, a crystal vault glows with teal light as four keys lock into place, guarded by emerald sentinels. reversed, the vault door swings open and pale warning lights flash. This imagery speaks to the practical wisdom embedded within the Tokens suit. \n\nIn its upright position, Four of Tokens reveals stable wallet, cold storage, secure holdings.. This is a time of ledger hardware tucked away.. \n\nWhen reversed, the card warns of lost seed phrase scare, recovery drama.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, cold storage – the four is the fortress. Understanding this concept is crucial for navigating the practical lessons this card offers. \n\nThe practical wisdom of Four of Tokens suggests: Backup. Test recovery. \n\nLooking ahead, secure vaults. protect your future. \n\nFour of Tokens teaches us that in the world of crypto, daily practices shape our journey. Whether you're managing your portfolio, this card reminds you that patience and wisdom are your greatest assets. The blockchain never forgets, but it also never stops evolving. As part of the Tokens suit, this card reflects the material and practical aspects of your Web3 experience.",
    nftMetadata: [{ trait_type: 'Security', value: 'Hardware' }],
    gameMechanics: {
      rarity: 'Common',
      value: 4,
      power: 4,
      type: 'unit',
      suitBonus: {
        rallyBonus: '+1 value',
        chainBonus: '+1 per matching block',
        battleBonus: '+1 defense',
      },
    },
  },
  'Five of Tokens': {
    arcana: 'Minor',
    number: 5,
    suit: 'Tokens',
    rank: 'Five',
    cosmicRuler: 'Mars',
    cosmicSummary: 'Conflict, action, and challenging scarcity events.',
    upright: 'Rug-pull war, FUD storm, community battle.',
    reversed: 'Recovery scam temptation, further loss.',
    cryptoFlavor: 'SafeMoon community drama.',
    foresight: 'Community support in dips.',
    educationalInsight: 'Rug Pulls – The Five is the battlefield.',
    appIntegration: 'Five broken tokens; healing on reverse.',
    visualDescription:
      'Five shattered coins scatter across a scarlet battlefield while community avatars clash in the background. Reversed, gentle teal light begins to mend the pieces.',
    extendedReflection: 'Conflict tests your resolve. The community fractures. The strong rebuild.',
    strategy: 'Stay calm. Help others.',
    bookChapter:
      "In the digital realm where code meets cosmos, Five of Tokens emerges as a beacon of mars influence. Conflict, action, and challenging scarcity events. \n\nConflict tests your resolve. The community fractures. The strong rebuild. \n\nWhen you gaze upon this card, five shattered coins scatter across a scarlet battlefield while community avatars clash in the background. reversed, gentle teal light begins to mend the pieces. This imagery speaks to the practical wisdom embedded within the Tokens suit. \n\nIn its upright position, Five of Tokens reveals rug-pull war, fud storm, community battle.. This is a time of safemoon community drama.. \n\nWhen reversed, the card warns of recovery scam temptation, further loss.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, rug pulls – the five is the battlefield. Understanding this concept is crucial for navigating the practical lessons this card offers. \n\nThe practical wisdom of Five of Tokens suggests: Stay calm. Help others. \n\nLooking ahead, community support in dips. \n\nFive of Tokens teaches us that in the world of crypto, daily practices shape our journey. Whether you're managing your portfolio, this card reminds you that patience and wisdom are your greatest assets. The blockchain never forgets, but it also never stops evolving. As part of the Tokens suit, this card reflects the material and practical aspects of your Web3 experience.",
    nftMetadata: [{ trait_type: 'Event', value: 'Rug' }],
    gameMechanics: {
      rarity: 'Common',
      value: 5,
      power: 5,
      type: 'unit',
      suitBonus: {
        rallyBonus: '+1 value',
        chainBonus: '+1 per matching block',
        battleBonus: '+1 defense',
      },
    },
  },
  'Six of Tokens': {
    arcana: 'Minor',
    number: 6,
    suit: 'Tokens',
    rank: 'Six',
    cosmicRuler: 'Venus',
    cosmicSummary: 'Harmony, generosity, and rewarding ecosystems.',
    upright: 'Airdrop love, fair distribution, community joy.',
    reversed: 'Feeling excluded from drops, unfair alloc.',
    cryptoFlavor: 'UNI airdrop nostalgia.',
    foresight: 'Give back to grow.',
    educationalInsight: 'Airdrops – The Six is the gift of decentralization.',
    appIntegration: 'Six falling tokens; empty on reverse.',
    visualDescription:
      'Six luminous coins cascade from a radiant hand into grateful wallets below, emerald confetti filling the air. Reversed, the coins vanish and empty hands reach into the void.',
    extendedReflection: 'The beauty of decentralization. The chain gives. The chain takes.',
    strategy: 'Share the love.',
    bookChapter:
      "In the digital realm where code meets cosmos, Six of Tokens emerges as a beacon of venus influence. Harmony, generosity, and rewarding ecosystems. \n\nThe beauty of decentralization. The chain gives. The chain takes. \n\nWhen you gaze upon this card, six luminous coins cascade from a radiant hand into grateful wallets below, emerald confetti filling the air. reversed, the coins vanish and empty hands reach into the void. This imagery speaks to the practical wisdom embedded within the Tokens suit. \n\nIn its upright position, Six of Tokens reveals airdrop love, fair distribution, community joy.. This is a time of uni airdrop nostalgia.. \n\nWhen reversed, the card warns of feeling excluded from drops, unfair alloc.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, airdrops – the six is the gift of decentralization. Understanding this concept is crucial for navigating the practical lessons this card offers. \n\nThe practical wisdom of Six of Tokens suggests: Share the love. \n\nLooking ahead, give back to grow. \n\nSix of Tokens teaches us that in the world of crypto, daily practices shape our journey. Whether you're managing your portfolio, this card reminds you that patience and wisdom are your greatest assets. The blockchain never forgets, but it also never stops evolving. As part of the Tokens suit, this card reflects the material and practical aspects of your Web3 experience.",
    nftMetadata: [{ trait_type: 'Reward', value: 'Airdrop' }],
    gameMechanics: {
      rarity: 'Common',
      value: 6,
      power: 6,
      type: 'unit',
      suitBonus: {
        rallyBonus: '+1 value',
        chainBonus: '+1 per matching block',
        battleBonus: '+1 defense',
      },
    },
  },
  'Seven of Tokens': {
    arcana: 'Minor',
    number: 7,
    suit: 'Tokens',
    rank: 'Seven',
    cosmicRuler: 'Neptune',
    cosmicSummary: 'Illusion, dreams, and strategic patience.',
    upright: 'Mystery box, blind mint patience.',
    reversed: 'Fake rarity disappointment.',
    cryptoFlavor: 'Loot (for Adventurers) speculation.',
    foresight: 'Nurture investments.',
    educationalInsight:
      'Mystery NFTs – Blind mints rely on trust and carefully designed rarity charts. The Seven warns to read the contract before revealing.',
    appIntegration:
      'Sparkling loot crates that slowly reveal traits; on reverse the crates flicker with warning icons.',
    visualDescription:
      'Seven translucent crates hover within a cosmic vault, each showing tantalizing silhouettes of legendary items. Mist swirls with neon hues, hinting at treasure. Reversed: the crates crack open to reveal empty shells and static glitches.',
    extendedReflection:
      'Patience is an art form in NFT land. Dreams can turn to dust if the rarity reveal is all smoke. Still, the thrill of the unknown can fund entire ecosystems.',
    strategy: 'Stake your claim—but verify legitimacy before locking funds.',
    bookChapter:
      "In the digital realm where code meets cosmos, Seven of Tokens emerges as a beacon of neptune influence. Illusion, dreams, and strategic patience. \n\nPatience is an art form in NFT land. Dreams can turn to dust if the rarity reveal is all smoke. Still, the thrill of the unknown can fund entire ecosystems. \n\nWhen you gaze upon this card, seven translucent crates hover within a cosmic vault, each showing tantalizing silhouettes of legendary items. mist swirls with neon hues, hinting at treasure. reversed: the crates crack open to reveal empty shells and static glitches. This imagery speaks to the practical wisdom embedded within the Tokens suit. \n\nIn its upright position, Seven of Tokens reveals mystery box, blind mint patience.. This is a time of loot (for adventurers) speculation.. \n\nWhen reversed, the card warns of fake rarity disappointment.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, mystery nfts – blind mints rely on trust and carefully designed rarity charts. the seven warns to read the contract before revealing. Understanding this concept is crucial for navigating the practical lessons this card offers. \n\nThe practical wisdom of Seven of Tokens suggests: Stake your claim—but verify legitimacy before locking funds. \n\nLooking ahead, nurture investments. \n\nSeven of Tokens teaches us that in the world of crypto, daily practices shape our journey. Whether you're managing your portfolio, this card reminds you that patience and wisdom are your greatest assets. The blockchain never forgets, but it also never stops evolving. As part of the Tokens suit, this card reflects the material and practical aspects of your Web3 experience.",
    nftMetadata: [
      { trait_type: 'Mechanic', value: 'Blind Mint' },
      { trait_type: 'Patience', value: 'High' },
    ],
    gameMechanics: {
      rarity: 'Common',
      value: 7,
      power: 7,
      type: 'unit',
      suitBonus: {
        rallyBonus: '+1 value',
        chainBonus: '+1 per matching block',
        battleBonus: '+1 defense',
      },
    },
  },
  'Eight of Tokens': {
    arcana: 'Minor',
    number: 8,
    suit: 'Tokens',
    rank: 'Eight',
    cosmicRuler: 'Saturn',
    cosmicSummary: 'Discipline, iteration, and earned mastery under pressure.',
    upright: 'Long-term lock, vesting discipline.',
    reversed: 'Early unlock dump risk.',
    cryptoFlavor: 'Team tokens patiently vesting.',
    foresight: 'Hone your craft.',
    educationalInsight:
      'Token Vesting – Timelocked allocations align teams with long-term protocol growth. Saturn rewards patience.',
    appIntegration:
      "Animated progress bar counting down a vest; reversed shows a flashing 'Unlock Early?' prompt.",
    visualDescription:
      'An artisan engraves intricate runes into eight golden coins chained to a crystal vault. Each coin glows brighter as time sigils complete their orbit. Reversed: the chains snap, coins scattering into chaotic sparks.',
    extendedReflection:
      'Mastery is forged through consistent effort. Every epoch you stay the course, your craft (and stack) compounds.',
    strategy: 'Automate cliffs and stick to them—future you will be grateful.',
    bookChapter:
      "In the digital realm where code meets cosmos, Eight of Tokens emerges as a beacon of saturn influence. Discipline, iteration, and earned mastery under pressure. \n\nMastery is forged through consistent effort. Every epoch you stay the course, your craft (and stack) compounds. \n\nWhen you gaze upon this card, an artisan engraves intricate runes into eight golden coins chained to a crystal vault. each coin glows brighter as time sigils complete their orbit. reversed: the chains snap, coins scattering into chaotic sparks. This imagery speaks to the practical wisdom embedded within the Tokens suit. \n\nIn its upright position, Eight of Tokens reveals long-term lock, vesting discipline.. This is a time of team tokens patiently vesting.. \n\nWhen reversed, the card warns of early unlock dump risk.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, token vesting – timelocked allocations align teams with long-term protocol growth. saturn rewards patience. Understanding this concept is crucial for navigating the practical lessons this card offers. \n\nThe practical wisdom of Eight of Tokens suggests: Automate cliffs and stick to them—future you will be grateful. \n\nLooking ahead, hone your craft. \n\nEight of Tokens teaches us that in the world of crypto, daily practices shape our journey. Whether you're managing your portfolio, this card reminds you that patience and wisdom are your greatest assets. The blockchain never forgets, but it also never stops evolving. As part of the Tokens suit, this card reflects the material and practical aspects of your Web3 experience.",
    nftMetadata: [
      { trait_type: 'Discipline', value: 'Vesting' },
      { trait_type: 'Lock', value: '4 Year' },
    ],
    gameMechanics: {
      rarity: 'Common',
      value: 8,
      power: 8,
      type: 'unit',
      suitBonus: {
        rallyBonus: '+1 value',
        chainBonus: '+1 per matching block',
        battleBonus: '+1 defense',
      },
    },
  },
  'Nine of Tokens': {
    arcana: 'Minor',
    number: 9,
    suit: 'Tokens',
    rank: 'Nine',
    cosmicRuler: 'Jupiter',
    cosmicSummary: 'Expansion, luxury, and wise wealth management.',
    upright: '1000x moon bag bliss.',
    reversed: 'Overvalued and isolated.',
    cryptoFlavor: 'Living off DOGE peak gains.',
    foresight: 'Enjoy moons responsibly.',
    educationalInsight:
      'Wealth Preservation – Diversifying into real assets and treasuries protects moonshot gains from vaporizing.',
    appIntegration:
      'Luxurious gallery room with animated floor tracker; reversed the tracker flashes red down arrows.',
    visualDescription:
      'A self-assured collector strolls through a holographic garden where nine tokens blossom as jeweled fruits. Drones pour champagne over a cold wallet vault. Reversed: the garden glass cracks and the tokens droop under their own weight.',
    extendedReflection:
      'Freedom is sweeter when curated with intention. Wealth without community can become a lonely echo chamber.',
    strategy: 'Skim profits, gift wisdom, keep a rainy-day treasury.',
    bookChapter:
      "In the digital realm where code meets cosmos, Nine of Tokens emerges as a beacon of jupiter influence. Expansion, luxury, and wise wealth management. \n\nFreedom is sweeter when curated with intention. Wealth without community can become a lonely echo chamber. \n\nWhen you gaze upon this card, a self-assured collector strolls through a holographic garden where nine tokens blossom as jeweled fruits. drones pour champagne over a cold wallet vault. reversed: the garden glass cracks and the tokens droop under their own weight. This imagery speaks to the practical wisdom embedded within the Tokens suit. \n\nIn its upright position, Nine of Tokens reveals 1000x moon bag bliss.. This is a time of living off doge peak gains.. \n\nWhen reversed, the card warns of overvalued and isolated.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, wealth preservation – diversifying into real assets and treasuries protects moonshot gains from vaporizing. Understanding this concept is crucial for navigating the practical lessons this card offers. \n\nThe practical wisdom of Nine of Tokens suggests: Skim profits, gift wisdom, keep a rainy-day treasury. \n\nLooking ahead, enjoy moons responsibly. \n\nNine of Tokens teaches us that in the world of crypto, daily practices shape our journey. Whether you're managing your portfolio, this card reminds you that patience and wisdom are your greatest assets. The blockchain never forgets, but it also never stops evolving. As part of the Tokens suit, this card reflects the material and practical aspects of your Web3 experience.",
    nftMetadata: [
      { trait_type: 'Lifestyle', value: 'Freedom' },
      { trait_type: 'Status', value: 'OG' },
    ],
    gameMechanics: {
      rarity: 'Common',
      value: 9,
      power: 9,
      type: 'unit',
      suitBonus: {
        rallyBonus: '+1 value',
        chainBonus: '+1 per matching block',
        battleBonus: '+1 defense',
      },
    },
  },
  'Ten of Tokens': {
    arcana: 'Minor',
    number: 10,
    suit: 'Tokens',
    rank: 'Ten',
    cosmicRuler: 'Earth',
    cosmicSummary: 'Completion, manifestation, and legacy stewardship.',
    upright: 'Full bag, profits realized.',
    reversed: 'Tax nightmare, compliance drag.',
    cryptoFlavor: 'Exiting to stablecoins and real estate.',
    foresight: 'Pass on wisdom.',
    educationalInsight:
      'Legacy Planning – Multi-sig inheritance plans and trust structures secure generational crypto wealth.',
    appIntegration:
      'Family tree hologram linking cold wallets; reversed displays flashing audit notices.',
    visualDescription:
      'A multigenerational clan gathers around a glowing vault shaped like a family crest, ten coins embedded within, each bearing ancestral signatures. Reversed: tax drones swarm, projecting red compliance alerts over the vault.',
    extendedReflection:
      'Endings become beginnings when wisdom is shared. A well-planned exit funds future builders.',
    strategy: 'Document keys, plan taxes, teach the next node.',
    bookChapter:
      "In the digital realm where code meets cosmos, Ten of Tokens emerges as a beacon of earth influence. Completion, manifestation, and legacy stewardship. \n\nEndings become beginnings when wisdom is shared. A well-planned exit funds future builders. \n\nWhen you gaze upon this card, a multigenerational clan gathers around a glowing vault shaped like a family crest, ten coins embedded within, each bearing ancestral signatures. reversed: tax drones swarm, projecting red compliance alerts over the vault. This imagery speaks to the practical wisdom embedded within the Tokens suit. \n\nIn its upright position, Ten of Tokens reveals full bag, profits realized.. This is a time of exiting to stablecoins and real estate.. \n\nWhen reversed, the card warns of tax nightmare, compliance drag.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, legacy planning – multi-sig inheritance plans and trust structures secure generational crypto wealth. Understanding this concept is crucial for navigating the practical lessons this card offers. \n\nThe practical wisdom of Ten of Tokens suggests: Document keys, plan taxes, teach the next node. \n\nLooking ahead, pass on wisdom. \n\nTen of Tokens teaches us that in the world of crypto, daily practices shape our journey. Whether you're managing your portfolio, this card reminds you that patience and wisdom are your greatest assets. The blockchain never forgets, but it also never stops evolving. As part of the Tokens suit, this card reflects the material and practical aspects of your Web3 experience.",
    nftMetadata: [
      { trait_type: 'Legacy', value: 'Established' },
      { trait_type: 'Treasure', value: 'Vault' },
    ],
    gameMechanics: {
      rarity: 'Common',
      value: 10,
      power: 10,
      type: 'unit',
      suitBonus: {
        rallyBonus: '+1 value',
        chainBonus: '+1 per matching block',
        battleBonus: '+1 defense',
      },
    },
  },
  'Page of Tokens': {
    arcana: 'Minor',
    number: 11,
    suit: 'Tokens',
    rank: 'Page',
    cosmicRuler: 'Air/Earth (Mutable)',
    cosmicSummary: 'Youthful curiosity bridging ideas and practical trials.',
    upright: 'New collector energy.',
    reversed: 'Whale in disguise exploit.',
    cryptoFlavor: 'First-time NFT buyer experimenting.',
    foresight: 'Learn basics.',
    educationalInsight:
      "Onboarding – Wallet safety, seed phrases, and gas fees are the Page's first lessons.",
    appIntegration: 'Tutorial overlay guiding first mint; reversed shows phishing warning pop-ups.',
    visualDescription:
      'A curious seeker studies a floating hologram of their very first token, notes scribbled in AR around them. Pixelated fireflies illuminate a path of tutorial prompts. Reversed: shadows reveal hidden whale hands manipulating the hologram.',
    extendedReflection:
      'Every OG was once a beginner fumbling through MetaMask prompts. Curiosity is a superpower—nurture it with caution.',
    strategy: 'Practice on testnets, back up seeds, ask questions.',
    bookChapter:
      "In the digital realm where code meets cosmos, Page of Tokens emerges as a beacon of air/earth (mutable) influence. Youthful curiosity bridging ideas and practical trials. \n\nEvery OG was once a beginner fumbling through MetaMask prompts. Curiosity is a superpower—nurture it with caution. \n\nWhen you gaze upon this card, a curious seeker studies a floating hologram of their very first token, notes scribbled in ar around them. pixelated fireflies illuminate a path of tutorial prompts. reversed: shadows reveal hidden whale hands manipulating the hologram. This imagery speaks to the practical wisdom embedded within the Tokens suit. \n\nIn its upright position, Page of Tokens reveals new collector energy.. This is a time of first-time nft buyer experimenting.. \n\nWhen reversed, the card warns of whale in disguise exploit.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, onboarding – wallet safety, seed phrases, and gas fees are the page's first lessons. Understanding this concept is crucial for navigating the practical lessons this card offers. \n\nThe practical wisdom of Page of Tokens suggests: Practice on testnets, back up seeds, ask questions. \n\nLooking ahead, learn basics. \n\nPage of Tokens teaches us that in the world of crypto, daily practices shape our journey. Whether you're managing your portfolio, this card reminds you that leadership and mastery are your greatest assets. The blockchain never forgets, but it also never stops evolving. As part of the Tokens suit, this card reflects the material and practical aspects of your Web3 experience.",
    nftMetadata: [
      { trait_type: 'Role', value: 'Apprentice' },
      { trait_type: 'Focus', value: 'Learning' },
    ],
    gameMechanics: {
      rarity: 'Common',
      value: 11,
      power: 11,
      type: 'unit',
      suitBonus: {
        rallyBonus: '+1 value',
        chainBonus: '+1 per matching block',
        battleBonus: '+1 defense',
      },
      courtEffect: 'Draw 1 when rallied',
    },
  },
  'Knight of Tokens': {
    arcana: 'Minor',
    number: 12,
    suit: 'Tokens',
    rank: 'Knight',
    cosmicRuler: 'Fire (Cardinal)',
    cosmicSummary: 'Dynamic action launching new value quests.',
    upright: 'Pumping influencer momentum.',
    reversed: 'Paid shill burnout.',
    cryptoFlavor: 'Twitter KOL riding trends.',
    foresight: 'Methodical gains.',
    educationalInsight:
      'Influencer Dynamics – Community trust depends on disclosure, research, and consistent delivery.',
    appIntegration:
      'Animated feed of trending calls; reversed overlays #ad warnings and credibility drops.',
    visualDescription:
      'A knight rockets forward on a hoverboard shaped like a graph arrow, scattering viral call-to-action banners. Followers trail behind waving LED signs. Reversed: the hoverboard sputters as unfollows cascade like rain.',
    extendedReflection:
      'Momentum without integrity burns fast. True knights protect their community as fiercely as their bag.',
    strategy: 'Disclose sponsorships, vet plays, pace your calls.',
    bookChapter:
      "In the digital realm where code meets cosmos, Knight of Tokens emerges as a beacon of fire (cardinal) influence. Dynamic action launching new value quests. \n\nMomentum without integrity burns fast. True knights protect their community as fiercely as their bag. \n\nWhen you gaze upon this card, a knight rockets forward on a hoverboard shaped like a graph arrow, scattering viral call-to-action banners. followers trail behind waving led signs. reversed: the hoverboard sputters as unfollows cascade like rain. This imagery speaks to the practical wisdom embedded within the Tokens suit. \n\nIn its upright position, Knight of Tokens reveals pumping influencer momentum.. This is a time of twitter kol riding trends.. \n\nWhen reversed, the card warns of paid shill burnout.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, influencer dynamics – community trust depends on disclosure, research, and consistent delivery. Understanding this concept is crucial for navigating the practical lessons this card offers. \n\nThe practical wisdom of Knight of Tokens suggests: Disclose sponsorships, vet plays, pace your calls. \n\nLooking ahead, methodical gains. \n\nKnight of Tokens teaches us that in the world of crypto, daily practices shape our journey. Whether you're managing your portfolio, this card reminds you that leadership and mastery are your greatest assets. The blockchain never forgets, but it also never stops evolving. As part of the Tokens suit, this card reflects the material and practical aspects of your Web3 experience.",
    nftMetadata: [
      { trait_type: 'Tempo', value: 'High' },
      { trait_type: 'Influence', value: 'KOL' },
    ],
    gameMechanics: {
      rarity: 'Rare',
      value: 12,
      power: 12,
      type: 'unit',
      suitBonus: {
        rallyBonus: '+1 value',
        chainBonus: '+1 per matching block',
        battleBonus: '+1 defense',
      },
      courtEffect: '+1 power attacking',
    },
  },
  'Queen of Tokens': {
    arcana: 'Minor',
    number: 13,
    suit: 'Tokens',
    rank: 'Queen',
    cosmicRuler: 'Water (Fixed)',
    cosmicSummary: 'Intuitive stewardship nurturing sustainable yields.',
    upright: 'Curator with impeccable taste.',
    reversed: 'Flip-only opportunism.',
    cryptoFlavor: 'NFT gallery matriarch curating collections.',
    foresight: 'Sustainable DeFi.',
    educationalInsight:
      "Curation – Thoughtful selection and provenance tracking elevate a collection's cultural value.",
    appIntegration:
      'Interactive gallery carousel with provenance tags; reversed grays out authenticity badges.',
    visualDescription:
      'A regal curator lounges amid floating frames displaying her prized NFTs, each piece spotlighted with gentle bioluminescent light. A ledger of provenance unfurls at her fingertips. Reversed: the lights flicker and counterfeit stamps appear across the frames.',
    extendedReflection:
      'Wealth is art when curated with care. The Queen sets taste, mentors artists, and reinvests in community.',
    strategy: 'Authenticate pieces, support artists, diversify mediums.',
    bookChapter:
      "In the digital realm where code meets cosmos, Queen of Tokens emerges as a beacon of water (fixed) influence. Intuitive stewardship nurturing sustainable yields. \n\nWealth is art when curated with care. The Queen sets taste, mentors artists, and reinvests in community. \n\nWhen you gaze upon this card, a regal curator lounges amid floating frames displaying her prized nfts, each piece spotlighted with gentle bioluminescent light. a ledger of provenance unfurls at her fingertips. reversed: the lights flicker and counterfeit stamps appear across the frames. This imagery speaks to the practical wisdom embedded within the Tokens suit. \n\nIn its upright position, Queen of Tokens reveals curator with impeccable taste.. This is a time of nft gallery matriarch curating collections.. \n\nWhen reversed, the card warns of flip-only opportunism.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, curation – thoughtful selection and provenance tracking elevate a collection's cultural value. Understanding this concept is crucial for navigating the practical lessons this card offers. \n\nThe practical wisdom of Queen of Tokens suggests: Authenticate pieces, support artists, diversify mediums. \n\nLooking ahead, sustainable defi. \n\nQueen of Tokens teaches us that in the world of crypto, daily practices shape our journey. Whether you're managing your portfolio, this card reminds you that leadership and mastery are your greatest assets. The blockchain never forgets, but it also never stops evolving. As part of the Tokens suit, this card reflects the material and practical aspects of your Web3 experience.",
    nftMetadata: [
      { trait_type: 'Curation', value: 'Premier' },
      { trait_type: 'Utility', value: 'Gallery Pass' },
    ],
    gameMechanics: {
      rarity: 'Epic',
      value: 13,
      power: 13,
      type: 'unit',
      suitBonus: {
        rallyBonus: '+1 value',
        chainBonus: '+1 per matching block',
        battleBonus: '+1 defense',
      },
      courtEffect: 'Steal 1 Life on win',
    },
  },
  'King of Tokens': {
    arcana: 'Minor',
    number: 14,
    suit: 'Tokens',
    rank: 'King',
    cosmicRuler: 'Air/Fire (Sovereign)',
    cosmicSummary: 'Authoritative mastery blending intellect and decisive will.',
    upright: 'Whale, market maker leadership.',
    reversed: 'Manipulator risking collapse.',
    cryptoFlavor: 'Binance whale shaping liquidity.',
    foresight: 'Lead markets ethically.',
    educationalInsight:
      'Market Making – Providing depth, managing spreads, and stabilizing price discovery.',
    appIntegration:
      'Order book throne with real-time depth heatmap; reversed flashes spoofing alerts.',
    visualDescription:
      'A titan sits upon a throne formed from cascading order books, hands resting on levers that control liquidity waterfalls. Charts spiral overhead in harmonized motion. Reversed: the levers jam and orders vanish, leaving a vacuum.',
    extendedReflection:
      "True sovereignty isn't domination—it's stewardship. The King ensures markets stay liquid, fair, and alive.",
    strategy: 'Use power to steady the market, not to rug it.',
    bookChapter:
      "In the digital realm where code meets cosmos, King of Tokens emerges as a beacon of air/fire (sovereign) influence. Authoritative mastery blending intellect and decisive will. \n\nTrue sovereignty isn't domination—it's stewardship. The King ensures markets stay liquid, fair, and alive. \n\nWhen you gaze upon this card, a titan sits upon a throne formed from cascading order books, hands resting on levers that control liquidity waterfalls. charts spiral overhead in harmonized motion. reversed: the levers jam and orders vanish, leaving a vacuum. This imagery speaks to the practical wisdom embedded within the Tokens suit. \n\nIn its upright position, King of Tokens reveals whale, market maker leadership.. This is a time of binance whale shaping liquidity.. \n\nWhen reversed, the card warns of manipulator risking collapse.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, market making – providing depth, managing spreads, and stabilizing price discovery. Understanding this concept is crucial for navigating the practical lessons this card offers. \n\nThe practical wisdom of King of Tokens suggests: Use power to steady the market, not to rug it. \n\nLooking ahead, lead markets ethically. \n\nKing of Tokens teaches us that in the world of crypto, daily practices shape our journey. Whether you're managing your portfolio, this card reminds you that leadership and mastery are your greatest assets. The blockchain never forgets, but it also never stops evolving. As part of the Tokens suit, this card reflects the material and practical aspects of your Web3 experience.",
    nftMetadata: [
      { trait_type: 'Authority', value: 'Whale' },
      { trait_type: 'Desk', value: 'Market Maker' },
    ],
    gameMechanics: {
      rarity: 'Legendary',
      value: 14,
      power: 14,
      type: 'unit',
      suitBonus: {
        rallyBonus: '+1 value',
        chainBonus: '+1 per matching block',
        battleBonus: '+1 defense',
      },
      courtEffect: 'Army +1 power',
    },
  },
  'Ace of Liquidity': {
    arcana: 'Minor',
    number: 1,
    suit: 'Liquidity',
    rank: 'Ace',
    cosmicRuler: 'Sun',
    cosmicSummary: 'Vitality and new flow igniting community pools.',
    upright: 'New pool, fresh liquidity.',
    reversed: 'Dry pool, no flow.',
    cryptoFlavor: 'Spinning up a brand-new Uniswap LP.',
    foresight: 'Dive into new LPs.',
    educationalInsight:
      'Liquidity Provision – Supplying assets to automated market makers enables swaps and earns fees.',
    appIntegration:
      'Animated faucet filling a brand-new pool; reversed shows the faucet sputtering dry.',
    visualDescription:
      'A crystalline spring bursts from bedrock, filling a circular pool with luminous aqua tokens that swirl clockwise. Community avatars cheer at the rim. Reversed: the spring seals shut, the pool draining into cracks.',
    extendedReflection:
      'Every thriving protocol began with that first brave deposit. Without base liquidity, even the best ideas stay stuck in the whitepaper.',
    strategy: 'Test depth, set alerts, and monitor volume before committing size.',
    bookChapter:
      "In the digital realm where code meets cosmos, Ace of Liquidity emerges as a beacon of sun influence. Vitality and new flow igniting community pools. \n\nEvery thriving protocol began with that first brave deposit. Without base liquidity, even the best ideas stay stuck in the whitepaper. \n\nWhen you gaze upon this card, a crystalline spring bursts from bedrock, filling a circular pool with luminous aqua tokens that swirl clockwise. community avatars cheer at the rim. reversed: the spring seals shut, the pool draining into cracks. This imagery speaks to the practical wisdom embedded within the Liquidity suit. \n\nIn its upright position, Ace of Liquidity reveals new pool, fresh liquidity.. This is a time of spinning up a brand-new uniswap lp.. \n\nWhen reversed, the card warns of dry pool, no flow.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, liquidity provision – supplying assets to automated market makers enables swaps and earns fees. Understanding this concept is crucial for navigating the practical lessons this card offers. \n\nThe practical wisdom of Ace of Liquidity suggests: Test depth, set alerts, and monitor volume before committing size. \n\nLooking ahead, dive into new lps. \n\nAce of Liquidity teaches us that in the world of crypto, daily practices shape our journey. Whether you're managing your portfolio, this card reminds you that patience and wisdom are your greatest assets. The blockchain never forgets, but it also never stops evolving. As part of the Liquidity suit, this card reflects the emotional and flowing aspects of your Web3 experience.",
    nftMetadata: [
      { trait_type: 'Pool', value: 'Genesis' },
      { trait_type: 'APR', value: 'Variable' },
    ],
    gameMechanics: {
      rarity: 'Common',
      value: 1,
      power: 1,
      type: 'unit',
      suitBonus: {
        rallyBonus: 'Heal 1 Life',
        chainBonus: '+1 per 3 cards',
        battleBonus: '+1 vs. Security',
      },
      aceEffect: 'Heal 1 Life',
    },
  },
  'Two of Liquidity': {
    arcana: 'Minor',
    number: 2,
    suit: 'Liquidity',
    rank: 'Two',
    cosmicRuler: 'Moon',
    cosmicSummary: 'Dual currents, intuitive balancing of paired assets.',
    upright: 'Balanced pair, 50/50 blend.',
    reversed: 'Impermanent loss stress.',
    cryptoFlavor: 'Rebalancing a USDC/WETH vault.',
    foresight: 'Synergize communities.',
    educationalInsight:
      'Impermanent Loss – Price divergence between paired assets can erode LP gains if unmanaged.',
    appIntegration:
      'Animated see-saw of token icons adjusting gently; reversed shows erratic swings with alert badges.',
    visualDescription:
      'Two translucent streams pour into a yin-yang shaped pool, perfectly mirroring one another under moonlight. Price orbs drift in harmony above the surface. Reversed: one stream surges while the other dwindles, warping the pool.',
    extendedReflection:
      'Balance requires constant listening. Markets ebb and flow—your job is to feel the tide before it flips.',
    strategy: 'Use hedges or dynamic pools to soften impermanent loss.',
    bookChapter:
      "In the digital realm where code meets cosmos, Two of Liquidity emerges as a beacon of moon influence. Dual currents, intuitive balancing of paired assets. \n\nBalance requires constant listening. Markets ebb and flow—your job is to feel the tide before it flips. \n\nWhen you gaze upon this card, two translucent streams pour into a yin-yang shaped pool, perfectly mirroring one another under moonlight. price orbs drift in harmony above the surface. reversed: one stream surges while the other dwindles, warping the pool. This imagery speaks to the practical wisdom embedded within the Liquidity suit. \n\nIn its upright position, Two of Liquidity reveals balanced pair, 50/50 blend.. This is a time of rebalancing a usdc/weth vault.. \n\nWhen reversed, the card warns of impermanent loss stress.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, impermanent loss – price divergence between paired assets can erode lp gains if unmanaged. Understanding this concept is crucial for navigating the practical lessons this card offers. \n\nThe practical wisdom of Two of Liquidity suggests: Use hedges or dynamic pools to soften impermanent loss. \n\nLooking ahead, synergize communities. \n\nTwo of Liquidity teaches us that in the world of crypto, daily practices shape our journey. Whether you're managing your portfolio, this card reminds you that patience and wisdom are your greatest assets. The blockchain never forgets, but it also never stops evolving. As part of the Liquidity suit, this card reflects the emotional and flowing aspects of your Web3 experience.",
    nftMetadata: [
      { trait_type: 'Pair', value: '50/50' },
      { trait_type: 'Skill', value: 'Balancer' },
    ],
    gameMechanics: {
      rarity: 'Common',
      value: 2,
      power: 2,
      type: 'unit',
      suitBonus: {
        rallyBonus: 'Heal 1 Life',
        chainBonus: '+1 per 3 cards',
        battleBonus: '+1 vs. Security',
      },
    },
  },
  'Three of Liquidity': {
    arcana: 'Minor',
    number: 3,
    suit: 'Liquidity',
    rank: 'Three',
    cosmicRuler: 'Mercury',
    cosmicSummary: 'Communication, collaboration, and celebratory flow.',
    upright: 'Tri-pool arbitrage celebration.',
    reversed: 'Slippage nightmare.',
    cryptoFlavor: 'Coordinating a Curve tri-pool party.',
    foresight: 'Toast to alliances.',
    educationalInsight:
      'Tri-Pools – Multi-asset pools reduce slippage and unlock sophisticated routing strategies.',
    appIntegration:
      'Dynamic router animation showing three pools linking; reversed highlights red slippage percentages.',
    visualDescription:
      'Three celebrants clink crystal chalices overflowing with glowing liquidity streams that loop between them in an endless triangle. Reversed: the streams spray outward wildly, soaking spectators with slippage alerts.',
    extendedReflection:
      'Shared celebration keeps protocols sticky. Collaboration multiplies returns in ways solitary LPs seldom touch.',
    strategy: 'Coordinate emissions with partners and monitor routing dashboards.',
    bookChapter:
      "In the digital realm where code meets cosmos, Three of Liquidity emerges as a beacon of mercury influence. Communication, collaboration, and celebratory flow. \n\nShared celebration keeps protocols sticky. Collaboration multiplies returns in ways solitary LPs seldom touch. \n\nWhen you gaze upon this card, three celebrants clink crystal chalices overflowing with glowing liquidity streams that loop between them in an endless triangle. reversed: the streams spray outward wildly, soaking spectators with slippage alerts. This imagery speaks to the practical wisdom embedded within the Liquidity suit. \n\nIn its upright position, Three of Liquidity reveals tri-pool arbitrage celebration.. This is a time of coordinating a curve tri-pool party.. \n\nWhen reversed, the card warns of slippage nightmare.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, tri-pools – multi-asset pools reduce slippage and unlock sophisticated routing strategies. Understanding this concept is crucial for navigating the practical lessons this card offers. \n\nThe practical wisdom of Three of Liquidity suggests: Coordinate emissions with partners and monitor routing dashboards. \n\nLooking ahead, toast to alliances. \n\nThree of Liquidity teaches us that in the world of crypto, daily practices shape our journey. Whether you're managing your portfolio, this card reminds you that patience and wisdom are your greatest assets. The blockchain never forgets, but it also never stops evolving. As part of the Liquidity suit, this card reflects the emotional and flowing aspects of your Web3 experience.",
    nftMetadata: [
      { trait_type: 'Pool', value: 'Tri' },
      { trait_type: 'Bonus', value: 'Boosted APR' },
    ],
    gameMechanics: {
      rarity: 'Common',
      value: 3,
      power: 3,
      type: 'unit',
      suitBonus: {
        rallyBonus: 'Heal 1 Life',
        chainBonus: '+1 per 3 cards',
        battleBonus: '+1 vs. Security',
      },
    },
  },
  'Four of Liquidity': {
    arcana: 'Minor',
    number: 4,
    suit: 'Liquidity',
    rank: 'Four',
    cosmicRuler: 'Uranus',
    cosmicSummary: 'Structure, stability, and calm water reserves.',
    upright: 'Stable swap serenity.',
    reversed: 'Curve war chaos.',
    cryptoFlavor: 'Parking funds in a low-IL stables pool.',
    foresight: 'Rest in calm waters.',
    educationalInsight:
      'Stable Pools – Concentrated liquidity in pegged assets generates predictable, lower-risk yields.',
    appIntegration:
      'Serene pool interface with minimal volatility indicators; reversed splashes conflict alerts across gauges.',
    visualDescription:
      'A tranquil onsen of stablecoins glows under a clear night sky, four pillars forming a protective square around gently rippling water. Reversed: rival banners crash into the pool, churning it into turmoil.',
    extendedReflection:
      'Sometimes the best move is to breathe and earn modestly. Stability is a rebellious act in DeFi.',
    strategy: 'Use low-vol pools when markets rage elsewhere—capital preservation is alpha.',
    bookChapter:
      "In the digital realm where code meets cosmos, Four of Liquidity emerges as a beacon of uranus influence. Structure, stability, and calm water reserves. \n\nSometimes the best move is to breathe and earn modestly. Stability is a rebellious act in DeFi. \n\nWhen you gaze upon this card, a tranquil onsen of stablecoins glows under a clear night sky, four pillars forming a protective square around gently rippling water. reversed: rival banners crash into the pool, churning it into turmoil. This imagery speaks to the practical wisdom embedded within the Liquidity suit. \n\nIn its upright position, Four of Liquidity reveals stable swap serenity.. This is a time of parking funds in a low-il stables pool.. \n\nWhen reversed, the card warns of curve war chaos.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, stable pools – concentrated liquidity in pegged assets generates predictable, lower-risk yields. Understanding this concept is crucial for navigating the practical lessons this card offers. \n\nThe practical wisdom of Four of Liquidity suggests: Use low-vol pools when markets rage elsewhere—capital preservation is alpha. \n\nLooking ahead, rest in calm waters. \n\nFour of Liquidity teaches us that in the world of crypto, daily practices shape our journey. Whether you're managing your portfolio, this card reminds you that patience and wisdom are your greatest assets. The blockchain never forgets, but it also never stops evolving. As part of the Liquidity suit, this card reflects the emotional and flowing aspects of your Web3 experience.",
    nftMetadata: [
      { trait_type: 'Mood', value: 'Serenity' },
      { trait_type: 'Risk', value: 'Low' },
    ],
    gameMechanics: {
      rarity: 'Common',
      value: 4,
      power: 4,
      type: 'unit',
      suitBonus: {
        rallyBonus: 'Heal 1 Life',
        chainBonus: '+1 per 3 cards',
        battleBonus: '+1 vs. Security',
      },
    },
  },
  'Five of Liquidity': {
    arcana: 'Minor',
    number: 5,
    suit: 'Liquidity',
    rank: 'Five',
    cosmicRuler: 'Mars',
    cosmicSummary: 'Conflict, drained reserves, and emergency response.',
    upright: 'Pool drained, attack response.',
    reversed: 'Flash loan defense recovery.',
    cryptoFlavor: 'Mitigating a sudden exploit in a DeFi pool.',
    foresight: 'Process impermanent loss.',
    educationalInsight:
      'Flash Loan Attacks – Rapid arbitrage or malicious loans can drain pools without proper safeguards.',
    appIntegration:
      'Emergency siren overlay with pause-contract button; reversed shows a recovery progress meter.',
    visualDescription:
      'Five shattered conduits spew liquidity into the air while responders scramble to seal the breach with glowing circuit patches. Reversed: shields rise around the conduits, water leveling out as defenders cheer.',
    extendedReflection:
      'Loss happens. What defines a protocol is how fast it responds, communicates, and rebuilds trust.',
    strategy: 'Run drills, keep insurance funds stocked, communicate transparently.',
    bookChapter:
      "In the digital realm where code meets cosmos, Five of Liquidity emerges as a beacon of mars influence. Conflict, drained reserves, and emergency response. \n\nLoss happens. What defines a protocol is how fast it responds, communicates, and rebuilds trust. \n\nWhen you gaze upon this card, five shattered conduits spew liquidity into the air while responders scramble to seal the breach with glowing circuit patches. reversed: shields rise around the conduits, water leveling out as defenders cheer. This imagery speaks to the practical wisdom embedded within the Liquidity suit. \n\nIn its upright position, Five of Liquidity reveals pool drained, attack response.. This is a time of mitigating a sudden exploit in a defi pool.. \n\nWhen reversed, the card warns of flash loan defense recovery.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, flash loan attacks – rapid arbitrage or malicious loans can drain pools without proper safeguards. Understanding this concept is crucial for navigating the practical lessons this card offers. \n\nThe practical wisdom of Five of Liquidity suggests: Run drills, keep insurance funds stocked, communicate transparently. \n\nLooking ahead, process impermanent loss. \n\nFive of Liquidity teaches us that in the world of crypto, daily practices shape our journey. Whether you're managing your portfolio, this card reminds you that patience and wisdom are your greatest assets. The blockchain never forgets, but it also never stops evolving. As part of the Liquidity suit, this card reflects the emotional and flowing aspects of your Web3 experience.",
    nftMetadata: [
      { trait_type: 'Event', value: 'Exploit' },
      { trait_type: 'Response', value: 'Mitigation' },
    ],
    gameMechanics: {
      rarity: 'Common',
      value: 5,
      power: 5,
      type: 'unit',
      suitBonus: {
        rallyBonus: 'Heal 1 Life',
        chainBonus: '+1 per 3 cards',
        battleBonus: '+1 vs. Security',
      },
    },
  },
  'Six of Liquidity': {
    arcana: 'Minor',
    number: 6,
    suit: 'Liquidity',
    rank: 'Six',
    cosmicRuler: 'Venus',
    cosmicSummary: 'Harmony, supportive flow, and shared yield nostalgia.',
    upright: 'Harmonious yield, love shared.',
    reversed: 'Liquidity rug heartbreak.',
    cryptoFlavor: 'Rewarding loyal LPs with bonus emissions.',
    foresight: 'Childhood in crypto.',
    educationalInsight:
      'Loyalty Programs – Retroactive rewards and fee rebates honor contributors and encourage long-term LPs.',
    appIntegration:
      'Animated thank-you banners and claim buttons; reversed dims rewards with broken heart icons.',
    visualDescription:
      'Six radiant streams arc from a central fountain, each gifting glowing droplets to smiling LP avatars below. Childhood memories of early farming dance as holographic snapshots. Reversed: the streams sputter and hearts crack across the fountain.',
    extendedReflection:
      'Remember who showed up when the pool was empty. Gratitude keeps ecosystems alive.',
    strategy: 'Celebrate OGs, structure vesting, avoid surprise rug switches.',
    bookChapter:
      "In the digital realm where code meets cosmos, Six of Liquidity emerges as a beacon of venus influence. Harmony, supportive flow, and shared yield nostalgia. \n\nRemember who showed up when the pool was empty. Gratitude keeps ecosystems alive. \n\nWhen you gaze upon this card, six radiant streams arc from a central fountain, each gifting glowing droplets to smiling lp avatars below. childhood memories of early farming dance as holographic snapshots. reversed: the streams sputter and hearts crack across the fountain. This imagery speaks to the practical wisdom embedded within the Liquidity suit. \n\nIn its upright position, Six of Liquidity reveals harmonious yield, love shared.. This is a time of rewarding loyal lps with bonus emissions.. \n\nWhen reversed, the card warns of liquidity rug heartbreak.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, loyalty programs – retroactive rewards and fee rebates honor contributors and encourage long-term lps. Understanding this concept is crucial for navigating the practical lessons this card offers. \n\nThe practical wisdom of Six of Liquidity suggests: Celebrate OGs, structure vesting, avoid surprise rug switches. \n\nLooking ahead, childhood in crypto. \n\nSix of Liquidity teaches us that in the world of crypto, daily practices shape our journey. Whether you're managing your portfolio, this card reminds you that patience and wisdom are your greatest assets. The blockchain never forgets, but it also never stops evolving. As part of the Liquidity suit, this card reflects the emotional and flowing aspects of your Web3 experience.",
    nftMetadata: [
      { trait_type: 'Reward', value: 'Loyalty' },
      { trait_type: 'Emotion', value: 'Nostalgia' },
    ],
    gameMechanics: {
      rarity: 'Common',
      value: 6,
      power: 6,
      type: 'unit',
      suitBonus: {
        rallyBonus: 'Heal 1 Life',
        chainBonus: '+1 per 3 cards',
        battleBonus: '+1 vs. Security',
      },
    },
  },
  'Seven of Liquidity': {
    arcana: 'Minor',
    number: 7,
    suit: 'Liquidity',
    rank: 'Seven',
    cosmicRuler: 'Neptune',
    cosmicSummary: 'Dreamy APYs and discerning between signal and mirage.',
    upright: 'Mirage APY visions.',
    reversed: 'Reality check on advertised yields.',
    cryptoFlavor: 'Comparing too-good-to-be-true farms.',
    foresight: 'Imagine moonshots.',
    educationalInsight:
      'Due Diligence – Smart contract audits, TVL checks, and emission schedules reveal whether APYs are sustainable or fantasy.',
    appIntegration:
      'Carousel of farms with color-coded risk gauges; reversed saturates the gauges in warning red.',
    visualDescription:
      'Seven shimmering portals display different APYs, each more dazzling than the last, hovering over a misty lagoon. Some portals hide hidden teeth in their reflections. Reversed: the mist clears to show empty shells and rug traps beneath.',
    extendedReflection:
      'Neptune enchants. Yet the wisest farmers know how to read emission math before diving in.',
    strategy: 'Audit before ape; treat absurd yields as red flags, not free lunch.',
    bookChapter:
      "In the digital realm where code meets cosmos, Seven of Liquidity emerges as a beacon of neptune influence. Dreamy APYs and discerning between signal and mirage. \n\nNeptune enchants. Yet the wisest farmers know how to read emission math before diving in. \n\nWhen you gaze upon this card, seven shimmering portals display different apys, each more dazzling than the last, hovering over a misty lagoon. some portals hide hidden teeth in their reflections. reversed: the mist clears to show empty shells and rug traps beneath. This imagery speaks to the practical wisdom embedded within the Liquidity suit. \n\nIn its upright position, Seven of Liquidity reveals mirage apy visions.. This is a time of comparing too-good-to-be-true farms.. \n\nWhen reversed, the card warns of reality check on advertised yields.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, due diligence – smart contract audits, tvl checks, and emission schedules reveal whether apys are sustainable or fantasy. Understanding this concept is crucial for navigating the practical lessons this card offers. \n\nThe practical wisdom of Seven of Liquidity suggests: Audit before ape; treat absurd yields as red flags, not free lunch. \n\nLooking ahead, imagine moonshots. \n\nSeven of Liquidity teaches us that in the world of crypto, daily practices shape our journey. Whether you're managing your portfolio, this card reminds you that patience and wisdom are your greatest assets. The blockchain never forgets, but it also never stops evolving. As part of the Liquidity suit, this card reflects the emotional and flowing aspects of your Web3 experience.",
    nftMetadata: [
      { trait_type: 'Risk', value: 'Speculative' },
      { trait_type: 'Vision', value: 'Dream' },
    ],
    gameMechanics: {
      rarity: 'Common',
      value: 7,
      power: 7,
      type: 'unit',
      suitBonus: {
        rallyBonus: 'Heal 1 Life',
        chainBonus: '+1 per 3 cards',
        battleBonus: '+1 vs. Security',
      },
    },
  },
  'Eight of Liquidity': {
    arcana: 'Minor',
    number: 8,
    suit: 'Liquidity',
    rank: 'Eight',
    cosmicRuler: 'Saturn',
    cosmicSummary: 'Discipline, exits, and moving capital with grace.',
    upright: 'Locked LP, long-term patience.',
    reversed: 'Early withdrawal penalties.',
    cryptoFlavor: 'Exiting a farm to protect capital.',
    foresight: 'Exit gracefully.',
    educationalInsight:
      'Capital Rotation – Knowing when to migrate liquidity preserves gains and reduces drawdown.',
    appIntegration:
      'Animated exit path showing fees avoided; reversed flashes penalty calculators.',
    visualDescription:
      'A cloaked LP glides across stepping stones of light, leaving eight glowing pools behind as they head toward a brighter horizon. Reversed: the stones crumble mid-step, spilling penalties into the water.',
    extendedReflection:
      'It takes courage to walk away before the music stops. Discipline today protects treasure tomorrow.',
    strategy: 'Plan exits in advance—track unlocks, fees, and destination yields.',
    bookChapter:
      "In the digital realm where code meets cosmos, Eight of Liquidity emerges as a beacon of saturn influence. Discipline, exits, and moving capital with grace. \n\nIt takes courage to walk away before the music stops. Discipline today protects treasure tomorrow. \n\nWhen you gaze upon this card, a cloaked lp glides across stepping stones of light, leaving eight glowing pools behind as they head toward a brighter horizon. reversed: the stones crumble mid-step, spilling penalties into the water. This imagery speaks to the practical wisdom embedded within the Liquidity suit. \n\nIn its upright position, Eight of Liquidity reveals locked lp, long-term patience.. This is a time of exiting a farm to protect capital.. \n\nWhen reversed, the card warns of early withdrawal penalties.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, capital rotation – knowing when to migrate liquidity preserves gains and reduces drawdown. Understanding this concept is crucial for navigating the practical lessons this card offers. \n\nThe practical wisdom of Eight of Liquidity suggests: Plan exits in advance—track unlocks, fees, and destination yields. \n\nLooking ahead, exit gracefully. \n\nEight of Liquidity teaches us that in the world of crypto, daily practices shape our journey. Whether you're managing your portfolio, this card reminds you that patience and wisdom are your greatest assets. The blockchain never forgets, but it also never stops evolving. As part of the Liquidity suit, this card reflects the emotional and flowing aspects of your Web3 experience.",
    nftMetadata: [
      { trait_type: 'Action', value: 'Exit' },
      { trait_type: 'Discipline', value: 'High' },
    ],
    gameMechanics: {
      rarity: 'Common',
      value: 8,
      power: 8,
      type: 'unit',
      suitBonus: {
        rallyBonus: 'Heal 1 Life',
        chainBonus: '+1 per 3 cards',
        battleBonus: '+1 vs. Security',
      },
    },
  },
  'Nine of Liquidity': {
    arcana: 'Minor',
    number: 9,
    suit: 'Liquidity',
    rank: 'Nine',
    cosmicRuler: 'Jupiter',
    cosmicSummary: 'Abundant flow, wish fulfillment, and celebratory distributions.',
    upright: 'Max yield satisfaction.',
    reversed: 'Over-farmed exhaustion.',
    cryptoFlavor: 'Harvesting peak rewards from a thriving LP.',
    foresight: 'Abundance vibes.',
    educationalInsight:
      'Reward Management – Harvesting profits into diversified treasuries locks in successes before rewards taper.',
    appIntegration:
      'Confetti animation on harvest button; reversed shows fatigue meter and declining APR chart.',
    visualDescription:
      "Nine overflowing chalices circle a jubilant farmer who collects glittering yield tokens in a gold basket. Fireflies spell 'GM' overhead. Reversed: the chalices topple, spilling sour sludge as the farmer slumps.",
    extendedReflection:
      'Abundance is sweetest when savored mindfully. Overfarming drains protocols—and your spirit.',
    strategy: 'Harvest on schedule, restock treasuries, avoid burnout cycles.',
    bookChapter:
      "In the digital realm where code meets cosmos, Nine of Liquidity emerges as a beacon of jupiter influence. Abundant flow, wish fulfillment, and celebratory distributions. \n\nAbundance is sweetest when savored mindfully. Overfarming drains protocols—and your spirit. \n\nWhen you gaze upon this card, nine overflowing chalices circle a jubilant farmer who collects glittering yield tokens in a gold basket. fireflies spell 'gm' overhead. reversed: the chalices topple, spilling sour sludge as the farmer slumps. This imagery speaks to the practical wisdom embedded within the Liquidity suit. \n\nIn its upright position, Nine of Liquidity reveals max yield satisfaction.. This is a time of harvesting peak rewards from a thriving lp.. \n\nWhen reversed, the card warns of over-farmed exhaustion.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, reward management – harvesting profits into diversified treasuries locks in successes before rewards taper. Understanding this concept is crucial for navigating the practical lessons this card offers. \n\nThe practical wisdom of Nine of Liquidity suggests: Harvest on schedule, restock treasuries, avoid burnout cycles. \n\nLooking ahead, abundance vibes. \n\nNine of Liquidity teaches us that in the world of crypto, daily practices shape our journey. Whether you're managing your portfolio, this card reminds you that patience and wisdom are your greatest assets. The blockchain never forgets, but it also never stops evolving. As part of the Liquidity suit, this card reflects the emotional and flowing aspects of your Web3 experience.",
    nftMetadata: [
      { trait_type: 'Harvest', value: 'Max' },
      { trait_type: 'Emotion', value: 'Content' },
    ],
    gameMechanics: {
      rarity: 'Common',
      value: 9,
      power: 9,
      type: 'unit',
      suitBonus: {
        rallyBonus: 'Heal 1 Life',
        chainBonus: '+1 per 3 cards',
        battleBonus: '+1 vs. Security',
      },
    },
  },
  'Ten of Liquidity': {
    arcana: 'Minor',
    number: 10,
    suit: 'Liquidity',
    rank: 'Ten',
    cosmicRuler: 'Earth',
    cosmicSummary: 'Completion, communal bonds, and sustainable ecosystems.',
    upright: 'Full cycle harvest, communal joy.',
    reversed: 'Tax event headaches.',
    cryptoFlavor: 'Celebrating a DAO dividend ceremony.',
    foresight: 'Build lasting ties.',
    educationalInsight:
      'DAO Distributions – Transparent revenue sharing cements trust and keeps contributors aligned.',
    appIntegration:
      'Community celebration screen with claim-all feature; reversed shows government notice popups about filings.',
    visualDescription:
      'A DAO family gathers under a pavilion of light as ten radiant water columns form an arch overhead, showering tokens onto laughing members. Reversed: tax drones descend with clipboards, turning the water gray.',
    extendedReflection: 'True abundance is shared. When everyone eats, the protocol lives forever.',
    strategy: 'Budget for compliance, educate members, distribute with clarity.',
    bookChapter:
      "In the digital realm where code meets cosmos, Ten of Liquidity emerges as a beacon of earth influence. Completion, communal bonds, and sustainable ecosystems. \n\nTrue abundance is shared. When everyone eats, the protocol lives forever. \n\nWhen you gaze upon this card, a dao family gathers under a pavilion of light as ten radiant water columns form an arch overhead, showering tokens onto laughing members. reversed: tax drones descend with clipboards, turning the water gray. This imagery speaks to the practical wisdom embedded within the Liquidity suit. \n\nIn its upright position, Ten of Liquidity reveals full cycle harvest, communal joy.. This is a time of celebrating a dao dividend ceremony.. \n\nWhen reversed, the card warns of tax event headaches.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, dao distributions – transparent revenue sharing cements trust and keeps contributors aligned. Understanding this concept is crucial for navigating the practical lessons this card offers. \n\nThe practical wisdom of Ten of Liquidity suggests: Budget for compliance, educate members, distribute with clarity. \n\nLooking ahead, build lasting ties. \n\nTen of Liquidity teaches us that in the world of crypto, daily practices shape our journey. Whether you're managing your portfolio, this card reminds you that patience and wisdom are your greatest assets. The blockchain never forgets, but it also never stops evolving. As part of the Liquidity suit, this card reflects the emotional and flowing aspects of your Web3 experience.",
    nftMetadata: [
      { trait_type: 'Community', value: 'DAO' },
      { trait_type: 'Dividend', value: 'Paid' },
    ],
    gameMechanics: {
      rarity: 'Common',
      value: 10,
      power: 10,
      type: 'unit',
      suitBonus: {
        rallyBonus: 'Heal 1 Life',
        chainBonus: '+1 per 3 cards',
        battleBonus: '+1 vs. Security',
      },
    },
  },
  'Page of Liquidity': {
    arcana: 'Minor',
    number: 11,
    suit: 'Liquidity',
    rank: 'Page',
    cosmicRuler: 'Air/Earth (Mutable)',
    cosmicSummary: 'Curious experimentation with flow and community hype.',
    upright: 'Yield noob enthusiasm.',
    reversed: 'Over-leveraged naivety.',
    cryptoFlavor: 'A new LP learns to manage impermanent loss.',
    foresight: 'Spread positive vibes.',
    educationalInsight:
      'LP Basics – Understand pool ratios, fees, and slippage before depositing size.',
    appIntegration:
      'Step-by-step liquidity tutorial overlay; reversed triggers warning modals about leverage.',
    visualDescription:
      'A bright-eyed apprentice pours a small vial of tokens into a miniature pool while studying a floating diagram. Friendly whales offer guidance from behind. Reversed: the apprentice slips, spilling tokens into a swirling whirlpool.',
    extendedReflection:
      'Excitement fuels the Page, but guidance keeps them afloat. Share what you learn so the next seeker swims.',
    strategy: 'Start small, chart IL calculators, ask for mentors.',
    bookChapter:
      "In the digital realm where code meets cosmos, Page of Liquidity emerges as a beacon of air/earth (mutable) influence. Curious experimentation with flow and community hype. \n\nExcitement fuels the Page, but guidance keeps them afloat. Share what you learn so the next seeker swims. \n\nWhen you gaze upon this card, a bright-eyed apprentice pours a small vial of tokens into a miniature pool while studying a floating diagram. friendly whales offer guidance from behind. reversed: the apprentice slips, spilling tokens into a swirling whirlpool. This imagery speaks to the practical wisdom embedded within the Liquidity suit. \n\nIn its upright position, Page of Liquidity reveals yield noob enthusiasm.. This is a time of a new lp learns to manage impermanent loss.. \n\nWhen reversed, the card warns of over-leveraged naivety.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, lp basics – understand pool ratios, fees, and slippage before depositing size. Understanding this concept is crucial for navigating the practical lessons this card offers. \n\nThe practical wisdom of Page of Liquidity suggests: Start small, chart IL calculators, ask for mentors. \n\nLooking ahead, spread positive vibes. \n\nPage of Liquidity teaches us that in the world of crypto, daily practices shape our journey. Whether you're managing your portfolio, this card reminds you that leadership and mastery are your greatest assets. The blockchain never forgets, but it also never stops evolving. As part of the Liquidity suit, this card reflects the emotional and flowing aspects of your Web3 experience.",
    nftMetadata: [
      { trait_type: 'Role', value: 'Student LP' },
      { trait_type: 'Lesson', value: 'Impermanent Loss' },
    ],
    gameMechanics: {
      rarity: 'Common',
      value: 11,
      power: 11,
      type: 'unit',
      suitBonus: {
        rallyBonus: 'Heal 1 Life',
        chainBonus: '+1 per 3 cards',
        battleBonus: '+1 vs. Security',
      },
      courtEffect: 'Heal 2 on rally',
    },
  },
  'Knight of Liquidity': {
    arcana: 'Minor',
    number: 12,
    suit: 'Liquidity',
    rank: 'Knight',
    cosmicRuler: 'Fire (Cardinal)',
    cosmicSummary: 'Aggressive rotations and APY-chasing adventures.',
    upright: 'Aggressive farmer on the move.',
    reversed: 'Chasing APY into danger.',
    cryptoFlavor: 'Rotating farms in pursuit of top yields.',
    foresight: 'Charge into trends.',
    educationalInsight:
      'Rotation Strategy – Evaluate emissions schedules, lockups, and smart contract risk before aping into new farms.',
    appIntegration:
      'Animated farm radar scanner; reversed overlays hazard triangles on risky pools.',
    visualDescription:
      "A daring rider surfs atop a tidal wave of liquidity, wielding a spear that points toward the next glowing farm beacon on the horizon. Reversed: the wave crashes, throwing the rider toward jagged rocks labeled 'Exploit'.",
    extendedReflection:
      'Speed thrills, but due diligence sustains. The Knight wins by scouting before leaping.',
    strategy: 'Rotate with spreadsheets, not FOMO threads.',
    bookChapter:
      "In the digital realm where code meets cosmos, Knight of Liquidity emerges as a beacon of fire (cardinal) influence. Aggressive rotations and APY-chasing adventures. \n\nSpeed thrills, but due diligence sustains. The Knight wins by scouting before leaping. \n\nWhen you gaze upon this card, a daring rider surfs atop a tidal wave of liquidity, wielding a spear that points toward the next glowing farm beacon on the horizon. reversed: the wave crashes, throwing the rider toward jagged rocks labeled 'exploit'. This imagery speaks to the practical wisdom embedded within the Liquidity suit. \n\nIn its upright position, Knight of Liquidity reveals aggressive farmer on the move.. This is a time of rotating farms in pursuit of top yields.. \n\nWhen reversed, the card warns of chasing apy into danger.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, rotation strategy – evaluate emissions schedules, lockups, and smart contract risk before aping into new farms. Understanding this concept is crucial for navigating the practical lessons this card offers. \n\nThe practical wisdom of Knight of Liquidity suggests: Rotate with spreadsheets, not FOMO threads. \n\nLooking ahead, charge into trends. \n\nKnight of Liquidity teaches us that in the world of crypto, daily practices shape our journey. Whether you're managing your portfolio, this card reminds you that leadership and mastery are your greatest assets. The blockchain never forgets, but it also never stops evolving. As part of the Liquidity suit, this card reflects the emotional and flowing aspects of your Web3 experience.",
    nftMetadata: [
      { trait_type: 'Style', value: 'Rotator' },
      { trait_type: 'Gear', value: 'Yield Lance' },
    ],
    gameMechanics: {
      rarity: 'Rare',
      value: 12,
      power: 12,
      type: 'unit',
      suitBonus: {
        rallyBonus: 'Heal 1 Life',
        chainBonus: '+1 per 3 cards',
        battleBonus: '+1 vs. Security',
      },
      courtEffect: '+2 power defending',
    },
  },
  'Queen of Liquidity': {
    arcana: 'Minor',
    number: 13,
    suit: 'Liquidity',
    rank: 'Queen',
    cosmicRuler: 'Water (Fixed)',
    cosmicSummary: 'Intuitive guidance keeping community vibes flowing.',
    upright: 'Passive income matriarch.',
    reversed: 'Emotional selling spiral.',
    cryptoFlavor: 'Nurturing a DAO treasury with empathy.',
    foresight: 'Guide with empathy.',
    educationalInsight:
      'Treasury Stewardship – Balanced allocations between growth, safety, and community grants maintain long-term flow.',
    appIntegration:
      'Treasury dashboard with mood indicators; reversed fades colors to cold blue warning states.',
    visualDescription:
      'A serene queen conducts a symphony of water channels, gently redirecting streams toward community gardens and safety reservoirs. Reversed: the channels snarl, emotions spilling into messy waterfalls.',
    extendedReflection:
      'Liquidity is emotional. Caring leaders stabilize more than charts—they calm hearts.',
    strategy: 'Communicate plans, keep buffers, remind the community to breathe.',
    bookChapter:
      "In the digital realm where code meets cosmos, Queen of Liquidity emerges as a beacon of water (fixed) influence. Intuitive guidance keeping community vibes flowing. \n\nLiquidity is emotional. Caring leaders stabilize more than charts—they calm hearts. \n\nWhen you gaze upon this card, a serene queen conducts a symphony of water channels, gently redirecting streams toward community gardens and safety reservoirs. reversed: the channels snarl, emotions spilling into messy waterfalls. This imagery speaks to the practical wisdom embedded within the Liquidity suit. \n\nIn its upright position, Queen of Liquidity reveals passive income matriarch.. This is a time of nurturing a dao treasury with empathy.. \n\nWhen reversed, the card warns of emotional selling spiral.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, treasury stewardship – balanced allocations between growth, safety, and community grants maintain long-term flow. Understanding this concept is crucial for navigating the practical lessons this card offers. \n\nThe practical wisdom of Queen of Liquidity suggests: Communicate plans, keep buffers, remind the community to breathe. \n\nLooking ahead, guide with empathy. \n\nQueen of Liquidity teaches us that in the world of crypto, daily practices shape our journey. Whether you're managing your portfolio, this card reminds you that leadership and mastery are your greatest assets. The blockchain never forgets, but it also never stops evolving. As part of the Liquidity suit, this card reflects the emotional and flowing aspects of your Web3 experience.",
    nftMetadata: [
      { trait_type: 'Role', value: 'Treasurer' },
      { trait_type: 'Aura', value: 'Soothing' },
    ],
    gameMechanics: {
      rarity: 'Epic',
      value: 13,
      power: 13,
      type: 'unit',
      suitBonus: {
        rallyBonus: 'Heal 1 Life',
        chainBonus: '+1 per 3 cards',
        battleBonus: '+1 vs. Security',
      },
      courtEffect: 'Team heal 1 on win',
    },
  },
  'King of Liquidity': {
    arcana: 'Minor',
    number: 14,
    suit: 'Liquidity',
    rank: 'King',
    cosmicRuler: 'Air/Fire (Sovereign)',
    cosmicSummary: 'Authoritative stewardship of pools and governance.',
    upright: 'LP whale dictating flow.',
    reversed: 'Pool takeover risks.',
    cryptoFlavor: 'Steering a protocol-owned liquidity program.',
    foresight: 'Govern fairly.',
    educationalInsight:
      'POL (Protocol-Owned Liquidity) – Strategic accumulation of pool positions grants stability and governance leverage.',
    appIntegration: 'Command center UI showing POL dashboards; reversed flashes monopoly warnings.',
    visualDescription:
      'A monarch overlooks a sprawling network of interconnected pools from a floating control room, adjusting flow with precise hand gestures. Reversed: the controls overload, alarms blaring as pools tilt toward monopoly.',
    extendedReflection:
      'Power over liquidity can liberate or strangle a market. The King must model restraint and foresight.',
    strategy: 'Distribute governance, publish playbooks, avoid drowning competitors.',
    bookChapter:
      "In the digital realm where code meets cosmos, King of Liquidity emerges as a beacon of air/fire (sovereign) influence. Authoritative stewardship of pools and governance. \n\nPower over liquidity can liberate or strangle a market. The King must model restraint and foresight. \n\nWhen you gaze upon this card, a monarch overlooks a sprawling network of interconnected pools from a floating control room, adjusting flow with precise hand gestures. reversed: the controls overload, alarms blaring as pools tilt toward monopoly. This imagery speaks to the practical wisdom embedded within the Liquidity suit. \n\nIn its upright position, King of Liquidity reveals lp whale dictating flow.. This is a time of steering a protocol-owned liquidity program.. \n\nWhen reversed, the card warns of pool takeover risks.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, pol (protocol-owned liquidity) – strategic accumulation of pool positions grants stability and governance leverage. Understanding this concept is crucial for navigating the practical lessons this card offers. \n\nThe practical wisdom of King of Liquidity suggests: Distribute governance, publish playbooks, avoid drowning competitors. \n\nLooking ahead, govern fairly. \n\nKing of Liquidity teaches us that in the world of crypto, daily practices shape our journey. Whether you're managing your portfolio, this card reminds you that leadership and mastery are your greatest assets. The blockchain never forgets, but it also never stops evolving. As part of the Liquidity suit, this card reflects the emotional and flowing aspects of your Web3 experience.",
    nftMetadata: [
      { trait_type: 'Authority', value: 'POL' },
      { trait_type: 'Responsibility', value: 'High' },
    ],
    gameMechanics: {
      rarity: 'Legendary',
      value: 14,
      power: 14,
      type: 'unit',
      suitBonus: {
        rallyBonus: 'Heal 1 Life',
        chainBonus: '+1 per 3 cards',
        battleBonus: '+1 vs. Security',
      },
      courtEffect: 'Swap 1 card with opponent',
    },
  },
  'Ace of Security': {
    arcana: 'Minor',
    number: 1,
    suit: 'Security',
    rank: 'Ace',
    cosmicRuler: 'Sun',
    cosmicSummary: 'Bright insight birthing new security infrastructure.',
    upright: 'New private key, pristine seed.',
    reversed: 'Lost seed, exposure risk.',
    cryptoFlavor: 'Generating a fresh hardware wallet.',
    foresight: 'New protocols.',
    educationalInsight:
      'Key Generation – True randomness and offline devices protect your crypto crown jewels.',
    appIntegration:
      "Guided seed-phrase setup animation; reversed shows red 'seed exposed' warnings.",
    visualDescription:
      'A blinding beam of light forges a new key sigil in midair, etching twelve glowing words into a floating crystal slab. Reversed: the slab cracks and the words scatter into the wind.',
    extendedReflection:
      'Every empire begins with a single seed phrase written right. Honor that ritual or risk everything built upon it.',
    strategy: 'Generate offline, store redundantly, never screenshot.',
    bookChapter:
      "In the digital realm where code meets cosmos, Ace of Security emerges as a beacon of sun influence. Bright insight birthing new security infrastructure. \n\nEvery empire begins with a single seed phrase written right. Honor that ritual or risk everything built upon it. \n\nWhen you gaze upon this card, a blinding beam of light forges a new key sigil in midair, etching twelve glowing words into a floating crystal slab. reversed: the slab cracks and the words scatter into the wind. This imagery speaks to the practical wisdom embedded within the Security suit. \n\nIn its upright position, Ace of Security reveals new private key, pristine seed.. This is a time of generating a fresh hardware wallet.. \n\nWhen reversed, the card warns of lost seed, exposure risk.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, key generation – true randomness and offline devices protect your crypto crown jewels. Understanding this concept is crucial for navigating the practical lessons this card offers. \n\nThe practical wisdom of Ace of Security suggests: Generate offline, store redundantly, never screenshot. \n\nLooking ahead, new protocols. \n\nAce of Security teaches us that in the world of crypto, daily practices shape our journey. Whether you're managing your portfolio, this card reminds you that patience and wisdom are your greatest assets. The blockchain never forgets, but it also never stops evolving. As part of the Security suit, this card reflects the mental and strategic aspects of your Web3 experience.",
    nftMetadata: [
      { trait_type: 'Security', value: 'Fresh Key' },
      { trait_type: 'Integrity', value: 'Pristine' },
    ],
    gameMechanics: {
      rarity: 'Common',
      value: 1,
      power: 1,
      type: 'unit',
      suitBonus: {
        rallyBonus: 'Block undestroyable',
        chainBonus: '+2 defense',
        battleBonus: '+1 vs. Nodes',
      },
      aceEffect: 'Audit (negate next spell)',
    },
  },
  'Two of Security': {
    arcana: 'Minor',
    number: 2,
    suit: 'Security',
    rank: 'Two',
    cosmicRuler: 'Moon',
    cosmicSummary: 'Dual safeguards and intuitive threat detection.',
    upright: '2FA, backup choices aligned.',
    reversed: 'Phishing trap missteps.',
    cryptoFlavor: 'Choosing between hardware backups.',
    foresight: 'Weigh forks.',
    educationalInsight:
      'Redundancy – Split backups, multi-factor auth, and social recovery protect against single points of failure.',
    appIntegration:
      'Security dashboard comparing backup plans; reversed overlays phishing pop-ups.',
    visualDescription:
      'Two shimmering keys orbit a central vault, connected by a beam of moonlight. Shadows try to mimic the keys but fade away. Reversed: one key flickers out while a phishing specter reaches for the vault.',
    extendedReflection:
      'Security is a duet between intuition and protocol. Listen for subtle off-notes.',
    strategy: 'Double up defenses, validate URLs, rotate credentials regularly.',
    bookChapter:
      "In the digital realm where code meets cosmos, Two of Security emerges as a beacon of moon influence. Dual safeguards and intuitive threat detection. \n\nSecurity is a duet between intuition and protocol. Listen for subtle off-notes. \n\nWhen you gaze upon this card, two shimmering keys orbit a central vault, connected by a beam of moonlight. shadows try to mimic the keys but fade away. reversed: one key flickers out while a phishing specter reaches for the vault. This imagery speaks to the practical wisdom embedded within the Security suit. \n\nIn its upright position, Two of Security reveals 2fa, backup choices aligned.. This is a time of choosing between hardware backups.. \n\nWhen reversed, the card warns of phishing trap missteps.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, redundancy – split backups, multi-factor auth, and social recovery protect against single points of failure. Understanding this concept is crucial for navigating the practical lessons this card offers. \n\nThe practical wisdom of Two of Security suggests: Double up defenses, validate URLs, rotate credentials regularly. \n\nLooking ahead, weigh forks. \n\nTwo of Security teaches us that in the world of crypto, daily practices shape our journey. Whether you're managing your portfolio, this card reminds you that patience and wisdom are your greatest assets. The blockchain never forgets, but it also never stops evolving. As part of the Security suit, this card reflects the mental and strategic aspects of your Web3 experience.",
    nftMetadata: [
      { trait_type: 'Defense', value: '2FA' },
      { trait_type: 'Choice', value: 'Backup' },
    ],
    gameMechanics: {
      rarity: 'Common',
      value: 2,
      power: 2,
      type: 'unit',
      suitBonus: {
        rallyBonus: 'Block undestroyable',
        chainBonus: '+2 defense',
        battleBonus: '+1 vs. Nodes',
      },
    },
  },
  'Three of Security': {
    arcana: 'Minor',
    number: 3,
    suit: 'Security',
    rank: 'Three',
    cosmicRuler: 'Mercury',
    cosmicSummary: 'Team coordination and communication under stress.',
    upright: 'Three-box auth, team trust intact.',
    reversed: 'Insider leak, breach risk.',
    cryptoFlavor: 'Coordinating a tri-sig vault response.',
    foresight: 'Learn from pains.',
    educationalInsight:
      'Multisig Operations – Clear runbooks and practiced drills keep tri-sig teams calm during incidents.',
    appIntegration:
      'Incident playbook overlay with checklist; reversed highlights insider risk alerts.',
    visualDescription:
      'Three guardians place their hands on a triangular console, activating a protective shield around a vault. Their voices synchronize into glowing runes. Reversed: one guardian whispers away, leaving a gap in the shield.',
    extendedReflection: 'Communication is armor. Without it, even the strongest vault cracks.',
    strategy: 'Run tabletop exercises, log every action, keep trust transparent.',
    bookChapter:
      "In the digital realm where code meets cosmos, Three of Security emerges as a beacon of mercury influence. Team coordination and communication under stress. \n\nCommunication is armor. Without it, even the strongest vault cracks. \n\nWhen you gaze upon this card, three guardians place their hands on a triangular console, activating a protective shield around a vault. their voices synchronize into glowing runes. reversed: one guardian whispers away, leaving a gap in the shield. This imagery speaks to the practical wisdom embedded within the Security suit. \n\nIn its upright position, Three of Security reveals three-box auth, team trust intact.. This is a time of coordinating a tri-sig vault response.. \n\nWhen reversed, the card warns of insider leak, breach risk.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, multisig operations – clear runbooks and practiced drills keep tri-sig teams calm during incidents. Understanding this concept is crucial for navigating the practical lessons this card offers. \n\nThe practical wisdom of Three of Security suggests: Run tabletop exercises, log every action, keep trust transparent. \n\nLooking ahead, learn from pains. \n\nThree of Security teaches us that in the world of crypto, daily practices shape our journey. Whether you're managing your portfolio, this card reminds you that patience and wisdom are your greatest assets. The blockchain never forgets, but it also never stops evolving. As part of the Security suit, this card reflects the mental and strategic aspects of your Web3 experience.",
    nftMetadata: [
      { trait_type: 'Team', value: 'Tri-Sig' },
      { trait_type: 'Protocol', value: 'Incident Runbook' },
    ],
    gameMechanics: {
      rarity: 'Common',
      value: 3,
      power: 3,
      type: 'unit',
      suitBonus: {
        rallyBonus: 'Block undestroyable',
        chainBonus: '+2 defense',
        battleBonus: '+1 vs. Nodes',
      },
    },
  },
  'Four of Security': {
    arcana: 'Minor',
    number: 4,
    suit: 'Security',
    rank: 'Four',
    cosmicRuler: 'Uranus',
    cosmicSummary: 'Innovative rest cycles to preserve resilience.',
    upright: 'Hardware fortress downtime.',
    reversed: 'Brute-force attempt knocks.',
    cryptoFlavor: 'Resting a validator node after stress.',
    foresight: 'Recover from battles.',
    educationalInsight:
      'Defense-in-Depth – Staggered maintenance windows and redundancy keep systems calm during upgrades.',
    appIntegration:
      'Maintenance timer with status indicators; reversed shows intrusion attempt logs.',
    visualDescription:
      'A guardian meditates within a cube of shimmering firewalls while validator towers enter sleep mode around them. Reversed: crimson alarms pulse on the cube as shadowy figures hammer at its edges.',
    extendedReflection:
      'Rest is a security strategy. Systems and humans need downtime to stay sharp.',
    strategy: 'Schedule maintenance, rotate nodes, watch logs even while you breathe.',
    bookChapter:
      "In the digital realm where code meets cosmos, Four of Security emerges as a beacon of uranus influence. Innovative rest cycles to preserve resilience. \n\nRest is a security strategy. Systems and humans need downtime to stay sharp. \n\nWhen you gaze upon this card, a guardian meditates within a cube of shimmering firewalls while validator towers enter sleep mode around them. reversed: crimson alarms pulse on the cube as shadowy figures hammer at its edges. This imagery speaks to the practical wisdom embedded within the Security suit. \n\nIn its upright position, Four of Security reveals hardware fortress downtime.. This is a time of resting a validator node after stress.. \n\nWhen reversed, the card warns of brute-force attempt knocks.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, defense-in-depth – staggered maintenance windows and redundancy keep systems calm during upgrades. Understanding this concept is crucial for navigating the practical lessons this card offers. \n\nThe practical wisdom of Four of Security suggests: Schedule maintenance, rotate nodes, watch logs even while you breathe. \n\nLooking ahead, recover from battles. \n\nFour of Security teaches us that in the world of crypto, daily practices shape our journey. Whether you're managing your portfolio, this card reminds you that patience and wisdom are your greatest assets. The blockchain never forgets, but it also never stops evolving. As part of the Security suit, this card reflects the mental and strategic aspects of your Web3 experience.",
    nftMetadata: [
      { trait_type: 'State', value: 'Maintenance' },
      { trait_type: 'Shield', value: 'Layered' },
    ],
    gameMechanics: {
      rarity: 'Common',
      value: 4,
      power: 4,
      type: 'unit',
      suitBonus: {
        rallyBonus: 'Block undestroyable',
        chainBonus: '+2 defense',
        battleBonus: '+1 vs. Nodes',
      },
    },
  },
  'Five of Security': {
    arcana: 'Minor',
    number: 5,
    suit: 'Security',
    rank: 'Five',
    cosmicRuler: 'Mars',
    cosmicSummary: 'Conflict, attacks, and decisive countermeasures.',
    upright: 'Hack attempt rattling defenses.',
    reversed: 'Successful breach ramifications.',
    cryptoFlavor: 'Fending off a brute-force login storm.',
    foresight: 'Cut losses.',
    educationalInsight:
      'Incident Response – Containment, eradication, and postmortems turn chaos into lessons.',
    appIntegration:
      'Live attack visualization with containment buttons; reversed displays breach impact analytics.',
    visualDescription:
      'Security sentinels wield digital shields as fiery spears of malware rain down; sparks fly when defenses hold. Reversed: shields crack, data shards scatter across the battlefield.',
    extendedReflection:
      'You will be tested. Measure your lineage by how swiftly you triage and how honestly you communicate.',
    strategy: 'Isolate affected systems, inform users, patch, and publish learnings.',
    bookChapter:
      "In the digital realm where code meets cosmos, Five of Security emerges as a beacon of mars influence. Conflict, attacks, and decisive countermeasures. \n\nYou will be tested. Measure your lineage by how swiftly you triage and how honestly you communicate. \n\nWhen you gaze upon this card, security sentinels wield digital shields as fiery spears of malware rain down; sparks fly when defenses hold. reversed: shields crack, data shards scatter across the battlefield. This imagery speaks to the practical wisdom embedded within the Security suit. \n\nIn its upright position, Five of Security reveals hack attempt rattling defenses.. This is a time of fending off a brute-force login storm.. \n\nWhen reversed, the card warns of successful breach ramifications.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, incident response – containment, eradication, and postmortems turn chaos into lessons. Understanding this concept is crucial for navigating the practical lessons this card offers. \n\nThe practical wisdom of Five of Security suggests: Isolate affected systems, inform users, patch, and publish learnings. \n\nLooking ahead, cut losses. \n\nFive of Security teaches us that in the world of crypto, daily practices shape our journey. Whether you're managing your portfolio, this card reminds you that patience and wisdom are your greatest assets. The blockchain never forgets, but it also never stops evolving. As part of the Security suit, this card reflects the mental and strategic aspects of your Web3 experience.",
    nftMetadata: [
      { trait_type: 'Event', value: 'Attack' },
      { trait_type: 'Outcome', value: 'Response' },
    ],
    gameMechanics: {
      rarity: 'Common',
      value: 5,
      power: 5,
      type: 'unit',
      suitBonus: {
        rallyBonus: 'Block undestroyable',
        chainBonus: '+2 defense',
        battleBonus: '+1 vs. Nodes',
      },
    },
  },
  'Six of Security': {
    arcana: 'Minor',
    number: 6,
    suit: 'Security',
    rank: 'Six',
    cosmicRuler: 'Venus',
    cosmicSummary: 'Harmony among multisig guardians and shared trust.',
    upright: 'Multisig harmony restored.',
    reversed: 'Key shard disputes.',
    cryptoFlavor: 'Coordinating signers during a recovery.',
    foresight: 'Move on wisely.',
    educationalInsight:
      'Signer Coordination – Social contracts, compensation, and communication rituals keep guardians aligned.',
    appIntegration:
      'Multisig approval timeline visualization; reversed highlights stalled signatures in red.',
    visualDescription:
      'Six key bearers encircle a vault, passing luminous shards between them until they fuse into a radiant whole. Reversed: the shards fall apart as voices clash, scattering trust tokens to the wind.',
    extendedReflection:
      'Security is relational. Nourish the humans behind the keys as carefully as the code.',
    strategy: 'Define escalation paths, rotate duties, celebrate successful sign-offs.',
    bookChapter:
      "In the digital realm where code meets cosmos, Six of Security emerges as a beacon of venus influence. Harmony among multisig guardians and shared trust. \n\nSecurity is relational. Nourish the humans behind the keys as carefully as the code. \n\nWhen you gaze upon this card, six key bearers encircle a vault, passing luminous shards between them until they fuse into a radiant whole. reversed: the shards fall apart as voices clash, scattering trust tokens to the wind. This imagery speaks to the practical wisdom embedded within the Security suit. \n\nIn its upright position, Six of Security reveals multisig harmony restored.. This is a time of coordinating signers during a recovery.. \n\nWhen reversed, the card warns of key shard disputes.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, signer coordination – social contracts, compensation, and communication rituals keep guardians aligned. Understanding this concept is crucial for navigating the practical lessons this card offers. \n\nThe practical wisdom of Six of Security suggests: Define escalation paths, rotate duties, celebrate successful sign-offs. \n\nLooking ahead, move on wisely. \n\nSix of Security teaches us that in the world of crypto, daily practices shape our journey. Whether you're managing your portfolio, this card reminds you that patience and wisdom are your greatest assets. The blockchain never forgets, but it also never stops evolving. As part of the Security suit, this card reflects the mental and strategic aspects of your Web3 experience.",
    nftMetadata: [
      { trait_type: 'Harmony', value: 'Multisig' },
      { trait_type: 'Trust', value: 'Shared' },
    ],
    gameMechanics: {
      rarity: 'Common',
      value: 6,
      power: 6,
      type: 'unit',
      suitBonus: {
        rallyBonus: 'Block undestroyable',
        chainBonus: '+2 defense',
        battleBonus: '+1 vs. Nodes',
      },
    },
  },
  'Seven of Security': {
    arcana: 'Minor',
    number: 7,
    suit: 'Security',
    rank: 'Seven',
    cosmicRuler: 'Neptune',
    cosmicSummary: 'Stealth, strategy, and invisible countermeasures.',
    upright: 'Stealth mode opsec.',
    reversed: 'Keylogger infiltration.',
    cryptoFlavor: 'Running a honeypot to spot attackers.',
    foresight: 'Guard secrets.',
    educationalInsight:
      'OpSec – Device hygiene, password managers, and decoy traps expose adversaries before they strike.',
    appIntegration:
      'Stealth mode toggle with honeypot analytics; reversed triggers keylogger detection alerts.',
    visualDescription:
      'A shadowy sentinel moves through a hall of mirrors, placing decoy wallets while a hidden dashboard lights up with attacker pings. Reversed: the mirrors crack, revealing a lurking keylogger serpent.',
    extendedReflection:
      'Silence is a weapon. Share less, observe more, and make your traps smarter than their scripts.',
    strategy: 'Segment devices, rotate passwords, monitor for anomalies daily.',
    bookChapter:
      "In the digital realm where code meets cosmos, Seven of Security emerges as a beacon of neptune influence. Stealth, strategy, and invisible countermeasures. \n\nSilence is a weapon. Share less, observe more, and make your traps smarter than their scripts. \n\nWhen you gaze upon this card, a shadowy sentinel moves through a hall of mirrors, placing decoy wallets while a hidden dashboard lights up with attacker pings. reversed: the mirrors crack, revealing a lurking keylogger serpent. This imagery speaks to the practical wisdom embedded within the Security suit. \n\nIn its upright position, Seven of Security reveals stealth mode opsec.. This is a time of running a honeypot to spot attackers.. \n\nWhen reversed, the card warns of keylogger infiltration.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, opsec – device hygiene, password managers, and decoy traps expose adversaries before they strike. Understanding this concept is crucial for navigating the practical lessons this card offers. \n\nThe practical wisdom of Seven of Security suggests: Segment devices, rotate passwords, monitor for anomalies daily. \n\nLooking ahead, guard secrets. \n\nSeven of Security teaches us that in the world of crypto, daily practices shape our journey. Whether you're managing your portfolio, this card reminds you that patience and wisdom are your greatest assets. The blockchain never forgets, but it also never stops evolving. As part of the Security suit, this card reflects the mental and strategic aspects of your Web3 experience.",
    nftMetadata: [
      { trait_type: 'Technique', value: 'OpSec' },
      { trait_type: 'Mode', value: 'Stealth' },
    ],
    gameMechanics: {
      rarity: 'Common',
      value: 7,
      power: 7,
      type: 'unit',
      suitBonus: {
        rallyBonus: 'Block undestroyable',
        chainBonus: '+2 defense',
        battleBonus: '+1 vs. Nodes',
      },
    },
  },
  'Eight of Security': {
    arcana: 'Minor',
    number: 8,
    suit: 'Security',
    rank: 'Eight',
    cosmicRuler: 'Saturn',
    cosmicSummary: 'Discipline, restriction, and swift protocol exits.',
    upright: 'Quick escape, emergency plan.',
    reversed: 'Trapped in exploit loops.',
    cryptoFlavor: 'Executing a white-hat rescue.',
    foresight: 'Evade threats.',
    educationalInsight:
      'Rescue Ops – Pre-authorized scripts and emergency multisigs enable rapid withdrawals when contracts are compromised.',
    appIntegration:
      'Emergency eject button with countdown; reversed locks the button and displays exploit loop alerts.',
    visualDescription:
      'A white-hat hacker dashes through a maze of laser grids, carrying vault keys to safety while alarms blaze. Reversed: the maze walls close in, trapping them amid looping exploit code.',
    extendedReflection:
      'Preparation transforms panic into precision. Drill your exits before the tower burns.',
    strategy: 'Keep emergency scripts audited, rotate responders, rehearse rescue paths.',
    bookChapter:
      "In the digital realm where code meets cosmos, Eight of Security emerges as a beacon of saturn influence. Discipline, restriction, and swift protocol exits. \n\nPreparation transforms panic into precision. Drill your exits before the tower burns. \n\nWhen you gaze upon this card, a white-hat hacker dashes through a maze of laser grids, carrying vault keys to safety while alarms blaze. reversed: the maze walls close in, trapping them amid looping exploit code. This imagery speaks to the practical wisdom embedded within the Security suit. \n\nIn its upright position, Eight of Security reveals quick escape, emergency plan.. This is a time of executing a white-hat rescue.. \n\nWhen reversed, the card warns of trapped in exploit loops.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, rescue ops – pre-authorized scripts and emergency multisigs enable rapid withdrawals when contracts are compromised. Understanding this concept is crucial for navigating the practical lessons this card offers. \n\nThe practical wisdom of Eight of Security suggests: Keep emergency scripts audited, rotate responders, rehearse rescue paths. \n\nLooking ahead, evade threats. \n\nEight of Security teaches us that in the world of crypto, daily practices shape our journey. Whether you're managing your portfolio, this card reminds you that patience and wisdom are your greatest assets. The blockchain never forgets, but it also never stops evolving. As part of the Security suit, this card reflects the mental and strategic aspects of your Web3 experience.",
    nftMetadata: [
      { trait_type: 'Action', value: 'Rescue' },
      { trait_type: 'Tempo', value: 'Immediate' },
    ],
    gameMechanics: {
      rarity: 'Common',
      value: 8,
      power: 8,
      type: 'unit',
      suitBonus: {
        rallyBonus: 'Block undestroyable',
        chainBonus: '+2 defense',
        battleBonus: '+1 vs. Nodes',
      },
    },
  },
  'Nine of Security': {
    arcana: 'Minor',
    number: 9,
    suit: 'Security',
    rank: 'Nine',
    cosmicRuler: 'Jupiter',
    cosmicSummary: 'Expansive defenses and wisdom in vigilance.',
    upright: 'Nine-layer fortress monitoring.',
    reversed: 'Overkill and burnout.',
    cryptoFlavor: 'Maintaining 24/7 SOC coverage.',
    foresight: 'Fortify minds.',
    educationalInsight:
      'Security Operations – Layered monitoring, threat intel, and rotation schedules prevent alert fatigue.',
    appIntegration:
      'SOC dashboard with multi-layer shields; reversed dims displays and raises burnout warnings.',
    visualDescription:
      'A sentinel surveys a citadel of nine concentric barriers, each glowing with different defensive scripts. Shooting stars of threat intel stream across the sky. Reversed: alarms blare as the sentinel slumps from exhaustion, barriers flickering.',
    extendedReflection:
      'Fortresses fall from within when guardians are overworked. Balance vigilance with care.',
    strategy: 'Automate triage, rotate shifts, empower the SOC to rest.',
    bookChapter:
      "In the digital realm where code meets cosmos, Nine of Security emerges as a beacon of jupiter influence. Expansive defenses and wisdom in vigilance. \n\nFortresses fall from within when guardians are overworked. Balance vigilance with care. \n\nWhen you gaze upon this card, a sentinel surveys a citadel of nine concentric barriers, each glowing with different defensive scripts. shooting stars of threat intel stream across the sky. reversed: alarms blare as the sentinel slumps from exhaustion, barriers flickering. This imagery speaks to the practical wisdom embedded within the Security suit. \n\nIn its upright position, Nine of Security reveals nine-layer fortress monitoring.. This is a time of maintaining 24/7 soc coverage.. \n\nWhen reversed, the card warns of overkill and burnout.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, security operations – layered monitoring, threat intel, and rotation schedules prevent alert fatigue. Understanding this concept is crucial for navigating the practical lessons this card offers. \n\nThe practical wisdom of Nine of Security suggests: Automate triage, rotate shifts, empower the SOC to rest. \n\nLooking ahead, fortify minds. \n\nNine of Security teaches us that in the world of crypto, daily practices shape our journey. Whether you're managing your portfolio, this card reminds you that patience and wisdom are your greatest assets. The blockchain never forgets, but it also never stops evolving. As part of the Security suit, this card reflects the mental and strategic aspects of your Web3 experience.",
    nftMetadata: [
      { trait_type: 'Defense', value: '9 Layer' },
      { trait_type: 'Focus', value: 'Vigilance' },
    ],
    gameMechanics: {
      rarity: 'Common',
      value: 9,
      power: 9,
      type: 'unit',
      suitBonus: {
        rallyBonus: 'Block undestroyable',
        chainBonus: '+2 defense',
        battleBonus: '+1 vs. Nodes',
      },
    },
  },
  'Ten of Security': {
    arcana: 'Minor',
    number: 10,
    suit: 'Security',
    rank: 'Ten',
    cosmicRuler: 'Earth',
    cosmicSummary: 'Completion, heavy burdens, and necessary closure.',
    upright: 'Full vault secured for good.',
    reversed: 'Heist aftermath and cleanup.',
    cryptoFlavor: 'Hardening cold storage after a breach.',
    foresight: 'End cycles.',
    educationalInsight:
      'Security Hardening – Final audits, cold storage migrations, and documentation lock in resilience.',
    appIntegration:
      'Finalization checklist UI with compliance export; reversed flashes breach forensic reports.',
    visualDescription:
      'A weary guardian lugs ten encrypted lockboxes up a mountain toward a hermetically sealed citadel, sunrise breaking behind. Reversed: the lockboxes tumble open, scattering sensitive files across the slope.',
    extendedReflection:
      'Carrying every safeguard alone is exhausting. Share the load, document the journey, and know when to rest.',
    strategy: 'Finalize runbooks, offload duties, archive evidence securely.',
    bookChapter:
      "In the digital realm where code meets cosmos, Ten of Security emerges as a beacon of earth influence. Completion, heavy burdens, and necessary closure. \n\nCarrying every safeguard alone is exhausting. Share the load, document the journey, and know when to rest. \n\nWhen you gaze upon this card, a weary guardian lugs ten encrypted lockboxes up a mountain toward a hermetically sealed citadel, sunrise breaking behind. reversed: the lockboxes tumble open, scattering sensitive files across the slope. This imagery speaks to the practical wisdom embedded within the Security suit. \n\nIn its upright position, Ten of Security reveals full vault secured for good.. This is a time of hardening cold storage after a breach.. \n\nWhen reversed, the card warns of heist aftermath and cleanup.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, security hardening – final audits, cold storage migrations, and documentation lock in resilience. Understanding this concept is crucial for navigating the practical lessons this card offers. \n\nThe practical wisdom of Ten of Security suggests: Finalize runbooks, offload duties, archive evidence securely. \n\nLooking ahead, end cycles. \n\nTen of Security teaches us that in the world of crypto, daily practices shape our journey. Whether you're managing your portfolio, this card reminds you that patience and wisdom are your greatest assets. The blockchain never forgets, but it also never stops evolving. As part of the Security suit, this card reflects the mental and strategic aspects of your Web3 experience.",
    nftMetadata: [
      { trait_type: 'Phase', value: 'Hardening' },
      { trait_type: 'Burden', value: 'Heavy' },
    ],
    gameMechanics: {
      rarity: 'Common',
      value: 10,
      power: 10,
      type: 'unit',
      suitBonus: {
        rallyBonus: 'Block undestroyable',
        chainBonus: '+2 defense',
        battleBonus: '+1 vs. Nodes',
      },
    },
  },
  'Page of Security': {
    arcana: 'Minor',
    number: 11,
    suit: 'Security',
    rank: 'Page',
    cosmicRuler: 'Air/Earth (Mutable)',
    cosmicSummary: 'Curious ethical hackers blending study and practice.',
    upright: 'Ethical hacker-in-training.',
    reversed: 'Script kiddie mishaps.',
    cryptoFlavor: 'Running first CTF challenges.',
    foresight: 'Ethical pentests.',
    educationalInsight:
      'Security Education – Capture-the-flag games and bug bounties sharpen defensive instincts.',
    appIntegration:
      'Gamified terminal with challenge badges; reversed pops up exploit crash reports.',
    visualDescription:
      "A bright hacker hovers over a holographic console filled with puzzle locks, celebrating as a green banner flashes 'FLAG CAPTURED'. Reversed: the console glitches, red 'oops' messages filling the air.",
    extendedReflection:
      'Curiosity is a firewall when guided with ethics. Break things in sandboxes before villains do it live.',
    strategy: 'Join bug bounty programs, log findings, disclose responsibly.',
    bookChapter:
      "In the digital realm where code meets cosmos, Page of Security emerges as a beacon of air/earth (mutable) influence. Curious ethical hackers blending study and practice. \n\nCuriosity is a firewall when guided with ethics. Break things in sandboxes before villains do it live. \n\nWhen you gaze upon this card, a bright hacker hovers over a holographic console filled with puzzle locks, celebrating as a green banner flashes 'flag captured'. reversed: the console glitches, red 'oops' messages filling the air. This imagery speaks to the practical wisdom embedded within the Security suit. \n\nIn its upright position, Page of Security reveals ethical hacker-in-training.. This is a time of running first ctf challenges.. \n\nWhen reversed, the card warns of script kiddie mishaps.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, security education – capture-the-flag games and bug bounties sharpen defensive instincts. Understanding this concept is crucial for navigating the practical lessons this card offers. \n\nThe practical wisdom of Page of Security suggests: Join bug bounty programs, log findings, disclose responsibly. \n\nLooking ahead, ethical pentests. \n\nPage of Security teaches us that in the world of crypto, daily practices shape our journey. Whether you're managing your portfolio, this card reminds you that leadership and mastery are your greatest assets. The blockchain never forgets, but it also never stops evolving. As part of the Security suit, this card reflects the mental and strategic aspects of your Web3 experience.",
    nftMetadata: [
      { trait_type: 'Role', value: 'Apprentice' },
      { trait_type: 'Tool', value: 'CTF Rig' },
    ],
    gameMechanics: {
      rarity: 'Common',
      value: 11,
      power: 11,
      type: 'unit',
      suitBonus: {
        rallyBonus: 'Block undestroyable',
        chainBonus: '+2 defense',
        battleBonus: '+1 vs. Nodes',
      },
      courtEffect: '+2 defense',
    },
  },
  'Knight of Security': {
    arcana: 'Minor',
    number: 12,
    suit: 'Security',
    rank: 'Knight',
    cosmicRuler: 'Fire (Cardinal)',
    cosmicSummary: 'Bold auditors charging into vulnerable code.',
    upright: 'Auditor charging defenses.',
    reversed: 'Red-team fail and overreach.',
    cryptoFlavor: 'Leading a rapid incident response.',
    foresight: 'Charge defenses.',
    educationalInsight:
      'Penetration Testing – Aggressive but controlled exploits reveal weaknesses before adversaries do.',
    appIntegration:
      'Real-time audit progress meter with attack vectors; reversed shows collateral damage warnings.',
    visualDescription:
      'Armored auditors ride lightning into a fortress of code, their lances probing for flaws as sparks illuminate vulnerabilities. Reversed: the lances shatter, friendly systems smoldering from misjudged strikes.',
    extendedReflection:
      'Courage without care backfires. The Knight must blend speed with empathy for the systems they probe.',
    strategy: 'Scope clearly, document thoroughly, deliver fixes with diplomacy.',
    bookChapter:
      "In the digital realm where code meets cosmos, Knight of Security emerges as a beacon of fire (cardinal) influence. Bold auditors charging into vulnerable code. \n\nCourage without care backfires. The Knight must blend speed with empathy for the systems they probe. \n\nWhen you gaze upon this card, armored auditors ride lightning into a fortress of code, their lances probing for flaws as sparks illuminate vulnerabilities. reversed: the lances shatter, friendly systems smoldering from misjudged strikes. This imagery speaks to the practical wisdom embedded within the Security suit. \n\nIn its upright position, Knight of Security reveals auditor charging defenses.. This is a time of leading a rapid incident response.. \n\nWhen reversed, the card warns of red-team fail and overreach.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, penetration testing – aggressive but controlled exploits reveal weaknesses before adversaries do. Understanding this concept is crucial for navigating the practical lessons this card offers. \n\nThe practical wisdom of Knight of Security suggests: Scope clearly, document thoroughly, deliver fixes with diplomacy. \n\nLooking ahead, charge defenses. \n\nKnight of Security teaches us that in the world of crypto, daily practices shape our journey. Whether you're managing your portfolio, this card reminds you that leadership and mastery are your greatest assets. The blockchain never forgets, but it also never stops evolving. As part of the Security suit, this card reflects the mental and strategic aspects of your Web3 experience.",
    nftMetadata: [
      { trait_type: 'Discipline', value: 'Red Team' },
      { trait_type: 'Weapon', value: 'Exploit Lance' },
    ],
    gameMechanics: {
      rarity: 'Rare',
      value: 12,
      power: 12,
      type: 'unit',
      suitBonus: {
        rallyBonus: 'Block undestroyable',
        chainBonus: '+2 defense',
        battleBonus: '+1 vs. Nodes',
      },
      courtEffect: 'Cannot be stolen',
    },
  },
  'Queen of Security': {
    arcana: 'Minor',
    number: 13,
    suit: 'Security',
    rank: 'Queen',
    cosmicRuler: 'Water (Fixed)',
    cosmicSummary: 'Regulated intuition balancing law and innovation.',
    upright: 'Regulator with balanced wisdom.',
    reversed: 'Over-regulation stagnation.',
    cryptoFlavor: 'Drafting sensible compliance frameworks.',
    foresight: 'Balance laws.',
    educationalInsight:
      'Compliance Architecture – Craft policies that protect users without suffocating builders.',
    appIntegration:
      'Policy builder UI with stakeholder feedback; reversed displays red-tape overload meter.',
    visualDescription:
      'A poised arbiter sits between a flowing river of code and a marble hall of law, weaving both into shimmering tapestries of policy. Reversed: the tapestries tighten into constricting webs.',
    extendedReflection:
      "True guardians listen more than they dictate. The Queen ensures safety while honoring innovation's spark.",
    strategy: 'Engage communities, iterate regulations, avoid blanket bans.',
    bookChapter:
      "In the digital realm where code meets cosmos, Queen of Security emerges as a beacon of water (fixed) influence. Regulated intuition balancing law and innovation. \n\nTrue guardians listen more than they dictate. The Queen ensures safety while honoring innovation's spark. \n\nWhen you gaze upon this card, a poised arbiter sits between a flowing river of code and a marble hall of law, weaving both into shimmering tapestries of policy. reversed: the tapestries tighten into constricting webs. This imagery speaks to the practical wisdom embedded within the Security suit. \n\nIn its upright position, Queen of Security reveals regulator with balanced wisdom.. This is a time of drafting sensible compliance frameworks.. \n\nWhen reversed, the card warns of over-regulation stagnation.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, compliance architecture – craft policies that protect users without suffocating builders. Understanding this concept is crucial for navigating the practical lessons this card offers. \n\nThe practical wisdom of Queen of Security suggests: Engage communities, iterate regulations, avoid blanket bans. \n\nLooking ahead, balance laws. \n\nQueen of Security teaches us that in the world of crypto, daily practices shape our journey. Whether you're managing your portfolio, this card reminds you that leadership and mastery are your greatest assets. The blockchain never forgets, but it also never stops evolving. As part of the Security suit, this card reflects the mental and strategic aspects of your Web3 experience.",
    nftMetadata: [
      { trait_type: 'Mandate', value: 'Protect' },
      { trait_type: 'Balance', value: 'Law & Code' },
    ],
    gameMechanics: {
      rarity: 'Epic',
      value: 13,
      power: 13,
      type: 'unit',
      suitBonus: {
        rallyBonus: 'Block undestroyable',
        chainBonus: '+2 defense',
        battleBonus: '+1 vs. Nodes',
      },
      courtEffect: 'Allies +1 defense',
    },
  },
  'King of Security': {
    arcana: 'Minor',
    number: 14,
    suit: 'Security',
    rank: 'King',
    cosmicRuler: 'Air/Fire (Sovereign)',
    cosmicSummary: 'Authoritative guardianship of protocols and protectors.',
    upright: 'CISO-level mastery.',
    reversed: 'Complacent leadership.',
    cryptoFlavor: 'Directing a global security team.',
    foresight: 'Lead protections.',
    educationalInsight:
      'Security Leadership – Culture, budgets, and cross-team alignment ensure defenses scale with ambition.',
    appIntegration:
      'Executive dashboard showing risk posture; reversed highlights ignored audit findings.',
    visualDescription:
      'A commanding leader oversees a globe of interconnected nodes from a war room of luminous strategies, issuing calm directives to teams below. Reversed: screens go dark as the leader turns away, ignoring warning beacons.',
    extendedReflection:
      'Leadership is accountability. The King protects people, protocols, and purpose—daily.',
    strategy: 'Invest in teams, review threats often, celebrate security wins.',
    bookChapter:
      "In the digital realm where code meets cosmos, King of Security emerges as a beacon of air/fire (sovereign) influence. Authoritative guardianship of protocols and protectors. \n\nLeadership is accountability. The King protects people, protocols, and purpose—daily. \n\nWhen you gaze upon this card, a commanding leader oversees a globe of interconnected nodes from a war room of luminous strategies, issuing calm directives to teams below. reversed: screens go dark as the leader turns away, ignoring warning beacons. This imagery speaks to the practical wisdom embedded within the Security suit. \n\nIn its upright position, King of Security reveals ciso-level mastery.. This is a time of directing a global security team.. \n\nWhen reversed, the card warns of complacent leadership.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, security leadership – culture, budgets, and cross-team alignment ensure defenses scale with ambition. Understanding this concept is crucial for navigating the practical lessons this card offers. \n\nThe practical wisdom of King of Security suggests: Invest in teams, review threats often, celebrate security wins. \n\nLooking ahead, lead protections. \n\nKing of Security teaches us that in the world of crypto, daily practices shape our journey. Whether you're managing your portfolio, this card reminds you that leadership and mastery are your greatest assets. The blockchain never forgets, but it also never stops evolving. As part of the Security suit, this card reflects the mental and strategic aspects of your Web3 experience.",
    nftMetadata: [
      { trait_type: 'Authority', value: 'CISO' },
      { trait_type: 'Culture', value: 'Security-First' },
    ],
    gameMechanics: {
      rarity: 'Legendary',
      value: 14,
      power: 14,
      type: 'unit',
      suitBonus: {
        rallyBonus: 'Block undestroyable',
        chainBonus: '+2 defense',
        battleBonus: '+1 vs. Nodes',
      },
      courtEffect: 'Reveal opponent hand',
    },
  },
  'Ace of Nodes': {
    arcana: 'Minor',
    number: 1,
    suit: 'Nodes',
    rank: 'Ace',
    cosmicRuler: 'Sun',
    cosmicSummary: 'Raw spark igniting new protocols and visions.',
    upright: 'Spark to new protocol.',
    reversed: 'Dead project before lift-off.',
    cryptoFlavor: 'Writing the first commit of a new chain.',
    foresight: 'Launch projects.',
    educationalInsight:
      'Genesis Commits – Designing consensus, cryptography, and incentives before mainnet breathes.',
    appIntegration:
      'First-commit animation with glowing repo timeline; reversed shows TODOs overflowing in red.',
    visualDescription:
      "A blazing spark leaps from a developer's quill into a newborn blockchain lattice, lighting each node like constellations. Reversed: the spark fizzles, lattice collapsing into darkness.",
    extendedReflection:
      'Ideas mean nothing without ignition. Light the match, but feed it architecture, not vapor.',
    strategy: 'Prototype fast, audit primitives, gather founding validators early.',
    bookChapter:
      "In the digital realm where code meets cosmos, Ace of Nodes emerges as a beacon of sun influence. Raw spark igniting new protocols and visions. \n\nIdeas mean nothing without ignition. Light the match, but feed it architecture, not vapor. \n\nWhen you gaze upon this card, a blazing spark leaps from a developer's quill into a newborn blockchain lattice, lighting each node like constellations. reversed: the spark fizzles, lattice collapsing into darkness. This imagery speaks to the practical wisdom embedded within the Nodes suit. \n\nIn its upright position, Ace of Nodes reveals spark to new protocol.. This is a time of writing the first commit of a new chain.. \n\nWhen reversed, the card warns of dead project before lift-off.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, genesis commits – designing consensus, cryptography, and incentives before mainnet breathes. Understanding this concept is crucial for navigating the practical lessons this card offers. \n\nThe practical wisdom of Ace of Nodes suggests: Prototype fast, audit primitives, gather founding validators early. \n\nLooking ahead, launch projects. \n\nAce of Nodes teaches us that in the world of crypto, daily practices shape our journey. Whether you're managing your portfolio, this card reminds you that patience and wisdom are your greatest assets. The blockchain never forgets, but it also never stops evolving. As part of the Nodes suit, this card reflects the creative and energetic aspects of your Web3 experience.",
    nftMetadata: [
      { trait_type: 'Stage', value: 'Genesis' },
      { trait_type: 'Flame', value: 'Inception' },
    ],
    gameMechanics: {
      rarity: 'Common',
      value: 1,
      power: 1,
      type: 'unit',
      suitBonus: {
        rallyBonus: '+1 march',
        chainBonus: '+1 power',
        battleBonus: '+1 vs. Tokens',
      },
      aceEffect: 'Deploy (free rally)',
    },
  },
  'Two of Nodes': {
    arcana: 'Minor',
    number: 2,
    suit: 'Nodes',
    rank: 'Two',
    cosmicRuler: 'Moon',
    cosmicSummary: 'Dual vision, roadmaps, and intuitive planning.',
    upright: 'Dual vision, roadmap alignment.',
    reversed: 'Scope creep confusion.',
    cryptoFlavor: 'Architecting a dual-token rollout.',
    foresight: 'Map roadmaps.',
    educationalInsight:
      'Roadmapping – Balance ambition with delivery timelines, community expectations, and token economics.',
    appIntegration:
      'Interactive roadmap with milestones; reversed overlays warning signs for scope creep.',
    visualDescription:
      'An architect stands atop a cliff holding two glowing schematics that project future cities of code across the sea. Reversed: the schematics blur, pathways splitting chaotically.',
    extendedReflection:
      'Vision is a compass, not a cage. Refine plans nightly, and listen when community tides shift.',
    strategy: 'Time-box features, publish roadmaps, revisit goals quarterly.',
    bookChapter:
      "In the digital realm where code meets cosmos, Two of Nodes emerges as a beacon of moon influence. Dual vision, roadmaps, and intuitive planning. \n\nVision is a compass, not a cage. Refine plans nightly, and listen when community tides shift. \n\nWhen you gaze upon this card, an architect stands atop a cliff holding two glowing schematics that project future cities of code across the sea. reversed: the schematics blur, pathways splitting chaotically. This imagery speaks to the practical wisdom embedded within the Nodes suit. \n\nIn its upright position, Two of Nodes reveals dual vision, roadmap alignment.. This is a time of architecting a dual-token rollout.. \n\nWhen reversed, the card warns of scope creep confusion.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, roadmapping – balance ambition with delivery timelines, community expectations, and token economics. Understanding this concept is crucial for navigating the practical lessons this card offers. \n\nThe practical wisdom of Two of Nodes suggests: Time-box features, publish roadmaps, revisit goals quarterly. \n\nLooking ahead, map roadmaps. \n\nTwo of Nodes teaches us that in the world of crypto, daily practices shape our journey. Whether you're managing your portfolio, this card reminds you that patience and wisdom are your greatest assets. The blockchain never forgets, but it also never stops evolving. As part of the Nodes suit, this card reflects the creative and energetic aspects of your Web3 experience.",
    nftMetadata: [
      { trait_type: 'Plan', value: 'Dual' },
      { trait_type: 'Focus', value: 'Alignment' },
    ],
    gameMechanics: {
      rarity: 'Common',
      value: 2,
      power: 2,
      type: 'unit',
      suitBonus: {
        rallyBonus: '+1 march',
        chainBonus: '+1 power',
        battleBonus: '+1 vs. Tokens',
      },
    },
  },
  'Three of Nodes': {
    arcana: 'Minor',
    number: 3,
    suit: 'Nodes',
    rank: 'Three',
    cosmicRuler: 'Mercury',
    cosmicSummary: 'Collaboration, code reviews, and shipping MVPs.',
    upright: 'Team shipping core modules.',
    reversed: 'Merge conflict drama.',
    cryptoFlavor: 'Co-authoring a key upgrade with core devs.',
    foresight: 'Sync devs.',
    educationalInsight:
      'Peer Review – Pull requests and audits catch bugs and build trust across contributors.',
    appIntegration: 'Live PR dashboard with reviewer avatars; reversed shows red merge conflicts.',
    visualDescription:
      'Three engineers huddle over a holographic diff, their keyboards weaving threads of light that braid into a stable bridge. Reversed: mismatched threads knot into glitchy snarls.',
    extendedReflection:
      'No protocol thrives alone. Celebrate those who review, refactor, and raise quality bars.',
    strategy: 'Establish contribution guides, reward review cycles, hold retros.',
    bookChapter:
      "In the digital realm where code meets cosmos, Three of Nodes emerges as a beacon of mercury influence. Collaboration, code reviews, and shipping MVPs. \n\nNo protocol thrives alone. Celebrate those who review, refactor, and raise quality bars. \n\nWhen you gaze upon this card, three engineers huddle over a holographic diff, their keyboards weaving threads of light that braid into a stable bridge. reversed: mismatched threads knot into glitchy snarls. This imagery speaks to the practical wisdom embedded within the Nodes suit. \n\nIn its upright position, Three of Nodes reveals team shipping core modules.. This is a time of co-authoring a key upgrade with core devs.. \n\nWhen reversed, the card warns of merge conflict drama.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, peer review – pull requests and audits catch bugs and build trust across contributors. Understanding this concept is crucial for navigating the practical lessons this card offers. \n\nThe practical wisdom of Three of Nodes suggests: Establish contribution guides, reward review cycles, hold retros. \n\nLooking ahead, sync devs. \n\nThree of Nodes teaches us that in the world of crypto, daily practices shape our journey. Whether you're managing your portfolio, this card reminds you that patience and wisdom are your greatest assets. The blockchain never forgets, but it also never stops evolving. As part of the Nodes suit, this card reflects the creative and energetic aspects of your Web3 experience.",
    nftMetadata: [
      { trait_type: 'Squad', value: 'Core Dev' },
      { trait_type: 'Process', value: 'Code Review' },
    ],
    gameMechanics: {
      rarity: 'Common',
      value: 3,
      power: 3,
      type: 'unit',
      suitBonus: {
        rallyBonus: '+1 march',
        chainBonus: '+1 power',
        battleBonus: '+1 vs. Tokens',
      },
    },
  },
  'Four of Nodes': {
    arcana: 'Minor',
    number: 4,
    suit: 'Nodes',
    rank: 'Four',
    cosmicRuler: 'Uranus',
    cosmicSummary: 'Foundation, staking infrastructure, and validator rest.',
    upright: 'Validator ceremony success.',
    reversed: 'Downtime slashing risk.',
    cryptoFlavor: 'Spinning up a secure validator cluster.',
    foresight: 'Secure rest.',
    educationalInsight:
      'Validator Hygiene – Redundant setups, monitoring, and backups keep nodes online and safe.',
    appIntegration: 'Validator dashboard with uptime metrics; reversed flashes slashing warnings.',
    visualDescription:
      'Four validator towers form a protective square around a glowing hearth where operators meditate. Reversed: lightning fractures the towers as uptime meters plunge.',
    extendedReflection:
      'Rest before the next fork. A resilient node sleeps with alarms armed and configs backed up.',
    strategy: 'Rotate maintenance, automate alerts, diversify regions.',
    bookChapter:
      "In the digital realm where code meets cosmos, Four of Nodes emerges as a beacon of uranus influence. Foundation, staking infrastructure, and validator rest. \n\nRest before the next fork. A resilient node sleeps with alarms armed and configs backed up. \n\nWhen you gaze upon this card, four validator towers form a protective square around a glowing hearth where operators meditate. reversed: lightning fractures the towers as uptime meters plunge. This imagery speaks to the practical wisdom embedded within the Nodes suit. \n\nIn its upright position, Four of Nodes reveals validator ceremony success.. This is a time of spinning up a secure validator cluster.. \n\nWhen reversed, the card warns of downtime slashing risk.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, validator hygiene – redundant setups, monitoring, and backups keep nodes online and safe. Understanding this concept is crucial for navigating the practical lessons this card offers. \n\nThe practical wisdom of Four of Nodes suggests: Rotate maintenance, automate alerts, diversify regions. \n\nLooking ahead, secure rest. \n\nFour of Nodes teaches us that in the world of crypto, daily practices shape our journey. Whether you're managing your portfolio, this card reminds you that patience and wisdom are your greatest assets. The blockchain never forgets, but it also never stops evolving. As part of the Nodes suit, this card reflects the creative and energetic aspects of your Web3 experience.",
    nftMetadata: [
      { trait_type: 'Infrastructure', value: 'Validator' },
      { trait_type: 'State', value: 'Rest' },
    ],
    gameMechanics: {
      rarity: 'Common',
      value: 4,
      power: 4,
      type: 'unit',
      suitBonus: {
        rallyBonus: '+1 march',
        chainBonus: '+1 power',
        battleBonus: '+1 vs. Tokens',
      },
    },
  },
  'Five of Nodes': {
    arcana: 'Minor',
    number: 5,
    suit: 'Nodes',
    rank: 'Five',
    cosmicRuler: 'Mars',
    cosmicSummary: 'Conflict, fork debates, and protocol stress tests.',
    upright: 'Heated governance debate.',
    reversed: 'Community schism.',
    cryptoFlavor: 'Arguing over contentious hard fork parameters.',
    foresight: 'Test resilience.',
    educationalInsight:
      'Governance Drama – Transparent communication and mediation keep disagreements from splitting chains.',
    appIntegration:
      'Debate arena with live sentiment gauges; reversed shows fork countdown warning.',
    visualDescription:
      'Five nodes pulse with competing colors as delegates argue atop a fiery council floor, sparks of code flying. Reversed: two nodes break away, dragging followers into a new chain.',
    extendedReflection:
      "Conflict isn't failure; silence is. Invite all voices, but anchor in shared values.",
    strategy: 'Host open forums, publish rationale, plan for potential splits.',
    bookChapter:
      "In the digital realm where code meets cosmos, Five of Nodes emerges as a beacon of mars influence. Conflict, fork debates, and protocol stress tests. \n\nConflict isn't failure; silence is. Invite all voices, but anchor in shared values. \n\nWhen you gaze upon this card, five nodes pulse with competing colors as delegates argue atop a fiery council floor, sparks of code flying. reversed: two nodes break away, dragging followers into a new chain. This imagery speaks to the practical wisdom embedded within the Nodes suit. \n\nIn its upright position, Five of Nodes reveals heated governance debate.. This is a time of arguing over contentious hard fork parameters.. \n\nWhen reversed, the card warns of community schism.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, governance drama – transparent communication and mediation keep disagreements from splitting chains. Understanding this concept is crucial for navigating the practical lessons this card offers. \n\nThe practical wisdom of Five of Nodes suggests: Host open forums, publish rationale, plan for potential splits. \n\nLooking ahead, test resilience. \n\nFive of Nodes teaches us that in the world of crypto, daily practices shape our journey. Whether you're managing your portfolio, this card reminds you that patience and wisdom are your greatest assets. The blockchain never forgets, but it also never stops evolving. As part of the Nodes suit, this card reflects the creative and energetic aspects of your Web3 experience.",
    nftMetadata: [
      { trait_type: 'Debate', value: 'Contentious' },
      { trait_type: 'Risk', value: 'Fork' },
    ],
    gameMechanics: {
      rarity: 'Common',
      value: 5,
      power: 5,
      type: 'unit',
      suitBonus: {
        rallyBonus: '+1 march',
        chainBonus: '+1 power',
        battleBonus: '+1 vs. Tokens',
      },
    },
  },
  'Six of Nodes': {
    arcana: 'Minor',
    number: 6,
    suit: 'Nodes',
    rank: 'Six',
    cosmicRuler: 'Jupiter',
    cosmicSummary: 'Victory, mainnet launches, and public praise.',
    upright: 'Mainnet victory lap.',
    reversed: 'Hubris, complacency.',
    cryptoFlavor: 'Celebrating a successful protocol upgrade.',
    foresight: 'Share wins.',
    educationalInsight:
      'Launch Comms – Celebrate achievements, credit contributors, and outline next milestones.',
    appIntegration:
      'Launch broadcast overlay with achievement badges; reversed dims accolades and shows bug reports piling up.',
    visualDescription:
      "A parade of nodes floats through a jubilant city as developers raise banners reading 'MAINNET LIVE'. Reversed: confetti falls silent while unresolved bug icons hover overhead.",
    extendedReflection:
      'Victory invites responsibility. Keep momentum by sharing credit and shipping the next improvement.',
    strategy: 'Thank contributors, publish retros, keep issue trackers open.',
    bookChapter:
      "In the digital realm where code meets cosmos, Six of Nodes emerges as a beacon of jupiter influence. Victory, mainnet launches, and public praise. \n\nVictory invites responsibility. Keep momentum by sharing credit and shipping the next improvement. \n\nWhen you gaze upon this card, a parade of nodes floats through a jubilant city as developers raise banners reading 'mainnet live'. reversed: confetti falls silent while unresolved bug icons hover overhead. This imagery speaks to the practical wisdom embedded within the Nodes suit. \n\nIn its upright position, Six of Nodes reveals mainnet victory lap.. This is a time of celebrating a successful protocol upgrade.. \n\nWhen reversed, the card warns of hubris, complacency.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, launch comms – celebrate achievements, credit contributors, and outline next milestones. Understanding this concept is crucial for navigating the practical lessons this card offers. \n\nThe practical wisdom of Six of Nodes suggests: Thank contributors, publish retros, keep issue trackers open. \n\nLooking ahead, share wins. \n\nSix of Nodes teaches us that in the world of crypto, daily practices shape our journey. Whether you're managing your portfolio, this card reminds you that patience and wisdom are your greatest assets. The blockchain never forgets, but it also never stops evolving. As part of the Nodes suit, this card reflects the creative and energetic aspects of your Web3 experience.",
    nftMetadata: [
      { trait_type: 'Milestone', value: 'Mainnet' },
      { trait_type: 'Badge', value: 'Victory' },
    ],
    gameMechanics: {
      rarity: 'Common',
      value: 6,
      power: 6,
      type: 'unit',
      suitBonus: {
        rallyBonus: '+1 march',
        chainBonus: '+1 power',
        battleBonus: '+1 vs. Tokens',
      },
    },
  },
  'Seven of Nodes': {
    arcana: 'Minor',
    number: 7,
    suit: 'Nodes',
    rank: 'Seven',
    cosmicRuler: 'Neptune',
    cosmicSummary: 'Strategy, testnets, and long-term refinement.',
    upright: 'Testnet endurance.',
    reversed: 'Feature creep fatigue.',
    cryptoFlavor: 'Iterating a protocol through multiple testnets.',
    foresight: 'Plan long game.',
    educationalInsight:
      'Testnets – Extended soak tests surface edge cases and ensure upgrades stick before mainnet.',
    appIntegration:
      'Multi-testnet dashboard with telemetry; reversed shows stalled progress and backlog overload.',
    visualDescription:
      'A strategist tends seven bonsai nodes under starlight, trimming and grafting while data waterfalls shimmer around them. Reversed: the bonsai overgrow, tangling wires and screens.',
    extendedReflection:
      'Great protocols mature slowly. Prune, measure, and keep eyes on the endgame.',
    strategy: 'Set clear testnet goals, rotate testers, avoid endless scope expansion.',
    bookChapter:
      "In the digital realm where code meets cosmos, Seven of Nodes emerges as a beacon of neptune influence. Strategy, testnets, and long-term refinement. \n\nGreat protocols mature slowly. Prune, measure, and keep eyes on the endgame. \n\nWhen you gaze upon this card, a strategist tends seven bonsai nodes under starlight, trimming and grafting while data waterfalls shimmer around them. reversed: the bonsai overgrow, tangling wires and screens. This imagery speaks to the practical wisdom embedded within the Nodes suit. \n\nIn its upright position, Seven of Nodes reveals testnet endurance.. This is a time of iterating a protocol through multiple testnets.. \n\nWhen reversed, the card warns of feature creep fatigue.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, testnets – extended soak tests surface edge cases and ensure upgrades stick before mainnet. Understanding this concept is crucial for navigating the practical lessons this card offers. \n\nThe practical wisdom of Seven of Nodes suggests: Set clear testnet goals, rotate testers, avoid endless scope expansion. \n\nLooking ahead, plan long game. \n\nSeven of Nodes teaches us that in the world of crypto, daily practices shape our journey. Whether you're managing your portfolio, this card reminds you that patience and wisdom are your greatest assets. The blockchain never forgets, but it also never stops evolving. As part of the Nodes suit, this card reflects the creative and energetic aspects of your Web3 experience.",
    nftMetadata: [
      { trait_type: 'Phase', value: 'Testnet' },
      { trait_type: 'Patience', value: 'Long' },
    ],
    gameMechanics: {
      rarity: 'Common',
      value: 7,
      power: 7,
      type: 'unit',
      suitBonus: {
        rallyBonus: '+1 march',
        chainBonus: '+1 power',
        battleBonus: '+1 vs. Tokens',
      },
    },
  },
  'Eight of Nodes': {
    arcana: 'Minor',
    number: 8,
    suit: 'Nodes',
    rank: 'Eight',
    cosmicRuler: 'Saturn',
    cosmicSummary: 'Discipline, shipping sprints, and relentless iteration.',
    upright: 'Heads-down shipping.',
    reversed: 'Burnout, missed sleep.',
    cryptoFlavor: 'Grinding through an 8-week development sprint.',
    foresight: 'Master craft.',
    educationalInsight:
      'Sprints – Balanced agile practices keep contributors productive without burning out.',
    appIntegration: 'Sprint board with velocity metrics; reversed shows red burnout indicators.',
    visualDescription:
      'Eight monitors surround a focused builder, each displaying modules falling into place like clockwork gears. Reversed: the monitors flash red deadlines as coffee cups topple.',
    extendedReflection:
      'Craft thrives on cadence, not frantic heroics. Set a rhythm your team can dance to.',
    strategy: 'Define sprint goals, celebrate wins, enforce rest cycles.',
    bookChapter:
      "In the digital realm where code meets cosmos, Eight of Nodes emerges as a beacon of saturn influence. Discipline, shipping sprints, and relentless iteration. \n\nCraft thrives on cadence, not frantic heroics. Set a rhythm your team can dance to. \n\nWhen you gaze upon this card, eight monitors surround a focused builder, each displaying modules falling into place like clockwork gears. reversed: the monitors flash red deadlines as coffee cups topple. This imagery speaks to the practical wisdom embedded within the Nodes suit. \n\nIn its upright position, Eight of Nodes reveals heads-down shipping.. This is a time of grinding through an 8-week development sprint.. \n\nWhen reversed, the card warns of burnout, missed sleep.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, sprints – balanced agile practices keep contributors productive without burning out. Understanding this concept is crucial for navigating the practical lessons this card offers. \n\nThe practical wisdom of Eight of Nodes suggests: Define sprint goals, celebrate wins, enforce rest cycles. \n\nLooking ahead, master craft. \n\nEight of Nodes teaches us that in the world of crypto, daily practices shape our journey. Whether you're managing your portfolio, this card reminds you that patience and wisdom are your greatest assets. The blockchain never forgets, but it also never stops evolving. As part of the Nodes suit, this card reflects the creative and energetic aspects of your Web3 experience.",
    nftMetadata: [
      { trait_type: 'Work', value: 'Sprint' },
      { trait_type: 'Focus', value: 'Craft' },
    ],
    gameMechanics: {
      rarity: 'Common',
      value: 8,
      power: 8,
      type: 'unit',
      suitBonus: {
        rallyBonus: '+1 march',
        chainBonus: '+1 power',
        battleBonus: '+1 vs. Tokens',
      },
    },
  },
  'Nine of Nodes': {
    arcana: 'Minor',
    number: 9,
    suit: 'Nodes',
    rank: 'Nine',
    cosmicRuler: 'Jupiter',
    cosmicSummary: 'Expansion, crowdfunding, and community guardianship.',
    upright: 'Guarding community treasury.',
    reversed: 'Exhausted maintainer.',
    cryptoFlavor: 'Overseeing grants and community nodes.',
    foresight: 'Protect gains.',
    educationalInsight:
      'Community Nodes – Empower stewards with resources, documentation, and emotional support.',
    appIntegration:
      'Guardian dashboard tracking grantees; reversed shows depletion meters and stressed avatars.',
    visualDescription:
      'A vigilant steward stands atop a wall of nine glowing nodes, warding off spam storms with a radiant shield while the community cheers. Reversed: the steward slumps, shield flickering as storms breach the wall.',
    extendedReflection:
      'Success brings new responsibility. Protect your culture by protecting the protectors.',
    strategy: 'Delegate, rotate guardians, fund wellness and tooling.',
    bookChapter:
      "In the digital realm where code meets cosmos, Nine of Nodes emerges as a beacon of jupiter influence. Expansion, crowdfunding, and community guardianship. \n\nSuccess brings new responsibility. Protect your culture by protecting the protectors. \n\nWhen you gaze upon this card, a vigilant steward stands atop a wall of nine glowing nodes, warding off spam storms with a radiant shield while the community cheers. reversed: the steward slumps, shield flickering as storms breach the wall. This imagery speaks to the practical wisdom embedded within the Nodes suit. \n\nIn its upright position, Nine of Nodes reveals guarding community treasury.. This is a time of overseeing grants and community nodes.. \n\nWhen reversed, the card warns of exhausted maintainer.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, community nodes – empower stewards with resources, documentation, and emotional support. Understanding this concept is crucial for navigating the practical lessons this card offers. \n\nThe practical wisdom of Nine of Nodes suggests: Delegate, rotate guardians, fund wellness and tooling. \n\nLooking ahead, protect gains. \n\nNine of Nodes teaches us that in the world of crypto, daily practices shape our journey. Whether you're managing your portfolio, this card reminds you that patience and wisdom are your greatest assets. The blockchain never forgets, but it also never stops evolving. As part of the Nodes suit, this card reflects the creative and energetic aspects of your Web3 experience.",
    nftMetadata: [
      { trait_type: 'Duty', value: 'Guardian' },
      { trait_type: 'Support', value: 'Community' },
    ],
    gameMechanics: {
      rarity: 'Common',
      value: 9,
      power: 9,
      type: 'unit',
      suitBonus: {
        rallyBonus: '+1 march',
        chainBonus: '+1 power',
        battleBonus: '+1 vs. Tokens',
      },
    },
  },
  'Ten of Nodes': {
    arcana: 'Minor',
    number: 10,
    suit: 'Nodes',
    rank: 'Ten',
    cosmicRuler: 'Earth',
    cosmicSummary: 'Completion, network effects, and legacy builders.',
    upright: 'Network fully decentralized.',
    reversed: 'Centralization relapse.',
    cryptoFlavor: 'Handing protocol ownership to the community.',
    foresight: 'Seed successors.',
    educationalInsight:
      'Decentralization Milestones – Token distribution, client diversity, and governance maturity cement legitimacy.',
    appIntegration:
      'Network health heatmap showing decentralized metrics; reversed highlights centralization red flags.',
    visualDescription:
      'Ten radiant nodes form a globe, each autonomous yet synchronized, as the founding team passes a torch to new builders. Reversed: the globe warps, a single oversized node casting dominating shadows.',
    extendedReflection:
      'Letting go is the final mastery. Systems thrive when many hands uphold the flame.',
    strategy: 'Disperse governance, support alternative clients, archive knowledge.',
    bookChapter:
      "In the digital realm where code meets cosmos, Ten of Nodes emerges as a beacon of earth influence. Completion, network effects, and legacy builders. \n\nLetting go is the final mastery. Systems thrive when many hands uphold the flame. \n\nWhen you gaze upon this card, ten radiant nodes form a globe, each autonomous yet synchronized, as the founding team passes a torch to new builders. reversed: the globe warps, a single oversized node casting dominating shadows. This imagery speaks to the practical wisdom embedded within the Nodes suit. \n\nIn its upright position, Ten of Nodes reveals network fully decentralized.. This is a time of handing protocol ownership to the community.. \n\nWhen reversed, the card warns of centralization relapse.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, decentralization milestones – token distribution, client diversity, and governance maturity cement legitimacy. Understanding this concept is crucial for navigating the practical lessons this card offers. \n\nThe practical wisdom of Ten of Nodes suggests: Disperse governance, support alternative clients, archive knowledge. \n\nLooking ahead, seed successors. \n\nTen of Nodes teaches us that in the world of crypto, daily practices shape our journey. Whether you're managing your portfolio, this card reminds you that patience and wisdom are your greatest assets. The blockchain never forgets, but it also never stops evolving. As part of the Nodes suit, this card reflects the creative and energetic aspects of your Web3 experience.",
    nftMetadata: [
      { trait_type: 'Network', value: 'Decentralized' },
      { trait_type: 'Legacy', value: 'Builder' },
    ],
    gameMechanics: {
      rarity: 'Common',
      value: 10,
      power: 10,
      type: 'unit',
      suitBonus: {
        rallyBonus: '+1 march',
        chainBonus: '+1 power',
        battleBonus: '+1 vs. Tokens',
      },
    },
  },
  'Page of Nodes': {
    arcana: 'Minor',
    number: 11,
    suit: 'Nodes',
    rank: 'Page',
    cosmicRuler: 'Air/Earth (Mutable)',
    cosmicSummary: 'Curious builder experimenting with new stacks.',
    upright: 'Hackathon prodigy.',
    reversed: 'Half-finished side quests.',
    cryptoFlavor: 'Deploying first smart contract to testnet.',
    foresight: 'Prototype boldly.',
    educationalInsight:
      'Learning Stacks – Tutorials, starter kits, and mentoring accelerate new devs.',
    appIntegration:
      'Hackathon mode toggle with mentor chat; reversed shows abandoned repo warnings.',
    visualDescription:
      'A young developer surrounded by scattered dev boards joyfully deploys code that materializes into tiny hovering nodes. Reversed: the boards clutter, projects fading into ghostly tabs.',
    extendedReflection:
      "Every legendary dev started with curiosity and a 'hello world'. Encourage experiments; they feed the future.",
    strategy: 'Ship mini-projects, document learnings, seek code reviews.',
    bookChapter:
      "In the digital realm where code meets cosmos, Page of Nodes emerges as a beacon of air/earth (mutable) influence. Curious builder experimenting with new stacks. \n\nEvery legendary dev started with curiosity and a 'hello world'. Encourage experiments; they feed the future. \n\nWhen you gaze upon this card, a young developer surrounded by scattered dev boards joyfully deploys code that materializes into tiny hovering nodes. reversed: the boards clutter, projects fading into ghostly tabs. This imagery speaks to the practical wisdom embedded within the Nodes suit. \n\nIn its upright position, Page of Nodes reveals hackathon prodigy.. This is a time of deploying first smart contract to testnet.. \n\nWhen reversed, the card warns of half-finished side quests.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, learning stacks – tutorials, starter kits, and mentoring accelerate new devs. Understanding this concept is crucial for navigating the practical lessons this card offers. \n\nThe practical wisdom of Page of Nodes suggests: Ship mini-projects, document learnings, seek code reviews. \n\nLooking ahead, prototype boldly. \n\nPage of Nodes teaches us that in the world of crypto, daily practices shape our journey. Whether you're managing your portfolio, this card reminds you that leadership and mastery are your greatest assets. The blockchain never forgets, but it also never stops evolving. As part of the Nodes suit, this card reflects the creative and energetic aspects of your Web3 experience.",
    nftMetadata: [
      { trait_type: 'Role', value: 'Builder' },
      { trait_type: 'Energy', value: 'Exploratory' },
    ],
    gameMechanics: {
      rarity: 'Common',
      value: 11,
      power: 11,
      type: 'unit',
      suitBonus: {
        rallyBonus: '+1 march',
        chainBonus: '+1 power',
        battleBonus: '+1 vs. Tokens',
      },
      courtEffect: 'Draw 1 tech card',
    },
  },
  'Knight of Nodes': {
    arcana: 'Minor',
    number: 12,
    suit: 'Nodes',
    rank: 'Knight',
    cosmicRuler: 'Fire (Cardinal)',
    cosmicSummary: 'Ambitious deploys, rapid scaling, fearless pivots.',
    upright: 'Deploy warrior charging devops.',
    reversed: 'Move fast, break everything.',
    cryptoFlavor: 'Hotfixing a critical bug mid-launch.',
    foresight: 'Charge smart.',
    educationalInsight:
      'DevOps Velocity – Automation, rollback plans, and observability keep velocity safe.',
    appIntegration:
      'Deployment pipeline visualization with success meters; reversed shows cascading failure timeline.',
    visualDescription:
      'A fearless operator rides atop a rocket-powered deployment rig, launching patches into orbit while dashboards glow green. Reversed: the rig spirals, red alerts exploding around them.',
    extendedReflection: 'Speed thrills. Resilience sustains. The Knight must wield both.',
    strategy: 'Automate tests, keep rollbacks ready, communicate deployments.',
    bookChapter:
      "In the digital realm where code meets cosmos, Knight of Nodes emerges as a beacon of fire (cardinal) influence. Ambitious deploys, rapid scaling, fearless pivots. \n\nSpeed thrills. Resilience sustains. The Knight must wield both. \n\nWhen you gaze upon this card, a fearless operator rides atop a rocket-powered deployment rig, launching patches into orbit while dashboards glow green. reversed: the rig spirals, red alerts exploding around them. This imagery speaks to the practical wisdom embedded within the Nodes suit. \n\nIn its upright position, Knight of Nodes reveals deploy warrior charging devops.. This is a time of hotfixing a critical bug mid-launch.. \n\nWhen reversed, the card warns of move fast, break everything.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, devops velocity – automation, rollback plans, and observability keep velocity safe. Understanding this concept is crucial for navigating the practical lessons this card offers. \n\nThe practical wisdom of Knight of Nodes suggests: Automate tests, keep rollbacks ready, communicate deployments. \n\nLooking ahead, charge smart. \n\nKnight of Nodes teaches us that in the world of crypto, daily practices shape our journey. Whether you're managing your portfolio, this card reminds you that leadership and mastery are your greatest assets. The blockchain never forgets, but it also never stops evolving. As part of the Nodes suit, this card reflects the creative and energetic aspects of your Web3 experience.",
    nftMetadata: [
      { trait_type: 'Tempo', value: 'Fast' },
      { trait_type: 'Weapon', value: 'CI/CD' },
    ],
    gameMechanics: {
      rarity: 'Rare',
      value: 12,
      power: 12,
      type: 'unit',
      suitBonus: {
        rallyBonus: '+1 march',
        chainBonus: '+1 power',
        battleBonus: '+1 vs. Tokens',
      },
      courtEffect: '+2 march',
    },
  },
  'Queen of Nodes': {
    arcana: 'Minor',
    number: 13,
    suit: 'Nodes',
    rank: 'Queen',
    cosmicRuler: 'Water (Fixed)',
    cosmicSummary: 'Visionary leadership nurturing ecosystems and devs.',
    upright: 'Community-first protocol steward.',
    reversed: 'Emotional burnout leads to stagnation.',
    cryptoFlavor: 'Hosting dev-rel programs and grants.',
    foresight: 'Lead with heart.',
    educationalInsight:
      'Developer Relations – Documentation, support, and storytelling grow ecosystems sustainably.',
    appIntegration:
      'Dev hub with interactive docs and office hours; reversed shows support queue overload.',
    visualDescription:
      'A compassionate leader sits within a greenhouse of thriving nodes, coaching builders as vines of code blossom across the ceiling. Reversed: the greenhouse fogs, plants wilting without care.',
    extendedReflection:
      'Great queens cultivate talent, not just tech. Communities follow those who listen.',
    strategy: 'Fund education, uplift contributors, set healthy boundaries.',
    bookChapter:
      "In the digital realm where code meets cosmos, Queen of Nodes emerges as a beacon of water (fixed) influence. Visionary leadership nurturing ecosystems and devs. \n\nGreat queens cultivate talent, not just tech. Communities follow those who listen. \n\nWhen you gaze upon this card, a compassionate leader sits within a greenhouse of thriving nodes, coaching builders as vines of code blossom across the ceiling. reversed: the greenhouse fogs, plants wilting without care. This imagery speaks to the practical wisdom embedded within the Nodes suit. \n\nIn its upright position, Queen of Nodes reveals community-first protocol steward.. This is a time of hosting dev-rel programs and grants.. \n\nWhen reversed, the card warns of emotional burnout leads to stagnation.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, developer relations – documentation, support, and storytelling grow ecosystems sustainably. Understanding this concept is crucial for navigating the practical lessons this card offers. \n\nThe practical wisdom of Queen of Nodes suggests: Fund education, uplift contributors, set healthy boundaries. \n\nLooking ahead, lead with heart. \n\nQueen of Nodes teaches us that in the world of crypto, daily practices shape our journey. Whether you're managing your portfolio, this card reminds you that leadership and mastery are your greatest assets. The blockchain never forgets, but it also never stops evolving. As part of the Nodes suit, this card reflects the creative and energetic aspects of your Web3 experience.",
    nftMetadata: [
      { trait_type: 'Role', value: 'DevRel' },
      { trait_type: 'Aura', value: 'Empathy' },
    ],
    gameMechanics: {
      rarity: 'Epic',
      value: 13,
      power: 13,
      type: 'unit',
      suitBonus: {
        rallyBonus: '+1 march',
        chainBonus: '+1 power',
        battleBonus: '+1 vs. Tokens',
      },
      courtEffect: 'All allies +1 march',
    },
  },
  'King of Nodes': {
    arcana: 'Minor',
    number: 14,
    suit: 'Nodes',
    rank: 'King',
    cosmicRuler: 'Air/Fire (Sovereign)',
    cosmicSummary: 'Authoritative builder orchestrating multi-chain destiny.',
    upright: 'Architect of entire ecosystem.',
    reversed: 'Centralized ego chokehold.',
    cryptoFlavor: 'Strategizing multi-chain expansion.',
    foresight: 'Govern wisely.',
    educationalInsight:
      'Protocol Vision – Balancing innovation, decentralization, and partnerships for long-term dominance.',
    appIntegration:
      'Ecosystem control room with chain bridges and KPIs; reversed flashes monopoly and silo alerts.',
    visualDescription:
      'A commanding architect surveys holographic maps of interconnected chains, guiding flows with measured gestures as allies salute. Reversed: the maps constrict into a single tower, cutting off allies.',
    extendedReflection:
      'True kings empower successors and alliances. The ego that grips too tight strangles its own realm.',
    strategy: 'Share governance, bridge responsibly, champion open standards.',
    bookChapter:
      "In the digital realm where code meets cosmos, King of Nodes emerges as a beacon of air/fire (sovereign) influence. Authoritative builder orchestrating multi-chain destiny. \n\nTrue kings empower successors and alliances. The ego that grips too tight strangles its own realm. \n\nWhen you gaze upon this card, a commanding architect surveys holographic maps of interconnected chains, guiding flows with measured gestures as allies salute. reversed: the maps constrict into a single tower, cutting off allies. This imagery speaks to the practical wisdom embedded within the Nodes suit. \n\nIn its upright position, King of Nodes reveals architect of entire ecosystem.. This is a time of strategizing multi-chain expansion.. \n\nWhen reversed, the card warns of centralized ego chokehold.. The shadow aspect emerges, reminding us that every innovation carries risk, every protocol can be exploited, and every moon can become a rug. \n\nFrom a technical perspective, protocol vision – balancing innovation, decentralization, and partnerships for long-term dominance. Understanding this concept is crucial for navigating the practical lessons this card offers. \n\nThe practical wisdom of King of Nodes suggests: Share governance, bridge responsibly, champion open standards. \n\nLooking ahead, govern wisely. \n\nKing of Nodes teaches us that in the world of crypto, daily practices shape our journey. Whether you're managing your portfolio, this card reminds you that leadership and mastery are your greatest assets. The blockchain never forgets, but it also never stops evolving. As part of the Nodes suit, this card reflects the creative and energetic aspects of your Web3 experience.",
    nftMetadata: [
      { trait_type: 'Authority', value: 'Architect' },
      { trait_type: 'Scope', value: 'Multi-Chain' },
    ],
    gameMechanics: {
      rarity: 'Legendary',
      value: 14,
      power: 14,
      type: 'unit',
      suitBonus: {
        rallyBonus: '+1 march',
        chainBonus: '+1 power',
        battleBonus: '+1 vs. Tokens',
      },
      courtEffect: 'Doubles next effect',
    },
  },
};
