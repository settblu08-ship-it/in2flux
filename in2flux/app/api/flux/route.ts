import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_PUBLISHABLE_KEY!;

const supabase = createClient(
  supabaseUrl,
  supabaseKey
);

type Memory = {
  content: string;
};

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const { data: memories } = await supabase
      .from("memories")
      .select("content")
      .order("created_at", {
        ascending: false,
      })
      .limit(10);


    const previousMemories =
      (memories as Memory[] | null)
        ?.map((memory: Memory) => memory.content)
        .join("\n\n") || "No memories yet.";


    const response =
      await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: `
You are Flux, an AI thinking companion.

Help the user understand their thinking,
patterns, ideas, and growth.

Previous memories:
${previousMemories}
`,
          },
          {
            role: "user",
            content: message,
          },
        ],
      });


    const reply =
      response.choices[0].message.content ||
      "No response.";


    await supabase
      .from("memories")
      .insert({
        content: `User: ${message}\nFlux: ${reply}`,
      });


    return NextResponse.json({
      reply,
    });


  } catch (error) {

    console.error(error);

    return NextResponse.json({
      error: "Flux connection failed.",
    });

  }
}