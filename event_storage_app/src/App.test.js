import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory } from 'react-router';
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { App } from './App';
import { locationStateSelector } from './AppRouter/selectors';
import { rootReducer } from './rootReducer';
import { parseDefaultState } from '../server/parseDefaultState';

const defaultState = parseDefaultState();

const memoryHistory = createMemoryHistory();

const store = createStore(
  rootReducer,
  defaultState,
  applyMiddleware(routerMiddleware(memoryHistory)));


const history = syncHistoryWithStore(memoryHistory, store, {
  selectLocationState: locationStateSelector(),
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <App history={history} />
    </Provider>, div);
});
