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

const successMsg = LOCALE.success.profile;

// Actions
const SET_PROFILE_DATA = 'SET_PROFILE_DATA';
const SET_AUTH_STATUS = 'SET_AUTH_STATUS';
const SET_ROLE_STATUS = 'SET_ROLE_STATUS';

// Initial Data
const initialState = {
  userId: null,
  role: null,
  email: null,
  firstName: null,
  lastName: null,
  isAuth: false,
};

// Reducer
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE_DATA:
      return { ...state, ...action.data };
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

// Thunks
export const getProfile = (role) => (dispatch) => {
  dispatch(toggleIsDataFetching(true));
  dispatch(hideNote());
  return authAPI.getProfile(role)
    .then((response) => {
      const res = response.data;
      const responseRole = res.user.role;

      dispatch(toggleIsDataFetching(false));
      dispatch(setProfileData(res.user));
      dispatch(setAuthStatus(true));

      if (responseRole === 'ROLE_USER') dispatch(setTicketsData(res));
      if (responseRole === 'ROLE_ADMIN') dispatch(setAdminData(res));
    })
    .catch((error) => serverErrorHelper(dispatch, error));
};

export const updateProfile = (data) => (dispatch) => {
  dispatch(toggleIsDataFetching(true));
  dispatch(hideNote());
  authAPI.updateProfile(data)
    .then(() => {
      dispatch(toggleIsDataFetching(false));
      dispatch(setNote({
        msg: successMsg.profileUpdated,
        type: 'success',
        error: false,
        success: true,
      }));
    })
    .catch((error) => serverErrorHelper(dispatch, error));
};

export const resetPassword = (data) => (dispatch) => {
  dispatch(toggleIsDataFetching(true));
  dispatch(hideNote());
  authAPI.resetPassword(data)
    .then((response) => {
      dispatch(toggleIsDataFetching(false));
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
      setToken(data);
      setRole(role);
      const res = response.data;
      dispatch(toggleIsDataFetching(false));
      dispatch(setProfileData(res.user));
      dispatch(setAuthStatus(true));

      if (role === 'ROLE_USER') dispatch(setTicketsData(res));
      if (role === 'ROLE_ADMIN') dispatch(setAdminData(res));

      dispatch(reset(role === 'ROLE_USER' ? 'user-login' : 'admin-login'));
      console.log(res);
    })
    .catch((error) => serverErrorHelper(dispatch, error));
};

export const logout = (role) => (dispatch) => {
  removeToken();
  removeRole();
  dispatch(setProfileData(initialState));
  dispatch(push(role === 'ROLE_USER' ? USER_LOGIN_ROUTE : ADMIN_LOGIN_ROUTE));
};

export default authReducer;
