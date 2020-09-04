import React from 'react';
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
} from '../../../routes';

import Dashboard from './Dashboard/Dashboard';
import LeftbarContainer from '../../shared/LeftbarContainer/LeftbarContainer';
import Topbar from '../../shared/Topbar/Topbar';
import Profile from './Profile/Profile';
import Tickets from './Tickets/Tickets';
import Users from './Users/Users';
import NewUserContainer from './NewUser/NewUserContainer';

const AdminDashboardContainer = ({ isAuth, role }) => {
  if (!isAuth || role !== 'admin') {
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
          <Route path={ADMIN_TICKETS_ROUTE} render={() => <Tickets />} />
          <Route path={ADMIN_USERS_ROUTE} render={() => <Users />} />
          <Route path={ADMIN_CREATE_USER_ROUTE} render={() => <NewUserContainer />} />
        </Switch>
      </Box>
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  role: state.auth.role,
});
export default compose(connect(mapStateToProps, {}), withRouter)(AdminDashboardContainer);
