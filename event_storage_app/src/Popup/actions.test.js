/* eslint-disable no-undef */
import { hidePopup, showPopup } from './actions';
import { HIDE_POPUP, SHOW_POPUP } from './constants';

describe('Popup actions:', () => {
  describe('hidePopup: ', () => {
    it('should return action of type HIDE_POPUP', () => {
      const actionResult = hidePopup();
      expect(actionResult.type).toBe(HIDE_POPUP);
    });
  });

  describe('showPopup: ', () => {
    it('should return passed values', () => {
      const data = { isError: true, message: 'test' };
      const actionResult = showPopup(data.isError, data.message);
      expect(actionResult.isError).toBe(data.isError);
      expect(actionResult.message).toBe(data.message);
    });

    it('should return action of type SHOW_POPUP', () => {
      const data = { isError: true, message: 'test' };
      const actionResult = showPopup(...data);
      expect(actionResult.type).toBe(SHOW_POPUP);
    });
  });
});
