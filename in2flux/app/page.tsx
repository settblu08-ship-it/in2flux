"use client";

import { useState } from "react";

export default function Home() {
  const [thought, setThought] = useState("");
  const [reflection, setReflection] = useState("");
  const [loading, setLoading] = useState(false);

  async function enterFlux() {
    if (!thought.trim()) {
      setReflection("Share a thought first so we can enter the Flux.");
      return;
    }

    setLoading(true);
    setReflection("");

    try {
      const response = await fetch("/api/reflect", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          thought,
        }),
      });

      const data = await response.json();

      setReflection(data.reflection);
    } catch {
      setReflection(
        "Something interrupted the reflection. Please try again."
      );
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-3xl w-full">

        <h1 className="text-6xl font-bold text-center mb-5">
          In2Flux
        </h1>

        <p className="text-xl text-gray-400 text-center mb-10">
          Understand your thoughts. Transform your decisions.
        </p>

        <div className="bg-white/10 border border-white/20 rounded-3xl p-6">

          <textarea
            value={thought}
            onChange={(e) => setThought(e.target.value)}
            placeholder="What's on your mind?"
            className="w-full h-40 bg-transparent text-white placeholder-gray-500 outline-none resize-none"
          />

          <button
            onClick={enterFlux}
            disabled={loading}
            className="mt-5 w-full bg-white text-black rounded-xl py-3 font-semibold"
          >
            {loading ? "Entering Flux..." : "Enter Flux"}
          </button>

          {reflection && (
            <div className="mt-8 border-t border-white/20 pt-6">
              <h2 className="text-xl font-semibold mb-3">
                In2Flux Reflection
              </h2>

              <p className="text-gray-300 whitespace-pre-line">
                {reflection}
              </p>
            </div>
          )}

        </div>

        <p className="mt-8 text-center text-sm text-gray-500">
          An AI thinking companion built to help you discover patterns within yourself.
        </p>

      </div>
    </main>
  );
}