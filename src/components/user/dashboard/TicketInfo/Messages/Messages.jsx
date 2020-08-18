import React from 'react';
import { Box, Typography } from '@material-ui/core';
import Message from '../Message/Message';
import { LOCALE } from '../../../../../locale';

const Messages = () => {
  const messagesList = ['1', '2', '3', '4', '5'];
  const locale = LOCALE.user.dashboard.ticketInfo;

  return (
    <Box m="1rem 0 0">
      <Typography variant="body1">{locale.conversions}</Typography>
      {messagesList.map(() => <Message />)}
    </Box>
  );
};

export default Messages;
