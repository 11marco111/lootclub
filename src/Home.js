import React from 'react';

export default function Home() {
  return (
    <div className="h-screen w-full bg-cover bg-center" style={{ backgroundImage: "url('/bg.jpg')" }}>
      <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50 text-white text-center">
        <h1 className="text-5xl font-extrabold drop-shadow-lg">LOOTCLUB</h1>
        <p className="text-xl mt-4 max-w-xl">Giveaway esclusivi, challenge con premi, marketplace e contenuti unici per veri gamer.</p>
        <a href="/signup" className="mt-6 bg-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition">Iscriviti Ora</a>
      </div>
    </div>
  );
}