import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_PUBLISHABLE_KEY!
);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const userMessage = body.message;

    // Get previous memories
    const { data: memories } = await supabase
      .from("memories")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(10);


    const memoryContext =
      memories
        ?.map((memory) => memory.content)
        .join("\n") || "";


    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",

      messages: [
        {
          role: "system",
          content: `
You are Flux, an AI thinking companion.

Your purpose is to help users understand their own thinking.

Use previous memories when helpful.

Previous memories:
${memoryContext}
`,
        },

        {
          role: "user",
          content: userMessage,
        },
      ],
    });


    const reply =
      response.choices[0].message.content ||
      "Flux had no response.";


    // Save memory
    await supabase
      .from("memories")
      .insert([
        {
          content:
            `User: ${userMessage}\nFlux: ${reply}`,
        },
      ]);


    return NextResponse.json({
      reply,
    });


  } catch (error) {

    console.error(error);

    return NextResponse.json({
      error: "Flux memory system failed.",
    });

  }
}