import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import LocalStorage from '../../services/LocalStorageServices';

const PrivateRoute = ({ children, ...rest }) => {
  const auth = LocalStorage.getValue('session');

  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth && auth.access_token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired
};

export default PrivateRoute;
