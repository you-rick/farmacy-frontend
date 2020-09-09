import React from 'react';
import { connect } from 'react-redux';
import { AppBar, Grid, Toolbar, InputBase, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import themeStyles from './Topbar.styles';
import { LOCALE } from '../../../locale';
import { USER_PROFILE_ROUTE, ADMIN_PROFILE_ROUTE } from '../../../routes';

const useStyles = makeStyles((theme) => themeStyles(theme));

const Topbar = ({ role }) => {
  const classes = useStyles();
  const locale = LOCALE.common.dashboard.topbar;
  const profilePath = role === 'ROLE_USER' ? USER_PROFILE_ROUTE : ADMIN_PROFILE_ROUTE;

  return (
    <AppBar position="fixed" color="default">
      <Toolbar className={classes.toolbar}>
        <Grid container justify="flex-end" alignItems="center">
          <Grid item>
            <Grid container alignItems="center" className={classes.rightPanel}>
              <IconButton
                aria-label="account of current user"
                color="inherit"
                className={classes.icon}
                component={NavLink}
                to={profilePath}
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
                className={classes.icon}
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

const mapStateToProps = (state) => ({
  role: state.auth.role,
});

export default connect(mapStateToProps, {})(Topbar);
