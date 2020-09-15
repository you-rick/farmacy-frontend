// Actions
export const SET_NOTE = 'SET_NOTE';
export const HIDE_NOTE = 'HIDE_NOTE';

// Initial Data
const initialState = {
  msg: '',
  type: 'info',
  error: false,
  success: false,
  hideDuration: null,
};

// Reducer
const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NOTE:
      return { ...state, ...action.body };
    case HIDE_NOTE:
      return {
        ...state, ...initialState,
      };
    default:
      return state;
  }
};

// Action Creators
export const setNote = (body) => ({
  type: SET_NOTE,
  body,
});
export const hideNote = () => ({ type: HIDE_NOTE });

export default notificationReducer;
