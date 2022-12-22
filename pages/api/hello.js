import { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  const completion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: req.body.text,
    temperature: 0.9,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0.6,
    max_tokens: 250,
  });
  res.status(200).json({ result: completion.data });
}
