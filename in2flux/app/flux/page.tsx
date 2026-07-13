"use client";

import { useState } from "react";
import { motion } from "framer-motion";

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

    } catch {
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
    <main className="relative min-h-screen overflow-hidden bg-black text-white flex flex-col">

      {/* Background Stars */}
      <div className="absolute inset-0">
        {[...Array(80)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white"
            initial={{
              opacity: 0.2,
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              y: [
                `${Math.random() * 100}%`,
                `${Math.random() * 100}%`,
              ],
            }}
            transition={{
              duration: 8 + Math.random() * 10,
              repeat: Infinity,
            }}
          />
        ))}
      </div>


      {/* Header */}
      <header className="relative z-10 p-6 text-center">

        <motion.h1
          initial={{opacity:0, y:-20}}
          animate={{opacity:1, y:0}}
          className="text-5xl font-bold tracking-wide"
        >
          In2Flux
        </motion.h1>

        <p className="text-zinc-400 mt-2">
          Your thinking companion
        </p>

      </header>


      {/* Flux Core */}
      <div className="relative z-10 flex justify-center py-6">

        <motion.div
          animate={{
            scale:[1,1.08,1],
          }}
          transition={{
            duration:4,
            repeat:Infinity,
          }}
          className="h-40 w-40 rounded-full bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 blur-xl"
        />

        <motion.div
          animate={{
            scale:[1,1.15,1],
            opacity:[0.5,1,0.5],
          }}
          transition={{
            duration:3,
            repeat:Infinity,
          }}
          className="absolute h-28 w-28 rounded-full bg-white blur-2xl"
        />

      </div>


      {/* Chat */}
      <section className="relative z-10 flex-1 overflow-y-auto p-6 space-y-5">

        {messages.length === 0 && (
          <div className="text-center mt-10 text-zinc-400">

            <h2 className="text-2xl text-white mb-3">
              Welcome to Flux
            </h2>

            <p>
              Begin a thought. Build your universe.
            </p>

          </div>
        )}


        {messages.map((msg,index)=>(
          <motion.div
            key={index}
            initial={{
              opacity:0,
              y:20
            }}
            animate={{
              opacity:1,
              y:0
            }}
            className={`max-w-3xl rounded-3xl p-5 backdrop-blur-xl border ${
              msg.role==="user"
              ? "ml-auto bg-blue-600/80 border-blue-400"
              : "mr-auto bg-white/10 border-white/20"
            }`}
          >

            <p className="text-xs opacity-60 mb-2">
              {msg.role==="user" ? "You" : "Flux"}
            </p>

            <p className="leading-7 whitespace-pre-wrap">
              {msg.content}
            </p>

          </motion.div>
        ))}


        {loading && (
          <motion.div
            animate={{opacity:[0.3,1,0.3]}}
            transition={{repeat:Infinity,duration:1.5}}
            className="text-zinc-400"
          >
            Flux is thinking...
          </motion.div>
        )}

      </section>


      {/* Input */}
      <footer className="relative z-10 p-6">

        <div className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-4 flex gap-4">

          <textarea
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
            placeholder="What's on your mind?"
            className="flex-1 h-24 bg-transparent outline-none resize-none"
          />


          <button
            onClick={sendMessage}
            disabled={loading}
            className="rounded-2xl bg-white text-black px-6 font-bold"
          >
            Enter Flux
          </button>

        </div>

      </footer>

    </main>
  );
}