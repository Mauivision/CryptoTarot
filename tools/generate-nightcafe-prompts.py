"""
Crypto Tarot Card Image Generator for NightCafe
Generates optimized prompts for NightCafe Creator
Usage: python tools/generate-nightcafe-prompts.py
Then copy prompts into NightCafe Creator
"""

import json
from pathlib import Path
from typing import Dict

# Load card data from the main generator
OUTPUT_DIR = Path(__file__).parent.parent / 'assets' / 'cards'
PROMPTS_FILE = OUTPUT_DIR.parent / 'nightcafe-prompts.json'
BATCH_FILE = OUTPUT_DIR.parent / 'nightcafe-batch-prompts.txt'

# Crypto Tarot Card Descriptions (same as main generator)
CARDS = {
    "majors": [
        {
            "name": "The HODLer",
            "id": "major-the-hodler",
            "symbolism": "A novice trader at a blockchain cliff edge, wallet in hand, starry crypto sky with floating tokens, meme coin dog nipping heels. Represents patience, long-term vision, unshakeable faith in bull runs.",
            "upright": "patience, diamond hands, long-term vision",
            "reversed": "stubbornness, missed sells, bag-holding"
        },
        {
            "name": "The Miner",
            "id": "major-the-miner",
            "symbolism": "A figure with a pickaxe mining crypto blocks from a glowing blockchain mountain. Energy consumption and computational power visible. Represents creation from effort, hashing out value.",
            "upright": "creation from effort, resource discovery, mining value",
            "reversed": "energy waste, outdated rigs, diminishing returns"
        },
        {
            "name": "The Oracle",
            "id": "major-the-oracle",
            "symbolism": "A mystical figure behind a veil of blockchain data streams, hidden chains visible through fog. Crystal ball shows code snippets. Represents intuition, hidden chains, blockchain whispers.",
            "upright": "intuition, hidden chains, blockchain whispers",
            "reversed": "scams veiled as gems, ignored red flags"
        },
        {
            "name": "The Empress Node",
            "id": "major-the-empress-node",
            "symbolism": "A nurturing figure in a garden of yield farms, DeFi tokens growing like flowers. Abundance and ecosystem growth. Represents abundance, yield farming, nurturing ecosystems.",
            "upright": "abundance, yield farming, nurturing ecosystems",
            "reversed": "overgrowth, rug pulls in fertile grounds"
        },
        {
            "name": "The Emperor Chain",
            "id": "major-the-emperor-chain",
            "symbolism": "A powerful figure on a blockchain throne, governance tokens as crown. Secure protocols and structure. Represents structure, governance, secure protocols.",
            "upright": "structure, governance, secure protocols",
            "reversed": "centralization creeps, tyrannical fees"
        },
        {
            "name": "The Hierophant Whale",
            "id": "major-the-hierophant-whale",
            "symbolism": "A massive whale figure teaching smaller fish, DAO governance symbols. Community wisdom. Represents mentorship, community wisdom, DAO guidance.",
            "upright": "mentorship, community wisdom, DAO guidance",
            "reversed": "cultish hype, misleading influencers"
        },
        {
            "name": "The Lovers Fork",
            "id": "major-the-lovers-fork",
            "symbolism": "Two figures at a fork in the blockchain, choosing between chains. Partnerships and mergers. Represents partnerships, mergers, symbiotic tokens.",
            "upright": "partnerships, mergers, symbiotic tokens",
            "reversed": "splits, hard forks, incompatible chains"
        },
        {
            "name": "The Chariot Pump",
            "id": "major-the-chariot-pump",
            "symbolism": "A figure riding a rocket ship through a moonshot, price charts ascending. Momentum and rapid gains. Represents momentum, rapid gains, moonshot drives.",
            "upright": "momentum, rapid gains, moonshot drives",
            "reversed": "crashes, overhyping, loss of control"
        },
        {
            "name": "Strength HODL",
            "id": "major-strength-hodl",
            "symbolism": "A figure taming a bear with diamond hands, inner fortitude. Resilience. Represents resilience, taming bears, inner fortitude.",
            "upright": "resilience, taming bears, inner fortitude",
            "reversed": "weak hands, panic sells, market fears"
        },
        {
            "name": "The Hermit Dev",
            "id": "major-the-hermit-dev",
            "symbolism": "A solitary figure coding in a cave, blockchain code glowing. Deep research and audits. Represents solitude coding, deep research, enlightened audits.",
            "upright": "solitude coding, deep research, enlightened audits",
            "reversed": "isolation, unshared knowledge, hermit crabs"
        },
        {
            "name": "Wheel of Fortune Cycle",
            "id": "major-wheel-of-fortune-cycle",
            "symbolism": "A spinning wheel showing bull/bear cycles, halving events. Market turns. Represents market turns, bull/bear shifts, lucky halvings.",
            "upright": "market turns, bull/bear shifts, lucky halvings",
            "reversed": "downturns, black swans, cycle traps"
        },
        {
            "name": "Justice Ledger",
            "id": "major-justice-ledger",
            "symbolism": "A figure with scales balanced by blockchain transactions, transparent records. Fair play. Represents fair play, transparent txns, balanced scales.",
            "upright": "fair play, transparent txns, balanced scales",
            "reversed": "hacks, imbalances, regulatory hammers"
        },
        {
            "name": "The Hanged Man Flip",
            "id": "major-the-hanged-man-flip",
            "symbolism": "A figure hanging upside down, seeing blockchain from new perspective. Perspective shift. Represents perspective shift, flipping narratives, enlightened waits.",
            "upright": "perspective shift, flipping narratives, enlightened waits",
            "reversed": "stagnation, upside-down trades, missed pivots"
        },
        {
            "name": "Death Rug",
            "id": "major-death-rug",
            "symbolism": "A phoenix rising from dead coins, rug pull scene transforming. Rebirth. Represents transformation, ending cycles, phoenix projects.",
            "upright": "transformation, ending cycles, phoenix projects",
            "reversed": "total wipes, irreversible losses, ghost chains"
        },
        {
            "name": "Temperance Mix",
            "id": "major-temperance-mix",
            "symbolism": "A figure mixing tokens in a balanced portfolio, DeFi protocols in harmony. Balance. Represents balance, diversified portfolios, harmonious blends.",
            "upright": "balance, diversified portfolios, harmonious blends",
            "reversed": "imbalances, overleveraging, toxic mixes"
        },
        {
            "name": "The Devil Scam",
            "id": "major-the-devil-scam",
            "symbolism": "A figure chained by FOMO, seductive rug pulls and scams. Addictions. Represents addictions, FOMO chains, material traps.",
            "upright": "addictions, FOMO chains, material traps",
            "reversed": "breaking free, escaping honeypots"
        },
        {
            "name": "The Tower Hack",
            "id": "major-the-tower-hack",
            "symbolism": "A blockchain tower struck by lightning, exploits visible. Sudden disruptions. Represents sudden disruptions, exploits, rebuilding stronger.",
            "upright": "sudden disruptions, exploits, rebuilding stronger",
            "reversed": "catastrophic falls, unpatched vulnerabilities"
        },
        {
            "name": "The Star Airdrop",
            "id": "major-the-star-airdrop",
            "symbolism": "A figure beneath a starry sky, tokens falling like stars. Hope and rewards. Represents hope, free tokens, celestial guidance.",
            "upright": "hope, free tokens, celestial guidance",
            "reversed": "empty promises, diluted supplies"
        },
        {
            "name": "The Moon Illusion",
            "id": "major-the-moon-illusion",
            "symbolism": "A figure on a moonlit path, FUD shadows and illusions. Deceptions. Represents deceptions, shadow markets, intuitive doubts.",
            "upright": "deceptions, shadow markets, intuitive doubts",
            "reversed": "clarity emerges, moonlit truths"
        },
        {
            "name": "The Sun Bull",
            "id": "major-the-sun-bull",
            "symbolism": "A bull figure in golden sunlight, prosperous crypto market. Prosperity. Represents prosperity, golden runs, enlightened gains.",
            "upright": "prosperity, golden runs, enlightened gains",
            "reversed": "overexposure, burns from hype"
        },
        {
            "name": "Judgment Halving",
            "id": "major-judgment-halving",
            "symbolism": "A figure awakening to halving event, scarcity and judgment. Reckonings. Represents reckonings, scarcity events, awakenings.",
            "upright": "reckonings, scarcity events, awakenings",
            "reversed": "delays, unfulfilled prophecies"
        },
        {
            "name": "The World Ecosystem",
            "id": "major-the-world-ecosystem",
            "symbolism": "A globe of interconnected blockchains, Web3 adoption worldwide. Completion. Represents completion, interconnected webs, global adoption.",
            "upright": "completion, interconnected webs, global adoption",
            "reversed": "fragmentation, siloed chains"
        }
    ],
    "minors": {
        "Tokens": {
            "symbol": "Coin/Wealth icon",
            "color": "Green/Teal neon",
            "theme": "Material wealth, assets, investments",
            "numbers": [
                {"rank": "Ace", "symbolism": "A new coin emerging from blockchain, seed investment opportunity"},
                {"rank": "Two", "symbolism": "Two tokens balancing on scales, portfolio diversification"},
                {"rank": "Three", "symbolism": "Three developers collaborating on a mint, team project"},
                {"rank": "Four", "symbolism": "Four tokens secured in a vault, stable holdings"},
                {"rank": "Five", "symbolism": "Five tokens scattered in bear market, hardship"},
                {"rank": "Six", "symbolism": "Six tokens being distributed, generous airdrops"},
                {"rank": "Seven", "symbolism": "Seven tokens growing on a farm, long-term yield"},
                {"rank": "Eight", "symbolism": "Eight tokens being mined, skilled craft"},
                {"rank": "Nine", "symbolism": "Nine tokens in luxury display, wealth achieved"},
                {"rank": "Ten", "symbolism": "Ten tokens passed down, legacy portfolio"}
            ],
            "courts": [
                {"rank": "Page", "role": "Ape", "symbolism": "A curious newbie holding first token, learning"},
                {"rank": "Knight", "role": "Trader", "symbolism": "A steady trader on a crypto journey, methodical"},
                {"rank": "Queen", "role": "Yield Farmer", "symbolism": "A nurturing figure managing DeFi farms, sustainable yields"},
                {"rank": "King", "role": "Whale", "symbolism": "A master whale holding massive portfolio, market leader"}
            ]
        },
        "Liquidity": {
            "symbol": "Flowing pool/Water icon",
            "color": "Blue/Purple neon",
            "theme": "Emotions, flows, community",
            "numbers": [
                {"rank": "Ace", "symbolism": "Fresh liquidity pool opening, new opportunities"},
                {"rank": "Two", "symbolism": "Two pools flowing together, partnership"},
                {"rank": "Three", "symbolism": "Three celebrations, community pumps"},
                {"rank": "Four", "symbolism": "Four calm pools, emotional stability"},
                {"rank": "Five", "symbolism": "Five pools drained, loss grief"},
                {"rank": "Six", "symbolism": "Six nostalgic pools, past memories"},
                {"rank": "Seven", "symbolism": "Seven dreamy pools, visions"},
                {"rank": "Eight", "symbolism": "Eight pools flowing away, exit"},
                {"rank": "Nine", "symbolism": "Nine wish pools, fulfillment"},
                {"rank": "Ten", "symbolism": "Ten harmonious pools, community bonds"}
            ],
            "courts": [
                {"rank": "Page", "role": "Shiller", "symbolism": "An enthusiastic shiller spreading hype"},
                {"rank": "Knight", "role": "Pumper", "symbolism": "A dynamic pumper charging into trends"},
                {"rank": "Queen", "role": "Influencer", "symbolism": "An intuitive influencer guiding community"},
                {"rank": "King", "role": "DAO Leader", "symbolism": "A wise DAO leader governing fairly"}
            ]
        },
        "Security": {
            "symbol": "Lock/Shield icon",
            "color": "Red/Pink neon",
            "theme": "Intellect, challenges, protection",
            "numbers": [
                {"rank": "Ace", "symbolism": "A sharp key cutting through, new protocol insight"},
                {"rank": "Two", "symbolism": "Two keys dueling, choices to make"},
                {"rank": "Three", "symbolism": "Three broken keys, heartbreak hacks"},
                {"rank": "Four", "symbolism": "Four keys at rest, mental recovery"},
                {"rank": "Five", "symbolism": "Five keys defeated, losses"},
                {"rank": "Six", "symbolism": "Six keys retreating, victory"},
                {"rank": "Seven", "symbolism": "Seven hidden keys, stealth strategies"},
                {"rank": "Eight", "symbolism": "Eight keys escaping, quick exit"},
                {"rank": "Nine", "symbolism": "Nine vigilant keys, anxious watch"},
                {"rank": "Ten", "symbolism": "Ten burdened keys, overwhelming"}
            ],
            "courts": [
                {"rank": "Page", "role": "Hacker", "symbolism": "A curious hacker exploring, ethical"},
                {"rank": "Knight", "role": "Auditor", "symbolism": "A bold auditor charging defenses"},
                {"rank": "Queen", "role": "Regulator", "symbolism": "A discerning regulator balancing laws"},
                {"rank": "King", "role": "Security Chief", "symbolism": "A master security chief leading protection"}
            ]
        },
        "Nodes": {
            "symbol": "Fire/Circuit icon",
            "color": "Pink/Orange neon",
            "theme": "Creativity, action, innovation",
            "numbers": [
                {"rank": "Ace", "symbolism": "A spark of idea igniting, new project"},
                {"rank": "Two", "symbolism": "Two visions planning, roadmap"},
                {"rank": "Three", "symbolism": "Three creators collaborating, team building"},
                {"rank": "Four", "symbolism": "Four celebrations, launch party"},
                {"rank": "Five", "symbolism": "Five sparks competing, rivalry"},
                {"rank": "Six", "symbolism": "Six triumphs parading, success"},
                {"rank": "Seven", "symbolism": "Seven defending, holding innovation"},
                {"rank": "Eight", "symbolism": "Eight swift developments, acceleration"},
                {"rank": "Nine", "symbolism": "Nine enduring passions, persistence"},
                {"rank": "Ten", "symbolism": "Ten burdens of growth, scaling"}
            ],
            "courts": [
                {"rank": "Page", "role": "Innovator", "symbolism": "A budding innovator experimenting"},
                {"rank": "Knight", "role": "Founder", "symbolism": "An adventurous founder questing"},
                {"rank": "Queen", "role": "Visionary", "symbolism": "An inspiring visionary nurturing"},
                {"rank": "King", "role": "Satoshi", "symbolism": "The legendary Satoshi pioneering realms"}
            ]
        }
    }
}

RANK_NUMBER_MAP = {
    "Ace": 1,
    "Two": 2,
    "Three": 3,
    "Four": 4,
    "Five": 5,
    "Six": 6,
    "Seven": 7,
    "Eight": 8,
    "Nine": 9,
    "Ten": 10,
    "Page": 11,
    "Knight": 12,
    "Queen": 13,
    "King": 14,
}

NUMEROLOGY_ASSOCIATIONS = {
    0: {
        "label": "Pluto",
        "description": "transformation, rebirth, and the unknown; the Crypto Pioneer leaping into uncharted digital realms",
    },
    1: {
        "label": "Sun",
        "description": "vitality, new beginnings, and radiant core energy; the spark for fresh protocols and token launches",
    },
    2: {
        "label": "Moon",
        "description": "duality, intuition, and emotional flow; balanced decisions and liquidity partnerships guided by instinct",
    },
    3: {
        "label": "Mercury",
        "description": "communication, intellect, and collaboration; community pulses, dev syncs, and network broadcasts",
    },
    4: {
        "label": "Uranus",
        "description": "structure, innovation, and sudden change; resilient frameworks with disruptive breakthrough potential",
    },
    5: {
        "label": "Mars",
        "description": "conflict, action, and challenges; rivalries, audits under fire, and bear-market stress tests",
    },
    6: {
        "label": "Venus",
        "description": "harmony, balance, and relationships; generosity, nostalgic bonds, and rewarding ecosystems",
    },
    7: {
        "label": "Neptune",
        "description": "illusion, spirituality, and dreams; visionary strategies, stealth modes, and meditative planning",
    },
    8: {
        "label": "Saturn",
        "description": "discipline, restriction, and achievement; skilled craftsmanship, mining pressure, and earned mastery",
    },
    9: {
        "label": "Jupiter",
        "description": "expansion, wisdom, and fulfillment; persistent growth, wealth realized, and elevated perspective",
    },
    10: {
        "label": "Earth",
        "description": "completion, manifestation, and cycles; mature networks, legacy portfolios, and grounded scaling",
    },
    11: {
        "label": "Air/Earth (Mutable)",
        "description": "youthful curiosity and exploration; budding innovators bridging ideas into experimental action",
    },
    12: {
        "label": "Fire (Cardinal)",
        "description": "dynamic action and questing; adventurous founders charging forward to ignite adoption",
    },
    13: {
        "label": "Water (Fixed)",
        "description": "receptive intuition and nurturing balance; inspiring visionaries guiding communities with care",
    },
    14: {
        "label": "Air/Fire (Sovereign)",
        "description": "authoritative mastery blending intellect and will; legendary architects stewarding whole ecosystems",
    },
}


def get_numerology_details(card_data: Dict, card_type: str):
    """Return numerology number and association metadata for a card."""
    if card_type == "major":
        number = card_data.get("number")
    else:
        number = RANK_NUMBER_MAP.get(card_data["rank"])

    return number, NUMEROLOGY_ASSOCIATIONS.get(number)

def build_nightcafe_prompt(card_data: Dict, card_type: str) -> str:
    """
    Build optimized prompt for NightCafe Creator
    NightCafe works best with detailed, artistic descriptions
    """
    # NightCafe style keywords that work well
    style_base = "cyberpunk tarot card, neon art, digital painting, mystical, ethereal, holographic effects, blockchain aesthetic, vertical portrait, high detail, 4k, NFT art style"
    
    number, association = get_numerology_details(card_data, card_type)
    numerology_text = ""
    if association:
        numerology_text = f", numerology {number} aligned with {association['label']} ({association['description']})"

    if card_type == "major":
        return f"""{card_data['symbolism']}, {card_data['name']} tarot card, {style_base}, vibrant neon colors (greens #00f5a0, purples #8b5cf6), dark background #0b0f15, blockchain patterns in border, futuristic design, traditional tarot layout with crypto twist, vertical orientation 2:3 ratio{numerology_text}"""
    
    else:  # minor
        suit_data = CARDS["minors"][card_data["suit"]]
        suit_color = suit_data["color"]
        
        return f"""{card_data['symbolism']}, {card_data['rank']} of {card_data['suit']} tarot card, {style_base}, {suit_color} neon colors, dark background #0b0f15, {suit_data['symbol']} symbols, blockchain patterns in border, futuristic design, traditional tarot layout with crypto twist, vertical orientation 2:3 ratio{numerology_text}"""

def generate_all_prompts():
    """Generate all prompts for NightCafe"""
    all_prompts = []
    
    # Major Arcana
    print("Generating prompts for Major Arcana...")
    for number, card in enumerate(CARDS["majors"]):
        card_with_number = {**card, "number": number}
        prompt = build_nightcafe_prompt(card_with_number, "major")
        _, association = get_numerology_details(card_with_number, "major")
        all_prompts.append({
            "id": card["id"],
            "name": card["name"],
            "type": "major",
            "prompt": prompt,
            "filename": f"{card['id']}.png",
            "numerology_number": number,
            "numerology_association": association,
        })
    
    # Minor Arcana
    print("Generating prompts for Minor Arcana...")
    for suit_name, suit_data in CARDS["minors"].items():
        # Numbered cards
        for card_info in suit_data['numbers']:
            card_data = {
                "rank": card_info["rank"],
                "suit": suit_name,
                "symbolism": card_info["symbolism"]
            }
            card_id = f"minor-{card_info['rank'].lower()}-of-{suit_name.lower()}"
            prompt = build_nightcafe_prompt(card_data, "minor")
            number, association = get_numerology_details(card_data, "minor")
            all_prompts.append({
                "id": card_id,
                "name": f"{card_info['rank']} of {suit_name}",
                "type": "minor",
                "suit": suit_name,
                "prompt": prompt,
                "filename": f"{card_id}.png",
                "numerology_number": number,
                "numerology_association": association,
            })
        
        # Court cards
        for card_info in suit_data['courts']:
            card_data = {
                "rank": card_info["rank"],
                "suit": suit_name,
                "symbolism": card_info["symbolism"]
            }
            card_id = f"minor-{card_info['rank'].lower()}-of-{suit_name.lower()}"
            prompt = build_nightcafe_prompt(card_data, "minor")
            number, association = get_numerology_details(card_data, "minor")
            all_prompts.append({
                "id": card_id,
                "name": f"{card_info['rank']} of {suit_name}",
                "type": "minor",
                "suit": suit_name,
                "prompt": prompt,
                "filename": f"{card_id}.png",
                "numerology_number": number,
                "numerology_association": association,
            })
    
    return all_prompts

def main():
    print("=" * 60)
    print("NightCafe Prompt Generator for Crypto Tarot")
    print("=" * 60)
    print()
    
    prompts = generate_all_prompts()
    
    # Save as JSON for programmatic use
    with open(PROMPTS_FILE, 'w', encoding='utf-8') as f:
        json.dump(prompts, f, indent=2, ensure_ascii=False)
    print(f"Saved {len(prompts)} prompts to: {PROMPTS_FILE}")
    
    # Save as text file for easy copy-paste
    with open(BATCH_FILE, 'w', encoding='utf-8') as f:
        f.write("=" * 60 + "\n")
        f.write("NIGHTCAFE PROMPTS FOR CRYPTO TAROT DECK\n")
        f.write("=" * 60 + "\n\n")
        f.write("Copy each prompt below into NightCafe Creator\n")
        f.write("Recommended settings: DALL-E 3 or Stable Diffusion XL\n")
        f.write("Aspect Ratio: 2:3 (portrait)\n")
        f.write("Quality: High\n\n")
        f.write("=" * 60 + "\n\n")
        
        for i, item in enumerate(prompts, 1):
            f.write(f"\n--- Card {i}/78: {item['name']} ---\n")
            f.write(f"Filename: {item['filename']}\n")
            f.write(f"Prompt:\n{item['prompt']}\n")
            f.write("-" * 60 + "\n")
    
    print(f"Saved batch file to: {BATCH_FILE}")
    print()
    print("=" * 60)
    print("NEXT STEPS:")
    print("=" * 60)
    print("1. Open NightCafe Creator (https://creator.nightcafe.studio)")
    print("2. Open the batch file:", BATCH_FILE)
    print("3. Copy each prompt and paste into NightCafe")
    print("4. Use settings: DALL-E 3 or SDXL, 2:3 ratio, High quality")
    print("5. Download images and save to: assets/cards/")
    print("6. Name files exactly as shown in the batch file")
    print()
    print(f"Total cards: {len(prompts)}")
    print(f"  - Major Arcana: {len([p for p in prompts if p['type'] == 'major'])}")
    print(f"  - Minor Arcana: {len([p for p in prompts if p['type'] == 'minor'])}")
    print()

if __name__ == "__main__":
    main()

