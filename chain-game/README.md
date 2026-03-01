# Crypto Tarot: The Chain Game

A competitive 78-card strategy spin-off where players race to build the strongest blockchain. This README consolidates rules, card effects, and rarity boosts captured during design conversations.

## Core Rules (Concise)

- **Players:** 2–4 • **Time:** ~30 minutes • **Goal:** 21 blocks or last player standing
- **Setup**
  - Shuffle all 78 cards
  - Deal 7 cards to each player
  - Set Life to 20
  - Battlefield has 3 rows: `Your Row → Front Line → Opponent Row`
- **Turn Flow**
  1. **Draw** one card
  2. **Rally** a Minor Arcana to your row (apply suit bonus)
  3. **March** blocks forward (pay energy equal to value)
  4. **Battle** opposing block on the front line (power vs. power)
  5. **Spell** 1 Major Arcana per turn (discard to activate)
- **Victory**
  - Reach 21 total blocks, or
  - Reduce opponent to 0 Life, or
  - Have the most blocks when the deck empties

## Suit Bonuses (Apply on all Minors)

| Suit          | Rally Bonus         | Chain Bonus           | Battle Bonus    |
| ------------- | ------------------- | --------------------- | --------------- |
| **Tokens**    | +1 value            | +1 per matching block | +1 defense      |
| **Liquidity** | Heal 1 Life         | +1 per 3 cards        | +1 vs. Security |
| **Security**  | Block undestroyable | +2 defense            | +1 vs. Nodes    |
| **Nodes**     | +1 march            | +1 power              | +1 vs. Tokens   |

## Minor Arcana Highlights

- **Tokens (Wealth)**
  - Ace: Genesis (first block gains +2 chain score)
  - Page: Draw 1 when rallied
  - Queen: Steal 1 Life on win
  - King: DAO – all allies +1 power
- **Liquidity (Flow)**
  - Ace: Heal 1 Life
  - Page: Heal 2 on rally
  - King: DEX – swap 1 card with opponent
- **Security (Defense)**
  - Ace: Audit – negate next spell
  - Knight: CISO – block cannot be stolen
  - King: Ledger – reveal opponent’s hand
- **Nodes (Innovation)**
  - Ace: Deploy – free rally
  - Knight: Founder – +2 march
  - King: Satoshi – double your next effect

## Major Arcana – Spell Table

| Card                | Upright Effect                 | Reversed Effect                  |
| ------------------- | ------------------------------ | -------------------------------- |
| The HODLer          | Steal 1 block                  | Draw 2 cards                     |
| The Miner           | Free extra Minor play          | +2 power (next battle)           |
| The Oracle          | Reveal opponent hand (1 turn)  | Peek top 3 deck cards            |
| The Empress Node    | Rally 2 Minors                 | Heal 3 Life                      |
| The Emperor Chain   | Lock opponent row (no march)   | Gain 1 extra action              |
| The Lovers Fork     | Merge 2 allied chains          | Split opponent chain (-2 blocks) |
| The Tower Hack      | Destroy all blocks in a row    | Deal 5 Life damage               |
| The Sun Bull        | +5 power to your army          | Everyone heals 3 Life            |
| The World Ecosystem | End game – highest blocks wins | Restart with fresh decks         |

(Full table including every Major is preserved in design notes—see `chain-game/rules.md` when expanded.)

## NFT Rarity Mechanics

| Tier              | Cards                | Visual                   | Game Boost                                      |
| ----------------- | -------------------- | ------------------------ | ----------------------------------------------- |
| **Genesis** (1)   | The HODLer           | UV crown, holo core      | Immortal blocks, Leap ability, Faith multiplier |
| **Legendary** (4) | Kings                | Gold foil, animated core | Double effect                                   |
| **Epic** (12)     | Queens + late Majors | Neon pulse, holo border  | +50% power/value                                |
| **Rare** (22)     | Knights + mid Majors | Glow border              | +1 suit bonus                                   |
| **Common** (39)   | Aces–10s + Pages     | Standard glow            | Normal effect                                   |

### Genesis HODLer – Flavor Highlights

- **Immortal Chain:** Blocks immune to destruction or theft
- **Leap:** Once per game, teleport army to opponent row (free march)
- **Faith Double:** All Major spells resolve twice
- **Narration snippets** (11Labs “Genesis Oracle” voice):
  - Play: “I was the first. Now I am you.”
  - Leap: “The edge calls. I answer.”
  - Win battle: “The chain expands. The void retreats.”

## Digital Notes

- Energy = sum of values in your row
- March cost = card value (max 3 rows/turn)
- Rare/Epic/Legendary boosts apply only if the owning wallet/NFT is connected (see rarity metadata template in `metadata/`)

## Media & Prompt Resources

- `chain-game/REFERENCE.md` – printable cheat sheet for effects and rarity boosts.
- `chain-game/BLOCK-PROMPTS.md` – AI/marketing prompt hooks aligned with Chain Game mechanics.

## Next Steps

1. Build printable reference cards (Minor and Major tables)
2. Implement AI opponent for solo mode (`Code AI opponent`)
3. Playtest balancing (especially Legendary/Genesis boosts)

Drop future rules, playtest logs, or prototypes inside this folder to keep the Chain Game canon organized. ♾️
