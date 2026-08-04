"use client";

import { motion } from "framer-motion";

export default function Background() {
  const stars = Array.from({ length: 80 });

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      
      {/* Nebula Glow */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 rounded-full blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(99,102,241,0.35), transparent 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute right-0 top-1/2 h-[500px] w-[500px] rounded-full blur-[140px]"
          style={{
            background:
              "radial-gradient(circle, rgba(168,85,247,0.25), transparent 70%)",
          }}
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>


      {/* Stars */}
      {stars.map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-white"
          initial={{
            opacity: Math.random(),
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [
              Math.random() * 0.3,
              1,
              Math.random() * 0.3,
            ],
          }}
          transition={{
            duration: 3 + Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}


      {/* Floating Dust */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`dust-${i}`}
          className="absolute h-2 w-2 rounded-full bg-white/20 blur-sm"
          initial={{
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
          }}
          animate={{
            y: ["0%", "-20%", "0%"],
            x: ["0%", "10%", "0%"],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

    </div>
  );
}