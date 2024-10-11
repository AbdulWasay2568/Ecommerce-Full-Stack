import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/authService';
import { FaRegEyeSlash } from 'react-icons/fa';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await loginUser({ email, password });
      console.log('API response:', response);

      if (response && response.token) {
        const token = response.token;
        const decodedToken = JSON.parse(atob(token.split('.')[1]));
        const userID = decodedToken.userID;

        localStorage.setItem('token', token);
        localStorage.setItem('userID', String(userID));

        console.log("Token received: ", token);
        console.log('User logged in, ID:', userID);

        navigate('/home');
      } else {
        throw new Error('Invalid API response structure');
      }
    } catch (error) {
      setErrorMessage('Invalid email or password');
      console.error("Login error:", error);
    }
  };

  const signUpBtn = () => {
    navigate('/signup');
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 mt-1 border rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                className="w-full p-2 mt-1 border rounded-md"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaRegEyeSlash/> : '👁️'}
              </span>
            </div>
          </div>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">
            Login
          </button>
          <button 
            type="button" 
            onClick={signUpBtn} 
            className="w-full bg-blue-500 text-white p-2 rounded-md"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
