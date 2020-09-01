import React, { useState } from 'react';
import { connect } from 'react-redux';
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
import * as uuid from 'uuid';
import themeStyles from './NewTickets.styles';
import { LOCALE } from '../../../../../locale';
import TicketInfo from '../../../../shared/TicketInfo/TicketInfo';
import { updateTicketStatus } from '../../../../../store/adminReducer';
import { ticketTypes } from '../../../../../core/ticketTypes';

const useStyles = makeStyles((theme) => themeStyles(theme));

const NewTickets = ({ tickets, ticket, updateTicketStatus, requestor }) => {
  const classes = useStyles();
  const locale = LOCALE.common.dashboard.tickets;
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTicket, setActiveTicket] = useState(ticket);

  const handleTicketStatus = (ticket) => {
    updateTicketStatus({
      'ticketId': uuid.v4(),
      'requestor': requestor,
      'to': 'admin',
      'department': 'placeholder',
      'ticketType': ticketTypes.incident,
      'priority': ticket.priority,
      'subject': ticket.subject,
      'status': 'open',
    }, ticket.id);
  };

  const handleShowModal = (ticket) => {
    setModalOpen(true);
    setActiveTicket(ticket);
    handleTicketStatus(ticket);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
  };

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
      <TicketInfo open={modalOpen} onClose={handleCloseModal} ticket={activeTicket} />
    </>
  );
};

const mapStateToProps = (state) => ({
  ticket: state.admin.ticket,
  requestor: state.auth.email,
});

export default connect(mapStateToProps, { updateTicketStatus })(NewTickets);
