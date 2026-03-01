# Legacy Tools Documentation

**Status:** Legacy/Reference Only

This directory contains development tools that are not actively used in the main application but are kept for reference.

## Python Tools

### `fortune_teller.py`

**Status:** Legacy - Not used in main application

A Python-based fortune teller script that uses:

- ElevenLabs API for text-to-speech
- Pygame for audio playback
- References `data/deck.json` (which doesn't exist in current structure)

**Note:** The current application uses JavaScript-based fortune telling in `index.html` and `fortune-teller.html`. This Python script is kept for reference but is not integrated into the main application.

**Dependencies:**

- `elevenlabs` - Text-to-speech API
- `pygame` - Audio playback
- Python 3.x

**Usage (if needed):**

```bash
pip install -r requirements.txt
python tools/fortune_teller.py
```

**Note:** This script expects `data/deck.json` which doesn't exist. The current project uses `data/card-meanings.js` as the canonical source.

---

## Image Generation Tools

### `generate-card-images.py`

**Status:** Active - For generating card images via OpenAI DALL-E

Generates all 78 tarot card images using OpenAI DALL-E API.

**Usage:**

```bash
export OPENAI_API_KEY=your_key_here
python tools/generate-card-images.py
```

### `generate-nightcafe-prompts.mjs` / `generate-nightcafe-prompts.py`

**Status:** Active - For NightCafe image generation

Generates prompts for NightCafe AI image generation.

**Usage:**

```bash
node tools/generate-nightcafe-prompts.mjs
# or
python tools/generate-nightcafe-prompts.py
```

### `nightcafe-credit-generator.py`

**Status:** Active - For managing NightCafe credits

Manages NightCafe API credits for image generation.

---

## Verification Tools

### `verify-deck-assets.mjs`

**Status:** Active - For verifying card assets

Verifies that all card assets are present and correctly named.

**Usage:**

```bash
node tools/verify-deck-assets.mjs
```

---

**Last Updated:** 2025-01-15
