import { combineReducers, createStore, applyMiddleware } from 'redux';
import { logger, promise } from './middleware';

import users from '../_reducers/userR';

const reducer = combineReducers({
  users
});

const store = createStore(reducer, applyMiddleware(logger, promise));
export default store;
