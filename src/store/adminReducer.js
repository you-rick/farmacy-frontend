import _ from 'lodash';
import { toggleIsDataFetching } from './appReducer';
import { adminAPI } from '../api';
import { hideNote, setNote } from './notificationReducer';
import { serverErrorHelper } from '../utils/helpers/server-error-helper';

// Actions
const SET_ADMIN_DATA = 'SET_ADMIN_DATA';

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
    default:
      return state;
  }
};

// Action Creators
export const setAdminData = (data) => ({
  type: SET_ADMIN_DATA,
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
