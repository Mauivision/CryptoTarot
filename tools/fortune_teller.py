import json
import os
import random
import sys
import tempfile
from pathlib import Path

try:
    from elevenlabs import ElevenLabs
except ImportError:
    print("Missing dependency: elevenlabs. Run: pip install -r requirements.txt", file=sys.stderr)
    sys.exit(1)

try:
    import pygame
except ImportError:
    print("Missing dependency: pygame. Run: pip install -r requirements.txt", file=sys.stderr)
    sys.exit(1)


PROJECT_ROOT = Path(__file__).resolve().parents[1]
DECK_JSON_PATH = PROJECT_ROOT / "data" / "deck.json"


FALLBACK_DECK = [
    {"name": "The HODLer", "upright": "Patience and long-term vision in bull runs.", "reversed": "Stubborn bag-holding."},
    {"name": "The Miner", "upright": "Creation from effort in hashing value.", "reversed": "Energy waste on outdated rigs."},
    {"name": "The Oracle", "upright": "Intuition on blockchain whispers.", "reversed": "Ignored red flags in scams."},
    {"name": "The Empress Node", "upright": "Abundance and nurturing ecosystems.", "reversed": "Overgrowth and rug pulls.",},
    {"name": "The Devil Scam", "upright": "Addictions and material traps.", "reversed": "Breaking free from honeypots."},
    {"name": "The Tower Hack", "upright": "Sudden disruptions and rebuilding stronger.", "reversed": "Catastrophic falls, unpatched vulns."},
    {"name": "The Star Airdrop", "upright": "Hope and celestial guidance.", "reversed": "Empty promises, diluted supplies."},
    {"name": "Ace of Tokens", "upright": "New coin investments.", "reversed": "Fake launches."},
    {"name": "Two of Tokens", "upright": "Balancing bags.", "reversed": "Indecision."},
    {"name": "Queen of Liquidity (Influencer)", "upright": "Intuitive influencer.", "reversed": "Manipulative narratives."},
]


def load_full_deck_if_available():
    if not DECK_JSON_PATH.exists():
        return None
    try:
        data = json.loads(DECK_JSON_PATH.read_text(encoding="utf-8"))
    except Exception as e:
        print(f"Failed to read deck.json: {e}", file=sys.stderr)
        return None

    cards = []
    # Majors
    for m in data.get("majors", []):
        cards.append({
            "name": m.get("title", ""),
            "upright": m.get("upright", ""),
            "reversed": m.get("reversed", ""),
        })
    # Minors: iterate suits
    for suit_name, suit_data in (data.get("minors", {}) or {}).items():
        for entry in suit_data.get("numbers", []):
            cards.append({
                "name": entry.get("title", ""),
                "upright": entry.get("upright", ""),
                "reversed": entry.get("reversed", ""),
            })
        for entry in suit_data.get("courts", []):
            cards.append({
                "name": entry.get("title", ""),
                "upright": entry.get("upright", ""),
                "reversed": entry.get("reversed", ""),
            })

    return [c for c in cards if c.get("name") and c.get("upright") and c.get("reversed")]


def pick_three_cards(deck):
    chosen = random.sample(deck, 3)
    readings = []
    for card in chosen:
        orientation = random.choice(["upright", "reversed"])
        readings.append({
            "name": card["name"],
            "orientation": orientation,
            "meaning": card[orientation],
        })
    return readings


def build_fortune_text(readings):
    """Build a rich, detailed fortune reading with mystical language"""
    past, present, future = readings
    
    # Mystical openings
    openings = [
        "Welcome, seeker of digital destinies... The cards have chosen to reveal their wisdom to you.",
        "Ah, traveler of the blockchain realm... The oracle has heard your question and the cards respond.",
        "In this sacred moment, the cards align... Their message flows from the digital ether to your heart.",
        "The mystical deck awakens... Three cards emerge, each holding a piece of your story.",
        "Sit in the glow of the fortune teller's palace... The cards sense your energy and prepare to speak."
    ]
    opening = random.choice(openings)
    
    # Position-specific interpretations
    position_contexts = {
        "past": {
            "upright": "This card from your past reveals the foundation that brought you to this moment. It shows the experiences, decisions, or energies that shaped your crypto journey. Like blocks in a blockchain, your past experiences are immutable—they cannot be changed, but they inform your present wisdom.",
            "reversed": "This reversed card in your past suggests challenges or lessons that weren't fully learned. It represents obstacles, missed opportunities, or paths that didn't serve you—but remember, the past teaches even through difficulty. What you learned (or didn't learn) from this experience shapes your present awareness."
        },
        "present": {
            "upright": "This card illuminates your current situation—the energy actively surrounding you right now. It's your anchor point, showing where you stand in this moment of your journey. This energy is available to you now—embrace it, work with it, and let it guide your decisions.",
            "reversed": "This reversed card in your present indicates internal resistance or external obstacles. Something is blocking the natural flow of this energy. The card asks: what needs to be released or transformed? The reversed card is not a curse—it's an invitation to look deeper and make conscious choices."
        },
        "future": {
            "upright": "This card points toward what's coming—a potential path, a direction the energy is flowing. It's not set in stone, but shows where you're heading if current patterns continue. Like a smart contract, the future executes based on present conditions—but you have the power to change those conditions.",
            "reversed": "This reversed card in your future suggests a warning or need for change. If you continue without adjustment, challenges may arise. But remember: the future is not written in stone—it's written in your choices. This is not a prediction of doom—it's a gentle warning to examine your direction."
        }
    }
    
    past_context = position_contexts["past"][past['orientation'].lower()]
    present_context = position_contexts["present"][present['orientation'].lower()]
    future_context = position_contexts["future"][future['orientation'].lower()]
    
    # Build the reading
    reading = f"{opening}\n\n"
    reading += f"🔮 YOUR PAST: {past['name']} ({past['orientation']})\n"
    reading += f"{past_context}\n"
    reading += f"The card's message: {past['meaning']}\n\n"
    
    reading += f"🔮 YOUR PRESENT: {present['name']} ({present['orientation']})\n"
    reading += f"{present_context}\n"
    reading += f"The card's message: {present['meaning']}\n\n"
    
    reading += f"🔮 YOUR FUTURE: {future['name']} ({future['orientation']})\n"
    reading += f"{future_context}\n"
    reading += f"The card's message: {future['meaning']}\n\n"
    
    # Synthesis
    orientations = [past['orientation'].lower(), present['orientation'].lower(), future['orientation'].lower()]
    all_upright = all(o == 'upright' for o in orientations)
    all_reversed = all(o == 'reversed' for o in orientations)
    
    reading += "🔮 THE COMPLETE PICTURE:\n\n"
    
    if all_upright:
        reading += "All three cards are Upright—a powerful and harmonious alignment! The energy flows smoothly from your past through your present and into your future. This suggests a clear path forward, with forces working in harmony. Trust the process, follow your instincts, and move forward with confidence. However, remember that even in harmony, wisdom requires balance—don't become complacent, and always stay aware of market cycles and risks.\n\n"
    elif all_reversed:
        reading += "All three cards are Reversed—a call for deep reflection and transformation. The energy is blocked or needs significant change across all three time periods. This is not a curse—it's an invitation to profound growth. Something fundamental needs to shift. Your past patterns, present situation, and future direction all require examination and transformation. This suggests a time of major change, but also major opportunity. In crypto terms, this might mean: reassess your strategy, diversify your approach, or take a step back to gain perspective.\n\n"
    else:
        reading += "Your cards show a mixed pattern—life is beautifully complex, as it should be. The interplay of Upright and Reversed cards reveals both opportunities and challenges, both smooth paths and obstacles. This is the dance of life, the balance of the crypto markets. Embrace the positive energies while consciously addressing the obstacles. Your path requires both action and reflection, both forward movement and course correction.\n\n"
    
    # Flow analysis
    reading += f"Looking at the flow: Your past ({past['name']}) has led you to your present ({present['name']}), which points toward your future ({future['name']}). Each card influences the others, creating a unique narrative for your journey. The past informs the present, the present shapes the future, and the future illuminates the meaning of both.\n\n"
    
    # Crypto wisdom
    reading += "💡 CRYPTO WISDOM FROM THE CARDS:\n\n"
    reading += "In the world of blockchain and cryptocurrency, these cards offer specific guidance:\n\n"
    reading += "• Your Past: Like the immutable blockchain, your past cannot be changed—but it can teach you. Reflect on your crypto journey: what investments worked? What mistakes did you make? What patterns do you see? The past is your teacher.\n\n"
    reading += "• Your Present: This is your moment of action. The present card shows what's available to you right now. In crypto terms: are there opportunities to buy, sell, stake, or learn? The present is where you make decisions that will be recorded in your future ledger.\n\n"
    reading += "• Your Future: The future is not fixed—it's a potential path based on current conditions. Like a smart contract, it will execute based on present inputs. You have the power to change those inputs through wise decisions, research (DYOR), and patience.\n\n"
    reading += "Remember: the blockchain never lies, but it also never stops moving. Markets cycle, projects evolve, and your journey continues. Use the wisdom of these cards to navigate with both courage and caution, with both optimism and realism. The cards guide, but you decide. Trust your research, trust your instincts, but always DYOR (Do Your Own Research).\n\n"
    
    # Closing
    closings = [
        "May the wisdom of the cards illuminate your path through the digital realm.",
        "Carry these insights with you as you navigate the blockchain.",
        "The cards have spoken—now it's your turn to act with wisdom.",
        "May your crypto journey be blessed with insight, patience, and prosperity.",
        "The oracle's words fade, but their meaning remains in your heart."
    ]
    closing = random.choice(closings)
    reading += f"✨ {closing} ✨\n\n"
    reading += "Remember: For entertainment purposes only. Not financial advice. Always DYOR."
    
    return reading


def get_voice_id(client, preferred_name_substring="Mystical Fortune Teller"):
    # Fetch once to identify voice ID; in production, hardcode for speed
    try:
        voices = client.voices.get_all()
        for v in voices:
            name = getattr(v, "name", "") or ""
            if preferred_name_substring.lower() in name.lower():
                return getattr(v, "voice_id", None)
    except Exception as e:
        print(f"Warning: could not list voices: {e}", file=sys.stderr)
    return None


def tts_to_tempfile(client, text, voice_id=None):
    # Lower-bitrate mp3 for quick playback
    audio_bytes = client.text_to_speech.convert(
        voice_id=voice_id,
        model_id="eleven_flash_v2_5",
        text=text,
        output_format="mp3_22050_32",
    )
    tmp = tempfile.NamedTemporaryFile(delete=False, suffix=".mp3")
    tmp.write(audio_bytes)
    tmp.flush()
    tmp.close()
    return tmp.name


def play_mp3(filepath):
    pygame.mixer.init(frequency=22050, size=-16, channels=1, buffer=512)
    pygame.mixer.music.load(filepath)
    pygame.mixer.music.play()
    clock = pygame.time.Clock()
    while pygame.mixer.music.get_busy():
        clock.tick(10)


def main():
    api_key = os.getenv("ELEVENLABS_API_KEY") or os.getenv("ELEVEN_LABS_API_KEY")
    if not api_key:
        print("Set ELEVENLABS_API_KEY in your environment.", file=sys.stderr)
        sys.exit(1)

    client = ElevenLabs(api_key=api_key)

    deck = load_full_deck_if_available() or FALLBACK_DECK
    readings = pick_three_cards(deck)

    print("Your cards:")
    for i, r in enumerate(readings, 1):
        print(f" {i}. {r['name']} ({r['orientation']}) — {r['meaning']}")

    text = build_fortune_text(readings)
    print("\nFortune:")
    print(text)

    voice_id = get_voice_id(client)  # Optional discovery; None uses default voice
    try:
        audio_path = tts_to_tempfile(client, text, voice_id=voice_id)
    except Exception as e:
        print(f"TTS error: {e}", file=sys.stderr)
        sys.exit(1)

    try:
        play_mp3(audio_path)
    finally:
        try:
            os.unlink(audio_path)
        except OSError:
            pass


if __name__ == "__main__":
    main()


