import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import React from 'react';
import { login } from '../../../../store/userReducer';
import validate from './validate';
import LoginForm from '../../../shared/auth/LoginForm/LoginForm';

const AdminLoginForm = reduxForm({ form: 'admin-login', validate })(LoginForm);

const AdminLoginContainer = ({ login, isAuth }) => {
  const onSubmit = (data) => login(data, 'admin');

  if (isAuth) {
    return <Redirect to="/" />;
  }

  return <AdminLoginForm onSubmit={onSubmit} userType="admin" />;
};

const mapStateToProps = (state) => ({
  isAuth: state.user.isAuth,
});

export default connect(mapStateToProps, { login })(AdminLoginContainer);
