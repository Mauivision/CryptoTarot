// Script to convert SVG cards to PNG/JPG for testing
// Usage: node scripts/convert-svg-to-images.js
//
// Note: This requires additional dependencies for SVG to image conversion
// Alternative: Use the test-cards.html page in browser for visual testing

const fs = require('fs');
const path = require('path');

const cardsDir = path.join(__dirname, '..', 'assets', 'cards');
const imagesDir = path.join(__dirname, '..', 'assets', 'cards', 'raster');

// Create output directory
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
  console.log(`Created directory: ${imagesDir}`);
}

console.log('SVG to Image Converter for Crypto Tarot Cards\n');
console.log('='.repeat(60));
console.log('OPTION 1: Browser-based conversion (Recommended)');
console.log('='.repeat(60));
console.log('1. Open test-cards.html in your browser');
console.log('2. Click "Export All as PNG" button');
console.log('3. Images will download automatically\n');

console.log('='.repeat(60));
console.log('OPTION 2: Using Puppeteer (Automated)');
console.log('='.repeat(60));
console.log('Install: npm install puppeteer');
console.log('Then run: node scripts/convert-svg-to-images-puppeteer.js\n');

console.log('='.repeat(60));
console.log('OPTION 3: Using Sharp (Fast, requires build tools)');
console.log('='.repeat(60));
console.log('Install: npm install sharp');
console.log('Then run: node scripts/convert-svg-to-images-sharp.js\n');

console.log('='.repeat(60));
console.log('Current Status:');
console.log('='.repeat(60));

const files = fs.readdirSync(cardsDir).filter(f => f.endsWith('.svg'));
console.log(`✓ Found ${files.length} SVG files`);
console.log(`✓ Output directory: ${imagesDir}`);
console.log(`\nFor now, use test-cards.html to preview all cards on localhost!`);
