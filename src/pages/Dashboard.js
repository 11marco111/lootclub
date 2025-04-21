import React from 'react';
import { useNavigate } from 'react-router-dom';
import XPSystem from './XPSystem';

function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="p-8 text-center text-xl font-semibold">
      <h1 className="text-2xl mb-4">Benvenuto nella tua Dashboard!</h1>
      {user && <XPSystem uid={user.uid} />}
      <button
        onClick={handleLogout}
        className="mt-6 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
