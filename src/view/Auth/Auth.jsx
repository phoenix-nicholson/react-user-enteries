import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

export default function Auth() {
  const { setUser } = useUser();
  const history = useHistory();
  const location = useLocation();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const { from } = location.state || { from: { pathname: '/' } };

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      name === process.env.REACT_APP_AUTH_NAME &&
      password === process.env.REACT_APP_AUTH_PASSWORD
    ) {
      setUser({ name: name, passsword: password });
      setName('');
      setPassword('');
      history.replace(from.pathname);
    } else {
      throw new Error('Login was not successful');
    }
  };

  return (
    <>
      <h1>Sign In</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <input
          placeholder="Enter your password"
          type="text"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">sign in!</button>
      </form>
    </>
  );
}
