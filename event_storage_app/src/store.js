/* eslint-disable no-underscore-dangle,no-console */
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './rootReducer';
import navigationSagas from './Navigation/sagas';
import formSagas from './EventsForm/sagas';
import eventsListSaga from './EventsList/sagas';
import { fetchInitialState } from './fetchInitialState';

const initialState = fetchInitialState();

const sagas = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(
    sagas,
    routerMiddleware(browserHistory),
  )),
);

function* startAllSagas() {
  yield all([...[
    ...navigationSagas,
    ...formSagas,
    ...eventsListSaga,
  ].map(saga => saga()),
  ]);
}

sagas.run(startAllSagas);

export {
  store,
};
