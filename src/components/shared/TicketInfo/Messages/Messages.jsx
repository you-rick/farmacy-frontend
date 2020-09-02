import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Box, Typography } from '@material-ui/core';
import Message from '../Message/Message';
import SmallPreloader from '../../SmallPreloader/SmallPreloader';
import { LOCALE } from '../../../../locale';
import { getMessages } from '../../../../store/messagesReducer';

const Messages = ({ role, ticketId, userId, messages, getMessages }) => {
  const locale = LOCALE.user.dashboard.ticketInfo;

  useEffect(() => {
    getMessages(userId, ticketId, role);
  }, [ticketId, userId, getMessages, role]);

  if (!messages.length) return <SmallPreloader />;

  return (
    <Box m="1rem 0 0">
      {!!messages.length && <Typography variant="body1">{locale.conversions}</Typography>}
      {messages.map((msg) => <Message key={msg.id} message={msg} />)}
    </Box>
  );
};

const mapStateToProps = (state) => ({
  userId: state.tickets.userId,
  messages: state.messages.list,
  role: state.auth.role,
});

export default connect(mapStateToProps, { getMessages })(Messages);
