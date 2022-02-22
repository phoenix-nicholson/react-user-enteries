import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

const Auth = () => {
  const { setUser } = useUser();
  const history = useHistory();
  const location = useLocation();

  const handleLogin = () => {
    setUser('miklo');
    const { from } = location.state || { from: { pathname: '/' } };
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
};
export default Auth;
