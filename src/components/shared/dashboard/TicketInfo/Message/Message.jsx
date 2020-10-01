import React from 'react';
import Moment from 'react-moment';
import HTMLReactParser from 'html-react-parser';
import { Grid, Box, Typography, Divider, Tooltip } from '@material-ui/core';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { roles } from '../../../../../core';
import { DATE_TIME_FORMAT } from '../../../../../utils/validators';

const AdminBadge = () => (
  <Tooltip title="Admin" placement="top" arrow>
    <SupervisorAccountIcon fontSize="small" color="primary" />
  </Tooltip>
);

const Message = ({ message }) => {
  const { userDetails, detailMessage, date } = message;

  return (
    <>
      <Box p="1rem 0">
        <Grid container alignItems="center">
          <Typography variant="subtitle2">
            {`${userDetails.firstName} ${userDetails.lastName}`}
          </Typography>
          <Box m="0 0 0 0.5rem">{userDetails.role === roles.admin && <AdminBadge />}</Box>
        </Grid>

        {detailMessage
        && (
          <Typography
            variant="body2"
            component="div"
            gutterBottom
          >
            {HTMLReactParser(detailMessage)}
          </Typography>
        )}

        <Typography variant="caption" color="textSecondary">
          <Moment format={DATE_TIME_FORMAT}>{date}</Moment>
        </Typography>
      </Box>
      <Divider />
    </>
  );
};

export default Message;
