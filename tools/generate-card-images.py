"""
Crypto Tarot Card Image Generator
Uses OpenAI DALL-E API to generate all 78 tarot card images
Requires: pip install openai requests
Usage: python tools/generate-card-images.py
"""

import os
import json
import time
import requests
from pathlib import Path
from typing import Dict, List

try:
    from openai import OpenAI
except ImportError:
    print("Missing openai package. Install with: pip install openai")
    exit(1)

# Configuration
API_KEY = os.getenv('OPENAI_API_KEY')
OUTPUT_DIR = Path(__file__).parent.parent / 'assets' / 'cards'
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

# Crypto Tarot Card Descriptions
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

def build_prompt(card_data: Dict, card_type: str) -> str:
    """
    Build DALL-E prompt for a card using the cyberpunk tarot style guide.
    Style: Vibrant neon colors, futuristic fonts, blockchain motifs, circuits, wallets, crypto icons.
    Card structure: Central illustration, title, suit symbols, border with blockchain patterns.
    """
    if card_type == "major":
        return f"""Create a detailed tarot card illustration in cyberpunk style for "{card_data['name']}".

STYLE: Cyberpunk tarot vibe with vibrant neon colors (greens #00f5a0 for gains, reds #ff3864 for dumps, blues #3ec0ff for chains, purples #8b5cf6 for major arcana), futuristic fonts, holographic effects, digital elements like circuits, nodes, or blockchain patterns integrated into traditional tarot elements.

CARD STRUCTURE:
- Central illustration: {card_data['symbolism']}
- Title: "{card_data['name']}" (displayed prominently at top)
- Border: Subtle blockchain link patterns, neon glow effects
- Background: Dark (#0b0f15) with neon accents
- Upright meaning: {card_data['upright']}
- Reversed meaning: {card_data['reversed']}

DESIGN REQUIREMENTS:
- Vertical orientation (portrait, 2:3 ratio)
- High resolution (at least 1024x1536 pixels)
- Mystical tarot aesthetic blended with crypto themes
- Include subtle circuit patterns, blockchain nodes, digital elements
- Color palette: neon greens (#00f5a0), blues (#3ec0ff), purples (#8b5cf6), pinks (#ff3cac), reds (#ff3864) with dark background
- Cyberpunk aesthetic with ethereal, symbolic art
- Suitable for NFT minting
- Traditional tarot layout with crypto twist
    
Format: Cyberpunk tarot card in vertical orientation, high resolution, suitable for digital display and NFT."""
    
    else:  # minor
        suit_data = CARDS["minors"][card_data["suit"]]
        suit_symbol = suit_data["symbol"]
        suit_color = suit_data["color"]
        suit_theme = suit_data["theme"]
        
        return f"""Create a detailed tarot card illustration in cyberpunk style for "{card_data['rank']} of {card_data['suit']}".

STYLE: Cyberpunk tarot vibe with vibrant neon colors ({suit_color}), futuristic fonts, holographic effects, digital elements like circuits, nodes, wallets, or crypto icons integrated into traditional tarot elements.

CARD STRUCTURE:
- Central illustration: {card_data['symbolism']}
- Title: "{card_data['rank']} of {card_data['suit']}" (displayed prominently at top)
- Suit symbol: {suit_symbol} ({suit_theme} theme)
- Border: Subtle blockchain link patterns, neon glow effects in {suit_color}
- Background: Dark (#0b0f15) with {suit_color} neon accents

DESIGN REQUIREMENTS:
- Vertical orientation (portrait, 2:3 ratio)
- High resolution (at least 1024x1536 pixels)
- Mystical tarot aesthetic blended with crypto themes
- Include subtle circuit patterns, blockchain nodes, or digital elements matching the {card_data['suit']} suit theme
- Color palette: {suit_color} neon with dark background
- Cyberpunk aesthetic with ethereal, symbolic art
- Suitable for NFT minting
- Traditional tarot layout with crypto twist

Format: Cyberpunk tarot card in vertical orientation, high resolution, suitable for digital display and NFT."""

def generate_card_image(client: OpenAI, card_data: Dict, card_type: str, output_path: Path):
    """Generate a single card image using DALL-E"""
    prompt = build_prompt(card_data, card_type)
    
    print(f"Generating: {card_data.get('name', card_data.get('rank', 'Unknown'))} of {card_data.get('suit', '')}...")
    
    try:
        response = client.images.generate(
            model="dall-e-3",
            prompt=prompt,
            size="1024x1792",  # Vertical card format (2:3.5 ratio) - high-res for NFT minting
            quality="hd",
            n=1,
        )
        
        image_url = response.data[0].url
        
        # Download the image
        img_response = requests.get(image_url)
        img_response.raise_for_status()
        
        # Save to file
        output_path.parent.mkdir(parents=True, exist_ok=True)
        with open(output_path, 'wb') as f:
            f.write(img_response.content)
        
        print(f"✓ Saved: {output_path.name}")
        return True
        
    except Exception as e:
        print(f"✗ Error generating {output_path.name}: {e}")
        return False

def main():
    if not API_KEY:
        print("ERROR: OPENAI_API_KEY environment variable not set!")
        print("Set it with: export OPENAI_API_KEY='your-key-here'")
        print("Or on Windows: $env:OPENAI_API_KEY='your-key-here'")
        return
    
    client = OpenAI(api_key=API_KEY)
    
    print(f"Output directory: {OUTPUT_DIR}")
    print(f"Generating {len(CARDS['majors'])} Major Arcana + 56 Minor Arcana = 78 cards total\n")
    
    # Generate Major Arcana
    print("=== Generating Major Arcana ===")
    for i, card in enumerate(CARDS['majors'], 1):
        output_path = OUTPUT_DIR / f"{card['id']}.png"
        if output_path.exists():
            print(f"⏭ Skipping {card['name']} (already exists)")
            continue
            
        generate_card_image(client, card, "major", output_path)
        time.sleep(1)  # Rate limiting
        print(f"Progress: {i}/{len(CARDS['majors'])} majors\n")
    
    # Generate Minor Arcana
    print("\n=== Generating Minor Arcana ===")
    total_minors = 0
    for suit_name, suit_data in CARDS['minors'].items():
        print(f"\n--- {suit_name} Suit ---")
        
        # Numbered cards
        for card_info in suit_data['numbers']:
            total_minors += 1
            card_data = {
                "rank": card_info["rank"],
                "suit": suit_name,
                "symbolism": card_info["symbolism"]
            }
            card_id = f"minor-{card_info['rank'].lower()}-of-{suit_name.lower()}"
            output_path = OUTPUT_DIR / f"{card_id}.png"
            
            if output_path.exists():
                print(f"⏭ Skipping {card_info['rank']} of {suit_name} (already exists)")
                continue
                
            generate_card_image(client, card_data, "minor", output_path)
            time.sleep(1)
        
        # Court cards
        for card_info in suit_data['courts']:
            total_minors += 1
            card_data = {
                "rank": card_info["rank"],
                "suit": suit_name,
                "role": card_info.get("role", ""),
                "symbolism": card_info["symbolism"]
            }
            card_id = f"minor-{card_info['rank'].lower()}-of-{suit_name.lower()}"
            output_path = OUTPUT_DIR / f"{card_id}.png"
            
            if output_path.exists():
                print(f"⏭ Skipping {card_info['rank']} of {suit_name} (already exists)")
                continue
                
            generate_card_image(client, card_data, "minor", output_path)
            time.sleep(1)
    
    print(f"\n✓ Generation complete! Check {OUTPUT_DIR}")
    print(f"Total cards generated: {len(CARDS['majors'])} Majors + {total_minors} Minors")

if __name__ == "__main__":
    main()

