import {reduxForm} from "redux-form";
import validate from "./validate";
import {connect} from "react-redux";
import {login} from "../../../../store/userReducer";
import React from "react";
import LoginForm from "./LoginForm";

const LoginReduxForm = reduxForm({form: 'user-login', validate})(LoginForm);

const Login = (props) => {
    const onSubmit = (data) => {
        props.login(data);
    };
    return <LoginReduxForm onSubmit={onSubmit}/>
};


export default connect(null, {login})(Login);
