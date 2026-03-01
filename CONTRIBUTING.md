# Contributing to Crypto Tarot

Thanks for your interest in contributing! This is a static web project (HTML/CSS/JS) with a focus on tarot storytelling, an interactive fortune teller, and a Chain Game prototype.

## Quick Start

```bash
npm install
npm run serve  # serves at http://localhost:8000
```

## Branching & PRs

- Create a feature branch: `feat/<slug>` or `fix/<slug>`
- Use semantic commits: `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, `perf:`, `test:`
- Open a PR to `main` with clear summary and screenshots

## Coding Standards

- ES modules, single quotes, readable naming (see `.prettierrc`)
- Prefer small, focused PRs
- Avoid adding heavy dependencies for the static site

## Before Commit

```bash
npm run format
```

## Issues

- Use the provided Issue templates (bug/feature)
- Include steps to reproduce for bugs
- For features, provide acceptance criteria

## Docs

- Update `PROJECT-FINALIZATION.md`, `chain-game/NEXT-STEPS.md`, or `README.md` as needed

# Contributing to Crypto Tarot

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing to the project.

## Development Setup

1. **Clone the repository** (if applicable)
2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start development server:**

   ```bash
   npm start
   # or
   npm run dev
   ```

4. **Open in browser:**
   ```
   http://localhost:8000
   ```

## Code Style

- Use **Prettier** for formatting (configured in `.prettierrc`)
- Follow **EditorConfig** settings (configured in `.editorconfig`)
- Use **single quotes** for JavaScript strings
- Use **2 spaces** for indentation
- Add **trailing commas** in multi-line structures

## Project Structure

- `index.html` - Main application
- `script.js` - Core application logic
- `data/` - Card data and metadata
- `assets/` - Images and static assets
- `scripts/` - Build and utility scripts
- `docs/` - Documentation

## Scripts

- `npm start` - Start development server
- `npm run export:pdf` - Generate PDF book
- `npm run format` - Format all files with Prettier
- `npm run generate:book` - Generate complete book (markdown + LaTeX + PDF)

## Adding New Cards

1. Add card data to `data/card-meanings.js`
2. Add card images to `tools/CryptoTarot1-78/`
3. Run `npm run generate:cardmap` to update card mapping

## Pull Request Process

1. Create a feature branch
2. Make your changes
3. Format code: `npm run format`
4. Test your changes locally
5. Submit a pull request with a clear description

## Questions?

Check the `docs/` folder for more detailed documentation.
