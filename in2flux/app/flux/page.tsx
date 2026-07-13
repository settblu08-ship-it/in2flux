"use client";

import { useState } from "react";
import Link from "next/link";

export default function FluxPage() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    if (!message.trim()) return;

    try {
      setLoading(true);
      setReply("");

      const response = await fetch("/api/flux", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
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
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-white">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black" />

      {/* Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(150)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Blue Glow */}
      <div className="absolute h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-3xl" />

      {/* Main Content */}
      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center px-6">

        <h1 className="mb-3 text-6xl font-extrabold tracking-wide">
          In2Flux
        </h1>

        <p className="mb-10 text-center text-lg text-zinc-400">
          Every conversation leaves a mark.
        </p>

        {/* Navigation */}
        <div className="mb-8 flex gap-5">

          <Link href="/outline">
            <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold transition duration-300 hover:scale-105 hover:bg-blue-500">
              Outline
            </button>
          </Link>

          <button
            disabled
            className="cursor-not-allowed rounded-xl bg-zinc-800 px-6 py-3 text-zinc-500"
          >
            Timeline
          </button>

        </div>

        {/* Chat Box */}
        <div className="w-full rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6 backdrop-blur-xl shadow-2xl">

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="What's on your mind?"
            className="h-44 w-full resize-none rounded-2xl border border-zinc-700 bg-black/40 p-5 text-lg outline-none transition focus:border-blue-500"
          />

          <button
            onClick={sendMessage}
            disabled={loading}
            className="mt-6 w-full rounded-2xl bg-white py-4 text-lg font-bold text-black transition duration-300 hover:scale-[1.02] hover:bg-zinc-300 disabled:opacity-50"
          >
            {loading ? "Flux is Thinking..." : "Enter Flux"}
          </button>

        </div>

        {/* AI Response */}
        <div className="mt-8 w-full rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6 backdrop-blur-xl shadow-xl">

          <h2 className="mb-4 text-xl font-semibold text-blue-400">
            Flux
          </h2>

          {reply ? (
            <p className="whitespace-pre-wrap leading-8 text-zinc-100">
              {reply}
            </p>
          ) : (
            <p className="italic text-zinc-500">
              Flux is waiting for your first thought...
            </p>
          )}

        </div>

        {/* Thinking Framework */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm tracking-widest text-zinc-500">

          <span>Observe</span>

          <span>•</span>

          <span>Decode</span>

          <span>•</span>

          <span>Reflect</span>

          <span>•</span>

          <span>Build</span>

        </div>

      </div>

    </main>
  );
}