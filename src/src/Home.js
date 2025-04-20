import React from 'react';

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-white px-4"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <header className="w-full max-w-6xl py-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-wide">LootClub</h1>
        <nav className="space-x-6">
          <a href="#login" className="hover:underline">Login</a>
          <a href="#signup" className="hover:underline">Sign Up</a>
        </nav>
      </header>

      <main className="text-center mt-12">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">Entra nella tua Gaming Community</h2>
        <p className="text-xl max-w-2xl mx-auto mb-8">
          Giveaway esclusivi, Challenge settimanali, Marketplace di item, mod e contenuti segreti. LootClub è il tuo spazio gamer.
        </p>
        <a
          href="#signup"
          className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-xl text-lg font-semibold shadow-lg"
        >
          Iscriviti Ora
        </a>
      </main>

      <footer className="mt-16 text-sm text-gray-300">
        © {new Date().getFullYear()} LootClub. Tutti i diritti riservati.
      </footer>
    </div>
  );
}
