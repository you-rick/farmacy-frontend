import React from 'react';
import { connect } from 'react-redux';
import ResetPasswordForm from '../../../../shared/dashboard/ResetPasswordForm/ResetPasswordForm';
import { resetPassword } from '../../../../../store/authReducer';

const ResetPassword = ({ email, userId, resetPassword }) => {
  const onSubmit = (data) => {
    resetPassword(userId, data);
  };

  return <ResetPasswordForm onSubmit={onSubmit} email={email} />;
};

const mapStateToProps = (state) => ({
  email: state.auth.email,
  userId: state.auth.userId,
});

export default connect(mapStateToProps, { resetPassword })(ResetPassword);
