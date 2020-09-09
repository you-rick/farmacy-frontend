import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import React from 'react';
import { login } from '../../../../store/authReducer';
import validate from './validate';
import LoginForm from '../../../shared/auth/LoginForm/LoginForm';

const AdminLoginForm = reduxForm({ form: 'admin-login', validate })(LoginForm);

const AdminLoginContainer = ({ login, isAuth }) => {
  const onSubmit = (data) => login(data, 'ROLE_ADMIN');

  if (isAuth) {
    return <Redirect to="/" />;
  }

  return <AdminLoginForm onSubmit={onSubmit} userType="ROLE_ADMIN" />;
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(AdminLoginContainer);
