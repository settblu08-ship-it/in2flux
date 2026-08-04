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

    return NextResponse.json(data ?? []);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to load timeline.",
      },
      {
        status: 500,
      }
    );
  }
}