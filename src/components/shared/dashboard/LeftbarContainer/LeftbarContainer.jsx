import React, { useState, useEffect } from 'react';
import {
  Box, Drawer, Divider, List, ListItem, ListItemIcon, ListItemText, IconButton, Hidden,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { useLocation } from 'react-router-dom';
import { useWindowWidth } from '@react-hook/window-size/throttled';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import themeStyles from './LeftbarContainer.styles';
import { logout } from '../../../../store/authReducer';
import { LOCALE } from '../../../../locale';
import { layoutBreakpoint } from '../../../../utils/helpers/layout-breakpoints';
import UserLeftbar from '../../../user/dashboard/UserLeftbar/UserLeftbar';
import AdminLeftbar from '../../../admin/dashboard/AdminLeftbar/AdminLeftbar';

const useStyles = makeStyles((theme) => themeStyles(theme));

const LeftbarContainer = ({ logout, role, leftbarShown }) => {
  const classes = useStyles();
  const location = useLocation();
  const windowWidth = useWindowWidth();
  const leftbarState = windowWidth < layoutBreakpoint.md ? 'temporary' : 'permanent';
  const [leftbarType, setLeftbarType] = useState(leftbarState);
  const [leftbarOpen, setLeftbarOpen] = useState(false);

  const handleLeftbar = () => {
    setLeftbarOpen(!leftbarOpen);
  };

  const handleLogout = () => {
    logout(role);
  };

  useEffect(() => {
    setLeftbarType(leftbarState);
  }, [windowWidth, leftbarState]);

  useEffect(() => {
    setLeftbarOpen(leftbarShown);
  }, [leftbarShown]);

  useEffect(() => {
    setLeftbarOpen(false);
  }, [location]);

  return (
    <>
      <Hidden mdUp>
        <IconButton
          aria-label="LeftbarContainer toggle"
          color="inherit"
          className={classes.toggleBtn}
          onClick={handleLeftbar}
        >
          <MenuIcon />
        </IconButton>
      </Hidden>

      <Drawer
        variant={leftbarType}
        anchor="left"
        open={leftbarOpen}
        classes={{ paper: classes.drawer }}
        ModalProps={{ onBackdropClick: handleLeftbar }}
      >
        <Hidden mdUp>
          <List>
            <ListItem className={classes.companyWrap}>
              <ListItemText
                classes={{ primary: classes.company }}
                primary={LOCALE.public.companyName}
              />
              <ListItemIcon className={classes.closeIcon}>
                <CloseIcon className={classes.icon} onClick={handleLeftbar} />
              </ListItemIcon>
            </ListItem>
          </List>
          <Divider className={classes.divider} />
        </Hidden>

        {role === 'ROLE_USER' && <UserLeftbar />}
        {role === 'ROLE_ADMIN' && <AdminLeftbar />}

        <Box m="3rem 0 0">
          <List>
            <ListItem button onClick={handleLogout}>
              <ListItemText primary={LOCALE.auth.logout} />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

const mapStateToProps = (state) => ({
  role: state.auth.role,
});

export default connect(mapStateToProps, { logout })(LeftbarContainer);
