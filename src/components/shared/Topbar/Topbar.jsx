import React from 'react';
import {
  AppBar, Grid, Toolbar, InputBase, IconButton,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { makeStyles } from '@material-ui/core/styles';
import themeStyles from './Topbar.styles';
import { LOCALE } from '../../../locale';

const useStyles = makeStyles((theme) => themeStyles(theme));

const Topbar = () => {
  const classes = useStyles();
  const locale = LOCALE.user.dashboard.topbar;

  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Grid container justify="flex-end" alignItems="center">
          <Grid item>
            <Grid container alignItems="center" className={classes.rightPanel}>
              <IconButton
                aria-label="account of current user"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder={locale.searchPlaceholder}
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
              <IconButton
                aria-label="notifications"
                color="primary"
              >
                <NotificationsIcon />
              </IconButton>
              <IconButton
                aria-label="help"
                className={classes.helpBtn}
              >
                <HelpOutlineIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
