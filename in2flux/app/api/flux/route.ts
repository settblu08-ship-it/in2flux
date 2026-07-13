import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const memoryPath = path.join(
  process.cwd(),
  "data",
  "memory.json"
);

function getMemory() {
  if (!fs.existsSync(memoryPath)) {
    return {
      conversations: [],
    };
  }

  const data = fs.readFileSync(memoryPath, "utf-8");

  return JSON.parse(data);
}

function saveMemory(memory: any) {
  fs.writeFileSync(
    memoryPath,
    JSON.stringify(memory, null, 2)
  );
}


export async function POST(req: Request) {

  try {

    const body = await req.json();

    const userMessage = body.message;


    const memory = getMemory();


    const previousContext =
      memory.conversations
        .slice(-10)
        .map(
          (item:any) =>
            `User: ${item.user}\nFlux: ${item.flux}`
        )
        .join("\n\n");


    const response = await openai.chat.completions.create({

      model: "gpt-4o-mini",

      messages: [

        {
          role: "system",
          content:
          `
You are Flux, an AI thinking companion.

Your purpose is not only to answer questions,
but to help the user understand their thinking.

Use previous conversation context when useful.

Previous memories:

${previousContext}
`
        },

        {
          role: "user",
          content: userMessage,
        }

      ],

    });


    const reply =
      response.choices[0].message.content ||
      "Flux had no response.";


    memory.conversations.push({

      user: userMessage,

      flux: reply,

      date: new Date().toISOString(),

    });


    saveMemory(memory);


    return NextResponse.json({
      reply,
    });


  } catch(error) {

    console.error(error);

    return NextResponse.json({
      error: "Flux memory system failed."
    });

  }

}