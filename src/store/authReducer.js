import { push } from 'connected-react-router';
import { reset } from 'redux-form';
import { authAPI } from '../api';
import { toggleIsDataFetching } from './appReducer';
import { setNote, hideNote } from './notificationReducer';
import { setToken, removeToken } from '../utils/helpers/token-handler';
import { setTicketsData } from './ticketsReducer';
import { setAdminData } from './adminReducer';
import { USER_LOGIN_ROUTE, ADMIN_LOGIN_ROUTE } from '../routes';
import { serverErrorHelper } from '../utils/helpers/server-error-helper';

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

export const getProfile = () => (dispatch) => {
  dispatch(toggleIsDataFetching(true));
  dispatch(hideNote());
  return authAPI.profile()
    .then((response) => {
      const res = response.data;

      dispatch(toggleIsDataFetching(false));
      dispatch(setProfileData(res));
      dispatch(setAuthStatus(true));
    })
    .catch((error) => {
      dispatch(toggleIsDataFetching(false));
      dispatch(setNote({
        msg: serverErrorHelper(error),
        type: 'error',
        error: true,
        success: false,
      }));
    });
};

export const login = (data, role) => (dispatch) => {
  dispatch(toggleIsDataFetching(true));
  dispatch(hideNote());
  authAPI.login(data, role)
    .then((response) => {
      setToken(data);
      dispatch(toggleIsDataFetching(false));

      if (role === 'user') {
        dispatch(setTicketsData(response.data));
      } else {
        dispatch(setAdminData(response.data));
      }

      dispatch(getProfile())
        .then(() => {
          dispatch(reset(role === 'user' ? 'user-login' : 'admin-login'));
        });
    })
    .catch((error) => {
      dispatch(toggleIsDataFetching(false));
      dispatch(setNote({
        msg: serverErrorHelper(error),
        type: 'error',
        error: true,
        success: false,
      }));
    });
};

export const logout = (role) => (dispatch) => {
  removeToken();
  dispatch(setProfileData(initialState));
  dispatch(push(role === 'user' ? USER_LOGIN_ROUTE : ADMIN_LOGIN_ROUTE));
};

export default authReducer;
