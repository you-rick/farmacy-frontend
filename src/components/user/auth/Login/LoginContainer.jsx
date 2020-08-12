import {reduxForm} from "redux-form";
import validate from "./validate";
import {connect} from "react-redux";
import {login} from "../../../../store/userReducer";
import {Redirect} from "react-router-dom";
import React from "react";
import LoginForm from "./LoginForm";

const LoginReduxForm = reduxForm({form: 'user-login', validate})(LoginForm);

const LoginContainer = (props) => {
    const onSubmit = (data) => {
        props.login(data);
    };

    if (props.isAuth) {
        return <Redirect to='/'/>
    }

    return <LoginReduxForm onSubmit={onSubmit}/>
};


const mapStateToProps = (state) => ({
    isAuth: state.user.isAuth
});

export default connect(mapStateToProps, {login})(LoginContainer);
