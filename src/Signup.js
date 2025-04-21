import React, { useState } from 'react';

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
      <div className="bg-gray-900 text-white p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6">Join LootClub</h2>
        <input type="email" placeholder="Email" className="w-full p-3 mb-4 rounded bg-gray-800 text-white" />
        <div className="relative mb-4">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            className="w-full p-3 rounded bg-gray-800 text-white"
          />
          <button
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 text-sm text-blue-400"
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
        <button className="w-full bg-green-600 hover:bg-green-700 transition rounded p-3 font-semibold">
          Sign Up
        </button>
        <p className="text-center mt-4 text-sm">
          Already have an account? <a href="/login" className="text-blue-400">Login</a>
        </p>
      </div>
    </div>
  );
}