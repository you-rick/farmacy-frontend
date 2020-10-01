import _ from 'lodash';
import { push } from 'connected-react-router';
import { toggleIsDataFetching } from './appReducer';
import { hideNote, setNote } from './notificationReducer';
import { usersAPI } from '../api';
import { serverErrorHelper } from '../utils/helpers/server-error-helper';
import { LOCALE } from '../locale';
import { ADMIN_USERS_ROUTE } from '../routes';

const successMsg = LOCALE.success.users;

// Actions
const SET_USERS_DATA = 'SET_USERS_DATA';
const REMOVE_DELETED_USER = 'REMOVE_DELETED_USER';

// Initial Data
const initialState = {
  list: [],
  user: {
    userId: null,
    role: null,
    firstName: null,
    lastName: null,
    email: null,
    active: null,
    department: null,
    employedSince: null,
  },
};

// Reducer
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS_DATA: {
      const { data } = action;
      return {
        ...state,
        list: _.get(data, 'users', initialState.list),
      };
    }
    case REMOVE_DELETED_USER: {
      const { userId } = action;
      return {
        ...state,
        list: state.list.filter((user) => user.userId !== userId),
      };
    }
    default:
      return state;
  }
};

// Action Creators
export const setUsersData = (data) => ({
  type: SET_USERS_DATA,
  data,
});
export const removeDeletedUser = (userId) => ({
  type: REMOVE_DELETED_USER,
  userId,
});

// Thunks
export const getUsers = () => (dispatch) => {
  dispatch(toggleIsDataFetching(true));
  dispatch(hideNote());
  usersAPI.getUsers()
    .then((response) => {
      console.log(response);
      dispatch(toggleIsDataFetching(false));
      dispatch(setUsersData(response.data));
    })
    .catch((error) => serverErrorHelper(dispatch, error));
};

export const createUser = (data) => (dispatch) => {
  dispatch(toggleIsDataFetching(true));
  dispatch(hideNote());
  usersAPI.createUser(data)
    .then(() => {
      dispatch(toggleIsDataFetching(false));
      dispatch(push(ADMIN_USERS_ROUTE));
      dispatch(setNote({
        msg: successMsg.userCreated,
        type: 'success',
        error: false,
        success: true,
      }));
    })
    .catch((error) => serverErrorHelper(dispatch, error));
};

export const deleteUser = (adminId, userId) => (dispatch) => {
  dispatch(toggleIsDataFetching(true));
  dispatch(hideNote());
  usersAPI.deleteUser(adminId, userId)
    .then(() => {
      dispatch(toggleIsDataFetching(false));
      dispatch(removeDeletedUser(userId));
      dispatch(setNote({
        msg: successMsg.userRemoved,
        type: 'success',
        error: false,
        success: true,
      }));
    })
    .catch((error) => serverErrorHelper(dispatch, error));
};

export default usersReducer;
