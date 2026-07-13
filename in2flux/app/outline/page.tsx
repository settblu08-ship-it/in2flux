"use client";

import { motion } from "framer-motion";

const nodes = [
  "Vision",
  "Goals",
  "Ideas",
  "Projects",
  "Skills",
  "Growth",
];

export default function OutlinePage() {

return (

<main className="relative min-h-screen overflow-hidden bg-black text-white">


{/* Starfield */}

<div className="absolute inset-0">

{Array.from({length:80}).map((_,i)=>(

<motion.div

key={i}

className="absolute h-1 w-1 rounded-full bg-white"

initial={{
x:`${Math.random()*100}%`,
y:`${Math.random()*100}%`,
opacity:.3
}}

animate={{
opacity:[.3,1,.3]
}}

transition={{
duration:3+Math.random()*5,
repeat:Infinity
}}

/>

))}

</div>



{/* Title */}

<div className="relative z-10 text-center pt-10">

<h1 className="text-5xl font-bold">
Outline
</h1>

<p className="text-zinc-400 mt-3">
The map of your mind
</p>

</div>



{/* Nodes */}

<div className="relative z-10 flex flex-wrap justify-center gap-8 mt-20 px-8">


{nodes.map((node,index)=>(

<motion.div

key={node}

initial={{
opacity:0,
scale:.5
}}

animate={{
opacity:1,
scale:1,
y:[0,-10,0]
}}

transition={{
delay:index*.2,
duration:3,
repeat:Infinity
}}

className="
h-32
w-32
rounded-full
flex
items-center
justify-center
text-center
bg-white/10
border
border-purple-400/40
backdrop-blur-xl
shadow-lg
"

>

{node}

</motion.div>

))}


</div>



</main>

);

}