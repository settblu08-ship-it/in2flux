"use client";

import { useState } from "react";

export default function Home() {
  const [copied, setCopied] = useState(false);

  const twitterLink = "https://x.com/bananagodcoin?s=11";
  const telegramLink = "https://t.me/+chVKxdDU2bpjN2Qx";

  // Add these after Banana God launches
  const pumpFunLink = "";
  const contractAddress = "";

  const copyContract = async () => {
    if (!contractAddress) return;

    await navigator.clipboard.writeText(contractAddress);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-950/40 via-black to-black" />

        <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-yellow-500/10 blur-[120px]" />

        <div className="absolute left-10 top-1/3 h-64 w-64 rounded-full bg-orange-500/10 blur-[100px]" />

        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-yellow-400/10 blur-[120px]" />
      </div>

      {/* Navigation */}
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-yellow-400/10 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🍌</span>
            <span className="font-black tracking-wide text-yellow-400">
              BANANA GOD
            </span>
          </div>

          <div className="hidden items-center gap-6 text-sm font-medium md:flex">
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
              href={telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-yellow-400 px-5 py-2 font-bold text-black transition hover:scale-105"
            >
              Telegram
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 pt-24 text-center">
        <div className="mb-6 animate-pulse text-7xl md:text-9xl">
          🍌
        </div>

        <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-yellow-400">
          The Chosen Banana
        </p>

        <h1 className="text-6xl font-black tracking-tight text-yellow-400 md:text-8xl">
          BANANA GOD
        </h1>

        <p className="mt-3 text-2xl font-bold text-white md:text-3xl">
          $BGOD
        </p>

        <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-gray-300 md:text-xl">
          The jungle has a ruler.
          <br />
          The banana has spoken.
          <br />
          <span className="font-bold text-yellow-400">
            All hail Banana God.
          </span>
        </p>

        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          {pumpFunLink ? (
            <a
              href={pumpFunLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-yellow-400 px-8 py-4 font-black text-black shadow-lg shadow-yellow-400/20 transition hover:scale-105"
            >
              🍌 BUY $BGOD
            </a>
          ) : (
            <button
              disabled
              className="cursor-not-allowed rounded-full bg-yellow-400/30 px-8 py-4 font-black text-yellow-200"
            >
              🍌 LAUNCHING SOON
            </button>
          )}

          <a
            href={telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-yellow-400/50 bg-yellow-400/5 px-8 py-4 font-black text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
          >
            💬 JOIN TELEGRAM
          </a>

          <a
            href={twitterLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/20 px-8 py-4 font-black transition hover:border-white hover:bg-white hover:text-black"
          >
            𝕏 FOLLOW US
          </a>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="mx-auto max-w-5xl px-6 py-24 text-center"
      >
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
          The Legend
        </p>

        <h2 className="text-4xl font-black md:text-6xl">
          WHY BANANA GOD?
        </h2>

        <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-gray-400">
          Banana God is a community-driven meme coin built on Solana.
          No complicated story. No boring corporate presentation.
          Just bananas, memes, community, and a jungle looking for its king.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl border border-yellow-400/10 bg-white/[0.03] p-8 backdrop-blur">
            <div className="text-4xl">🍌</div>
            <h3 className="mt-4 text-xl font-bold">THE MEME</h3>
            <p className="mt-3 text-gray-400">
              One banana. One god. Infinite memes.
            </p>
          </div>

          <div className="rounded-3xl border border-yellow-400/10 bg-white/[0.03] p-8 backdrop-blur">
            <div className="text-4xl">🌴</div>
            <h3 className="mt-4 text-xl font-bold">THE JUNGLE</h3>
            <p className="mt-3 text-gray-400">
              A community growing one believer at a time.
            </p>
          </div>

          <div className="rounded-3xl border border-yellow-400/10 bg-white/[0.03] p-8 backdrop-blur">
            <div className="text-4xl">👑</div>
            <h3 className="mt-4 text-xl font-bold">THE GOD</h3>
            <p className="mt-3 text-gray-400">
              There can only be one ruler of the jungle.
            </p>
          </div>
        </div>
      </section>

      {/* Token */}
      <section
        id="token"
        className="mx-auto max-w-5xl px-6 py-24"
      >
        <div className="rounded-[2rem] border border-yellow-400/10 bg-white/[0.03] p-8 md:p-12">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
              Token
            </p>

            <h2 className="mt-3 text-4xl font-black md:text-6xl">
              $BGOD
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-black/50 p-6 text-center">
              <p className="text-sm text-gray-500">TICKER</p>
              <p className="mt-2 text-xl font-black text-yellow-400">
                $BGOD
              </p>
            </div>

            <div className="rounded-2xl bg-black/50 p-6 text-center">
              <p className="text-sm text-gray-500">CHAIN</p>
              <p className="mt-2 text-xl font-black">SOLANA</p>
            </div>

            <div className="rounded-2xl bg-black/50 p-6 text-center">
              <p className="text-sm text-gray-500">STATUS</p>
              <p className="mt-2 text-xl font-black text-yellow-400">
                PRE-LAUNCH
              </p>
            </div>
          </div>

          {/* Contract */}
          <div className="mt-6 rounded-2xl bg-black/50 p-6">
            <p className="text-center text-sm text-gray-500">
              CONTRACT ADDRESS
            </p>

            <div className="mt-3 flex flex-col gap-3 sm:flex-row">
              <div className="flex-1 overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-center text-sm text-gray-500">
                {contractAddress || "Contract address will appear after launch"}
              </div>

              <button
                onClick={copyContract}
                disabled={!contractAddress}
                className="rounded-xl bg-yellow-400 px-5 py-3 font-bold text-black disabled:cursor-not-allowed disabled:opacity-40"
              >
                {copied ? "COPIED!" : "COPY"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section
        id="roadmap"
        className="mx-auto max-w-5xl px-6 py-24"
      >
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
            The Journey
          </p>

          <h2 className="mt-3 text-4xl font-black md:text-6xl">
            ROADMAP
          </h2>
        </div>

        <div className="mt-12 space-y-5">
          <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7">
            <p className="text-sm font-bold text-yellow-400">
              PHASE 01
            </p>

            <h3 className="mt-2 text-2xl font-black">
              THE AWAKENING
            </h3>

            <p className="mt-3 text-gray-400">
              Launch Banana God. Build the community. Spread the first
              wave of banana memes.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
            <p className="text-sm font-bold text-yellow-400">
              PHASE 02
            </p>

            <h3 className="mt-2 text-2xl font-black">
              THE JUNGLE GROWS
            </h3>

            <p className="mt-3 text-gray-400">
              Community events, meme contests, raids, collaborations,
              and expansion across the crypto jungle.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
            <p className="text-sm font-bold text-yellow-400">
              PHASE 03
            </p>

            <h3 className="mt-2 text-2xl font-black">
              BANANA EMPIRE
            </h3>

            <p className="mt-3 text-gray-400">
              Continue building the Banana God community and expand the
              ecosystem with the community.
            </p>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="px-6 py-24 text-center">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-yellow-400/20 bg-gradient-to-b from-yellow-400/10 to-transparent p-10 md:p-16">
          <div className="text-6xl">🍌</div>

          <h2 className="mt-6 text-4xl font-black md:text-6xl">
            JOIN THE JUNGLE
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-gray-400">
            The community is where Banana God lives.
            Come early. Bring memes.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-yellow-400 px-8 py-4 font-black text-black transition hover:scale-105"
            >
              💬 TELEGRAM
            </a>

            <a
              href={twitterLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-8 py-4 font-black transition hover:bg-white hover:text-black"
            >
              𝕏 TWITTER
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-10 text-center">
        <div className="text-3xl">🍌</div>

        <p className="mt-3 font-black tracking-widest text-yellow-400">
          ALL HAIL BANANA GOD
        </p>

        <p className="mt-3 text-sm text-gray-600">
          $BGOD • SOLANA
        </p>
      </footer>
    </main>
  );
}