import { push } from 'connected-react-router';
import { reset } from 'redux-form';
import { authAPI } from '../api';
import { toggleIsDataFetching } from './appReducer';
import { hideNote, setNote } from './notificationReducer';
import { setToken, removeToken } from '../utils/helpers/token-handler';
import { setRole, removeRole } from '../utils/helpers/role-handler';
import { setTicketsData } from './ticketsReducer';
import { setAdminData } from './adminReducer';
import { USER_LOGIN_ROUTE, ADMIN_LOGIN_ROUTE } from '../routes';
import { serverErrorHelper } from '../utils/helpers/server-error-helper';
import { LOCALE } from '../locale';
import { roles } from '../core';

const successMsg = LOCALE.success.profile;
const requestReceivedMsg = LOCALE.success.forgotPassword.requestReceived;
const errorAuthMsg = LOCALE.errors.server.auth;

// Actions
const SET_PROFILE_DATA = 'SET_PROFILE_DATA';
const SET_AUTH_STATUS = 'SET_AUTH_STATUS';
const SET_ROLE_STATUS = 'SET_ROLE_STATUS';
const SET_TEMP_PASSWORD = 'SET_TEMP_PASSWORD';

// Initial Data
const initialState = {
  userId: null,
  role: null,
  email: null,
  firstName: null,
  lastName: null,
  isAuth: false,
  department: null,
  employedSince: null,
  phoneNumber: null,
  extension: null,
  mobileNumber: null,
  tempPassword: false,
};

// Reducer
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE_DATA:

      return {
        ...state,
        ...action.data,
      };
    case SET_AUTH_STATUS:
      return {
        ...state,
        isAuth: action.isAuth,
      };
    case SET_ROLE_STATUS:
      return {
        ...state,
        role: action.role,
      };
    case SET_TEMP_PASSWORD:
      return {
        ...state,
        tempPassword: action.data,
      };
    default:
      return state;
  }
};

// Action Creators
export const setProfileData = (data) => ({
  type: SET_PROFILE_DATA,
  data,
});
export const setAuthStatus = (isAuth) => ({
  type: SET_AUTH_STATUS,
  isAuth,
});
export const setRoleStatus = (role) => ({
  type: SET_ROLE_STATUS,
  role,
});
export const setTempPassword = (data) => ({
  type: SET_TEMP_PASSWORD,
  data,
});

// Thunks
export const getProfile = (role) => (dispatch) => {
  dispatch(toggleIsDataFetching(true));
  dispatch(hideNote());
  return authAPI.getProfile(role)
    .then((response) => {
      const res = response.data;
      console.log(response.data);
      const responseRole = res.userDetails.role;
      dispatch(toggleIsDataFetching(false));
      dispatch(setProfileData(res.userDetails));
      dispatch(setAuthStatus(true));

      if (responseRole === roles.user) dispatch(setTicketsData(res));
      if (responseRole === roles.admin) dispatch(setAdminData(res.adminDashboardStat));
    })
    .catch((error) => serverErrorHelper(dispatch, error));
};

export const updateProfile = (data) => (dispatch) => {
  dispatch(toggleIsDataFetching(true));
  dispatch(hideNote());
  authAPI.updateProfile(data)
    .then((response) => {
      dispatch(toggleIsDataFetching(false));
      dispatch(setProfileData(response.data));
      dispatch(setNote({
        msg: successMsg.profileUpdated,
        type: 'success',
        error: false,
        success: true,
      }));
    })
    .catch((error) => serverErrorHelper(dispatch, error));
};

export const resetPassword = (userId, data) => (dispatch) => {
  dispatch(toggleIsDataFetching(true));
  dispatch(hideNote());
  authAPI.resetPassword(userId, data)
    .then((response) => {
      dispatch(toggleIsDataFetching(false));
      dispatch(setTempPassword(false));
      dispatch(reset('reset-password'));
      setToken({
        username: data.email,
        password: data.newPassword,
      });
      dispatch(setNote({
        msg: response.data.message || successMsg.passwordUpdated,
        type: 'success',
        error: false,
        success: true,
      }));
    })
    .catch((error) => serverErrorHelper(dispatch, error));
};

export const login = (data, role) => (dispatch) => {
  dispatch(toggleIsDataFetching(true));
  dispatch(hideNote());
  authAPI.login(data, role)
    .then((response) => {
      const res = response.data;
      console.log(res);
      setToken(data);
      setRole(role);
      dispatch(toggleIsDataFetching(false));
      dispatch(setProfileData(res.userDetails));
      dispatch(setAuthStatus(true));

      if (role === roles.user) dispatch(setTicketsData(res));
      if (role === roles.admin) dispatch(setAdminData(res.adminDashboardStat));

      dispatch(reset(role === roles.user ? 'user-login' : 'admin-login'));
    })
    .catch((error) => {
      if (error.response) {
        if (error.response.status === 401) {
          serverErrorHelper(dispatch, error, errorAuthMsg);
        }
      } else {
        serverErrorHelper(dispatch, error);
      }
    });
};

export const forgotPassword = (data) => (dispatch) => {
  dispatch(toggleIsDataFetching(true));
  dispatch(hideNote());
  authAPI.forgotPassword(data)
    .then((response) => {
      dispatch(toggleIsDataFetching(false));
      dispatch(reset('forgot-password'));
      dispatch(push(USER_LOGIN_ROUTE));
      dispatch(setNote({
        msg: response.data.message || requestReceivedMsg,
        type: 'success',
        error: false,
        success: true,
        hideDuration: 6000,
      }));
    })
    .catch((error) => serverErrorHelper(dispatch, error));
};

export const logout = (role) => (dispatch) => {
  removeToken();
  removeRole();
  dispatch(setProfileData(initialState));
  dispatch(push(role === roles.user ? USER_LOGIN_ROUTE : ADMIN_LOGIN_ROUTE));
};

export default authReducer;
