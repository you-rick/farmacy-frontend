import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { LOCALE } from '../../../../../locale';

const NewTickets = () => {
  const locale = LOCALE.admin.dashboard.newTickets;

  return (
    <>
      <Box m="0 0 2rem">
        <Typography variant="h5" component="h1" align="center">
          {locale.headline}
        </Typography>
      </Box>
    </>
  );
};

export default NewTickets;
