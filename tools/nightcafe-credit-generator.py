"""
NightCafe Credit-Based Card Generator
Helps you use your NightCafe credits efficiently to generate all 78 cards
Usage: python tools/nightcafe-credit-generator.py
"""

import json
from pathlib import Path
from typing import Dict, List

# Load card data
OUTPUT_DIR = Path(__file__).parent.parent / 'assets' / 'cards'
PROMPTS_FILE = OUTPUT_DIR.parent / 'nightcafe-prompts.json'
BATCH_FILE = OUTPUT_DIR.parent / 'nightcafe-batch-prompts.txt'
PROGRESS_FILE = OUTPUT_DIR.parent / 'nightcafe-progress.json'

# Import from the existing prompt generator
import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).parent))

# Try to import, fallback to loading from JSON if import fails
try:
    from generate_nightcafe_prompts import CARDS, build_nightcafe_prompt
except ImportError:
    # Fallback: Load from generated JSON file
    if PROMPTS_FILE.exists():
        with open(PROMPTS_FILE, 'r') as f:
            prompts_data = json.load(f)
        # Convert to CARDS format
        CARDS = {"majors": [], "minors": {}}
        for item in prompts_data:
            if item['type'] == 'major':
                CARDS["majors"].append({
                    "name": item['name'],
                    "id": item['id'],
                    "symbolism": item.get('symbolism', '')
                })
        
        def build_nightcafe_prompt(card_data, card_type):
            # Find prompt from JSON
            for item in prompts_data:
                if item['id'] == card_data.get('id') or item['name'] == card_data.get('name'):
                    return item['prompt']
            return f"{card_data.get('name', 'Card')} tarot card, cyberpunk style"
    else:
        print("Error: Could not load card data. Please run generate-nightcafe-prompts.py first.")
        sys.exit(1)

def load_progress():
    """Load generation progress"""
    if PROGRESS_FILE.exists():
        with open(PROGRESS_FILE, 'r') as f:
            return json.load(f)
    return {"completed": [], "pending": []}

def save_progress(progress):
    """Save generation progress"""
    with open(PROGRESS_FILE, 'w') as f:
        json.dump(progress, f, indent=2)

def generate_all_cards():
    """Generate all card prompts"""
    all_cards = []
    
    # Major Arcana
    for card in CARDS["majors"]:
        prompt = build_nightcafe_prompt(card, "major")
        all_cards.append({
            "id": card["id"],
            "name": card["name"],
            "type": "major",
            "prompt": prompt,
            "filename": f"{card['id']}.png",
            "credits_needed": 1  # Estimate: 1 credit per image
        })
    
    # Minor Arcana
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
            all_cards.append({
                "id": card_id,
                "name": f"{card_info['rank']} of {suit_name}",
                "type": "minor",
                "suit": suit_name,
                "prompt": prompt,
                "filename": f"{card_id}.png",
                "credits_needed": 1
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
            all_cards.append({
                "id": card_id,
                "name": f"{card_info['rank']} of {suit_name}",
                "type": "minor",
                "suit": suit_name,
                "prompt": prompt,
                "filename": f"{card_id}.png",
                "credits_needed": 1
            })
    
    return all_cards

def create_nightcafe_workflow():
    """Create workflow guide for using NightCafe credits"""
    progress = load_progress()
    all_cards = generate_all_cards()
    
    # Check which cards are already done
    completed_ids = set(progress.get("completed", []))
    pending_cards = [c for c in all_cards if c["id"] not in completed_ids]
    
    total_credits = sum(c["credits_needed"] for c in all_cards)
    remaining_credits = sum(c["credits_needed"] for c in pending_cards)
    
    print("=" * 70)
    print("NIGHTCAFE CREDIT GENERATOR - Crypto Tarot Cards")
    print("=" * 70)
    print()
    print(f"Total Cards: {len(all_cards)}")
    print(f"Completed: {len(completed_ids)}")
    print(f"Remaining: {len(pending_cards)}")
    print()
    print(f"Total Credits Needed: ~{total_credits}")
    print(f"Remaining Credits: ~{remaining_credits}")
    print()
    
    # Create workflow HTML file for easy access
    workflow_html = Path(__file__).parent.parent / 'nightcafe-workflow.html'
    
    html_content = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NightCafe Card Generator - Workflow</title>
    <style>
        body {{
            font-family: system-ui, sans-serif;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            background: #1a0f2e;
            color: #f5e6ff;
        }}
        .card {{
            background: rgba(45,27,78,.6);
            border: 2px solid rgba(212,175,55,.3);
            border-radius: 12px;
            padding: 20px;
            margin: 15px 0;
        }}
        .card.completed {{
            opacity: 0.5;
            border-color: rgba(212,175,55,.1);
        }}
        .card-number {{
            font-size: 12px;
            color: #c9a8e8;
            margin-bottom: 8px;
        }}
        .card-name {{
            font-size: 18px;
            color: #d4af37;
            font-weight: bold;
            margin-bottom: 10px;
        }}
        .prompt {{
            background: rgba(26,15,46,.8);
            padding: 12px;
            border-radius: 8px;
            border-left: 3px solid #d4af37;
            margin: 10px 0;
            font-size: 14px;
            line-height: 1.6;
        }}
        .copy-btn {{
            background: linear-gradient(135deg, #d4af37, #f4d03f);
            color: #1a0f2e;
            border: none;
            padding: 8px 16px;
            border-radius: 8px;
            cursor: pointer;
            font-weight: bold;
            margin-top: 8px;
        }}
        .copy-btn:hover {{
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(212,175,55,.4);
        }}
        .stats {{
            background: rgba(155,89,182,.2);
            padding: 20px;
            border-radius: 12px;
            margin-bottom: 30px;
            text-align: center;
        }}
        .instructions {{
            background: rgba(212,175,55,.1);
            padding: 20px;
            border-radius: 12px;
            margin-bottom: 30px;
            border: 2px solid rgba(212,175,55,.3);
        }}
    </style>
</head>
<body>
    <h1>🔮 NightCafe Card Generator Workflow</h1>
    
    <div class="instructions">
        <h2>📋 Instructions</h2>
        <ol>
            <li>Open <a href="https://creator.nightcafe.studio" target="_blank" style="color: #d4af37;">NightCafe Creator</a> in a new tab</li>
            <li>For each card below, click "Copy Prompt"</li>
            <li>Paste into NightCafe Creator</li>
            <li>Settings: <strong>DALL-E 3</strong> or <strong>Stable Diffusion XL</strong>, <strong>2:3 ratio</strong>, <strong>High quality</strong></li>
            <li>Click "Create" (uses 1 credit per image)</li>
            <li>Download the image and save as the filename shown</li>
            <li>Mark card as completed when done</li>
        </ol>
        <p><strong>Total Credits Needed:</strong> ~{remaining_credits} credits</p>
        <p><strong>Remaining Cards:</strong> {len(pending_cards)}</p>
    </div>
    
    <div class="stats">
        <h2>Progress: {len(completed_ids)}/{len(all_cards)} cards completed</h2>
    </div>
    
    <h2>Cards to Generate ({len(pending_cards)} remaining)</h2>
"""
    
    for i, card in enumerate(pending_cards, 1):
        is_completed = card["id"] in completed_ids
        card_class = "card completed" if is_completed else "card"
        
        html_content += f"""
    <div class="{card_class}" id="card-{card['id']}">
        <div class="card-number">Card {i + len(completed_ids)}/{len(all_cards)} - {card['type'].upper()}</div>
        <div class="card-name">{card['name']}</div>
        <div class="prompt" id="prompt-{card['id']}">{card['prompt']}</div>
        <button class="copy-btn" onclick="copyPrompt('{card['id']}')">📋 Copy Prompt</button>
        <div style="margin-top: 8px; font-size: 12px; color: #c9a8e8;">
            Save as: <code>{card['filename']}</code>
        </div>
        <button class="copy-btn" onclick="markComplete('{card['id']}')" style="background: rgba(155,89,182,.6); margin-left: 8px;">
            ✓ Mark Complete
        </button>
    </div>
"""
    
    html_content += """
    <script>
        function copyPrompt(cardId) {
            const promptEl = document.getElementById('prompt-' + cardId);
            const text = promptEl.textContent;
            navigator.clipboard.writeText(text).then(() => {
                alert('Prompt copied to clipboard! Paste it into NightCafe Creator.');
            });
        }
        
        function markComplete(cardId) {
            const cardEl = document.getElementById('card-' + cardId);
            cardEl.classList.add('completed');
            // In a real implementation, this would save to a file
            alert('Card marked as complete! (Note: This is a demo - progress not saved)');
        }
    </script>
</body>
</html>
"""
    
    with open(workflow_html, 'w', encoding='utf-8') as f:
        f.write(html_content)
    
    print(f"✓ Created workflow file: {workflow_html}")
    print()
    print("=" * 70)
    print("HOW TO USE YOUR NIGHTCafe CREDITS:")
    print("=" * 70)
    print()
    print("1. Open the workflow file:")
    print(f"   {workflow_html}")
    print()
    print("2. Open NightCafe Creator in another tab:")
    print("   https://creator.nightcafe.studio")
    print()
    print("3. For each card:")
    print("   - Click 'Copy Prompt' in the workflow file")
    print("   - Paste into NightCafe Creator")
    print("   - Settings: DALL-E 3 or SDXL, 2:3 ratio, High quality")
    print("   - Click 'Create' (uses 1 credit)")
    print("   - Download and save as the filename shown")
    print()
    print("4. Save images to:")
    print(f"   {OUTPUT_DIR}")
    print()
    print(f"5. You need ~{remaining_credits} credits to complete all {len(pending_cards)} remaining cards")
    print()
    print("=" * 70)

if __name__ == "__main__":
    create_nightcafe_workflow()

