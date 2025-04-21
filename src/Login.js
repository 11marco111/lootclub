import React from 'react';
import { auth, provider } from './firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then(() => {
        navigate('/dashboard');
      })
      .catch((error) => {
        console.error(error);
        alert('Errore durante il login');
      });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">Accedi a LootClub</h1>
      <button
        onClick={handleGoogleLogin}
        className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded text-lg font-semibold shadow-lg"
      >
        Accedi con Google
      </button>
    </div>
  );
}
