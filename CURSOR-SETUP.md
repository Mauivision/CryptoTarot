# 🎯 Cursor AI Setup Guide

This document explains all the configuration files that help Cursor AI understand and work with your Crypto Tarot project.

## Configuration Files Overview

### `.cursorrules`

**Purpose**: Custom rules for Cursor AI to understand your project context

- Defines project structure and conventions
- Documents key functions and patterns
- Provides context about the crypto/tarot theme
- Helps Cursor generate code that matches your style

### `jsconfig.json`

**Purpose**: JavaScript project configuration for better IntelliSense

- Enables type checking and autocomplete
- Configures module resolution
- Sets up path aliases (`@data/*`, `@js/*`, etc.)
- Improves code navigation and refactoring

### `.vscode/settings.json`

**Purpose**: Editor settings for consistent development experience

- Auto-formatting on save
- Import management
- File watcher exclusions (performance)
- Bracket pair colorization
- Quick suggestions enabled

### `.vscode/extensions.json`

**Purpose**: Recommended extensions for the project

- Prettier (code formatting)
- ESLint (code linting)
- TypeScript support (for JS IntelliSense)
- Markdown tools
- Python support (for image generation scripts)
- LaTeX support (for PDF generation)

## How Cursor Uses These Files

1. **`.cursorrules`** → Cursor reads this to understand:
   - Your coding style preferences
   - Project structure and conventions
   - Key functions and their purposes
   - Common patterns in your codebase

2. **`jsconfig.json`** → Cursor uses this for:
   - Better autocomplete suggestions
   - Understanding module imports
   - Path resolution for `@data/*` style imports
   - Type inference in JavaScript

3. **`.vscode/settings.json`** → Cursor respects:
   - Formatting preferences
   - Import organization
   - File exclusions (faster indexing)
   - Editor behavior

## Tips for Better Cursor Experience

### 1. Use Descriptive Comments

Cursor reads comments to understand context:

```javascript
// Resolves card image path using hash-based variant selection
function getCardImagePath(card) { ... }
```

### 2. Keep `.cursorrules` Updated

When you add new patterns or conventions, update `.cursorrules` so Cursor knows about them.

### 3. Use Path Aliases

You can use the configured path aliases:

```javascript
// Instead of:
import { CARD_MEANINGS } from '../../../data/card-meanings.js';

// You can use (if you enable it):
import { CARD_MEANINGS } from '@data/card-meanings.js';
```

### 4. Leverage JSDoc Types

Add JSDoc comments for better type hints:

```javascript
/**
 * @param {Object} card - Card object with title, type, suit
 * @returns {string} Image path
 */
function getCardImagePath(card) { ... }
```

## Verifying Setup

1. **Check IntelliSense**: Open `script.js` and hover over `CARD_MEANINGS` - you should see type info
2. **Test Auto-imports**: Type a function name from another file - Cursor should suggest imports
3. **Verify Formatting**: Save a file - it should auto-format with Prettier
4. **Check Cursor Chat**: Ask Cursor about your project - it should reference `.cursorrules`

## Troubleshooting

### Cursor doesn't understand my code structure

- Make sure `jsconfig.json` includes all relevant directories
- Check that `.cursorrules` is in the project root
- Reload Cursor window: `Ctrl+Shift+P` → "Reload Window"

### Autocomplete not working

- Verify `jsconfig.json` is valid JSON
- Check that files aren't in `exclude` list
- Restart TypeScript server: `Ctrl+Shift+P` → "TypeScript: Restart TS Server"

### Formatting not working

- Ensure Prettier extension is installed
- Check `.prettierrc` exists
- Verify `editor.formatOnSave` is enabled in settings

## Next Steps

- Review `.cursorrules` and customize for your workflow
- Add JSDoc comments to key functions for better type hints
- Keep `jsconfig.json` updated as you add new directories
- Share your `.cursorrules` patterns with the team for consistency

---

**Remember**: These files work together to give Cursor AI the best understanding of your project. Keep them updated as your project evolves! 🔮✨
