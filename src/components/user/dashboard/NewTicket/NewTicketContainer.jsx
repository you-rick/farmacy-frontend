import React from 'react';
import { connect } from 'react-redux';
import NewTicket from './NewTicket';
import { createTicket } from '../../../../store/ticketsReducer';

const NewTicketContainer = ({ user, createTicket }) => {
  const onSubmit = (data) => {
    createTicket(data, user.userId);
  };

  return <NewTicket onSubmit={onSubmit} user={user} />;
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { createTicket })(NewTicketContainer);
