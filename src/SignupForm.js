import React, { useState } from 'react';
import './styles/index.css';

function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    if (validateEmail(newEmail)) {
      setEmailError('');
    } else {
      setEmailError('Invalid email address');
    }
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    if (validatePassword(newPassword)) {
      setPasswordError('');
    } else {
      setPasswordError('Password must be at least 8 characters long');
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    if (newConfirmPassword === password) {
      setConfirmPasswordError('');
    } else {
      setConfirmPasswordError('Passwords do not match');
    }
  };

  const handleSubmit = () => {
    if (validateEmail(email) && validatePassword(password) && confirmPassword === password) {
      alert('Form submitted successfully');
    } else {
      alert('Can’t submit the form');
    }
  };

  return (
    <div className="container">
      <div className="form">
        <div className="form-group">
          <label>Email:</label>
          <br />
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className={emailError ? 'error' : email ? 'success' : ''}
          />
          {emailError && <p className="error">{emailError}</p>}
        </div>
        <div className="form-group">
          <label>Password:</label>
          <br />
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className={passwordError ? 'error' : password ? 'success' : ''}
          />
          {passwordError && <p className="error">{passwordError}</p>}
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <br />
          <input
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            className={confirmPasswordError ? 'error' : confirmPassword ? 'success' : ''}
          />
          {confirmPasswordError && <p className="error">{confirmPasswordError}</p>}
        </div>
        <button onClick={handleSubmit}>Sign Up</button>
      </div>
    </div>
  );
}

export default SignupForm;