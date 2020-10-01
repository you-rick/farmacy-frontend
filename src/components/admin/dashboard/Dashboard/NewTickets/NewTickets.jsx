import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Box, Typography } from '@material-ui/core';
import TicketsTable from '../../shared/TicketsTable/TicketsTable';
import TicketInfo from '../../../../shared/dashboard/TicketInfo/TicketInfo';
import { ticketStatus } from '../../../../../core';
import { updateNewTicketStatus } from '../../../../../store/adminReducer';
import { LOCALE } from '../../../../../locale';

const NewTickets = ({ tickets, ticket, userId, updateNewTicketStatus, headlineText, requestor }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTicket, setActiveTicket] = useState(ticket);
  const newTicketsHeadline = LOCALE.admin.dashboard.stats.openTickets.newTickets;

  useEffect(() => {
    if (ticket.id && newTicketsHeadline === headlineText) {
      updateNewTicketStatus({
        'ticketNumber': ticket.ticketNumber,
        'requestor': requestor,
        'to': ticket.userDetails.email,
        'department': 'placeholder',
        'ticketType': ticket.ticketType,
        'priority': ticket.priority,
        'subject': ticket.subject,
        'status': ticketStatus.open,
      }, userId, ticket.id);
    }
  }, [updateNewTicketStatus, userId, requestor, ticket, headlineText, newTicketsHeadline]);

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
          {`${headlineText} Tickets`}
        </Typography>
      </Box>
      <TicketsTable onShowModal={handleShowModal} tickets={tickets} />
      <TicketInfo open={modalOpen} onClose={handleCloseModal} ticketId={activeTicket.id} />
    </>
  );
};

const mapStateToProps = (state) => ({
  ticket: state.ticketInfo,
  requestor: state.auth.email,
  userId: state.auth.userId,
  headlineText: state.admin.activeListHeadline,
});

export default connect(mapStateToProps, { updateNewTicketStatus })(NewTickets);
