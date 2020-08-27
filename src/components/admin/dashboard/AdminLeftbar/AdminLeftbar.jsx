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
      <Accordion square className={classes.accordion}>
        <AccordionSummary expandIcon={<ExpandMoreIcon className={classes.icon} />}>
          <Typography>{locale.links.dashboard.title}</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionDetails}>
          <Box flexGrow={1}>
            <List>
              <ListItem button component={NavLink} to="/">
                <ListItemText primary={locale.links.dashboard.tickets} />
              </ListItem>
              <ListItem button component={NavLink} to="/">
                <ListItemText primary={locale.links.dashboard.users} />
              </ListItem>
            </List>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion square className={classes.accordion}>
        <AccordionSummary expandIcon={<ExpandMoreIcon className={classes.icon} />}>
          <Typography>{locale.links.teams.title}</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionDetails}>
          <Typography>Teams menu</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square className={classes.accordion}>
        <AccordionSummary expandIcon={<ExpandMoreIcon className={classes.icon} />}>
          <Typography>{locale.links.settings.title}</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionDetails}>
          <Typography>Ticket Settings menu</Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default AdminLeftbar;
