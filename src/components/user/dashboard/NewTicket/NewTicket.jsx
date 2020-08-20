import React from 'react';
import { Box, Typography, Container } from '@material-ui/core';
import { LOCALE } from '../../../../locale';
import RichTextarea from '../../../shared/RichTextarea/RichTextarea';

const NewTicket = () => {
  const locale = LOCALE.user.dashboard.newTicket;
  const handleTextareaChange = (body) => {
    console.log(body);
  };

  return (
    <Container maxWidth="md">
      <Box m="0 0 1.5rem">
        <Typography variant="h5" component="h1" align="center">
          {locale.headline}
        </Typography>
      </Box>
      <RichTextarea body="New Ticket body" onChange={handleTextareaChange} />
    </Container>
  );
};

export default NewTicket;
