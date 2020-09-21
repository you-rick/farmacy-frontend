import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import React from 'react';
import { login } from '../../../../store/authReducer';
import validate from './validate';
import LoginForm from '../../../shared/auth/LoginForm/LoginForm';
import { roles } from '../../../../core';

const AdminLoginForm = reduxForm({ form: 'admin-login', validate })(LoginForm);

const AdminLoginContainer = ({ login, isAuth }) => {
  const onSubmit = (data) => login(data, roles.admin);

  if (isAuth) {
    return <Redirect to="/" />;
  }

  return <AdminLoginForm onSubmit={onSubmit} userType={roles.admin} />;
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(AdminLoginContainer);
