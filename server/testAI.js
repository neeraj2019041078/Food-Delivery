import 'dotenv/config';
import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: process.env.EMERGENT_API_KEY,
  baseURL: 'https://integrations.emergentagent.com/llm/v1',
});

async function testConnection() {
  try {
    const resp = await client.chat.completions.create({
      model: 'gpt-5.2', // ya claude-sonnet-4-5-20250929
      messages: [{ role: 'user', content: 'Say hello in one line' }],
    });
    console.log('✅ AI Response:', resp.choices[0].message.content);
  } catch (err) {
    console.error('❌ Error:', err.message);
  }
}

testConnection();