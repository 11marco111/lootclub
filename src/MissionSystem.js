import React from 'react';

export default function MissionSystem() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <h2 className="text-3xl font-bold mb-4">Missioni Attive</h2>
      <ul className="space-y-4">
        <li className="bg-gray-900 p-4 rounded-xl shadow">
          Vinci una partita in Warzone - <span className="text-green-400">+500 XP</span>
        </li>
        <li className="bg-gray-900 p-4 rounded-xl shadow">
          Completa 3 missioni giornaliere - <span className="text-green-400">+250 XP</span>
        </li>
      </ul>
    </div>
  );
}