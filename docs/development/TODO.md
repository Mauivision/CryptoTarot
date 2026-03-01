# Finalization To-Do List

## 1. Core Fortune Teller Experience

- [x] QA multi-spread flow (1, 3, 5 cards) and ensure history records correctly
- [x] Design small polish passes (ambient audio toggle, subtle background animations)
- [x] Validate countdown timer and waitlist CTA; confirm analytics events are firing
- [x] Prepare “Launch Checklist” page (`launch/`) with go-live steps, QA sign-off, and rollback notes

## 2. Book & Print Deliverables

- [x] Review `print/book/book-of-descriptions.html` for final copy / layout
- [ ] Export to PDF using Pandoc; verify fonts and margins (install `Crimson Text`, `Fira Code`, `Helvetica Neue`)
- [ ] Store printer specs and quotes in `print/` (dielines, card stock, packaging)
- [ ] Draft print order email template and append to `print/README.md`

## 3. Chain Game (Strategy Spin-off)

- [ ] Create reference cards / quick sheets based on `chain-game/README.md`
- [ ] Build digital prototype or AI opponent stub (decision pending)
- [ ] Playtest balance (Genesis double effects, Legendary boosts, etc.)
- [ ] Document rarity metadata flow (`metadata/`) and link to mint scripts

## 4. Moon-Forge Saga

- [ ] Script Episode 5 (“Heart of the Oracle”) and add to `moon-forge/`
- [ ] Record 11Labs voice lines; store transcription + configs
- [ ] Outline NFT drop plan tied to episodes (timeline, traits, lore)
- [ ] Consider interactive easter eggs in main app (triggered by saga progress)

## 5. Asset Management

- [ ] Import the latest images from `tools/CryptoTarot1-78/` via `scripts/import-custom-images.js`
- [ ] Review naming conventions; update `assets/cardmap.json` after import
- [ ] Identify theme packs or seasonal art for future drops
- [ ] Archive outdated assets into `archive/` with notes

## 6. Documentation & Meta

- [x] Create master plan (`docs/MASTER-PLAN.md`) consolidating all tracks, priorities, and execution order
- [x] Update `docs/PROJECT-PLAN.md` upon completing each milestone
- [ ] Keep `docs/ROADMAP.md` and `docs/IDEAS.md` in sync with new ideas or status changes
- [ ] Add release notes / change log once final launch build is locked
- [ ] Capture any new "future ideas" in the idea library before moving on
- [x] Document asset verification workflow (`tools/verify-deck-assets.mjs`, regeneration steps)
