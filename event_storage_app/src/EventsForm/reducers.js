import { fromJS } from 'immutable';
import { UPDATE_DATE, UPDATE_EMAIL, UPDATE_NAME, UPDATE_SURNAME, RESET_FORM } from './constants';

const defaultFormState = fromJS({
  name: '',
  surname: '',
  email: '',
  date: null,
});

const assignData = (state, action, key) => state.set(key, action[key]);

export const formData = (state = defaultFormState, action) => {
  switch (action.type) {
    case UPDATE_NAME:
      return assignData(state, action, 'name');
    case UPDATE_SURNAME:
      return assignData(state, action, 'surname');
    case UPDATE_EMAIL:
      return assignData(state, action, 'email');
    case UPDATE_DATE:
      return assignData(state, action, 'date');
    case RESET_FORM:
      return fromJS({
        ...defaultFormState.toJS(),
      });
    default:
      return state;
  }
};
