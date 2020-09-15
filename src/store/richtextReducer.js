// Actions
export const SET_VALUE = 'SET_VALUE';
export const CLEAR_VALUE = 'CLEAR_VALUE';

const initialState = {
  value: '',
  hasValue: false,
};

// Reducer
const richtextReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VALUE: {
      return {
        ...state,
        value: action.body,
        hasValue: true,
      };
    }
    case CLEAR_VALUE: {
      return initialState;
    }
    default:
      return state;
  }
};

// Action Creators
export const setEditorValue = (body) => ({
  type: SET_VALUE,
  body,
});
export const clearEditorValue = () => ({ type: CLEAR_VALUE });

export default richtextReducer;
