import _ from 'lodash';
import { push } from 'connected-react-router';
import { toggleIsDataFetching } from './appReducer';
import { ticketsAPI, adminAPI } from '../api';
import { hideNote, setNote } from './notificationReducer';
import { serverErrorHelper } from '../utils/helpers/server-error-helper';
import { LOCALE } from '../locale';
import { USER_TICKETS_ROUTE } from '../routes';

const successMsg = LOCALE.success.tickets;

// Action
const SET_TICKETS_DATA = 'SET_TICKETS_DATA';

// Initial Data
const initialState = {
  userId: null,
  list: [],
  ticket: {
    id: null,
    createdDate: null,
    ticketNumber: null,
    subject: null,
    status: null,
    priority: null,
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
export const createTicket = (data, userId) => (dispatch) => {
  dispatch(toggleIsDataFetching(true));
  dispatch(hideNote());
  ticketsAPI.createTicket(data, userId)
    .then((response) => {
      const res = response.data;

      dispatch(toggleIsDataFetching(false));
      dispatch(push(USER_TICKETS_ROUTE));
      dispatch(setNote({
        msg: successMsg.ticketCreated,
        type: 'success',
        error: false,
        success: true,
      }));
      console.log(res);
    })
    .catch((error) => serverErrorHelper(dispatch, error));
};

const handleGetTickets = (dispatch, apiMethod) => {
  dispatch(toggleIsDataFetching(true));
  dispatch(hideNote());
  apiMethod()
    .then((response) => {
      dispatch(toggleIsDataFetching(false));
      dispatch(setTicketsData(response.data));
    })
    .catch((error) => serverErrorHelper(dispatch, error));
};

export const getUserTickets = () => (dispatch) => {
  handleGetTickets(dispatch, ticketsAPI.getTickets.bind(ticketsAPI));
};
export const getAdminTickets = () => (dispatch) => {
  handleGetTickets(dispatch, adminAPI.getTickets.bind(adminAPI));
};

export default ticketsReducer;
