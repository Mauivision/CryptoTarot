// Script to convert SVG cards to PNG using Puppeteer
// Usage: npm install puppeteer && node scripts/convert-svg-to-images-puppeteer.js

const fs = require('fs');
const path = require('path');

let puppeteer;
try {
  puppeteer = require('puppeteer');
} catch (e) {
  console.log('Puppeteer not installed. Install with: npm install puppeteer');
  process.exit(1);
}

const cardsDir = path.join(__dirname, '..', 'assets', 'cards');
const imagesDir = path.join(__dirname, '..', 'assets', 'cards', 'raster');

if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

async function convertSVGToPNG(svgPath, outputPath) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const svgContent = fs.readFileSync(svgPath, 'utf8');

  // Create HTML with SVG
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { margin: 0; padding: 0; background: transparent; }
        svg { display: block; }
      </style>
    </head>
    <body>
      ${svgContent}
    </body>
    </html>
  `;

  await page.setContent(html, { waitUntil: 'networkidle0' });
  await page.setViewport({ width: 700, height: 1000 });

  await page.screenshot({
    path: outputPath,
    type: 'png',
    clip: { x: 0, y: 0, width: 700, height: 1000 },
  });

  await browser.close();
}

async function main() {
  console.log('Converting SVG cards to PNG images...\n');

  const files = fs.readdirSync(cardsDir).filter(f => f.endsWith('.svg'));
  let converted = 0;
  let errors = 0;

  for (const file of files) {
    const svgPath = path.join(cardsDir, file);
    const pngPath = path.join(imagesDir, file.replace('.svg', '.png'));

    try {
      await convertSVGToPNG(svgPath, pngPath);
      console.log(`✓ Converted: ${file}`);
      converted++;
    } catch (error) {
      console.error(`✗ Error converting ${file}:`, error.message);
      errors++;
    }
  }

  console.log(`\n${'='.repeat(60)}`);
  console.log(`Summary:`);
  console.log(`  Converted: ${converted} cards`);
  console.log(`  Errors: ${errors} cards`);
  console.log(`  Output: ${imagesDir}`);
  console.log(`${'='.repeat(60)}`);
}

if (require.main === module) {
  main().catch(console.error);
}
