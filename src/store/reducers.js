import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router";
import {reducer as formReducer} from "redux-form";

const reducersGroup = (history) => combineReducers({
    router: connectRouter(history),
    form: formReducer
});


export default reducersGroup;
