import { fromJS } from 'immutable';

export const parseDefaultState = () => {
  const defaultState = {
    route: {
      locationBeforeTransitions: null,
    },
  };

  return fromJS(defaultState);
};
