import { toggleIsDataFetching } from './appReducer';
import { ticketsAPI } from '../api';
import { hideNote, setNote } from './notificationReducer';
import { serverErrorHelper } from '../utils/helpers/server-error-helper';

// Action
const SET_TICKETS_DATA = 'SET_TICKETS_DATA';

// Initial Data
const initialState = {
  id: null,
  created_date: null,
  ticket_number: null,
  issue: null,
  status: null,
};

// Reducer
const ticketsReducer = (state = initialState, action) => {
  switch (action.type) {
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
      console.log(response);
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
