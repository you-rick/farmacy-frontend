import _ from 'lodash';
import { toggleIsDataFetching } from './appReducer';
import { ticketsAPI } from '../api';
import { hideNote, setNote } from './notificationReducer';
import { serverErrorHelper } from '../utils/helpers/server-error-helper';

// Action
const SET_TICKETS_DATA = 'SET_TICKETS_DATA';

// Initial Data
const initialState = {
  userId: null,
  list: [],
  ticket: {
    id: null,
    created_date: null,
    ticket_number: null,
    issue: null,
    status: null,
  },
  message_counts: {
    all: 0,
    unresolved: 0,
    recently_updated: 0,
    solved: 0,
  },
};

// Reducer
const ticketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TICKETS_DATA: {
      const { data } = action;
      return {
        ...state,
        userId: _.get(data, 'userId', initialState.userId),
        list: _.get(data, 'tickets', initialState.list),
        message_counts: _.get(data, 'message_counts', initialState.message_counts),
      };
    }
    default:
      return state;
  }
};

// Action Creators
export const setTicketsData = (data) => ({
  type: SET_TICKETS_DATA,
  data,
});

// Thunks
export const getTickets = () => (dispatch) => {
  dispatch(toggleIsDataFetching(true));
  dispatch(hideNote());
  ticketsAPI.getTickets()
    .then((response) => {
      dispatch(toggleIsDataFetching(false));
      dispatch(setTicketsData(response.data));
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
export default ticketsReducer;
