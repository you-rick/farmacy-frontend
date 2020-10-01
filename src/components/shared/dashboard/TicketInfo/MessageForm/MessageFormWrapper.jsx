import React from 'react';
import { connect } from 'react-redux';
import MessageForm from './MessageForm';
import { updateTicket } from '../../../../../store/ticketsReducer';

const MessageFormWrapper = ({ onFormInit, updateTicket, ticket, user }) => {
  const onSubmit = (data) => {
    updateTicket(data, user.userId, ticket.id, user.role);
  };

  return (
    <MessageForm
      onSubmit={onSubmit}
      onFormInit={onFormInit}
      ticket={ticket}
      requestor={user.email}
    />
  );
};

const mapStateToProps = (state) => ({
  user: state.auth,
});

export default connect(mapStateToProps, { updateTicket })(MessageFormWrapper);
