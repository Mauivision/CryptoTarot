# Export Crypto Tarot Book to PDF

## Files Available

1. **crypto-tarot-book.md** - Complete Markdown version with all card details
2. **crypto-tarot-book.tex** - LaTeX version ready for PDF compilation

## Quick Export (LaTeX - Recommended)

The LaTeX file is already formatted with:

- One card per page
- Left-aligned image (40% width)
- Right-aligned text (55% width)
- Table of contents
- Professional book layout

### Steps:

```bash
cd print/book
pdflatex crypto-tarot-book.tex
pdflatex crypto-tarot-book.tex  # Run twice for table of contents
```

This will create `crypto-tarot-book.pdf` with all 78 cards.

## Alternative: Pandoc Export

If you prefer using Pandoc:

```bash
pandoc print/book/crypto-tarot-book.md \
  -o print/book/crypto-tarot-book.pdf \
  --pdf-engine=xelatex \
  --toc \
  --toc-depth=2 \
  -V geometry:margin=2cm \
  -V fontsize=11pt
```

## Book Contents

The comprehensive book includes:

### For Each Card:

- **Card Number** (Major Arcana only)
- **Cosmic Ruler** (astrological correspondence)
- **Cosmic Summary** (brief overview)
- **Visual Description** (detailed imagery)
- **Upright Meaning** (core interpretation)
- **Reversed Meaning** (shadow aspect)
- **Crypto Flavor** (real-world Web3 scenario)
- **Crypto Foresight** (forward-looking guidance)
- **Educational Insight** (technical knowledge)
- **Strategy** (practical action steps)
- **Extended Reflection** (philosophical insights)
- **Reading Context** (comprehensive narrative)

### Structure:

- Introduction
- Major Arcana (22 cards)
- Minor Arcana (56 cards):
  - Tokens Suit (14 cards)
  - Liquidity Suit (14 cards)
  - Security Suit (14 cards)
  - Nodes Suit (14 cards)
- Appendix (usage guide, reading tips, disclaimer)

## Troubleshooting

### LaTeX Errors

- Install full LaTeX distribution (MiKTeX, TeX Live, or MacTeX)
- Ensure all packages are installed
- Check image paths are correct relative to LaTeX file location

### Missing Images

- Images should be in `tools/CryptoTarot1-78/` directory
- Paths are relative to the LaTeX file location
- Verify all 78 card images exist

### Layout Issues

- Adjust `minipage` widths in the LaTeX template if needed
- Modify margins in `\geometry` command
- Check page breaks with `\newpage` commands

## File Sizes

- Markdown: ~500KB
- LaTeX: ~300KB
- PDF: ~15-25MB (depending on image compression)

## Next Steps

1. Compile LaTeX to PDF
2. Review PDF for layout and formatting
3. Adjust LaTeX template if needed
4. Recompile until satisfied
5. Print or distribute PDF
