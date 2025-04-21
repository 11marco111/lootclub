import React, { useState } from 'react';
import { auth, googleProvider, facebookProvider } from './firebase';
import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithCustomToken
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { FaGoogle, FaFacebook, FaGamepad, FaSteam } from 'react-icons/fa';

export default function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSocialLogin = (provider) => {
    signInWithPopup(auth, provider)
      .then(() => navigate('/dashboard'))
      .catch((err) => {
        console.error(err);
        alert('Errore durante il login.');
      });
  };

  const handleCustomOAuth = async (providerName) => {
    try {
      const res = await fetch(`https://lootclub-backend.onrender.com/api/oauth/${providerName}`);
      const data = await res.json();
      await signInWithCustomToken(auth, data.token);
      navigate('/dashboard');
    } catch (err) {
      console.error(err);
      alert(`Errore durante il login con ${providerName}`);
    }
  };

  const handleEmailSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center px-4 bg-black/50">
      <h1 className="text-3xl font-bold mb-4">Registrati</h1>
      <form onSubmit={handleEmailSignup} className="w-full max-w-sm mb-6">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full mb-4 p-3 rounded bg-gray-800 text-white"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full mb-4 p-3 rounded bg-gray-800 text-white"
        />
        <button
          type="submit"
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded"
        >
          Registrati con Email
        </button>
      </form>

      <p className="mb-2 text-gray-300">oppure continua con</p>
      <div className="flex gap-6 text-4xl">
        <button onClick={() => handleSocialLogin(googleProvider)} className="hover:scale-110 transition">
          <FaGoogle className="text-red-400" />
        </button>
        <button onClick={() => handleSocialLogin(facebookProvider)} className="hover:scale-110 transition">
          <FaFacebook className="text-blue-500" />
        </button>
        <button onClick={() => handleCustomOAuth('epic')} className="hover:scale-110 transition">
          <FaGamepad className="text-purple-400" title="Epic Games" />
        </button>
        <button onClick={() => handleCustomOAuth('arc')} className="hover:scale-110 transition">
          <FaSteam className="text-gray-300" title="Arc Games" />
        </button>
      </div>
    </div>
  );
}
