import express from 'express';
import OpenAI from 'openai';

const router = express.Router();

const client = new OpenAI({
  apiKey: process.env.EMERGENT_API_KEY,
  baseURL: 'https://integrations.emergentagent.com/llm/v1',
});

router.post('/chat', async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'message is required' });
    }

    const resp = await client.chat.completions.create({
      model: 'gpt-5.2',
      messages: [{ role: 'user', content: message }],
    });

    res.json({ reply: resp.choices[0].message.content });
  } catch (err) {
    console.error('AI Error:', err.message);
    res.status(500).json({ error: 'AI request failed' });
  }
});

export default router;