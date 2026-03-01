# Crypto Tarot Book Export Guide

## Files Created

1. **crypto-tarot-book.md** - Clean Markdown format with all cards
   - Format: `# CARD_NAME`, `## Upright:`, `## Reversed:`, `## Reading Context:`
   - Image paths preserved: `tools/CryptoTarot1-78/major-*.jpg`

2. **crypto-tarot-book.tex** - Complete LaTeX document
   - One card per page
   - Left-aligned image (40% width)
   - Right-aligned text (55% width)
   - Table of contents included

3. **single-card-test.tex** - Test template for one card
   - Use this to verify layout before generating full book

## Export to PDF

### Option 1: Using LaTeX (Recommended)

```bash
cd print/book
pdflatex crypto-tarot-book.tex
pdflatex crypto-tarot-book.tex  # Run twice for TOC
```

This will create `crypto-tarot-book.pdf` with the exact layout you requested.

### Option 2: Using Pandoc

```bash
node scripts/export-to-pdf-pandoc.mjs
```

Or manually:

```bash
pandoc print/book/crypto-tarot-book.md -o print/book/crypto-tarot-book.pdf \
  --pdf-engine=xelatex \
  --template=print/book/pandoc-template.tex \
  --toc
```

### Option 3: Test Single Card First

```bash
cd print/book
pdflatex single-card-test.tex
```

If the layout looks good, the full book will use the same layout.

## Layout Details

- **One card per page**: Each card starts on a new page
- **Image left**: Card image takes 40% of page width, left-aligned
- **Text right**: Meanings take 55% of page width, right-aligned
- **Format**:
  - `# CARD_NAME` (section header)
  - `## Upright:` (subsection)
  - `## Reversed:` (subsection)
  - `## Reading Context:` (subsection with full book chapter)

## Troubleshooting

### Images not found

- Make sure image paths are relative to the LaTeX file location
- Paths are: `tools/CryptoTarot1-78/major-*.jpg` or `minor-*.jpg`

### LaTeX errors

- Install full LaTeX distribution:
  - Windows: MiKTeX or TeX Live
  - macOS: MacTeX
  - Linux: `sudo apt-get install texlive-full`

### Layout issues

- If the layout doesn't look right, check `single-card-test.tex` first
- Adjust `minipage` widths in the LaTeX template if needed

## Next Steps

1. **Test single card**: Compile `single-card-test.tex` to verify layout
2. **Generate full book**: Compile `crypto-tarot-book.tex`
3. **Review PDF**: Check that all 78 cards are formatted correctly
4. **Adjust if needed**: Modify the LaTeX template and regenerate

## Scripts Available

- `scripts/convert-to-markdown.mjs` - Generate Markdown from card meanings
- `scripts/generate-full-book-latex.mjs` - Generate LaTeX with proper layout
- `scripts/create-single-card-pdf.mjs` - Create test card
- `scripts/export-to-pdf-pandoc.mjs` - Export via Pandoc (alternative)
