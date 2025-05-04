import React from 'react';
import '../css/SignInPage.css';
import { useNavigate } from 'react-router-dom';

function SignInPage() {
  const navigate = useNavigate();
  const handleSignIn = (event) => {
    event.preventDefault();
    navigate('/checkout');
  }
  return (
    <div className="main-container">
      <div className="card-container">
        <img src="/TeslaLogo.png" alt="Tesla Logo" className="logo-2" />
        <h1>Sign in to your Tesla Account</h1>
        <form onSubmit={handleSignIn}>
          <div className="input-container">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="input-container">
            <div className="label-row">
              <label htmlFor="password">Password</label> <a href="/forgot-password" className="link">Forgot Password?</a>
            </div>
            <input
              type="password"
              id="password"
              placeholder="Password"
              required
            />
          </div>
          <button type="submit" className="sign-in-button">Sign In</button>
        </form>
        <div className="footer">
          <label>Don't have an account?</label> <a href="/create-account" className="link">Create Account</a>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
