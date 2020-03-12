import { combineReducers, createStore, applyMiddleware } from 'redux';
import { logger, promise } from './middleware';

import users from '../_reducers/userR';
import showTicket from '../_reducers/ticketR';

// import users from '../_reducers/userR';

const reducer = combineReducers({
  users,
  showTicket
});

const store = createStore(reducer, applyMiddleware(logger, promise));
export default store;
