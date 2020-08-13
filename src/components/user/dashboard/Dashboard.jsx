import React from 'react';
import {
  Redirect, Route, Switch, withRouter,
} from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { USER_TICKETS_ROUTE } from '../../../routes/routes';
import MyTickets from './MyTickets/MyTickets';

const Dashboard = ({ isAuth, role }) => {
  if (!isAuth || role !== 'user') {
    return <Redirect to="/" />;
  }

  return (
    <Switch>
      <Route exact path={USER_TICKETS_ROUTE} render={() => <MyTickets />} />
    </Switch>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.user.isAuth,
  role: state.user.role,
});
export default compose(connect(mapStateToProps, {}), withRouter)(Dashboard);
