import React, { useState } from 'react';
import { auth } from '../firebase/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setEmail('');
      setPassword('');
      navigate('/login');
    } catch (err) {
      setError('Errore nella registrazione. Email già in uso?');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <h1 className="text-2xl font-bold mb-4">Registrati su LootClub</h1>
      <form onSubmit={handleRegister} className="w-full max-w-sm space-y-4">
        <input
          className="w-full px-4 py-2 border rounded"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div className="relative">
          <input
            className="w-full px-4 py-2 border rounded"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span
            className="absolute right-3 top-2 cursor-pointer text-sm text-blue-600"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Nascondi" : "Mostra"}
          </span>
        </div>
        {error && <div className="text-red-600 text-sm">{error}</div>}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Registrati
        </button>
      </form>
      <p className="text-sm text-center mt-4">
        Hai già un account? <a href="/login" className="text-blue-600 underline">Accedi</a>
      </p>
    </div>
  );
}

export default Register;
