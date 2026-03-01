# Using Your NightCafe Credits to Generate Card Art

## 🎯 Quick Start Guide

### Step 1: Generate the Workflow File

```bash
python tools/nightcafe-credit-generator.py
```

This creates `nightcafe-workflow.html` - an interactive guide that helps you use your credits efficiently.

### Step 2: Open NightCafe Creator

1. Go to https://creator.nightcafe.studio
2. Sign in with your subscription account
3. Check your available credits

### Step 3: Use the Workflow File

1. Open `nightcafe-workflow.html` in your browser
2. It shows all 78 cards with prompts ready to copy
3. Click "Copy Prompt" for each card
4. Paste into NightCafe Creator

## 💳 Credit Usage

### Estimated Credits Needed

- **Per Card:** 1 credit (standard generation)
- **Total for 78 cards:** ~78 credits
- **With variations (2-3 per card):** ~156-234 credits

### NightCafe Settings (Recommended)

- **Model:** DALL-E 3 (best quality) or Stable Diffusion XL
- **Aspect Ratio:** 2:3 (Portrait)
- **Quality:** High or Maximum
- **Style:** Cyberpunk, Neon Art, Digital Painting

## 📋 Step-by-Step Process

### For Each Card:

1. **Copy the Prompt**
   - Open `nightcafe-workflow.html`
   - Find the card you want to generate
   - Click "Copy Prompt" button

2. **Paste into NightCafe**
   - Go to NightCafe Creator
   - Paste the prompt
   - Select settings (DALL-E 3, 2:3, High quality)

3. **Generate**
   - Click "Create" button
   - Wait for generation (uses 1 credit)
   - Review the result

4. **Download & Save**
   - Download the image
   - Save as the exact filename shown (e.g., `major-the-hodler.png`)
   - Save to: `assets/cards/`

5. **Mark Complete**
   - Click "Mark Complete" in workflow file
   - Move to next card

## 🎨 Matching Your Example Images

Based on your example images in `tools/Tarotcards/`, here's how to match that style:

### Style Keywords to Add:

- "mystical tarot card art"
- "ethereal atmosphere"
- "soft lighting"
- "golden hour glow"
- "peaceful, caring aesthetic"
- "palace-like setting"
- "traditional tarot with modern twist"

### Example Enhanced Prompt:

```
[Original prompt] + mystical tarot card art, ethereal atmosphere, soft golden lighting, peaceful palace setting, traditional tarot aesthetic with modern crypto elements, caring and warm atmosphere, vertical portrait 2:3 ratio
```

## 💰 Credit Optimization Tips

### Save Credits:

1. **Generate 1-2 variations first** - see which style you prefer
2. **Use same model** for consistency (all DALL-E 3 or all SDXL)
3. **Batch similar cards** - generate all Major Arcana together for consistency
4. **Skip upscaling** if base quality is good enough

### Maximize Quality:

1. **Use High/Maximum quality** setting
2. **Generate at 1024x1536** or higher
3. **Review before downloading** - regenerate if needed
4. **Save as PNG** for best quality

## 📁 File Organization

After generation, your files should be:

```
assets/cards/
  ├── major-the-hodler.png
  ├── major-the-miner.png
  ├── minor-ace-of-tokens.png
  └── ... (all 78 cards)
```

## 🔄 Integration After Generation

Once you have the images:

1. **Place in correct directory:**

   ```
   assets/cards/major-the-hodler.png
   assets/cards/minor-ace-of-tokens.png
   etc.
   ```

2. **Update SVG cards (optional):**
   - Use `scripts/integrate-ai-images.js` to embed images
   - Or manually update SVG files to reference PNGs

3. **Test in browser:**
   - Open `test-cards.html`
   - Verify all images load correctly

## 📊 Progress Tracking

The workflow file tracks:

- ✅ Completed cards
- ⏳ Pending cards
- 💳 Credits used
- 📁 File names

## 🆘 Troubleshooting

### Not Enough Credits?

- Generate cards in batches (e.g., Major Arcana first)
- Use free daily credits (5 per day)
- Consider upgrading subscription tier

### Images Not Matching Style?

- Try different models (SDXL vs DALL-E 3)
- Adjust prompts slightly
- Use style modifiers in NightCafe

### File Naming Issues?

- Must match exactly: `major-the-hodler.png`
- Use lowercase with hyphens
- Save as PNG format

## 🎯 Next Steps

1. Generate workflow file: `python tools/nightcafe-credit-generator.py`
2. Open `nightcafe-workflow.html`
3. Start generating cards using your NightCafe credits!
4. Save images to `assets/cards/`
5. Test in the app

**Remember:** Each card uses ~1 credit. Plan your credit usage accordingly!
