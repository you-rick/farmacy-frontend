import React from 'react';
import { Box, Typography } from '@material-ui/core';
import Message from '../Message/Message';

const Messages = () => {
  const messagesList = ['1', '2', '3', '4', '5'];

  return (
    <Box m="1rem 0 0">
      <Typography variant="body1">Conversations</Typography>
      {messagesList.map(() => <Message />)}
    </Box>
  );
};

export default Messages;
