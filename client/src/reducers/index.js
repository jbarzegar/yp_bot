import { combineReducers } from 'redux';
import UserState from '../state/user';
import LoaderState from '../state/loader';

const reducers = {
  user: UserState,
  loader: LoaderState,
};

export default combineReducers(reducers);
