import { fromJS } from 'immutable';
import { FETCH_LIST_DATA_SUCCESS } from './constants';

const defaultState = fromJS([]);

export const eventsList = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_LIST_DATA_SUCCESS:
      return fromJS(action.eventsList);
    default:
      return state;
  }
};
