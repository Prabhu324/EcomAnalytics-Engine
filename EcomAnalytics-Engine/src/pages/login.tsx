import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Insert authentication logic here
    
    // Redirect to home/dashboard on successful login
    navigate('/');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '300px' }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          required 
          style={{ display: 'block', marginBottom: '10px', width: '100%' }}
        />
        <button type="submit" style={{ width: '100%' }}>Sign In</button>
      </form>
    </div>
  );
};