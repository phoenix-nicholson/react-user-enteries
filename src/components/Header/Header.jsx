import './Header.css';
import React from 'react';
import { useUser } from '../../context/UserContext';
import DarkModeToggle from '../../DarkMode/DarkModeToggle';
import '../../DarkMode/DarkMode.scss';

export default function Header() {
  const {
    user: { name },
  } = useUser();

  return (
    <div className="header">
      <DarkModeToggle />
      Welcome {name ? name : 'Guest'}!
    </div>
  );

  //   <h1>Welcome {user}</h1>
}
