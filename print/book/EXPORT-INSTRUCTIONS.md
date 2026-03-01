# Export Crypto Tarot Book to PDF - Instructions

## Quick Method: Browser Print to PDF ✅

I've created an HTML file that you can open in your browser and print to PDF:

1. **Open the HTML file:**
   - Navigate to: `print/book/crypto-tarot-book-for-pdf.html`
   - Double-click to open in your default browser

2. **Print to PDF:**
   - Press `Ctrl+P` (Windows) or `Cmd+P` (Mac)
   - Select "Save as PDF" or "Microsoft Print to PDF" as the printer
   - Click "Save" and choose a location
   - The PDF will be created with proper formatting

## Alternative Methods

### Method 1: Install Pandoc (Best Quality)

1. **Install Pandoc:**
   - Download from: https://pandoc.org/installing.html
   - Or use: `winget install JohnMacFarlane.Pandoc` (Windows)

2. **Export to PDF:**
   ```bash
   cd print/book
   pandoc crypto-tarot-book.md -o crypto-tarot-book.pdf --pdf-engine=xelatex --toc --toc-depth=2 -V geometry:margin=2cm -V fontsize=11pt
   ```

### Method 2: Install LaTeX (Professional Layout)

1. **Install MiKTeX (Windows):**
   - Download from: https://miktex.org/download
   - Or use: `winget install MiKTeX.MiKTeX`

2. **Compile LaTeX:**
   ```bash
   cd print/book
   pdflatex crypto-tarot-book.tex
   pdflatex crypto-tarot-book.tex  # Run twice for table of contents
   ```

### Method 3: Online Converters

1. **Markdown to PDF Online:**
   - Upload `crypto-tarot-book.md` to:
     - https://www.markdowntopdf.com/
     - https://md2pdf.netlify.app/
     - https://dillinger.io/ (export as PDF)

2. **Note:** Online converters may not handle images correctly. Use browser print method for best results.

### Method 4: Node.js Libraries

If you have Node.js installed, you can install PDF generation libraries:

```bash
npm install -g markdown-pdf
markdown-pdf print/book/crypto-tarot-book.md -o print/book/crypto-tarot-book.pdf
```

Or:

```bash
npm install puppeteer marked
node scripts/export-to-pdf.mjs
```

## Recommended Approach

**For immediate use:** Use the browser print method (Method 1 above) - it's the fastest and requires no installation.

**For best quality:** Install Pandoc and use Method 1 - it produces professional PDFs with proper formatting.

**For exact layout control:** Install LaTeX and use Method 2 - the LaTeX file is already configured for one card per page with images on the left.

## File Locations

- **Markdown:** `print/book/crypto-tarot-book.md`
- **LaTeX:** `print/book/crypto-tarot-book.tex`
- **HTML (for printing):** `print/book/crypto-tarot-book-for-pdf.html`
- **Output PDF:** `print/book/crypto-tarot-book.pdf` (after export)

## Troubleshooting

### Images Not Showing

- Make sure `tools/CryptoTarot1-78/` directory exists with all card images
- Check that image paths in the markdown are correct

### Page Breaks Not Working

- The HTML file uses CSS page breaks that work best when printing from browser
- For LaTeX, `\newpage` commands are already in place

### Large File Size

- PDFs with images can be 15-25MB
- Consider image compression if file size is an issue
