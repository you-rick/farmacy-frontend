import React from 'react';
import { TextField, Typography, Grid, Button, Box } from '@material-ui/core';
import RichTextarea from '../../RichTextarea/RichTextarea';
import { LOCALE } from '../../../../../locale';

const MessageForm = ({ onFormInit }) => {
  const editorHeight = 200;
  const locale = LOCALE.user.dashboard.ticketInfo;
  const handleTextareaChange = (body) => {
    console.log(body);
  };
  const handleTextareaInit = (status) => {
    onFormInit(status);
  };

  return (
    <Box m="0 0 1.5rem">
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
      <Box m="0 0 1rem">
        <RichTextarea
          body="Message body"
          height={editorHeight}
          onChange={handleTextareaChange}
          onInit={handleTextareaInit}
        />
      </Box>
      <Grid container justify="flex-end">
        <Button color="primary" variant="contained">
          {locale.form.submitButton}
        </Button>
      </Grid>
    </Box>
  );
};

export default MessageForm;
