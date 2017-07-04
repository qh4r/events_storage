import { UPDATE_DATE, UPDATE_EMAIL, UPDATE_NAME, UPDATE_SURNAME } from './constants';

export function updateDate(date) {
  return {
    type: UPDATE_DATE,
    date,
  };
}

export function updateEmail(email) {
  return {
    type: UPDATE_EMAIL,
    email,
  };
}

export function updateName(name) {
  return {
    type: UPDATE_NAME,
    name,
  };
}

export function updateSurname(surname) {
  return {
    type: UPDATE_SURNAME,
    surname,
  };
}

