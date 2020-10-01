import React from 'react';
import {
  Divider,
  List,
  ListItem,
  Box,
  ListItemIcon,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import { makeStyles } from '@material-ui/core/styles';
import themeStyles from '../../../shared/dashboard/LeftbarContainer/LeftbarContainer.styles';
import {
  ADMIN_DASHBOARD_ROUTE,
  ADMIN_TICKETS_ROUTE,
  ADMIN_USERS_ROUTE,
  ADMIN_TICKET_SETTINGS_ROUTE,
} from '../../../../routes';
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
      <Accordion square className={classes.accordion}>
        <AccordionSummary
          classes={{
            root: classes.accordionSummary,
            content: classes.accordionSummaryContent,
          }}
          expandIcon={<ExpandMoreIcon className={classes.icon} />}
        >
          <Typography>{locale.links.dashboard.title}</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionDetails}>
          <Box flexGrow={1}>
            <List>
              <ListItem button component={NavLink} to={ADMIN_DASHBOARD_ROUTE}>
                <ListItemText primary={locale.links.dashboard.overview} />
              </ListItem>
              <ListItem button component={NavLink} to={ADMIN_TICKETS_ROUTE}>
                <ListItemText primary={locale.links.dashboard.tickets} />
              </ListItem>
              <ListItem button component={NavLink} to={ADMIN_USERS_ROUTE}>
                <ListItemText primary={locale.links.dashboard.users} />
              </ListItem>
            </List>
          </Box>
        </AccordionDetails>
      </Accordion>
      <List>
        <ListItem button component={NavLink} to={ADMIN_TICKET_SETTINGS_ROUTE}>
          <ListItemText primary={locale.links.settings.title} />
        </ListItem>
      </List>
    </>
  );
};

export default AdminLeftbar;
