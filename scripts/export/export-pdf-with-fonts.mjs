/**
 * Export Crypto Tarot book to PDF with proper fonts
 * Uses Puppeteer with custom font loading
 *
 * Prerequisites:
 * - Install fonts: Crimson Text, Fira Code, Helvetica Neue
 * - Or use system font fallbacks
 *
 * Usage: node scripts/export/export-pdf-with-fonts.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';
import { marked } from 'marked';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..', '..');

const INPUT_MD = path.join(projectRoot, 'print', 'book', 'crypto-tarot-book.md');
const OUTPUT_PDF = path.join(projectRoot, 'print', 'book', 'crypto-tarot-book.pdf');

// Font configuration
const FONTS = {
  main: 'Crimson Text, serif',
  code: 'Fira Code, monospace',
  sans: 'Helvetica Neue, Arial, sans-serif',
  fallback: {
    main: 'Georgia, serif',
    code: 'Courier New, monospace',
    sans: 'Arial, sans-serif',
  },
};

marked.setOptions({
  breaks: true,
  gfm: true,
});

function createHTMLWithFonts(markdown) {
  const html = marked.parse(markdown);

  // Replace \newpage with page breaks
  const htmlWithBreaks = html.replace(
    /\\newpage/g,
    '<div style="page-break-before: always;"></div>'
  );

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Crypto Tarot: Complete Guide to Card Meanings</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400&family=Fira+Code:wght@400;500&display=swap" rel="stylesheet">
  <style>
    @page {
      size: letter;
      margin: 0.75in;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: ${FONTS.main}, ${FONTS.fallback.main};
      font-size: 11pt;
      line-height: 1.6;
      color: #1a1a1a;
      background: #ffffff;
    }

    h1 {
      font-family: ${FONTS.sans}, ${FONTS.fallback.sans};
      font-size: 24pt;
      font-weight: 700;
      margin: 24pt 0 12pt;
      page-break-after: avoid;
      color: #0b0f15;
    }

    h2 {
      font-family: ${FONTS.sans}, ${FONTS.fallback.sans};
      font-size: 18pt;
      font-weight: 600;
      margin: 20pt 0 10pt;
      page-break-after: avoid;
      color: #0b0f15;
    }

    h3 {
      font-family: ${FONTS.sans}, ${FONTS.fallback.sans};
      font-size: 14pt;
      font-weight: 600;
      margin: 16pt 0 8pt;
      page-break-after: avoid;
      color: #0b0f15;
    }

    p {
      margin: 8pt 0;
      text-align: justify;
    }

    code {
      font-family: ${FONTS.code}, ${FONTS.fallback.code};
      font-size: 9pt;
      background: #f5f5f5;
      padding: 2pt 4pt;
      border-radius: 3pt;
    }

    pre {
      font-family: ${FONTS.code}, ${FONTS.fallback.code};
      font-size: 9pt;
      background: #f5f5f5;
      padding: 12pt;
      border-radius: 6pt;
      overflow-x: auto;
      page-break-inside: avoid;
    }

    img {
      max-width: 100%;
      height: auto;
      page-break-inside: avoid;
    }

    .page-break {
      page-break-before: always;
    }

    @media print {
      body {
        print-color-adjust: exact;
        -webkit-print-color-adjust: exact;
      }

      h1, h2, h3 {
        page-break-after: avoid;
      }

      p, li {
        orphans: 3;
        widows: 3;
      }
    }
  </style>
</head>
<body>
  ${htmlWithBreaks}
</body>
</html>`;
}

async function main() {
  console.log('📄 Exporting Crypto Tarot book to PDF with fonts...\n');

  if (!fs.existsSync(INPUT_MD)) {
    console.error(`❌ Markdown file not found: ${INPUT_MD}`);
    process.exit(1);
  }

  console.log(`📖 Reading: ${INPUT_MD}`);
  const markdown = fs.readFileSync(INPUT_MD, 'utf8');
  console.log(`✅ Markdown loaded (${(markdown.length / 1024).toFixed(1)}KB)\n`);

  console.log('🔄 Converting Markdown to HTML with fonts...');
  const html = createHTMLWithFonts(markdown);
  console.log('✅ HTML generated\n');

  console.log('🌐 Launching browser...');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();

  console.log('📄 Setting content...');
  await page.setContent(html, { waitUntil: 'networkidle0' });

  console.log('📑 Generating PDF...');
  await page.pdf({
    path: OUTPUT_PDF,
    format: 'Letter',
    margin: {
      top: '0.75in',
      right: '0.75in',
      bottom: '0.75in',
      left: '0.75in',
    },
    printBackground: true,
    preferCSSPageSize: true,
  });

  await browser.close();

  const fileSize = (fs.statSync(OUTPUT_PDF).size / 1024 / 1024).toFixed(2);
  console.log(`\n✅ PDF exported successfully!`);
  console.log(`📁 Output: ${OUTPUT_PDF}`);
  console.log(`📊 Size: ${fileSize} MB`);
  console.log(`\n✨ Fonts used: ${FONTS.main}, ${FONTS.code}, ${FONTS.sans}`);
}

main().catch(error => {
  console.error('❌ Error exporting PDF:', error);
  process.exit(1);
});
