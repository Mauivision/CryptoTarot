/**
 * Simple PDF export using HTML conversion
 * Creates an HTML file that can be printed to PDF from browser
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INPUT_MD = path.join(__dirname, '..', 'print', 'book', 'crypto-tarot-book.md');
const OUTPUT_HTML = path.join(__dirname, '..', 'print', 'book', 'crypto-tarot-book-for-pdf.html');

function markdownToHTML(markdown) {
  // Simple markdown to HTML converter
  let html = markdown;

  // Headers
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');

  // Bold
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

  // Italic
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');

  // Images
  html = html.replace(/!\[(.*?)\]\((.*?)\)/g, '<img src="$2" alt="$1" />');

  // Page breaks
  html = html.replace(/\\newpage/g, '<div class="page-break"></div>');

  // Paragraphs (lines that aren't headers, lists, or empty)
  html = html
    .split('\n')
    .map(line => {
      line = line.trim();
      if (!line) return '';
      if (
        line.startsWith('<h') ||
        line.startsWith('<img') ||
        line.startsWith('<div') ||
        line.startsWith('<ul') ||
        line.startsWith('<ol') ||
        line.startsWith('<li')
      ) {
        return line;
      }
      if (line.startsWith('- ') || line.startsWith('* ')) {
        return `<li>${line.substring(2)}</li>`;
      }
      return `<p>${line}</p>`;
    })
    .join('\n');

  // Lists
  html = html.replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>');

  return html;
}

function main() {
  console.log('📄 Creating HTML file for PDF export...\n');

  if (!fs.existsSync(INPUT_MD)) {
    console.error(`❌ Markdown file not found: ${INPUT_MD}`);
    process.exit(1);
  }

  const markdown = fs.readFileSync(INPUT_MD, 'utf8');
  const htmlContent = markdownToHTML(markdown);

  const fullHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Crypto Tarot: Complete Guide to Card Meanings</title>
  <style>
    @media print {
      @page {
        size: A4;
        margin: 2cm;
      }
      .page-break {
        page-break-before: always;
      }
      h1 {
        page-break-before: always;
      }
      h1:first-of-type {
        page-break-before: auto;
      }
    }
    body {
      font-family: 'Georgia', 'Times New Roman', serif;
      line-height: 1.8;
      color: #333;
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      background: #fff;
    }
    h1 {
      font-size: 2.2em;
      margin-top: 1.5em;
      margin-bottom: 0.8em;
      color: #2c3e50;
      border-bottom: 2px solid #3498db;
      padding-bottom: 0.3em;
    }
    h2 {
      font-size: 1.6em;
      margin-top: 1.2em;
      margin-bottom: 0.6em;
      color: #34495e;
    }
    h3 {
      font-size: 1.3em;
      margin-top: 1em;
      margin-bottom: 0.5em;
      color: #555;
    }
    img {
      max-width: 100%;
      height: auto;
      margin: 1em 0;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    p {
      margin: 0.8em 0;
      text-align: justify;
    }
    strong {
      font-weight: bold;
      color: #2c3e50;
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
    .page-break {
      margin: 3em 0;
      border-top: 1px dashed #ccc;
    }
    @media print {
      .page-break {
        page-break-before: always;
        border: none;
        margin: 0;
      }
    }
  </style>
</head>
<body>
${htmlContent}
</body>
</html>`;

  fs.writeFileSync(OUTPUT_HTML, fullHTML, 'utf8');

  console.log(`✅ HTML file created: ${OUTPUT_HTML}`);
  console.log(`\n📖 To export to PDF:`);
  console.log(`   1. Open ${OUTPUT_HTML} in your browser`);
  console.log(`   2. Press Ctrl+P (or Cmd+P on Mac)`);
  console.log(`   3. Choose "Save as PDF" as the destination`);
  console.log(`   4. Click "Save"`);
  console.log(`\n💡 This will create a PDF with proper page breaks and formatting.`);
}

main();
