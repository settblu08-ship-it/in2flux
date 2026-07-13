import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { thought } = await request.json();

    const result = await openai.responses.create({
      model: "gpt-4.1-mini",
      input: `
You are In2Flux, an AI thinking companion.

A person shared this thought:

${thought}

Guide them using:

Reflection:
Pattern:
Perspective:
Question:
Next Step:

Be human, insightful, and concise.
`,
    });

    return NextResponse.json({
      reflection: result.output_text,
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Reflection failed."
      },
      {
        status: 500
      }
    );
  }
}
