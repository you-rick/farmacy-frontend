import React from 'react';
import { connect } from 'react-redux';
import { forgotPassword } from '../../../../store/authReducer';
import ForgotPasswordForm from './ForgotPasswordForm';

const ForgotPasswordContainer = ({ forgotPassword }) => {
  const onSubmit = (data) => {
    forgotPassword(data);
  };

  return (
    <ForgotPasswordForm onSubmit={onSubmit} />
  );
};

export default connect(null, { forgotPassword })(ForgotPasswordContainer);
