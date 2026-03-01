/**
 * Export Markdown to PDF using Pandoc
 * Creates a PDF with one card per page, left-aligned image, right-aligned text
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const MD_FILE = path.join(__dirname, '..', 'print', 'book', 'crypto-tarot-book.md');
const PDF_FILE = path.join(__dirname, '..', 'print', 'book', 'crypto-tarot-book.pdf');
const TEMPLATE = path.join(__dirname, '..', 'print', 'book', 'book-template.tex');

function checkPandoc() {
  try {
    execSync('pandoc --version', { stdio: 'ignore' });
    return true;
  } catch (error) {
    return false;
  }
}

function checkXeLaTeX() {
  try {
    execSync('xelatex --version', { stdio: 'ignore' });
    return true;
  } catch (error) {
    return false;
  }
}

function main() {
  console.log('📖 Exporting Crypto Tarot Book to PDF...\n');

  // Check if files exist
  if (!fs.existsSync(MD_FILE)) {
    console.error(`❌ Markdown file not found: ${MD_FILE}`);
    console.error('   Run: node scripts/convert-to-markdown.mjs first');
    process.exit(1);
  }

  // Check if Pandoc is installed
  if (!checkPandoc()) {
    console.error('❌ Pandoc is not installed.');
    console.error('   Install:');
    console.error('   - macOS: brew install pandoc');
    console.error('   - Linux: sudo apt-get install pandoc texlive-xetex');
    console.error('   - Windows: choco install pandoc miktex');
    process.exit(1);
  }

  // Determine PDF engine
  const hasXeLaTeX = checkXeLaTeX();
  const engine = hasXeLaTeX ? 'xelatex' : 'pdflatex';

  if (!hasXeLaTeX) {
    console.warn('⚠️  XeLaTeX not found, using pdflatex (may have font/unicode issues)');
  }

  console.log(`📄 Using PDF engine: ${engine}\n`);

  // Build Pandoc command
  const pandocArgs = [
    MD_FILE,
    '-o',
    PDF_FILE,
    '--pdf-engine=' + engine,
    '--toc',
    '--toc-depth=2',
    '-V',
    'geometry:margin=2cm',
    '-V',
    'fontsize=11pt',
    '--variable=mainfont:"Times New Roman"',
    '--variable=monofont:"Courier New"',
    '--highlight-style=tango',
  ];

  // Add template if it exists
  if (fs.existsSync(TEMPLATE)) {
    pandocArgs.push('--template=' + TEMPLATE);
  }

  try {
    console.log('🔄 Running Pandoc...');
    execSync(`pandoc ${pandocArgs.join(' ')}`, {
      stdio: 'inherit',
      cwd: path.dirname(MD_FILE),
    });

    if (fs.existsSync(PDF_FILE)) {
      console.log(`\n✅ PDF created successfully: ${PDF_FILE}`);
      console.log(`\n📖 File size: ${(fs.statSync(PDF_FILE).size / 1024 / 1024).toFixed(2)} MB`);
    } else {
      console.error('\n❌ PDF file was not created. Check errors above.');
      process.exit(1);
    }
  } catch (error) {
    console.error('\n❌ PDF generation failed.');
    console.error('   Error:', error.message);
    console.error('\n💡 Tip: If you see LaTeX errors, you may need to install:');
    console.error('   - texlive-xetex (for XeLaTeX)');
    console.error('   - texlive-latex-extra (for additional packages)');
    process.exit(1);
  }
}

main();
