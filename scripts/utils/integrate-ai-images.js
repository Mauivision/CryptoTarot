// Script to integrate AI-generated images into SVG cards
// Usage: node scripts/integrate-ai-images.js
//
// This script allows you to replace the code-generated artwork with AI-generated images
// from NightCafe, DALL-E, or other image generators

const fs = require('fs');
const path = require('path');

const cardsDir = path.join(__dirname, '..', 'assets', 'cards');
const imagesDir = path.join(__dirname, '..', 'assets', 'cards', 'ai-generated');

// Create directory if it doesn't exist
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
  console.log(`Created directory: ${imagesDir}`);
}

// Function to replace SVG artwork with AI-generated image
function integrateAIImage(svgContent, cardId, imagePath) {
  // Check if image exists
  const fullImagePath = path.join(imagesDir, imagePath);
  if (!fs.existsSync(fullImagePath)) {
    console.log(`⚠️  Image not found: ${fullImagePath}`);
    return null;
  }

  // Find the artwork section
  const artworkPattern = /<!-- Beautiful artwork representing [^>]*>[\s\S]*?<\/g>/;

  // Create new artwork section with embedded image
  const relativeImagePath = `ai-generated/${imagePath}`;
  const newArtwork = `<!-- Beautiful artwork representing ${cardId} - AI Generated -->
  <g>
    <!-- AI-generated character artwork -->
    <image href="${relativeImagePath}" 
           x="100" y="300" 
           width="500" height="400" 
           preserveAspectRatio="xMidYMid meet"
           opacity="0.95"/>
    <!-- Optional: Keep some code-generated effects overlay -->
    <g opacity="0.3">
      <circle cx="350" cy="500" r="200" fill="none" stroke="#00f5a0" stroke-width="2" opacity="0.2"/>
    </g>
  </g>`;

  if (artworkPattern.test(svgContent)) {
    return svgContent.replace(artworkPattern, newArtwork);
  }

  return null;
}

// Function to add AI image as background, keeping code-generated elements
function addAIImageAsBackground(svgContent, cardId, imagePath) {
  const fullImagePath = path.join(imagesDir, imagePath);
  if (!fs.existsSync(fullImagePath)) {
    return null;
  }

  const relativeImagePath = `ai-generated/${imagePath}`;

  // Find artwork section and add image behind it
  const artworkPattern = /(<!-- Beautiful artwork representing [^>]*>[\s\S]*?)(<\/g>)/;

  if (artworkPattern.test(svgContent)) {
    const newArtwork = `$1
    <!-- AI-generated background image -->
    <image href="${relativeImagePath}" 
           x="50" y="200" 
           width="600" height="500" 
           preserveAspectRatio="xMidYMid meet"
           opacity="0.4"
           style="mix-blend-mode: screen;"/>
    $2`;
    return svgContent.replace(artworkPattern, newArtwork);
  }

  return null;
}

// Function to create a hybrid approach: AI image + code effects
function createHybridArtwork(svgContent, cardId, imagePath) {
  const fullImagePath = path.join(imagesDir, imagePath);
  if (!fs.existsSync(fullImagePath)) {
    return null;
  }

  const relativeImagePath = `ai-generated/${imagePath}`;
  const artworkPattern = /<!-- Beautiful artwork representing [^>]*>[\s\S]*?<\/g>/;

  const newArtwork = `<!-- Beautiful artwork representing ${cardId} - Hybrid AI + Code -->
  <g>
    <!-- AI-generated character (background layer) -->
    <image href="${relativeImagePath}" 
           x="100" y="300" 
           width="500" height="400" 
           preserveAspectRatio="xMidYMid meet"
           opacity="0.85"/>
    <!-- Code-generated effects overlay (foreground) -->
    <g opacity="0.5" filter="url(#glow)">
      <circle cx="350" cy="500" r="180" fill="none" stroke="#00f5a0" stroke-width="2" opacity="0.3"/>
      ${Array.from({ length: 8 }, (_, i) => {
        const angle = (i * 45 * Math.PI) / 180;
        const x = 350 + Math.cos(angle) * 150;
        const y = 500 + Math.sin(angle) * 150;
        return `<circle cx="${x}" cy="${y}" r="4" fill="#00f5a0" opacity="0.6"/>`;
      }).join('')}
    </g>
  </g>`;

  if (artworkPattern.test(svgContent)) {
    return svgContent.replace(artworkPattern, newArtwork);
  }

  return null;
}

// Main function
function main() {
  console.log('AI Image Integration Tool for Crypto Tarot Cards\n');
  console.log('This script helps you integrate AI-generated images into your SVG cards.\n');
  console.log('Options:');
  console.log('1. Replace artwork completely with AI image');
  console.log('2. Add AI image as background (keep code elements)');
  console.log('3. Hybrid approach (AI image + code effects)\n');
  console.log('Place your AI-generated images in:');
  console.log(`  ${imagesDir}\n`);
  console.log('Image naming convention:');
  console.log('  major-the-hodler.png (or .jpg, .webp)');
  console.log('  minor-ace-of-tokens.png\n');

  // Check for existing images
  const existingImages = fs.existsSync(imagesDir)
    ? fs.readdirSync(imagesDir).filter(f => /\.(png|jpg|jpeg|webp)$/i.test(f))
    : [];

  if (existingImages.length > 0) {
    console.log(`Found ${existingImages.length} AI-generated images:\n`);
    existingImages.forEach(img => console.log(`  - ${img}`));
    console.log('\nTo integrate these images, you can:');
    console.log('1. Manually edit the SVG files to add <image> tags');
    console.log('2. Use this script with specific card/image mappings');
    console.log('3. Run: node scripts/integrate-ai-images.js --auto\n');
  } else {
    console.log('No AI-generated images found yet.\n');
    console.log('Next steps:');
    console.log('1. Generate images using NightCafe or other AI tools');
    console.log('2. Save them to:', imagesDir);
    console.log('3. Name them to match card IDs (e.g., major-the-hodler.png)');
    console.log('4. Run this script again to integrate them\n');
  }

  // Create a mapping file template
  const mappingTemplate = {
    instructions: 'Map AI-generated images to card IDs',
    cards: {
      'major-the-hodler': 'major-the-hodler.png',
      'major-the-miner': 'major-the-miner.png',
      // Add more mappings as you generate images
    },
  };

  const mappingFile = path.join(imagesDir, 'image-mapping.json');
  if (!fs.existsSync(mappingFile)) {
    fs.writeFileSync(mappingFile, JSON.stringify(mappingTemplate, null, 2));
    console.log(`Created mapping template: ${mappingFile}`);
    console.log('Edit this file to map your images to cards.\n');
  }
}

main();
