import { combineReducers } from 'redux';
import todos from '../todo/reducers';

const store = combineReducers({ todos });

export default store;
