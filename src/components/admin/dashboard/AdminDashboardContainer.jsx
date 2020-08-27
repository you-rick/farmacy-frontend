import React from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Box } from '@material-ui/core';
import { ADMIN_DASHBOARD_ROUTE, ADMIN_PROFILE_ROUTE } from '../../../routes';

import Dashboard from './Dashboard/Dashboard';
import LeftbarContainer from '../../shared/LeftbarContainer/LeftbarContainer';
import Topbar from '../../shared/Topbar/Topbar';
import Profile from './Profile/Profile';

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
