import React from 'react';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut().then(() => navigate('/signup'));
  };

  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center bg-black/50">
      <h1 className="text-4xl font-bold mb-6">Benvenuto su LootClub 🎮</h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}
