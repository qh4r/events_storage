/* eslint-disable no-undef */
import { goToForm, goToList } from './actions';
import { NAVIGATE_TO_FORM, NAVIGATE_TO_LIST } from './constants';

describe('Navigation actions:', () => {
  describe('goToForm: ', () => {
    it('should return action of type NAVIGATE_TO_FORM', () => {
      const actionResult = goToForm();
      expect(actionResult.type).toBe(NAVIGATE_TO_FORM);
    });
  });

  describe('goToList: ', () => {
    it('should return action of type NAVIGATE_TO_LIST', () => {
      const actionResult = goToList();
      expect(actionResult.type).toBe(NAVIGATE_TO_LIST);
    });
  });
});
