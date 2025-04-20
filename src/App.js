import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';
import Leaderboard from './pages/Leaderboard';
import Register from './pages/Register';

function App() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Navigate to="/dashboard" /> : <Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/admin" element={user && user.isAdmin ? <Admin /> : <Navigate to="/login" />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="*" element={<div style={{ padding: "2rem", textAlign: "center" }}>Pagina non trovata</div>} />
      </Routes>
    </Router>
  );
}

export default App;
