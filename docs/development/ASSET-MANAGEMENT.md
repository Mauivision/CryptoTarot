# 🖼️ Crypto Tarot - Asset Management Guide

**Last Updated:** 2025-01-15

---

## 📁 Asset Locations

### Card Images

- **JPG Images:** `tools/CryptoTarot1-78/` (135 files)
- **SVG Fallbacks:** `assets/cards/` (78 files)
- **AI Generated:** `assets/cards/ai-generated/` (organized variants)
- **Cardmap:** `assets/cardmap.json` (image mapping)

### Other Assets

- **Card Back:** `assets/card-back.svg`
- **Cosmic Journey:** `assets/cosmic-journey-card.svg`
- **Icons:** `assets/cosmic-journey-card.svg` (favicon)

---

## 🔄 Import Process

### Import Custom Images

```bash
# ES Module version (recommended)
node scripts/utils/import-custom-images.mjs

# CommonJS version (legacy)
node scripts/utils/import-custom-images.js
```

### Update Cardmap

```bash
# After importing images
npm run update:cardmap
```

### Verify Assets

```bash
# Verify all cards have images
node tools/verify-deck-assets.mjs
```

---

## 📝 Naming Conventions

### Major Arcana

- **Format:** `major-{title-lowercase-hyphenated}-{number}.jpg`
- **Example:** `major-the-hodler-13.jpg`
- **Numbers:** 01-16 (variant numbers)

### Minor Arcana

- **Format:** `minor-{rank-lowercase}-of-{suit-lowercase}-{number}.jpg`
- **Example:** `minor-ace-of-tokens-07.jpg`
- **Numbers:** 01-12 (variant numbers)

### Special Cases

- **Court Cards:** Same format as numbered cards
- **Aces:** Treated as numbered cards
- **Card Backs:** `Cardback-{number}.jpg`

---

## 🎨 Image Organization

### Current Structure

```
tools/CryptoTarot1-78/
├── major-*.jpg (Major Arcana)
├── minor-*.jpg (Minor Arcana)
└── Cardback-*.jpg (Card backs)
```

### Organized Structure

```
assets/cards/ai-generated/
├── the-hodler/
│   ├── v1.jpg
│   ├── v2.jpg
│   └── ...
├── ace-of-tokens/
│   ├── v1.jpg
│   └── ...
└── ...
```

---

## 🔍 Review Process

### Naming Review

1. **Check File Names**
   - Verify naming convention
   - Check for typos
   - Ensure consistency

2. **Update Cardmap**
   - Run `npm run update:cardmap`
   - Verify all cards mapped
   - Check for missing images

3. **Test Images**
   - Load in browser
   - Verify paths correct
   - Check fallbacks work

---

## 🎨 Theme Packs & Seasonal Art

### Future Theme Packs

- **Seasonal Themes:**
  - Lunar New Year
  - Solstice
  - Halloween
  - Holiday themes

- **Event Themes:**
  - Launch celebration
  - Anniversary
  - Special events

- **Art Styles:**
  - Cyberpunk
  - Minimalist
  - Abstract
  - Realistic

### Implementation

- Store in `assets/cards/themes/{theme-name}/`
- Update cardmap with theme variants
- Allow theme switching in app

---

## 📦 Archiving Assets

### Archive Process

1. **Identify Outdated Assets**
   - Old versions
   - Unused variants
   - Deprecated designs

2. **Move to Archive**
   - `archive/assets/old-images/`
   - `archive/assets/deprecated/`
   - `archive/assets/unused/`

3. **Document**
   - Create `archive/README.md`
   - Note why archived
   - Record date archived

### Archive Structure

```
archive/
├── assets/
│   ├── old-images/
│   ├── deprecated/
│   └── unused/
└── README.md
```

---

## 🔄 Asset Workflow

### Adding New Images

1. Place images in `tools/CryptoTarot1-78/`
2. Run `node scripts/utils/import-custom-images.mjs`
3. Run `npm run update:cardmap`
4. Verify in browser
5. Test all pages

### Updating Images

1. Replace image in `tools/CryptoTarot1-78/`
2. Run `npm run update:cardmap`
3. Clear browser cache
4. Verify new image loads

### Removing Images

1. Remove from `tools/CryptoTarot1-78/`
2. Archive if needed
3. Run `npm run update:cardmap`
4. Update cardmap.json

---

## 📊 Asset Statistics

### Current Assets

- **JPG Images:** 135 files
- **SVG Fallbacks:** 78 files
- **Total Cards:** 78
- **Image Coverage:** 81% (63/78 have JPG)

### Coverage by Suit

- **Major Arcana:** 22/22 (100%)
- **Tokens:** 13/14 (93%)
- **Liquidity:** 14/14 (100%)
- **Security:** 9/14 (64%)
- **Nodes:** 0/14 (0%)

---

## 🎯 Next Steps

### Immediate

- [ ] Import latest images from `tools/CryptoTarot1-78/`
- [ ] Review naming conventions
- [ ] Update `cardmap.json`
- [ ] Verify all images load

### Future

- [ ] Create theme packs
- [ ] Archive outdated assets
- [ ] Organize seasonal art
- [ ] Set up asset versioning

---

**Status:** Documentation Complete
**Last Updated:** 2025-01-15
