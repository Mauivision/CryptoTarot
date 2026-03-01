/**
 * Export Crypto Tarot book to PDF using Puppeteer
 * Uses Chrome's rendering engine for high-quality PDF output
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';
import { marked } from 'marked';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INPUT_MD = path.join(__dirname, '..', 'print', 'book', 'crypto-tarot-book.md');
const OUTPUT_PDF = path.join(__dirname, '..', 'print', 'book', 'crypto-tarot-book.pdf');

// Configure marked for better rendering
marked.setOptions({
  breaks: true,
  gfm: true,
});

function main() {
  console.log('📄 Exporting Crypto Tarot book to PDF using Puppeteer...\n');

  // Check if markdown file exists
  if (!fs.existsSync(INPUT_MD)) {
    console.error(`❌ Markdown file not found: ${INPUT_MD}`);
    process.exit(1);
  }

  console.log(`📖 Reading: ${INPUT_MD}`);
  const markdown = fs.readFileSync(INPUT_MD, 'utf8');
  console.log(`✅ Markdown loaded (${(markdown.length / 1024).toFixed(1)}KB)\n`);

  // Convert markdown to HTML
  console.log('🔄 Converting Markdown to HTML...');
  let html = marked.parse(markdown);

  // Replace \newpage with page break divs
  html = html.replace(/\\newpage/g, '<div style="page-break-before: always;"></div>');

  // Create full HTML document with print styles
  const fullHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Crypto Tarot: Complete Guide to Card Meanings</title>
  <style>
    @page {
      size: A4;
      margin: 2cm;
    }
    
    * {
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Georgia', 'Times New Roman', serif;
      line-height: 1.8;
      color: #2c3e50;
      max-width: 100%;
      margin: 0;
      padding: 0;
      background: #fff;
    }
    
    h1 {
      font-size: 2.2em;
      margin-top: 1.5em;
      margin-bottom: 0.8em;
      color: #1a252f;
      border-bottom: 3px solid #3498db;
      padding-bottom: 0.4em;
      page-break-after: avoid;
    }
    
    h1:first-of-type {
      page-break-before: auto;
      margin-top: 0;
    }
    
    h2 {
      font-size: 1.6em;
      margin-top: 1.2em;
      margin-bottom: 0.6em;
      color: #34495e;
      page-break-after: avoid;
    }
    
    h3 {
      font-size: 1.3em;
      margin-top: 1em;
      margin-bottom: 0.5em;
      color: #555;
      page-break-after: avoid;
    }
    
    img {
      max-width: 100%;
      height: auto;
      margin: 1em 0;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      page-break-inside: avoid;
    }
    
    p {
      margin: 0.8em 0;
      text-align: justify;
      orphans: 3;
      widows: 3;
    }
    
    strong {
      font-weight: bold;
      color: #1a252f;
    }
    
    em {
      font-style: italic;
      color: #555;
    }
    
    ul, ol {
      margin: 0.8em 0;
      padding-left: 2em;
    }
    
    li {
      margin: 0.4em 0;
    }
    
    blockquote {
      border-left: 4px solid #3498db;
      padding-left: 1em;
      margin-left: 0;
      font-style: italic;
      color: #555;
    }
    
    code {
      background: #f4f4f4;
      padding: 2px 6px;
      border-radius: 3px;
      font-family: 'Courier New', monospace;
      font-size: 0.9em;
    }
    
    pre {
      background: #f4f4f4;
      padding: 1em;
      border-radius: 5px;
      overflow-x: auto;
      page-break-inside: avoid;
    }
    
    /* Page break handling */
    div[style*="page-break-before"] {
      page-break-before: always;
    }
    
    /* Avoid breaking inside card sections */
    h1 + * {
      page-break-before: avoid;
    }
    
    /* Table of contents styling if needed */
    .toc {
      page-break-after: always;
    }
    
    /* Print optimizations */
    @media print {
      body {
        print-color-adjust: exact;
        -webkit-print-color-adjust: exact;
      }
    }
  </style>
</head>
<body>
${html}
</body>
</html>`;

  console.log('✅ HTML generated\n');
  console.log('🌐 Launching browser...');

  // Generate PDF using Puppeteer
  (async () => {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    try {
      const page = await browser.newPage();

      // Set content
      await page.setContent(fullHTML, {
        waitUntil: 'networkidle0',
      });

      console.log('📄 Generating PDF...');

      // Generate PDF
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
        preferCSSPageSize: true,
        displayHeaderFooter: false,
      });

      console.log(`\n✅ PDF successfully created: ${OUTPUT_PDF}`);

      // Get file size
      const stats = fs.statSync(OUTPUT_PDF);
      const fileSizeMB = (stats.size / (1024 * 1024)).toFixed(2);
      console.log(`📊 File size: ${fileSizeMB} MB\n`);
    } catch (error) {
      console.error('❌ Error generating PDF:', error.message);
      process.exit(1);
    } finally {
      await browser.close();
    }
  })();
}

main();
