# 🎴 Crypto Tarot - NFT Mint Pipeline

**Last Updated:** 2025-01-15
**Purpose:** Complete guide for minting Crypto Tarot NFTs

---

## 📋 Pipeline Overview

```
Card Data → Metadata Generation → IPFS Upload → Smart Contract → NFT Minting
```

---

## Step 1: Generate Metadata

### Run Generator

```bash
node metadata/generate-metadata.mjs
```

### Output

- Creates 78 JSON files in `metadata/cards/`
- Each file contains complete card metadata
- Includes rarity, game mechanics, artwork paths

### Verify

- [ ] All 78 files created
- [ ] JSON syntax valid
- [ ] All required fields present
- [ ] Rarity values correct

---

## Step 2: Prepare Artwork

### Image Requirements

- **Format:** PNG or JPG
- **Size:** 3000×3000px minimum
- **Resolution:** 300 DPI
- **Color Mode:** RGB (for digital), CMYK (for print)

### Source Images

- **Location:** `tools/CryptoTarot1-78/*.jpg`
- **Mapped:** `assets/cardmap.json`
- **Variants:** Multiple variants per card

### Process Images

1. Select best variant for each card
2. Resize to 3000×3000px if needed
3. Optimize file size
4. Prepare for IPFS upload

---

## Step 3: Upload to IPFS

### IPFS Setup

```bash
# Install IPFS
npm install ipfs-http-client

# Or use Pinata/Infura
# Sign up at pinata.cloud or infura.io
```

### Upload Process

1. **Upload Images**
   - Upload all 78 card images
   - Get IPFS hashes (CIDs)
   - Store hashes in metadata

2. **Upload Metadata**
   - Update metadata with image IPFS hashes
   - Upload metadata files
   - Get metadata IPFS hashes

3. **Verify**
   - Test all IPFS links
   - Verify images load correctly
   - Confirm metadata accessible

---

## Step 4: Smart Contract

### Contract Features

- **Standard:** ERC-721
- **Features:**
  - Reveal mechanism
  - Royalties (5% to creator)
  - Max supply: 500 per episode
  - Variable mint prices by rarity

### Contract Deployment

```solidity
// Example structure
contract CryptoTarotNFT is ERC721 {
    string baseURI = "ipfs://...";
    uint256 maxSupply = 500;
    mapping(uint256 => string) tokenMetadata;
}
```

### Security

- [ ] Audit smart contract
- [ ] Test on testnet
- [ ] Implement access controls
- [ ] Set up multisig wallet
- [ ] Prepare emergency pause

---

## Step 5: Minting

### Mint Process

1. **Genesis Cards** (1:1000)
   - Mint first
   - Highest price (1 ETH)
   - Special artwork

2. **Legendary Cards** (1:20)
   - Mint second
   - High price (0.1 ETH)
   - Premium artwork

3. **Epic Cards** (1:50)
   - Mint third
   - Medium price (0.05 ETH)
   - Enhanced artwork

4. **Rare Cards** (1:100)
   - Mint fourth
   - Low price (0.02 ETH)
   - Standard artwork

5. **Common Cards** (1:5)
   - Mint last
   - Lowest price (0.005 ETH)
   - Standard artwork

### Mint Script

```javascript
// Example mint function
async function mintCard(tokenId, metadataURI) {
  const tx = await contract.mint(to, tokenId, metadataURI);
  await tx.wait();
  return tx.hash;
}
```

---

## 📊 Metadata Structure

### Complete Example

```json
{
  "name": "The Oracle's Heart - Episode 5",
  "description": "The heart of the Oracle beats with ancient wisdom...",
  "image": "ipfs://Qm...",
  "external_url": "https://cryptotarot.com/card/the-oracle",
  "attributes": [
    { "trait_type": "Episode", "value": "5" },
    { "trait_type": "Rarity", "value": "Legendary" },
    { "trait_type": "Type", "value": "Major" },
    { "trait_type": "Suit", "value": "Major" },
    { "trait_type": "Background", "value": "Oracle's Core" },
    { "trait_type": "Character", "value": "Oracle Form" },
    { "trait_type": "Effect", "value": "Glowing" }
  ],
  "properties": {
    "episode": "5",
    "scene": "Heart of the Oracle",
    "voice_file": "ipfs://Qm...",
    "artwork": "ipfs://Qm...",
    "lore": "ipfs://Qm...",
    "gameMechanics": {
      "rarity": "Legendary",
      "spellUpright": "+3 chain",
      "spellReversed": "-2 chain",
      "energyCost": 1,
      "type": "spell"
    }
  }
}
```

---

## 🔗 Links

### Related Documentation

- [`RARITY-METADATA-FLOW.md`](./RARITY-METADATA-FLOW.md) - Metadata flow
- [`moon-forge/NFT-DROP-PLAN.md`](../moon-forge/NFT-DROP-PLAN.md) - Drop strategy
- [`chain-game/README.md`](../chain-game/README.md) - Game mechanics

---

## 📝 Checklist

### Pre-Mint

- [ ] Generate all metadata files
- [ ] Prepare all artwork
- [ ] Upload to IPFS
- [ ] Verify IPFS links
- [ ] Deploy smart contract
- [ ] Test on testnet

### Mint Day

- [ ] Open minting
- [ ] Monitor sales
- [ ] Track analytics
- [ ] Provide support
- [ ] Handle issues

### Post-Mint

- [ ] Distribute assets
- [ ] Airdrop bonuses
- [ ] Update metadata
- [ ] Archive records

---

**Status:** Documentation Complete
**Next Steps:** Generate metadata, prepare artwork, deploy contract
