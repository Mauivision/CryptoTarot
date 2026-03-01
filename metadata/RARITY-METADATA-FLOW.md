# 🎴 Crypto Tarot - Rarity Metadata Flow

**Last Updated:** 2025-01-15
**Purpose:** Document the flow from card data to NFT metadata

---

## 📊 Metadata Structure

### Card Metadata Files

- **Location:** `metadata/cards/*.json`
- **Format:** JSON with complete card data
- **Total Files:** 78 (one per card)

### Metadata Template

- **Location:** `metadata/template.json`
- **Purpose:** Standard template for all cards

### Generator Script

- **Location:** `metadata/generate-metadata.mjs`
- **Purpose:** Generate metadata files from card data

---

## 🔄 Metadata Flow

### Step 1: Source Data

```
data/card-meanings.js
    ↓
CARD_MEANINGS[cardTitle]
    ↓
Extract: title, type, suit, rarity, gameMechanics, etc.
```

### Step 2: Generate Metadata

```
metadata/generate-metadata.mjs
    ↓
Reads card-meanings.js
    ↓
Generates metadata/cards/*.json
```

### Step 3: NFT Integration

```
metadata/cards/*.json
    ↓
On-chain metadata (IPFS)
    ↓
NFT smart contract
```

---

## 🎯 Rarity System

### Rarity Levels

1. **Genesis** - 1:1000 (Ultra Rare)
   - Double all effects
   - Special artwork
   - Lifetime benefits

2. **Legendary** - 1:20
   - +50% to all effects
   - Premium artwork
   - Early access

3. **Epic** - 1:50
   - +25% to all effects
   - Enhanced artwork
   - Discount benefits

4. **Rare** - 1:100
   - +10% to all effects
   - Standard artwork
   - Community access

5. **Common** - 1:5
   - Base effects only
   - Standard artwork
   - Standard benefits

---

## 📋 Metadata Fields

### Required Fields

```json
{
  "name": "Card Name",
  "description": "Card description",
  "image": "ipfs://...",
  "attributes": [
    { "trait_type": "Rarity", "value": "Legendary" },
    { "trait_type": "Type", "value": "Major" },
    { "trait_type": "Suit", "value": "Major" },
    { "trait_type": "Episode", "value": "5" }
  ]
}
```

### Game Mechanics Fields

```json
{
  "gameMechanics": {
    "rarity": "Legendary",
    "spellUpright": "Effect description",
    "spellReversed": "Effect description",
    "energyCost": 1,
    "type": "spell"
  }
}
```

### NFT-Specific Fields

```json
{
  "properties": {
    "episode": "5",
    "scene": "Heart of the Oracle",
    "voice_file": "ipfs://...",
    "artwork": "ipfs://...",
    "lore": "ipfs://..."
  }
}
```

---

## 🔗 Mint Script Integration

### Smart Contract Integration

1. **Read Metadata** - Load from `metadata/cards/*.json`
2. **Upload to IPFS** - Store images and metadata
3. **Deploy Contract** - ERC-721 with metadata
4. **Mint NFTs** - Link metadata to tokens

### Mint Script Flow

```
metadata/cards/*.json
    ↓
Upload to IPFS
    ↓
Get IPFS hashes
    ↓
Deploy smart contract
    ↓
Mint NFTs with metadata
```

---

## 📝 Metadata Generation

### Run Generator

```bash
node metadata/generate-metadata.mjs
```

### Output

- Creates/updates 78 JSON files in `metadata/cards/`
- Each file contains complete card metadata
- Ready for IPFS upload and NFT minting

---

## 🎨 Artwork Integration

### Image Paths

- **Source:** `tools/CryptoTarot1-78/*.jpg`
- **Mapped:** `assets/cardmap.json`
- **NFT:** Upload to IPFS, reference in metadata

### Artwork Variants

- **Genesis:** Special artwork variant
- **Legendary:** Premium artwork variant
- **Epic:** Enhanced artwork variant
- **Rare/Common:** Standard artwork

---

## 🔍 Quality Assurance

### Pre-Mint Checklist

- [ ] All 78 metadata files generated
- [ ] All images uploaded to IPFS
- [ ] All IPFS hashes verified
- [ ] Metadata structure validated
- [ ] Rarity distribution checked
- [ ] Game mechanics verified

### Validation

- [ ] JSON syntax valid
- [ ] All required fields present
- [ ] Image URLs accessible
- [ ] Attributes complete
- [ ] Rarity values correct

---

## 📊 Statistics

### Card Distribution

- **Major Arcana:** 22 cards
- **Minor Arcana:** 56 cards
- **Total:** 78 cards

### Rarity Distribution (Example)

- **Genesis:** 1 card (The Oracle's Heart)
- **Legendary:** 4 cards (Kings)
- **Epic:** 4 cards (Queens)
- **Rare:** 8 cards (Knights + Pages)
- **Common:** 61 cards (remaining)

---

## 🚀 Next Steps

1. **Generate Metadata**
   - Run `metadata/generate-metadata.mjs`
   - Verify all 78 files created

2. **Upload to IPFS**
   - Upload all images
   - Upload all metadata files
   - Get IPFS hashes

3. **Deploy Smart Contract**
   - Create ERC-721 contract
   - Link to IPFS metadata
   - Set up minting

4. **Mint NFTs**
   - Mint Genesis cards
   - Mint Legendary cards
   - Mint remaining cards

---

**Status:** Documentation Complete
**Next Steps:** Generate metadata files, upload to IPFS, deploy contract
