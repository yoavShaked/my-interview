import { createStore } from 'redux';
import rootReducer from './reducers/root';

export default (initialState = {}) => createStore(rootReducer, initialState);