import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import PrivateRoute from './components/PrivateRoutes/PrivateRoute';
import { UserProvider } from './context/UserContext';
import Auth from './view/Auth/Auth';
import Home from './view/Home/Home';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Router>
          <Switch>
            <Route exact path="/Auth">
              <Auth />
            </Route>
            <PrivateRoute exact path="/">
              <Home />
            </PrivateRoute>
          </Switch>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
