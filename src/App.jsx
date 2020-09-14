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
  FORGOT_PASSWORD_ROUTE,
} from './routes';
import { hideNote } from './store/notificationReducer';
import { initializeApp } from './store/appReducer';

import Header from './components/shared/common/Header/Header';
import Home from './components/public/Home/Home';
import NotFound from './components/public/NotFound/NotFound';
import Preloader from './components/shared/common/Preloader/Preloader';
import Notification from './components/shared/common/Notification/Notification';
import UserLoginContainer from './components/user/auth/Login/UserLoginContainer';
import UserDashboardContainer from './components/user/dashboard/UserDashboardContainer';
import AdminLoginContainer from './components/admin/auth/Login/AdminLoginContainer';
import AdminDashboardContainer from './components/admin/dashboard/AdminDashboardContainer';
import ForgotPasswordContainer
  from './components/shared/auth/ForgotPassword/ForgotPasswordContainer';

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
        <Route path={USER_BASE_ROUTE} render={() => <UserDashboardContainer />} />
        <Route exact path={ADMIN_LOGIN_ROUTE} render={() => <AdminLoginContainer />} />
        <Route path={ADMIN_BASE_ROUTE} render={() => <AdminDashboardContainer />} />
        <Route path={NOT_FOUND_ROUTE} render={() => <NotFound />} />
        <Route path={FORGOT_PASSWORD_ROUTE} render={() => <ForgotPasswordContainer />} />
        <Redirect to={NOT_FOUND_ROUTE} />
      </Switch>
      <Notification
        type={notification.type}
        msg={notification.msg}
        hideNote={hideNote}
        hideDuration={notification.hideDuration}
      />
      {isDataFetching && <Preloader />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  notification: state.notification,
  initialized: state.app.initialized,
  isDataFetching: state.app.isDataFetching,
  isAuth: state.auth.isAuth,
});
const App = compose(withRouter, connect(mapStateToProps, {
  hideNote,
  initializeApp,
}))(AppContainer);

export default App;
