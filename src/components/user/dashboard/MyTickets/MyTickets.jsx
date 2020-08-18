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
import { makeStyles } from '@material-ui/core/styles';
import themeStyles from './MyTickets.styles';
import { getTickets } from '../../../../store/ticketsReducer';
import TicketInfo from '../TicketInfo/TicketInfo';
import { LOCALE } from '../../../../locale';

const useStyles = makeStyles((theme) => themeStyles(theme));

const MyTickets = ({ tickets, getTickets }) => {
  const classes = useStyles();
  const locale = LOCALE.user.dashboard.myTickets;
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    getTickets();
  }, [getTickets]);

  const handleShowModal = () => {
    setModalOpen(true);
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
            {tickets.map((ticket) => (
              <TableRow
                hover
                key={ticket.id}
                className={classes.tableRow}
                onClick={() => handleShowModal(true)}
              >
                <TableCell>
                  <Badge
                    variant="dot"
                    className={classes.root}
                    classes={{ badge: classes[ticket.status] }}
                  />
                  {ticket.ticket_number}
                </TableCell>
                <TableCell>
                  {ticket.created_date
                    ? <Moment format="DD/MM/YYYY">{ticket.created_date}</Moment>
                    : <Typography variant="body2" color="textSecondary">-</Typography>}
                </TableCell>
                <TableCell>{ticket.issue}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TicketInfo open={modalOpen} onClose={handleCloseModal} />
    </>
  );
};

const mapStateToProps = (state) => ({
  tickets: state.tickets.list,
});

export default connect(mapStateToProps, { getTickets })(MyTickets);
