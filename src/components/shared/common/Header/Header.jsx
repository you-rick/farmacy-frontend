import React, { memo } from 'react';
import { AppBar, Container, Grid, Toolbar, Typography } from '@material-ui/core';
import { LOCALE } from '../../../../locale';
import styles from './Header.module.scss';

const Header = memo(() => (
  <AppBar position="static" color="default" data-test-id="HeaderComponent">
    <Toolbar>
      <Container maxWidth="lg">
        <Grid container justify="flex-start" alignItems="center">
          <Grid item>
            <Typography variant="h6">
              <a
                href="http://www.parazapharma.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.logo}
              >
                <img src="/logo.png" alt={LOCALE.public.companyName} />
              </a>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Toolbar>
  </AppBar>
));

export default Header;
