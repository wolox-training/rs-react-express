import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Signup = ({ loading, message, onSubmit }) => {
  const { register, handleSubmit, errors } = useForm();

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
      <div>
        <button type="submit" className="m-top-2">
          Sign Up
        </button>
        <Link to="/" className="m-top-2 m-left-5">
          Login
        </Link>
      </div>
      {loading && <span className="m-top-5">loading...</span>}
      <span className="m-top-5">{message}</span>
    </form>
  );
};

Signup.propTypes = {
  loading: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Signup;
