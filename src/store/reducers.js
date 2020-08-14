import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';
import appReducer from './appReducer';
import userReducer from './userReducer';
import ticketsReducer from './ticketsReducer';
import notificationReducer from './notificationReducer';

const reducersGroup = (history) => combineReducers({
  app: appReducer,
  user: userReducer,
  tickets: ticketsReducer,
  notification: notificationReducer,
  router: connectRouter(history),
  form: formReducer,
});

export default reducersGroup;
