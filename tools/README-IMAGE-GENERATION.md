# Crypto Tarot Image Generation Guide

## Quick Start

1. **Install dependencies:**

   ```bash
   pip install openai requests
   ```

2. **Set your OpenAI API key:**

   ```bash
   # Windows PowerShell
   $env:OPENAI_API_KEY="your-api-key-here"

   # Linux/Mac
   export OPENAI_API_KEY="your-api-key-here"
   ```

3. **Run the generator:**
   ```bash
   python tools/generate-card-images.py
   ```

## Cost Estimate

- DALL-E 3: ~$0.04 per image (HD quality)
- Total for 78 cards: ~$3.12
- Time: ~2-3 hours (with rate limiting)

## Alternative: Free Options

### Option 1: Stable Diffusion (Free, Local)

1. Install [Automatic1111](https://github.com/AUTOMATIC1111/stable-diffusion-webui)
2. Download a cyberpunk model from Civitai
3. Use the same prompts from the script
4. Batch process all 78 cards

### Option 2: Midjourney (Paid, Best Quality)

- ~$10/month subscription
- Join Discord bot
- Use prompts like: `/imagine Create a cyberpunk tarot card for "The HODLer"... --ar 2:3 --v 6`
- Upscale with U buttons

### Option 3: Hugging Face (Free, Cloud)

- Use Hugging Face Spaces with Stable Diffusion
- Free tier available
- Can run scripts in Colab for free

## Customization

Edit `tools/generate-card-images.py` to:

- Change image size (currently 1024x1792)
- Adjust prompts
- Add more styling details
- Generate reversed versions

## Notes

- Images are saved as PNG to `assets/cards/`
- Script skips existing images (resume if interrupted)
- Each card gets a unique crypto-themed prompt
- All images are vertical format (tarot card standard)
