import React, { useEffect, useState } from 'react';
import { db } from '../firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';

function XPSystem({ uid }) {
  const [xp, setXp] = useState(0);

  useEffect(() => {
    const fetchXP = async () => {
      try {
        const userRef = doc(db, 'users', uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          setXp(userSnap.data().xp || 0);
        }
      } catch (error) {
        console.error('Errore nel recupero XP:', error);
      }
    };

    if (uid) fetchXP();
  }, [uid]);

  const getLevel = (xp) => Math.floor(Math.sqrt(xp / 100) + 1); // Esempio formula livello
  const getBadge = (level) => {
    if (level >= 20) return '🔥 LEGGENDA';
    if (level >= 10) return '💎 PRO';
    if (level >= 5) return '⭐ INTERMEDIO';
    return '🎯 NOVIZIO';
  };

  const level = getLevel(xp);
  const nextLevelXP = Math.pow(level, 2) * 100;
  const currentLevelXP = Math.pow(level - 1, 2) * 100;
  const progress = ((xp - currentLevelXP) / (nextLevelXP - currentLevelXP)) * 100;

  return (
    <div className="p-4 bg-white rounded shadow max-w-md mx-auto mt-4">
      <h2 className="text-xl font-bold text-center">🎮 Progressione XP</h2>
      <div className="text-center mt-2">Livello: <strong>{level}</strong></div>
      <div className="text-center mb-2">Badge: <span>{getBadge(level)}</span></div>
      <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
        <div
          className="bg-blue-600 h-4"
          style={{ width: progress + '%' }}
        ></div>
      </div>
      <p className="text-center mt-2 text-sm text-gray-600">{xp} XP</p>
    </div>
  );
}

export default XPSystem;
