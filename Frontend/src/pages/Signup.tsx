import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { signupUser } from '../services/authService';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password === confirmPassword) {
      await signupUser({ email, password });
      navigate('/login');
    } else {
      alert('Passwords do not match');
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-6">Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input 
            type="email" 
            className="w-full p-2 border rounded" 
            placeholder="Enter your email" 
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input 
            type="password" 
            className="w-full p-2 border rounded" 
            placeholder="Enter your password" 
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Confirm Password</label>
          <input 
            type="password" 
            className="w-full p-2 border rounded" 
            placeholder="Confirm your password" 
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="bg-indigo-500 text-white p-3 rounded">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
