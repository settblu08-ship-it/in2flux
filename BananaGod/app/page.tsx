"use client";

import { useState } from "react";

const TWITTER_URL = "https://x.com/bananagodcoin?s=11";
const TELEGRAM_URL = "https://t.me/+chVKxdDU2bpjN2Qx";

// These will be added immediately after launch.
const PUMP_FUN_URL = "";
const CONTRACT_ADDRESS = "";

export default function Home() {
  const [copied, setCopied] = useState(false);

  async function copyContract() {
    if (!CONTRACT_ADDRESS) return;

    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">

      {/* =========================================================
          AMBIENT BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">

        <div className="absolute left-1/2 top-[-260px] h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-yellow-400/[0.08] blur-[150px]" />

        <div className="absolute -left-48 top-[35%] h-[500px] w-[500px] rounded-full bg-orange-500/[0.06] blur-[140px]" />

        <div className="absolute -right-48 top-[60%] h-[550px] w-[550px] rounded-full bg-yellow-300/[0.05] blur-[150px]" />

        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:80px_80px]" />

      </div>


      {/* =========================================================
          NAVIGATION
      ========================================================= */}

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.06] bg-black/60 backdrop-blur-2xl">

        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">

          <a
            href="#top"
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-yellow-400/20 bg-yellow-400/10 text-2xl shadow-[0_0_30px_rgba(250,204,21,0.08)]">
              🍌
            </div>

            <div>
              <div className="text-sm font-black tracking-[0.18em] text-yellow-400">
                BANANA GOD
              </div>

              <div className="text-[9px] font-bold tracking-[0.3em] text-white/30">
                $BGOD
              </div>
            </div>
          </a>


          <nav className="hidden items-center gap-8 text-sm font-semibold text-white/60 md:flex">

            <a
              href="#about"
              className="transition hover:text-yellow-400"
            >
              About
            </a>

            <a
              href="#token"
              className="transition hover:text-yellow-400"
            >
              Token
            </a>

            <a
              href="#roadmap"
              className="transition hover:text-yellow-400"
            >
              Roadmap
            </a>

            <a
              href={TWITTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-yellow-400"
            >
              X
            </a>

          </nav>


          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-yellow-400 px-5 py-2.5 text-xs font-black text-black shadow-[0_0_25px_rgba(250,204,21,0.15)] transition duration-300 hover:scale-105 hover:bg-yellow-300"
          >
            JOIN THE JUNGLE
          </a>

        </div>

      </header>


      {/* =========================================================
          HERO
      ========================================================= */}

      <section
        id="top"
        className="relative z-10 flex min-h-screen items-center justify-center px-6 pb-20 pt-32"
      >

        <div className="mx-auto w-full max-w-6xl text-center">

          <div className="mb-8 flex justify-center">

            <div className="relative">

              <div className="absolute inset-0 rounded-full bg-yellow-400/20 blur-[70px]" />

              <div className="relative flex h-36 w-36 items-center justify-center rounded-full border border-yellow-400/20 bg-gradient-to-b from-yellow-400/10 to-transparent shadow-[0_0_80px_rgba(250,204,21,0.08)] sm:h-44 sm:w-44">

                <div className="animate-pulse text-8xl sm:text-9xl">
                  🍌
                </div>

              </div>

            </div>

          </div>


          <div className="mb-5 text-xs font-black uppercase tracking-[0.45em] text-yellow-400/70">
            THE CHOSEN BANANA
          </div>


          <h1 className="mx-auto max-w-5xl text-6xl font-black leading-[0.9] tracking-[-0.05em] sm:text-8xl md:text-[9rem]">

            <span className="bg-gradient-to-b from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              BANANA
            </span>

            <br />

            <span className="text-white">
              GOD
            </span>

          </h1>


          <div className="mt-6 text-xl font-black tracking-[0.3em] text-yellow-400 sm:text-2xl">
            $BGOD
          </div>


          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/50 sm:text-lg sm:leading-8">
            The jungle has a ruler.
            <br />
            The banana has spoken.
            <br />
            <span className="font-bold text-white/80">
              All hail Banana God.
            </span>
          </p>


          {/* HERO BUTTONS */}

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

            {PUMP_FUN_URL ? (
              <a
                href={PUMP_FUN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-w-[190px] items-center justify-center gap-2 rounded-full bg-yellow-400 px-7 py-4 text-sm font-black text-black shadow-[0_0_40px_rgba(250,204,21,0.18)] transition duration-300 hover:scale-105 hover:bg-yellow-300"
              >
                🍌 BUY $BGOD
              </a>
            ) : (
              <div className="flex min-w-[190px] cursor-default items-center justify-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/[0.06] px-7 py-4 text-sm font-black text-yellow-400/60">
                🍌 LAUNCHING SOON
              </div>
            )}


            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-w-[190px] items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-7 py-4 text-sm font-black text-white transition duration-300 hover:border-yellow-400/30 hover:bg-yellow-400/[0.08] hover:text-yellow-400"
            >
              💬 TELEGRAM
            </a>


            <a
              href={TWITTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-w-[190px] items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-7 py-4 text-sm font-black text-white transition duration-300 hover:border-white/30 hover:bg-white/[0.08]"
            >
              𝕏 FOLLOW ON X
            </a>

          </div>


          {/* STATUS */}

          <div className="mx-auto mt-14 flex w-fit items-center gap-3 rounded-full border border-white/[0.06] bg-white/[0.025] px-5 py-3 text-xs text-white/40">

            <span className="h-2 w-2 animate-pulse rounded-full bg-yellow-400" />

            BANANA GOD IS AWAKENING

          </div>

        </div>

      </section>


      {/* =========================================================
          ABOUT
      ========================================================= */}

      <section
        id="about"
        className="relative z-10 px-6 py-32"
      >

        <div className="mx-auto max-w-6xl">

          <div className="mx-auto max-w-3xl text-center">

            <div className="text-xs font-black uppercase tracking-[0.4em] text-yellow-400">
              THE LEGEND
            </div>

            <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">
              WHY BANANA GOD?
            </h2>

            <p className="mt-7 text-base leading-8 text-white/45 sm:text-lg">
              Banana God is a community-driven meme coin built on Solana.
              There is no complicated mythology to memorize and no corporate
              boardroom behind the banana.
            </p>

            <p className="mt-5 text-base leading-8 text-white/45 sm:text-lg">
              Just memes, community, chaos, and a jungle looking for its king.
            </p>

          </div>


          <div className="mt-16 grid gap-5 md:grid-cols-3">

            {[
              {
                icon: "🍌",
                title: "THE MEME",
                text: "One banana. One god. Infinite possibilities.",
              },
              {
                icon: "🌴",
                title: "THE JUNGLE",
                text: "A community growing one believer at a time.",
              },
              {
                icon: "👑",
                title: "THE GOD",
                text: "There can only be one ruler of the jungle.",
              },
            ].map((item) => (

              <div
                key={item.title}
                className="group rounded-3xl border border-white/[0.07] bg-white/[0.025] p-8 text-center backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-yellow-400/20 hover:bg-yellow-400/[0.035]"
              >

                <div className="text-5xl transition duration-500 group-hover:scale-110">
                  {item.icon}
                </div>

                <h3 className="mt-6 text-lg font-black tracking-[0.15em]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/40">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          TOKEN
      ========================================================= */}

      <section
        id="token"
        className="relative z-10 px-6 py-32"
      >

        <div className="mx-auto max-w-6xl">

          <div className="text-center">

            <div className="text-xs font-black uppercase tracking-[0.4em] text-yellow-400">
              THE TOKEN
            </div>

            <h2 className="mt-5 text-4xl font-black sm:text-6xl">
              $BGOD
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/40">
              Everything you need to know about the Banana God token.
            </p>

          </div>


          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {[
              ["TICKER", "$BGOD"],
              ["CHAIN", "SOLANA"],
              ["LAUNCH", "PUMP.FUN"],
              ["STATUS", "PRE-LAUNCH"],
            ].map(([label, value]) => (

              <div
                key={label}
                className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-7 text-center"
              >

                <div className="text-[10px] font-black tracking-[0.3em] text-white/30">
                  {label}
                </div>

                <div className="mt-3 text-lg font-black text-yellow-400">
                  {value}
                </div>

              </div>

            ))}

          </div>


          {/* CONTRACT */}

          <div className="mt-5 rounded-3xl border border-white/[0.07] bg-white/[0.025] p-6 sm:p-8">

            <div className="text-center">

              <div className="text-[10px] font-black tracking-[0.3em] text-white/30">
                CONTRACT ADDRESS
              </div>

              <div className="mt-4 flex flex-col gap-3 sm:flex-row">

                <div className="flex min-h-[52px] flex-1 items-center justify-center overflow-hidden rounded-xl border border-white/[0.06] bg-black/40 px-4 text-xs text-white/30 sm:justify-start">
                  {CONTRACT_ADDRESS
                    ? CONTRACT_ADDRESS
                    : "Contract address will appear after launch"}
                </div>

                <button
                  onClick={copyContract}
                  disabled={!CONTRACT_ADDRESS}
                  className="min-h-[52px] rounded-xl bg-yellow-400 px-7 text-xs font-black text-black transition hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-30"
                >
                  {copied ? "COPIED ✓" : "COPY ADDRESS"}
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          ROADMAP
      ========================================================= */}

      <section
        id="roadmap"
        className="relative z-10 px-6 py-32"
      >

        <div className="mx-auto max-w-6xl">

          <div className="text-center">

            <div className="text-xs font-black uppercase tracking-[0.4em] text-yellow-400">
              THE JOURNEY
            </div>

            <h2 className="mt-5 text-4xl font-black sm:text-6xl">
              ROADMAP
            </h2>

          </div>


          <div className="mx-auto mt-16 max-w-4xl">

            <div className="space-y-5">

              <RoadmapCard
                number="01"
                title="THE AWAKENING"
                description="Launch Banana God. Establish the community. Spread the first wave of banana memes."
                active
              />

              <RoadmapCard
                number="02"
                title="THE JUNGLE GROWS"
                description="Community events, meme contests, raids, collaborations, and expansion across the crypto jungle."
              />

              <RoadmapCard
                number="03"
                title="THE BANANA EMPIRE"
                description="Continue building the Banana God community and explore new ways for the jungle to grow together."
              />

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          COMMUNITY
      ========================================================= */}

      <section className="relative z-10 px-6 py-32">

        <div className="mx-auto max-w-5xl">

          <div className="relative overflow-hidden rounded-[2.5rem] border border-yellow-400/15 bg-gradient-to-b from-yellow-400/[0.08] to-transparent px-6 py-20 text-center sm:px-12">

            <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-yellow-400/10 blur-[100px]" />

            <div className="relative">

              <div className="text-7xl">
                🍌
              </div>

              <div className="mt-7 text-xs font-black uppercase tracking-[0.4em] text-yellow-400">
                THE JUNGLE IS OPEN
              </div>

              <h2 className="mt-5 text-4xl font-black sm:text-6xl">
                JOIN THE COMMUNITY
              </h2>

              <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/40 sm:text-base">
                Banana God is built around its community.
                Join the conversation, bring your memes, and enter the jungle.
              </p>


              <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">

                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-yellow-400 px-9 py-4 text-sm font-black text-black shadow-[0_0_40px_rgba(250,204,21,0.15)] transition duration-300 hover:scale-105 hover:bg-yellow-300"
                >
                  💬 JOIN TELEGRAM
                </a>

                <a
                  href={TWITTER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/10 bg-white/[0.04] px-9 py-4 text-sm font-black transition duration-300 hover:border-white/30 hover:bg-white/[0.08]"
                >
                  𝕏 FOLLOW ON X
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          FOOTER
      ========================================================= */}

      <footer className="relative z-10 border-t border-white/[0.06] px-6 py-12">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">

          <div>

            <div className="flex items-center justify-center gap-3 sm:justify-start">

              <div className="text-3xl">
                🍌
              </div>

              <div>

                <div className="text-sm font-black tracking-[0.2em] text-yellow-400">
                  BANANA GOD
                </div>

                <div className="mt-1 text-[9px] font-bold tracking-[0.3em] text-white/25">
                  $BGOD • SOLANA
                </div>

              </div>

            </div>

          </div>


          <div className="text-xs text-white/25">
            All hail Banana God.
          </div>


          <div className="flex gap-5 text-xs font-bold text-white/40">

            <a
              href={TWITTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-yellow-400"
            >
              X
            </a>

            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-yellow-400"
            >
              Telegram
            </a>

          </div>

        </div>

      </footer>

    </main>
  );
}


/* =============================================================
   ROADMAP COMPONENT
============================================================= */

function RoadmapCard({
  number,
  title,
  description,
  active = false,
}: {
  number: string;
  title: string;
  description: string;
  active?: boolean;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-3xl border p-7 transition duration-500 sm:p-9 ${
        active
          ? "border-yellow-400/20 bg-yellow-400/[0.045]"
          : "border-white/[0.07] bg-white/[0.025] hover:border-yellow-400/15"
      }`}
    >

      <div className="flex flex-col gap-6 sm:flex-row sm:items-start">

        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-sm font-black ${
            active
              ? "bg-yellow-400 text-black"
              : "border border-white/10 bg-white/[0.04] text-yellow-400"
          }`}
        >
          {number}
        </div>


        <div>

          <div className="text-xs font-black tracking-[0.25em] text-yellow-400">
            PHASE {number}
          </div>

          <h3 className="mt-2 text-2xl font-black">
            {title}
          </h3>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/40">
            {description}
          </p>

        </div>

      </div>

    </div>
  );
}