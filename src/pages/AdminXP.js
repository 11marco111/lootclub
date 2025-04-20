import React, { useState } from 'react';
import { db } from '../firebase/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

function AdminXP() {
  const [uid, setUid] = useState('');
  const [xp, setXp] = useState('');
  const [message, setMessage] = useState('');

  const handleAssignXP = async (e) => {
    e.preventDefault();
    if (!uid || !xp) return;

    try {
      const userRef = doc(db, 'users', uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        const currentXP = userSnap.data().xp || 0;
        await setDoc(userRef, { ...userSnap.data(), xp: currentXP + parseInt(xp) }, { merge: true });
        setMessage(`✅ Aggiunti ${xp} XP all'utente ${uid}`);
      } else {
        await setDoc(userRef, { xp: parseInt(xp) });
        setMessage(`🆕 Utente creato con ${xp} XP`);
      }

      setUid('');
      setXp('');
    } catch (err) {
      console.error(err);
      setMessage('❌ Errore durante l'aggiornamento degli XP');
    }
  };

  return (
    <div className="p-8 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Pannello XP Admin</h2>
      <form onSubmit={handleAssignXP} className="space-y-4">
        <input
          className="w-full px-4 py-2 border rounded"
          type="text"
          placeholder="UID utente"
          value={uid}
          onChange={(e) => setUid(e.target.value)}
          required
        />
        <input
          className="w-full px-4 py-2 border rounded"
          type="number"
          placeholder="XP da assegnare"
          value={xp}
          onChange={(e) => setXp(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Assegna XP
        </button>
      </form>
      {message && <div className="mt-4 text-center">{message}</div>}
    </div>
  );
}

export default AdminXP;
