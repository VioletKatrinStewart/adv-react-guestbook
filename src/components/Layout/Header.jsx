import React from 'react';
import { useUser } from '../../Context/UserContext';
import './Header.css';

export default function Header() {
  const { user } = useUser();
  if (user) return <div className="headerdiv">Hi {user}</div>;
  return <div className="nouserdiv">welcome to our guest book</div>;
}
