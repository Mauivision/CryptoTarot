# 📁 Crypto Tarot - File Management Guide

**Last Updated:** 2025-01-15
**Status:** Active Management

This document provides comprehensive guidance for managing all files in the Crypto Tarot project.

## 📋 Table of Contents

1. [File Organization](#file-organization)
2. [Core Files](#core-files)
3. [Asset Management](#asset-management)
4. [Script Organization](#script-organization)
5. [Documentation Structure](#documentation-structure)
6. [Cleanup Procedures](#cleanup-procedures)
7. [Maintenance Tasks](#maintenance-tasks)

---

## 📂 File Organization

### Root Level Files

**Entry Points (HTML):**

- `index.html` - Main landing page with fortune teller
- `fortune-teller.html` - Dedicated fortune teller interface
- `card-game.html` - Chain Game mechanics
- `card-detail.html` - Single card detail view
- `crypto-tarot-encyclopedia.html` - Complete card dictionary
- `story.html` - Moon-Forge narrative
- `privacy-policy.html` - Privacy policy page
- `terms-of-service.html` - Terms of service page

**Core JavaScript:**

- `script.js` - Main application logic (card drawing, spreads, UI)
- `card-detail.js` - Card detail page logic

**Styling:**

- `styles.css` - All application styles (light/dark themes)

**Configuration:**

- `package.json` - NPM dependencies and scripts
- `jsconfig.json` - JavaScript configuration
- `.gitignore` - Git ignore patterns
- `.prettierrc` - Prettier formatting config (if exists)

**Documentation:**

- `README.md` - Main project documentation
- `CHANGELOG.md` - Version history
- `CONTRIBUTING.md` - Contribution guidelines
- `LICENSE` - License file
- `PROJECT-MANIFEST.json` - Complete project manifest
- `PROJECT-AUDIT.md` - Project audit report
- `PROJECT-FINALIZATION.md` - Finalization status
- `REFACTOR-COMPLETE.md` - Refactoring completion notes
- `COMPLETION-REPORT.md` - Project completion report
- `TODO.md` - Root-level TODO items
- `UTOPIA-GUIDE.md` - Project organization guide
- `CURSOR-SETUP.md` - Cursor IDE setup guide
- `FIX-SITE-ISSUES.md` - Site issue fixes
- `SHUFFLE-RANDOMIZER-README.md` - Shuffle algorithm docs

---

## 🎯 Core Files

### Data Files (`data/`)

**Primary:**

- `card-meanings.js` - **CANONICAL SOURCE** - All 78 card definitions
  - Contains: meanings, cosmic data, game mechanics, book chapters
  - **DO NOT EDIT** without running validation
  - Format: ES6 module export

**Secondary:**

- `crypto-education.js` - Educational content snippets

**Backup Files (to be removed):**

- `card-meanings.js.backup` - Old backup (should be removed)

### JavaScript Modules (`js/`)

All modules use ES6 `import/export`:

- `card-utils.js` - Utility functions (fileSafe, getCardImagePath, escapeHtml)
- `ai-service.js` - AI integration for readings
- `card-combinations.js` - Card combination analysis
- `cosmic-data.js` - Cosmic correspondences
- `enhanced-effects.js` - Visual effects and animations
- `fortune-teller-content.js` - Fortune teller UI content
- `reading-history.js` - Reading history management
- `shuffle-randomizer.js` - Cryptographic shuffle algorithm
- `spread-types.js` - Spread definitions (1, 3, 5 card spreads)

---

## 🖼️ Asset Management

### Card Images

**Primary Location:**

- `assets/cards/` - Organized card images
  - SVG files (78 cards)
  - JPG variants in subdirectories
  - Structure: `ai-generated/{cardName}/v{1-4}.jpg`

**Fallback Location:**

- `tools/CryptoTarot1-78/` - Original JPG card images (135 files)
  - Format: `major-{title}-{number}.jpg` or `minor-{rank}-of-{suit}-{number}.jpg`
  - Card back: `Cardback-01.jpg`

**Image Mapping:**

- `assets/cardmap.json` - Maps card IDs to image paths
  - **DO NOT EDIT MANUALLY** - Use `npm run update:cardmap`
  - Backup: `assets/cardmap.json.backup` (to be removed)

**Other Assets:**

- `assets/card-back.svg` - Card back design
- `assets/cosmic-journey-card.svg` - Cosmic journey card

### Image Generation Tools (`tools/`)

- `generate-card-images.py` - OpenAI DALL-E image generator
- `generate-nightcafe-prompts.mjs` - NightCafe prompt generator
- `nightcafe-credit-generator.py` - Credit management
- `fortune_teller.py` - Python fortune teller (legacy)
- `verify-deck-assets.mjs` - Asset verification script

**Documentation:**

- `tools/README-IMAGE-GENERATION.md` - Image generation guide
- `tools/NIGHTCAFE-GUIDE.md` - NightCafe integration
- `tools/AI-IMAGE-INTEGRATION-GUIDE.md` - AI image guide
- `tools/USE-NIGHTCAFE-CREDITS.md` - Credit usage guide

---

## 🔧 Script Organization

### Build Scripts (`scripts/build/`)

**Card Map Generation:**

- `generate-cardmap.js` - Generate cardmap.json from images
- `update-cardmap-jpg.mjs` - Update cardmap to JPG format
- `update-cardmap-to-jpg.mjs` - Alternative JPG updater

**Book Generation:**

- `generate-book-of-descriptions.mjs` - Generate book HTML
- `add-book-chapters.mjs` - Add chapters to book
- `generate-full-book-latex.mjs` - Generate LaTeX book
- `create-single-card-pdf.mjs` - Single card PDF export
- `generate-cards.js` - Card generation utility

### Game Scripts (`scripts/game/`)

- `add-game-mechanics-v2.mjs` - Add game mechanics to cards
- `test-game-mechanics.mjs` - Test game functionality
- `test-game-balance.mjs` - Test game balance

### Export Scripts (`scripts/export/`)

- `export-pdf-puppeteer.mjs` - PDF export via Puppeteer
- `convert-to-markdown.mjs` - Markdown conversion
- `generate-comprehensive-latex.mjs` - LaTeX generation
- Additional export utilities

### Fix Scripts (`scripts/fix/`)

**Status:** Archived - One-time fixes completed

- `fix-all-quotes.mjs` - Quote fixing scripts
- `fix-svg-*.js` - SVG structure fixes
- `fix-battlebonus-*.mjs` - Battle bonus fixes
- **Note:** These are historical and should not be run again

### Utility Scripts (`scripts/utils/`)

- `validate-card-data.mjs` - Validate card data structure
- Additional utility scripts for data processing

---

## 📚 Documentation Structure

### Main Documentation (`docs/`)

**Guides (`docs/guides/`):**

- `START-HERE.md` - Getting started guide
- `QUICK-START.md` - Quick start instructions
- `PROJECT-SETUP.md` - Project setup guide
- `TESTING-GUIDE.md` - Testing instructions

**Status Reports (`docs/status/`):**

- `PROJECT-STATUS-CURRENT.md` - Current project status
- `PROJECT-STATUS.md` - Historical status
- `FINAL-COMPLETION-REPORT.md` - Completion report

**Development Docs (`docs/development/`):**

- `PROJECT-PLAN.md` - Development plan
- `MASTER-PLAN.md` - Master development plan
- `ROADMAP.md` - Project roadmap
- `TODO.md` - Development TODO items
- `IDEAS.md` - Feature ideas
- `ASSET-MANAGEMENT.md` - Asset management guide
- `EASTER-EGGS.md` - Easter eggs documentation
- `FINAL-ASSESSMENT.md` - Final assessment
- `UPDATED-PLAN.md` - Updated plan

**Index:**

- `docs/INDEX.md` - Documentation index
- `docs/README.md` - Documentation README
- `docs/UTOPIA-INDEX.md` - Utopia organization index

### Specialized Documentation

**Chain Game (`chain-game/`):**

- `README.md` - Chain game overview
- `REFERENCE.md` - Game reference
- `NEXT-STEPS.md` - Next development steps
- `TESTING-GUIDE.md` - Game testing guide
- `GAME-MECHANICS-STATUS.md` - Mechanics status
- `QUICK-REFERENCE-CARDS.md` - Quick reference
- `BLOCK-PROMPTS.md` - Block prompts

**Moon Forge (`moon-forge/`):**

- `README.md` - Moon Forge overview
- `EPISODE-5.md` - Episode 5 content
- `NFT-DROP-PLAN.md` - NFT drop planning

**Launch (`launch/`):**

- `README.md` - Launch documentation
- `LAUNCH-CHECKLIST.md` - Launch checklist

**Print (`print/`):**

- `README.md` - Print documentation
- `PRINTER-SPECS.md` - Printer specifications
- `dielines/README.md` - Dieline information
- `book/` - Generated book files
  - `README-EXPORT.md` - Export instructions
  - `EXPORT-TO-PDF.md` - PDF export guide
  - `PUPPETEER-EXPORT-INFO.md` - Puppeteer info
  - Generated HTML, Markdown, LaTeX, PDF files

**Metadata (`metadata/`):**

- `template.json` - NFT metadata template
- `cards/` - Individual card metadata (78 JSON files)
- `generate-metadata.mjs` - Metadata generator
- `MINT-PIPELINE.md` - Minting pipeline
- `RARITY-METADATA-FLOW.md` - Rarity metadata flow

**Archive (`archive/`):**

- Legacy files and old versions
- `README.md` - Archive documentation

---

## 🧹 Cleanup Procedures

### Backup Files

**Files to Remove:**

- `data/card-meanings.js.backup` - Old backup (no longer needed)
- `assets/cardmap.json.backup` - Old backup (no longer needed)

**Action:** These are already in `.gitignore` but should be deleted from filesystem.

### Temporary Files

**Patterns to Clean:**

- `*.tmp` - Temporary files
- `*.temp` - Temporary files
- `*.bak` - Backup files
- `*.old` - Old files

**Action:** Check for any temporary files and remove them.

### Generated Files

**Files that can be regenerated:**

- `print/book/*.html` - Generated book HTML
- `print/book/*.pdf` - Generated PDFs (if large)
- `print/book/*.tex` - Generated LaTeX (if not needed)

**Note:** These are in `.gitignore` but may exist locally.

### Unused Scripts

**Fix Scripts (`scripts/fix/`):**

- All files in this directory are one-time fixes
- **Status:** Keep for historical reference, but mark as archived
- **Action:** Add `ARCHIVED.md` note in directory

---

## 🔄 Maintenance Tasks

### Regular Maintenance

**Weekly:**

- [ ] Check for backup files and remove them
- [ ] Verify cardmap.json is up to date
- [ ] Run `npm run format` to ensure code formatting
- [ ] Check for unused imports in JavaScript files

**Monthly:**

- [ ] Review and update documentation
- [ ] Verify all links in documentation work
- [ ] Check for duplicate files
- [ ] Review asset sizes and optimize if needed
- [ ] Update PROJECT-MANIFEST.json if structure changes

**Before Releases:**

- [ ] Run `npm run lint` to check code quality
- [ ] Validate card data with `npm run lint:data`
- [ ] Update CHANGELOG.md
- [ ] Verify all entry points work correctly
- [ ] Test all scripts in `scripts/build/`
- [ ] Check image paths are correct

### File Validation

**Card Data:**

```bash
npm run lint:data
```

**Code Formatting:**

```bash
npm run format:check
npm run format  # to fix
```

**Card Map:**

```bash
npm run update:cardmap
```

### Adding New Files

**When adding new cards:**

1. Update `data/card-meanings.js` (canonical source)
2. Add images to `assets/cards/` or `tools/CryptoTarot1-78/`
3. Run `npm run update:cardmap`
4. Test in browser

**When adding new scripts:**

1. Place in appropriate `scripts/` subdirectory
2. Use ES6 modules (`import/export`)
3. Add to `package.json` scripts if commonly used
4. Document in relevant README

**When adding new documentation:**

1. Place in appropriate `docs/` subdirectory
2. Update `docs/INDEX.md`
3. Link from relevant parent README

---

## 📊 File Statistics

**Current Counts (from PROJECT-MANIFEST.json):**

- Total Cards: 78 (22 Major, 56 Minor)
- Total Images: 135
- Total Scripts: 41
- Total Modules: 9
- Total Pages: 7

**Directory Structure:**

- Root HTML files: 8
- Data files: 2 (1 primary, 1 secondary)
- JS modules: 9
- Build scripts: ~10
- Game scripts: 3
- Export scripts: ~9
- Fix scripts: 9 (archived)
- Utility scripts: ~14
- Documentation files: 50+

---

## 🚨 Important Rules

### Never Edit These Directly:

- `assets/cardmap.json` - Use `npm run update:cardmap` instead
- `data/card-meanings.js` - Always validate after editing

### Always Use:

- `getCardImagePath(card)` - For card image paths
- `fileSafe(name)` - For converting titles to IDs
- ES6 modules - For all JavaScript files
- Prettier - For code formatting

### File Naming Conventions:

- Card images: Use `fileSafe()` function for directory names
- Scripts: Use `.mjs` for ES modules, `.js` for CommonJS (legacy)
- Documentation: Use `UPPERCASE-WITH-HYPHENS.md`

---

## 🔍 Troubleshooting

### Missing Card Images

1. Check `assets/cardmap.json` for card mapping
2. Verify image exists in `assets/cards/` or `tools/CryptoTarot1-78/`
3. Run `npm run update:cardmap` to regenerate

### Card Data Issues

1. Run `npm run lint:data` to validate
2. Check `data/card-meanings.js` syntax
3. Verify all 78 cards are present

### Build Script Failures

1. Check Node.js version (requires >=18.0.0)
2. Run `npm install` to ensure dependencies
3. Check script file paths are correct

---

## 📝 Change Log

**2025-01-15:**

- Created comprehensive file management guide
- Documented all file structures
- Identified backup files for cleanup
- Established maintenance procedures

---

**Remember:** The blockchain never forgets, and neither should your file organization! 🔮✨
