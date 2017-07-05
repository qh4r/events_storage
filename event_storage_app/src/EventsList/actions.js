import { FETCH_LIST_DATA, FETCH_LIST_DATA_ERROR, FETCH_LIST_DATA_SUCCESS } from './constants';

export function fetchListData() {
  return {
    type: FETCH_LIST_DATA,
  };
}

export function fetchListDataSuccess(eventsList) {
  return {
    type: FETCH_LIST_DATA_SUCCESS,
    eventsList,
  };
}

export function fetchListDataError() {
  return {
    type: FETCH_LIST_DATA_ERROR,
  };
}
