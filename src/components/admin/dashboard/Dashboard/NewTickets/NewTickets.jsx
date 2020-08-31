import React from 'react';
import Moment from 'react-moment';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import themeStyles from './NewTickets.styles';
import { LOCALE } from '../../../../../locale';

const useStyles = makeStyles((theme) => themeStyles(theme));

const NewTickets = ({ tickets }) => {
  const classes = useStyles();
  const locale = LOCALE.common.dashboard.tickets;

  return (
    <>
      <Box m="0 0 2rem">
        <Typography variant="h5" component="h1" align="center">
          {LOCALE.admin.dashboard.newTickets.headline}
        </Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>{locale.tableHeaders.ticketNumber}</TableCell>
              <TableCell>{locale.tableHeaders.date}</TableCell>
              <TableCell>{locale.tableHeaders.priority}</TableCell>
              <TableCell className={classes.issueCol}>{locale.tableHeaders.issue}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tickets.map((item) => (
              <TableRow hover key={item.id} className={classes.tableRow}>
                <TableCell>
                  {item.ticketNumber}
                </TableCell>
                <TableCell>
                  <Moment format="DD/MM/YYYY">{item.createdDate}</Moment>
                </TableCell>
                <TableCell className={classes[item.priority]}>
                  {item.priority}
                </TableCell>
                <TableCell className={classes.issueCol}>{item.issue}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default NewTickets;
