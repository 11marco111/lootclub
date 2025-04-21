import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import Dashboard from './Dashboard';
import MissionSystem from './MissionSystem';
import Leaderboard from './Leaderboard';

function App() {
  return (
    <div
      style={{
        backgroundImage: "url('/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
        overflow: "auto",
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/missions" element={<MissionSystem />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;