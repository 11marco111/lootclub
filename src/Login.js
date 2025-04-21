import React, { useState } from 'react';
import { auth, provider } from './firebase';
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error(error);
    }
  };

  const signInWithEmail = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
      <h1 className="text-4xl font-bold mb-6">Login LootClub</h1>
      <form onSubmit={signInWithEmail} className="space-y-4 w-full max-w-xs">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 text-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 text-black"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="w-full bg-blue-600 py-2 rounded text-white">
          Accedi
        </button>
      </form>
      <p className="mt-4">oppure</p>
      <button onClick={signInWithGoogle} className="mt-2 bg-red-600 py-2 px-4 rounded">
        Accedi con Google
      </button>
    </div>
  );
};

export default Login;
