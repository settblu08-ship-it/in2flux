"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#000",
        color: "#fff",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          marginBottom: "1rem",
        }}
      >
        In2Flux
      </h1>

      <p
        style={{
          marginBottom: "2rem",
          opacity: 0.8,
        }}
      >
        Enter the flow of thought.
      </p>

      <button
        onClick={() => router.push("/flux")}
        style={{
          padding: "14px 28px",
          fontSize: "18px",
          borderRadius: "12px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Enter Flux
      </button>
    </main>
  );
}