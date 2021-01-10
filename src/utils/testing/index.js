import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createBrowserHistory } from 'history';
import reducersGroup from '../../store/reducers';

export const history = createBrowserHistory();

export const findByDataTestAttr = (component, attr) => component.find(`[data-test-id="${attr}"]`);
export const testStore = (initialState) => createStore(reducersGroup(history), initialState, applyMiddleware(thunkMiddleware));
