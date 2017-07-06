import { HIDE_POPUP, SHOW_POPUP } from './constants';

export function hidePopup() {
  return {
    type: HIDE_POPUP,
  };
}

export function showPopup(isError, message) {
  return {
    type: SHOW_POPUP,
    isError,
    message,
  };
}
