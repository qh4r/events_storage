import { NAVIGATE_TO_FORM, NAVIGATE_TO_LIST } from './constants';

export function goToForm() {
  return {
    type: NAVIGATE_TO_FORM,
  };
}

export function goToList() {
  return {
    type: NAVIGATE_TO_LIST,
  };
}
