import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Signup = ({ loading, message, onSubmit }) => {
  const { errors, getValues, handleSubmit, register } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="column center full-width m-top-5 m-bottom-5">
      <div className="column">
        <label>Nombre</label>
        <input name="first_name" type="text" ref={register({ required: 'Requerid' })} />
        {errors.first_name && <span>{errors.first_name.message}</span>}
      </div>
      <div className="column m-top-2">
        <label>Apellido</label>
        <input name="last_name" type="text" ref={register({ required: 'Requerido' })} />
        {errors.last_name && <span>{errors.last_name.message}</span>}
      </div>
      <div className="column m-top-2">
        <label>Email</label>
        <input
          name="email"
          type="email"
          ref={register({ required: 'Requerido / Debe ser un email válido' })}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <div className="column m-top-2">
        <label>Password</label>
        <input name="password" type="password" ref={register({ required: 'Requerido' })} />
        {errors.password && <span>{errors.password.message}</span>}
      </div>
      <div className="column m-top-2">
        <label>Confirmación de Password</label>
        <input
          name="password_confirmation"
          type="password"
          ref={register({
            required: 'Requerido',
            validate: {
              matchesPreviousPassword: value => {
                const { password } = getValues();
                return password === value || 'El password y la confirmación deben ser iguales';
              }
            }
          })}
        />
        {errors.password_confirmation && <span>{errors.password_confirmation.message}</span>}
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
