"use client";

import { useEffect, useState } from "react";

const TWITTER_URL = "https://x.com/bananagodcoin?s=11";
const TELEGRAM_URL = "https://t.me/+chVKxdDU2bpjN2Qx";

// Add these after the coin launches.
const PUMP_FUN_URL = "";
const CONTRACT_ADDRESS = "";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const copyContract = async () => {
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
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#030303] text-white">

      {/* =========================================================
          ANIMATED BACKGROUND
      ========================================================= */}

      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(250,204,21,0.13),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(234,88,12,0.08),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(250,204,21,0.07),transparent_30%)]" />

        <div
          className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/10 blur-[140px]"
          style={{
            animation: "pulseGlow 7s ease-in-out infinite",
          }}
        />

        <div
          className="absolute -left-40 top-[20%] h-[350px] w-[350px] rounded-full bg-orange-500/10 blur-[120px]"
          style={{
            animation: "driftOne 14s ease-in-out infinite",
          }}
        />

        <div
          className="absolute -right-40 bottom-[10%] h-[450px] w-[450px] rounded-full bg-yellow-500/10 blur-[140px]"
          style={{
            animation: "driftTwo 17s ease-in-out infinite",
          }}
        />

        <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] bg-[size:70px_70px]" />

        {mounted &&
          Array.from({ length: 28 }).map((_, i) => (
            <div
              key={i}
              className="absolute h-1 w-1 rounded-full bg-yellow-300/50"
              style={{
                left: `${(i * 37) % 100}%`,
                top: `${(i * 61) % 100}%`,
                animation: `particleFloat ${
                  5 + (i % 5)
                }s ease-in-out infinite`,
                animationDelay: `${(i % 7) * 0.6}s`,
              }}
            />
          ))}
      </div>


      {/* =========================================================
          NAVIGATION
      ========================================================= */}

      <header className="fixed left-0 right-0 top-0 z-50">

        <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between px-5">

          <a
            href="#top"
            className="group flex items-center gap-3 rounded-full border border-white/10 bg-black/50 px-4 py-2 backdrop-blur-xl transition hover:border-yellow-400/30"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-yellow-400/10 text-xl transition group-hover:scale-110">
              🍌
            </div>

            <div>
              <div className="text-xs font-black tracking-[0.2em] text-yellow-400">
                BANANA GOD
              </div>

              <div className="text-[8px] tracking-[0.35em] text-white/30">
                $BGOD
              </div>
            </div>
          </a>


          <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-black/50 p-1.5 backdrop-blur-xl md:flex">

            <a
              href="#about"
              className="rounded-full px-5 py-2 text-xs font-bold text-white/50 transition hover:bg-white/5 hover:text-white"
            >
              ABOUT
            </a>

            <a
              href="#token"
              className="rounded-full px-5 py-2 text-xs font-bold text-white/50 transition hover:bg-white/5 hover:text-white"
            >
              TOKEN
            </a>

            <a
              href="#roadmap"
              className="rounded-full px-5 py-2 text-xs font-bold text-white/50 transition hover:bg-white/5 hover:text-white"
            >
              ROADMAP
            </a>

          </div>


          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-full border border-yellow-400/30 bg-yellow-400/10 px-5 py-3 text-[10px] font-black tracking-wider text-yellow-400 backdrop-blur-xl transition hover:scale-105 hover:bg-yellow-400 hover:text-black"
          >
            JOIN THE JUNGLE →
          </a>

        </div>

      </header>


      {/* =========================================================
          HERO
      ========================================================= */}

      <section
        id="top"
        className="relative z-10 flex min-h-screen items-center justify-center px-5 pb-20 pt-32"
      >

        <div className="mx-auto w-full max-w-6xl text-center">

          <div className="relative mx-auto mb-10 h-[300px] w-[300px] sm:h-[380px] sm:w-[380px]">

            {/* Outer glow */}

            <div
              className="absolute inset-0 rounded-full bg-yellow-400/10 blur-[90px]"
              style={{
                animation: "pulseGlow 5s ease-in-out infinite",
              }}
            />

            {/* Outer orbital ring */}

            <div
              className="absolute inset-[10px] rounded-full border border-yellow-400/10"
              style={{
                animation: "spinSlow 22s linear infinite",
              }}
            />

            <div
              className="absolute inset-[35px] rounded-full border border-yellow-400/[0.08] border-dashed"
              style={{
                animation: "spinReverse 30s linear infinite",
              }}
            />

            {/* Floating particles around banana */}

            <div className="absolute left-[8%] top-[25%] text-xl opacity-50">
              ✦
            </div>

            <div className="absolute right-[12%] top-[18%] text-sm text-yellow-300/60">
              ✦
            </div>

            <div className="absolute bottom-[22%] left-[15%] text-sm text-yellow-300/40">
              •
            </div>

            <div className="absolute bottom-[20%] right-[14%] text-xl text-yellow-300/50">
              ✦
            </div>

            {/* Center */}

            <div
              className="absolute left-1/2 top-1/2 flex h-48 w-48 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-yellow-400/20 bg-gradient-to-b from-yellow-400/[0.12] to-black/40 shadow-[0_0_100px_rgba(250,204,21,0.12)] backdrop-blur-xl sm:h-60 sm:w-60"
              style={{
                animation: "heroFloat 5s ease-in-out infinite",
              }}
            >

              <div className="absolute inset-3 rounded-full border border-white/[0.04]" />

              <div className="relative text-[105px] drop-shadow-[0_0_30px_rgba(250,204,21,0.25)] sm:text-[135px]">
                🍌
              </div>

            </div>

          </div>


          <div
            className="mb-5 text-[10px] font-black uppercase tracking-[0.55em] text-yellow-400/60 sm:text-xs"
            style={{
              animation: "fadeUp 1s ease-out both",
            }}
          >
            THE CHOSEN BANANA
          </div>


          <h1
            className="text-6xl font-black leading-[0.82] tracking-[-0.07em] sm:text-8xl md:text-[10rem]"
            style={{
              animation: "fadeUp 1s ease-out 0.15s both",
            }}
          >
            <span className="bg-gradient-to-b from-yellow-100 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              BANANA
            </span>

            <br />

            <span className="text-white">
              GOD
            </span>
          </h1>


          <div
            className="mt-7 text-lg font-black tracking-[0.45em] text-yellow-400 sm:text-2xl"
            style={{
              animation: "fadeUp 1s ease-out 0.3s both",
            }}
          >
            $BGOD
          </div>


          <p
            className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/40 sm:text-base"
            style={{
              animation: "fadeUp 1s ease-out 0.45s both",
            }}
          >
            The jungle has a ruler.
            <br />
            The banana has spoken.
            <br />
            <span className="font-bold text-white/75">
              All hail Banana God.
            </span>
          </p>


          {/* =====================================================
              FLOATING LINK BUBBLES
          ===================================================== */}

          <div
            className="mx-auto mt-10 flex max-w-xl flex-wrap items-center justify-center gap-3"
            style={{
              animation: "fadeUp 1s ease-out 0.6s both",
            }}
          >

            <SocialBubble
              href={TWITTER_URL}
              icon="𝕏"
              label="X"
              external
            />

            <SocialBubble
              href={TELEGRAM_URL}
              icon="✈"
              label="TELEGRAM"
              external
            />

            {PUMP_FUN_URL ? (
              <SocialBubble
                href={PUMP_FUN_URL}
                icon="🍌"
                label="BUY $BGOD"
                external
                primary
              />
            ) : (
              <div className="group flex cursor-default items-center gap-2 rounded-full border border-yellow-400/10 bg-yellow-400/[0.04] px-5 py-3 text-[10px] font-black tracking-wider text-yellow-400/40 backdrop-blur-xl">
                🍌 LAUNCHING SOON
              </div>
            )}

          </div>


          {/* STATUS */}

          <div
            className="mx-auto mt-9 flex w-fit items-center gap-3 rounded-full border border-white/[0.06] bg-white/[0.025] px-5 py-2.5 text-[9px] font-bold tracking-[0.2em] text-white/30 backdrop-blur-xl"
            style={{
              animation: "fadeUp 1s ease-out 0.75s both",
            }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-yellow-400" />
            </span>

            BANANA GOD IS AWAKENING
          </div>

        </div>

      </section>


      {/* =========================================================
          ABOUT
      ========================================================= */}

      <section
        id="about"
        className="relative z-10 px-5 py-32"
      >

        <div className="mx-auto max-w-6xl">

          <SectionHeading
            eyebrow="THE LEGEND"
            title="WHY BANANA GOD?"
            description="Not every banana is created equal."
          />


          <div className="mt-16 grid gap-5 md:grid-cols-3">

            <GlassCard
              icon="🍌"
              title="THE MEME"
              text="One banana. One god. Infinite memes. The internet needed a ruler."
            />

            <GlassCard
              icon="🌴"
              title="THE JUNGLE"
              text="A community-powered jungle where believers, raiders, and meme creators come together."
            />

            <GlassCard
              icon="👑"
              title="THE GOD"
              text="There can only be one ruler. The banana has chosen."
            />

          </div>

        </div>

      </section>


      {/* =========================================================
          TOKEN
      ========================================================= */}

      <section
        id="token"
        className="relative z-10 px-5 py-32"
      >

        <div className="mx-auto max-w-6xl">

          <SectionHeading
            eyebrow="THE TOKEN"
            title="$BGOD"
            description="Everything you need to know about Banana God."
          />


          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <TokenCard
              label="TICKER"
              value="$BGOD"
            />

            <TokenCard
              label="NETWORK"
              value="SOLANA"
            />

            <TokenCard
              label="LAUNCH"
              value="PUMP.FUN"
            />

            <TokenCard
              label="STATUS"
              value="PRE-LAUNCH"
            />

          </div>


          {/* Contract */}

          <div className="mt-5 rounded-3xl border border-white/[0.07] bg-white/[0.025] p-6 backdrop-blur-xl sm:p-8">

            <div className="text-center">

              <div className="text-[9px] font-black uppercase tracking-[0.35em] text-white/25">
                CONTRACT ADDRESS
              </div>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">

                <div className="flex min-h-[55px] flex-1 items-center overflow-hidden rounded-2xl border border-white/[0.06] bg-black/30 px-5 text-xs text-white/25">
                  {CONTRACT_ADDRESS
                    ? CONTRACT_ADDRESS
                    : "Contract address will appear after launch"}
                </div>

                <button
                  onClick={copyContract}
                  disabled={!CONTRACT_ADDRESS}
                  className="min-h-[55px] rounded-2xl bg-yellow-400 px-7 text-[10px] font-black tracking-wider text-black transition hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-25"
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
        className="relative z-10 px-5 py-32"
      >

        <div className="mx-auto max-w-5xl">

          <SectionHeading
            eyebrow="THE JOURNEY"
            title="ROADMAP"
            description="The jungle grows one step at a time."
          />


          <div className="mt-16 space-y-4">

            <Roadmap
              number="01"
              title="THE AWAKENING"
              description="Launch Banana God. Establish the community. Spread the first wave of banana memes."
              active
            />

            <Roadmap
              number="02"
              title="THE JUNGLE GROWS"
              description="Community events, meme contests, raids, collaborations, and expansion across the crypto jungle."
            />

            <Roadmap
              number="03"
              title="THE BANANA EMPIRE"
              description="Build beyond the launch. Expand the community and create new experiences around the Banana God universe."
            />

          </div>

        </div>

      </section>


      {/* =========================================================
          COMMUNITY CTA
      ========================================================= */}

      <section className="relative z-10 px-5 py-32">

        <div className="mx-auto max-w-5xl">

          <div className="relative overflow-hidden rounded-[2.5rem] border border-yellow-400/15 bg-gradient-to-b from-yellow-400/[0.09] via-yellow-400/[0.025] to-transparent px-6 py-24 text-center backdrop-blur-xl sm:px-12">

            <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-yellow-400/10 blur-[120px]" />

            <div className="relative">

              <div
                className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-yellow-400/20 bg-yellow-400/[0.07] text-6xl"
                style={{
                  animation: "heroFloat 4s ease-in-out infinite",
                }}
              >
                🍌
              </div>


              <div className="mt-8 text-[9px] font-black uppercase tracking-[0.45em] text-yellow-400">
                THE JUNGLE IS OPEN
              </div>


              <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">
                JOIN THE JUNGLE
              </h2>


              <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-white/40">
                The community is where Banana God lives.
                Bring your memes. Bring your energy.
                Enter the jungle early.
              </p>


              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">

                <SocialBubble
                  href={TELEGRAM_URL}
                  icon="✈"
                  label="TELEGRAM"
                  external
                  primary
                />

                <SocialBubble
                  href={TWITTER_URL}
                  icon="𝕏"
                  label="FOLLOW ON X"
                  external
                />

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          FOOTER
      ========================================================= */}

      <footer className="relative z-10 border-t border-white/[0.06] px-5 py-12">

        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-7 sm:flex-row">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400/10 text-xl">
              🍌
            </div>

            <div>

              <div className="text-xs font-black tracking-[0.2em] text-yellow-400">
                BANANA GOD
              </div>

              <div className="mt-1 text-[8px] tracking-[0.3em] text-white/20">
                $BGOD • SOLANA
              </div>

            </div>

          </div>


          <div className="text-center text-[9px] tracking-[0.2em] text-white/20">
            ALL HAIL BANANA GOD
          </div>


          <div className="flex gap-5">

            <a
              href={TWITTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-white/30 transition hover:text-yellow-400"
            >
              𝕏
            </a>

            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-white/30 transition hover:text-yellow-400"
            >
              ✈
            </a>

          </div>

        </div>

      </footer>


      {/* =========================================================
          ANIMATION STYLES
      ========================================================= */}

      <style jsx global>{`

        @keyframes pulseGlow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.45;
          }

          50% {
            transform: scale(1.2);
            opacity: 0.8;
          }
        }

        @keyframes driftOne {
          0%, 100% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(120px, 80px, 0);
          }
        }

        @keyframes driftTwo {
          0%, 100% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(-100px, -70px, 0);
          }
        }

        @keyframes particleFloat {
          0%, 100% {
            transform: translateY(0px);
            opacity: 0.15;
          }

          50% {
            transform: translateY(-35px);
            opacity: 0.8;
          }
        }

        @keyframes heroFloat {
          0%, 100% {
            transform: translateY(0px) rotate(-1deg);
          }

          50% {
            transform: translateY(-14px) rotate(1deg);
          }
        }

        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spinReverse {
          from {
            transform: rotate(360deg);
          }

          to {
            transform: rotate(0deg);
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(25px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
          }
        }

      `}</style>

    </main>
  );
}


/* =============================================================
   SOCIAL BUBBLE
============================================================= */

function SocialBubble({
  href,
  icon,
  label,
  external = false,
  primary = false,
}: {
  href: string;
  icon: string;
  label: string;
  external?: boolean;
  primary?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`
        group flex items-center gap-2 rounded-full border px-5 py-3 text-[10px] font-black tracking-wider backdrop-blur-xl transition-all duration-300
        ${
          primary
            ? "border-yellow-400/30 bg-yellow-400/10 text-yellow-400 hover:scale-105 hover:bg-yellow-400 hover:text-black hover:shadow-[0_0_35px_rgba(250,204,21,0.18)]"
            : "border-white/10 bg-white/[0.035] text-white/55 hover:scale-105 hover:border-yellow-400/25 hover:bg-yellow-400/[0.07] hover:text-yellow-400"
        }
      `}
    >
      <span className="text-sm transition-transform duration-300 group-hover:scale-125">
        {icon}
      </span>

      {label}

      <span className="text-[9px] opacity-30 transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </a>
  );
}


/* =============================================================
   SECTION HEADING
============================================================= */

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">

      <div className="text-[9px] font-black uppercase tracking-[0.45em] text-yellow-400">
        {eyebrow}
      </div>

      <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">
        {title}
      </h2>

      <p className="mt-5 text-sm text-white/30">
        {description}
      </p>

    </div>
  );
}


/* =============================================================
   GLASS CARD
============================================================= */

function GlassCard({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.025] p-8 text-center backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-yellow-400/20 hover:bg-yellow-400/[0.035]">

      <div className="absolute left-1/2 top-0 h-32 w-32 -translate-x-1/2 rounded-full bg-yellow-400/0 blur-[60px] transition-all duration-500 group-hover:bg-yellow-400/10" />

      <div className="relative">

        <div className="text-5xl transition duration-500 group-hover:scale-110">
          {icon}
        </div>

        <h3 className="mt-6 text-sm font-black tracking-[0.2em] text-yellow-400">
          {title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-white/35">
          {text}
        </p>

      </div>

    </div>
  );
}


/* =============================================================
   TOKEN CARD
============================================================= */

function TokenCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="group rounded-2xl border border-white/[0.07] bg-white/[0.025] p-7 text-center backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-yellow-400/20">

      <div className="text-[9px] font-black tracking-[0.3em] text-white/25">
        {label}
      </div>

      <div className="mt-3 text-lg font-black text-yellow-400">
        {value}
      </div>

    </div>
  );
}


/* =============================================================
   ROADMAP
============================================================= */

function Roadmap({
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
      className={`group relative overflow-hidden rounded-3xl border p-7 backdrop-blur-xl transition duration-500 sm:p-9 ${
        active
          ? "border-yellow-400/20 bg-yellow-400/[0.045]"
          : "border-white/[0.07] bg-white/[0.025] hover:border-yellow-400/15 hover:bg-white/[0.04]"
      }`}
    >

      <div className="flex gap-6">

        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-xs font-black ${
            active
              ? "bg-yellow-400 text-black"
              : "border border-white/10 bg-white/[0.04] text-yellow-400"
          }`}
        >
          {number}
        </div>

        <div>

          <div className="text-[9px] font-black tracking-[0.3em] text-yellow-400">
            PHASE {number}
          </div>

          <h3 className="mt-2 text-xl font-black sm:text-2xl">
            {title}
          </h3>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/35">
            {description}
          </p>

        </div>

      </div>

    </div>
  );
}