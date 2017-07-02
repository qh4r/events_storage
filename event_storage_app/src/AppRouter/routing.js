import React from 'react';
import { Router, browserHistory, IndexRoute, Route } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { locationStateSelector } from './selectors';
import { store } from '../store';
import { Navigation } from '../Navigation';
import { EventsForm } from '../EventsForm';
import { EventsList } from '../EventsList';

const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: locationStateSelector(),
});

const AppRouter = () => (
  <Router history={history}>
    <Route path="/" component={Navigation}>
      <IndexRoute component={EventsForm} />
      <Route path="list" component={EventsList} />
    </Route>
  </Router>
);

export {
  AppRouter,
};
