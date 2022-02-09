import './Header.css';
import React from 'react';
import { useUser } from '../../context/UserContext';

export default function Header() {
  const { user } = useUser();

  return <div className="header">Welcome {user ? user : 'Guest'}</div>;

  //   <h1>Welcome {user}</h1>
}
