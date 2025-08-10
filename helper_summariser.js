
// n8n Function node - Summarise Text using OpenAI
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
const openai = new OpenAIApi(configuration);

async function run() {
  const text = $json["text"];
  const response = await openai.createChatCompletion({
    model: "gpt-4o",
    messages: [{ role: "system", content: "Summarise this text in simple words." }, { role: "user", content: text }]
  });
  return { summary: response.data.choices[0].message.content };
}

return run();
