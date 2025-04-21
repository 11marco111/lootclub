
import React, { useState } from "react";
import { auth, googleProvider, facebookProvider } from "./firebase";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
    }
  };

  const handleGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
    }
  };

  const handleFacebook = async () => {
    try {
      await signInWithPopup(auth, facebookProvider);
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-icon">
          <img src="/icon.png" alt="User Icon" />
        </div>
        <h1>LOGIN</h1>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <input
              type="email"
              placeholder="User name"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">LOGIN</button>
        </form>
        <p className="register-link">
          Non hai un account? <a href="/signup">Registrati</a>
        </p>
        <div className="social-login">
          <button onClick={handleGoogle} className="google-button">Google</button>
          <button onClick={handleFacebook} className="facebook-button">Facebook</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
