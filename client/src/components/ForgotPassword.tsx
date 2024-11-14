import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { findUserByEmail, updateUserPassword } from '../utils/storage';

const ForgotPassword: React.FC = () => {
  const [userIdOrEmail, setUserIdOrEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);  // Single state for both fields
  const [alert, setAlert] = useState<{ type: string; message: string } | null>(null);
  const navigate = useNavigate();

  const handlePasswordReset = (e: React.FormEvent) => {
    e.preventDefault();

    // Find user by either userId or email
    const user = findUserByEmail(userIdOrEmail);

    if (user) {
      if (newPassword.length < 6) {
        setAlert({ type: 'danger', message: 'Password must be at least 6 characters long.' });
        return;
      }
      if (newPassword !== confirmPassword) {
        setAlert({ type: 'danger', message: 'Passwords do not match.' });
        return;
      }

      // Update password in storage
      updateUserPassword(user.userId, newPassword);
      setAlert({ type: 'success', message: 'Password reset successfully! Redirecting to login...' });
      
      // Redirect to login after a delay to show success message
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } else {
      // Show alert that user is not registered and allow redirection to Register page
      setAlert({
        type: 'danger',
        message: 'User not found. Please register to create an account.',
      });
    }
  };

  return (
    <div className="container">
      <h2>Forgot Password</h2>
      {alert && (
        <div className={`alert alert-${alert.type}`} role="alert">
          {alert.message}
          {alert.type === 'danger' && (
            <span
              style={{ color: 'blue', cursor: 'pointer', marginLeft: '5px' }}
              onClick={() => navigate('/register')}
            >
              Register here
            </span>
          )}
        </div>
      )}
      <form onSubmit={handlePasswordReset} className="form-container">
        <div className="form-group">
          <label htmlFor="userIdOrEmail">User ID or Email:</label>
          <input
            type="text"
            id="userIdOrEmail"
            value={userIdOrEmail}
            onChange={(e) => setUserIdOrEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="newPassword">New Password:</label>
          <div className="password-container">
            <input
              type={showPassword ? 'text' : 'password'}
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <div className="password-container">
            <input
              type={showPassword ? 'text' : 'password'}
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {/* Eye icon to toggle visibility for both fields */}
          <FontAwesomeIcon
            icon={showPassword ? faEyeSlash : faEye}
            onClick={() => setShowPassword(!showPassword)}
            className="password-toggle-icon"
          />
        </div>
        <button type="submit" className="btn btn-primary">Reset Password</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
