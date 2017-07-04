import { createSelector } from 'reselect';
export const selectFormData = () => state => state.get('formData');

export const eventsFormSelector = createSelector(
  selectFormData(),
  formData => formData.toJS(),
);
