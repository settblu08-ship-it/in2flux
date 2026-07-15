"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {

const bubbles = [
  "Your thoughts",
  "Your memories",
  "Your patterns",
  "Your evolution"
];


return (

<main className="relative min-h-screen overflow-hidden bg-black text-white">


{/* Deep mystical room background */}

<div className="
absolute
inset-0
bg-gradient-to-b
from-indigo-950
via-purple-950
to-black
"/>


{/* Room light source */}

<motion.div

animate={{
scale:[1,1.3,1],
opacity:[0.25,0.5,0.25]
}}

transition={{
duration:10,
repeat:Infinity
}}

className="
absolute
top-10
left-1/2
-translate-x-1/2
h-[700px]
w-[700px]
rounded-full
bg-purple-600/30
blur-[140px]
"

/>



{/* Floating stars */}

{Array.from({length:160}).map((_,i)=>(

<motion.div

key={i}

className="
absolute
rounded-full
bg-white
"

style={{
height: Math.random()*3+"px",
width: Math.random()*3+"px",
left:`${Math.random()*100}%`,
top:`${Math.random()*100}%`
}}

animate={{
opacity:[0.1,1,0.1],
scale:[1,1.8,1]
}}

transition={{
duration:3+Math.random()*6,
repeat:Infinity
}}

/>

))}



{/* Floating memory bubbles */}

{bubbles.map((bubble,index)=>(

<motion.div

key={bubble}

animate={{
y:[0,-25,0],
rotate:[0,5,-5,0]
}}

transition={{
duration:5+index,
repeat:Infinity
}}

className={`
absolute
hidden
md:flex
rounded-full
border
border-white/20
bg-white/10
backdrop-blur-xl
px-6
py-3
text-sm
text-zinc-200
${[
"top-32 left-20",
"top-52 right-24",
"bottom-40 left-32",
"bottom-32 right-28"
][index]}
`}

>

{bubble}

</motion.div>

))}



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



{/* Orb Logo */}

<motion.div

animate={{
y:[0,-15,0],
rotate:[0,360]
}}

transition={{
rotate:{
duration:30,
repeat:Infinity,
ease:"linear"
},
y:{
duration:5,
repeat:Infinity
}
}}

className="
relative
flex
h-64
w-64
items-center
justify-center
rounded-full
border
border-cyan-300/30
bg-gradient-to-br
from-cyan-400/20
via-purple-600/40
to-black
shadow-[0_0_120px_rgba(168,85,247,.7)]
backdrop-blur-3xl
"


>


{/* Inner rings */}

<div className="
absolute
h-48
w-48
rounded-full
border
border-purple-400/30
"/>


<div className="
absolute
h-32
w-32
rounded-full
border
border-cyan-300/30
"/>



{/* Message bubbles inside orb */}

<div className="
absolute
top-12
left-14
h-5
w-5
rounded-full
bg-white
shadow-lg
"/>


<div className="
absolute
bottom-16
right-16
h-8
w-8
rounded-full
bg-cyan-300/60
"/>


<div className="
absolute
bottom-20
left-20
h-3
w-3
bg-purple-300
rounded-full
"/>


<span className="
text-5xl
font-bold
">

Flux

</span>


</motion.div>




<motion.h1

initial={{
opacity:0,
y:40
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:1
}}

className="
mt-12
text-7xl
font-bold
tracking-tight
"

>

In2Flux

</motion.h1>



<motion.p

initial={{
opacity:0
}}

animate={{
opacity:1
}}

transition={{
delay:0.5
}}

className="
mt-6
max-w-2xl
text-xl
text-zinc-300
"

>

A living AI companion that remembers your journey,
connects your thoughts, and helps you understand yourself.

</motion.p>




<Link href="/flux">

<motion.button

whileHover={{
scale:1.1
}}

whileTap={{
scale:.95
}}

className="
mt-14
rounded-full
bg-gradient-to-r
from-purple-500
via-cyan-400
to-blue-500
px-12
py-5
text-xl
font-bold
shadow-[0_0_40px_rgba(34,211,238,.5)]
"

>

Enter Flux

</motion.button>

</Link>



</section>


</main>

);

}