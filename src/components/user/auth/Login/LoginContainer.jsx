import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import React from 'react';
import validate from './validate';
import { login } from '../../../../store/userReducer';
import LoginForm from './LoginForm';

const LoginReduxForm = reduxForm({ form: 'user-login', validate })(LoginForm);

const LoginContainer = (props) => {
  const onSubmit = (data) => {
    props.login(data);
  };
  return <LoginReduxForm onSubmit={onSubmit} />;
};

export default connect(null, { login })(LoginContainer);
