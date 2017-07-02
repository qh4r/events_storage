/* eslint-disable no-underscore-dangle */
import { fromJS } from 'immutable';
let preloadedState = fromJS({
  route: {
    locationBeforeTransitions: null,
  },
});

if (typeof window !== 'undefined') {
  preloadedState = fromJS(window.__INITIAL_STATE__);
  delete window.__INITIAL_STATE__;
}

export const fetchInitialState = () => preloadedState;
