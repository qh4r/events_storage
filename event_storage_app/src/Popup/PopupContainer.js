import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { PopupComponent } from './PopupComponent';
import * as actions from './actions';
import { popupSelector } from './selectors';

const PopupContainer = props => (
  <PopupComponent
    {...props}
    hidePopup={() => props.hidePopup()}
  />
);

PopupContainer.propTypes = {
  hidePopup: PropTypes.func.isRequired,
};

const Popup = connect(popupSelector, actions)(PopupContainer);

export {
  Popup,
};
