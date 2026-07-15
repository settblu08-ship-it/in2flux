import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import OpenAI from "openai";

export const dynamic = "force-dynamic";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_PUBLISHABLE_KEY;

const supabase =
  supabaseUrl && supabaseKey
    ? createClient(supabaseUrl, supabaseKey)
    : null;

type Memory = {
  content: string;
};

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json(
        { error: "No message provided" },
        { status: 400 }
      );
    }

    let previousMemories = "No previous memories.";

    if (supabase) {
      const { data: memories, error } = await supabase
        .from("memories")
        .select("content")
        .order("created_at", {
          ascending: false,
        })
        .limit(10);

      if (!error && memories) {
        previousMemories =
          (memories as Memory[])
            .map((memory) => memory.content)
            .join("\n\n") || previousMemories;
      }
    }

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `
You are Flux, an AI thinking companion.

Your purpose is to help users understand their thoughts,
patterns, ideas, decisions, and personal growth.

Be conversational, insightful, and supportive.

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
      response.choices[0]?.message?.content ||
      "Flux couldn't generate a response.";

    // Save memory, but never break the conversation
    if (supabase) {
      const { error } = await supabase
        .from("memories")
        .insert({
          content: `User: ${message}\nFlux: ${reply}`,
        });

      if (error) {
        console.error("Memory save error:", error);
      }
    }

    return NextResponse.json({
      reply,
    });

  } catch (error) {
    console.error("Flux route error:", error);

    return NextResponse.json(
      {
        error: "Flux connection failed.",
      },
      { status: 500 }
    );
  }
}