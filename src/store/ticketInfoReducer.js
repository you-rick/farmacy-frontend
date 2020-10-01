import _ from 'lodash';
import { ticketsAPI } from '../api';
import { toggleIsDataFetching } from './appReducer';
import { hideNote } from './notificationReducer';
import { serverErrorHelper } from '../utils/helpers/server-error-helper';

// Actions
const SET_TICKET_INFO_DATA = 'SET_TICKET_INFO_DATA';
const SET_MESSAGES_DATA = 'SET_MESSAGES_DATA';
const RESET_TICKET_INFO_DATA = 'RESET_TICKET_INFO_DATA';

// Initial Data
const initialState = {
  id: null,
  ticketNumber: null,
  userId: null,
  status: null,
  priority: null,
  subject: null,
  ticketType: null,
  messages: [],
  message: {
    id: null,
    date: null,
    type: null,
    detailMessage: null,
    userDetails: {
      userId: null,
      firstName: null,
      lastName: null,
      email: null,
      role: null,
    },
  },
  userDetails: {
    userId: null,
    role: null,
    email: null,
    firstName: null,
    lastName: null,
    isAuth: false,
    department: null,
    employedSince: null,
    phoneNumber: null,
    extension: null,
    mobileNumber: null,
    tempPassword: false,
  },
};

// Reducer
const ticketInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TICKET_INFO_DATA: {
      const { data } = action;
      return {
        ...state,
        id: _.get(data, 'id', initialState.id),
        status: _.get(data, 'status', initialState.status),
        ticketType: _.get(data, 'ticketType', initialState.ticketType),
        priority: _.get(data, 'priority', initialState.priority),
        subject: _.get(data, 'subject', initialState.subject),
        ticketNumber: _.get(data, 'ticketNumber', initialState.ticketNumber),
        userId: _.get(data, 'userId', initialState.userId),
        messages: _.get(data, 'messages', initialState.messages),
        userDetails: _.get(data, 'userDetails', initialState.userDetails),
      };
    }
    case SET_MESSAGES_DATA: {
      const { data } = action;
      return {
        ...state,
        messages: _.get(data, 'messages', initialState.messages),
      };
    }
    case RESET_TICKET_INFO_DATA: {
      return {
        ...initialState,
      };
    }

    default:
      return state;
  }
};

// Action Creators
export const setTicketInfoData = (data) => ({
  type: SET_TICKET_INFO_DATA,
  data,
});
export const setMessagesData = (data) => ({
  type: SET_MESSAGES_DATA,
  data,
});
export const resetTicketInfo = () => ({ type: RESET_TICKET_INFO_DATA });

// Thunks
export const getTicketInfo = (userId, ticketId, role) => (dispatch) => {
  dispatch(toggleIsDataFetching(true));
  dispatch(hideNote());
  dispatch(resetTicketInfo());
  ticketsAPI.getTicketInfo(userId, ticketId, role)
    .then((response) => {
      console.log(response.data);
      dispatch(toggleIsDataFetching(false));
      dispatch(setTicketInfoData(response.data));
    })
    .catch((error) => serverErrorHelper(dispatch, error));
};

export default ticketInfoReducer;
