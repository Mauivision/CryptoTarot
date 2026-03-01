# 🥚 Crypto Tarot - Interactive Easter Eggs

**Last Updated:** 2025-01-15
**Status:** Design Document

---

## 🎯 Overview

Interactive easter eggs in the main app that are triggered by Moon-Forge Saga progress and other special conditions.

---

## 🌙 Moon-Forge Saga Easter Eggs

### Episode 5: Heart of the Oracle

#### Trigger: Complete Episode 5

- **Location:** Card detail page
- **Effect:** Unlock "Oracle's Wisdom" card variant
- **Visual:** Special card back design with Oracle's heart glow
- **Reward:** Exclusive card variant

#### Secret Code: "ORACLE"

- **Location:** Fortune teller question input
- **Effect:** Special reading with Oracle's guidance
- **Frequency:** Once per user
- **Content:** Enhanced reading with Oracle's wisdom

#### Hidden Feature: Oracle's Echo

- **Location:** Main page (hidden)
- **Trigger:** Click on cosmic journey card 5 times
- **Effect:** Play Episode 5 voice line
- **Visual:** Subtle glow effect

---

## 🎴 Card-Specific Easter Eggs

### The HODLer

- **Trigger:** Hold card for 10 seconds
- **Effect:** Special "Diamond Hands" animation
- **Reward:** Unlock HODLer achievement

### The Miner

- **Trigger:** Click card 3 times rapidly
- **Effect:** Mining animation with block rewards
- **Reward:** Unlock Miner badge

### The Oracle

- **Trigger:** Enter "ORACLE" in search
- **Effect:** Reveal hidden Oracle wisdom
- **Reward:** Access to Oracle's insights

### The Tower Hack

- **Trigger:** Draw Tower card 3 times in a row
- **Effect:** Special "Hack" animation
- **Reward:** Unlock Tower achievement

---

## 🎮 Chain Game Easter Eggs

### Genesis Card Unlock

- **Trigger:** Win 10 Chain Game matches
- **Effect:** Unlock Genesis card variant
- **Reward:** Special Genesis artwork

### Perfect Game

- **Trigger:** Win with 21 chain score exactly
- **Effect:** Special victory animation
- **Reward:** "Perfect Chain" achievement

### Rarity Collection

- **Trigger:** Collect all 5 rarity levels
- **Effect:** Unlock "Rarity Master" badge
- **Reward:** Special card back design

---

## 🔮 Fortune Teller Easter Eggs

### Secret Spread

- **Trigger:** Enter "MOONFORGE" as question
- **Effect:** Special Moon-Forge themed spread
- **Reward:** Episode-themed reading

### Perfect Reading

- **Trigger:** Draw all Major Arcana in one session
- **Effect:** Special "Complete Arcana" animation
- **Reward:** Unlock "Arcana Master" achievement

### Time-Based

- **Trigger:** Use fortune teller at midnight
- **Effect:** Special "Midnight Oracle" reading
- **Reward:** Exclusive card variant

---

## 🎨 Visual Easter Eggs

### Background Animation

- **Trigger:** Idle for 30 seconds
- **Effect:** Subtle blockchain particle effects
- **Visual:** Floating data particles

### Card Flip Sequence

- **Trigger:** Flip cards in specific order
- **Effect:** Special combo animation
- **Reward:** Unlock combo achievement

### Color Scheme

- **Trigger:** Click theme toggle 7 times
- **Effect:** Unlock "Cosmic" color scheme
- **Reward:** New theme option

---

## 🔗 Integration Points

### Main App (`index.html`)

- Easter egg detection in `script.js`
- Special animations in `styles.css`
- Achievement tracking in `js/reading-history.js`

### Fortune Teller (`fortune-teller.html`)

- Secret code detection
- Special spread handling
- Episode integration

### Card Detail (`card-detail.html`)

- Card-specific easter eggs
- Variant unlocking
- Achievement display

---

## 📝 Implementation Notes

### Detection Logic

```javascript
// Example: Oracle code detection
function checkEasterEggs(input) {
  if (input.toLowerCase() === 'oracle') {
    triggerOracleEasterEgg();
  }
  if (input.toLowerCase() === 'moonforge') {
    triggerMoonForgeSpread();
  }
}
```

### Achievement System

- Store achievements in localStorage
- Display in user profile
- Unlock rewards based on achievements

### Episode Integration

- Track episode completion
- Unlock episode-specific features
- Link to Moon-Forge content

---

## 🎯 Future Easter Eggs

### Planned Features

- [ ] Seasonal easter eggs (holidays, events)
- [ ] Community easter eggs (user-submitted)
- [ ] ARG-style puzzles
- [ ] Hidden card variants
- [ ] Secret achievements

---

**Status:** Design Document
**Next Steps:** Implement detection logic, create animations, add achievement system
