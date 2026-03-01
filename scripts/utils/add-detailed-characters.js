// Script to add detailed character figures to Major Arcana cards
// Usage: node scripts/add-detailed-characters.js

const fs = require('fs');
const path = require('path');

const cardsDir = path.join(__dirname, '..', 'assets', 'cards');

// Detailed character artwork generators for Major Arcana
const detailedCharacters = {
  'The HODLer': colors => `
    <!-- Background: Starry crypto sky -->
    <g opacity="0.6">
      ${Array.from({ length: 15 }, (_, i) => {
        const angle = (i * 24 * Math.PI) / 180;
        const radius = 200 + Math.random() * 80;
        const x = 350 + Math.cos(angle) * radius;
        const y = 400 + Math.sin(angle) * radius;
        const size = 2 + Math.random() * 3;
        return `<circle cx="${x}" cy="${y}" r="${size}" fill="${colors.primary}" filter="url(#glow)"/>`;
      }).join('')}
    </g>
    <!-- Floating tokens in sky -->
    ${Array.from({ length: 5 }, (_, i) => {
      const x = 200 + i * 80;
      const y = 350 + Math.sin(i) * 40;
      return `<circle cx="${x}" cy="${y}" r="12" fill="${colors.accent}" opacity="0.5" filter="url(#glow)">
              <text x="${x}" y="${y + 4}" text-anchor="middle" font-size="14" fill="#fff">₿</text>
              </circle>`;
    }).join('')}
    <!-- Blockchain cliff edge -->
    <path d="M100,600 L300,580 L350,570 L400,580 L600,600" stroke="${colors.primary}" stroke-width="4" fill="none" opacity="0.6" filter="url(#glow)"/>
    <!-- Novice trader character -->
    <g transform="translate(350, 520)">
      <!-- Body/torso -->
      <ellipse cx="0" cy="25" rx="22" ry="35" fill="${colors.primary}" opacity="0.5"/>
      <!-- Head -->
      <circle cx="0" cy="-20" r="18" fill="${colors.primary}" opacity="0.6"/>
      <!-- Face features -->
      <circle cx="-5" cy="-25" r="2" fill="#fff"/>
      <circle cx="5" cy="-25" r="2" fill="#fff"/>
      <ellipse cx="0" cy="-20" rx="3" ry="2" fill="#fff" opacity="0.7"/>
      <!-- Arms -->
      <ellipse cx="-25" cy="15" rx="8" ry="25" fill="${colors.primary}" opacity="0.5"/>
      <ellipse cx="25" cy="15" rx="8" ry="25" fill="${colors.primary}" opacity="0.5"/>
      <!-- Wallet in right hand -->
      <rect x="18" y="5" width="18" height="28" rx="3" fill="${colors.accent}" opacity="0.7" filter="url(#glow)"/>
      <rect x="20" y="8" width="14" height="8" rx="1" fill="#fff" opacity="0.5"/>
      <!-- Legs -->
      <ellipse cx="-12" cy="55" rx="8" ry="30" fill="${colors.primary}" opacity="0.5"/>
      <ellipse cx="12" cy="55" rx="8" ry="30" fill="${colors.primary}" opacity="0.5"/>
      <!-- Diamond hands symbol on chest -->
      <path d="M-15,20 L-10,30 L-5,20 M5,20 L10,30 L15,20" stroke="${colors.primary}" stroke-width="2.5" fill="none" filter="url(#glow)"/>
    </g>
    <!-- Meme coin dog -->
    <g transform="translate(450, 590)">
      <circle cx="0" cy="0" r="25" fill="${colors.accent}" opacity="0.5"/>
      <circle cx="-10" cy="-5" r="4" fill="#fff"/>
      <circle cx="10" cy="-5" r="4" fill="#fff"/>
      <ellipse cx="0" cy="5" rx="8" ry="5" fill="#fff" opacity="0.7"/>
      <text x="0" y="8" text-anchor="middle" font-size="16" fill="#fff">🐕</text>
    </g>
  `,

  'The Miner': colors => `
    <!-- Blockchain mountain -->
    <polygon points="150,600 350,380 550,600" fill="${colors.primary}" opacity="0.25" filter="url(#glow)"/>
    <polygon points="200,600 350,420 500,600" fill="${colors.accent}" opacity="0.15"/>
    <!-- Mining figure character -->
    <g transform="translate(350, 480)">
      <!-- Body -->
      <ellipse cx="0" cy="20" rx="20" ry="32" fill="${colors.primary}" opacity="0.6"/>
      <!-- Head with helmet -->
      <circle cx="0" cy="-25" r="16" fill="${colors.primary}" opacity="0.7"/>
      <rect x="-18" y="-35" width="36" height="20" rx="3" fill="${colors.accent}" opacity="0.6"/>
      <!-- Helmet light -->
      <circle cx="0" cy="-30" r="4" fill="#fff" opacity="0.9" filter="url(#glow)"/>
      <!-- Arms -->
      <ellipse cx="-28" cy="10" rx="6" ry="22" fill="${colors.primary}" opacity="0.6"/>
      <ellipse cx="28" cy="10" rx="6" ry="22" fill="${colors.primary}" opacity="0.6"/>
      <!-- Pickaxe in hands -->
      <line x1="-35" y1="0" x2="-55" y2="-25" stroke="${colors.accent}" stroke-width="5" filter="url(#glow)"/>
      <line x1="-35" y1="0" x2="-15" y2="15" stroke="${colors.accent}" stroke-width="5"/>
      <circle cx="-55" cy="-25" r="6" fill="${colors.accent}" opacity="0.8"/>
      <!-- Legs -->
      <ellipse cx="-10" cy="48" rx="7" ry="28" fill="${colors.primary}" opacity="0.6"/>
      <ellipse cx="10" cy="48" rx="7" ry="28" fill="${colors.primary}" opacity="0.6"/>
    </g>
    <!-- Crypto blocks being mined -->
    ${Array.from({ length: 6 }, (_, i) => {
      const x = 250 + i * 35;
      const y = 540 + Math.sin(i * 0.8) * 25;
      return `<rect x="${x}" y="${y}" width="28" height="28" fill="${colors.primary}" opacity="0.6" filter="url(#glow)">
              <text x="${x + 14}" y="${y + 18}" text-anchor="middle" font-size="12" fill="#fff">#</text>
              </rect>`;
    }).join('')}
    <!-- Energy consumption visualization -->
    <path d="M200,450 L250,440 L300,435 L350,430 L400,435 L450,440 L500,450" 
          stroke="${colors.accent}" stroke-width="2" fill="none" opacity="0.5" filter="url(#glow)"/>
  `,

  'The Oracle': colors => `
    <!-- Veil of blockchain data streams -->
    <g opacity="0.4">
      ${Array.from({ length: 12 }, (_, i) => {
        const x = 200 + i * 30;
        const y1 = 400;
        const y2 = 600;
        return `<line x1="${x}" y1="${y1}" x2="${x}" y2="${y2}" stroke="${colors.primary}" stroke-width="1" opacity="0.3"/>`;
      }).join('')}
    </g>
    <!-- Mystical figure character -->
    <g transform="translate(350, 500)">
      <!-- Robe/body -->
      <path d="M-30,0 Q-40,40 -30,80 Q-20,100 0,100 Q20,100 30,80 Q40,40 30,0" 
            fill="${colors.primary}" opacity="0.5"/>
      <!-- Head with hood -->
      <circle cx="0" cy="-30" r="20" fill="${colors.primary}" opacity="0.6"/>
      <path d="M-25,-30 Q-30,-50 -20,-60 Q0,-65 20,-60 Q30,-50 25,-30" 
            fill="${colors.accent}" opacity="0.4"/>
      <!-- Mystical eyes -->
      <circle cx="-8" cy="-35" r="3" fill="#fff" filter="url(#glow)"/>
      <circle cx="8" cy="-35" r="3" fill="#fff" filter="url(#glow)"/>
      <!-- Arms holding crystal ball -->
      <ellipse cx="-25" cy="20" rx="6" ry="25" fill="${colors.primary}" opacity="0.5"/>
      <ellipse cx="25" cy="20" rx="6" ry="25" fill="${colors.primary}" opacity="0.5"/>
      <!-- Crystal ball with code -->
      <circle cx="0" cy="25" r="35" fill="${colors.accent}" opacity="0.3" filter="url(#glow)"/>
      <circle cx="0" cy="25" r="30" fill="none" stroke="${colors.primary}" stroke-width="2" opacity="0.6"/>
      <!-- Code snippets in crystal ball -->
      <text x="0" y="20" text-anchor="middle" font-size="10" fill="${colors.primary}" opacity="0.7">0x...</text>
      <text x="0" y="32" text-anchor="middle" font-size="10" fill="${colors.primary}" opacity="0.7">hash()</text>
    </g>
    <!-- Hidden chains visible through fog -->
    <g opacity="0.3">
      <path d="M150,450 L350,500 L550,450" stroke="${colors.accent}" stroke-width="3" fill="none" stroke-dasharray="5,5"/>
      <circle cx="150" cy="450" r="8" fill="${colors.accent}"/>
      <circle cx="350" cy="500" r="8" fill="${colors.accent}"/>
      <circle cx="550" cy="450" r="8" fill="${colors.accent}"/>
    </g>
  `,

  'The Empress Node': colors => `
    <!-- Garden of yield farms background -->
    ${Array.from({ length: 8 }, (_, i) => {
      const x = 200 + (i % 4) * 100;
      const y = 450 + Math.floor(i / 4) * 80;
      return `<circle cx="${x}" cy="${y}" r="25" fill="${colors.primary}" opacity="0.2" filter="url(#glow)">
              <text x="${x}" y="${y + 5}" text-anchor="middle" font-size="18" fill="${colors.primary}">🌱</text>
              </circle>`;
    }).join('')}
    <!-- Nurturing figure character -->
    <g transform="translate(350, 500)">
      <!-- Body with flowing robes -->
      <path d="M-35,0 Q-40,30 -35,70 Q-25,90 0,90 Q25,90 35,70 Q40,30 35,0" 
            fill="${colors.primary}" opacity="0.6"/>
      <!-- Head -->
      <circle cx="0" cy="-25" r="18" fill="${colors.primary}" opacity="0.7"/>
      <!-- Crown of governance tokens -->
      <polygon points="-20,-40 -10,-50 0,-45 10,-50 20,-40" fill="${colors.accent}" opacity="0.7" filter="url(#glow)"/>
      <circle cx="-10" cy="-50" r="4" fill="#fff"/>
      <circle cx="0" cy="-45" r="4" fill="#fff"/>
      <circle cx="10" cy="-50" r="4" fill="#fff"/>
      <!-- Arms nurturing -->
      <ellipse cx="-30" cy="25" rx="8" ry="30" fill="${colors.primary}" opacity="0.6"/>
      <ellipse cx="30" cy="25" rx="8" ry="30" fill="${colors.primary}" opacity="0.6"/>
      <!-- Hands holding DeFi token -->
      <circle cx="0" cy="40" r="20" fill="${colors.accent}" opacity="0.6" filter="url(#glow)"/>
      <text x="0" y="45" text-anchor="middle" font-size="16" fill="#fff">💎</text>
    </g>
    <!-- DeFi tokens growing like flowers -->
    ${Array.from({ length: 6 }, (_, i) => {
      const angle = (i * 60 * Math.PI) / 180;
      const x = 350 + Math.cos(angle) * 120;
      const y = 500 + Math.sin(angle) * 120;
      return `<circle cx="${x}" cy="${y}" r="15" fill="${colors.accent}" opacity="0.4" filter="url(#glow)">
              <text x="${x}" y="${y + 5}" text-anchor="middle" font-size="12" fill="#fff">💰</text>
              </circle>`;
    }).join('')}
  `,

  'The Emperor Chain': colors => `
    <!-- Blockchain throne -->
    <rect x="250" y="550" width="200" height="80" rx="10" fill="${colors.primary}" opacity="0.3" filter="url(#glow)"/>
    ${Array.from({ length: 5 }, (_, i) => {
      return `<rect x="${260 + i * 38}" y="560" width="30" height="30" fill="${colors.accent}" opacity="0.4"/>`;
    }).join('')}
    <!-- Powerful figure character -->
    <g transform="translate(350, 500)">
      <!-- Body on throne -->
      <ellipse cx="0" cy="30" rx="28" ry="40" fill="${colors.primary}" opacity="0.7"/>
      <!-- Head -->
      <circle cx="0" cy="-20" r="20" fill="${colors.primary}" opacity="0.8"/>
      <!-- Crown of governance tokens -->
      <polygon points="-25,-35 -12,-50 0,-42 12,-50 25,-35" fill="${colors.accent}" opacity="0.8" filter="url(#glow)"/>
      ${Array.from({ length: 5 }, (_, i) => {
        return `<circle cx="${-12 + i * 6}" cy="${-50 + (i % 2) * 3}" r="3" fill="#fff"/>`;
      }).join('')}
      <!-- Arms on throne -->
      <ellipse cx="-35" cy="25" rx="10" ry="35" fill="${colors.primary}" opacity="0.7"/>
      <ellipse cx="35" cy="25" rx="10" ry="35" fill="${colors.primary}" opacity="0.7"/>
      <!-- Legs -->
      <ellipse cx="-15" cy="65" rx="8" ry="25" fill="${colors.primary}" opacity="0.7"/>
      <ellipse cx="15" cy="65" rx="8" ry="25" fill="${colors.primary}" opacity="0.7"/>
      <!-- Secure protocol symbols -->
      <circle cx="-30" cy="10" r="8" fill="${colors.accent}" opacity="0.6" filter="url(#glow)"/>
      <text x="-30" y="13" text-anchor="middle" font-size="10" fill="#fff">🔒</text>
      <circle cx="30" cy="10" r="8" fill="${colors.accent}" opacity="0.6" filter="url(#glow)"/>
      <text x="30" y="13" text-anchor="middle" font-size="10" fill="#fff">✓</text>
    </g>
    <!-- Structure pillars -->
    <line x1="200" y1="400" x2="200" y2="600" stroke="${colors.primary}" stroke-width="4" opacity="0.4"/>
    <line x1="500" y1="400" x2="500" y2="600" stroke="${colors.primary}" stroke-width="4" opacity="0.4"/>
  `,

  'The Hierophant Whale': colors => `
    <!-- Massive whale figure -->
    <g transform="translate(350, 500)">
      <!-- Whale body -->
      <ellipse cx="0" cy="0" rx="120" ry="60" fill="${colors.accent}" opacity="0.5" filter="url(#glow)"/>
      <!-- Whale head -->
      <ellipse cx="-80" cy="0" rx="50" ry="40" fill="${colors.accent}" opacity="0.6"/>
      <!-- Whale eye -->
      <circle cx="-90" cy="-5" r="8" fill="#fff"/>
      <circle cx="-90" cy="-5" r="4" fill="#000"/>
      <!-- Whale tail -->
      <path d="M80,0 Q120,-30 110,-50 Q100,-40 80,-20" fill="${colors.accent}" opacity="0.5"/>
      <path d="M80,0 Q120,30 110,50 Q100,40 80,20" fill="${colors.accent}" opacity="0.5"/>
      <!-- DAO governance symbols around whale -->
      ${Array.from({ length: 6 }, (_, i) => {
        const angle = (i * 60 * Math.PI) / 180;
        const x = Math.cos(angle) * 140;
        const y = Math.sin(angle) * 140;
        return `<circle cx="${x}" cy="${y}" r="12" fill="${colors.primary}" opacity="0.5" filter="url(#glow)">
                <text x="${x}" y="${y + 4}" text-anchor="middle" font-size="10" fill="#fff">DAO</text>
                </circle>`;
      }).join('')}
    </g>
    <!-- Smaller fish (students) -->
    ${Array.from({ length: 5 }, (_, i) => {
      const x = 200 + i * 40;
      const y = 450 + Math.sin(i) * 30;
      return `<ellipse cx="${x}" cy="${y}" rx="15" ry="8" fill="${colors.primary}" opacity="0.4">
              <circle cx="${x - 8}" cy="${y}" r="2" fill="#fff"/>
              </ellipse>`;
    }).join('')}
    <!-- Teaching rays -->
    <path d="M350,440 L250,420 M350,440 L450,420 M350,440 L200,450 M350,440 L500,450" 
          stroke="${colors.primary}" stroke-width="2" opacity="0.4" filter="url(#glow)"/>
  `,

  'The Lovers Fork': colors => `
    <!-- Fork in blockchain path -->
    <path d="M350,400 L250,500 M350,400 L450,500" stroke="${colors.primary}" stroke-width="4" fill="none" opacity="0.6" filter="url(#glow)"/>
    <circle cx="250" cy="500" r="15" fill="${colors.primary}" opacity="0.6"/>
    <circle cx="450" cy="500" r="15" fill="${colors.accent}" opacity="0.6"/>
    <!-- Two figures at fork -->
    <!-- Figure 1 (left path) -->
    <g transform="translate(250, 500)">
      <ellipse cx="0" cy="20" rx="18" ry="30" fill="${colors.primary}" opacity="0.6"/>
      <circle cx="0" cy="-15" r="14" fill="${colors.primary}" opacity="0.7"/>
      <ellipse cx="-20" cy="15" rx="6" ry="25" fill="${colors.primary}" opacity="0.6"/>
      <ellipse cx="20" cy="15" rx="6" ry="25" fill="${colors.primary}" opacity="0.6"/>
      <!-- Hand pointing to path -->
      <circle cx="-25" cy="10" r="5" fill="${colors.primary}" opacity="0.8"/>
    </g>
    <!-- Figure 2 (right path) -->
    <g transform="translate(450, 500)">
      <ellipse cx="0" cy="20" rx="18" ry="30" fill="${colors.accent}" opacity="0.6"/>
      <circle cx="0" cy="-15" r="14" fill="${colors.accent}" opacity="0.7"/>
      <ellipse cx="-20" cy="15" rx="6" ry="25" fill="${colors.accent}" opacity="0.6"/>
      <ellipse cx="20" cy="15" rx="6" ry="25" fill="${colors.accent}" opacity="0.6"/>
      <!-- Hand pointing to path -->
      <circle cx="25" cy="10" r="5" fill="${colors.accent}" opacity="0.8"/>
    </g>
    <!-- Central meeting point -->
    <g transform="translate(350, 400)">
      <circle cx="0" cy="0" r="25" fill="${colors.primary}" opacity="0.4" filter="url(#glow)"/>
      <text x="0" y="5" text-anchor="middle" font-size="20" fill="#fff">⚡</text>
    </g>
    <!-- Chain symbols -->
    <circle cx="200" cy="520" r="10" fill="${colors.primary}" opacity="0.5"/>
    <circle cx="500" cy="520" r="10" fill="${colors.accent}" opacity="0.5"/>
  `,

  'The Chariot Pump': colors => `
    <!-- Figure riding rocket -->
    <g transform="translate(350, 500)">
      <!-- Rocket body -->
      <ellipse cx="0" cy="0" rx="30" ry="90" fill="${colors.primary}" opacity="0.7" filter="url(#glow)"/>
      <!-- Rocket nose -->
      <polygon points="0,-90 25,-65 -25,-65" fill="${colors.accent}" opacity="0.8"/>
      <!-- Rocket fins -->
      <polygon points="-30,50 -50,75 -30,60" fill="${colors.accent}" opacity="0.7"/>
      <polygon points="30,50 50,75 30,60" fill="${colors.accent}" opacity="0.7"/>
      <!-- Flame -->
      <ellipse cx="0" cy="90" rx="20" ry="40" fill="${colors.accent}" opacity="0.9" filter="url(#glow)"/>
      <!-- Rider figure -->
      <ellipse cx="0" cy="-40" rx="15" ry="25" fill="${colors.primary}" opacity="0.8"/>
      <circle cx="0" cy="-60" r="12" fill="${colors.primary}" opacity="0.9"/>
      <!-- Arms holding controls -->
      <ellipse cx="-20" cy="-45" rx="5" ry="20" fill="${colors.primary}" opacity="0.8"/>
      <ellipse cx="20" cy="-45" rx="5" ry="20" fill="${colors.primary}" opacity="0.8"/>
    </g>
    <!-- Price chart ascending -->
    <path d="M150,600 L200,550 L250,500 L300,450 L350,400 L400,350 L450,300 L500,250 L550,200" 
          stroke="${colors.primary}" stroke-width="4" fill="none" opacity="0.7" filter="url(#glow)"/>
    <!-- Moonshot stars -->
    ${Array.from({ length: 8 }, (_, i) => {
      const x = 200 + i * 50;
      const y = 250 + Math.sin(i) * 60;
      return `<polygon points="${x},${y} ${x + 4},${y + 8} ${x + 12},${y + 8} ${x + 6},${y + 14} ${x + 8},${y + 22} ${x},${y + 18} ${x - 8},${y + 22} ${x - 6},${y + 14} ${x - 12},${y + 8} ${x - 4},${y + 8}" 
              fill="${colors.accent}" opacity="0.6" filter="url(#glow)"/>`;
    }).join('')}
  `,

  'Strength HODL': colors => `
    <!-- Bear figure -->
    <g transform="translate(350, 520)">
      <!-- Bear body -->
      <ellipse cx="0" cy="30" rx="55" ry="70" fill="${colors.accent}" opacity="0.4"/>
      <!-- Bear head -->
      <circle cx="0" cy="-25" r="38" fill="${colors.accent}" opacity="0.5"/>
      <!-- Bear ears -->
      <circle cx="-22" cy="-40" r="14" fill="${colors.accent}" opacity="0.5"/>
      <circle cx="22" cy="-40" r="14" fill="${colors.accent}" opacity="0.5"/>
      <!-- Bear eyes -->
      <circle cx="-12" cy="-30" r="4" fill="#fff"/>
      <circle cx="12" cy="-30" r="4" fill="#fff"/>
      <!-- Bear snout -->
      <ellipse cx="0" cy="-15" rx="8" ry="6" fill="#fff" opacity="0.7"/>
      <!-- Bear paws -->
      <ellipse cx="-35" cy="50" rx="12" ry="18" fill="${colors.accent}" opacity="0.5"/>
      <ellipse cx="35" cy="50" rx="12" ry="18" fill="${colors.accent}" opacity="0.5"/>
    </g>
    <!-- Figure taming bear -->
    <g transform="translate(350, 450)">
      <!-- Body -->
      <ellipse cx="0" cy="20" rx="20" ry="32" fill="${colors.primary}" opacity="0.7"/>
      <!-- Head -->
      <circle cx="0" cy="-18" r="15" fill="${colors.primary}" opacity="0.8"/>
      <!-- Face -->
      <circle cx="-5" cy="-22" r="2" fill="#fff"/>
      <circle cx="5" cy="-22" r="2" fill="#fff"/>
      <!-- Arms with diamond hands -->
      <ellipse cx="-25" cy="15" rx="7" ry="28" fill="${colors.primary}" opacity="0.7"/>
      <ellipse cx="25" cy="15" rx="7" ry="28" fill="${colors.primary}" opacity="0.7"/>
      <!-- Diamond hands symbol -->
      <path d="M-25,30 L-18,42 L-11,30 M11,30 L18,42 L25,30" stroke="${colors.primary}" stroke-width="3" fill="none" filter="url(#glow)"/>
      <!-- Legs -->
      <ellipse cx="-12" cy="48" rx="8" ry="30" fill="${colors.primary}" opacity="0.7"/>
      <ellipse cx="12" cy="48" rx="8" ry="30" fill="${colors.primary}" opacity="0.7"/>
    </g>
    <!-- Inner strength aura -->
    <circle cx="350" cy="500" r="130" fill="none" stroke="${colors.primary}" stroke-width="3" opacity="0.3" stroke-dasharray="8,4">
      <animate attributeName="opacity" values="0.3;0.5;0.3" dur="2s" repeatCount="indefinite"/>
    </circle>
  `,

  'The Hermit Dev': colors => `
    <!-- Cave/background -->
    <path d="M150,400 Q200,350 250,400 Q300,450 350,400 Q400,450 450,400 Q500,350 550,400" 
          fill="${colors.primary}" opacity="0.1" stroke="${colors.primary}" stroke-width="2" opacity="0.3"/>
    <!-- Solitary figure character -->
    <g transform="translate(350, 500)">
      <!-- Body sitting -->
      <ellipse cx="0" cy="15" rx="22" ry="35" fill="${colors.primary}" opacity="0.6"/>
      <!-- Head -->
      <circle cx="0" cy="-20" r="16" fill="${colors.primary}" opacity="0.7"/>
      <!-- Hood -->
      <path d="M-20,-20 Q-25,-35 -15,-45 Q0,-50 15,-45 Q25,-35 20,-20" 
            fill="${colors.accent}" opacity="0.4"/>
      <!-- Arms coding -->
      <ellipse cx="-28" cy="10" rx="6" ry="28" fill="${colors.primary}" opacity="0.6"/>
      <ellipse cx="28" cy="10" rx="6" ry="28" fill="${colors.primary}" opacity="0.6"/>
      <!-- Laptop/screen -->
      <rect x="-40" y="0" width="50" height="35" rx="3" fill="${colors.accent}" opacity="0.5" filter="url(#glow)"/>
      <!-- Code on screen -->
      <text x="-15" y="15" font-size="8" fill="${colors.primary}" opacity="0.8">function</text>
      <text x="-15" y="25" font-size="8" fill="${colors.primary}" opacity="0.8">hash()</text>
    </g>
    <!-- Blockchain code glowing -->
    ${Array.from({ length: 6 }, (_, i) => {
      const x = 200 + i * 50;
      const y = 450 + Math.sin(i) * 30;
      return `<text x="${x}" y="${y}" font-size="10" fill="${colors.primary}" opacity="0.4" filter="url(#glow)">0x${Math.random().toString(16).substr(2, 4)}</text>`;
    }).join('')}
    <!-- Deep research aura -->
    <circle cx="350" cy="500" r="100" fill="none" stroke="${colors.primary}" stroke-width="2" opacity="0.2" stroke-dasharray="3,3"/>
  `,

  'Wheel of Fortune Cycle': colors => `
    <!-- Spinning wheel -->
    <g transform="translate(350, 500)">
      <!-- Outer wheel ring -->
      <circle cx="0" cy="0" r="110" fill="none" stroke="${colors.primary}" stroke-width="5" opacity="0.7" filter="url(#glow)"/>
      <!-- Inner wheel ring -->
      <circle cx="0" cy="0" r="90" fill="none" stroke="${colors.accent}" stroke-width="3" opacity="0.6"/>
      <!-- Spokes -->
      ${Array.from({ length: 8 }, (_, i) => {
        const angle = (i * 45 * Math.PI) / 180;
        const x = Math.cos(angle) * 110;
        const y = Math.sin(angle) * 110;
        return `<line x1="0" y1="0" x2="${x}" y2="${y}" stroke="${colors.primary}" stroke-width="2" opacity="0.5"/>`;
      }).join('')}
      <!-- Center hub -->
      <circle cx="0" cy="0" r="25" fill="${colors.accent}" opacity="0.7" filter="url(#glow)"/>
      <!-- Bull/Bear symbols on wheel -->
      <text x="-70" y="-70" font-size="32" fill="${colors.primary}" opacity="0.8">🐂</text>
      <text x="70" y="70" font-size="32" fill="${colors.accent}" opacity="0.8">🐻</text>
      <!-- Halving symbol -->
      <text x="0" y="5" text-anchor="middle" font-size="20" fill="#fff">½</text>
    </g>
    <!-- Market cycle arrows -->
    <defs>
      <marker id="arrowhead-cycle" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
        <polygon points="0 0, 10 3, 0 6" fill="${colors.primary}"/>
      </marker>
    </defs>
    <path d="M200,500 Q350,400 500,500" stroke="${colors.primary}" stroke-width="4" fill="none" opacity="0.6" marker-end="url(#arrowhead-cycle)" filter="url(#glow)"/>
    <path d="M500,500 Q350,600 200,500" stroke="${colors.accent}" stroke-width="4" fill="none" opacity="0.6" marker-end="url(#arrowhead-cycle)"/>
  `,

  'Justice Ledger': colors => `
    <!-- Figure character -->
    <g transform="translate(350, 450)">
      <!-- Body -->
      <ellipse cx="0" cy="25" rx="24" ry="38" fill="${colors.primary}" opacity="0.6"/>
      <!-- Head -->
      <circle cx="0" cy="-20" r="18" fill="${colors.primary}" opacity="0.7"/>
      <!-- Crown/headpiece -->
      <polygon points="-20,-30 -10,-40 0,-35 10,-40 20,-30" fill="${colors.accent}" opacity="0.7" filter="url(#glow)"/>
      <!-- Arms holding scales -->
      <ellipse cx="-30" cy="20" rx="8" ry="30" fill="${colors.primary}" opacity="0.6"/>
      <ellipse cx="30" cy="20" rx="8" ry="30" fill="${colors.primary}" opacity="0.6"/>
    </g>
    <!-- Scales of justice -->
    <g transform="translate(350, 500)">
      <!-- Balance beam -->
      <line x1="-70" y1="0" x2="70" y2="0" stroke="${colors.primary}" stroke-width="5" filter="url(#glow)"/>
      <!-- Support pillar -->
      <line x1="0" y1="0" x2="0" y2="30" stroke="${colors.primary}" stroke-width="4"/>
      <!-- Left scale -->
      <ellipse cx="-70" cy="25" rx="30" ry="10" fill="${colors.primary}" opacity="0.5"/>
      <line x1="-70" y1="0" x2="-70" y2="35" stroke="${colors.primary}" stroke-width="3"/>
      <!-- Right scale -->
      <ellipse cx="70" cy="25" rx="30" ry="10" fill="${colors.primary}" opacity="0.5"/>
      <line x1="70" y1="0" x2="70" y2="35" stroke="${colors.primary}" stroke-width="3"/>
      <!-- Blockchain transactions in scales -->
      <rect x="-95" y="20" width="18" height="12" fill="${colors.accent}" opacity="0.7" rx="2"/>
      <text x="-86" y="28" text-anchor="middle" font-size="8" fill="#fff">TX</text>
      <rect x="-77" y="20" width="18" height="12" fill="${colors.accent}" opacity="0.7" rx="2"/>
      <text x="-68" y="28" text-anchor="middle" font-size="8" fill="#fff">TX</text>
      <rect x="77" y="20" width="18" height="12" fill="${colors.accent}" opacity="0.7" rx="2"/>
      <text x="86" y="28" text-anchor="middle" font-size="8" fill="#fff">TX</text>
      <rect x="95" y="20" width="18" height="12" fill="${colors.accent}" opacity="0.7" rx="2"/>
      <text x="104" y="28" text-anchor="middle" font-size="8" fill="#fff">TX</text>
    </g>
    <!-- Transparent ledger lines -->
    ${Array.from({ length: 8 }, (_, i) => {
      const y = 380 + i * 25;
      return `<line x1="150" y1="${y}" x2="550" y2="${y}" stroke="${colors.primary}" stroke-width="1" opacity="0.2"/>`;
    }).join('')}
  `,

  'The Hanged Man Flip': colors => `
    <!-- Upside down figure -->
    <g transform="translate(350, 500) rotate(180)">
      <!-- Body hanging -->
      <ellipse cx="0" cy="20" rx="20" ry="35" fill="${colors.primary}" opacity="0.6"/>
      <!-- Head (now at bottom due to rotation) -->
      <circle cx="0" cy="-20" r="16" fill="${colors.primary}" opacity="0.7"/>
      <!-- Rope/chain -->
      <line x1="0" y1="-35" x2="0" y2="-60" stroke="${colors.accent}" stroke-width="3" opacity="0.7"/>
      <!-- Arms spread -->
      <ellipse cx="-25" cy="15" rx="6" ry="28" fill="${colors.primary}" opacity="0.6"/>
      <ellipse cx="25" cy="15" rx="6" ry="28" fill="${colors.primary}" opacity="0.6"/>
      <!-- Legs crossed -->
      <ellipse cx="-8" cy="50" rx="6" ry="25" fill="${colors.primary}" opacity="0.6"/>
      <ellipse cx="8" cy="50" rx="6" ry="25" fill="${colors.primary}" opacity="0.6"/>
      <!-- Enlightened aura -->
      <circle cx="0" cy="0" r="50" fill="none" stroke="${colors.primary}" stroke-width="2" opacity="0.4" stroke-dasharray="5,3" filter="url(#glow)"/>
    </g>
    <!-- Blockchain perspective lines (upside down view) -->
    <path d="M200,400 L350,500 L500,400" stroke="${colors.accent}" stroke-width="2" fill="none" opacity="0.4" stroke-dasharray="3,3"/>
    <!-- New perspective symbols -->
    <circle cx="250" cy="450" r="8" fill="${colors.primary}" opacity="0.5"/>
    <circle cx="450" cy="450" r="8" fill="${colors.primary}" opacity="0.5"/>
  `,

  'Death Rug': colors => `
    <!-- Dead coins (faded/scattered) -->
    ${Array.from({ length: 8 }, (_, i) => {
      const x = 200 + i * 50;
      const y = 500 + Math.sin(i) * 40;
      const opacity = 0.15 + Math.random() * 0.1;
      return `<circle cx="${x}" cy="${y}" r="22" fill="${colors.accent}" opacity="${opacity}" stroke="${colors.accent}" stroke-width="1" opacity="${opacity + 0.1}">
              <animate attributeName="opacity" values="${opacity};${opacity * 0.5};${opacity}" dur="3s" repeatCount="indefinite"/>
              <text x="${x}" y="${y + 5}" text-anchor="middle" font-size="16" fill="#fff" opacity="0.3">₿</text>
              </circle>`;
    }).join('')}
    <!-- Phoenix rising -->
    <g transform="translate(350, 480)">
      <!-- Phoenix body -->
      <ellipse cx="0" cy="0" rx="35" ry="55" fill="${colors.primary}" opacity="0.7" filter="url(#glow)"/>
      <!-- Phoenix wings (spread wide) -->
      <path d="M-35,0 Q-70,-40 -55,-70 Q-45,-50 -35,-25" fill="${colors.accent}" opacity="0.6" filter="url(#glow)"/>
      <path d="M35,0 Q70,-40 55,-70 Q45,-50 35,-25" fill="${colors.accent}" opacity="0.6" filter="url(#glow)"/>
      <!-- Phoenix head -->
      <circle cx="0" cy="-55" r="15" fill="${colors.primary}" opacity="0.8" filter="url(#glow)"/>
      <!-- Phoenix beak -->
      <polygon points="0,-55 5,-65 -5,-65" fill="${colors.accent}" opacity="0.8"/>
      <!-- Phoenix eye -->
      <circle cx="0" cy="-58" r="3" fill="#fff"/>
      <!-- Rising flames -->
      <ellipse cx="0" cy="55" rx="25" ry="50" fill="${colors.accent}" opacity="0.7" filter="url(#glow)">
        <animate attributeName="ry" values="50;60;50" dur="1.5s" repeatCount="indefinite"/>
      </ellipse>
    </g>
    <!-- Transformation energy waves -->
    <circle cx="350" cy="480" r="110" fill="none" stroke="${colors.primary}" stroke-width="3" opacity="0.3" stroke-dasharray="4,4">
      <animate attributeName="r" values="110;130;110" dur="2s" repeatCount="indefinite"/>
    </circle>
  `,

  'Temperance Mix': colors => `
    <!-- Figure character mixing -->
    <g transform="translate(350, 500)">
      <!-- Body -->
      <ellipse cx="0" cy="20" rx="24" ry="38" fill="${colors.primary}" opacity="0.6"/>
      <!-- Head -->
      <circle cx="0" cy="-20" r="18" fill="${colors.primary}" opacity="0.7"/>
      <!-- Arms mixing -->
      <ellipse cx="-28" cy="15" rx="7" ry="30" fill="${colors.primary}" opacity="0.6"/>
      <ellipse cx="28" cy="15" rx="7" ry="30" fill="${colors.primary}" opacity="0.6"/>
      <!-- Mixing vessel -->
      <ellipse cx="0" cy="35" rx="40" ry="25" fill="${colors.accent}" opacity="0.4" filter="url(#glow)"/>
      <!-- Tokens mixing -->
      ${Array.from({ length: 6 }, (_, i) => {
        const angle = (i * 60 * Math.PI) / 180;
        const x = Math.cos(angle) * 25;
        const y = 35 + Math.sin(angle) * 15;
        return `<circle cx="${x}" cy="${y}" r="8" fill="${colors.primary}" opacity="0.6" filter="url(#glow)">
                <text x="${x}" y="${y + 3}" text-anchor="middle" font-size="8" fill="#fff">₿</text>
                </circle>`;
      }).join('')}
    </g>
    <!-- Balanced portfolio symbols -->
    ${Array.from({ length: 4 }, (_, i) => {
      const x = 200 + i * 100;
      const y = 450;
      return `<circle cx="${x}" cy="${y}" r="15" fill="${colors.accent}" opacity="0.4" filter="url(#glow)">
              <text x="${x}" y="${y + 5}" text-anchor="middle" font-size="12" fill="#fff">💎</text>
              </circle>`;
    }).join('')}
    <!-- Harmony lines -->
    <path d="M200,450 L350,500 L500,450" stroke="${colors.primary}" stroke-width="2" fill="none" opacity="0.4" stroke-dasharray="5,3"/>
  `,

  'The Devil Scam': colors => `
    <!-- Figure chained by FOMO -->
    <g transform="translate(350, 500)">
      <!-- Body -->
      <ellipse cx="0" cy="20" rx="24" ry="38" fill="${colors.accent}" opacity="0.6"/>
      <!-- Head with horns -->
      <circle cx="0" cy="-20" r="18" fill="${colors.accent}" opacity="0.7"/>
      <polygon points="-15,-30 -8,-45 -15,-40" fill="${colors.accent}" opacity="0.8"/>
      <polygon points="15,-30 8,-45 15,-40" fill="${colors.accent}" opacity="0.8"/>
      <!-- Arms chained -->
      <ellipse cx="-28" cy="15" rx="7" ry="30" fill="${colors.accent}" opacity="0.6"/>
      <ellipse cx="28" cy="15" rx="7" ry="30" fill="${colors.accent}" opacity="0.6"/>
      <!-- Chains -->
      <circle cx="-35" cy="10" r="6" fill="${colors.primary}" opacity="0.7"/>
      <circle cx="35" cy="10" r="6" fill="${colors.primary}" opacity="0.7"/>
      <line x1="-35" y1="10" x2="-50" y2="50" stroke="${colors.primary}" stroke-width="3" opacity="0.6"/>
      <line x1="35" y1="10" x2="50" y2="50" stroke="${colors.primary}" stroke-width="3" opacity="0.6"/>
      <!-- Legs -->
      <ellipse cx="-12" cy="55" rx="8" ry="30" fill="${colors.accent}" opacity="0.6"/>
      <ellipse cx="12" cy="55" rx="8" ry="30" fill="${colors.accent}" opacity="0.6"/>
    </g>
    <!-- Seductive rug pulls -->
    ${Array.from({ length: 4 }, (_, i) => {
      const x = 200 + i * 100;
      const y = 450;
      return `<circle cx="${x}" cy="${y}" r="20" fill="${colors.primary}" opacity="0.3" filter="url(#glow)">
              <text x="${x}" y="${y + 5}" text-anchor="middle" font-size="16" fill="#fff" opacity="0.6">⚠️</text>
              </circle>`;
    }).join('')}
    <!-- FOMO chains extending -->
    <path d="M300,500 Q250,480 200,470 M400,500 Q450,480 500,470" 
          stroke="${colors.primary}" stroke-width="2" fill="none" opacity="0.5" stroke-dasharray="3,3"/>
  `,

  'The Tower Hack': colors => `
    <!-- Blockchain tower -->
    <rect x="300" y="350" width="100" height="200" rx="5" fill="${colors.primary}" opacity="0.4" filter="url(#glow)"/>
    ${Array.from({ length: 8 }, (_, i) => {
      return `<rect x="${310 + (i % 4) * 20}" y="${360 + Math.floor(i / 4) * 40}" width="15" height="15" fill="${colors.accent}" opacity="0.5"/>`;
    }).join('')}
    <!-- Lightning strike -->
    <path d="M350,350 L340,400 L350,390 L360,450 L350,440 L340,500" 
          stroke="#fff" stroke-width="4" fill="none" filter="url(#glow)" opacity="0.9">
      <animate attributeName="opacity" values="0.9;0.3;0.9" dur="0.5s" repeatCount="indefinite"/>
    </path>
    <!-- Exploits visible (cracks) -->
    <path d="M300,400 L320,420 M350,450 L370,470 M400,480 L420,500" 
          stroke="${colors.accent}" stroke-width="2" opacity="0.7"/>
    <!-- Figure character (falling/rebuilding) -->
    <g transform="translate(350, 520)">
      <ellipse cx="0" cy="20" rx="18" ry="30" fill="${colors.primary}" opacity="0.6"/>
      <circle cx="0" cy="-15" r="14" fill="${colors.primary}" opacity="0.7"/>
      <!-- Arms raised (rebuilding) -->
      <ellipse cx="-22" cy="5" rx="6" ry="28" fill="${colors.primary}" opacity="0.6"/>
      <ellipse cx="22" cy="5" rx="6" ry="28" fill="${colors.primary}" opacity="0.6"/>
    </g>
    <!-- Rebuilding stronger (foundation) -->
    <rect x="280" y="540" width="140" height="20" rx="3" fill="${colors.accent}" opacity="0.5" filter="url(#glow)"/>
  `,

  'The Star Airdrop': colors => `
    <!-- Starry sky background -->
    ${Array.from({ length: 25 }, (_, i) => {
      const angle = Math.random() * Math.PI * 2;
      const radius = 120 + Math.random() * 180;
      const x = 350 + Math.cos(angle) * radius;
      const y = 400 + Math.sin(angle) * radius;
      const size = 2 + Math.random() * 4;
      return `<circle cx="${x}" cy="${y}" r="${size}" fill="${colors.primary}" opacity="${0.5 + Math.random() * 0.3}" filter="url(#glow)"/>`;
    }).join('')}
    <!-- Large central star -->
    <polygon points="350,400 365,440 410,440 375,465 390,505 350,480 310,505 325,465 290,440 335,440" 
             fill="${colors.accent}" opacity="0.9" filter="url(#glow)"/>
    <!-- Falling tokens (airdrop) -->
    ${Array.from({ length: 10 }, (_, i) => {
      const x = 200 + (i % 5) * 80;
      const y = 350 + Math.floor(i / 5) * 120 + (i % 2) * 40;
      return `<circle cx="${x}" cy="${y}" r="10" fill="${colors.primary}" opacity="0.7" filter="url(#glow)">
              <text x="${x}" y="${y + 4}" text-anchor="middle" font-size="12" fill="#fff">₿</text>
              <animate attributeName="cy" values="${y};${y + 100}" dur="2s" repeatCount="indefinite"/>
              </circle>`;
    }).join('')}
    <!-- Figure reaching up -->
    <g transform="translate(350, 560)">
      <ellipse cx="0" cy="15" rx="16" ry="28" fill="${colors.primary}" opacity="0.6"/>
      <circle cx="0" cy="-18" r="14" fill="${colors.primary}" opacity="0.7"/>
      <!-- Arms reaching up -->
      <ellipse cx="-20" cy="0" rx="6" ry="30" fill="${colors.primary}" opacity="0.6"/>
      <ellipse cx="20" cy="0" rx="6" ry="30" fill="${colors.primary}" opacity="0.6"/>
      <!-- Hands open -->
      <circle cx="-20" cy="-25" r="5" fill="${colors.primary}" opacity="0.8"/>
      <circle cx="20" cy="-25" r="5" fill="${colors.primary}" opacity="0.8"/>
    </g>
  `,

  'The Moon Illusion': colors => `
    <!-- Moon in sky -->
    <circle cx="350" cy="380" r="50" fill="${colors.accent}" opacity="0.4" filter="url(#glow)"/>
    <circle cx="340" cy="375" r="40" fill="${colors.primary}" opacity="0.3"/>
    <!-- Figure on moonlit path -->
    <g transform="translate(350, 520)">
      <ellipse cx="0" cy="20" rx="20" ry="32" fill="${colors.primary}" opacity="0.5"/>
      <circle cx="0" cy="-18" r="15" fill="${colors.primary}" opacity="0.6"/>
      <!-- Shrouded in mystery -->
      <path d="M-25,-20 Q-30,-35 -20,-45 Q0,-50 20,-45 Q30,-35 25,-20" 
            fill="${colors.accent}" opacity="0.3"/>
      <!-- Arms -->
      <ellipse cx="-25" cy="15" rx="6" ry="28" fill="${colors.primary}" opacity="0.5"/>
      <ellipse cx="25" cy="15" rx="6" ry="28" fill="${colors.primary}" opacity="0.5"/>
    </g>
    <!-- FUD shadows -->
    ${Array.from({ length: 5 }, (_, i) => {
      const x = 200 + i * 75;
      const y = 480 + Math.sin(i) * 30;
      return `<ellipse cx="${x}" cy="${y}" rx="30" ry="15" fill="${colors.accent}" opacity="0.2" filter="url(#glow)"/>`;
    }).join('')}
    <!-- Moonlit path -->
    <path d="M150,600 L350,550 L550,600" stroke="${colors.primary}" stroke-width="3" fill="none" opacity="0.4" stroke-dasharray="5,5"/>
  `,

  'The Sun Bull': colors => `
    <!-- Golden sun -->
    <circle cx="350" cy="400" r="80" fill="${colors.accent}" opacity="0.6" filter="url(#glow)"/>
    ${Array.from({ length: 12 }, (_, i) => {
      const angle = (i * 30 * Math.PI) / 180;
      const x1 = 350 + Math.cos(angle) * 80;
      const y1 = 400 + Math.sin(angle) * 80;
      const x2 = 350 + Math.cos(angle) * 100;
      const y2 = 400 + Math.sin(angle) * 100;
      return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${colors.accent}" stroke-width="3" opacity="0.7" filter="url(#glow)"/>`;
    }).join('')}
    <!-- Bull figure -->
    <g transform="translate(350, 520)">
      <!-- Bull body -->
      <ellipse cx="0" cy="20" rx="50" ry="40" fill="${colors.primary}" opacity="0.6"/>
      <!-- Bull head -->
      <ellipse cx="0" cy="-15" rx="35" ry="25" fill="${colors.primary}" opacity="0.7"/>
      <!-- Bull horns -->
      <path d="M-25,-25 Q-35,-40 -30,-50" stroke="${colors.accent}" stroke-width="4" fill="none" filter="url(#glow)"/>
      <path d="M25,-25 Q35,-40 30,-50" stroke="${colors.accent}" stroke-width="4" fill="none" filter="url(#glow)"/>
      <!-- Bull eyes -->
      <circle cx="-10" cy="-20" r="4" fill="#fff"/>
      <circle cx="10" cy="-20" r="4" fill="#fff"/>
    </g>
    <!-- Prosperous market symbols -->
    ${Array.from({ length: 6 }, (_, i) => {
      const angle = (i * 60 * Math.PI) / 180;
      const x = 350 + Math.cos(angle) * 150;
      const y = 400 + Math.sin(angle) * 150;
      return `<circle cx="${x}" cy="${y}" r="12" fill="${colors.primary}" opacity="0.5" filter="url(#glow)">
              <text x="${x}" y="${y + 4}" text-anchor="middle" font-size="10" fill="#fff">📈</text>
              </circle>`;
    }).join('')}
  `,

  'Judgment Halving': colors => `
    <!-- Figure awakening -->
    <g transform="translate(350, 500)">
      <!-- Body rising -->
      <ellipse cx="0" cy="25" rx="22" ry="35" fill="${colors.primary}" opacity="0.7"/>
      <!-- Head looking up -->
      <circle cx="0" cy="-20" r="18" fill="${colors.primary}" opacity="0.8"/>
      <!-- Arms raised (awakening) -->
      <ellipse cx="-25" cy="5" rx="7" ry="32" fill="${colors.primary}" opacity="0.7"/>
      <ellipse cx="25" cy="5" rx="7" ry="32" fill="${colors.primary}" opacity="0.7"/>
      <!-- Hands reaching -->
      <circle cx="-25" cy="-20" r="6" fill="${colors.primary}" opacity="0.9"/>
      <circle cx="25" cy="-20" r="6" fill="${colors.primary}" opacity="0.9"/>
    </g>
    <!-- Halving event symbol -->
    <g transform="translate(350, 400)">
      <circle cx="0" cy="0" r="40" fill="${colors.accent}" opacity="0.5" filter="url(#glow)"/>
      <text x="0" y="8" text-anchor="middle" font-size="36" fill="#fff" font-weight="bold">½</text>
      <!-- Scarcity rays -->
      ${Array.from({ length: 8 }, (_, i) => {
        const angle = (i * 45 * Math.PI) / 180;
        const x = Math.cos(angle) * 40;
        const y = Math.sin(angle) * 40;
        const x2 = Math.cos(angle) * 55;
        const y2 = Math.sin(angle) * 55;
        return `<line x1="${x}" y1="${y}" x2="${x2}" y2="${y2}" stroke="${colors.primary}" stroke-width="2" opacity="0.6" filter="url(#glow)"/>`;
      }).join('')}
    </g>
    <!-- Reckoning energy -->
    <circle cx="350" cy="500" r="120" fill="none" stroke="${colors.primary}" stroke-width="3" opacity="0.3" stroke-dasharray="6,3">
      <animate attributeName="r" values="120;140;120" dur="2s" repeatCount="indefinite"/>
    </circle>
  `,

  'The World Ecosystem': colors => `
    <!-- Globe of interconnected blockchains -->
    <g transform="translate(350, 450)">
      <!-- Globe circle -->
      <circle cx="0" cy="0" r="100" fill="none" stroke="${colors.primary}" stroke-width="4" opacity="0.6" filter="url(#glow)"/>
      <!-- Latitude lines -->
      <ellipse cx="0" cy="0" rx="100" ry="50" fill="none" stroke="${colors.primary}" stroke-width="2" opacity="0.4"/>
      <ellipse cx="0" cy="0" rx="100" ry="30" fill="none" stroke="${colors.primary}" stroke-width="2" opacity="0.4"/>
      <!-- Longitude lines -->
      ${Array.from({ length: 6 }, (_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const x1 = Math.cos(angle) * 100;
        const y1 = Math.sin(angle) * 50;
        const x2 = -x1;
        const y2 = -y1;
        return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${colors.primary}" stroke-width="1" opacity="0.3"/>`;
      }).join('')}
      <!-- Blockchain nodes on globe -->
      ${Array.from({ length: 12 }, (_, i) => {
        const lat = ((i % 4) - 1.5) * 30;
        const lon = (Math.floor(i / 4) - 1) * 60;
        const x = Math.cos((lon * Math.PI) / 180) * (100 - Math.abs(lat));
        const y = lat;
        return `<circle cx="${x}" cy="${y}" r="6" fill="${colors.accent}" opacity="0.7" filter="url(#glow)">
                <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" begin="${i * 0.2}s"/>
                </circle>`;
      }).join('')}
    </g>
    <!-- Interconnected webs -->
    ${Array.from({ length: 8 }, (_, i) => {
      const angle1 = (i * 45 * Math.PI) / 180;
      const angle2 = ((i + 2) * 45 * Math.PI) / 180;
      const x1 = 350 + Math.cos(angle1) * 100;
      const y1 = 450 + Math.sin(angle1) * 50;
      const x2 = 350 + Math.cos(angle2) * 100;
      const y2 = 450 + Math.sin(angle2) * 50;
      return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${colors.primary}" stroke-width="1" opacity="0.3" stroke-dasharray="2,2"/>`;
    }).join('')}
    <!-- Web3 adoption symbols -->
    ${Array.from({ length: 6 }, (_, i) => {
      const angle = (i * 60 * Math.PI) / 180;
      const x = 350 + Math.cos(angle) * 150;
      const y = 450 + Math.sin(angle) * 150;
      return `<circle cx="${x}" cy="${y}" r="15" fill="${colors.accent}" opacity="0.5" filter="url(#glow)">
              <text x="${x}" y="${y + 5}" text-anchor="middle" font-size="12" fill="#fff">🌐</text>
              </circle>`;
    }).join('')}
  `,
};

// Function to add detailed characters to Major Arcana cards
function addDetailedCharacterToSVG(svgContent, cardName) {
  const colors = {
    primary: '#00f5a0',
    accent: '#8b5cf6',
    border: '#8b5cf6',
  };

  const characterArt = detailedCharacters[cardName];
  if (!characterArt) {
    console.log(`No detailed character for: ${cardName}`);
    return svgContent;
  }

  // Find and replace the artwork section
  const artworkPattern = /<!-- Beautiful artwork representing [^>]*>[\s\S]*?<\/g>/;

  if (artworkPattern.test(svgContent)) {
    const newArtwork = `<!-- Beautiful artwork representing ${cardName} -->
  <g>
    ${characterArt(colors)}
  </g>`;
    return svgContent.replace(artworkPattern, newArtwork);
  }

  return svgContent;
}

// Helper function to get card name from filename
function getCardNameFromFilename(filename) {
  const base = path.basename(filename, '.svg');

  if (base.startsWith('major-')) {
    const name = base.replace('major-', '').replace(/-/g, ' ');
    const words = name.split(' ');
    const titleCase = words.map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

    const nameMap = {
      'The Hodler': 'The HODLer',
      'Strength Hodl': 'Strength HODL',
      'Wheel Of Fortune Cycle': 'Wheel of Fortune Cycle',
    };

    return nameMap[titleCase] || titleCase;
  }

  return null;
}

// Main function
function main() {
  console.log('Adding detailed character figures to Major Arcana cards...\n');

  const files = fs.readdirSync(cardsDir).filter(f => f.endsWith('.svg') && f.startsWith('major-'));

  let updated = 0;
  let skipped = 0;
  let errors = 0;

  for (const file of files) {
    const filePath = path.join(cardsDir, file);
    const cardName = getCardNameFromFilename(file);

    if (!cardName) {
      console.log(`⚠️  Could not parse card name from: ${file}`);
      errors++;
      continue;
    }

    try {
      let svgContent = fs.readFileSync(filePath, 'utf8');

      const updatedSVG = addDetailedCharacterToSVG(svgContent, cardName);

      if (updatedSVG !== svgContent) {
        fs.writeFileSync(filePath, updatedSVG, 'utf8');
        console.log(`✓ Added detailed character: ${cardName}`);
        updated++;
      } else {
        console.log(`⏭  No changes needed: ${cardName}`);
        skipped++;
      }
    } catch (error) {
      console.error(`✗ Error updating ${file}:`, error.message);
      errors++;
    }
  }

  console.log(`\n${'='.repeat(60)}`);
  console.log(`Summary:`);
  console.log(`  Updated: ${updated} cards`);
  console.log(`  Skipped: ${skipped} cards`);
  console.log(`  Errors: ${errors} cards`);
  console.log(`  Total: ${files.length} Major Arcana files`);
  console.log(`${'='.repeat(60)}`);
}

main();
