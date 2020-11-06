import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Login = ({ loading, message, onSubmit }) => {
  const { errors, handleSubmit, register } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="column center full-width m-top-5 m-bottom-5">
      <div className="column m-top-2">
        <label>Email</label>
        <input name="email" type="email" ref={register({ required: 'Requerido' })} />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <div className="column m-top-2">
        <label>Password</label>
        <input name="password" type="password" ref={register({ required: 'Requerido' })} />
        {errors.password && <span>{errors.password.message}</span>}
      </div>
      <div>
        <button type="submit" className="m-top-2">
          Login
        </button>
        <Link to="/sign_up" className="m-top-2 m-left-5">
          Sign Up
        </Link>
      </div>
      {loading && <span className="m-top-5">loading...</span>}
      <span className="m-top-5">{message}</span>
    </form>
  );
};

Login.propTypes = {
  loading: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Login;
