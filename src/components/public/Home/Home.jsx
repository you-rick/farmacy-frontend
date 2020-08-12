import React from 'react';
import {Redirect} from "react-router-dom";
import {USER_LOGIN_ROUTE, USER_TICKETS_ROUTE} from "../../../routes/routes";
import {connect} from "react-redux";

const Home = ({isAuth}) => {
    return <Redirect to={isAuth ? USER_TICKETS_ROUTE : USER_LOGIN_ROUTE}/>
};

const mapStateToProps = (state) => ({
    isAuth: state.user.isAuth
});
export default connect(mapStateToProps, {})(Home);
