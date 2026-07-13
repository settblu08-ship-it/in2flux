import { NextResponse } from "next/server";
import OpenAI from "openai";
import { createClient } from "@supabase/supabase-js";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase environment variables");
}

const supabase = createClient(
  supabaseUrl,
  supabaseKey
);

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json(
        { error: "No message provided" },
        { status: 400 }
      );
    }

    // Get previous memories
    const { data: memories, error: memoryError } = await supabase
      .from("memories")
      .select("content")
      .order("created_at", { ascending: false })
      .limit(10);

    if (memoryError) {
      console.log(memoryError);
    }

    const context = memories
      ?.map((item) => item.content)
      .join("\n") || "";

    // Ask Flux
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are Flux, an AI thinking companion. Use memory when helpful. Help the user reflect, plan, and grow.",
        },
        {
          role: "system",
          content: `Previous memories:\n${context}`,
        },
        {
          role: "user",
          content: message,
        },
      ],
    });

    const reply =
      response.choices[0].message.content ||
      "I couldn't generate a response.";

    // Save memory
    await supabase.from("memories").insert([
      {
        content: `User: ${message}\nFlux: ${reply}`,
      },
    ]);

    return NextResponse.json({
      reply,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Flux encountered an error",
      },
      {
        status: 500,
      }
    );
  }
}