import React from 'react';
import { Typography, Button, Container } from '@material-ui/core';

const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <Container maxWidth="xs">
    <Typography variant="h5">Something went wrong:</Typography>
    <pre>{error.message}</pre>
    <Button variant="outlined" color="primary" onClick={resetErrorBoundary}>Try again</Button>
  </Container>
);

export default ErrorFallback;
