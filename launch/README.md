# Launch & Marketing Hub

This folder gathers every asset used to promote Crypto Tarot’s launch cycle.

## Countdown & Milestones

- **Launch date:** December 1, 2025 (configured in `script.js` for the countdown component)
- **Countdown target:** `const LAUNCH_DATE = new Date('2025-12-01T00:00:00Z');`
- **Site section:** `#launch` in `index.html` (highlights, timer, waitlist CTA)

## Messaging Blocks

- **Hero CTA copy**
  ```
  🔮 Begin Your Reading
  ✨ Browse All Cards
  ```
- **Launch highlights**
  - Early access readings with Compassion AI v2
  - Limited Genesis deck pre-orders (first 500)
  - Solana NFT mint + “Mint Your Spread” utility
- **Waitlist CTA:** `https://cryptotarot.app/signup`

## Analytics Stub

- Function: `trackEvent(name, detail)` in `script.js`
- Logged events:
  - `draw_button_clicked`
  - `spread_drawn`
  - `deck_shuffled`
  - `reading_history_opened`
  - `reading_shared`, `reading_deleted`, `reading_history_cleared`
- Integrate with your analytics provider by extending `window.cryptoTarotAnalytics.send(entry)`

## Pending Tasks

- Hook the stub into your analytics service (Plausible, GA, etc.)
- Validate waitlist signup & countdown accuracy
- Add social proof/testimonials once available
- Maintain `LAUNCH-CHECKLIST.md` for coordinated releases

Store future campaign drafts (email, social, press kits) in this folder so the launch story stays centralized. ✨
