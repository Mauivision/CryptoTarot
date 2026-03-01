# 📖 Crypto Tarot - Print & Book Export

**Last Updated:** 2025-01-15

---

## 📚 Book Exports

### Available Formats

- **Markdown:** `print/book/crypto-tarot-book.md`
- **LaTeX:** `print/book/crypto-tarot-book.tex`
- **HTML:** `print/book/book-of-descriptions.html`
- **PDF:** `print/book/crypto-tarot-book.pdf` (generated)

### Generate Book

```bash
# Generate all formats
npm run generate:book

# Individual exports
npm run export:markdown
npm run export:latex
npm run export:pdf
```

---

## 🎴 Physical Card Printing

### Printer Specifications

See [`PRINTER-SPECS.md`](./PRINTER-SPECS.md) for:

- Card dimensions and specifications
- Packaging requirements
- Printer quotes and vendors
- Dielines and templates
- Print order checklist

### Print Order Email Template

See [`PRINTER-SPECS.md`](./PRINTER-SPECS.md) for the complete email template to send to printers.

---

## 📄 Export Instructions

### PDF Export

1. **Using Puppeteer** (Recommended):

   ```bash
   npm run export:pdf
   ```

   Output: `print/book/crypto-tarot-book.pdf`

2. **Using Pandoc** (Alternative):

```bash
 pandoc print/book/crypto-tarot-book.md -o print/book/crypto-tarot-book.pdf --template print/book/pandoc-template.tex
```

3. **Manual Export**:
   - Open `print/book/book-of-descriptions.html` in browser
   - Print to PDF (Ctrl+P / Cmd+P)
   - Save as `crypto-tarot-book.pdf`

### Font Requirements

For PDF export, ensure these fonts are installed:

- **Crimson Text** - Main body text
- **Fira Code** - Code blocks (optional)
- **Helvetica Neue** - Headers (fallback)

Install fonts:

- **Windows:** Download from Google Fonts, install via Font Settings
- **Mac:** Download from Google Fonts, install via Font Book
- **Linux:** `sudo apt-get install fonts-crimson-text fonts-firacode`

---

## 📋 Print Order Process

1. **Review Files**
   - Check all 78 card designs
   - Verify print-ready PDFs
   - Review packaging design

2. **Get Quotes**
   - Contact 3+ printers
   - Use email template from `PRINTER-SPECS.md`
   - Compare prices and timelines

3. **Request Proof**
   - Order physical print proof
   - Review quality and colors
   - Approve or request changes

4. **Place Order**
   - Finalize quantity
   - Confirm delivery date
   - Arrange shipping

5. **Quality Control**
   - Inspect production run
   - Verify specifications
   - Sign off on quality

---

## 📁 File Structure

```
print/
├── README.md              # This file
├── PRINTER-SPECS.md       # Printer specifications & quotes
└── book/                  # Book exports
    ├── crypto-tarot-book.md
    ├── crypto-tarot-book.tex
    ├── crypto-tarot-book.html
    ├── crypto-tarot-book.pdf
    └── EXPORT-TO-PDF.md   # Detailed export instructions
```

---

## 🎨 Design Files

### Card Designs

- **Source:** `tools/CryptoTarot1-78/*.jpg` (135 JPG files)
- **Mapped:** `assets/cardmap.json`
- **Export:** Use scripts to generate print-ready PDFs

### Packaging Design

- **Box Design:** [To be created]
- **Dielines:** [To be created]
- **Templates:** [To be created]

---

## 📝 Notes

- Always request print proofs before final production
- Keep digital backups of all print files
- Document all printer communications
- Factor in shipping and import duties
- Consider test runs for quality verification

---

**Status:** Ready for Print Order
**Last Updated:** 2025-01-15
