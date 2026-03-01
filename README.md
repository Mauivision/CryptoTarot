# 🔮 Crypto Tarot - Fortune Teller's Palace

A mystical, interactive tarot card reading experience with crypto-themed cards. For entertainment purposes only - not financial advice!

> **🌟 Utopia Achieved!** This project features a perfectly organized structure. See [`UTOPIA-GUIDE.md`](./UTOPIA-GUIDE.md) for the complete guide and [`PROJECT-MANIFEST.json`](./PROJECT-MANIFEST.json) for the full project manifest.

## ✨ Features

- **Complete 78-card deck** with enriched meanings and visual lore
- **Single-page fortune teller**: multi-spread draws, combos, and history in one view
- **Custom card images**: supports multiple variants per card (AI & hand-crafted)
- **Cosmic correspondences**: planets, numerology, educational snippets
- **Launch-ready hooks**: countdown component, analytics stub, waitlist CTA
- **Documentation & side projects** organized under `docs/`, `launch/`, `chain-game/`, `moon-forge/`, `print/`

## 🚀 Quick Start

### Local Development

1. **Start a local server** (choose one):

   ```bash
   # Python 3
   python -m http.server 8000

   # Node.js (if you have http-server installed)
   npx http-server -p 8000
   ```

2. **Open in browser**:

   ```
   http://localhost:8000
   ```

3. **Navigate**:
   - `index.html` – Main reading experience with countdown
   - `crypto-tarot-encyclopedia.html` – Complete card dictionary
   - `card-detail.html?id=The%20HODLer` – Detailed single-card page
   - `docs/PROJECT-PLAN.md` – Development plan & checklist

## 📁 Project Structure

```
CryptoTarot/
├── index.html                  # Main landing page
├── fortune-teller.html         # Fortune teller page
├── card-game.html              # Chain game mechanics
├── card-detail.html            # Card detail view
├── crypto-tarot-encyclopedia.html
├── script.js                   # Main application logic
├── card-detail.js              # Card detail logic
├── styles.css                  # All styling
│
├── data/                       # Card data
│   ├── card-meanings.js        # Canonical card metadata (78 cards)
│   └── crypto-education.js    # Educational content
│
├── js/                         # JavaScript modules
│   ├── ai-service.js           # AI integration
│   ├── card-combinations.js     # Card combination logic
│   ├── cosmic-data.js          # Cosmic correspondences
│   ├── enhanced-effects.js      # Visual effects
│   ├── fortune-teller-content.js
│   ├── reading-history.js      # Reading history
│   ├── shuffle-randomizer.js   # Shuffle algorithm
│   └── spread-types.js         # Spread definitions
│
├── scripts/                    # Build & utility scripts
│   ├── build/                  # Build scripts
│   │   ├── generate-cardmap.js
│   │   ├── update-cardmap-jpg.mjs
│   │   └── generate-*.mjs
│   ├── game/                   # Game mechanics
│   │   ├── add-game-mechanics-v2.mjs
│   │   ├── test-game-mechanics.mjs
│   │   └── test-game-balance.mjs
│   ├── export/                 # Export scripts
│   │   ├── export-pdf-puppeteer.mjs
│   │   └── convert-to-markdown.mjs
│   ├── fix/                    # Fix scripts (archived)
│   └── utils/                  # Utilities
│
├── assets/                     # Static assets
│   ├── cards/                  # Card images (78 SVG + variants)
│   ├── cardmap.json            # Image mapping
│   └── card-back.svg           # Card back design
│
├── tools/                       # Development tools
│   └── CryptoTarot1-78/        # JPG card images (135 files)
│
├── docs/                       # Documentation
│   ├── guides/                 # User guides
│   │   ├── QUICK-START.md
│   │   ├── START-HERE.md
│   │   ├── PROJECT-SETUP.md
│   │   └── TESTING-GUIDE.md
│   ├── status/                 # Status reports
│   │   ├── PROJECT-STATUS-CURRENT.md
│   │   └── PROJECT-STATUS.md
│   ├── development/            # Dev docs
│   │   ├── PROJECT-PLAN.md
│   │   ├── ROADMAP.md
│   │   ├── TODO.md
│   │   ├── MASTER-PLAN.md
│   │   └── IDEAS.md
│   └── INDEX.md                # Documentation index
│
├── chain-game/                  # Chain game documentation
├── print/                       # Book exports
├── archive/                     # Legacy files
└── tests/                       # Test files
```

## 🎴 How to Use

1. **Get a Reading**:
   - Open `index.html`
   - Enter your question (optional)
   - Click “Draw Cards” to deal a random spread (1, 3, or 5 cards)
   - Reveal each card, then read the synthesized interpretation

2. **Browse Cards**:
   - Use `crypto-tarot-encyclopedia.html` for the full reference
   - Open `card-detail.html?id=Card%20Name` for a focused layout

3. **Add Custom Images**:
   - Place images in `tools/CryptoTarot1-78/`
   - Run: `node scripts/import-custom-images.js`
   - Images will be organized in `assets/cards/ai-generated/`

## 🛠️ Development

### Regenerate Card Map

```bash
node scripts/generate-cardmap.js
```

### Update Card Descriptions

```bash
node scripts/add-detailed-descriptions.js
```

### Import Custom Images

```bash
node scripts/import-custom-images.js
```

## 📝 Notes

- **Entertainment Only**: This is for fun and entertainment purposes
- **Not Financial Advice**: Never use tarot readings for investment decisions
- **DYOR**: Always Do Your Own Research in crypto
- **Custom Images**: The system automatically uses custom images when available, falls back to SVGs
- **Idea Library**: See `docs/IDEAS.md` for active concept lists across the whole project

## 🎨 Design

- **Theme**: Fortune Teller's Palace - mystical, warm, gold/purple palette
- **Typography**: Crimson Text serif font for elegant, readable text
- **Animations**: Smooth transitions, fade-ins, and 3D card flips
- **Responsive**: Works on desktop, tablet, and mobile

## 📄 License

For entertainment purposes only. Not financial advice.

---

**Remember**: The blockchain never lies, but it also never stops teaching those who listen. 🔮✨
