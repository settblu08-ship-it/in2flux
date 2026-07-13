"use client";

const nodes = [
  { id: 1, title: "Identity", top: "45%", left: "50%", color: "#f59e0b" },
  { id: 2, title: "Career", top: "20%", left: "30%", color: "#3b82f6" },
  { id: 3, title: "Relationships", top: "22%", left: "72%", color: "#ec4899" },
  { id: 4, title: "Philosophy", top: "72%", left: "28%", color: "#ffffff" },
  { id: 5, title: "Goals", top: "72%", left: "72%", color: "#22c55e" },
];

export default function OutlinePage() {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-black text-white">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black" />

      {/* Title */}
      <div className="absolute top-8 left-8 z-20">
        <h1 className="text-5xl font-bold">Outline</h1>
        <p className="text-zinc-400 mt-2">
          Your thinking map is beginning to take shape.
        </p>
      </div>

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
            boxShadow: `0 0 30px ${node.color}`,
          }}
          className="absolute flex h-32 w-32 cursor-pointer items-center justify-center rounded-full border text-center text-lg font-semibold transition-all duration-300 hover:scale-110 hover:shadow-2xl"
        >
          {node.title}
        </div>
      ))}

    </main>
  );
}