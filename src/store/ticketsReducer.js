import _ from 'lodash';
import { push } from 'connected-react-router';
import { toggleIsDataFetching } from './appReducer';
import { ticketsAPI } from '../api';
import { hideNote, setNote } from './notificationReducer';
import { serverErrorHelper } from '../utils/helpers/server-error-helper';
import { LOCALE } from '../locale';
import { USER_TICKETS_ROUTE } from '../routes';

// Action
const SET_TICKETS_DATA = 'SET_TICKETS_DATA';
const successMsg = LOCALE.success.tickets;

// Initial Data
const initialState = {
  userId: null,
  list: [],
  ticket: {
    id: null,
    createdDate: null,
    ticketNumber: null,
    issue: null,
    status: null,
  },
  messageCounts: {
    all: 0,
    unresolved: 0,
    recentlyUpdated: 0,
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
        list: _.get(data, 'tickets', initialState.list)
          .filter((item) => item.createdDate),
        messageCounts: _.get(data, 'messageCounts', initialState.messageCounts),
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

export const createTicket = (data, userId) => (dispatch) => {
  dispatch(toggleIsDataFetching(true));
  dispatch(hideNote());
  ticketsAPI.createTicket(data, userId)
    .then((response) => {
      dispatch(toggleIsDataFetching(false));
      dispatch(push(USER_TICKETS_ROUTE));
      dispatch(setNote({
        msg: successMsg.ticketCreated,
        type: 'success',
        error: false,
        success: true,
      }));
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
