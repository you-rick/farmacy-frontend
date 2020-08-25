import React from 'react';
import { connect } from 'react-redux';
import NewTicket from './NewTicket';
import { addTicket } from '../../../../store/ticketsReducer';

const NewTicketContainer = ({ user, addTicket }) => {
  const onSubmit = (data) => {
    addTicket(data);
  };

  return <NewTicket onSubmit={onSubmit} user={user} />;
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { addTicket })(NewTicketContainer);
