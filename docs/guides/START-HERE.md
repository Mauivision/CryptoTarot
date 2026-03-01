# 🚀 Crypto Tarot - Start Here

## Quick Start Guide

### 1. **Start the Web Application**

Open the fortune teller in your browser:

```bash
# Option 1: Python (if installed)
python -m http.server 8000

# Option 2: Node.js (if http-server installed)
npx http-server -p 8000

# Option 3: Just open index.html directly in your browser
# (Some features may be limited without a server)
```

Then visit: **http://localhost:8000**

---

## 🎴 What You Can Do

### **Main Features:**

1. **Get a Fortune Reading**
   - Open `index.html`
   - Enter a question (optional)
   - Click "Draw Cards" to get a 1, 3, or 5 card spread
   - Click each card to flip and read meanings

2. **Browse All Cards**
   - Visit `crypto-tarot-encyclopedia.html` for the full deck
   - Click any card to see detailed meanings

3. **View Individual Cards**
   - Open `card-detail.html?id=The%20HODLer`
   - Replace card name in URL to view different cards

---

## 🎮 Testing Game Mechanics

### **Run Game Tests:**

```bash
# Test all card game mechanics
npm run game:test

# Analyze game balance
npm run game:balance

# Add/update game mechanics (if needed)
npm run game:add-mechanics
```

### **What Gets Tested:**

- ✅ All 78 cards have `gameMechanics` properties
- ✅ Rarity distribution (Genesis, Common, Rare, Epic, Legendary)
- ✅ Major Arcana spells (upright/reversed)
- ✅ Minor Arcana values, power, suit bonuses
- ✅ Game balance and power distribution

---

## 📁 Key Files & Directories

```
CryptoTarot/
├── index.html                    # 🎯 START HERE - Main fortune teller
├── crypto-tarot-encyclopedia.html  # Browse all 78 cards
├── card-detail.html             # Individual card details
├── script.js                    # Main application logic
├── styles.css                   # Styling
├── data/
│   └── card-meanings.js         # All 78 cards with full data
├── js/                          # Utility modules
│   ├── spread-types.js          # Card spread logic
│   ├── reading-history.js       # Reading history
│   └── ai-service.js            # AI reading integration
├── chain-game/                  # Chain Game documentation
│   ├── README.md               # Game rules
│   └── REFERENCE.md            # Quick reference
└── scripts/                     # Build/utility scripts
    ├── test-game-mechanics.mjs  # Test game properties
    └── test-game-balance.mjs    # Balance analysis
```

---

## 🛠️ Development Commands

```bash
# Format code
npm run format

# Check formatting
npm run format:check

# Generate card map
npm run generate:cardmap

# Generate book
npm run generate:book
```

---

## 🎯 Recommended First Steps

### **1. Test the Web Game (5 minutes)**

1. Start server: `python -m http.server 8000`
2. Open: http://localhost:8000
3. Click "Draw Cards"
4. Click each card to flip and read meanings
5. Try different spread types (1, 3, or 5 cards)

### **2. Browse the Cards (10 minutes)**

1. Open `crypto-tarot-encyclopedia.html`
2. Filter by Major/Minor Arcana
3. Click cards to see full details
4. Check out the cosmic correspondences

### **3. Test Game Mechanics (5 minutes)**

```bash
npm run game:test
npm run game:balance
```

### **4. Explore Chain Game Rules (15 minutes)**

1. Read `chain-game/README.md` for full rules
2. Check `chain-game/REFERENCE.md` for quick reference
3. Review card mechanics in `data/card-meanings.js`

---

## 📊 Current Project Status

✅ **Complete:**

- All 78 cards with full meanings
- Card flipping and reading functionality
- Game mechanics for Chain Game
- Image system with hash-based variant selection
- Comprehensive documentation

✅ **Ready to Use:**

- Fortune teller web app
- Card gallery and filtering
- Game mechanics testing
- Book generation

---

## 🎨 Customization

### **Add Custom Card Images:**

1. Place images in `tools/CryptoTarot1-78/`
2. Run: `npm run generate:cardmap`
3. Images will be automatically linked

### **Update Card Meanings:**

1. Edit `data/card-meanings.js`
2. Run: `npm run format` to format
3. Refresh browser to see changes

---

## 🐛 Troubleshooting

### **Cards not loading?**

- Check browser console for errors
- Verify `data/card-meanings.js` syntax: `node -c data/card-meanings.js`

### **Images not showing?**

- Run: `npm run generate:cardmap`
- Check images exist in `tools/CryptoTarot1-78/`

### **Game mechanics missing?**

- Run: `npm run game:add-mechanics`
- Then: `npm run game:test`

---

## 📚 Next Steps

1. **Test the web game** - Make sure card flipping works
2. **Review game mechanics** - Understand Chain Game rules
3. **Customize cards** - Add your own images or meanings
4. **Build the Chain Game** - Implement the game logic
5. **Generate the book** - Create PDF version

---

## 💡 Quick Tips

- **Card Images**: Use `.jpg` format in `tools/CryptoTarot1-78/`
- **Card IDs**: Use `fileSafe()` function for consistent naming
- **Meanings**: All card data is in `data/card-meanings.js`
- **Game Rules**: See `chain-game/README.md`

---

**Ready to start?** Open `index.html` and draw your first cards! 🎴✨
