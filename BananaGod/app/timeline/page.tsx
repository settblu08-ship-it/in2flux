"use client";

import { useEffect, useState } from "react";

type Memory = {
  content: string;
  created_at: string;
};

export default function TimelinePage() {
  const [memories, setMemories] = useState<Memory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTimeline() {
      try {
        const res = await fetch("/api/timeline");
        const data = await res.json();
        setMemories(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadTimeline();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-8">
        Timeline
      </h1>

      {loading ? (
        <p className="text-gray-400">
          Loading memories...
        </p>
      ) : memories.length === 0 ? (
        <p className="text-gray-400">
          No memories yet.
        </p>
      ) : (
        <div className="space-y-6">
          {memories.map((memory, index) => (
            <div
              key={index}
              className="border border-cyan-500/30 rounded-xl p-5 bg-white/5"
            >
              <p className="text-xs text-cyan-400 mb-2">
                {new Date(memory.created_at).toLocaleString()}
              </p>

              <p className="whitespace-pre-wrap">
                {memory.content}
              </p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}