/**
 * Generate comprehensive LaTeX document from enhanced markdown
 * One card per page, left-aligned image, right-aligned text
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { CARD_MEANINGS } from '../data/card-meanings.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUTPUT_FILE = path.join(
  __dirname,
  '..',
  'print',
  'book',
  'crypto-tarot-comprehensive-book.tex'
);

const MAJOR_ORDER = [
  'The HODLer',
  'The Miner',
  'The Oracle',
  'The Empress Node',
  'The Emperor Chain',
  'The Hierophant Whale',
  'The Lovers Fork',
  'The Chariot Pump',
  'Strength HODL',
  'The Hermit Dev',
  'Wheel of Fortune Cycle',
  'Justice Ledger',
  'The Hanged Man Flip',
  'Death Rug',
  'Temperance Mix',
  'The Devil Scam',
  'The Tower Hack',
  'The Star Airdrop',
  'The Moon Illusion',
  'The Sun Bull',
  'Judgment Halving',
  'The World Ecosystem',
];

const SUITS = ['Tokens', 'Liquidity', 'Security', 'Nodes'];
const RANKS = [
  'Ace',
  'Two',
  'Three',
  'Four',
  'Five',
  'Six',
  'Seven',
  'Eight',
  'Nine',
  'Ten',
  'Page',
  'Knight',
  'Queen',
  'King',
];

function fileSafe(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function escapeLaTeX(text) {
  if (!text) return '';
  return text
    .replace(/\\/g, '\\textbackslash{}')
    .replace(/\{/g, '\\{')
    .replace(/\}/g, '\\}')
    .replace(/\$/g, '\\$')
    .replace(/\&/g, '\\&')
    .replace(/\#/g, '\\#')
    .replace(/\^/g, '\\textasciicircum{}')
    .replace(/\_/g, '\\_')
    .replace(/\~/g, '\\textasciitilde{}')
    .replace(/\%/g, '\\%');
}

function getCardImagePath(card, title) {
  if (card.arcana === 'Major') {
    const baseName = `major-${fileSafe(title)}`;
    const cardHash = title.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const commonVariants = [
      '02',
      '04',
      '07',
      '08',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
      '16',
      '03',
      '05',
      '06',
      '09',
    ];
    const variantIndex = cardHash % commonVariants.length;
    const variantNum = commonVariants[variantIndex];
    return `tools/CryptoTarot1-78/${baseName}-${variantNum}.jpg`;
  }

  if (card.arcana === 'Minor') {
    const [rank, suit] = title.split(' of ');
    const baseName = `minor-${fileSafe(rank)}-of-${fileSafe(suit)}`;
    const cardHash = title.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const commonVariants = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    const variantIndex = cardHash % commonVariants.length;
    const variantNum = commonVariants[variantIndex];
    return `tools/CryptoTarot1-78/${baseName}-${variantNum}.jpg`;
  }

  return '';
}

function formatCardLaTeX(title, card) {
  const imagePath = getCardImagePath(card, title);
  const imagePathEscaped = imagePath.replace(/\\/g, '/');

  let latex = `\\newpage\n`;
  latex += `\\section*{${escapeLaTeX(title)}}\n\n`;

  // Metadata
  if (card.number !== undefined || card.cosmicRuler) {
    latex += `\\begin{minipage}[t]{0.55\\textwidth}\n`;
    latex += `  \\vspace{0pt}\n`;
    if (card.number !== undefined) {
      latex += `  \\textbf{Card Number:} ${card.number}\\\\`;
    }
    if (card.cosmicRuler) {
      latex += `  \\textbf{Cosmic Ruler:} ${escapeLaTeX(card.cosmicRuler)}\\\\`;
    }
    if (card.cosmicSummary) {
      latex += `  \\textit{${escapeLaTeX(card.cosmicSummary)}}\n`;
    }
    latex += `\\end{minipage}\n\n`;
  }

  // Image on left, content on right
  latex += `\\begin{minipage}[t]{0.4\\textwidth}\n`;
  latex += `  \\vspace{0pt}\n`;
  if (imagePath) {
    latex += `  \\includegraphics[width=\\textwidth]{${imagePathEscaped}}\n`;
  }
  latex += `\\end{minipage}\n`;
  latex += `\\hfill\n`;
  latex += `\\begin{minipage}[t]{0.55\\textwidth}\n`;
  latex += `  \\vspace{0pt}\n\n`;

  // Visual Description
  if (card.visualDescription) {
    latex += `  \\subsection*{Visual Description}\n`;
    latex += `  ${escapeLaTeX(card.visualDescription)}\n\n`;
  }

  // Upright
  latex += `  \\subsection*{Upright Meaning}\n`;
  latex += `  ${escapeLaTeX(card.upright || 'N/A')}\n\n`;

  // Reversed
  latex += `  \\subsection*{Reversed Meaning}\n`;
  latex += `  ${escapeLaTeX(card.reversed || 'N/A')}\n\n`;

  // Crypto Flavor
  if (card.cryptoFlavor) {
    latex += `  \\subsection*{Crypto Flavor}\n`;
    latex += `  \\textit{${escapeLaTeX(card.cryptoFlavor)}}\n\n`;
  }

  // Foresight
  if (card.foresight) {
    latex += `  \\subsection*{Crypto Foresight}\n`;
    latex += `  ${escapeLaTeX(card.foresight)}\n\n`;
  }

  // Educational Insight
  if (card.educationalInsight) {
    latex += `  \\subsection*{Educational Insight}\n`;
    latex += `  ${escapeLaTeX(card.educationalInsight)}\n\n`;
  }

  // Strategy
  if (card.strategy) {
    latex += `  \\subsection*{Strategy}\n`;
    latex += `  \\textit{${escapeLaTeX(card.strategy)}}\n\n`;
  }

  // Extended Reflection
  if (card.extendedReflection) {
    latex += `  \\subsection*{Extended Reflection}\n`;
    latex += `  ${escapeLaTeX(card.extendedReflection)}\n\n`;
  }

  // Reading Context (Book Chapter)
  if (card.bookChapter) {
    latex += `  \\subsection*{Reading Context}\n`;
    const paragraphs = card.bookChapter.split('\n\n').filter(p => p.trim());
    paragraphs.forEach(para => {
      latex += `  ${escapeLaTeX(para.trim())}\n\n`;
    });
  }

  latex += `\\end{minipage}\n\n`;

  return latex;
}

function buildLaTeX() {
  let content = `\\documentclass[11pt,oneside]{book}
\\usepackage[utf8]{inputenc}
\\usepackage{graphicx}
\\usepackage{geometry}
\\usepackage{fancyhdr}
\\usepackage{titlesec}

\\geometry{a4paper, margin=2cm, headheight=15pt}

\\titleformat{\\section}
  {\\normalfont\\Large\\bfseries}
  {}{0em}{}

\\titleformat{\\subsection}
  {\\normalfont\\large\\bfseries}
  {}{0em}{}

\\pagestyle{fancy}
\\fancyhf{}
\\fancyhead[L]{\\leftmark}
\\fancyfoot[C]{\\thepage}

\\begin{document}

\\title{Crypto Tarot: Complete Guide to Card Meanings}
\\author{Crypto Tarot}
\\date{\\today}
\\maketitle

\\frontmatter
\\tableofcontents
\\mainmatter

\\chapter*{Introduction}
\\addcontentsline{toc}{chapter}{Introduction}

Welcome to the Crypto Tarot, where ancient divination meets the digital frontier. This comprehensive guide provides detailed meanings, cosmic correspondences, and practical wisdom for all 78 cards in the deck.

Each card entry includes:

\\begin{itemize}
\\item \\textbf{Visual Description}: What you see when you gaze upon the card
\\item \\textbf{Upright \\& Reversed Meanings}: Core interpretations for both orientations
\\item \\textbf{Crypto Flavor}: Real-world Web3 scenarios this card represents
\\item \\textbf{Crypto Foresight}: Forward-looking guidance for your crypto journey
\\item \\textbf{Educational Insight}: Technical knowledge embedded in the card
\\item \\textbf{Strategy}: Practical action steps when this card appears
\\item \\textbf{Extended Reflection}: Deeper philosophical and spiritual insights
\\item \\textbf{Reading Context}: Comprehensive narrative for understanding the card's full significance
\\end{itemize}

\\chapter*{Major Arcana}
\\addcontentsline{toc}{chapter}{Major Arcana}

The Major Arcana represent the archetypal journey through the crypto realm—the fundamental forces, transformations, and milestones that shape your Web3 path. These 22 cards speak to the soul of blockchain, the spirit of decentralization, and the essence of digital transformation.

`;

  // Major Arcana
  for (const title of MAJOR_ORDER) {
    if (CARD_MEANINGS[title]) {
      content += formatCardLaTeX(title, CARD_MEANINGS[title]);
    }
  }

  // Minor Arcana
  content += `\\chapter*{Minor Arcana}
\\addcontentsline{toc}{chapter}{Minor Arcana}

The Minor Arcana reflect the day-to-day experiences, practical challenges, and material aspects of your crypto journey. Organized into four suits—Tokens (Earth), Liquidity (Water), Security (Air), and Nodes (Fire)—these 56 cards address the tangible realities of Web3 life.

`;

  for (const suit of SUITS) {
    content += `\\section*{${suit} Suit}
\\addcontentsline{toc}{section}{${suit} Suit}

`;
    const suitDescription = {
      Tokens:
        'The Tokens suit represents material value, sustainable growth, and practical stewardship. These cards speak to your portfolio, assets, and tangible resources in the crypto ecosystem.',
      Liquidity:
        'The Liquidity suit embodies emotional flow, trust channels, and feeling intelligence. These cards reflect the currents of DeFi, pools, and the emotional landscape of trading.',
      Security:
        'The Security suit represents strategic clarity, mental agility, and logic. These cards address wallet safety, audits, keys, and the intellectual aspects of crypto.',
      Nodes:
        'The Nodes suit embodies creative ignition, signal broadcasting, and passionate output. These cards speak to validators, network health, decentralization, and creative energy.',
    };
    content += `\\textit{${suitDescription[suit]}}\n\n`;

    for (const rank of RANKS) {
      const title = `${rank} of ${suit}`;
      if (CARD_MEANINGS[title]) {
        content += formatCardLaTeX(title, CARD_MEANINGS[title]);
      }
    }
  }

  // Appendix
  content += `\\chapter*{Appendix}
\\addcontentsline{toc}{chapter}{Appendix}

\\section*{How to Use This Book}

\\begin{enumerate}
\\item \\textbf{Daily Draws}: Pull a single card each day for guidance
\\item \\textbf{Three-Card Spreads}: Use Past-Present-Future for timeline readings
\\item \\textbf{Celtic Cross}: Apply the traditional 10-card spread for complex questions
\\item \\textbf{Card Combinations}: Study how cards interact when drawn together
\\item \\textbf{Reversed Cards}: Pay special attention to shadow aspects and warnings
\\end{enumerate}

\\section*{Reading Tips}

\\begin{itemize}
\\item Trust your intuition when interpreting cards
\\item Consider both upright and reversed meanings
\\item Look for patterns across multiple cards
\\item Apply crypto foresight to your actual portfolio decisions
\\item Use educational insights to deepen your Web3 knowledge
\\end{itemize}

\\section*{Disclaimer}

\\textit{This book is for entertainment purposes only. Not financial advice. Cryptocurrency investments carry risk. Always DYOR (Do Your Own Research).}

\\vspace{2cm}

\\begin{center}
\\textit{© ${new Date().getFullYear()} Crypto Tarot. All rights reserved.}
\\end{center}

\\end{document}
`;

  return content;
}

function main() {
  console.log('📝 Generating comprehensive LaTeX document...\n');

  const latex = buildLaTeX();

  // Ensure output directory exists
  const outputDir = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(OUTPUT_FILE, latex, 'utf8');

  console.log(`✅ Comprehensive LaTeX file created: ${OUTPUT_FILE}`);
  console.log(`\n📖 To compile to PDF:`);
  console.log(`   cd print/book`);
  console.log(`   pdflatex crypto-tarot-comprehensive-book.tex`);
  console.log(`   pdflatex crypto-tarot-comprehensive-book.tex  # Run twice for TOC`);
  console.log(`\n💡 This creates one card per page with image left, text right.`);
}

main();
