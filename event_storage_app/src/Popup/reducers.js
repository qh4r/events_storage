import { fromJS } from 'immutable';
import { SHOW_POPUP, HIDE_POPUP } from './constants';

const defaultPopupState = fromJS({
  isOpen: false,
  isError: false,
  message: '',
});

const popupReducer = (state = defaultPopupState, action) => {
  switch (action.type) {
    case SHOW_POPUP:
      return fromJS({
        isError: action.isError,
        message: action.message,
        isOpen: true,
      });
    case HIDE_POPUP:
      return defaultPopupState;
    default:
      return state;
  }
};

export {
  popupReducer,
  defaultPopupState,
};
