import React from 'react';
import { Redirect, Route } from 'react-router-dom/cjs/react-router-dom.min';
import { useUser } from '../../context/UserContext';

export default function PrivateRoute({ children, ...routeProps }) {
  const { user } = useUser();
  return (
    <Route
      {...routeProps}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/Auth',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
