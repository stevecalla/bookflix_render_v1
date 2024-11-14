import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { validateUser, findUserById } from '../utils/storage';

const Login: React.FC = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [alert, setAlert] = useState<{ type: string; message: string } | null>(null);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const userExists = findUserById(userId);

    if (userExists) {
      if (validateUser(userId, password)) {
        setAlert({ type: 'success', message: 'Logged in successfully!' });
        
        // Navigate to ChoicePage after a short delay to show the success message
        setTimeout(() => {
          setAlert(null);
          navigate('/choice');
        }, 1000);

      } else {
        setAlert({ type: 'danger', message: 'Incorrect password.' });
      }
    } else {
      setAlert({ type: 'warning', message: 'User not found. Please register.' });
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      {alert && <div className={`alert alert-${alert.type}`} role="alert">{alert.message}</div>}
      <form onSubmit={handleLogin} className="form-container">
        <div className="form-group">
          <label htmlFor="userId">User ID:</label>
          <input
            type="text"
            id="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <div className="password-container">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              onClick={() => setShowPassword(!showPassword)}
              className="password-toggle-icon"
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      <p>
        Forgot your password?{' '}
        <span
          style={{ color: 'blue', cursor: 'pointer' }}
          onClick={() => navigate('/forgot-password')}
        >
          Reset it here
        </span>
      </p>
      <p>
        New user?{' '}
        <span
          style={{ color: 'blue', cursor: 'pointer' }}
          onClick={() => navigate('/register')}
        >
          Register here
        </span>
      </p>
    </div>
  );
};

export default Login;