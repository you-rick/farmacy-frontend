import React from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Box } from '@material-ui/core';
import { ADMIN_DASHBOARD_ROUTE } from '../../../routes';

import Dashboard from './Dashboard/Dashboard';

const AdminDashboardContainer = ({ isAuth, role }) => {
  if (!isAuth || role !== 'admin') {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Box className="dashboardContentWrap">
        <Switch>
          <Route exact path={ADMIN_DASHBOARD_ROUTE} render={() => <Dashboard />} />
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
