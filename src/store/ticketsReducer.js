import { toggleIsDataFetching } from './appReducer';
import { ticketsAPI } from '../api';
import { hideNote, setNote } from './notificationReducer';
import { serverErrorHelper } from '../utils/helpers/server-error-helper';

// Action
const SET_TICKETS_DATA = 'SET_TICKETS_DATA';

// Initial Data
const initialState = {
  userId: null,
  tickets: [],
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
    case SET_TICKETS_DATA:
      return {
        ...state,
        userId: action.data.userId,
        tickets: [...action.data.tickets],
        message_counts: { ...action.data.message_counts },

      };
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
      const res = response.data;
      dispatch(setTicketsData(res));
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
