import { combineReducers } from 'redux-immutable';
import { routeReducer } from './AppRouter/reducers';

export const rootReducer = combineReducers({
  route: routeReducer,
});
