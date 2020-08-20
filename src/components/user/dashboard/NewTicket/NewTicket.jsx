import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { LOCALE } from '../../../../locale';

const NewTicket = () => {
  const locale = LOCALE.user.dashboard.newTicket;
  return (
    <>
      <Box>
        <Typography variant="h5" component="h1" align="center">
          {locale.headline}
        </Typography>
      </Box>
      Create New Ticket page
    </>
  );
};

export default NewTicket;
