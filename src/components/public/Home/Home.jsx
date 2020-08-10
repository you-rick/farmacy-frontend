import React from 'react';
import {Redirect} from "react-router-dom";
import {USER_LOGIN_ROUTE} from "../../../routes/routes";

const Home = () => {
    return <Redirect to={USER_LOGIN_ROUTE}/>
};


export default Home;
