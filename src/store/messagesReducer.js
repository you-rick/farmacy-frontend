import _ from 'lodash';
import { messagesAPI } from '../api';
import { toggleIsDataFetching } from './appReducer';
import { hideNote, setNote } from './notificationReducer';
import { serverErrorHelper } from '../utils/helpers/server-error-helper';

// Actions
const SET_MESSAGES_DATA = 'SET_MESSAGES_DATA';
const RESET_MESSAGES_DATA = 'SET_MESSAGES_DATA';

// Initial Data
const initialState = {
  ticketId: null,
  ticketNumber: null,
  userId: null,
  list: [],
  message: {
    id: null,
    date: null,
    type: null,
    detailMessage: null,
    user: {
      userId: null,
      firstName: null,
      lastName: null,
      email: null,
      userType: null,
    },
  },
  priority: null,
};

// Reducer
const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGES_DATA: {
      const { data } = action;
      return {
        ...state,
        ticketId: _.get(data, 'ticketId', initialState.ticketId),
        ticketNumber: _.get(data, 'ticketNumber', initialState.ticketId),
        userId: _.get(data, 'userId', initialState.userId),
        list: _.get(data, 'messages', initialState.list),
        priority: _.get(data, 'priority', initialState.priority),
      };
    }
    case RESET_MESSAGES_DATA:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

// Action Creators
export const setMessagesData = (data) => ({
  type: SET_MESSAGES_DATA,
  data,
});
export const resetMessagesData = () => ({ type: RESET_MESSAGES_DATA });

// Thunks
export const getMessages = (userId, ticketId) => (dispatch) => {
  dispatch(toggleIsDataFetching(true));
  dispatch(hideNote());
  dispatch(resetMessagesData());
  messagesAPI.getMessages(userId, ticketId)
    .then((response) => {
      dispatch(toggleIsDataFetching(false));
      dispatch(setMessagesData(response.data));
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

export default messagesReducer;
