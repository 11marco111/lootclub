import React, { useState } from 'react';

const missions = [
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
  const [missionsState, setMissionsState] = useState(missions);

  const updateMissionProgress = (id, completedPart, totalParts) => {
    setMissionsState(prevState =>
      prevState.map(mission => 
        mission.id === id 
          ? { ...mission, progress: (completedPart / totalParts) * 100 }
          : mission
      )
    );
  };

  const completeMission = (id) => {
    setMissionsState(prevState =>
      prevState.map(mission => 
        mission.id === id
          ? { ...mission, completed: true }
          : mission
      )
    );
  };

  return (
    <div className="mission-system">
      <h2>Missioni a Premi</h2>
      {missionsState.map(mission => (
        <div key={mission.id} className="mission">
          <h3>{mission.title}</h3>
          <p>{mission.description}</p>
          <p>Progresso: {mission.progress}%</p>
          <div style={{ width: `${mission.progress}%`, height: '10px', backgroundColor: 'green' }}></div>
          <button onClick={() => updateMissionProgress(mission.id, mission.progress + 1, 10)}>
            Completa parte della missione
          </button>
          {mission.completed ? (
            <p>Missione completata! Premio: {mission.reward}</p>
          ) : (
            <button onClick={() => completeMission(mission.id)}>Completa Missione</button>
          )}
        </div>
      ))}
    </div>
  );
}

export default MissionSystem;
