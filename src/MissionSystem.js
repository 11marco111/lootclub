import React, { useState, useEffect } from 'react';
import { db, auth } from './firebase/firebase';
import { doc, setDoc } from 'firebase/firestore';

const initialMissions = [
  {
    id: 1,
    title: "Gioca 10 partite",
    description: "Completa 10 partite per guadagnare 50 XP.",
    reward: 50,
    completed: false,
    progress: 0,
  },
  {
    id: 2,
    title: "Vinci 5 partite",
    description: "Vinci 5 partite per guadagnare 100 XP.",
    reward: 100,
    completed: false,
    progress: 0,
  },
  {
    id: 3,
    title: "Completa 10 missioni",
    description: "Completa tutte le missioni disponibili per guadagnare un premio speciale.",
    reward: "Premio Speciale",
    completed: false,
    progress: 0,
  }
];

function MissionSystem() {
  const [missionsState, setMissionsState] = useState(initialMissions);
  const [uid, setUid] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) setUid(user.uid);
    });
    return () => unsubscribe();
  }, []);

  const saveMissionProgress = async (uid, missionId, progress) => {
    if (!uid) return;
    const userRef = doc(db, 'users', uid);
    await setDoc(userRef, {
      missions: {
        [missionId]: progress
      }
    }, { merge: true });
  };

  const updateMissionProgress = async (id, currentProgress, totalParts) => {
    const newProgress = Math.min((currentProgress + 1), totalParts);
    const percentage = (newProgress / totalParts) * 100;

    setMissionsState(prevState =>
      prevState.map(mission => 
        mission.id === id 
          ? { ...mission, progress: percentage }
          : mission
      )
    );

    await saveMissionProgress(uid, id, percentage);
  };

  const completeMission = async (id) => {
    setMissionsState(prevState =>
      prevState.map(mission => 
        mission.id === id
          ? { ...mission, completed: true }
          : mission
      )
    );

    await saveMissionProgress(uid, id, 100);
  };

  return (
    <div className="mission-system">
      <h2>Missioni a Premi</h2>
      {missionsState.map(mission => (
        <div key={mission.id} className="mission border p-4 rounded shadow-md mb-4 bg-white">
          <h3 className="text-xl font-bold">{mission.title}</h3>
          <p>{mission.description}</p>
          <p>Progresso: {mission.progress.toFixed(0)}%</p>
          <div className="w-full bg-gray-200 h-2 rounded mb-2">
            <div style={{ width: `${mission.progress}%` }} className="bg-green-500 h-2 rounded"></div>
          </div>
          <button
            className="bg-blue-600 text-white px-4 py-1 rounded mr-2"
            onClick={() => updateMissionProgress(mission.id, mission.progress / 10, 10)}
          >
            Aggiungi Progresso
          </button>
          {!mission.completed ? (
            <button
              className="bg-green-600 text-white px-4 py-1 rounded"
              onClick={() => completeMission(mission.id)}
            >
              Completa Missione
            </button>
          ) : (
            <p className="text-green-700 font-semibold">Completata! 🎉 Premio: {mission.reward}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default MissionSystem;
