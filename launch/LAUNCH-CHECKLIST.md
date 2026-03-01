# Launch Checklist – Crypto Tarot

Use this guide to coordinate every release milestone. Update the status column as tasks progress.

## 1. Pre-Launch (Final Week)

| Status | Task                                                                              | Notes                                        |
| ------ | --------------------------------------------------------------------------------- | -------------------------------------------- |
| [ ]    | Verify countdown timer date in `script.js` (LAUNCH_DATE)                          | Set to production launch timestamp           |
| [ ]    | Confirm waitlist form (`https://cryptotarot.app/signup`) is capturing submissions | Test with dummy entries                      |
| [ ]    | QA fortune teller spreads (1, 3, 5 cards) across desktop & mobile                 | Check history, combos, animations            |
| [ ]    | Review content for `print/book/book-of-descriptions.html`                         | Final edits before exporting to PDF          |
| [ ]    | Export `CryptoTarot_Companion.pdf` using Pandoc                                   | Store final PDF in `print/`                  |
| [ ]    | Hook analytics stub to chosen platform                                            | Configure `window.cryptoTarotAnalytics.send` |
| [ ]    | Prepare social proof (testimonials, quotes, stats)                                | Add to launch section or social posts        |
| [ ]    | Draft announcement emails & social posts                                          | Save copies in `launch/`                     |
| [ ]    | Final review of docs (`PROJECT-PLAN.md`, `ROADMAP.md`, `TODO.md`)                 | Ensure tracking is up-to-date                |

## 2. Launch Day

| Status | Task                                                      | Notes                           |
| ------ | --------------------------------------------------------- | ------------------------------- |
| [ ]    | Deploy latest build to production                         | Confirm CDN cache invalidated   |
| [ ]    | Perform live smoke test (draw cards, history, AI reading) | Verify analytics logging        |
| [ ]    | Publish announcement posts (Twitter/X, Discord, email)    | Link waitlist & app             |
| [ ]    | Trigger NFT mint / pre-order buttons if applicable        | Monitor blockchain transactions |
| [ ]    | Share immediate success metrics with stakeholders         | Note initial impressions & bugs |

## 3. Post-Launch (First 48h)

| Status | Task                                         | Notes                        |
| ------ | -------------------------------------------- | ---------------------------- |
| [ ]    | Monitor analytics & feedback channels        | Collect top issues/requests  |
| [ ]    | Triage bug reports; hotfix if needed         | Track in `docs/TODO.md`      |
| [ ]    | Update README with release notes             | Summarize key changes        |
| [ ]    | Send thank-you/follow-up email to waitlist   | Include roadmap teaser       |
| [ ]    | Archive launch assets & metrics in `launch/` | Capture screenshots, numbers |

## 4. Ongoing

- Log new ideas in `docs/IDEAS.md`
- Reflect new tasks/status in `docs/TODO.md`
- Update roadmap with lessons learned and next milestones

_"Clear checklists keep the launch orbit smooth."_ 🚀
