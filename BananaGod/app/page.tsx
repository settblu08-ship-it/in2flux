"use client";

import { useEffect, useState } from "react";

const TWITTER_URL = "https://x.com/bananagodcoin?s=11";
const TELEGRAM_URL = "https://t.me/+chVKxdDU2bpjN2Qx";

/*
  ADD THESE AFTER THE COIN LAUNCHES.
*/
const PUMP_URL = "";
const CONTRACT_ADDRESS = "";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  async function copyContract() {
    if (!CONTRACT_ADDRESS) return;

    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      console.log("Could not copy contract");
    }
  }

  return (
    <main className="site-shell">

      {/* =====================================================
          BACKGROUND ATMOSPHERE
      ===================================================== */}

      <div className="ambient-background">
        <div className="ambient-orb orb-one" />
        <div className="ambient-orb orb-two" />
        <div className="ambient-orb orb-three" />

        <div className="gold-dust dust-one" />
        <div className="gold-dust dust-two" />
        <div className="gold-dust dust-three" />
        <div className="gold-dust dust-four" />
        <div className="gold-dust dust-five" />
      </div>


      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>

        <a href="#home" className="brand">

          <div className="brand-banana">
            🍌
          </div>

          <div>
            <div className="brand-name">
              BANANA GOD
            </div>

            <div className="brand-symbol">
              $BGOD
            </div>
          </div>

        </a>


        <nav className="desktop-nav">

          <a
            href="#home"
            className="active"
          >
            HOME
          </a>

          <a href="#about">
            ABOUT
          </a>

          <a href="#tokenomics">
            TOKENOMICS
          </a>

          <a href="#roadmap">
            ROADMAP
          </a>

          <a href="#community">
            COMMUNITY
          </a>

        </nav>


        <div className="nav-actions">

          {PUMP_URL ? (
            <a
              href={PUMP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="gold-button nav-buy"
            >
              BUY $BGOD
            </a>
          ) : (
            <a
              href="#tokenomics"
              className="gold-button nav-buy"
            >
              BUY $BGOD
            </a>
          )}

        </div>

      </header>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        id="home"
        className="hero"
      >

        <div className="hero-content">

          <div className="solana-pill">
            <span className="solana-icon">≋</span>
            ON SOLANA
          </div>


          <h1>

            <span className="gold-heading">
              WORSHIP
            </span>

            <br />

            <span className="gold-heading">
              THE BANANA.
            </span>

            <br />

            <span className="white-heading">
              BUILD THE LEGEND.
            </span>

          </h1>


          <p className="hero-description">
            Banana God is a community-powered
            meme coin on Solana, here to bring
            good vibes, big memes, and divine
            gains to the chosen ones.
          </p>


          <div className="hero-buttons">

            {PUMP_URL ? (
              <a
                href={PUMP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-button large-button"
              >
                BUY $BGOD
                <span>↗</span>
              </a>
            ) : (
              <a
                href="#tokenomics"
                className="gold-button large-button"
              >
                BUY $BGOD
                <span>↗</span>
              </a>
            )}


            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="outline-button large-button"
            >
              JOIN TELEGRAM
              <span>↗</span>
            </a>

          </div>


          <div className="hero-features">

            <Feature
              icon="♢"
              title="FAIR LAUNCH"
            />

            <Feature
              icon="♙"
              title="100% COMMUNITY"
              subtitle="OWNED"
            />

            <Feature
              icon="≋"
              title="BUILT ON"
              subtitle="SOLANA"
            />

          </div>

        </div>


        {/* HERO ART */}

        <div className="hero-art">

          <div className="hero-halo" />

          <div className="temple-light light-left" />
          <div className="temple-light light-right" />

          <div className="hero-image">

            <div className="hero-image-placeholder">

              <div className="god-halo" />

              <div className="god-banana">
                🍌
              </div>

              <div className="god-throne">
                ♛
              </div>

            </div>

          </div>

          <div className="hero-smoke smoke-one" />
          <div className="hero-smoke smoke-two" />

        </div>

      </section>


      {/* =====================================================
          STATS
      ===================================================== */}

      <section className="stats-section">

        <div className="stats-card">

          <Stat
            value="0%"
            label="TAX"
          />

          <Stat
            value="100%"
            label="LIQUIDITY LOCKED"
          />

          <Stat
            value="COMMUNITY"
            label="DRIVEN"
          />

          <Stat
            value="NO DEV"
            label="WALLET"
          />

        </div>

      </section>


      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section
        id="about"
        className="about-section section"
      >

        <div className="about-copy">

          <div className="eyebrow">
            ★ &nbsp; ABOUT BANANA GOD
          </div>

          <h2>
            NOT JUST A MEME.
            <br />
            <span>
              A MOVEMENT.
            </span>
          </h2>

          <p>
            Banana God was born from the memes,
            but built for the community. No insiders.
            No dev wallet. Just believers, builders,
            and banana warriors on a mission to
            take over Solana.
          </p>

          <a
            href="#community"
            className="outline-button learn-button"
          >
            LEARN MORE
            <span>↗</span>
          </a>

        </div>


        <div className="about-art">

          <div className="mountain-art">

            <div className="mountain-sun" />

            <div className="mountain">
              ▲
            </div>

            <div className="mountain-banana">
              🍌
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          TOKENOMICS
      ===================================================== */}

      <section
        id="tokenomics"
        className="section"
      >

        <div className="tokenomics-card">

          <div className="section-label">
            ◉ &nbsp; TOKENOMICS
          </div>


          <div className="tokenomics-grid">

            <div className="donut-wrapper">

              <div className="donut">

                <div className="donut-center">
                  🍌
                </div>

              </div>

            </div>


            <div className="allocation-list">

              <Allocation
                color="yellow"
                name="LIQUIDITY"
                percentage="60%"
              />

              <Allocation
                color="green"
                name="MARKETING"
                percentage="20%"
              />

              <Allocation
                color="blue"
                name="COMMUNITY REWARDS"
                percentage="10%"
              />

              <Allocation
                color="orange"
                name="TEAM (LOCKED)"
                percentage="10%"
              />

            </div>


            <div className="contract-box">

              <div className="contract-label">
                CONTRACT ADDRESS
              </div>

              <div className="contract-value">

                <span>
                  {CONTRACT_ADDRESS
                    ? CONTRACT_ADDRESS
                    : "Coming after launch"}
                </span>

                <button
                  onClick={copyContract}
                  disabled={!CONTRACT_ADDRESS}
                  className="copy-button"
                >
                  {copied ? "✓" : "▣"}
                </button>

              </div>


              <a
                href={
                  CONTRACT_ADDRESS
                    ? `https://solscan.io/token/${CONTRACT_ADDRESS}`
                    : "#"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="solscan-button"
              >
                VIEW ON SOLSCAN
                <span>→</span>
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          ROADMAP
      ===================================================== */}

      <section
        id="roadmap"
        className="roadmap-section section"
      >

        <div className="section-heading">

          <div className="eyebrow">
            THE ASCENSION
          </div>

          <h2>
            THE ROAD TO
            <span> BANANA GOD.</span>
          </h2>

          <p>
            One jungle. One community. One legendary banana.
          </p>

        </div>


        <div className="roadmap-grid">

          <RoadmapCard
            phase="01"
            title="THE AWAKENING"
            text="Banana God launches. The community gathers. The first memes begin to spread."
            active
          />

          <RoadmapCard
            phase="02"
            title="THE JUNGLE"
            text="Community growth, raids, contests, collaborations and relentless meme warfare."
          />

          <RoadmapCard
            phase="03"
            title="THE EMPIRE"
            text="Expand the Banana God universe and build something the jungle won't forget."
          />

        </div>

      </section>


      {/* =====================================================
          COMMUNITY
      ===================================================== */}

      <section
        id="community"
        className="community-section section"
      >

        <div className="community-card">

          <div className="community-content">

            <div className="eyebrow">
              ♛ &nbsp; JOIN THE CULT
            </div>

            <h2>
              THE BANANA GOD
              <br />
              AWAITS YOU.
            </h2>

            <h3>
              WILL YOU ANSWER THE CALL?
            </h3>


            <div className="social-row">

              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="social-button"
              >
                ✈
              </a>

              <a
                href={TWITTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="social-button"
              >
                𝕏
              </a>

              {PUMP_URL && (
                <a
                  href={PUMP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-button"
                >
                  ↗
                </a>
              )}

            </div>

          </div>


          <div className="community-art">

            <div className="community-halo" />

            <div className="cool-banana">
              🍌
            </div>

            <div className="pixel-glasses">
              ▰ ▰
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer>

        <div className="footer-brand">

          <span>
            🍌
          </span>

          BANANA GOD

        </div>

        <div className="footer-middle">
          $BGOD • SOLANA
        </div>

        <div className="footer-links">

          <a
            href={TWITTER_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            𝕏
          </a>

          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            ✈
          </a>

        </div>

      </footer>

    </main>
  );
}


/* =========================================================
   COMPONENTS
========================================================= */

function Feature({
  icon,
  title,
  subtitle,
}: {
  icon: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="feature">

      <div className="feature-icon">
        {icon}
      </div>

      <div>
        <strong>
          {title}
        </strong>

        {subtitle && (
          <small>
            {subtitle}
          </small>
        )}
      </div>

    </div>
  );
}


function Stat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="stat">

      <strong>
        {value}
      </strong>

      <span>
        {label}
      </span>

    </div>
  );
}


function Allocation({
  color,
  name,
  percentage,
}: {
  color: string;
  name: string;
  percentage: string;
}) {
  return (
    <div className="allocation">

      <div className={`allocation-dot ${color}`} />

      <span>
        {name}
      </span>

      <strong>
        {percentage}
      </strong>

    </div>
  );
}


function RoadmapCard({
  phase,
  title,
  text,
  active = false,
}: {
  phase: string;
  title: string;
  text: string;
  active?: boolean;
}) {
  return (
    <div className={`roadmap-card ${active ? "roadmap-active" : ""}`}>

      <div className="phase">
        PHASE {phase}
      </div>

      <h3>
        {title}
      </h3>

      <p>
        {text}
      </p>

    </div>
  );
}