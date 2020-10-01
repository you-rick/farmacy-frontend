import _ from 'lodash';
import { toggleIsDataFetching } from './appReducer';
import { adminAPI, ticketsAPI } from '../api';
import { hideNote, setNote } from './notificationReducer';
import { serverErrorHelper } from '../utils/helpers/server-error-helper';
import { LOCALE } from '../locale';

const successMsg = LOCALE.success.ticketSettings;

// Actions
const SET_ADMIN_DATA = 'SET_ADMIN_DATA';
const UPDATE_NEW_TICKETS = 'UPDATE_NEW_TICKETS';
const SET_TICKET_SETTINGS = 'SET_TICKET_SETTINGS';
const SET_ACTIVE_LIST = 'SET_ACTIVE_LIST';

// Initial Data
const initialState = {
  openTickets: {
    newTickets: [],
    overdueTickets: [],
  },
  dueTickets: {
    dueToday: [],
    dueTomorrow: [],
    dueNextWeek: [],
  },
  activeList: [],
  activeListHeadline: null,
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
        openTickets: _.get(data, 'openTickets', initialState.openTickets),
        dueTickets: _.get(data, 'dueTickets', initialState.dueTickets),
        activeList: _.get(data, 'openTickets.newTickets', initialState.openTickets.newTickets),
        activeListHeadline: LOCALE.admin.dashboard.stats.openTickets.newTickets,
      };
    }
    case SET_ACTIVE_LIST: {
      const { data } = action;
      return {
        ...state,
        activeList: data.list,
        activeListHeadline: data.headline,
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

      return {
        ...state,
        openTickets: {
          ...state.openTickets,
          newTickets: state.openTickets.newTickets.filter((item) => item.id !== ticketId),
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
export const setActiveList = (data) => ({
  type: SET_ACTIVE_LIST,
  data,
});

// Thunks
export const getData = () => (dispatch) => {
  dispatch(toggleIsDataFetching(true));
  dispatch(hideNote());
  adminAPI.getData()
    .then((response) => {
      const { adminDashboardStat } = response.data;
      dispatch(toggleIsDataFetching(false));
      dispatch(setAdminData(adminDashboardStat));
    })
    .catch((error) => serverErrorHelper(dispatch, error));
};

export const updateNewTicketStatus = (data, userId, ticketId) => (dispatch) => {
  dispatch(toggleIsDataFetching(true));
  dispatch(hideNote());
  ticketsAPI.updateTicket(data, userId, ticketId)
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
