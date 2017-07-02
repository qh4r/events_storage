import React from 'react';
import PropTypes from 'prop-types';
import { Router, IndexRoute, Route } from 'react-router';
import { Navigation } from '../Navigation';
import { EventsForm } from '../EventsForm';
import { EventsList } from '../EventsList';
import { HOME_ROUTE, LIST_ROUTE } from './constants';


const AppRouter = ({ history }) => (
  <Router history={history}>
    <Route path={HOME_ROUTE} component={Navigation}>
      <IndexRoute component={EventsForm} />
      <Route path={LIST_ROUTE} component={EventsList} />
    </Route>
  </Router>
);

AppRouter.propTypes = {
// eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object.isRequired,
};

export {
  AppRouter,
};
