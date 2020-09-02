import _ from 'lodash';
import { toggleIsDataFetching } from './appReducer';
import { hideNote } from './notificationReducer';
import { adminAPI } from '../api';
import { serverErrorHelper } from '../utils/helpers/server-error-helper';

// Actions
const SET_USERS_DATA = 'SET_USERS_DATA';

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
    default:
      return state;
  }
};

// Action Creators
export const setUsersData = (data) => ({
  type: SET_USERS_DATA,
  data,
});

// Thunks
export const getUsers = () => (dispatch) => {
  dispatch(toggleIsDataFetching(true));
  dispatch(hideNote());
  adminAPI.getUsers()
    .then((response) => {
      dispatch(toggleIsDataFetching(false));
      dispatch(setUsersData(response.data));
    })
    .catch((error) => serverErrorHelper(dispatch, error));
};

export default usersReducer;
