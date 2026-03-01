// AI Service for Crypto Tarot readings
// Uses OpenAI API to generate contextual interpretations

const OPENAI_API_KEY = localStorage.getItem('OPENAI_API_KEY') || '';
const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

// Check if API key is configured
export function isAIConfigured() {
  return !!OPENAI_API_KEY && OPENAI_API_KEY.length > 0;
}

// Set API key
export function setAPIKey(key) {
  localStorage.setItem('OPENAI_API_KEY', key);
  return true;
}

// Get reading interpretation from AI
export async function getAIReading(question, cards) {
  if (!isAIConfigured()) {
    throw new Error('OpenAI API key not configured. Please set your API key.');
  }

  // Build card context
  const cardDescriptions = cards
    .map((card, idx) => {
      const position = ['Past', 'Present', 'Future'][idx];
      return `${position}: ${card.title} (${card.orientation}) - ${card.meaning}`;
    })
    .join('\n');

  const prompt = `You are an educational Crypto Tarot reader who teaches blockchain and cryptocurrency concepts through mystical card readings.

The user asked: "${question}"

The three cards drawn are:
${cardDescriptions}

Provide an educational interpretation that:
1. TEACHES crypto concepts relevant to their question (explain blockchain, DeFi, staking, wallets, etc.)
2. Explains WHAT MAKES crypto work (blockchain tech, consensus mechanisms, cryptography)
3. Explains WHAT MOVES crypto markets (supply/demand, adoption, regulation, technology)
4. Explains HOW TO INTERACT with crypto safely (wallets, exchanges, DYOR, avoiding scams)
5. Weaves the three cards (Past, Present, Future) into a cohesive learning narrative
6. Uses the crypto tarot theme but prioritizes education over mysticism
7. Is clear and educational (3-4 paragraphs), suitable for beginners

Format: Start with the reading, then explain the key concepts they should learn.`;

  try {
    const response = await fetch(OPENAI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content:
              'You are an educational Crypto Tarot reader who teaches blockchain, DeFi, NFTs, and cryptocurrency fundamentals through mystical card readings. Your goal is to educate users about: what makes crypto (blockchain, cryptography, decentralization), what moves crypto (market forces, adoption, regulation), and how to interact with crypto safely (wallets, exchanges, DeFi, risk management). Always prioritize clear education over mysticism.',
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
        temperature: 0.8,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || 'Failed to get AI reading');
    }

    const data = await response.json();
    return data.choices[0]?.message?.content || 'Unable to generate reading.';
  } catch (error) {
    console.error('AI Reading error:', error);
    throw error;
  }
}

// Fallback reading when AI is not available - educational focus
export function getFallbackReading(question, cards) {
  const positions = ['Past', 'Present', 'Future'];
  const interpretations = cards
    .map((card, idx) => {
      return `The ${positions[idx]} card is ${card.title} (${card.orientation}), which suggests: ${card.meaning}`;
    })
    .join('\n\n');

  return `**Your Question:** "${question}"\n\n**The Cards Reveal:**\n${interpretations}\n\n**What This Teaches You:**\nThese cards reflect different aspects of your crypto journey. The Past shows what brought you here, the Present reveals current opportunities or challenges, and the Future suggests where your path leads. Use this as a lens to understand blockchain fundamentals, market dynamics, and practical crypto strategies.\n\n💡 **Key Learning:** Every card in the Crypto Tarot teaches concepts about blockchain technology, DeFi protocols, market forces, or risk management. Explore the deck to discover more!`;
}
