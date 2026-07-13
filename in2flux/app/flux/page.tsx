"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type Message = {
  role: "user" | "flux";
  content: string;
};

export default function FluxPage() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const [orbColor, setOrbColor] = useState("#3b82f6");


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


      {/* Space Background */}

      <div className="absolute inset-0">

        {[...Array(120)].map((_, i) => (

          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
            }}
            initial={{
              x:`${Math.random()*100}%`,
              y:`${Math.random()*100}%`,
              opacity:0.2
            }}
            animate={{
              opacity:[0.2,1,0.2],
            }}
            transition={{
              duration:3+Math.random()*5,
              repeat:Infinity
            }}
          />

        ))}

      </div>



      {/* Header */}

      <header className="relative z-10 text-center pt-8">

        <h1 className="text-5xl font-bold tracking-widest">
          In2Flux
        </h1>

        <p className="text-zinc-400 mt-2">
          Your thinking companion
        </p>

      </header>




      {/* Flux Orb */}

      <section className="relative z-10 flex flex-col items-center py-8">


        <motion.div

          className="absolute h-72 w-72 rounded-full blur-3xl"

          style={{
            backgroundColor:orbColor
          }}

          animate={{
            scale:[1,1.2,1],
            opacity:[0.4,0.8,0.4]
          }}

          transition={{
            duration:5,
            repeat:Infinity
          }}

        />


        <motion.div

          className="h-44 w-44 rounded-full shadow-2xl"

          style={{
            background:
            `radial-gradient(circle at 30% 30%, white, ${orbColor})`
          }}

          animate={{
            scale:[1,1.08,1]
          }}

          transition={{
            duration:4,
            repeat:Infinity
          }}

        />


        <div className="mt-8 flex items-center gap-3">

          <span className="text-sm text-zinc-400">
            Choose Flux Core
          </span>


          <input

            type="color"

            value={orbColor}

            onChange={(e)=>setOrbColor(e.target.value)}

            className="h-10 w-10 cursor-pointer rounded-full"

          />

        </div>


      </section>





      {/* Chat */}

      <section className="relative z-10 flex-1 overflow-y-auto px-6 space-y-5">


        {messages.length === 0 && (

          <div className="text-center text-zinc-400 mt-10">

            <h2 className="text-2xl text-white">
              Welcome to Flux
            </h2>

            <p className="mt-2">
              Start a thought and watch it evolve.
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

              ? "ml-auto border-blue-400/40 bg-blue-600/60"

              : "mr-auto border-white/20 bg-white/10"

            }`}

          >

            <p className="text-xs opacity-50 mb-2">
              {msg.role==="user"?"You":"Flux"}
            </p>

            <p className="leading-7 whitespace-pre-wrap">
              {msg.content}
            </p>


          </motion.div>

        ))}



        {loading && (

          <motion.div

          animate={{
            opacity:[0.3,1,0.3]
          }}

          transition={{
            repeat:Infinity,
            duration:1.5
          }}

          className="text-zinc-400"
          
          >
            Flux is thinking...
          </motion.div>

        )}


      </section>





      {/* Navigation */}

      <div className="relative z-10 grid grid-cols-2 gap-4 p-6">


        <Link href="/outline">

          <div className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-5 text-center">
            Outline
          </div>

        </Link>



        <Link href="/timeline">

          <div className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-5 text-center">
            Timeline
          </div>

        </Link>


      </div>





      {/* Input */}

      <footer className="relative z-10 p-6">


        <div className="flex gap-3 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-4">


          <textarea

          value={message}

          onChange={(e)=>setMessage(e.target.value)}

          placeholder="What's on your mind?"

          className="flex-1 bg-transparent outline-none resize-none"

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