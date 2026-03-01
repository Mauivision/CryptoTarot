# Crypto Tarot - TODO List

## 🚨 HIGH PRIORITY - Safety & Legal

### ✅ Launch-Blocking Tasks (Completed)

- [x] **Add Disclaimer Banner** (persistent top-of-page warning with localStorage dismissal)
- [x] **Create Terms of Service Page** (linked in footer)
- [x] **Create Privacy Policy Page** (linked in footer)
- [x] **Add Safety Warnings** (fortune section, card draw CTA, modal copy)

---

## 🎨 User Experience Enhancements

### Reading Features

- [x] **Reading History** (localStorage store & modal viewer with delete/copy)
- [x] **Multiple Spread Types** (1-card, 3-card, 5-card with spread selector)
- [x] **Card Combinations** (analysis + highlight bubbles)
- [ ] **Share Reading** (expand beyond history copy to primary UI share/export)

### Visual Improvements

- [x] **Card Animations** (shuffle ripple, flip easing, staggered entry)
- [x] **Theme Customization** (dark/light toggle + contrast audit)
- [x] **Loading States** (skeleton deck holders, fortune shimmer, lazy gallery)
- [ ] **Card Artwork Refresh** (priority majors + minor palette pass) ↑ focus

---

## 🎮 Fun Entertainment Features

### Interactive Elements

- [ ] **Card Sound Effects** (shuffle/flip/draw + mute toggle)
- [ ] **Particle Effects** (sparkles, glow passes, animated backgrounds)
- [ ] **Easter Eggs** (rare combo callouts, achievements)

### Gamification (Local Only)

- [ ] **Card Collection** (track drawn cards, stats)
- [ ] **Daily Reading** (streak tracker, rewards)
- [ ] **Reading Journal** (notes + reflections per saved reading)

---

## 🔧 Technical Improvements

### Performance

- [x] **Optimize Images – Phase 1** (lazy load gallery, shimmer states)
- [ ] **Optimize Images – Phase 2** (SVG compression, WebP options)
- [ ] **Code Optimization** (bundle audit, tree-shake, minify)
- [ ] **Service Worker** (offline/PWA shell)

### Accessibility

- [ ] **ARIA Labels** (audit remaining interactive elements)
- [ ] **Keyboard Navigation** (tab order, focus rings, skip links)
- [ ] **Screen Reader Support** (semantics, live regions)
- [ ] **Visual Accessibility** (font scaling controls, high-contrast toggle)

### Mobile

- [ ] **Touch Gestures** (swipe-to-flip, haptics)
- [ ] **Mobile Optimization** (touch target QA, responsive type refinements)

---

## 📚 Educational Content

- [ ] **Crypto Education Enhancements** (learn-more buttons, glossary integration)
- [ ] **Tutorial System** (guided spread intro, practice mode)
- [ ] **Card Meanings Quiz** (knowledge check mini-game)

---

## 🎯 Quick Wins (Status)

1. **Disclaimer Banner** – ✅ shipped
2. **Reading Counter** – ◻ (surface count in UI)
3. **Copy Reading Text** – ⚠ partial (history modal done; elevate to main flow)
4. **Theme Toggle** – ✅ shipped
5. **Card Flip Sound** – ◻ pending

---

## 📋 Implementation Order (Updated)

### Phase 1: Print & Visual Polish

1. Priority Major Arcana art refresh + `assets/cardmap.json`
2. Typography/book export QA (pandoc PDF after font install)
3. Final mobile/browser sweep + analytics wiring (Plausible/GA)

### Phase 2: Sharing & Export

1. Expand share/export options (primary UI, PDF/text)
2. Reading counter & enhanced quick-copy flows
3. Prep marketing hand-off (Launch Day 1 assets)

### Phase 3: Engagement Features

1. Card collection + daily reading loop
2. Particle/sound effects toggle set
3. Easter eggs & Oracle Challenge quests

### Phase 4: Platform Polish

1. Performance/SVG compression
2. Accessibility & mobile gesture layers
3. Service worker / PWA, crypto education expansions

---

## ✅ Completed Highlights

- [x] 78-card deck creation & SVG assets
- [x] Interactive fortune teller, spreads, combos, history
- [x] Light/dark theme system with contrast-safe palettes
- [x] Companion book HTML & regeneration pipeline
- [x] Asset verification tooling (`tools/verify-deck-assets.mjs`)

---

**Remember: Entertainment only. Safety first. Fun always. 🎴✨**
