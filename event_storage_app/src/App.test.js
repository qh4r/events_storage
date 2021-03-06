import React from 'react';
import { mount } from 'enzyme';
import { createMemoryHistory } from 'react-router';
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { App } from './App';
import { locationStateSelector } from './AppRouter/selectors';
import { rootReducer } from './rootReducer';

const memoryHistory = createMemoryHistory();

const store = createStore(
  rootReducer,
  applyMiddleware(routerMiddleware(memoryHistory)));


const history = syncHistoryWithStore(memoryHistory, store, {
  selectLocationState: locationStateSelector(),
});

describe('Application root', () => {
  it('App renders without crashing', () => {
    mount(<Provider store={store}>
      <App history={history} />
    </Provider>);
  });
});

