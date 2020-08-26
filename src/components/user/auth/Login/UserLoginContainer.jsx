import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import React from 'react';
import { login } from '../../../../store/authReducer';
import validate from './validate';
import LoginForm from '../../../shared/auth/LoginForm/LoginForm';

const UserReduxForm = reduxForm({ form: 'user-login', validate })(LoginForm);

const UserLoginContainer = ({ login, isAuth }) => {
  const onSubmit = (data) => login(data, 'user');

  if (isAuth) {
    return <Redirect to="/" />;
  }

  return <UserReduxForm onSubmit={onSubmit} userType="user" />;
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(UserLoginContainer);
