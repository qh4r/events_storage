/* eslint-disable no-undef */
import { ErrorTracker } from './ValidatingForm';

describe('Error tracker:', () => {
  it('should get initialized empty', () => {
    const errorTracker = new ErrorTracker();
    expect(errorTracker.errors).toEqual({});
    expect(errorTracker.validationCallbacks.length).toBe(0);
  });

  it('should remember subscribtions', () => {
    const errorTracker = new ErrorTracker();
    errorTracker.subscribe(() => true);
    errorTracker.subscribe(() => false);
    expect(errorTracker.validationCallbacks.length).toBe(2);
  });

  it('should call all registered subcriptions', () => {
    const errorTracker = new ErrorTracker();
    const callback1 = jest.fn();
    const callback2 = jest.fn();
    errorTracker.subscribe(callback1);
    errorTracker.subscribe(callback2);
    errorTracker.performValidation();
    expect(callback1).toBeCalled();
    expect(callback2).toBeCalled();
  });

  it('should store passed errors', () => {
    const errorTracker = new ErrorTracker();
    errorTracker.setError('test1', 'sekret');
    errorTracker.setError('test2', 'tajemnica');
    expect(errorTracker.errors).toEqual({
      test1: 'sekret',
      test2: 'tajemnica',
    });
  });

  it('should allow errors to get cleared', () => {
    const errorTracker = new ErrorTracker();
    errorTracker.setError('test1', 'sekret');
    errorTracker.setError('test2', 'tajemnica');
    expect(errorTracker.errors).toEqual({
      test1: 'sekret',
      test2: 'tajemnica',
    });
    errorTracker.clearErrors();
    expect(errorTracker.errors).toEqual({
      test1: '',
      test2: '',
    });
  });

  it('hasErrors should return true if any error exist', () => {
    const errorTracker = new ErrorTracker();
    errorTracker.setError('test1', 'sekret');
    errorTracker.setError('test2', 'tajemnica');
    expect(errorTracker.hasErrors()).toBeTruthy();
  });

  it('hasErrors should return false if there are none or empty errors', () => {
    const errorTracker = new ErrorTracker();
    expect(errorTracker.hasErrors()).toBeFalsy();
    errorTracker.setError('test1', '');
    errorTracker.setError('test2', '');
    expect(errorTracker.hasErrors()).toBeFalsy();
  });

  it('getErrorByKey should return stored messge', () => {
    const errorTracker = new ErrorTracker();
    expect(errorTracker.hasErrors()).toBeFalsy();
    errorTracker.setError('test1', 'sekret');
    errorTracker.setError('test2', 'tajemnica');
    expect(errorTracker.getErrorByKey('test1')).toBe('sekret');
    expect(errorTracker.getErrorByKey('test2')).toBe('tajemnica');
  });
});
