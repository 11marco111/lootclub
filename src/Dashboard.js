import React from 'react';

export default function Dashboard() {
  return (
    <div className="min-h-screen p-10 bg-gray-950 text-white">
      <h1 className="text-4xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-900 p-6 rounded-xl shadow-md">🎁 I tuoi Giveaway</div>
        <div className="bg-gray-900 p-6 rounded-xl shadow-md">🏆 Missioni completate</div>
        <div className="bg-gray-900 p-6 rounded-xl shadow-md">📦 Inventario</div>
        <div className="bg-gray-900 p-6 rounded-xl shadow-md">📰 Notizie esclusive</div>
      </div>
    </div>
  );
}