import React from 'react';
import {
  TextField, Typography, Grid, Button, Box,
} from '@material-ui/core';
import { LOCALE } from '../../../../../locale';

const MessageForm = () => {
  const locale = LOCALE.user.dashboard.ticketInfo;

  return (
    <Box m="0 0 1rem">
      <Typography variant="body1">{locale.messages}</Typography>
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
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        multiline
        rows={15}
      />
      <Grid container justify="flex-end">
        <Button color="primary" variant="contained">
          {locale.form.submitButton}
        </Button>
      </Grid>
    </Box>
  );
};

export default MessageForm;
