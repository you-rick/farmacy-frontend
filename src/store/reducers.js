import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';
import appReducer from './appReducer';
import authReducer from './authReducer';
import ticketsReducer from './ticketsReducer';
import notificationReducer from './notificationReducer';
import messagesReducer from './messagesReducer';
import adminReducer from './adminReducer';
import usersReducer from './usersReducer';
import richtextReducer from './richtextReducer';

const reducersGroup = (history) => combineReducers({
  app: appReducer,
  auth: authReducer,
  admin: adminReducer,
  tickets: ticketsReducer,
  messages: messagesReducer,
  notification: notificationReducer,
  users: usersReducer,
  richtext: richtextReducer,
  router: connectRouter(history),
  form: formReducer,
});

export default reducersGroup;
