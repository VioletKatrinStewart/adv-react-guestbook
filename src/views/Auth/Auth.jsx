import React from 'react';
import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useUser } from '../../Context/UserContext';
import './Auth.css';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useUser();
  const location = useLocation();
  const history = useHistory();

  const handleSignIn = (e) => {
    e.preventDefault();
    if (
      email === process.env.REACT_APP_AUTH_EMAIL &&
      password === process.env.REACT_APP_AUTH_PASSWORD
    ) {
      setUser('Vi');
      const { from } = location.state || { from: { pathname: '/' } };
      history.replace(from.pathname);
    }
  };

  return (
    <div>
      <form className="formcss">
        <label htmlFor="email">Email:</label>
        <input id="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSignIn}>Sign in!</button>
      </form>
    </div>
  );
}
