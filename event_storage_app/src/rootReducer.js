import { combineReducers } from 'redux-immutable';
import { routeReducer } from './AppRouter/reducers';
import { formData } from './EventsForm';
import { eventsList } from './EventsList';
import { popupReducer } from './Popup/reducers';

export const rootReducer = combineReducers({
  route: routeReducer,
  formData,
  eventsList,
  popupReducer,
});
