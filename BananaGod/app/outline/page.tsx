"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type OutlineData = {
  Startup: string[];
  Goals: string[];
  Ideas: string[];
  Personal: string[];
  Other: string[];
};

export default function OutlinePage() {

  const [outline, setOutline] = useState<OutlineData | null>(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    async function loadOutline() {

      try {

        const res = await fetch("/api/outline");
        const data = await res.json();

        setOutline(data);

      } catch(err){

        console.error(err);

      } finally {

        setLoading(false);

      }

    }

    loadOutline();

  }, []);



  const icons = [
    "Startup",
    "Goals",
    "Ideas",
    "Personal",
    "Other"
  ];



  return (

    <main className="relative min-h-screen overflow-hidden bg-black text-white p-8">


      {/* Starfield */}

      <div className="absolute inset-0">

        {Array.from({length:90}).map((_,i)=>(

          <div
          key={i}
          className="
          absolute
          h-1
          w-1
          rounded-full
          bg-white
          opacity-40
          "
          style={{
            left:`${Math.random()*100}%`,
            top:`${Math.random()*100}%`
          }}
          />

        ))}

      </div>



      <section className="relative z-10">


        <h1 className="
        text-center
        text-5xl
        font-bold
        ">
          Outline
        </h1>


        <p className="
        text-center
        text-zinc-400
        mt-3
        ">
          The map of your mind through Flux
        </p>



        {loading && (

          <p className="text-center mt-20 text-zinc-400">
            Mapping memories...
          </p>

        )}



        {outline && (

        <div className="
        flex
        flex-wrap
        justify-center
        gap-10
        mt-20
        ">


        {icons.map((category,index)=>{


          const memories =
          outline[category as keyof OutlineData];


          if(!memories || memories.length===0)
          return null;



          return (

          <motion.div

          key={category}

          initial={{
            opacity:0,
            scale:.5
          }}

          animate={{
            opacity:1,
            scale:1
          }}

          transition={{
            delay:index*.15
          }}

          className="
          w-64
          min-h-48
          rounded-3xl
          border
          border-purple-400/40
          bg-white/10
          backdrop-blur-xl
          p-6
          shadow-lg
          "

          >


            <h2 className="
            text-xl
            font-bold
            text-purple-300
            mb-4
            text-center
            ">
              {category}
            </h2>


            <div className="space-y-3">


            {memories.slice(0,3).map((memory,i)=>(

              <p
              key={i}
              className="
              text-sm
              text-zinc-300
              "
              >
                • {memory}
              </p>

            ))}


            </div>


          </motion.div>


          );


        })}


        </div>

        )}



      </section>


    </main>

  );

}