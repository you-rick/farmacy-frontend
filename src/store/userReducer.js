import { push } from 'connected-react-router';
import { reset } from 'redux-form';
import { userAPI } from '../api';
import { toggleIsDataFetching } from './appReducer';
import { setNote, hideNote } from './notificationReducer';
import { setToken, removeToken } from '../utils/helpers/token-handler';
import { setTicketsData } from './ticketsReducer';
import { USER_TICKETS_ROUTE, USER_LOGIN_ROUTE } from '../routes';
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
const userReducer = (state = initialState, action) => {
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
  return userAPI.profile()
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

export const login = (data) => (dispatch) => {
  dispatch(toggleIsDataFetching(true));
  dispatch(hideNote());
  userAPI.login(data)
    .then((response) => {
      const res = response.data;
      setToken(data);
      dispatch(toggleIsDataFetching(false));
      dispatch(setTicketsData(res));

      dispatch(getProfile())
        .then(() => {
          dispatch(reset('user-login'));
          dispatch(push(USER_TICKETS_ROUTE));
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

export const logout = () => (dispatch) => {
  removeToken();
  dispatch(setProfileData(initialState));
  dispatch(push(USER_LOGIN_ROUTE));
};

export default userReducer;
