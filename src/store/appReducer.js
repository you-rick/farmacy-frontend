import { isLogged } from '../utils/helpers/token-handler';
import { getProfile } from './userReducer';
import { setNote } from './notificationReducer';
import { serverErrorHelper } from '../utils/helpers/server-error-helper';

// Actions
const TOGGLE_IS_DATA_FETCHING = 'TOGGLE_IS_DATA_FETCHING';
const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

// Initial Data
const initialState = {
  initialized: false,
  isDataFetching: false,
};

// Reducer
const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };
    case TOGGLE_IS_DATA_FETCHING:
      return {
        ...state,
        isDataFetching: action.isDataFetching,
      };
    default:
      return state;
  }
};

// Action Creators
export const toggleIsDataFetching = (isDataFetching) => ({
  type: TOGGLE_IS_DATA_FETCHING,
  isDataFetching,
});
export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS });

// Thunks
export const initializeApp = () => (dispatch) => {
  const promiseArray = [];
  if (isLogged()) promiseArray.push(dispatch(getProfile()));

  dispatch(toggleIsDataFetching(true));

  Promise.all(promiseArray)
    .then(() => {
      dispatch(toggleIsDataFetching(false));
      dispatch(initializedSuccess());
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

export default appReducer;
