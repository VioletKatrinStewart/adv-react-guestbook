import React from 'react';
import { useUser } from '../../Context/UserContext';
import './Header.css';
import useDarkMode from 'use-dark-mode';

export default function Header() {
  const darkMode = useDarkMode(false);
  const handleDarkMode = () => {
    darkMode.toggle();
  };
  const { user } = useUser();
  if (user) return <div className="headerdiv">Hi {user}</div>;
  return (
    <>
      <div className="nouserdiv">welcome to our guest book</div>
      <button type="button" onClick={handleDarkMode}>
        More Pink?
      </button>
    </>
  );
}
