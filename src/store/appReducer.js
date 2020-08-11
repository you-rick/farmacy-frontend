// Actions
const TOGGLE_IS_DATA_FETCHING = 'TOGGLE_IS_DATA_FETCHING';


// Initial Data
let initialState = {
    isDataFetching: false
};

// Reducer
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_DATA_FETCHING: {
            return {...state, isDataFetching: action.isDataFetching}
        }
        default:
            return state;
    }
};

// Action Creators
export const toggleIsDataFetching = (isDataFetching) => ({type: TOGGLE_IS_DATA_FETCHING, isDataFetching});

// Thunks
export const initializeApp = () => {
    return (dispatch) => {
        dispatch(toggleIsDataFetching(false));
    };
};


export default appReducer;
