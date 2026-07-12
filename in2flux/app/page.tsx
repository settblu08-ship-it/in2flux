export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        <h1 className="text-6xl font-bold mb-6">
          In2Flux
        </h1>

        <p className="text-xl text-gray-300 mb-8">
          Understand your thoughts. Transform your decisions.
        </p>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
          <textarea
            placeholder="What's on your mind?"
            className="w-full h-32 bg-transparent text-white placeholder-gray-400 outline-none resize-none"
          />

          <button className="mt-4 w-full rounded-xl bg-white text-black py-3 font-semibold hover:opacity-80">
            Enter Flux
          </button>
        </div>

        <p className="mt-8 text-sm text-gray-500">
          An AI thinking companion built to help you discover patterns within yourself.
        </p>
      </div>
    </main>
  );
}