import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Box, Typography } from '@material-ui/core';
import * as uuid from 'uuid';
import TicketsTable from '../../shared/TicketsTable/TicketsTable';
import TicketInfo from '../../../../shared/dashboard/TicketInfo/TicketInfo';
import { updateTicketStatus } from '../../../../../store/adminReducer';
import { ticketTypes } from '../../../../../core/ticketTypes';
import { LOCALE } from '../../../../../locale';

const NewTickets = ({ tickets, ticket, updateTicketStatus, requestor }) => {
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
      <TicketsTable onShowModal={handleShowModal} tickets={tickets} />
      <TicketInfo open={modalOpen} onClose={handleCloseModal} ticket={activeTicket} />
    </>
  );
};

const mapStateToProps = (state) => ({
  ticket: state.admin.ticket,
  requestor: state.auth.email,
});

export default connect(mapStateToProps, { updateTicketStatus })(NewTickets);
