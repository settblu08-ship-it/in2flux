"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Message = {
  role: "user" | "flux";
  content: string;
};

export default function FluxPage() {

  const [message,setMessage] = useState("");
  const [messages,setMessages] = useState<Message[]>([]);
  const [loading,setLoading] = useState(false);


  async function sendMessage(){

    if(!message.trim()) return;

    const userMessage = message;

    setMessages(prev=>[
      ...prev,
      {
        role:"user",
        content:userMessage
      }
    ]);

    setMessage("");

    try{

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


      setMessages(prev=>[
        ...prev,
        {
          role:"flux",
          content:data.reply || data.error
        }
      ]);


    }catch{

      setMessages(prev=>[
        ...prev,
        {
          role:"flux",
          content:"Flux connection failed."
        }
      ]);

    }finally{

      setLoading(false);

    }

  }


return (

<main className="relative min-h-screen overflow-hidden bg-black text-white flex flex-col">


{/* STAR BACKGROUND */}

<div className="absolute inset-0">

{Array.from({length:80}).map((_,i)=>(

<motion.div
key={i}
className="absolute w-1 h-1 bg-white rounded-full"
initial={{
x:`${Math.random()*100}%`,
y:`${Math.random()*100}%`
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



{/* HEADER */}

<header className="relative z-10 text-center p-8">

<h1 className="text-5xl font-bold">
In2Flux
</h1>

<p className="text-zinc-400">
Your thinking companion
</p>

</header>




{/* FLUX ORB */}

<div className="relative z-10 flex justify-center py-6">

<motion.div

className="h-40 w-40 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 blur-xl"

animate={{
scale:[1,1.1,1]
}}

transition={{
duration:4,
repeat:Infinity
}}

/>

</div>




{/* CHAT */}

<section className="relative z-10 flex-1 overflow-y-auto p-6 space-y-5">


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

className={`rounded-3xl p-5 max-w-3xl ${
msg.role==="user"
?"ml-auto bg-blue-600"
:"mr-auto bg-zinc-900 border border-zinc-700"
}`}

>

<p className="text-xs opacity-60">
{msg.role==="user"?"You":"Flux"}
</p>


<p>
{msg.content}
</p>


</motion.div>

))}



{loading && (

<div className="text-zinc-400 animate-pulse">
Flux is thinking...
</div>

)}


</section>




{/* INPUT */}

<footer className="relative z-10 p-6">

<div className="flex gap-3">


<textarea

value={message}

onChange={(e)=>setMessage(e.target.value)}

placeholder="What's on your mind?"

className="flex-1 rounded-2xl bg-zinc-900 p-4"

/>


<button

onClick={sendMessage}

className="bg-white text-black rounded-2xl px-6"

>

Enter Flux

</button>


</div>

</footer>



</main>

);

}