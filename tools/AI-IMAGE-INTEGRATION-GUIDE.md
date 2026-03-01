# AI Image Integration Guide for Crypto Tarot

## Overview

This guide explains how to use AI image generators (NightCafe, DALL-E, Midjourney, etc.) to create beautiful artwork for your tarot cards and integrate them with the existing code-generated SVG cards.

## Workflow Options

### Option 1: Replace Code Artwork with AI Images (Recommended)

**Best for:** High-quality, detailed character artwork

1. **Generate Images:**
   - Use NightCafe, DALL-E, or other AI tools
   - Generate images matching each card's symbolism
   - Save as PNG/JPG (1024x1536 or higher recommended)

2. **Save Images:**
   - Place images in: `assets/cards/ai-generated/`
   - Name them: `major-the-hodler.png`, `minor-ace-of-tokens.png`, etc.

3. **Integrate:**
   - The SVG cards will embed the AI images
   - Code-generated effects can overlay for consistency

### Option 2: Hybrid Approach (AI + Code Effects)

**Best for:** Combining AI realism with code-generated cyberpunk effects

- AI image provides the character/background
- Code-generated neon glows, particles, and effects overlay
- Creates a unique cyberpunk aesthetic

### Option 3: AI as Background Layer

**Best for:** Keeping code-generated characters with AI backgrounds

- AI image creates atmospheric background
- Code-generated characters remain in foreground
- Best of both worlds

## Step-by-Step: Using NightCafe

### 1. Generate Prompts

```bash
python tools/generate-nightcafe-prompts.py
```

This creates `nightcafe-batch-prompts.txt` with all 78 prompts ready to copy-paste.

### 2. Generate Images in NightCafe

1. Go to https://creator.nightcafe.studio
2. For each card:
   - Copy the prompt from `nightcafe-batch-prompts.txt`
   - Paste into NightCafe Creator
   - Settings: DALL-E 3 or SDXL, 2:3 ratio, High quality
   - Generate and download

### 3. Organize Images

Save downloaded images to:

```
assets/cards/ai-generated/
  ├── major-the-hodler.png
  ├── major-the-miner.png
  ├── minor-ace-of-tokens.png
  └── ... (all 78 cards)
```

### 4. Integrate into SVG Cards

**Manual Method:**

1. Open an SVG card file
2. Find the artwork section (starts with `<!-- Beautiful artwork representing`)
3. Replace with:

```xml
<!-- Beautiful artwork representing [Card Name] - AI Generated -->
<g>
  <image href="ai-generated/major-the-hodler.png"
         x="100" y="300"
         width="500" height="400"
         preserveAspectRatio="xMidYMid meet"
         opacity="0.95"/>
</g>
```

**Automated Method:**

```bash
node scripts/integrate-ai-images.js
```

## Step-by-Step: Using DALL-E API

### 1. Generate Images Programmatically

```bash
python tools/generate-card-images.py
```

This uses the OpenAI DALL-E API to generate all 78 cards automatically.

**Requirements:**

- OpenAI API key set as environment variable: `OPENAI_API_KEY`
- Install: `pip install openai requests`

**Cost:** ~$3.12 for all 78 cards (DALL-E 3 HD)

### 2. Images Auto-Saved

Images are automatically saved to `assets/cards/` as PNG files.

### 3. Update SVG to Reference Images

The script can automatically update SVG files to reference the generated PNGs.

## Image Specifications

### Recommended Settings

- **Format:** PNG (best quality) or JPG (smaller file size)
- **Dimensions:** 1024x1536 pixels (2:3 ratio, standard tarot)
- **Aspect Ratio:** Portrait (vertical)
- **Quality:** High/HD for best results
- **Style:** Cyberpunk, neon, mystical tarot aesthetic

### File Naming Convention

Match the card ID exactly:

- `major-the-hodler.png` ✅
- `major-the-hodler.jpg` ✅
- `Major The Hodler.png` ❌ (wrong format)
- `hodler.png` ❌ (missing prefix)

## Integration Scripts

### Check Available Images

```bash
node scripts/integrate-ai-images.js
```

Shows which AI-generated images are available and ready to integrate.

### Batch Integration

Create a mapping file `assets/cards/ai-generated/image-mapping.json`:

```json
{
  "cards": {
    "major-the-hodler": "major-the-hodler.png",
    "major-the-miner": "major-the-miner.png"
  }
}
```

Then run integration script to automatically update all cards.

## Tips for Best Results

### NightCafe Tips

1. **Consistency:** Use the same model (DALL-E 3 or SDXL) for all cards
2. **Style Modifiers:** Add `--style cyberpunk` or `--v 5` for consistent style
3. **Variations:** Generate 2-3 variations per card, pick the best
4. **Upscaling:** Use NightCafe's upscale feature for higher resolution

### DALL-E Tips

1. **Prompts:** The script already includes detailed, optimized prompts
2. **Batch Processing:** Script handles rate limiting automatically
3. **Resume:** Script skips existing images, so you can resume if interrupted

### General Tips

1. **Test First:** Generate 1-2 cards to test the workflow
2. **Backup:** Keep original SVG files backed up
3. **Version Control:** Commit before and after integration
4. **File Size:** Optimize images (TinyPNG, ImageOptim) if file sizes are large

## Troubleshooting

### Images Not Showing

1. **Check Path:** Ensure images are in `assets/cards/ai-generated/`
2. **Check Filename:** Must match card ID exactly (case-sensitive)
3. **Check Format:** SVG `<image>` tag supports PNG, JPG, WebP
4. **Browser Cache:** Hard refresh (Ctrl+F5) to see updates

### Image Quality Issues

1. **Resolution:** Generate at least 1024x1536 for good quality
2. **Upscaling:** Use AI upscaling tools (Topaz, Real-ESRGAN) if needed
3. **Format:** PNG preserves quality better than JPG

### Integration Issues

1. **SVG Structure:** Ensure artwork section is properly formatted
2. **Coordinates:** Adjust `x`, `y`, `width`, `height` in `<image>` tag
3. **Opacity:** Lower opacity (0.7-0.9) can help blend with card design

## Next Steps

1. **Start Small:** Generate 5-10 cards first to test workflow
2. **Refine Prompts:** Adjust prompts based on results
3. **Batch Process:** Once satisfied, generate remaining cards
4. **Integrate:** Use scripts to automatically update SVG files
5. **Polish:** Add code-generated effects overlay for consistency

## Cost Estimates

- **NightCafe:** Depends on subscription tier (credits)
- **DALL-E 3:** ~$0.04 per image = ~$3.12 for 78 cards
- **Midjourney:** ~$10/month subscription
- **Stable Diffusion:** Free (if running locally)

## Resources

- NightCafe: https://creator.nightcafe.studio
- OpenAI API: https://platform.openai.com
- Prompt Generator: `tools/generate-nightcafe-prompts.py`
- Integration Script: `scripts/integrate-ai-images.js`
