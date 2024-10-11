import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../services/authService';
import { FaRegEyeSlash } from 'react-icons/fa';
import axios from 'axios';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

const handleSignUp = async (e: React.FormEvent) => {
  e.preventDefault();

  // Reset error message on form submission
  setErrorMessage('');

  // Password matching validation
  if (password !== confirmPassword) {
    setErrorMessage("Passwords don't match!");
    return;
  }

  try {
    const response = await registerUser({ email, password });
    const token = response.token;

    localStorage.setItem('token', token);
    console.log('Registration successful, token:', token);

    navigate('/login');
  }catch (error: unknown) {
    
    if (axios.isAxiosError(error) && error.response?.data?.message) {
      setErrorMessage(error.response.data.message);  
    } else if (error instanceof Error) {
      setErrorMessage(error.message);  
    } else {
      setErrorMessage('Signup failed. Try again.');
    }
  }
}  
  
  
  return (
    <div className="min-h-screen flex justify-center items-center bg-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center">Signup</h2>
        <form onSubmit={handleSignUp} className="space-y-4">
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
            <label htmlFor="password" className="block text-sm font-medium">Create password</label>
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
          
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium">Confirm password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="confirmPassword"
                className="w-full p-2 mt-1 border rounded-md"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
