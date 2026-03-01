# 🧪 Crypto Tarot - Localhost Testing Guide

## ✅ Server Status

**Server is running on:** http://localhost:8000

---

## 🎴 Main Game Testing

### **1. Fortune Teller (Main App)**

**URL:** http://localhost:8000/index.html

#### Test Steps:

1. ✅ **Page Loads**
   - Check page renders without errors
   - Verify disclaimer banner appears
   - Check theme toggle works (dark/light)

2. ✅ **Draw Cards**
   - Enter a question (optional): "What does my crypto future hold?"
   - Select spread type: 1, 3, or 5 cards
   - Click "Draw Cards" button
   - Verify cards appear face-down

3. ✅ **Flip Cards**
   - Click each card individually
   - Verify flip animation works (180° rotation)
   - Check card image displays correctly
   - Verify card meaning appears below card
   - Check cosmic data displays (if available)

4. ✅ **Card Meanings**
   - Verify upright/reversed meanings show correctly
   - Check meaning text is readable
   - Verify cosmic correspondences display
   - Check card position (Past/Present/Future) shows

5. ✅ **Multiple Spreads**
   - Try 1-card spread
   - Try 3-card spread (Past/Present/Future)
   - Try 5-card spread
   - Verify different cards are drawn each time

---

### **2. Card Encyclopedia**

**URL:** http://localhost:8000/crypto-tarot-encyclopedia.html

#### Test Steps:

1. ✅ **Gallery Display**
   - Verify all 78 cards display
   - Check images load correctly
   - Verify card titles are visible

2. ✅ **Filtering**
   - Click "All Cards" - shows all 78
   - Click "Major Arcana" - shows 22 cards
   - Click "Minor Arcana" - shows 56 cards
   - Verify filter buttons work correctly

3. ✅ **Card Click**
   - Click any card
   - Verify modal opens
   - Check card details display:
     - Card image
     - Title and orientation
     - Upright meaning
     - Reversed meaning
     - Cosmic correspondences
     - Educational insights

4. ✅ **Shuffle Button**
   - Click shuffle button
   - Verify cards reorder
   - Check visual feedback (button animation)

---

### **3. Individual Card Detail**

**URL:** http://localhost:8000/card-detail.html?id=The%20HODLer

#### Test Steps:

1. ✅ **Card Loads**
   - Verify card image displays
   - Check all card data shows:
     - Title, number, arcana type
     - Upright meaning
     - Reversed meaning
     - Cosmic ruler and summary
     - Visual description
     - Extended reflection
     - Strategy
     - Book chapter (if available)
     - Game mechanics (if available)

2. ✅ **Try Different Cards**
   - Change URL: `?id=The%20Miner`
   - Change URL: `?id=Ace%20of%20Tokens`
   - Verify each card loads correctly

---

## 🎮 Game Mechanics Testing

### **Run in Terminal:**

```bash
# Test all game mechanics
npm run game:test

# Check game balance
npm run game:balance
```

### **Expected Results:**

- ✅ All 78 cards have `gameMechanics` properties
- ✅ Major Arcana have: `rarity`, `spellUpright`, `spellReversed`, `energyCost`, `type`
- ✅ Minor Arcana have: `rarity`, `value`, `power`, `suitBonus`, `courtEffect`/`aceEffect`, `type`
- ✅ Rarity distribution is balanced
- ✅ No syntax errors

---

## 🐛 Common Issues & Fixes

### **Cards Not Loading?**

- Check browser console (F12) for errors
- Verify `data/card-meanings.js` loads: `node -c data/card-meanings.js`
- Check images exist in `tools/CryptoTarot1-78/`

### **Card Images Not Showing?**

- Run: `npm run generate:cardmap`
- Check `assets/cardmap.json` exists
- Verify image paths in browser DevTools Network tab

### **Card Meanings Not Displaying?**

- Check browser console for JavaScript errors
- Verify `CARD_MEANINGS` object loads correctly
- Check card title matches exactly (case-sensitive)

### **Flip Animation Not Working?**

- Check CSS is loaded: `styles.css`
- Verify `.reading-card.flipping` class is applied
- Check browser supports CSS transforms

---

## ✅ Testing Checklist

### **Basic Functionality:**

- [ ] Page loads without errors
- [ ] Cards can be drawn
- [ ] Cards flip correctly
- [ ] Meanings display properly
- [ ] Images load correctly
- [ ] Filter buttons work
- [ ] Shuffle button works
- [ ] Theme toggle works

### **Card Data:**

- [ ] All 78 cards accessible
- [ ] Card meanings display
- [ ] Cosmic data shows
- [ ] Game mechanics present
- [ ] Images match cards

### **User Experience:**

- [ ] Animations smooth
- [ ] Text readable
- [ ] Layout responsive
- [ ] No console errors
- [ ] Fast loading times

---

## 📊 Performance Checks

1. **Page Load Time**
   - Should load in < 2 seconds
   - Check Network tab in DevTools

2. **Image Loading**
   - Images should lazy load
   - Check IntersectionObserver works

3. **Card Flip Animation**
   - Should be smooth (60fps)
   - No jank or stuttering

---

## 🎯 What to Test Right Now

1. **Open:** http://localhost:8000
2. **Click:** "Draw Cards"
3. **Click:** Each card to flip
4. **Verify:** Meanings appear correctly
5. **Try:** Different spread types
6. **Browse:** Card encyclopedia
7. **Check:** All 78 cards display

---

**Server is running!** Open http://localhost:8000 and start testing! 🎴✨
