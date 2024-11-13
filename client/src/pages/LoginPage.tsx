// src/pages/Login.tsx
import React, { useState } from 'react';
//import { useHistory } from 'react-router-dom';
//import { loginUser } from '../services/api';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  //const history = useHistory();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
  /*  try {
      const { token } = await loginUser(email, password);
      localStorage.setItem('token', token);
      history.push('/dashboard');
    } catch (err) {
      setError('Invalid credentials');
    }*/
  };
  try{
    handleLogin;
  } catch (error) {
    setError('Invalid credentials');
  }

  return (
    <div>
      <h1>Login</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
