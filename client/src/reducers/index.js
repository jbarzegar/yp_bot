import { combineReducers } from 'redux';
import UserState from '../state/user';

const reducers = {
  user: UserState,
};

export default combineReducers(reducers);
