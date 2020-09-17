import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Typography, Box } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { useLastLocation } from 'react-router-last-location';
import { getUserTickets } from '../../../../store/ticketsReducer';
import TicketInfo from '../../../shared/dashboard/TicketInfo/TicketInfo';
import { LOCALE } from '../../../../locale';
import {
  USER_TICKETS_SOLVED_PARAM,
  USER_TICKETS_UNRESOLVED_PARAM,
  USER_TICKETS_UPDATED_PARAM,
  USER_TICKETS_ROUTE,
} from '../../../../routes';
import TicketsTable from './TicketsTable/TicketsTable';

const aliases = {
  [USER_TICKETS_UNRESOLVED_PARAM]: 'unresolved',
  [USER_TICKETS_UPDATED_PARAM]: 'in_progress',
  [USER_TICKETS_SOLVED_PARAM]: 'done',
};

const MyTickets = ({ tickets, ticket, getUserTickets }) => {
  const { filter } = useParams();
  const lastLocation = useLastLocation();
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTicket, setActiveTicket] = useState(ticket);
  const [ticketsList, setTicketsList] = useState(tickets);

  useEffect(() => {
    if (lastLocation) {
      const isTicketsLastRoute = lastLocation.pathname.indexOf(USER_TICKETS_ROUTE) === -1;
      if (lastLocation.pathname !== '/' && isTicketsLastRoute) {
        getUserTickets();
      }
    }
  }, [getUserTickets, lastLocation, filter]);

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
          {LOCALE.user.dashboard.myTickets.headline}
        </Typography>
      </Box>
      <TicketsTable tickets={ticketsList} onShowModal={handleShowModal} />
      <TicketInfo open={modalOpen} onClose={handleCloseModal} ticket={activeTicket} />
    </>
  );
};

const mapStateToProps = (state) => ({
  tickets: state.tickets.list,
  ticket: state.tickets.ticket,
});

export default connect(mapStateToProps, { getUserTickets })(MyTickets);
