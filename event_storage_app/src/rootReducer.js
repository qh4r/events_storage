import { combineReducers } from 'redux-immutable';
import { routeReducer } from './AppRouter/reducers';
import { formData } from './EventsForm';

export const rootReducer = combineReducers({
  route: routeReducer,
  formData,
});
