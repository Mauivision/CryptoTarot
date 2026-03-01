# 📝 Crypto Tarot - Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.0.0] - 2025-01-15

### 🌟 Major Release - Utopia Achieved

#### Added

- **Complete Project Organization**
  - Organized all files into logical directory structure
  - Created `scripts/build/`, `scripts/game/`, `scripts/export/`, `scripts/fix/`, `scripts/utils/`
  - Moved documentation to `docs/guides/`, `docs/status/`, `docs/development/`
  - Created `tests/` directory for test files

- **Shared Utilities**
  - Created `js/card-utils.js` with shared functions (`fileSafe`, `getCardImagePath`, `escapeHtml`)
  - Removed duplicate functions from `script.js` and `card-detail.js`
  - Standardized code patterns across all modules

- **Comprehensive Documentation**
  - Created `PROJECT-MANIFEST.json` - Complete project manifest
  - Created `UTOPIA-GUIDE.md` - Perfect organization guide
  - Created `docs/UTOPIA-INDEX.md` - Navigation hub
  - Created `PROJECT-AUDIT.md` - Comprehensive audit
  - Created `REFACTOR-COMPLETE.md` - Refactoring completion report
  - Created `COMPLETION-REPORT.md` - Final completion report
  - Created `docs/development/FINAL-ASSESSMENT.md` - Complete assessment
  - Created `docs/development/UPDATED-PLAN.md` - Updated project plan
  - Created `docs/status/PROJECT-STATUS-FINAL.md` - Final status report
  - Created `print/PRINTER-SPECS.md` - Printer specifications

- **Image System**
  - Updated `cardmap.json` with 135 JPG images
  - Created `scripts/build/update-cardmap-jpg.mjs` for automatic cardmap updates
  - Improved image fallback system (JPG → SVG → card-back.svg)
  - Added lazy loading for all card images

- **Print & Export**
  - Created printer specifications document
  - Added print order email template
  - Improved PDF export scripts
  - Added comprehensive export documentation

#### Changed

- **File Organization**
  - Moved all scripts to organized subdirectories
  - Moved all documentation to appropriate locations
  - Removed 6 duplicate scripts
  - Cleaned up root directory (15+ files → 7 files)

- **Code Quality**
  - Removed all duplicate functions
  - Standardized imports across all files
  - Added HTML escaping for security
  - Improved error handling

- **Documentation**
  - Updated all documentation with new structure
  - Updated README.md with utopia reference
  - Updated all file paths in documentation
  - Created master documentation index

- **Configuration**
  - Updated `package.json` with new script paths
  - Updated `.cursorrules` with new structure
  - Updated `.gitignore` with proper exclusions

#### Fixed

- Fixed duplicate script definitions in `package.json`
- Fixed all import paths after file moves
- Fixed image resolution to use JPG files
- Fixed HTML escaping for XSS protection
- Fixed card flip animations (180deg rotation)
- Fixed card meaning display and readability

#### Removed

- Removed duplicate scripts:
  - `fix-quotes.mjs`
  - `fix-all-quotes.mjs`
  - `fix-final-quotes.mjs`
  - `fix-all-quotes-final.mjs`
  - `add-game-mechanics.mjs`
  - `update-cardmap-to-jpg.mjs`

---

## [0.9.0] - 2025-01-14

### Added

- Chain Game mechanics integration
- Game mechanics scripts (`add-game-mechanics-v2.mjs`, `test-game-mechanics.mjs`, `test-game-balance.mjs`)
- Chain Game documentation (`chain-game/`)

### Changed

- Updated card data structure to support game mechanics
- Improved card image resolution system

---

## [0.8.0] - 2025-01-13

### Added

- Card flipping animations
- Reading history tracking
- Card combination analysis
- Multiple spread types (1, 3, 5 cards)
- Theme toggle (light/dark mode)

### Fixed

- Card meaning display
- Image loading and fallbacks
- Card flip animation smoothness

---

## [0.7.0] - 2025-01-12

### Added

- Complete 78-card deck
- Card detail pages
- Encyclopedia page
- Fortune teller page
- Card gallery with filtering

### Changed

- Migrated from SVG to JPG images
- Updated image resolution system
- Improved card data structure

---

## [0.6.0] - 2025-01-11

### Added

- Book generation scripts
- PDF export functionality
- Markdown export
- LaTeX export

---

## [0.5.0] - 2025-01-10

### Added

- Initial card data structure
- Basic card images (SVG)
- Card meanings and descriptions
- Cosmic correspondences

---

## [0.1.0] - 2025-01-01

### Added

- Initial project setup
- Basic HTML structure
- Core JavaScript modules
- Styling system

---

## Future Ideas

### Potential Features

- Mobile app version
- Social sharing functionality
- User accounts and saved readings
- Custom spread creation
- AI-enhanced readings
- Multi-language support
- Accessibility improvements
- Performance optimizations
- Service worker for offline support
- Progressive Web App (PWA) features

### Technical Improvements

- Split large files into smaller modules
- Add comprehensive test suite
- Add TypeScript definitions
- Add ESLint configuration
- Add CI/CD pipeline
- Add performance monitoring
- Add accessibility audit

---

**For detailed project status, see:**

- [`docs/status/PROJECT-STATUS-FINAL.md`](./docs/status/PROJECT-STATUS-FINAL.md)
- [`COMPLETION-REPORT.md`](./COMPLETION-REPORT.md)
- [`UTOPIA-GUIDE.md`](./UTOPIA-GUIDE.md)
