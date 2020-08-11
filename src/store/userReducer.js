import {userAPI} from "../api/api";
import {push} from "connected-react-router";
import {reset} from "redux-form";
import {toggleIsDataFetching} from "./appReducer";
import {setNote, hideNote} from "./notificationReducer";
import {setToken} from "../utils/helpers/token-handler";
import {USER_TICKETS_ROUTE} from "../routes/routes";

// Actions
const SET_PROFILE_DATA = 'SET_PROFILE_DATA';
const SET_AUTH_STATUS = 'SET_AUTH_STATUS';

// Initial Data
let initialState = {
    id: null,
    role: null,
    isAuth: false
};

// Reducer
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE_DATA:
            return {...state, ...action.data};
        case SET_AUTH_STATUS:
            return {...state, isAuth: action.isAuth};
        default:
            return state;
    }
};

// Action Creators
export const setProfileData = (data) => ({type: SET_PROFILE_DATA, data});
export const setAuthStatus = (isAuth) => ({type: SET_AUTH_STATUS, isAuth});

// Thunks
export const login = (data) => {
    return (dispatch) => {
        dispatch(toggleIsDataFetching(true));
        dispatch(hideNote());
        userAPI.login(data)
            .then(response => {
                let res = response.data;
                setToken(data);
                dispatch(setProfileData(res));
                dispatch(setAuthStatus(true));
                dispatch(toggleIsDataFetching(false));
                dispatch(reset('user-login'));
                dispatch(push(USER_TICKETS_ROUTE));
            }).catch(error => {
            dispatch(toggleIsDataFetching(false));
            dispatch(setNote({msg: error.response.data.message, type: "error", error: true, success: false}));
        })
    }
};


export default userReducer;
