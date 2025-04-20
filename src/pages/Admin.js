import React from 'react';
import { useNavigate } from 'react-router-dom';

function Admin() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="p-8 text-center text-xl font-semibold">
      Pannello Admin - Accesso Riservato
      <button
        onClick={handleLogout}
        className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
}

export default Admin;
