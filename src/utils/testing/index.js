import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducersGroup from '../../store/reducers';

export const findByDataTestAttr = (component, attr) => component.find(`[data-test-id="${attr}"]`);
export const testStore = (initialState) => createStore(reducersGroup, initialState, applyMiddleware(thunkMiddleware));
