# Puppeteer PDF Export - Information

## What is Puppeteer?

**Puppeteer** is a Node.js library that provides a high-level API to control Chrome or Chromium browsers programmatically. It's developed by Google and is widely used for:

- **Web Scraping**: Automating browser interactions
- **PDF Generation**: Creating high-quality PDFs from HTML
- **Screenshot Capture**: Taking screenshots of web pages
- **Testing**: Automating browser-based tests
- **Performance Monitoring**: Measuring page load times

## Why Puppeteer for PDF Generation?

Puppeteer is excellent for PDF creation because:

1. **Chrome Engine**: Uses the same rendering engine as Chrome browser, ensuring consistent, high-quality output
2. **CSS Support**: Full support for CSS print styles, page breaks, and advanced layouts
3. **Image Handling**: Properly renders images, including those from local file paths
4. **Professional Quality**: Produces print-ready PDFs suitable for professional printing
5. **Flexible**: Can handle complex HTML/CSS layouts that other tools might struggle with

## How We Used It

We created a script (`scripts/export-pdf-puppeteer.mjs`) that:

1. **Reads the Markdown file** (`crypto-tarot-book.md`)
2. **Converts to HTML** using the `marked` library
3. **Adds print-optimized CSS** for professional formatting
4. **Launches a headless Chrome browser** via Puppeteer
5. **Renders the HTML** with all images and styling
6. **Exports to PDF** with proper page breaks and margins

## Generated PDF

- **Location**: `print/book/crypto-tarot-book.pdf`
- **Size**: ~1.38 MB
- **Format**: A4 with 2cm margins
- **Content**: All 78 cards with full descriptions, images, and formatting

## Usage

To regenerate the PDF:

```bash
node scripts/export-pdf-puppeteer.mjs
```

## Advantages Over Other Methods

### vs. Browser Print

- ✅ Automated (no manual steps)
- ✅ Consistent results
- ✅ Can be scripted/automated
- ✅ Better control over settings

### vs. Pandoc

- ✅ Better CSS support
- ✅ More accurate rendering
- ✅ Handles complex layouts better
- ✅ No LaTeX dependency needed

### vs. LaTeX

- ✅ Easier to use (no LaTeX knowledge needed)
- ✅ Better HTML/CSS support
- ✅ Faster setup
- ✅ More flexible styling

## Technical Details

- **Engine**: Chromium (headless Chrome)
- **Page Format**: A4
- **Margins**: 2cm on all sides
- **Print Background**: Enabled (for colors/images)
- **Page Breaks**: Automatic based on CSS

## Dependencies

- `puppeteer`: Chrome automation library
- `marked`: Markdown to HTML converter

Both are installed via npm and saved in `package.json`.
