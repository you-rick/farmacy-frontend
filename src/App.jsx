import React, { useEffect } from 'react';
import './assets/styles/style.scss';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {
  USER_LOGIN_ROUTE,
  NOT_FOUND_ROUTE,
  USER_BASE_ROUTE,
  ADMIN_BASE_ROUTE,
  ADMIN_LOGIN_ROUTE,
} from './routes';
import { hideNote } from './store/notificationReducer';
import { initializeApp } from './store/appReducer';

import Header from './components/shared/Header/Header';
import Home from './components/public/Home/Home';
import NotFound from './components/public/NotFound/NotFound';
import Preloader from './components/shared/Preloader/Preloader';
import Notification from './components/shared/Notification/Notification';
import UserLoginContainer from './components/user/auth/Login/UserLoginContainer';
import UserDashboard from './components/user/dashboard/UserDashboard';
import AdminLoginContainer from './components/admin/auth/Login/AdminLoginContainer';
import AdminDashboard from './components/admin/auth/dashboard/AdminDashboard';

const AppContainer = (props) => {
  const { isDataFetching, initialized, isAuth, notification, hideNote, initializeApp } = props;

  useEffect(() => {
    initializeApp();
  }, [initializeApp]);

  if (!initialized) {
    return <Preloader />;
  }

  return (
    <div className="App">
      {!isAuth && <Header />}
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path={USER_LOGIN_ROUTE} render={() => <UserLoginContainer />} />
        <Route path={USER_BASE_ROUTE} render={() => <UserDashboard />} />
        <Route path={ADMIN_LOGIN_ROUTE} render={() => <AdminLoginContainer />} />
        <Route path={ADMIN_BASE_ROUTE} render={() => <AdminDashboard />} />
        <Route path={NOT_FOUND_ROUTE} render={() => <NotFound />} />
        <Redirect to={NOT_FOUND_ROUTE} />
      </Switch>
      <Notification type={notification.type} msg={notification.msg} hideNote={hideNote} />
      {isDataFetching && <Preloader />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  notification: state.notification,
  initialized: state.app.initialized,
  isDataFetching: state.app.isDataFetching,
  isAuth: state.user.isAuth,
});
const App = compose(withRouter, connect(mapStateToProps, {
  hideNote,
  initializeApp,
}))(AppContainer);

export default App;
