import { createSelector } from 'reselect';
import { FORM_LOCATION, LIST_LOCATION } from './constants';
import { HOME_ROUTE, LIST_ROUTE } from '../AppRouter/constants';

export const selectActiveRoute = () => (state, props) => props.location.pathname;

const availableLocations = {
  [HOME_ROUTE]: FORM_LOCATION,
  [LIST_ROUTE]: LIST_LOCATION,
};

export const navigationSelector = () => createSelector(
  selectActiveRoute(),
  route => ({
    route: availableLocations[route],
  }),
);
