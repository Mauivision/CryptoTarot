# Chain Game Testing Guide

## Overview

This guide explains how to test the Chain Game mechanics and validate that all cards have the required game properties.

## Prerequisites

1. All 78 cards must have `gameMechanics` property added
2. `data/card-meanings.js` must be syntactically valid

## Running Tests

### 1. Test Game Mechanics Validation

```bash
npm run game:test
```

This script validates:

- All cards have `gameMechanics` property
- Major Arcana have `spellUpright`, `spellReversed`, `energyCost`
- Minor Arcana have `value`, `power`, `type`
- Rarity is assigned correctly
- Suit bonuses are present for Minor Arcana
- Court effects are present for Page/Knight/Queen/King
- Ace effects are present for Aces

### 2. Test Game Balance

```bash
npm run game:balance
```

This script analyzes:

- Value and power distribution
- Suit balance (average values per suit)
- Rarity distribution
- Spell effect coverage
- Overall game balance

## Expected Results

### Rarity Distribution

- **Genesis**: 1 card (The HODLer)
- **Legendary**: 5 cards (4 Kings + The World Ecosystem)
- **Epic**: 12 cards (4 Queens + 8 late Majors)
- **Rare**: 22 cards (4 Knights + 10 mid Majors)
- **Common**: 38 cards (Aces-10s + Pages + early Majors)

### Value Distribution (Minor Arcana)

- Ace: 1
- Two-Ten: 2-10
- Page: 11
- Knight: 12
- Queen: 13
- King: 14

### Suit Bonuses

All 4 suits (Tokens, Liquidity, Security, Nodes) should have:

- `rallyBonus`
- `chainBonus`
- `battleBonus`

## Troubleshooting

### Syntax Errors

If you see syntax errors, check:

1. Quote matching in `data/card-meanings.js`
2. Missing commas after properties
3. Proper object structure

### Missing Properties

If cards are missing properties:

1. Run `npm run game:add-mechanics` to add them
2. Check that the card data structure is correct
3. Verify suit and rank are properly set for Minor Arcana

### Balance Issues

If balance tests show issues:

1. Review rarity assignments
2. Check value/power calculations
3. Verify suit bonuses are applied correctly

## Next Steps After Testing

1. **Playtest** - Test actual gameplay with the mechanics
2. **Balance Adjustments** - Adjust values/powers if needed
3. **Documentation** - Update game rules based on test results
4. **Reference Cards** - Generate printable reference cards
