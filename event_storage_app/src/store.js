/* eslint-disable no-underscore-dangle */
import * as Immutable from 'immutable';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './rootReducer';
import navigationSagas from './Navigation/sagas';


const sagas = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  Immutable.Map(),
  composeEnhancers(applyMiddleware(
    sagas,
    routerMiddleware(browserHistory),
  )),
);

function* startAllSagas() {
  yield [...[
    ...navigationSagas,
  ].map(saga => saga())];
}

sagas.run(startAllSagas);

export {
  store,
};
