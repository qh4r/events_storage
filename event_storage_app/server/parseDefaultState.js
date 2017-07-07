import { fromJS } from 'immutable';

export const parseDefaultState = EventModel => async (url) => {
  let eventsList = [];

  if (url === '/list') {
    const query = EventModel.find();
    eventsList = await query.exec();
  }
  const defaultState = {
    route: {
      locationBeforeTransitions: null,
      eventsList,
    },
  };

  return fromJS(defaultState);
};
