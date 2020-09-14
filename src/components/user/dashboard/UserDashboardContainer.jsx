import React, { useState, useEffect } from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Box } from '@material-ui/core';
import {
  USER_TICKETS_ROUTE,
  USER_NEW_TICKET_ROUTE,
  USER_PROFILE_ROUTE,
  USER_RESET_PASSWORD_ROUTE,
} from '../../../routes';
import { resetCurrentTicketData } from '../../../store/ticketsReducer';
import Topbar from '../../shared/dashboard/Topbar/Topbar';
import LeftbarContainer from '../../shared/dashboard/LeftbarContainer/LeftbarContainer';
import MyTickets from './MyTickets/MyTickets';
import NewTicketContainer from './NewTicket/NewTicketContainer';
import Profile from './Profile/Profile';
import ResetPassword from './Profile/ResetPassword/ResetPassword';
import TicketInfo from '../../shared/dashboard/TicketInfo/TicketInfo';

const UserDashboardContainer = ({ isAuth, role, currentTicket, resetCurrentTicketData }) => {
  const [activeTicket, setActiveTicket] = useState(currentTicket);

  useEffect(() => {
    setActiveTicket(currentTicket);
  }, [currentTicket]);

  const handleCloseModal = () => {
    resetCurrentTicketData();
  };

  if (!isAuth || role !== 'ROLE_USER') {
    return <Redirect to="/" />;
  }

  return (
    <>
      <LeftbarContainer />
      <Topbar />
      <Box className="dashboardContentWrap">
        <Switch>
          <Route exact path={`${USER_TICKETS_ROUTE}/:filter?`} render={() => <MyTickets />} />
          <Route path={USER_NEW_TICKET_ROUTE} render={() => <NewTicketContainer />} />
          <Route path={USER_PROFILE_ROUTE} render={() => <Profile />} />
          <Route path={USER_RESET_PASSWORD_ROUTE} render={() => <ResetPassword />} />
        </Switch>
      </Box>
      {activeTicket.id
      && <TicketInfo open onClose={handleCloseModal} ticket={activeTicket} />}
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  role: state.auth.role,
  currentTicket: state.tickets.ticket,
});

export default compose(
  connect(mapStateToProps, { resetCurrentTicketData }),
  withRouter,
)(UserDashboardContainer);
