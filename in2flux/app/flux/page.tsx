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

const [message,setMessage]=useState("");
const [messages,setMessages]=useState<Message[]>([]);
const [loading,setLoading]=useState(false);
const [orbColor,setOrbColor]=useState("#a855f7");


async function sendMessage(){

if(!message.trim()) return;

const userMessage=message;

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

const response=await fetch("/api/flux",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
message:userMessage
})
});

const data=await response.json();

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

}
finally{
setLoading(false);
}

}



return (

<main className="
relative
min-h-screen
overflow-hidden
text-white
flex
flex-col
">


{/* Mystical sanctuary */}

<div className="
absolute
inset-0
bg-gradient-to-b
from-amber-950
via-purple-950
to-indigo-950
"/>


{/* Soft room lighting */}

<motion.div

animate={{
scale:[1,1.15,1],
opacity:[.25,.5,.25]
}}

transition={{
duration:10,
repeat:Infinity
}}

className="
absolute
top-0
left-1/2
-translate-x-1/2
h-[800px]
w-[800px]
rounded-full
bg-purple-400/20
blur-[160px]
"

/>



{/* Floating aura particles */}

{Array.from({length:100}).map((_,i)=>(

<motion.div

key={i}

className="
absolute
rounded-full
bg-white/70
"

style={{
width:Math.random()*4+1,
height:Math.random()*4+1,
left:`${Math.random()*100}%`,
top:`${Math.random()*100}%`
}}

animate={{
y:[0,-40,0],
opacity:[.2,1,.2]
}}

transition={{
duration:5+Math.random()*5,
repeat:Infinity
}}

/>

))}





<header className="
relative
z-10
text-center
pt-10
">

<h1 className="
text-6xl
font-bold
tracking-widest
">

In2Flux

</h1>

<p className="
mt-3
text-zinc-200
">

Enter the space where thoughts become understood

</p>

</header>







{/* Soul Orb */}

<section className="
relative
z-10
flex
justify-center
py-12
">


<motion.div

animate={{
scale:loading
?[1,1.5,1]
:[1,1.2,1]
}}

transition={{
duration:loading?1.5:6,
repeat:Infinity
}}

className="
absolute
h-[450px]
w-[450px]
rounded-full
blur-[90px]
"

style={{
backgroundColor:orbColor,
opacity:.35
}}

/>



<motion.div

animate={{
rotate:360,
y:[0,-15,0]
}}

transition={{
rotate:{
duration:40,
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
h-72
w-72
rounded-full
flex
items-center
justify-center
overflow-hidden
border
border-white/40
shadow-2xl
"

style={{

background:
`
radial-gradient(
circle at 30% 25%,
white,
${orbColor},
#090014
)
`,

boxShadow:
`
0 0 80px ${orbColor},
0 0 160px ${orbColor}
`

}}

>


{/* Aura rings */}

<div className="
absolute
h-64
w-64
rounded-full
border
border-white/20
"/>


<div className="
absolute
h-48
w-48
rounded-full
border
border-white/20
"/>


{/* Energy bubbles */}

<div className="
absolute
top-14
left-20
h-7
w-7
rounded-full
bg-white
opacity-80
"/>


<div className="
absolute
bottom-20
right-16
h-10
w-10
rounded-full
bg-white/30
"/>



<span className="
relative
text-5xl
font-bold
">

Flux

</span>


</motion.div>


</section>






{/* Aura controls */}

<div className="
relative
z-10
flex
justify-center
gap-5
flex-wrap
">

{colors.map(item=>(

<button

key={item.name}

onClick={()=>setOrbColor(item.color)}

className="
h-12
w-12
rounded-full
transition
"

style={{
background:item.color,
boxShadow:`0 0 30px ${item.color}`
}}

/>

))}

</div>








{/* Conversation */}

<section className="
relative
z-10
flex-1
overflow-y-auto
px-6
mt-10
space-y-6
">


{messages.map((msg,index)=>(

<motion.div

key={index}

initial={{
opacity:0,
y:30
}}

animate={{
opacity:1,
y:0
}}

className={`
max-w-3xl
rounded-[30px]
p-6
backdrop-blur-xl
border
${
msg.role==="user"
?
"ml-auto bg-white/20 border-white/30"
:
"mr-auto bg-purple-500/20 border-purple-300/30"
}
`}

>

<p className="text-xs opacity-60">

{msg.role==="user"?"You":"Flux"}

</p>


<p className="
mt-3
leading-8
whitespace-pre-wrap
">

{msg.content}

</p>

</motion.div>

))}


{loading && (

<div className="
text-center
text-zinc-200
animate-pulse
">

Flux is feeling the thought...

</div>

)}


</section>






<footer className="
relative
z-10
p-6
">


<div className="
rounded-[35px]
border
border-white/20
bg-white/10
backdrop-blur-2xl
p-4
flex
gap-3
">


<textarea

value={message}

onChange={(e)=>setMessage(e.target.value)}

placeholder="Share a thought with Flux..."

className="
flex-1
bg-transparent
outline-none
resize-none
"

/>


<button

onClick={sendMessage}

disabled={loading}

className="
rounded-3xl
px-7
bg-white
text-black
font-bold
"

>

Connect

</button>


</div>



<div className="
grid
grid-cols-2
gap-4
mt-5
">


<Link href="/outline">

<div className="
rounded-3xl
bg-white/10
border
border-white/20
p-5
text-center
">

Outline

</div>

</Link>


<Link href="/timeline">

<div className="
rounded-3xl
bg-white/10
border
border-white/20
p-5
text-center
">

Timeline

</div>

</Link>


</div>


</footer>



</main>

);

}