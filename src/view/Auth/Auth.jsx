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
        <input type="name" name="name" id="name" />
        <input type="password" name="password" id="password" />
        <button type="submit">sign in miklo!</button>
      </form>
    </>
  );
}
