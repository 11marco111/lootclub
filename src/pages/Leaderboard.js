import React, { useEffect, useState } from 'react';
import { db } from '../firebase/firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

function Leaderboard() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const usersRef = collection(db, 'users');
        const q = query(usersRef, orderBy('xp', 'desc'));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc, index) => ({
          id: doc.id,
          rank: index + 1,
          ...doc.data()
        }));
        setPlayers(data);
      } catch (error) {
        console.error('Errore nel recupero della leaderboard:', error);
      }
    };

    fetchLeaderboard();
  }, []);

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">🏆 Classifica Giocatori</h1>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-2">#</th>
            <th className="p-2">Giocatore</th>
            <th className="p-2 text-right">XP</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player.id} className="border-t">
              <td className="p-2">{player.rank}</td>
              <td className="p-2">{player.username || player.email || 'Anonimo'}</td>
              <td className="p-2 text-right">{player.xp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
