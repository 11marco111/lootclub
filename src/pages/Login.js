import React, { useState } from 'react';
import { auth } from '../firebase/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const userData = {
        uid: user.uid,
        email: user.email,
        isAdmin: user.email === "admin@lootclub.dev"
      };
      localStorage.setItem('user', JSON.stringify(userData));
      navigate('/dashboard');
    } catch (err) {
      setError('Email o password errati.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Login LootClub</h1>
      <form onSubmit={handleLogin} className="w-full max-w-sm space-y-4">
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
        {error && <div className="text-red-600">{error}</div>}
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
        >
          Accedi
        </button>
      </form>
      <p className="text-sm text-center mt-4">
        Non hai un account? <a href="/register" className="text-blue-600 underline">Registrati</a>
      </p>
    </div>
  );
}

export default Login;
