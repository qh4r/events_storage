/* eslint-disable no-undef */
import { fromJS } from 'immutable';
import { popupReducer, defaultPopupState } from './reducers';
import { showPopup, hidePopup } from './actions';

describe('Popup:', () => {
  describe('eventsList reducer: ', () => {
    it('should return same state on unrecognised action', () => {
      const resultState = popupReducer(defaultPopupState, { type: 'I_COMMAND_THEE' });
      expect(resultState === defaultPopupState).toBe(true);
      expect(resultState.toJS()).toEqual(defaultPopupState.toJS());
    });

    it('should return passed data and isOpen on showPopup', () => {
      const expected = fromJS({
        isOpen: true,
        isError: false,
        message: 'test',
      });

      const resultState = popupReducer(defaultPopupState, showPopup(expected.get('isError'), expected.get('message')));
      expect(resultState === defaultPopupState).toBe(false);
      expect(resultState.toJS()).toEqual(expected.toJS());
    });

    it('should return default state on hide popup', () => {
      const resultState = popupReducer(defaultPopupState, hidePopup());
      expect(resultState === defaultPopupState).toBe(true);
      expect(resultState.toJS()).toEqual(defaultPopupState.toJS());
    });
  });
});
