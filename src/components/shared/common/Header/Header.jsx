import React from 'react';
import { AppBar, Container, Grid, Toolbar, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { LOCALE } from '../../../../locale';
import styles from './Header.module.scss';

const Header = () => (
  <AppBar position="static" color="default">
    <Toolbar>
      <Container maxWidth="lg">
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h6" className={styles.logo} component={NavLink} to="/">
              {/* eslint-disable-next-line */}
              <img src="/logo.png" alt={LOCALE.public.companyName} onClick={() => window.open('http://www.parazapharma.com', '_blank')}/>
            </Typography>
          </Grid>
          <Grid item />
        </Grid>
      </Container>
    </Toolbar>
  </AppBar>
);

export default Header;
