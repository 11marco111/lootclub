import React from 'react';

export default function Leaderboard() {
  const players = [
    { name: 'Player1', xp: 3400 },
    { name: 'Player2', xp: 2980 },
    { name: 'Player3', xp: 2780 },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <h2 className="text-3xl font-bold mb-6">Classifica</h2>
      <ul className="space-y-3">
        {players.map((player, index) => (
          <li key={index} className="bg-gray-900 p-4 rounded-lg shadow-md flex justify-between">
            <span>{index + 1}. {player.name}</span>
            <span>{player.xp} XP</span>
          </li>
        ))}
      </ul>
    </div>
  );
}