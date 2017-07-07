import React from 'react';
import PropTypes from 'prop-types';
import { Router, IndexRoute, Route } from 'react-router';
import { Navigation } from '../Navigation';
import { EventsForm } from '../EventsForm';
import { EventsList } from '../EventsList';
import { HOME_ROUTE, LIST_ROUTE } from './constants';
import { NotFound } from './404';


const AppRouter = ({ history }) => (
  <Router history={history}>
    <Route path={HOME_ROUTE} component={Navigation}>
      <IndexRoute component={EventsForm} />
      <Route path={LIST_ROUTE} component={EventsList} />
      <Route path="*" component={NotFound} />
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
