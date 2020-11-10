import React from 'react';
import { useHistory } from 'react-router-dom';

import LocalStorage from '../../services/LocalStorageServices';

import Navbar from './layout';

const NavbarContainer = () => {
  const history = useHistory();
  const onLogout = () => {
    LocalStorage.removeValue('session');
    history.push('/login');
  };

  return <Navbar onLogout={onLogout} />;
};

export default NavbarContainer;
