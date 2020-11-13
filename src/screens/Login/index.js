import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { login } from '../../services/UserServices';
import LocalStorage from '../../services/LocalStorageServices';

import Login from './layout';

const LoginContainer = () => {
  const [loading, setLoading] = useState(false);
  const [failure, setFailure] = useState(false);
  const [message, setMessage] = useState('');
  const history = useHistory();
  const onSubmit = data => {
    setLoading(true);
    login({ session: { ...data } })
      .then(
        response => {
          if (response.ok && response.data && response.data.access_token) {
            LocalStorage.setValue('session', response.data);
            history.push('/');
          } else {
            setFailure(!response.ok);
          }
        },
        () => setFailure(true)
      )
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (failure) {
      setMessage('Credenciales incorrectas');
      LocalStorage.removeValue('session');
    }
  }, [failure]);

  return <Login loading={loading} message={message} onSubmit={onSubmit} />;
};

export default LoginContainer;
