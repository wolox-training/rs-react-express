import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Signup = () => {
  const [user, setUser] = useState({});
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    setUser({ ...data, locale: 'en' });
  };

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('useEffect: ', { user });
  }, [user]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="column center full-width m-top-5 m-bottom-5">
      <div className="column">
        <label>Nombre</label>
        <input name="first_name" ref={register({ required: true })} />
        {errors.first_name && <p>Requerido</p>}
      </div>
      <div className="column m-top-2">
        <label>Apellido</label>
        <input name="last_name" ref={register({ required: true })} />
        {errors.last_name && <p>Requerido</p>}
      </div>
      <div className="column m-top-2">
        <label>Email</label>
        <input name="email" ref={register({ required: true })} />
        {errors.email && <p>Requerido</p>}
      </div>
      <div className="column m-top-2">
        <label>Password</label>
        <input name="password" ref={register({ required: true })} />
        {errors.password && <p>Requerido</p>}
      </div>
      <div className="column m-top-2">
        <label>Confirmación de Password</label>
        <input name="password_confirmation" ref={register({ required: true })} />
        {errors.password_confirmation && <p>Requerido</p>}
      </div>
      <button type="submit" className="m-top-2">
        Sign Up
      </button>
      <Link to="/" className="m-top-2">
        Login
      </Link>
    </form>
  );
};

export default Signup;
