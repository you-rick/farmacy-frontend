import React from 'react';
import { Box, Typography, Divider } from '@material-ui/core';

const Message = () => (
  <>
    <Box p="1rem 0">
      <Typography variant="subtitle2">John Doe</Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde
        suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
    </Box>
    <Divider />
  </>
);

export default Message;
