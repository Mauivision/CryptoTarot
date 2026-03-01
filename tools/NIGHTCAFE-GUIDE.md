# Using NightCafe for Crypto Tarot Card Generation

## 🎯 Quick Start - Using Your NightCafe Credits

### Option 1: Interactive Workflow (Recommended)

1. **Generate the workflow file:**

   ```bash
   python tools/nightcafe-credit-generator.py
   ```

   This creates `nightcafe-workflow.html` - an interactive guide!

2. **Open the workflow:**
   - Open `nightcafe-workflow.html` in your browser
   - It shows all 78 cards with prompts ready to copy

3. **Use NightCafe Creator:**
   - Go to https://creator.nightcafe.studio
   - Sign in with your subscription account
   - For each card: Copy prompt → Paste → Generate (uses 1 credit)

### Option 2: Manual Batch File

1. **Generate the prompts:**

   ```bash
   python tools/generate-nightcafe-prompts.py
   ```

2. **Open the generated file:**
   - Open `nightcafe-batch-prompts.txt` (in the assets folder)
   - This contains all 78 prompts ready to copy-paste

3. **Use NightCafe Creator:**
   - Go to https://creator.nightcafe.studio
   - Sign in with your subscription account

## 💳 Credit Usage

- **Per Card:** ~1 credit (standard generation)
- **Total for 78 cards:** ~78 credits
- **With variations:** ~156-234 credits

## Recommended NightCafe Settings

### Model Selection

- **Best Option:** DALL-E 3 (if available) - Best for detailed, consistent results
- **Alternative:** Stable Diffusion XL - Great for artistic, cyberpunk style
- **Alternative:** Stable Diffusion 1.5 - Good for faster generation

### Image Settings

- **Aspect Ratio:** 2:3 (Portrait) - Standard tarot card format
- **Quality:** High or Maximum (use your subscription credits wisely)
- **Style:** Cyberpunk, Neon Art, Digital Painting
- **Size:** 1024x1536 or higher (for NFT-ready images)

## Workflow Tips

### Batch Processing

1. Copy the first prompt from `nightcafe-batch-prompts.txt`
2. Paste into NightCafe Creator
3. Generate the image
4. Download and save as the filename shown (e.g., `major-the-hodler.png`)
5. Repeat for all 78 cards

### Organizing Your Work

- Create a folder: `assets/cards/nightcafe/` for downloaded images
- Name files exactly as shown in the batch file
- Keep track of which cards you've completed

### Cost Optimization

- **NightCafe Credits:** Check your subscription tier
- **Batch Generation:** Some tiers allow multiple images per generation
- **Upscaling:** Use NightCafe's upscale feature if needed
- **Variations:** Generate 2-3 variations per card, pick the best

## NightCafe-Specific Tips

### Prompt Optimization

The generated prompts are optimized for NightCafe, but you can:

- Add `--ar 2:3` if using command-line interface
- Add style modifiers like `--style cyberpunk` or `--v 5` for SD models
- Experiment with different models to find your preferred style

### Consistency Tips

- Use the same model for all cards in a suit
- Keep aspect ratio consistent (2:3)
- Use similar style settings across all cards
- Save your favorite settings as a preset

### Quality Control

- Review each card before moving to the next
- Regenerate if the symbolism doesn't match
- Ensure neon colors match the suit (green for Tokens, blue for Liquidity, etc.)
- Check that blockchain/crypto elements are visible

## Alternative: NightCafe API (If Available)

If NightCafe releases an API for subscribers:

1. Check NightCafe documentation for API access
2. We can update `generate-card-images.py` to support NightCafe API
3. This would allow automated batch generation

## File Structure

After generation, your files should be:

```
assets/cards/
  ├── major-the-hodler.png
  ├── major-the-miner.png
  ├── minor-ace-of-tokens.png
  └── ... (all 78 cards)
```

## Troubleshooting

### Images Not Matching Style

- Try different models (SDXL vs DALL-E 3)
- Adjust the prompt slightly
- Use NightCafe's style modifiers

### Inconsistent Colors

- Reference the color codes in the prompts:
  - Tokens: Green/Teal (#00f5a0)
  - Liquidity: Blue/Purple (#3ec0ff)
  - Security: Red/Pink (#ff3864)
  - Nodes: Pink/Orange (#ff3cac)
  - Major: Purple (#8b5cf6)

### File Naming

- Must match exactly: `major-the-hodler.png` (not `major_the_hodler.png`)
- Use lowercase with hyphens
- Save as PNG for best quality

## Progress Tracking

Keep a checklist:

- [ ] Major Arcana (22 cards)
- [ ] Minor Arcana - Tokens (14 cards)
- [ ] Minor Arcana - Liquidity (14 cards)
- [ ] Minor Arcana - Security (14 cards)
- [ ] Minor Arcana - Nodes (14 cards)

Total: 78 cards

## Next Steps After Generation

1. Verify all 78 images are generated
2. Check file names match the expected format
3. Test in the card game to ensure images load correctly
4. Consider creating reversed versions (flip images or darken)
