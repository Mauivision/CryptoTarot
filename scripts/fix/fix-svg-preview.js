// Script to fix SVG files for proper preview display
// Usage: node scripts/fix-svg-preview.js

const fs = require('fs');
const path = require('path');

const cardsDir = path.join(__dirname, '..', 'assets', 'cards');

function fixSVGStructure(svgContent) {
  let fixed = svgContent;

  // Fix 1: Remove duplicate artwork sections (old code-generated artwork after new detailed artwork)
  // Pattern: </g> followed by old artwork patterns, then bottom box
  const duplicatePattern =
    /<\/g>\s*<!-- Novice trader figure -->[\s\S]*?<\/g>\s*<rect x="40" y="800"/;
  if (duplicatePattern.test(fixed)) {
    fixed = fixed.replace(
      /<\/g>\s*<!-- Novice trader figure -->[\s\S]*?<\/g>\s*<rect x="40" y="800"/g,
      '</g>\n  <rect x="40" y="800"'
    );
  }

  // Fix 2: Remove any duplicate decorative paths or old artwork
  const oldArtworkPatterns = [
    /<!-- Blockchain cliff edge -->[\s\S]*?<\/path>\s*<!-- Meme coin dog -->[\s\S]*?<\/g>\s*<rect x="40" y="800"/g,
    /<!-- Meme coin dog -->[\s\S]*?<\/g>\s*<rect x="40" y="800"/g,
  ];

  oldArtworkPatterns.forEach(pattern => {
    if (pattern.test(fixed)) {
      fixed = fixed.replace(pattern, '<rect x="40" y="800"');
    }
  });

  // Fix 3: Ensure artwork group is properly closed before bottom box
  // Pattern: artwork group closes, then immediately bottom box (correct)
  // Wrong: artwork group closes, then more content, then bottom box
  fixed = fixed.replace(/<\/g>\s*<\/g>\s*<rect x="40" y="800"/g, '</g>\n  <rect x="40" y="800"');
  fixed = fixed.replace(
    /<\/g>\s*<!-- [^>]* -->[\s\S]*?<\/g>\s*<rect x="40" y="800"/g,
    '</g>\n  <rect x="40" y="800"'
  );

  // Fix 4: Ensure proper structure - artwork group should close, then bottom box
  // Check if bottom box is inside artwork group (wrong)
  const artworkGroupPattern =
    /(<!-- Beautiful artwork representing[^>]*>[\s\S]*?)(<\/g>)\s*<rect x="40" y="800"/;
  if (artworkGroupPattern.test(fixed)) {
    // This is correct - artwork closes, then bottom box
    // But ensure there's proper spacing
    fixed = fixed.replace(/(<\/g>)\s*<rect x="40" y="800"/g, '$1\n  <rect x="40" y="800"');
  }

  // Fix 5: Remove any stray closing tags before bottom box
  fixed = fixed.replace(
    /<\/g>\s*<\/g>\s*<\/g>\s*<rect x="40" y="800"/g,
    '</g>\n  <rect x="40" y="800"'
  );

  // Fix 6: Ensure SVG closes properly
  if (!fixed.trim().endsWith('</svg>')) {
    fixed = fixed.replace(/([^>])(\s*)$/, '$1\n</svg>');
  }

  // Fix 7: Remove duplicate character artwork in Major Arcana
  // Some cards have both new detailed artwork AND old simple artwork
  // Keep only the detailed artwork (the one with more content)
  const hasDetailedArtwork = /<!-- Beautiful artwork representing[^>]*>[\s\S]{200,}/.test(fixed);
  if (hasDetailedArtwork) {
    // Remove old simple artwork patterns that appear after detailed artwork
    fixed = fixed.replace(
      /<\/g>\s*(<!-- (?:Novice trader|Mining figure|Bear figure|Scales|Rocket|Phoenix|Spinning wheel|Figure|Blockchain)[^>]*>[\s\S]*?<\/g>\s*)+<rect x="40" y="800"/g,
      '</g>\n  <rect x="40" y="800"'
    );
  }

  // Fix 8: Clean up any malformed groups
  // Ensure each opening <g> has a closing </g>
  const openGroups = (fixed.match(/<g[^>]*>/g) || []).length;
  const closeGroups = (fixed.match(/<\/g>/g) || []).length;

  // If mismatch, try to fix common issues
  if (openGroups !== closeGroups) {
    // Remove extra closing tags before bottom box
    fixed = fixed.replace(/(<\/g>\s*){2,}(<rect x="40" y="800")/g, '</g>\n  $2');
  }

  return fixed;
}

function validateSVG(svgContent) {
  // Basic validation
  const hasXML = /^<\?xml/.test(svgContent);
  const hasSVG = /<svg/.test(svgContent);
  const hasCloseSVG = /<\/svg>$/.test(svgContent.trim());
  const hasViewBox = /viewBox/.test(svgContent);

  return hasXML && hasSVG && hasCloseSVG && hasViewBox;
}

function main() {
  console.log('Fixing SVG files for proper preview display...\n');

  const files = fs.readdirSync(cardsDir).filter(f => f.endsWith('.svg'));
  let fixed = 0;
  let errors = 0;
  let invalid = 0;

  for (const file of files) {
    const filePath = path.join(cardsDir, file);

    try {
      let svgContent = fs.readFileSync(filePath, 'utf8');
      const originalContent = svgContent;

      // Fix structure
      svgContent = fixSVGStructure(svgContent);

      // Validate
      if (!validateSVG(svgContent)) {
        console.log(`⚠️  Invalid SVG structure: ${file}`);
        invalid++;
        continue;
      }

      // Only write if changed
      if (svgContent !== originalContent) {
        fs.writeFileSync(filePath, svgContent, 'utf8');
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
  console.log(`  Invalid: ${invalid} cards`);
  console.log(`  Errors: ${errors} cards`);
  console.log(`  Total: ${files.length} files`);
  console.log(`${'='.repeat(60)}`);
  console.log('\nAll SVG files should now display properly in preview!');
}

main();
