import React from 'react';
import PropTypes from 'prop-types';

import logo from '../../logo.svg';

const Navbar = ({ onLogout }) => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <nav className="row">
      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </nav>
  </header>
);

Navbar.propTypes = {
  onLogout: PropTypes.func.isRequired
};

export default Navbar;
