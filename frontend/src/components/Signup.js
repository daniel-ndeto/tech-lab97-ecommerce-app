import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: ''
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/register', formData);
      // Save the token to localStorage
      localStorage.setItem('token', res.data.token);
      // Redirect to homepage (or dashboard)
      navigate('/');
    } catch (err) {
      console.error("Error during signup:", err);
      setError('Signup failed. Please try again.');
    }
  };

  return (
    <form onSubmit={onSubmit} className="auth-form">
      <h2>Sign Up</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={onChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={onChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={onChange}
        required
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={onChange}
        required
      />
      {error && <p className="error">{error}</p>}
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default Signup;
