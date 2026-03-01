// Script to fix SVG structure issues
// Usage: node scripts/fix-svg-structure.js

const fs = require('fs');
const path = require('path');

const cardsDir = path.join(__dirname, '..', 'assets', 'cards');

function fixSVGStructure(svgContent) {
  // Fix common issues:
  // 1. Remove extra closing </g> tags before bottom box
  // 2. Ensure proper structure: artwork group closes, then bottom box

  // Pattern: </g> followed by </g> followed by <rect (bottom box)
  // Should be: </g> followed by <rect (bottom box)
  let fixed = svgContent.replace(
    /<\/g>\s*<\/g>\s*<rect x="40" y="800"/g,
    '</g>\n  <rect x="40" y="800"'
  );

  // Fix any other double closing tags before bottom box
  fixed = fixed.replace(
    /<\/g>\s*<\/g>\s*<\/g>\s*<rect x="40" y="800"/g,
    '</g>\n  <rect x="40" y="800"'
  );

  // Ensure bottom box is properly formatted
  fixed = fixed.replace(/(<\/g>)\s*<rect x="40" y="800"/g, '$1\n  <rect x="40" y="800"');

  return fixed;
}

function main() {
  console.log('Fixing SVG structure issues...\n');

  const files = fs.readdirSync(cardsDir).filter(f => f.endsWith('.svg'));
  let fixed = 0;
  let errors = 0;

  for (const file of files) {
    const filePath = path.join(cardsDir, file);

    try {
      let svgContent = fs.readFileSync(filePath, 'utf8');
      const fixedContent = fixSVGStructure(svgContent);

      if (fixedContent !== svgContent) {
        fs.writeFileSync(filePath, fixedContent, 'utf8');
        console.log(`✓ Fixed: ${file}`);
        fixed++;
      }
    } catch (error) {
      console.error(`✗ Error fixing ${file}:`, error.message);
      errors++;
    }
  }

  console.log(`\n${'='.repeat(60)}`);
  console.log(`Summary:`);
  console.log(`  Fixed: ${fixed} cards`);
  console.log(`  Errors: ${errors} cards`);
  console.log(`  Total: ${files.length} files`);
  console.log(`${'='.repeat(60)}`);
}

main();
