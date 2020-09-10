import _ from 'lodash';
import { toggleIsDataFetching } from './appReducer';
import { adminAPI } from '../api';
import { hideNote, setNote } from './notificationReducer';
import { serverErrorHelper } from '../utils/helpers/server-error-helper';
import { LOCALE } from '../locale';

const successMsg = LOCALE.success.ticketSettings;

// Actions
const SET_ADMIN_DATA = 'SET_ADMIN_DATA';
const UPDATE_NEW_TICKETS = 'UPDATE_NEW_TICKETS';
const SET_TICKET_SETTINGS = 'SET_TICKET_SETTINGS';

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
  ticketDueConfig: {
    low: null,
    medium: null,
    high: null,
    critical: null,
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
    case SET_TICKET_SETTINGS: {
      const { data } = action;
      return {
        ...state,
        ticketDueConfig: _.get(data, 'ticketDueConfig', initialState.ticketDueConfig),
      };
    }
    case UPDATE_NEW_TICKETS: {
      const { ticketId } = action;
      const openTicketNumber = state.stats.OpenTickets.new - 1;

      return {
        ...state,
        newTickets: state.newTickets.filter((item) => item.id !== ticketId),
        stats: {
          ...state.stats,
          OpenTickets: {
            ...state.stats.OpenTickets,
            new: openTicketNumber,
          },
        },
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
export const setTicketSettings = (data) => ({
  type: SET_TICKET_SETTINGS,
  data,
});

// Thunks
export const getData = () => (dispatch) => {
  dispatch(toggleIsDataFetching(true));
  dispatch(hideNote());
  adminAPI.getData()
    .then((response) => {
      dispatch(toggleIsDataFetching(false));
      dispatch(setAdminData(response.data));
    })
    .catch((error) => serverErrorHelper(dispatch, error));
};

export const updateTicketStatus = (data, ticketId) => (dispatch) => {
  dispatch(toggleIsDataFetching(true));
  dispatch(hideNote());
  adminAPI.updateTicketStatus(data, ticketId)
    .then(() => {
      dispatch(toggleIsDataFetching(false));
      dispatch(updateNewTickets(ticketId));
    })
    .catch((error) => serverErrorHelper(dispatch, error));
};

export const getTicketSettings = () => (dispatch) => {
  dispatch(toggleIsDataFetching(true));
  dispatch(hideNote());
  adminAPI.getTicketSettings()
    .then((response) => {
      dispatch(toggleIsDataFetching(false));
      dispatch(setTicketSettings(response.data));
    })
    .catch((error) => serverErrorHelper(dispatch, error));
};

export const updateTicketSettings = (data) => (dispatch) => {
  dispatch(toggleIsDataFetching(true));
  dispatch(hideNote());
  adminAPI.updateTicketSettings(data)
    .then((response) => {
      dispatch(toggleIsDataFetching(false));
      dispatch(setNote({
        msg: response.data.message || successMsg.settingsUpdated,
        type: 'success',
        error: false,
        success: true,
      }));
    })
    .catch((error) => serverErrorHelper(dispatch, error));
};

export default adminReducer;
