"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {

  return (

    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Mystical room atmosphere */}

      <div className="absolute inset-0 bg-gradient-to-b from-purple-950 via-black to-black" />


      {/* Floating particles */}

      {Array.from({length:120}).map((_,i)=>(

        <motion.div
          key={i}
          className="
          absolute
          h-1
          w-1
          rounded-full
          bg-white
          "
          initial={{
            opacity:0,
            x:`${Math.random()*100}%`,
            y:`${Math.random()*100}%`
          }}
          animate={{
            opacity:[0.2,1,0.2],
            y:[
              `${Math.random()*100}%`,
              `${Math.random()*100}%`
            ]
          }}
          transition={{
            duration:5+Math.random()*8,
            repeat:Infinity
          }}
        />

      ))}



      {/* Room glow */}

      <motion.div

      animate={{
        scale:[1,1.15,1],
        opacity:[0.3,0.6,0.3]
      }}

      transition={{
        duration:8,
        repeat:Infinity
      }}

      className="
      absolute
      top-1/4
      left-1/2
      -translate-x-1/2
      h-[500px]
      w-[500px]
      rounded-full
      bg-purple-600/20
      blur-3xl
      "

      />



      {/* Content */}

      <section className="
      relative
      z-10
      flex
      min-h-screen
      flex-col
      items-center
      justify-center
      px-6
      text-center
      ">



        {/* Flux Logo Orb */}

        <motion.div

        animate={{
          y:[0,-15,0],
          rotate:[0,5,-5,0]
        }}

        transition={{
          duration:6,
          repeat:Infinity
        }}

        className="
        relative
        mb-10
        flex
        h-48
        w-48
        items-center
        justify-center
        rounded-full
        border
        border-purple-300/40
        bg-gradient-to-br
        from-purple-500/40
        via-cyan-400/20
        to-blue-900/40
        shadow-[0_0_80px_rgba(168,85,247,.5)]
        backdrop-blur-xl
        "

        >


          {/* Inner bubbles */}

          <div className="
          absolute
          top-8
          left-10
          h-5
          w-5
          rounded-full
          bg-white/70
          " />


          <div className="
          absolute
          bottom-10
          right-12
          h-8
          w-8
          rounded-full
          bg-cyan-300/50
          " />


          <span className="
          text-4xl
          font-bold
          ">
            Flux
          </span>


        </motion.div>



        <motion.h1

        initial={{
          opacity:0,
          y:30
        }}

        animate={{
          opacity:1,
          y:0
        }}

        className="
        text-6xl
        font-bold
        tracking-tight
        "
        >

        In2Flux

        </motion.h1>



        <p className="
        mt-5
        max-w-xl
        text-lg
        text-zinc-300
        ">

        A living AI companion that remembers your thoughts,
        learns your patterns, and helps you understand yourself.

        </p>



        {/* Message bubbles */}

        <div className="
        mt-12
        flex
        flex-wrap
        justify-center
        gap-4
        ">


        {[
          "Your ideas",
          "Your memories",
          "Your evolution"
        ].map((item,index)=>(

          <motion.div

          key={item}

          animate={{
            y:[0,-8,0]
          }}

          transition={{
            duration:3,
            delay:index,
            repeat:Infinity
          }}

          className="
          rounded-full
          border
          border-white/20
          bg-white/10
          px-6
          py-3
          backdrop-blur-xl
          "

          >

          {item}

          </motion.div>


        ))}


        </div>



        <Link href="/flux">

        <motion.button

        whileHover={{
          scale:1.08
        }}

        whileTap={{
          scale:.95
        }}

        className="
        mt-12
        rounded-full
        bg-gradient-to-r
        from-purple-500
        to-cyan-500
        px-10
        py-4
        text-lg
        font-semibold
        shadow-lg
        "

        >

        Enter Flux

        </motion.button>

        </Link>



      </section>


    </main>

  );

}