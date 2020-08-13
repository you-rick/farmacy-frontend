import React from 'react';
import './assets/styles/style.scss';
import {
  Route, Switch, withRouter, Redirect,
} from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { USER_LOGIN_ROUTE, NOT_FOUND_ROUTE, USER_BASE_ROUTE } from './routes/routes';
import { hideNote } from './store/notificationReducer';

import Header from './components/shared/Header/Header';
import Home from './components/public/Home/Home';
import NotFound from './components/public/NotFound/NotFound';
import Preloader from './components/shared/Preloader/Preloader';
import Notification from './components/shared/Notification/Notification';
import LoginContainer from './components/user/auth/Login/LoginContainer';
import Dashboard from './components/user/dashboard/Dashboard';

const AppContainer = (props) => (
  <div className="App">
    <Header />
    <Switch>
      <Route exact path="/" render={() => <Home />} />
      <Route exact path={USER_LOGIN_ROUTE} render={() => <LoginContainer />} />
      <Route path={USER_BASE_ROUTE} render={() => <Dashboard />} />
      <Route path={NOT_FOUND_ROUTE} render={() => <NotFound />} />
      <Redirect to={NOT_FOUND_ROUTE} />
    </Switch>
    <Notification
      type={props.notification.type}
      msg={props.notification.msg}
      hideNote={props.hideNote}
    />
    {props.isDataFetching && <Preloader />}
  </div>
);

const mapStateToProps = (state) => ({
  notification: state.notification,
  isDataFetching: state.app.isDataFetching,
});
const App = compose(withRouter, connect(mapStateToProps, { hideNote }))(AppContainer);

export default App;
