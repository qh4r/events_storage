import { createSelector } from 'reselect';
const popupStateSelection = () => state => state.get('popupReducer');

const popupSelector = createSelector(
  popupStateSelection(),
  popupState => ({ ...popupState.toJS() }),
);

export {
  popupSelector,
};
