"use client";

const nodes = [
  {
    id: 1,
    title: "Identity",
    top: "45%",
    left: "50%",
    color: "#f59e0b",
    delay: "0s",
  },
  {
    id: 2,
    title: "Career",
    top: "22%",
    left: "28%",
    color: "#3b82f6",
    delay: "1s",
  },
  {
    id: 3,
    title: "Relationships",
    top: "22%",
    left: "72%",
    color: "#ec4899",
    delay: "2s",
  },
  {
    id: 4,
    title: "Philosophy",
    top: "72%",
    left: "28%",
    color: "#ffffff",
    delay: "3s",
  },
  {
    id: 5,
    title: "Goals",
    top: "72%",
    left: "72%",
    color: "#22c55e",
    delay: "4s",
  },
];

export default function OutlinePage() {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-black text-white">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black" />

      {/* Stars */}
      <div className="absolute inset-0">
        {[...Array(120)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white opacity-30 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Title */}
      <div className="absolute top-8 left-8 z-20">
        <h1 className="text-5xl font-bold">Outline</h1>
        <p className="mt-2 text-zinc-400">
          A living map of your thinking.
        </p>
      </div>

      {/* Connection Lines */}
      <svg className="absolute inset-0 h-full w-full">
        <line
          x1="50%"
          y1="45%"
          x2="28%"
          y2="22%"
          stroke="#3b82f6"
          strokeWidth="2"
          opacity="0.4"
        />
        <line
          x1="50%"
          y1="45%"
          x2="72%"
          y2="22%"
          stroke="#ec4899"
          strokeWidth="2"
          opacity="0.4"
        />
        <line
          x1="50%"
          y1="45%"
          x2="28%"
          y2="72%"
          stroke="#ffffff"
          strokeWidth="2"
          opacity="0.4"
        />
        <line
          x1="50%"
          y1="45%"
          x2="72%"
          y2="72%"
          stroke="#22c55e"
          strokeWidth="2"
          opacity="0.4"
        />
      </svg>

      {/* Nodes */}
      {nodes.map((node) => (
        <div
          key={node.id}
          style={{
            top: node.top,
            left: node.left,
            transform: "translate(-50%, -50%)",
            backgroundColor: `${node.color}33`,
            borderColor: node.color,
            boxShadow: `0 0 35px ${node.color}`,
            animationDelay: node.delay,
          }}
          className="
            absolute
            flex
            h-32
            w-32
            cursor-pointer
            items-center
            justify-center
            rounded-full
            border
            text-center
            text-lg
            font-semibold
            transition-all
            duration-300
            hover:scale-110
            hover:shadow-2xl
            animate-pulse
          "
        >
          {node.title}
        </div>
      ))}

    </main>
  );
}