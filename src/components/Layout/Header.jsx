import React from 'react';
import { useUser } from '../../context/UserContext';

export default function Header() {
  const { user } = useUser();
  return <div>Hi {user ? 'user' : { user }}</div>;
}
