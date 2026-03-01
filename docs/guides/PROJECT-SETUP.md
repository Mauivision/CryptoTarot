# Crypto Tarot - Project Setup Guide

This guide helps you set up the Crypto Tarot project for development in Cursor (or any IDE).

## Prerequisites

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **Python 3** (for local server) - Usually pre-installed on Mac/Linux
- **Git** (for version control) - [Download](https://git-scm.com/)

## Initial Setup

1. **Install Node.js dependencies:**

   ```bash
   npm install
   ```

2. **Install recommended Cursor/VSCode extensions:**
   - Prettier - Code formatter
   - ESLint (optional) - Code linting
   - Markdown All in One - Markdown support
   - LaTeX Workshop (optional) - For LaTeX files

   These are listed in `.vscode/extensions.json` and Cursor will prompt you to install them.

## Development Workflow

### Starting the Development Server

```bash
npm start
# or
npm run dev
# or
npm run serve
```

Then open `http://localhost:8000` in your browser.

### Available Scripts

- `npm start` - Start Python HTTP server
- `npm run dev` - Same as start
- `npm run serve` - Start Node.js HTTP server
- `npm run export:pdf` - Generate PDF book using Puppeteer
- `npm run export:markdown` - Generate Markdown book
- `npm run export:latex` - Generate LaTeX book
- `npm run generate:book` - Generate complete book (all formats)
- `npm run format` - Format all files with Prettier
- `npm run format:check` - Check formatting without changing files
- `npm run generate:cardmap` - Regenerate card mapping

### Code Formatting

The project uses **Prettier** for consistent code formatting:

- **Auto-format on save** is enabled (configured in `.vscode/settings.json`)
- **Manual formatting:** `npm run format`
- **Check formatting:** `npm run format:check`

## Project Structure

```
CryptoTarot/
├── .vscode/              # Cursor/VSCode settings
│   ├── settings.json     # Editor settings
│   ├── extensions.json   # Recommended extensions
│   ├── launch.json       # Debug configurations
│   └── tasks.json        # Task definitions
├── assets/               # Images and static assets
├── data/                 # Card data and metadata
├── docs/                 # Documentation
├── scripts/              # Build and utility scripts
├── print/                # Book generation files
├── index.html            # Main application
├── script.js             # Core logic
├── styles.css            # Styling
├── package.json          # Node.js dependencies
├── .gitignore           # Git ignore rules
├── .editorconfig        # Editor configuration
└── .prettierrc          # Prettier configuration
```

## Cursor/VSCode Features

### Debugging

Press `F5` or use the Debug panel to:

- **Export PDF** - Run the PDF export script
- **Launch Chrome** - Debug the web app in Chrome
- **Attach to Chrome** - Attach to running Chrome instance

### Tasks

Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac) and type "Tasks: Run Task" to:

- Start Dev Server
- Export PDF
- Generate Book Markdown
- Format All Files

### Recommended Extensions

Cursor will prompt you to install recommended extensions. These include:

- Prettier (code formatting)
- ESLint (code linting)
- Markdown support
- LaTeX support (for book generation)

## File Organization

- **HTML files** - Main application pages
- **JavaScript files** - Application logic
- **CSS files** - Styling
- **Data files** - Card meanings and metadata
- **Scripts** - Build and utility scripts (`.mjs` files)
- **Documentation** - Markdown files in `docs/`

## Git Workflow

1. **Create a branch** for your changes
2. **Make changes** and format code (`npm run format`)
3. **Commit** with clear messages
4. **Push** and create a pull request

## Troubleshooting

### Port Already in Use

If port 8000 is busy:

```bash
# Use a different port
python -m http.server 8080
```

### Node Modules Issues

```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

### PDF Export Issues

Make sure Puppeteer is installed:

```bash
npm install puppeteer
```

### Formatting Not Working

1. Install Prettier extension in Cursor
2. Check `.vscode/settings.json` exists
3. Reload Cursor window

## Next Steps

1. Read `README.md` for project overview
2. Check `docs/PROJECT-PLAN.md` for development roadmap
3. Explore `scripts/` for available utilities
4. Review `CONTRIBUTING.md` for contribution guidelines

## Support

For questions or issues:

- Check `docs/` folder for detailed documentation
- Review existing code for examples
- Check `TODO.md` for known issues
