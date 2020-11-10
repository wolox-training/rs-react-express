import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import LocalStorage from '../../services/LocalStorageServices';

const RouteWrapper = ({ children, isPrivate, ...rest }) => {
  const auth = LocalStorage.getValue('session');
  const pathname = isPrivate ? '/login' : '/';
  const showChildren = (isPrivate && auth && auth.access_token) || (!isPrivate && !auth);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        showChildren ? children : <Redirect to={{ pathname, state: { from: location } }} />
      }
    />
  );
};

RouteWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  isPrivate: PropTypes.bool
};

RouteWrapper.defaultProps = {
  isPrivate: false
};

export default RouteWrapper;
