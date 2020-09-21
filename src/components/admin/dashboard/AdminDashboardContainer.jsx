import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Box } from '@material-ui/core';
import {
  ADMIN_DASHBOARD_ROUTE,
  ADMIN_PROFILE_ROUTE,
  ADMIN_TICKETS_ROUTE,
  ADMIN_USERS_ROUTE,
  ADMIN_CREATE_USER_ROUTE,
  ADMIN_RESET_PASSWORD_ROUTE,
  ADMIN_TICKET_SETTINGS_ROUTE,
} from '../../../routes';
import { resetCurrentTicketData } from '../../../store/ticketsReducer';
import Dashboard from './Dashboard/Dashboard';
import LeftbarContainer from '../../shared/dashboard/LeftbarContainer/LeftbarContainer';
import Topbar from '../../shared/dashboard/Topbar/Topbar';
import Profile from './Profile/Profile';
import Tickets from './Tickets/Tickets';
import Users from './Users/Users';
import NewUserContainer from './NewUser/NewUserContainer';
import ResetPassword from './Profile/ResetPassword/ResetPassword';
import TicketSettingsContainer from './TicketSettings/TicketSettingsContainer';
import TicketInfo from '../../shared/dashboard/TicketInfo/TicketInfo';
import { roles } from '../../../core';

const AdminDashboardContainer = ({ isAuth, role, resetCurrentTicketData, currentTicket }) => {
  const [activeTicket, setActiveTicket] = useState(currentTicket);

  useEffect(() => {
    setActiveTicket(currentTicket);
  }, [currentTicket]);

  const handleCloseModal = () => {
    resetCurrentTicketData();
  };

  if (!isAuth || role !== roles.admin) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <LeftbarContainer />
      <Topbar />
      <Box className="dashboardContentWrap">
        <Switch>
          <Route exact path={ADMIN_DASHBOARD_ROUTE} render={() => <Dashboard />} />
          <Route path={ADMIN_PROFILE_ROUTE} render={() => <Profile />} />
          <Route path={ADMIN_RESET_PASSWORD_ROUTE} render={() => <ResetPassword />} />
          <Route path={ADMIN_TICKETS_ROUTE} render={() => <Tickets />} />
          <Route path={ADMIN_TICKET_SETTINGS_ROUTE} render={() => <TicketSettingsContainer />} />
          <Route path={ADMIN_USERS_ROUTE} render={() => <Users />} />
          <Route path={ADMIN_CREATE_USER_ROUTE} render={() => <NewUserContainer />} />
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
)(AdminDashboardContainer);
