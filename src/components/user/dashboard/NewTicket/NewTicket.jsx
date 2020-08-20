import React from 'react';
import { Box, Typography, Container } from '@material-ui/core';
import { Editor } from '@tinymce/tinymce-react';
import { LOCALE } from '../../../../locale';

const NewTicket = () => {
  const locale = LOCALE.user.dashboard.newTicket;
  const handleEditorChange = (content) => {
    console.log('Content was updated:', content);
  };

  return (
    <Container maxWidth="md">
      <Box m="0 0 1.5rem">
        <Typography variant="h5" component="h1" align="center">
          {locale.headline}
        </Typography>
      </Box>
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
    </Container>
  );
};

export default NewTicket;
