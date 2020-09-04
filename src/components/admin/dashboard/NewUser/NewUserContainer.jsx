import React from 'react';
import { connect } from 'react-redux';
import { createUser } from '../../../../store/usersReducer';
import NewUser from './NewUser';

const NewUserContainer = ({ createUser }) => {
  const onSubmit = (data) => {
    console.log(data);
    createUser(data);
  };

  return <NewUser onSubmit={onSubmit} />;
};

export default connect(null, { createUser })(NewUserContainer);
