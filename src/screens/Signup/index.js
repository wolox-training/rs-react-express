import React, { useState, useEffect } from 'react';

import { createUser } from '../../services/UserServices';

import Singup from './layout';

const SignupContainer = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const [message, setMessage] = useState('');
  const onSubmit = data => {
    setLoading(true);
    createUser({ ...data, locale: 'en' })
      .then(
        response => {
          setSuccess(response.ok);
          setFailure(!response.ok);
        },
        () => {
          setFailure(true);
          setSuccess(false);
        }
      )
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (success) {
      setMessage('El usuario fue creado correctamente');
    }
    if (failure) {
      setMessage('Error al crear el usuario');
    }
  }, [success, failure]);

  return <Singup loading={loading} message={message} onSubmit={onSubmit} />;
};

export default SignupContainer;
