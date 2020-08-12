import {isLogged} from "../utils/helpers/token-handler";
import {setAuthStatus, setRoleStatus} from "./userReducer";
import {getRole} from "../utils/helpers/role-handler";

// Actions
const TOGGLE_IS_DATA_FETCHING = 'TOGGLE_IS_DATA_FETCHING';
const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';


// Initial Data
let initialState = {
    initialized: false,
    isDataFetching: false
};

// Reducer
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {...state, initialized: true};
        case TOGGLE_IS_DATA_FETCHING:
            return {...state, isDataFetching: action.isDataFetching};
        default:
            return state;
    }
};

// Action Creators
export const toggleIsDataFetching = (isDataFetching) => ({type: TOGGLE_IS_DATA_FETCHING, isDataFetching});
export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

// Thunks
export const initializeApp = () => {
    return (dispatch) => {
        dispatch(toggleIsDataFetching(false));
        if (isLogged()) {
            dispatch(setAuthStatus(true));
            dispatch(setRoleStatus(getRole()));
            dispatch(initializedSuccess());
        }

    };
};


export default appReducer;
