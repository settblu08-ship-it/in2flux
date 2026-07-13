import OpenAI from "openai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const { thought } = await request.json();

    const result = await openai.responses.create({
      model: "gpt-4.1-mini",
      input: `
You are In2Flux, an AI thinking companion.

A person shared this thought:

"${thought}"

Respond using this structure:

Reflection:
Pattern:
Perspective:
Question:
Next Step:

Be thoughtful, human, and concise.
`,
    });

    return NextResponse.json({
      reflection: result.output_text,
    });

  } catch (error) {
    console.error(error);

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