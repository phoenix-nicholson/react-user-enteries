import './Header.css';
import React from 'react';
import { useUser } from '../../context/UserContext';
import DarkModeToggle from '../../DarkMode/DarkModeToggle';
import '../../DarkMode/DarkMode.scss';

export default function Header() {
  const { user } = useUser();

  return (
    <div className="header">
      <DarkModeToggle />
      Welcome {user ? user : 'Guest'}!
    </div>
  );

  //   <h1>Welcome {user}</h1>
}
