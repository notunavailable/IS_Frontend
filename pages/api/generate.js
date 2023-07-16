import { Configuration, OpenAIApi } from "openai";
require('dotenv').config();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
    const prompt = `Give me the tastiest recipe for the following type of food: `;
    const completion = await openai.createCompletion({
        model: "text-davinci-002",
        prompt: prompt,
        temperature: 0.9,
        n: 1,
        max_tokens: 2048
    });
    const response = completion.data.choices[0].text;
    res.status(200).json({ response: response });
}

//how to call
/*
  async function callAPI(food) {
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: food }),
    });
    const data = await response.json();
    setImage(data.image);
    setRecipe(data.recipe);
  }

*/