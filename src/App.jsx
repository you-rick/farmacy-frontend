import React from 'react';
import './assets/styles/style.scss';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import {compose} from "redux";
import {connect} from "react-redux";
import {USER_LOGIN_ROUTE} from "./routes/routes";

import Header from './components/shared/Header/Header';
import Login from './components/user/auth/Login/Login';
import Home from './components/public/Home/Home';

const AppContainer = () => {
  return (
    <div className="App">
        <Header/>
        <Switch>
            <Route exact path="/" render={() => <Home/>}/>
            <Route path={USER_LOGIN_ROUTE} render={() => <Login/>}/>
        </Switch>
    </div>
  );
};

const App = compose(withRouter, connect(null, {}))(AppContainer);

export default App;
