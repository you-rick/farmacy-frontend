import React from 'react';
import {
  Box, Button, Drawer, Divider, List, ListItem, ListItemIcon, ListItemText,
} from '@material-ui/core';
import { NavLink, useLocation } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import CachedIcon from '@material-ui/icons/Cached';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import themeStyles from './Leftbar.styles';
import { logout } from '../../../store/userReducer';
import { getTickets } from '../../../store/ticketsReducer';
import { LOCALE } from '../../../locale';
import {
  USER_NEW_TICKET_ROUTE,
  USER_TICKETS_ROUTE,
  USER_TICKETS_SOLVED_PARAM,
  USER_TICKETS_UNRESOLVED_PARAM,
  USER_TICKETS_UPDATED_PARAM,
} from '../../../routes';

const useStyles = makeStyles((theme) => themeStyles(theme));

const Leftbar = ({ logout, getTickets }) => {
  const classes = useStyles();
  const location = useLocation();
  const locale = LOCALE.user.dashboard.leftbar;

  const isTicketsPage = location.pathname.indexOf(USER_TICKETS_ROUTE) > -1;
  const updateTickets = () => getTickets();

  return (
    <Drawer variant="permanent" anchor="left" classes={{ paper: classes.drawer }}>
      <List>
        <ListItem button component={NavLink} to="/">
          <ListItemIcon className={classes.listIcon}>
            <HomeIcon className={classes.icon} />
          </ListItemIcon>
          <ListItemText primary={locale.home} />
        </ListItem>
      </List>
      <Divider className={classes.divider} />
      {
        isTicketsPage && (
          <>
            <List>
              <ListItem button onClick={updateTickets}>
                <ListItemIcon className={classes.listIcon}>
                  <CachedIcon className={classes.icon} />
                </ListItemIcon>
                <ListItemText primary={locale.views} />
              </ListItem>
            </List>
            <Divider className={classes.divider} />
            <Box m="1rem 0 0">
              <List>
                <ListItem>
                  <Button
                    variant="contained"
                    fullWidth
                    component={NavLink}
                    to={USER_NEW_TICKET_ROUTE}
                  >
                    {locale.createButton}
                  </Button>
                </ListItem>
                <ListItem
                  button
                  exact
                  component={NavLink}
                  to={USER_TICKETS_ROUTE}
                  className={classes.link}
                >
                  <ListItemText primary={`${locale.ticketsFilter.all} (5)`} />
                </ListItem>
                <ListItem
                  button
                  component={NavLink}
                  to={`${USER_TICKETS_ROUTE}/${USER_TICKETS_UNRESOLVED_PARAM}`}
                  className={classes.link}
                >
                  <ListItemText primary={`${locale.ticketsFilter.unresolved} (1)`} />
                </ListItem>
                <ListItem
                  button
                  component={NavLink}
                  to={`${USER_TICKETS_ROUTE}/${USER_TICKETS_UPDATED_PARAM}`}
                  className={classes.link}
                >
                  <ListItemText primary={`${locale.ticketsFilter.recentlyUpdated} (2)`} />
                </ListItem>
                <ListItem
                  button
                  component={NavLink}
                  to={`${USER_TICKETS_ROUTE}/${USER_TICKETS_SOLVED_PARAM}`}
                  className={classes.link}
                >
                  <ListItemText primary={`${locale.ticketsFilter.solved} (0)`} />
                </ListItem>
              </List>
            </Box>
          </>
        )

      }

      <Box m="3rem 0 0">
        <List>
          <ListItem button onClick={logout}>
            <ListItemText primary={locale.logout} />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default connect(null, {
  logout,
  getTickets,
})(Leftbar);
