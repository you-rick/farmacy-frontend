import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Box, Typography } from '@material-ui/core';
import { getAdminTickets } from '../../../../store/ticketsReducer';
import TicketsTable from '../shared/TicketsTable/TicketsTable';
import TicketInfo from '../../../shared/TicketInfo/TicketInfo';
import { LOCALE } from '../../../../locale';

const Tickets = ({ tickets, ticket, getAdminTickets }) => {
  const locale = LOCALE.common.dashboard.tickets;
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTicket, setActiveTicket] = useState(ticket);

  useEffect(() => {
    getAdminTickets();
  }, [getAdminTickets]);

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
      <TicketsTable tickets={tickets} onShowModal={handleShowModal} />
      <TicketInfo open={modalOpen} onClose={handleCloseModal} ticket={activeTicket} />
    </>
  );
};

const mapStateToProps = (state) => ({
  tickets: state.tickets.list,
  ticket: state.tickets.ticket,
});
export default connect(mapStateToProps, { getAdminTickets })(Tickets);
