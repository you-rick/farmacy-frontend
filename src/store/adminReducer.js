import _ from 'lodash';
import { toggleIsDataFetching } from './appReducer';
import { setMessagesData, resetMessagesData } from './messagesReducer';
import { adminAPI } from '../api';
import { hideNote, setNote } from './notificationReducer';
import { serverErrorHelper } from '../utils/helpers/server-error-helper';

// Actions
const SET_ADMIN_DATA = 'SET_ADMIN_DATA';
const UPDATE_NEW_TICKETS = 'UPDATE_NEW_TICKETS';

// Initial Data
const initialState = {
  stats: {
    OpenTickets: {
      new: null,
      overdue: null,
    },
    TicketsDue: {
      dueToday: null,
      dueTomorrow: null,
      dueNextWeek: null,
    },
  },
  newTickets: [],
  ticket: {
    id: null,
    createdDate: null,
    ticketNumber: null,
    subject: null,
    status: null,
    priority: null,
  },
};

// Reducer
const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ADMIN_DATA: {
      const { data } = action;
      return {
        ...state,
        stats: _.get(data, 'stats', initialState.stats),
        newTickets: _.get(data, 'newTickets', initialState.newTickets),
      };
    }
    case UPDATE_NEW_TICKETS: {
      const { ticketId } = action;
      const openTicketState = state.stats.OpenTickets;
      openTicketState.new -= 1;
      return {
        ...state,
        newTickets: state.newTickets.filter((item) => item.id !== ticketId),
      };
    }
    default:
      return state;
  }
};

// Action Creators
export const setAdminData = (data) => ({
  type: SET_ADMIN_DATA,
  data,
});
export const updateNewTickets = (ticketId) => ({
  type: UPDATE_NEW_TICKETS,
  ticketId,
});

// Thunks
export const getData = () => (dispatch) => {
  dispatch(toggleIsDataFetching(true));
  dispatch(hideNote());
  adminAPI.getData()
    .then((response) => {
      console.log(response.data);
      dispatch(toggleIsDataFetching(false));
      dispatch(setAdminData(response.data));
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

export const updateTicketStatus = (data, ticketId) => (dispatch) => {
  dispatch(toggleIsDataFetching(true));
  dispatch(hideNote());
  dispatch(resetMessagesData());
  console.log(data);
  adminAPI.updateTicketStatus(data, ticketId)
    .then((response) => {
      dispatch(toggleIsDataFetching(false));
      dispatch(updateNewTickets(ticketId));
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

export default adminReducer;
