import React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import Moment from 'react-moment';
import { makeStyles } from '@material-ui/core/styles';
import themeStyles from './TicketsTable.styles';
import { LOCALE } from '../../../../../locale';

const useStyles = makeStyles((theme) => themeStyles(theme));

const TicketsTable = ({ tickets, onShowModal }) => {
  const classes = useStyles();
  const locale = LOCALE.common.dashboard.tickets;

  const handleShowModal = (ticket) => {
    onShowModal(ticket);
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>{locale.tableHeaders.ticketNumber}</TableCell>
            <TableCell>{locale.tableHeaders.date}</TableCell>
            <TableCell>{locale.tableHeaders.priority}</TableCell>
            <TableCell className={classes.subjectCol}>{locale.tableHeaders.subject}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tickets.map((item) => (
            <TableRow
              hover
              key={item.id}
              className={classes.tableRow}
              onClick={() => handleShowModal(item)}
            >
              <TableCell>
                {item.ticketNumber}
              </TableCell>
              <TableCell>
                <Moment format="DD/MM/YYYY">{item.createdDate}</Moment>
              </TableCell>
              <TableCell className={classes[item.priority]}>
                {item.priority}
              </TableCell>
              <TableCell className={classes.subjectCol}>{item.subject}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TicketsTable;
