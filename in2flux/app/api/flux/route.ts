import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase environment variables");
}

const supabase = createClient(supabaseUrl, supabaseKey);

type Memory = {
  content: string;
};

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json(
        { error: "No message provided." },
        { status: 400 }
      );
    }

    // Load previous memories
    const { data: memories, error: memoryError } = await supabase
      .from("memories")
      .select("content")
      .order("created_at", { ascending: false })
      .limit(10);

    if (memoryError) {
      console.error("Memory fetch error:", memoryError);
    }

    const previousMemories =
      (memories as Memory[] | null)
        ?.map((m) => m.content)
        .join("\n\n") || "No previous memories.";

    // Ask OpenAI
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `You are Flux, an AI thinking companion.

Help users understand their thoughts, patterns, and ideas.

Use previous memories whenever they are relevant.

Previous memories:
${previousMemories}`,
        },
        {
          role: "user",
          content: message,
        },
      ],
    });

    const reply =
      completion.choices[0].message.content ??
      "Flux had no response.";

    // Save memory
    const { data: inserted, error: insertError } = await supabase
      .from("memories")
      .insert({
        content: `User: ${message}\nFlux: ${reply}`,
      })
      .select();

    if (insertError) {
      console.error("Supabase insert error:", insertError);

      return NextResponse.json(
        {
          error: "Failed to save memory.",
          details: insertError.message,
        },
        {
          status: 500,
        }
      );
    }

    console.log("Memory saved:", inserted);

    return NextResponse.json({
      reply,
    });
  } catch (error) {
    console.error("Flux Route Error:", error);

    return NextResponse.json(
      {
        error: "Flux connection failed.",
      },
      {
        status: 500,
      }
    );
  }
}