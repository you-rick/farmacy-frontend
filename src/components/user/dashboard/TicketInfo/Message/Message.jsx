import React from 'react';
import { Grid, Box, Typography, Divider, Tooltip } from '@material-ui/core';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

const AdminBadge = () => (
  <Tooltip title="Admin" placement="top" arrow>
    <SupervisorAccountIcon fontSize="small" color="primary" />
  </Tooltip>
);

const Message = ({ message }) => {
  const { user, detailMessage, date } = message;

  return (
    <>
      <Box p="1rem 0">
        <Grid container alignItems="center">
          <Typography variant="subtitle2">
            {`${user.firstName} ${user.lastName}`}
          </Typography>
          <Box m="0 0 0 0.5rem">{user.userType === 'admin' && <AdminBadge />}</Box>
        </Grid>

        <Typography variant="body2" gutterBottom>{detailMessage}</Typography>
        <Typography variant="caption" color="textSecondary">{date}</Typography>
      </Box>
      <Divider />
    </>
  );
};

export default Message;
