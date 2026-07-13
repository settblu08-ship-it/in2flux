"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type Message = {
  role: "user" | "flux";
  content: string;
};

const colors = [
  { name: "Cosmic Blue", color: "#3b82f6" },
  { name: "Nebula Purple", color: "#a855f7" },
  { name: "Solar Gold", color: "#facc15" },
  { name: "Neural Green", color: "#22c55e" },
  { name: "Energy Red", color: "#ef4444" },
];

export default function FluxPage() {

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const [orbColor, setOrbColor] = useState("#3b82f6");


  async function sendMessage() {

    if (!message.trim()) return;

    const userMessage = message;

    setMessages((prev)=>[
      ...prev,
      {
        role:"user",
        content:userMessage
      }
    ]);

    setMessage("");

    try {

      setLoading(true);


      const response = await fetch("/api/flux",{

        method:"POST",

        headers:{
          "Content-Type":"application/json"
        },

        body:JSON.stringify({
          message:userMessage
        })

      });


      const data = await response.json();


      setMessages((prev)=>[
        ...prev,
        {
          role:"flux",
          content:data.reply || data.error
        }
      ]);


    } catch {


      setMessages((prev)=>[
        ...prev,
        {
          role:"flux",
          content:"Flux connection failed."
        }
      ]);


    } finally {

      setLoading(false);

    }

  }



  return (

<main className="relative min-h-screen overflow-hidden bg-black text-white flex flex-col">


{/* Stars */}

<div className="absolute inset-0">

{[...Array(120)].map((_,i)=>(

<motion.div

key={i}

className="absolute rounded-full bg-white"

style={{
width:Math.random()*3+1,
height:Math.random()*3+1
}}

initial={{
x:`${Math.random()*100}%`,
y:`${Math.random()*100}%`,
opacity:.2
}}

animate={{
opacity:[.2,1,.2]
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





{/* Orb */}

<section className="relative z-10 flex flex-col items-center py-10">


<motion.div

className="absolute h-80 w-80 rounded-full blur-3xl"

animate={{

scale:loading
?[1,1.35,1]
:[1,1.15,1],

opacity:[.35,.8,.35]

}}

transition={{

duration:loading?2:5,

repeat:Infinity

}}

style={{

backgroundColor:orbColor,

boxShadow:`0 0 80px ${orbColor}`

}}

/>



<motion.div

className="relative h-48 w-48 rounded-full"

animate={{

scale:[1,1.08,1]

}}

transition={{

duration:4,

repeat:Infinity

}}

style={{

background:

`radial-gradient(circle at 30% 30%, white, ${orbColor})`,

boxShadow:

`
0 0 40px ${orbColor},
0 0 100px ${orbColor}
`

}}

/>




<div className="mt-10 text-center">


<p className="text-sm text-zinc-400 mb-4">
Choose Flux Core
</p>



<div className="flex gap-4 flex-wrap justify-center">


{colors.map(({name,color})=>(

<button

key={name}

title={name}

onClick={()=>setOrbColor(color)}

className={`h-10 w-10 rounded-full transition-all duration-500 ${
orbColor===color
?"ring-4 ring-white scale-125"
:"opacity-80 hover:scale-110"
}`}

style={{

backgroundColor:color,

boxShadow:`0 0 20px ${color}`

}}

/>

))}


</div>

</div>


</section>






{/* Chat */}

<section className="relative z-10 flex-1 overflow-y-auto px-6 space-y-5">


{messages.length===0 &&

<div className="text-center text-zinc-400 mt-10">

<h2 className="text-2xl text-white">
Welcome to Flux
</h2>

<p className="mt-2">
Start a thought and watch it evolve.
</p>

</div>

}



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
?"ml-auto border-blue-400/40 bg-blue-600/60"
:"mr-auto border-white/20 bg-white/10"
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



{loading &&

<motion.div

animate={{
opacity:[.3,1,.3]
}}

transition={{
duration:1.5,
repeat:Infinity
}}

className="text-zinc-400"

>

Flux is thinking...

</motion.div>

}


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