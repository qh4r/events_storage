/* eslint-disable no-underscore-dangle */
import Immutable, { fromJS } from 'immutable';

const preloadedState = fromJS(window.__INITIAL_STATE__);
delete window.__INITIAL_STATE__;

export const fetchInitialState = () => preloadedState || Immutable.Map();
