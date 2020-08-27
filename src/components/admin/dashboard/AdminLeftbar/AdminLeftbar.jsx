import React from 'react';
import { Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import { makeStyles } from '@material-ui/core/styles';
import themeStyles from '../../../shared/LeftbarContainer/LeftbarContainer.styles';
import { ADMIN_DASHBOARD_ROUTE } from '../../../../routes';
import { LOCALE } from '../../../../locale';

const useStyles = makeStyles((theme) => themeStyles(theme));

const AdminLeftbar = () => {
  const classes = useStyles();
  const locale = LOCALE.admin.dashboard.leftbar;

  return (
    <>
      <List>
        <ListItem button component={NavLink} to={ADMIN_DASHBOARD_ROUTE}>
          <ListItemIcon className={classes.listIcon}>
            <HomeIcon className={classes.icon} />
          </ListItemIcon>
          <ListItemText primary={locale.home} />
        </ListItem>
      </List>
      <Divider className={classes.divider} />
    </>
  );
};

export default AdminLeftbar;
