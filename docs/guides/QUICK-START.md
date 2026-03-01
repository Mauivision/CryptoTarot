# 🚀 Crypto Tarot - Quick Start Guide

Get up and running in 5 minutes!

## Installation

```bash
# Install dependencies
npm install
```

## Start Development Server

```bash
npm start
```

Then open: **http://localhost:8000**

## Common Tasks

### Format Code

```bash
npm run format
```

### Generate PDF Book

```bash
npm run export:pdf
```

### Generate Complete Book (All Formats)

```bash
npm run generate:book
```

### Regenerate Card Map

```bash
npm run generate:cardmap
```

## Environment Variables (Optional)

If you want to use AI features:

1. Copy `.env.example` to `.env`
2. Add your API keys:
   - `OPENAI_API_KEY` - For AI readings
   - `ELEVENLABS_API_KEY` - For voice features

## Project Structure

- `index.html` - Main app
- `script.js` - Core logic
- `data/card-meanings.js` - All card data
- `scripts/` - Utility scripts
- `print/book/` - Generated book files

## Need Help?

- See `PROJECT-SETUP.md` for detailed setup
- See `README.md` for full documentation
- See `CONTRIBUTING.md` for contribution guidelines

## That's It! 🎉

You're ready to start developing. Happy coding! 🔮✨
