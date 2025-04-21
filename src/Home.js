import React from 'react';

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center text-white px-4"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <header className="w-full max-w-6xl py-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-wide">LootClub</h1>
        <nav className="space-x-6">
          <a href="/login" className="hover:underline">Login</a>
          <a href="/signup" className="hover:underline">Sign Up</a>
        </nav>
      </header>

      <main className="text-center mt-20">
        <h2 className="text-6xl md:text-8xl font-extrabold mb-4 animate-glow text-shadow-xl">
          LOOTCLUB
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-20">
          Giveaway esclusivi, Challenge settimanali, Marketplace di item, mod e contenuti segreti. LootClub è il tuo spazio gamer.
        </p>
      </main>

      <div className="mt-auto mb-16">
        <a
          href="/signup"
          className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-xl text-xl font-bold shadow-lg transition transform hover:scale-105"
        >
          Iscriviti Ora
        </a>
      </div>

      <footer className="mt-12 text-sm text-gray-300">
        © {new Date().getFullYear()} LootClub. Tutti i diritti riservati.
      </footer>
    </div>
  );
}
