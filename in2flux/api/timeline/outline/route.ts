import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase environment variables");
}

const supabase = createClient(
  supabaseUrl,
  supabaseKey
);

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("memories")
      .select("content, created_at")
      .order("created_at", {
        ascending: false,
      });

    if (error) {
      throw error;
    }

    const categories: Record<string, string[]> = {
      Startup: [],
      Goals: [],
      Ideas: [],
      Personal: [],
      Other: [],
    };

    data?.forEach((memory) => {
      const text = memory.content.toLowerCase();

      if (
        text.includes("in2flux") ||
        text.includes("startup") ||
        text.includes("business")
      ) {
        categories.Startup.push(memory.content);
      } else if (
        text.includes("goal") ||
        text.includes("future") ||
        text.includes("plan")
      ) {
        categories.Goals.push(memory.content);
      } else if (
        text.includes("idea") ||
        text.includes("feature") ||
        text.includes("design")
      ) {
        categories.Ideas.push(memory.content);
      } else if (
        text.includes("family") ||
        text.includes("friend") ||
        text.includes("relationship") ||
        text.includes("life")
      ) {
        categories.Personal.push(memory.content);
      } else {
        categories.Other.push(memory.content);
      }
    });

    return NextResponse.json(categories);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to load outline.",
      },
      {
        status: 500,
      }
    );
  }
}