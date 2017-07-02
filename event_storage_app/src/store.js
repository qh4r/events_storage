import * as Immutable from 'immutable';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './rootReducer';

const store = createStore(rootReducer, Immutable.Map(), applyMiddleware());

export {
  store,
};
