import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

export default function Auth() {
  const { setUser } = useUser();
  const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: '/' } };

  const handleLogin = (e) => {
    e.preventDefault();
    setUser('miklo');
    history.replace(from.pathname);
  };
  return (
    <>
      <h1>Sign In</h1>
      <form onSubmit={handleLogin}>
        <button type="submit">sign in miklo!</button>
      </form>
    </>
  );
}
