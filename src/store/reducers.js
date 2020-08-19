import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';
import appReducer from './appReducer';
import userReducer from './userReducer';
import ticketsReducer from './ticketsReducer';
import notificationReducer from './notificationReducer';
import messagesReducer from './messagesReducer';

const reducersGroup = (history) => combineReducers({
  app: appReducer,
  user: userReducer,
  tickets: ticketsReducer,
  messages: messagesReducer,
  notification: notificationReducer,
  router: connectRouter(history),
  form: formReducer,
});

export default reducersGroup;
