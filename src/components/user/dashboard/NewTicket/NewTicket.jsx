import React from 'react';
import { Box, Typography, Container, TextField, Button, Grid } from '@material-ui/core';
import { LOCALE } from '../../../../locale';
import RichTextarea from '../../../shared/RichTextarea/RichTextarea';
import Sidebar from './Sidebar/Sidebar';

const NewTicket = () => {
  const locale = LOCALE.user.dashboard.newTicket;
  const handleTextareaChange = (body) => {
    console.log(body);
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h5" component="h1" align="center">
        {locale.headline}
      </Typography>
      <Box display="flex" flexWrap="nowrap" m="1rem 0 0">
        <Sidebar />
        <Box flexGrow={1}>
          <Box m="0 0 1.5rem">
            <TextField
              label={locale.form.title}
              type="text"
              variant="outlined"
              size="small"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              margin="normal"
            />
            <TextField
              label={locale.form.to}
              type="email"
              variant="outlined"
              size="small"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              margin="normal"
            />
          </Box>
          <Box m="0 0 1rem">
            <RichTextarea body="New Ticket body" onChange={handleTextareaChange} />
          </Box>
          <Grid container justify="flex-end">
            <Button color="primary" variant="contained">
              {locale.form.submitButton}
            </Button>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default NewTicket;
