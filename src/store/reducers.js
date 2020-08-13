import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';
import userReducer from './userReducer';
import notificationReducer from './notificationReducer';
import appReducer from './appReducer';

const reducersGroup = (history) => combineReducers({
  app: appReducer,
  user: userReducer,
  notification: notificationReducer,
  router: connectRouter(history),
  form: formReducer,
});

export default reducersGroup;
