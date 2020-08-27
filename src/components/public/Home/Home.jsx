import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { USER_LOGIN_ROUTE, USER_TICKETS_ROUTE, ADMIN_DASHBOARD_ROUTE } from '../../../routes';

const Home = ({ isAuth, role }) => {
  const rolePath = role === 'user' ? USER_TICKETS_ROUTE : ADMIN_DASHBOARD_ROUTE;
  const redirectTo = (isAuth) => (isAuth ? rolePath : USER_LOGIN_ROUTE);

  return <Redirect to={redirectTo(isAuth)} />;
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  role: state.auth.role,
});
export default connect(mapStateToProps, {})(Home);
