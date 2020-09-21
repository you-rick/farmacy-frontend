import _ from 'lodash';
import { push } from 'connected-react-router';
import { reset } from 'redux-form';
import { toggleIsDataFetching } from './appReducer';
import { ticketsAPI, adminAPI } from '../api';
import { hideNote, setNote } from './notificationReducer';
import { serverErrorHelper } from '../utils/helpers/server-error-helper';
import { LOCALE } from '../locale';
import { USER_TICKETS_ROUTE } from '../routes';
import { setMessagesData } from './messagesReducer';

const successMsg = LOCALE.success.tickets;

// Action
const SET_TICKETS_DATA = 'SET_TICKETS_DATA';
const SET_CURRENT_TICKET_DATA = 'SET_CURRENT_TICKET_DATA';
const RESET_CURRENT_TICKET_DATA = 'RESET_CURRENT_TICKET_DATA';

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
    requestor: null,
    to: null,
    department: null,
    ticketType: null,
    description: null,
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
          .filter((item) => item.createdDate && item.priority),
        messageCounts: _.get(data, 'messageCounts', initialState.messageCounts),
      };
    }
    case SET_CURRENT_TICKET_DATA: {
      const { data } = action;
      return {
        ...state,
        ticket: { ...data },
      };
    }
    case RESET_CURRENT_TICKET_DATA: {
      return {
        ...state,
        ticket: initialState.ticket,
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
export const setCurrentTicketData = (data) => ({
  type: SET_CURRENT_TICKET_DATA,
  data,
});
export const resetCurrentTicketData = () => ({
  type: RESET_CURRENT_TICKET_DATA,
});

// Thunks
export const createTicket = (data, userId) => (dispatch) => {
  dispatch(toggleIsDataFetching(true));
  dispatch(hideNote());
  ticketsAPI.createTicket(data, userId)
    .then(() => {
      dispatch(toggleIsDataFetching(false));
      dispatch(push(USER_TICKETS_ROUTE));
      dispatch(setNote({
        msg: successMsg.ticketCreated,
        type: 'success',
        error: false,
        success: true,
      }));
    })
    .catch((error) => serverErrorHelper(dispatch, error));
};

export const updateTicket = (data, ticketId, userId, role) => (dispatch) => {
  dispatch(toggleIsDataFetching(true));
  dispatch(hideNote());
  ticketsAPI.updateTicket(data, ticketId, userId, role)
    .then((response) => {
      const { messages } = response.data;
      dispatch(toggleIsDataFetching(false));
      dispatch(setMessagesData({ messages }));
    })
    .catch((error) => serverErrorHelper(dispatch, error));
};

export const findTicket = (userId, ticketId) => (dispatch) => {
  dispatch(toggleIsDataFetching(true));
  dispatch(hideNote());
  dispatch(resetCurrentTicketData());
  ticketsAPI.findTicket(userId, ticketId)
    .then((response) => {
      dispatch(toggleIsDataFetching(false));
      dispatch(setCurrentTicketData(response.data));
      dispatch(reset('ticket-search'));
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
