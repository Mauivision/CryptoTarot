# Crypto Tarot: Master Plan

**Last Updated:** November 2025  
**Status:** Launch-ready core app; print & polish in progress

---

## 📊 Executive Summary

**Project Vision:** A mystical, interactive 78-card crypto-themed tarot experience with companion book, strategy game spin-off, and narrative saga.

**Current State:**

- ✅ Core fortune teller app complete (multi-spread, history, combos, analytics stub)
- ✅ 78-card deck fully enriched with cosmic data, visuals, NFT metadata
- ✅ Asset verification & regeneration pipeline documented
- ✅ Fortune-reading UX refreshed (structured sections, chips, copy/share hooks)
- ✅ Light/dark theme system with contrast-adjusted palettes
- 🚧 Phase 3 visual polish in progress (remaining: art refresh, typography QA, gallery lazy loading)
- 📋 Print deliverables pending (PDF export, printer specs)
- 🎮 Chain Game & Moon-Forge tracks documented, awaiting execution

**Next Milestones:**

1. Complete Phase 3 visual polish (card art refresh, typography QA, gallery lazy loading)
2. Export print-ready PDF and finalize printer order
3. Build Chain Game reference assets
4. Script Moon-Forge Episode 5

---

## 🎯 Priority Tracks (Ordered by Launch Readiness)

### Track 1: Core App Launch (95% Complete)

**Goal:** Production-ready fortune teller with polished UX

#### Completed ✅

- [x] 78-card deck with enriched metadata
- [x] Multi-spread support (1, 3, 5 cards)
- [x] Reading history & sharing
- [x] Card combinations analysis
- [x] Launch countdown & analytics stub
- [x] Safety disclaimers & legal pages
- [x] Ambient audio toggle & aurora background
- [x] Loading skeleton states
- [x] Fortune reading layout overhaul (position chips, lore accordion, copy/open actions)

#### In Progress 🚧

- [ ] **Typography fine-tuning** (book export QA, final pass)
- [ ] **Lazy-load gallery images** (performance optimization)

#### Pending 📋

- [ ] Wire analytics stub to chosen platform (Plausible/GA)
- [ ] Final mobile QA pass
- [ ] Social sharing feature (text export)

**Owner:** Core dev  
**Timeline:** 1-2 weeks to completion

---

### Track 2: Book & Print Deliverables (60% Complete)

**Goal:** Print-ready companion book + physical deck order

#### Completed ✅

- [x] Book HTML generated (`print/book/book-of-descriptions.html`)
- [x] Asset verification workflow documented
- [x] Print README with Pandoc command & email template

#### Pending 📋

- [ ] **Install required fonts** (`Crimson Text`, `Fira Code`, `Helvetica Neue`)
- [ ] **Run Pandoc export** → `CryptoTarot_Companion.pdf`
- [ ] **QA PDF** (TOC links, margins, contrast, page numbers)
- [ ] **Collect printer specs** (card stock, dielines, packaging quotes)
- [ ] **Finalize order template** (append to `print/README.md`)

**Owner:** Print coordinator  
**Timeline:** 1 week (fonts + export), 2-3 weeks (printer quotes)

---

### Track 3: Visual Polish – Phase 3 (40% Complete)

**Goal:** Refreshed card art, refined typography, theme options, performance

#### Completed ✅

- [x] Loading skeleton states for card draws
- [x] Typography improvements (modal, fortune reading sections)
- [x] Aurora background layer
- [x] Light theme toggle with CSS variable overrides + localStorage persistence
- [x] Light theme contrast audit (WCAG AA adjustments to palettes, modal surfaces)
- [x] Fortune reading shimmer state pre-reveal
- [x] Gallery thumbnails lazy-loaded via IntersectionObserver

#### In Progress 🚧

- [ ] **Card artwork refresh** (priority majors: HODLer, Miner, Tower, Sun Bull)
  - Use `assets/nightcafe-batch-prompts.txt` for new variants
  - Import via `scripts/import-custom-images.js`
  - Update `assets/cardmap.json`
- [ ] **Typography fine-tuning** (book export QA, final pass)

#### Pending 📋

- [ ] Minor Arcana palette unification (suit-specific neon adjustments)
- [ ] Final QA pass (no broken images, consistent styling)

**Owner:** Design/dev  
**Timeline:** 2-3 weeks (art generation + integration)

---

### Track 4: Chain Game (Strategy Spin-off) (20% Complete)

**Goal:** Reference cards, playtest kit, digital prototype

#### Completed ✅

- [x] Rules documentation (`chain-game/README.md`)
- [x] Reference sheet (`chain-game/REFERENCE.md`)
- [x] Block prompts library (`chain-game/BLOCK-PROMPTS.md`)
- [x] NFT rarity mechanics documented

#### Pending 📋

- [ ] **Create printable reference cards** (Minor/Major effect tables)
- [ ] **Build digital prototype** (or AI opponent stub)
- [ ] **Playtest balance** (Genesis/Legendary boosts, suit synergies)
- [ ] **Document rarity metadata flow** (`metadata/` → mint scripts)

**Owner:** Game designer  
**Timeline:** 3-4 weeks (reference cards + playtest), 6-8 weeks (prototype)

---

### Track 5: Moon-Forge Saga (Narrative Track) (30% Complete)

**Goal:** Episode 5 script, voice lines, NFT drop plan

#### Completed ✅

- [x] Episodes 1-4 concepts/scripts archived
- [x] Voice direction documented (11Labs settings)
- [x] Visual direction notes

#### Pending 📋

- [ ] **Script Episode 5** ("Heart of the Oracle")
- [ ] **Record 11Labs voice lines** (store transcriptions + configs)
- [ ] **Outline NFT drop plan** (timeline, traits, lore connections)
- [ ] **Design app easter eggs** (triggered by saga progress)

**Owner:** Narrative lead  
**Timeline:** 2 weeks (script), 3-4 weeks (voice + NFT plan)

---

### Track 6: Asset Management (10% Complete)

**Goal:** Import latest art, organize variants, archive legacy

#### Pending 📋

- [ ] **Import images from `tools/CryptoTarot1-78/`** via `scripts/import-custom-images.js`
- [ ] **Review naming conventions**; update `assets/cardmap.json`
- [ ] **Identify theme packs** (seasonal art, event variants)
- [ ] **Archive outdated assets** into `archive/` with notes

**Owner:** Asset coordinator  
**Timeline:** 1 week (import + review), ongoing (theme packs)

---

### Track 7: Documentation & Meta (70% Complete)

**Goal:** Keep all docs in sync, capture ideas, track releases

#### Completed ✅

- [x] Asset verification workflow documented
- [x] Launch checklist created
- [x] Roadmap overview maintained

#### Pending 📋

- [ ] **Update `docs/PROJECT-PLAN.md`** upon completing each milestone
- [ ] **Sync `docs/ROADMAP.md` and `docs/IDEAS.md`** with status changes
- [ ] **Add release notes/changelog** once final launch build is locked
- [ ] **Capture future ideas** in idea library before moving on

**Owner:** Documentation lead  
**Timeline:** Ongoing (update after each milestone)

---

## 🔄 Workflow Dependencies

### Critical Path

1. **Asset Verification** → Regenerate Book → Export PDF → Printer Order
2. **Card Art Refresh** → Import → Update cardmap → QA Gallery
3. **Light Theme** → Extract Variables → Add Toggle → Test Contrast

### Parallel Tracks (No Blockers)

- Chain Game reference cards (independent)
- Moon-Forge Episode 5 (independent)
- Documentation updates (ongoing)

---

## 📅 Recommended Execution Order

### Week 1-2: Print & Visual Polish

1. Install fonts, run Pandoc export, QA PDF
2. Complete typography fine-tuning
3. Audit light theme contrast & adjust palettes
4. Start card art refresh (priority majors)

### Week 3-4: Polish & Assets

1. Finish card art import & cardmap update
2. Implement gallery lazy-loading
3. Collect printer specs & finalize order template
4. Wire analytics stub to platform

### Week 5-6: Side Projects

1. Create Chain Game reference cards
2. Script Moon-Forge Episode 5
3. Import latest assets from `tools/CryptoTarot1-78/`

### Week 7+: Launch Prep

1. Final QA pass (mobile, cross-browser)
2. Update all documentation
3. Prepare marketing assets
4. Execute launch checklist

---

## 🎯 Success Metrics

### Core App

- [ ] Zero broken card images in gallery/modal
- [ ] All spreads (1, 3, 5 cards) QA'd on mobile
- [ ] Analytics events firing correctly
- [ ] Light theme accessible (WCAG AA contrast)

### Print Deliverables

- [ ] PDF exports cleanly with TOC navigation
- [ ] Printer quote received & order template finalized
- [ ] Companion book ready for 500-deck bundle

### Side Projects

- [ ] Chain Game reference cards printable
- [ ] Episode 5 script archived
- [ ] Asset import pipeline validated

---

## 📝 Quick Reference: Key Commands

```bash
# Asset Verification
node tools/verify-deck-assets.mjs

# Regenerate Book
node scripts/generate-book-of-descriptions.mjs

# Regenerate NightCafe Prompts
node tools/generate-nightcafe-prompts.mjs

# Import Custom Images
node scripts/import-custom-images.js

# Pandoc Export (after fonts installed)
pandoc print/book/book-of-descriptions.html \
  -o CryptoTarot_Companion.pdf \
  --pdf-engine=xelatex \
  -V mainfont="Crimson Text" \
  -V monofont="Fira Code" \
  -V sansfont="Helvetica Neue" \
  --toc --toc-depth=2

# Local Testing
npx serve . -l 3000
```

---

## 🔗 Document Links

- **Main Plan:** `docs/PROJECT-PLAN.md`
- **Roadmap:** `docs/ROADMAP.md`
- **To-Do List:** `docs/TODO.md`
- **Ideas Library:** `docs/IDEAS.md`
- **Launch Checklist:** `launch/LAUNCH-CHECKLIST.md`
- **Print Guide:** `print/README.md`
- **Chain Game:** `chain-game/README.md`
- **Moon-Forge:** `moon-forge/README.md`

---

## 🎨 Design Principles

- **Mystical, not manipulative** – Fun, engaging, respectful
- **Entertainment first** – Never financial advice
- **Privacy focused** – Local storage only, no tracking
- **Accessible** – WCAG AA contrast, keyboard navigation
- **Performant** – Lazy loading, optimized assets

---

## 🚀 Launch Readiness Checklist

### Must-Have Before v1.0

- [x] Core functionality complete
- [x] Safety disclaimers in place
- [x] Reading history & sharing
- [ ] PDF export complete
- [ ] Analytics wired
- [ ] Mobile QA passed
- [ ] Light theme accessible

### Should-Have Post-Launch

- [ ] Card art refresh complete
- [ ] Chain Game reference cards
- [ ] Moon-Forge Episode 5
- [ ] Social sharing feature

### Nice-to-Have (Future)

- [ ] Community features
- [ ] Educational tutorials
- [ ] PWA offline mode
- [ ] Multi-language support

---

**Last Review:** November 2025  
**Next Review:** After Phase 3 completion

_"The oracle remembers. Organized plans keep the chain strong."_ ✨
