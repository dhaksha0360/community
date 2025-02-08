import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/LoginRegister.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5004/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (!response.ok) {
        setError(data.error);
      } else {
        localStorage.setItem("token", data.token);
        window.location.href = "/donation";  // Redirect to donation page after successful login
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("Server error. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="auth-page">
        <div className="auth-container">
          <div className="auth-box">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
              {error && <p className="error-message">{error}</p>}
              <div className="form-links">
                <Link to="/forgot-password">Forgot Password?</Link>
              </div>
              <button type="submit" className="auth-btn">Login</button>
            </form>
            <p>Don't have an account? <Link to="/register">Register here</Link></p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Login;