# Crypto Tarot – Roadmap Overview

This roadmap tracks the major workstreams for the Crypto Tarot universe. It complements `docs/PROJECT-PLAN.md` and links to specialized folders so every track stays discoverable.

## 1. Core App & Deck

- `index.html`, `styles.css`, `script.js` – single-page fortune teller experience
- `data/` – canonical card meanings, cosmic data, educational snippets
- `assets/cards/` – SVG fronts and generated variants
- Next milestones:
  - Refresh priority Major Arcana artwork + update `assets/cardmap.json`
  - Run full typography/book QA pass and final mobile/browser testing
  - Wire analytics to the chosen platform (Plausible/GA) and validate events

## 2. Book & Print ✅

- Location: `print/book/book-of-descriptions.html`
- Generator: `scripts/generate-book-of-descriptions.mjs`
- ✅ **Completed:**
  - Created `print/PRINTER-SPECS.md` with complete printer specifications
  - Updated `print/README.md` with print order email template
  - Documented font requirements and export instructions
- **Remaining:**
  - Export to PDF using Pandoc with fonts (Crimson Text, Fira Code, Helvetica Neue)
  - Create dielines for cards and packaging
  - QA PDF (TOC links, margins, contrast)

## 3. Launch & Marketing

- Location: `launch/`
- Includes countdown copy, CTA messaging, and analytics handoff notes
- Next steps:
  - Validate waitlist flow, finalize campaign assets, and prep Launch Day 1 copy
  - Capture testimonials/teasers as we script the Oracle Chronicles content series
  - Coordinate analytics wiring with the core app so launch metrics are tracked from day one

## 4. Chain Game (Mirror Project) ✅

- Location: `chain-game/`
- Contains rules, rarity tables, and Genesis lore
- ✅ **Completed:**
  - Created `chain-game/QUICK-REFERENCE-CARDS.md` - Printable reference sheets
  - Documented all game mechanics and rarity effects
- **Remaining:**
  - Build digital prototype or AI opponent stub
  - Playtest balance (Genesis double effects, Legendary boosts)
  - Document rarity metadata → mint pipeline in `metadata/`

## 5. Moon-Forge Saga (Narrative Track) ✅

- Location: `moon-forge/`
- Houses episode scripts, lore beats, and voice prompts
- ✅ **Completed:**
  - Scripted Episode 5 ("Heart of the Oracle") - `moon-forge/EPISODE-5.md`
  - Created NFT drop plan - `moon-forge/NFT-DROP-PLAN.md`
  - Documented voice line scripts and production notes
- **Remaining:**
  - Record 11Labs voice lines for Episode 5
  - Create interactive easter eggs in main app
  - Archive voice configs and transcripts
