import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { TextField, Typography, Grid, Button, Box } from '@material-ui/core';
import { LOCALE } from '../../../../../locale';

const MessageForm = () => {
  const locale = LOCALE.user.dashboard.ticketInfo;

  const handleEditorChange = (content) => {
    console.log('Content was updated:', content);
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
        <Editor
          apiKey={process.env.REACT_APP_TINYMCE_KEY}
          initialValue="<p>This is the initial content of the editor</p>"
          init={{
            height: 500,
            menubar: false,
            plugins: [],
            toolbar: 'undo redo | formatselect | bold italic underline | alignleft aligncenter'
              + ' alignright alignjustify | bullist numlist | removeformat',
          }}
          onEditorChange={handleEditorChange}
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
