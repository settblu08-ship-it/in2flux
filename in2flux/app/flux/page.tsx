"use client";

import { useState } from "react";

type Message = {
  role: "user" | "flux";
  content: string;
};

export default function FluxPage() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    if (!message.trim()) return;

    const userMessage = message;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: userMessage,
      },
    ]);

    setMessage("");

    try {
      setLoading(true);

      const response = await fetch("/api/flux", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
        }),
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "flux",
          content: data.reply || data.error,
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "flux",
          content: "Flux connection failed.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-black text-white flex flex-col">

      <header className="p-6 border-b border-zinc-800">
        <h1 className="text-4xl font-bold">
          In2Flux
        </h1>

        <p className="text-zinc-400 mt-2">
          Your thinking companion.
        </p>
      </header>


      <section className="flex-1 overflow-y-auto p-6 space-y-6">

        {messages.length === 0 && (
          <div className="text-center text-zinc-500 mt-20">
            <h2 className="text-2xl mb-3">
              Welcome to Flux
            </h2>

            <p>
              Start a thought and begin building your mind map.
            </p>
          </div>
        )}


        {messages.map((msg, index) => (
          <div
            key={index}
            className={`max-w-3xl rounded-2xl p-5 ${
              msg.role === "user"
                ? "ml-auto bg-blue-600"
                : "mr-auto bg-zinc-900 border border-zinc-800"
            }`}
          >

            <p className="text-sm mb-2 opacity-60">
              {msg.role === "user" ? "You" : "Flux"}
            </p>

            <p className="whitespace-pre-wrap leading-7">
              {msg.content}
            </p>

          </div>
        ))}


        {loading && (
          <div className="text-zinc-400 animate-pulse">
            Flux is thinking...
          </div>
        )}

      </section>


      <footer className="p-6 border-t border-zinc-800">

        <div className="flex gap-4">

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="What's on your mind?"
            className="flex-1 h-24 rounded-xl bg-zinc-900 border border-zinc-800 p-4 resize-none outline-none focus:border-blue-500"
          />

          <button
            onClick={sendMessage}
            disabled={loading}
            className="rounded-xl bg-white text-black px-6 font-bold hover:bg-zinc-300 disabled:opacity-50"
          >
            Enter Flux
          </button>

        </div>

      </footer>

    </main>
  );
}