import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router";
import {reducer as formReducer} from "redux-form";
import userReducer from './userReducer';
import notificationReducer from './notificationReducer';

const reducersGroup = (history) => combineReducers({
    user: userReducer,
    notification: notificationReducer,
    router: connectRouter(history),
    form: formReducer
});


export default reducersGroup;
