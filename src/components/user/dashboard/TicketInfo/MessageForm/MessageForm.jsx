import React from 'react';
import {
  TextField,
  Typography,
  Grid,
  Button,
  Box,
} from '@material-ui/core';

const MessageForm = () => (
  <Box m="0 0 1rem">
    <Typography variant="body1">Messages</Typography>
    <TextField
      label="To"
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
        Post
      </Button>
    </Grid>
  </Box>
);

export default MessageForm;
