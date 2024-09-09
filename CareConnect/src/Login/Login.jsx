import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import WhiteLogo from "../assets/white-logo.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Login.css";
import GoogleLogo from "../assets/google.png";
import FacebookLogo from "../assets/facebook.png";
import TwitterLogo from "../assets/twitter.png";

const Login = ({ onLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'User1' && password === '123') {
      onLogin();
      navigate('/');
    } else if (username === 'User2' && password === '456') {
      onLogin();
      navigate('/blank');
    } else {
      alert('Login failed');
    }
  };

  return (
    <div className="login-main">
      <div className="overlay-text">
        <img src={WhiteLogo} alt="Logo"/>
      </div>
      <div className="door-panel door-left"></div>
      <div className="door-panel door-right"></div>
      <div className="login-container">
        <div className="login-logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="login-input">
          <p>Login to your account</p>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="username-input-div">
              <input 
                type="username" 
                placeholder="Username (use User1)" 
                value={username}
                onChange={(e) => setusername(e.target.value)}
                required 
              />
            </div>
            <div className="pass-input-div">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Password (use 123)" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
              <div className="pass-show">
                {showPassword ? (
                  <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
                ) : (
                  <FaEye onClick={() => setShowPassword(!showPassword)} />
                )}
              </div>
            </div>
            <button className="submit-login" type="button" onClick={handleLogin}>Sign In</button>
          </form>
        </div>
        <div className="other-sign-in">
          <p>Or sign in with:</p>
          <div className="other-symbol">
            <div className="symbol-1">
              <img src={GoogleLogo} alt="Google" />
            </div>
            <div className="symbol-2">
              <img src={FacebookLogo} alt="Facebook" />
            </div>
            <div className="symbol-3">
              <img src={TwitterLogo} alt="Twitter" />
            </div>
          </div>
        </div>
        <p className="sign-up">Don't have an account? <a href="#">Sign Up</a></p>
      </div>
    </div>
  );
};

export default Login;
