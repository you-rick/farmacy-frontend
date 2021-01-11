import React, { memo } from 'react';
import { Container, Grid, Typography, Box } from '@material-ui/core';
import { LOCALE } from '../../../locale';

const NotFound = memo(() => {
  const locale = LOCALE.public.notFound;

  return (
    <Container maxWidth="md" data-test-id="NotFoundComponent">
      <Box p="4rem 0 0">
        <Grid container direction="column" justify="center" alignItems="center">
          <Typography variant="h4" component="h1" gutterBottom>
            {locale.headline}
          </Typography>
          <Typography variant="body1" component="p" align="center">
            {locale.body}
          </Typography>
        </Grid>
      </Box>

    </Container>
  );
});

export default NotFound;
