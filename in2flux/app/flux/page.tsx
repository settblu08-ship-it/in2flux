"use client";

import { useState } from "react";

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
      <h1 className="text-4xl font-bold mb-6">
        In2Flux
      </h1>

      <textarea
        className="w-full max-w-xl h-40 bg-zinc-900 rounded-lg p-4"
        placeholder="What's on your mind?"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button
        className="mt-4 bg-white text-black px-6 py-3 rounded-lg"
        onClick={sendMessage}
        disabled={loading}
      >
        {loading ? "Thinking..." : "Enter Flux"}
      </button>

      <div className="mt-6 max-w-xl">
        {reply}
      </div>
    </main>
  );
}