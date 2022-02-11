import React from 'react';
import { useUser } from '../../Context/UserContext';

export default function Header() {
  const { user } = useUser();
  if (user) return <div>Hi {user}</div>;
  return <div>welcome to our guest book</div>;
}
