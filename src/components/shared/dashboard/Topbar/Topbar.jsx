import React, { useState } from 'react';
import { connect } from 'react-redux';
import { AppBar, Grid, Toolbar, IconButton, Menu, MenuItem } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import { logout } from '../../../../store/authReducer';
import themeStyles from './Topbar.styles';
import { LOCALE } from '../../../../locale';
import { USER_PROFILE_ROUTE, ADMIN_PROFILE_ROUTE } from '../../../../routes';
import SearchFormContainer from './SearchForm/SearchFormContainer';

const useStyles = makeStyles((theme) => themeStyles(theme));

const Topbar = ({ role, logout }) => {
  const classes = useStyles();
  const locale = LOCALE.common.dashboard.topbar;
  const profilePath = role === 'ROLE_USER' ? USER_PROFILE_ROUTE : ADMIN_PROFILE_ROUTE;
  const [anchorEl, setAnchorEl] = useState(null);
  const dropdownOpen = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout(role);
  };

  return (
    <AppBar position="fixed" color="default">
      <Toolbar className={classes.toolbar}>
        <Grid container justify="flex-end" alignItems="center">
          <Grid item>
            <Grid container alignItems="center" className={classes.rightPanel}>
              <SearchFormContainer />
              <IconButton
                aria-label="notifications"
                color="primary"
                className={classes.icon}
              >
                <NotificationsIcon />
              </IconButton>
              <>
                <IconButton
                  color="inherit"
                  className={classes.icon}
                  onClick={handleMenu}
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={dropdownOpen}
                  onClose={handleClose}
                >
                  <MenuItem component={NavLink} to={profilePath}>{locale.profile}</MenuItem>
                  <MenuItem onClick={handleLogout}>{locale.logout}</MenuItem>
                </Menu>
              </>
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

export default connect(mapStateToProps, { logout })(Topbar);
