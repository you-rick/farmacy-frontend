import React from 'react';
import { connect } from 'react-redux';
import MessageForm from './MessageForm';
import { updateTicket } from '../../../../../store/ticketsReducer';
import { clearEditorValue } from '../../../../../store/richtextReducer';

const MessageFormWrapper = ({ onFormInit, updateTicket, clearEditorValue, ticket, user }) => {
  const onSubmit = (data) => {
    updateTicket(data, ticket.id, user.userId, user.role);
    clearEditorValue();
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

export default connect(mapStateToProps, {
  updateTicket,
  clearEditorValue,
})(MessageFormWrapper);
