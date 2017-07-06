import React from 'react';
import PropTypes from 'prop-types';
import { Overlay } from './fragments/Overlay';
import { MessageBox } from './fragments/MessageBox';

const PopupComponent = ({ message, isError, isOpen, hidePopup }) => (
  <div>
    {isOpen && <Overlay onClick={hidePopup}>
      <MessageBox isError={isError}>
        {message}
      </MessageBox>
    </Overlay>}
  </div>
);

PopupComponent.propTypes = {
  message: PropTypes.string.isRequired,
  isError: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool.isRequired,
  hidePopup: PropTypes.func.isRequired,
};

export {
  PopupComponent,
};
