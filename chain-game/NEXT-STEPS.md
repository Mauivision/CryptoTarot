# Next Steps for Chain Game Testing

## Current Status (Project-wide snapshot)

- ✅ Core site finalized (fortune teller, gallery, card details, styles)
- ✅ Image system migrated to JPG-only: `assets/cards/ai-generated/` (primary) and `tools/CryptoTarot1-78/` (fallback); card back unified to `Cardback-01.jpg`
- ✅ Story page (`story.html`) shipped with Part One “Coming Soon” and spoilers for Episodes 1–5
- ✅ Navigation updated across pages (Story link added)
- ⏳ Chain Game: mechanics properties drafted; test/balance tooling to be (re)implemented as part of the new workflow plan

> Note: Earlier one-off fix/test scripts under `scripts/` were removed during refactor. We’ll replace them with stable, documented workflows (see “Planned Workstreams” below).

## What Cards Need for Chain Game (canonical)

### Major Arcana (22) – Spells

- `rarity`: one of `Genesis | Legendary | Epic | Rare | Common`
- `spellUpright`: effect when played upright
- `spellReversed`: effect when played reversed
- `energyCost`: always `1`
- `type`: `"spell"`

### Minor Arcana (56) – Units

- `rarity`: rank-based (`King=Legendary`, `Queen=Epic`, `Knight=Rare`, others=Common)
- `value`: `1–14` (Ace=1 … King=14)
- `power`: baseline = `value`
- `type`: `"unit"`
- `suitBonus`: `{ rallyBonus, chainBonus, battleBonus }`
- `courtEffect`: optional effect for Page/Knight/Queen/King
- `aceEffect`: optional effect for Aces

## Planned Workstreams (aligned with project To‑Dos)

1. Chain Game tester UI (wf-chain-game-tester) \n
   - Build a lightweight simulator page to run 1k–10k games with sliders for rarity/power weights\n
   - Output: balance histogram, win-rate by suit/rank, top/bottom outliers\n

2. Data quality checks (wf-data-quality-lint) \n
   - Validate `data/card-meanings.js` structure and required fields for game properties\n
   - Detect missing/invalid images (ai-generated primary, CryptoTarot1-78 fallback)\n
   - Hook into CI once GitHub Pages workflow is enabled\n

3. Advanced search & filters (wf-search-filters) \n
   - Fuzzy search, suit/rank/type filters, tags, instant results\n
   - Expose game properties as filter facets for playtesting\n

4. Meaning renderer upgrade (wf-meaning-renderer-upgrade) \n
   - TL;DR, highlights, upright/reversed tabs, action tips for gameplay\n

5. Performance & UX polish (wf-performance-pass, wf-ux-reading-polish) \n
   - Sequential flip pacing, GPU-friendly animations, image preloading, LCP < 2.5s\n

6. CI/CD for Pages (wf-ci-cd-pages) \n
   - GitHub Actions deploy + cache headers; auto data/links lint on PRs\n

7. Observability & analytics (wf-analytics, wf-observability) \n
   - Track spread choices, flips, dwell time; capture image fallback/error metrics\n

8. Story/content sprint (wf-story-sprint) \n
   - Finalize Episode 5 script; expand Part One sections; prepare asset checklist\n

## Immediate Next Steps (recommended)

1. Stand up a minimal Chain Game tester page (no external build step):\n
   - Read `data/card-meanings.js` → extract `gameMechanics`\n
   - Simulate N rounds with simple rules to validate value/power curves\n
   - Render charts (lightweight: canvas or inline SVG) and CSV export\n
     \n
2. Add a data guard (CI-ready script) to validate:\n
   - Required keys present for all 78 cards\n
   - No malformed quotes, dangling commas, or JSON-like keys in JS objects\n
   - All referenced images exist in `ai-generated` or `CryptoTarot1-78`\n
     \n
3. Wire a basic GitHub Pages workflow (once repository is created):\n
   - Build: static deploy (no bundler needed); verify module imports via `http-server`\n
   - Run data lint + link check as pre-deploy job\n
     \n
4. UX polish for reading page:\n
   - Maintain sequential flips (600–800ms cadence)\n
   - Add “Reveal All” option (respects reduced-motion)\n
   - Improve mobile layout (buttons, touch targets, sticky CTA)\n
     \n

## How to Verify Locally

\n

````bash\n
npm run serve       # serves at http://localhost:8000/\n
# Test pages:\n
#  - /index.html\n
#  - /fortune-teller.html\n
#  - /card-detail.html\n
#  - /story.html\n
```\n
\n
## Notes\n
\n
- All SVG card art is retired for gameplay; only JPG sources are used:\n
  - Primary: `assets/cards/ai-generated/{dirName}/v{1-4}.jpg`\n
  - Fallback: `tools/CryptoTarot1-78/{card-name}-{number}.jpg`\n
  - Card back: `tools/CryptoTarot1-78/Cardback-01.jpg`\n
- Prior fix scripts under `scripts/` were intentionally removed during refactor; we’ll rebuild tooling as stable CI-friendly tasks per the workstreams above.\n
````
