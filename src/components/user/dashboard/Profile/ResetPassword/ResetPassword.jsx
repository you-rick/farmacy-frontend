import React from 'react';
import { connect } from 'react-redux';
import ResetPasswordForm from '../../../../shared/dashboard/ResetPasswordForm/ResetPasswordForm';
import { resetPassword } from '../../../../../store/authReducer';

const ResetPassword = ({ email, resetPassword }) => {
  const onSubmit = (data) => {
    resetPassword(data);
  };

  return <ResetPasswordForm onSubmit={onSubmit} email={email} />;
};

const mapStateToProps = (state) => ({
  email: state.auth.email,
});

export default connect(mapStateToProps, { resetPassword })(ResetPassword);
