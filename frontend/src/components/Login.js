// frontend/src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    // For demo purposes, simply navigate to Home
    navigate('/');
  };

  return (
    <form onSubmit={onSubmit} className="auth-form">
      <h2>Login</h2>
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={onChange} required />
      <input type="password" name="password" placeholder="Password" value={formData.password} onChange={onChange} required />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
