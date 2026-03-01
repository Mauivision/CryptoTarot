(() => {
  const SIGN_DATA = {
    Aries: { element: 'Fire', modality: 'Cardinal' },
    Taurus: { element: 'Earth', modality: 'Fixed' },
    Gemini: { element: 'Air', modality: 'Mutable' },
    Cancer: { element: 'Water', modality: 'Cardinal' },
    Leo: { element: 'Fire', modality: 'Fixed' },
    Virgo: { element: 'Earth', modality: 'Mutable' },
    Libra: { element: 'Air', modality: 'Cardinal' },
    Scorpio: { element: 'Water', modality: 'Fixed' },
    Sagittarius: { element: 'Fire', modality: 'Mutable' },
    Capricorn: { element: 'Earth', modality: 'Cardinal' },
    Aquarius: { element: 'Air', modality: 'Fixed' },
    Pisces: { element: 'Water', modality: 'Mutable' },
  };

  const MAJOR_INFO = {
    'The HODLer': {
      anchor: 'Uranus',
      keywords: 'Quantum leaps • Trust the unknown airflow',
      element: 'Air',
      modality: 'Fixed',
      numerology: '0 • Infinite potential · Begin again',
      window: 'Aquarius current · Freedom & invention',
    },
    'The Miner': {
      anchor: 'Mercury',
      keywords: 'Skill manifestation • Code as magic',
      element: 'Air',
      modality: 'Mutable',
      numerology: '1 • Focused will · Direct the flow',
      window: 'Mercury circuit · Gemini/Virgo dexterity',
    },
    'The Oracle': {
      anchor: 'Moon',
      keywords: 'Hidden data • Intuitive security checks',
      element: 'Water',
      modality: 'Cardinal',
      numerology: '2 • Duality · Sacred balance',
      window: 'Cancer veil · Lunar wisdom',
    },
    'The Empress Node': {
      anchor: 'Venus',
      keywords: 'Network abundance • Nurture ecosystems',
      element: 'Earth',
      modality: 'Fixed',
      numerology: '3 • Fertility · Creative growth',
      window: 'Taurus garden · Sensual stewardship',
    },
    'The Emperor Chain': {
      anchor: 'Mars',
      keywords: 'Command protocols • Strategic authority',
      element: 'Fire',
      modality: 'Cardinal',
      numerology: '4 • Structure · Sovereign order',
      window: 'Aries stronghold · Courage & initiative',
    },
    'The Hierophant Whale': {
      anchor: 'Venus',
      keywords: 'Legacy liquidity • Collective doctrines',
      element: 'Earth',
      modality: 'Fixed',
      numerology: '5 • Tradition · Decode the keys',
      window: 'Taurus rite · Guardianship of value',
    },
    'The Lovers Fork': {
      anchor: 'Mercury',
      keywords: 'Merged ledgers • Partnership diplomacy',
      element: 'Air',
      modality: 'Mutable',
      numerology: '6 • Harmony · Conscious choices',
      window: 'Gemini lattice · Union & alignment',
    },
    'The Chariot Pump': {
      anchor: 'Moon',
      keywords: 'Drive the mission • Protective momentum',
      element: 'Water',
      modality: 'Cardinal',
      numerology: '7 • Determination · Aligned willpower',
      window: 'Cancer shell · Victory through focus',
    },
    'Strength HODL': {
      anchor: 'Sun',
      keywords: 'Heart conviction • Courageous holding',
      element: 'Fire',
      modality: 'Fixed',
      numerology: '8 • Inner power · Sustain the flame',
      window: 'Leo pride · Bravery with grace',
    },
    'The Hermit Dev': {
      anchor: 'Mercury',
      keywords: 'Audit lantern • Solitary code quests',
      element: 'Earth',
      modality: 'Mutable',
      numerology: '9 • Wisdom · Integrate experience',
      window: 'Virgo sanctum · Analytical insight',
    },
    'Wheel of Fortune Cycle': {
      anchor: 'Jupiter',
      keywords: 'Market cycles • Expansive luck windows',
      element: 'Fire',
      modality: 'Mutable',
      numerology: '10 • Destiny wheel · Embrace change',
      window: 'Sagittarius arc · Fortune in motion',
    },
    'Justice Ledger': {
      anchor: 'Venus',
      keywords: 'Balanced contracts • Ethical settlements',
      element: 'Air',
      modality: 'Cardinal',
      numerology: '11 • Equilibrium · Calibrate truth',
      window: 'Libra scales · Harmony through law',
    },
    'The Hanged Man Flip': {
      anchor: 'Neptune',
      keywords: 'Perspective shift • Surrender for insight',
      element: 'Water',
      modality: 'Mutable',
      numerology: '12 • Pause · See from above',
      window: 'Pisces tide · Mystic suspension',
    },
    'Death Rug': {
      anchor: 'Pluto',
      keywords: 'Total reset • Compost the old protocol',
      element: 'Water',
      modality: 'Fixed',
      numerology: '13 • Transformation · Release & renew',
      window: 'Scorpio gate · Power of rebirth',
    },
    'Temperance Mix': {
      anchor: 'Jupiter',
      keywords: 'Alchemy flow • Cross-chain harmony',
      element: 'Fire',
      modality: 'Mutable',
      numerology: '14 • Alchemy · Blend for balance',
      window: 'Sagittarius cauldron · Measured expansion',
    },
    'The Devil Scam': {
      anchor: 'Saturn',
      keywords: 'Binding loops • Tempting leverage traps',
      element: 'Earth',
      modality: 'Cardinal',
      numerology: '15 • Shadow · Recognize attachments',
      window: 'Capricorn vault · Discipline vs obsession',
    },
    'The Tower Hack': {
      anchor: 'Mars',
      keywords: 'Sudden breach • Shock-driven clarity',
      element: 'Fire',
      modality: 'Cardinal',
      numerology: '16 • Revelation · Break the shell',
      window: 'Mars strike · Radical awakening',
    },
    'The Star Airdrop': {
      anchor: 'Uranus',
      keywords: 'Signal of hope • Future-forward gifts',
      element: 'Air',
      modality: 'Fixed',
      numerology: '17 • Inspiration · Align with vision',
      window: 'Aquarius beacon · Innovation & trust',
    },
    'The Moon Illusion': {
      anchor: 'Moon',
      keywords: 'Dream logic • Navigate FUD fog',
      element: 'Water',
      modality: 'Mutable',
      numerology: '18 • Subconscious · Honor intuition',
      window: 'Pisces dreamscape · Night-side guidance',
    },
    'The Sun Bull': {
      anchor: 'Sun',
      keywords: 'Radiant success • Visibility & vitality',
      element: 'Fire',
      modality: 'Fixed',
      numerology: '19 • Vitality · Shine with integrity',
      window: 'Leo radiance · Joy & confidence',
    },
    'Judgment Halving': {
      anchor: 'Pluto',
      keywords: 'Call to awaken • Ledger renewal',
      element: 'Fire',
      modality: 'Cardinal',
      numerology: '20 • Awakening · Answer the signal',
      window: 'Plutonian horn · Resurrection code',
    },
    'The World Ecosystem': {
      anchor: 'Saturn',
      keywords: 'Integrated network • Completion & stewardship',
      element: 'Earth',
      modality: 'Fixed',
      numerology: '21 • Completion · Master the system',
      window: 'Saturn ring · Whole systems view',
    },
  };

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
        keywords: 'Overthinking loops · Practice compassion',
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

  function getCosmicData(title) {
    if (MAJOR_INFO[title]) {
      return MAJOR_INFO[title];
    }

    if (!title.includes(' of ')) return null;

    const [rank, suit] = title.split(' of ');
    const suitInfo = SUIT_FALLBACKS[suit];
    if (!suitInfo) return null;

    const numerology = NUMEROLOGY_TEXT[rank] || COURT_NUMEROLOGY[rank] || '';
    const decan = MINOR_DECANS[suit]?.[rank];

    let element = suitInfo.element;
    let modality = suitInfo.modality;
    let anchor = suitInfo.anchor;
    let window = suitInfo.window;
    let keywords = suitInfo.keywords;

    if (decan) {
      const signInfo = SIGN_DATA[decan.sign];
      element = signInfo.element;
      modality = signInfo.modality;
      anchor = decan.ruler;
      window = `${decan.sign} ${decan.window}`;
      keywords = `${decan.keywords} • ${suitInfo.keywords}`;
    }

    return { anchor, keywords, element, modality, numerology, window };
  }

  window.CosmicLibrary = window.CosmicLibrary || {};
  window.CosmicLibrary.getCosmicData = getCosmicData;
})();
