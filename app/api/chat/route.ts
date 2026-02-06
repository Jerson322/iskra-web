import OpenAI from "openai";

export async function POST(req: Request) {
  if (!process.env.OPENAI_API_KEY) {
    return new Response(
      JSON.stringify({ error: "OPENAI_API_KEY no configurada" }),
      { status: 500 }
    );
  }

  const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const { messages } = await req.json();

  const completion = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages,
  });

  return Response.json(completion.choices[0].message);
}
