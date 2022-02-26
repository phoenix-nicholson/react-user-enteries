import './Header.css';
import React from 'react';
import { useUser } from '../../context/UserContext';
import DarkModeToggle from '../../DarkMode/DarkModeToggle';
import '../../DarkMode/DarkMode.scss';
import { useHistory } from 'react-router-dom';

export default function Header() {
  const { setUser } = useUser();
  const history = useHistory();

  const handleLogOut = (e) => {
    e.preventDefault();
    setUser('');
    history.push('/Auth');
  };

  const {
    user: { name },
  } = useUser();

  return (
    <div className="header">
      <DarkModeToggle />
      Welcome {name ? name : 'Guest'}!
      <br />
      <button onClick={handleLogOut}>Logout</button>
    </div>
  );

  //   <h1>Welcome {user}</h1>
}
