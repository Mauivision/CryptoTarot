/**
 * Export Crypto Tarot book from Markdown to PDF
 * Uses markdown-pdf or puppeteer-based conversion
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INPUT_MD = path.join(__dirname, '..', 'print', 'book', 'crypto-tarot-book.md');
const OUTPUT_PDF = path.join(__dirname, '..', 'print', 'book', 'crypto-tarot-book.pdf');

// Try to use markdown-pdf if available, otherwise provide instructions
async function exportToPDF() {
  console.log('📄 Exporting Crypto Tarot book to PDF...\n');

  // Check if markdown file exists
  if (!fs.existsSync(INPUT_MD)) {
    console.error(`❌ Markdown file not found: ${INPUT_MD}`);
    process.exit(1);
  }

  console.log(`📖 Reading: ${INPUT_MD}`);
  const markdown = fs.readFileSync(INPUT_MD, 'utf8');
  console.log(`✅ Markdown loaded (${(markdown.length / 1024).toFixed(1)}KB)\n`);

  // Try different PDF generation methods
  try {
    // Method 1: Try markdown-pdf (if installed)
    const { default: markdownpdf } = await import('markdown-pdf');
    console.log('🔄 Using markdown-pdf...\n');

    return new Promise((resolve, reject) => {
      markdownpdf()
        .from.string(markdown)
        .to(OUTPUT_PDF, err => {
          if (err) {
            reject(err);
          } else {
            console.log(`✅ PDF created: ${OUTPUT_PDF}`);
            resolve();
          }
        });
    });
  } catch (err1) {
    console.log('⚠️  markdown-pdf not available, trying puppeteer...\n');

    try {
      // Method 2: Try puppeteer with markdown-to-html
      const puppeteer = await import('puppeteer');
      const { marked } = await import('marked');

      console.log('🔄 Using Puppeteer + Marked...\n');

      // Convert markdown to HTML
      const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    @page {
      size: A4;
      margin: 2cm;
    }
    body {
      font-family: 'Georgia', 'Times New Roman', serif;
      line-height: 1.6;
      color: #333;
      max-width: 100%;
    }
    h1 {
      font-size: 2em;
      margin-top: 1em;
      margin-bottom: 0.5em;
      page-break-before: always;
    }
    h1:first-of-type {
      page-break-before: auto;
    }
    h2 {
      font-size: 1.5em;
      margin-top: 0.8em;
      margin-bottom: 0.4em;
    }
    h3 {
      font-size: 1.2em;
      margin-top: 0.6em;
      margin-bottom: 0.3em;
    }
    img {
      max-width: 100%;
      height: auto;
      page-break-inside: avoid;
    }
    p {
      margin: 0.5em 0;
    }
    .newpage {
      page-break-before: always;
    }
    code {
      background: #f4f4f4;
      padding: 2px 4px;
      border-radius: 3px;
      font-family: 'Courier New', monospace;
    }
    pre {
      background: #f4f4f4;
      padding: 1em;
      border-radius: 5px;
      overflow-x: auto;
    }
    blockquote {
      border-left: 4px solid #ddd;
      padding-left: 1em;
      margin-left: 0;
      font-style: italic;
    }
    ul, ol {
      margin: 0.5em 0;
      padding-left: 2em;
    }
    strong {
      font-weight: bold;
    }
    em {
      font-style: italic;
    }
  </style>
</head>
<body>
${marked.parse(markdown.replace(/\\newpage/g, '<div class="newpage"></div>'))}
</body>
</html>
      `;

      const browser = await puppeteer.default.launch();
      const page = await browser.newPage();
      await page.setContent(html, { waitUntil: 'networkidle0' });
      await page.pdf({
        path: OUTPUT_PDF,
        format: 'A4',
        margin: {
          top: '2cm',
          right: '2cm',
          bottom: '2cm',
          left: '2cm',
        },
        printBackground: true,
      });
      await browser.close();

      console.log(`✅ PDF created: ${OUTPUT_PDF}`);
    } catch (err2) {
      console.error('❌ PDF generation failed. Please install one of the following:\n');
      console.error('Option 1: Install markdown-pdf');
      console.error('  npm install -g markdown-pdf');
      console.error(
        '  Then run: markdown-pdf print/book/crypto-tarot-book.md -o print/book/crypto-tarot-book.pdf\n'
      );
      console.error('Option 2: Install Puppeteer and Marked');
      console.error('  npm install puppeteer marked');
      console.error('  Then run this script again\n');
      console.error('Option 3: Use Pandoc (recommended for best quality)');
      console.error('  Install Pandoc: https://pandoc.org/installing.html');
      console.error('  Then run:');
      console.error(
        '  pandoc print/book/crypto-tarot-book.md -o print/book/crypto-tarot-book.pdf --pdf-engine=xelatex --toc\n'
      );
      console.error('Option 4: Use LaTeX (best for professional layout)');
      console.error('  Install MiKTeX or TeX Live');
      console.error('  cd print/book');
      console.error('  pdflatex crypto-tarot-book.tex');
      console.error('  pdflatex crypto-tarot-book.tex  # Run twice for TOC\n');
      process.exit(1);
    }
  }
}

exportToPDF().catch(err => {
  console.error('❌ Error:', err.message);
  process.exit(1);
});
