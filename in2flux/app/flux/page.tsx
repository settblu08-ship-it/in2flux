"use client";

import { useState } from "react";
import Link from "next/link";

export default function FluxPage() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    try {
      setLoading(true);
      setReply("");

      const response = await fetch("/api/flux", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: message,
        }),
      });

      const data = await response.json();

      if (data.error) {
        setReply(data.error);
      } else {
        setReply(data.reply);
      }
    } catch (error) {
      console.error(error);
      setReply("Flux connection failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">

      <h1 className="text-5xl font-bold mb-2">
        In2Flux
      </h1>

      <p className="text-zinc-400 mb-8">
        Think. Reflect. Grow.
      </p>

      <div className="flex gap-4 mb-8">
        <Link href="/outline">
          <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-700">
            Outline
          </button>
        </Link>

        <button className="rounded-lg bg-zinc-800 px-6 py-3 text-zinc-400 cursor-not-allowed">
          Timeline
        </button>
      </div>

      <textarea
        className="w-full max-w-xl h-40 rounded-xl bg-zinc-900 p-4 outline-none border border-zinc-800 focus:border-blue-500"
        placeholder="What's on your mind?"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button
        className="mt-5 rounded-xl bg-white px-8 py-3 font-semibold text-black transition hover:bg-zinc-300 disabled:opacity-50"
        onClick={sendMessage}
        disabled={loading}
      >
        {loading ? "Thinking..." : "Enter Flux"}
      </button>

      <div className="mt-8 w-full max-w-xl rounded-xl border border-zinc-800 bg-zinc-900 p-6 min-h-[120px]">
        {reply ? (
          <p className="whitespace-pre-wrap">{reply}</p>
        ) : (
          <p className="text-zinc-500">
            Flux is ready to think with you...
          </p>
        )}
      </div>

    </main>
  );
}