import { combineReducers } from 'redux';
import todos from './todo/reducer';

const index = combineReducers({ todos });

export default index;
