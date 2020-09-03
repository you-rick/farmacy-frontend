import _ from 'lodash';
import { toggleIsDataFetching } from './appReducer';
import { hideNote, setNote } from './notificationReducer';
import { usersAPI } from '../api';
import { serverErrorHelper } from '../utils/helpers/server-error-helper';
import { LOCALE } from '../locale';

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
      dispatch(toggleIsDataFetching(false));
      dispatch(setUsersData(response.data));
    })
    .catch((error) => serverErrorHelper(dispatch, error));
};

export const deleteUser = (userId) => (dispatch) => {
  dispatch(toggleIsDataFetching(true));
  dispatch(hideNote());
  usersAPI.deleteUser(userId)
    .then((response) => {
      dispatch(toggleIsDataFetching(false));
      dispatch(removeDeletedUser(userId));
      dispatch(setNote({
        msg: successMsg.userRemoved,
        type: 'success',
        error: false,
        success: true,
      }));
      console.log(response);
    })
    .catch((error) => serverErrorHelper(dispatch, error));
};

export default usersReducer;
