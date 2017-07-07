/* eslint-disable no-undef */
import { dateValidator, emailValidator, stringValidator } from './validators';

describe('Validators:', () => {
  describe('string validator:', () => {
    it('should return false for empty strings', () => {
      const validator = stringValidator();
      expect(validator[0]('')).toBeFalsy();
    });

    it('should return false for null', () => {
      const validator = stringValidator();
      expect(validator[0](null)).toBeFalsy();
    });

    it('should have passed message as 2nd elemnt', () => {
      const validator = stringValidator('message');
      expect(validator[1]).toBe('message');
    });

    it('should return true for non empty strings', () => {
      const validator = stringValidator();
      expect(validator[0]('John')).toBeTruthy();
    });
  });

  describe('email validator:', () => {
    it('should return false for empty strings', () => {
      const validator = emailValidator();
      expect(validator[0]('')).toBeFalsy();
    });

    it('should return false for null', () => {
      const validator = emailValidator();
      expect(validator[0](null)).toBeFalsy();
    });

    it('should return false for invalid emails', () => {
      const validator = emailValidator();
      expect(validator[0]('@asd.pl')).toBeFalsy();
      expect(validator[0]('test.pl')).toBeFalsy();
      expect(validator[0]('as@adda')).toBeFalsy();
    });

    it('should have passed message as 2nd elemnt', () => {
      const validator = emailValidator('message');
      expect(validator[1]).toBe('message');
    });

    it('should return true for valid emails', () => {
      const validator = emailValidator();
      expect(validator[0]('asd@asd.pl')).toBeTruthy();
    });
  });

  describe('date validator:', () => {
    it('should have passed message as 2nd elemnt', () => {
      const validator = dateValidator('message');
      expect(validator[1]).toBe('message');
    });

    it('should return false for null values', () => {
      const validator = dateValidator();
      expect(validator[0]('')).toBeFalsy();
    });

    it('should return false for invalid dates', () => {
      const validator = dateValidator();
      expect(validator[0](new Date(NaN))).toBeFalsy();
      expect(validator[0](new Date('test'))).toBeFalsy();
      expect(validator[0](null)).toBeFalsy();
      expect(validator[0]('test')).toBeFalsy();
    });

    it('should return true for valid dates', () => {
      const validator = dateValidator();
      expect(validator[0](Date.now())).toBeTruthy();
    });
  });
});
