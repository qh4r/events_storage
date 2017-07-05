import { createSelector } from 'reselect';

const eventsDataSelector = () => state => state.get('eventsList');

const eventsListSelector = createSelector(
  eventsDataSelector(),
  list => ({ events: list.toJS() }),
);

export {
  eventsListSelector,
};
