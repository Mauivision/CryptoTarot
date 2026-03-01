// Update bottom meaning text styling across all SVG cards
// - Increase font size
// - Add subtle embossed/shadow effect via SVG filter

const fs = require('fs');
const path = require('path');

const cardsDir = path.join(__dirname, '..', 'assets', 'cards');

function ensureEmbossFilter(svg) {
  const hasDefs = /<defs>[\s\S]*?<\/defs>/.test(svg);
  const filterDef = `
    <filter id="embossText" x="-50%" y="-50%" width="200%" height="200%">
      <feOffset dx="0.8" dy="0.8" in="SourceAlpha" result="off"/>
      <feGaussianBlur in="off" stdDeviation="0.6" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>`;

  if (hasDefs) {
    if (!/id="embossText"/.test(svg)) {
      return svg.replace(
        /<defs>([\s\S]*?)<\/defs>/,
        (m, inner) => `<defs>${inner}\n${filterDef}\n<\/defs>`
      );
    }
    return svg;
  }

  // Insert defs after opening <svg ...>
  return svg.replace(
    /<svg([^>]*)>/,
    (m, attrs) => `<svg${attrs}>\n  <defs>\n${filterDef}\n  </defs>`
  );
}

function updateMeaningTexts(svg) {
  // Target text nodes in the bottom info block (y between ~840 and ~920)
  // Increase font-size from 12/14 to 16 and apply filter
  let changed = false;

  svg = svg.replace(
    /<text([^>]*?)y="(8[4-9]\d|9\d\d)"([^>]*?)>([\s\S]*?)<\/text>/g,
    (m, preAttrs, yVal, postAttrs, content) => {
      // Only update if this looks like the meaning or label, not the brand footer (usually ~940)
      const y = parseInt(String(yVal), 10);
      if (y >= 940) return m; // skip brand/footer line

      let attrs = `${preAttrs}${postAttrs}`;

      // Bump font size (bigger)
      if (/font-size="(\d+)"/.test(attrs)) {
        attrs = attrs.replace(/font-size="(\d+)"/, (mm, size) => {
          const newSize = Math.max(parseInt(size, 10) + 4, 18);
          changed = true;
          return `font-size="${newSize}"`;
        });
      } else {
        attrs += ' font-size="18"';
        changed = true;
      }

      // Add font-weight for readability
      if (!/font-weight=/.test(attrs)) {
        attrs += ' font-weight="700"';
        changed = true;
      }

      // Add filter for embossed effect
      if (!/filter=/.test(attrs)) {
        attrs += ' filter="url(#embossText)"';
        changed = true;
      }

      return `<text${attrs}>${content}<\/text>`;
    }
  );

  return { svg, changed };
}

function main() {
  const files = fs.readdirSync(cardsDir).filter(f => f.endsWith('.svg'));
  let updated = 0;
  files.forEach(file => {
    const filePath = path.join(cardsDir, file);
    let svg = fs.readFileSync(filePath, 'utf8');

    const original = svg;
    svg = ensureEmbossFilter(svg);
    const res = updateMeaningTexts(svg);
    svg = res.svg;

    if (svg !== original) {
      fs.writeFileSync(filePath, svg, 'utf8');
      updated++;
    }
  });

  console.log(`Updated ${updated} SVG files with larger embossed meaning text.`);
}

if (require.main === module) {
  main();
}
