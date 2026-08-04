export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="text-6xl font-black text-yellow-400 md:text-8xl">
          🍌 BANANA GOD
        </h1>

        <p className="mt-6 max-w-xl text-xl text-gray-300">
          The chosen banana has arrived. A community-powered meme coin
          built on Solana.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#"
            className="rounded-full bg-yellow-400 px-8 py-4 font-bold text-black"
          >
            Buy $BGOD
          </a>

          <a
            href="#"
            className="rounded-full border border-yellow-400 px-8 py-4 font-bold text-yellow-400"
          >
            Join Telegram
          </a>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="text-4xl font-bold text-yellow-400">
          What is Banana God?
        </h2>

        <p className="mt-6 text-lg text-gray-300">
          Banana God is a meme-powered community on Solana.
          No complicated promises. Just memes, community, and banana energy.
        </p>
      </section>

      {/* Token Info */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="text-4xl font-bold text-yellow-400 text-center">
          Token Information
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-yellow-400/30 p-6 text-center">
            <h3 className="font-bold">Ticker</h3>
            <p className="mt-2">$BGOD</p>
          </div>

          <div className="rounded-xl border border-yellow-400/30 p-6 text-center">
            <h3 className="font-bold">Chain</h3>
            <p className="mt-2">Solana</p>
          </div>

          <div className="rounded-xl border border-yellow-400/30 p-6 text-center">
            <h3 className="font-bold">Launch</h3>
            <p className="mt-2">Pump.fun</p>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="text-4xl font-bold text-yellow-400">
          Roadmap
        </h2>

        <div className="mt-8 space-y-4 text-lg">
          <p>🍌 Phase 1 — Launch & Community</p>
          <p>🌴 Phase 2 — Grow the Jungle</p>
          <p>👑 Phase 3 — Banana Empire</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 text-center text-gray-400">
        🍌 ALL HAIL BANANA GOD 🍌
      </footer>
    </main>
  );
}