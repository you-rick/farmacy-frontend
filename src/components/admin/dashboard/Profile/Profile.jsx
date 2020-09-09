import React from 'react';
import { connect } from 'react-redux';
import ProfileForm from '../../../shared/dashboard/ProfileForm/ProfileForm';
import { updateProfile } from '../../../../store/authReducer';

const Profile = ({ updateProfile, user }) => {
  const onSubmit = (data) => {
    updateProfile(data);
  };

  return <ProfileForm onSubmit={onSubmit} user={user} />;
};

const mapStateToProps = (state) => ({
  user: state.auth,
});
export default connect(mapStateToProps, { updateProfile })(Profile);
