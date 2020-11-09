import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import LocalStorage from '../../services/LocalStorageServices';

const PublicRoute = ({ children, ...rest }) => {
  const auth = LocalStorage.getValue('session');

  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth && auth.access_token ? (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location }
            }}
          />
        ) : (
          children
        )
      }
    />
  );
};

PublicRoute.propTypes = {
  children: PropTypes.node.isRequired
};

export default PublicRoute;
