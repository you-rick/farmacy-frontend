import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import React from 'react';
import { login } from '../../../../store/userReducer';
import validate from './validate';
import LoginForm from './LoginForm';

const LoginReduxForm = reduxForm({ form: 'user-login', validate })(LoginForm);

const LoginContainer = ({ login, isAuth }) => {
  const onSubmit = (data) => login(data);

  if (isAuth) {
    return <Redirect to="/" />;
  }

  return <LoginReduxForm onSubmit={onSubmit} />;
};

const mapStateToProps = (state) => ({
  isAuth: state.user.isAuth,
});

export default connect(mapStateToProps, { login })(LoginContainer);
