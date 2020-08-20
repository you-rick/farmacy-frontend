import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Typography,
  Box,
  Badge,
} from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import themeStyles from './MyTickets.styles';
import { getTickets } from '../../../../store/ticketsReducer';
import TicketInfo from '../TicketInfo/TicketInfo';
import { LOCALE } from '../../../../locale';
import {
  USER_TICKETS_SOLVED_PARAM,
  USER_TICKETS_UNRESOLVED_PARAM,
  USER_TICKETS_UPDATED_PARAM,
} from '../../../../routes';

const useStyles = makeStyles((theme) => themeStyles(theme));

const aliases = {
  [USER_TICKETS_UNRESOLVED_PARAM]: 'unresolved',
  [USER_TICKETS_UPDATED_PARAM]: 'in_progress',
  [USER_TICKETS_SOLVED_PARAM]: 'done',
};

const MyTickets = ({ tickets, ticket, getTickets }) => {
  const classes = useStyles();
  const { filter } = useParams();
  const locale = LOCALE.user.dashboard.myTickets;
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTicket, setActiveTicket] = useState(ticket);
  const [ticketsList, setTicketsList] = useState(tickets);

  useEffect(() => {
    getTickets();
  }, [getTickets]);

  useEffect(() => {
    setTicketsList(
      !!filter && !!aliases[filter]
        ? tickets.filter((item) => item.status === aliases[filter])
        : tickets,
    );
  }, [filter, tickets]);

  const handleShowModal = (ticket) => {
    setModalOpen(true);
    setActiveTicket(ticket);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Box m="0 0 2rem">
        <Typography variant="h5" component="h1" align="center">
          {locale.headline}
        </Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{locale.tableHeaders.ticketNumber}</TableCell>
              <TableCell>{locale.tableHeaders.date}</TableCell>
              <TableCell>{locale.tableHeaders.issue}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ticketsList.map((item) => (
              <TableRow
                hover
                key={item.id}
                className={classes.tableRow}
                onClick={() => handleShowModal(item)}
              >
                <TableCell>
                  <Badge
                    variant="dot"
                    className={classes.root}
                    classes={{ badge: classes[item.status] }}
                  />
                  {item.ticketNumber}
                </TableCell>
                <TableCell>
                  {item.createdDate
                    ? <Moment format="DD/MM/YYYY">{item.createdDate}</Moment>
                    : <Typography variant="body2" color="textSecondary">-</Typography>}
                </TableCell>
                <TableCell>{item.issue}</TableCell>
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
  tickets: state.tickets.list,
  ticket: state.tickets.ticket,
});

export default connect(mapStateToProps, { getTickets })(MyTickets);
