import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { SingleDatePicker } from 'react-dates';
import { media } from '../../shared/mediaMixins';

const hidePlaceholder = hasData => (!hasData ? css`
        
      input[value=''] ~ .DateInput__display-text {
      visibility: visible;
        ${media.sm`
          visibility: hidden;
        `}
    }
  ` : css`      
  visibility: visible;
  `);

// language=SCSS prefix=dummy{ suffix=}
const StyledPicker = styled.div`
    .SingleDatePicker {
      display: block;
      .CalendarDay--selected {
        background-color: ${props => props.theme.input.mainColor}
      }

      .DayPickerKeyboardShortcuts__show--bottom-right {
        border-right: 33px solid ${props => props.theme.input.mainColor}
      }

      .SingleDatePickerInput {
        border-color: ${props => props.theme.input.borderColor}
      }
      
      ${props => hidePlaceholder(props.hasData)}
      
      input[value=''] {
        &::placeholder {
            visibility: visible;
            ${media.sm`  
              visibility: hidden;
            `}
        }
      }
    }
`;

StyledPicker.propTypes = {
  hasData: PropTypes.bool.isRequired,
};

const DayPicker = props => (
  <StyledPicker hasData={!!props.date}>
    <SingleDatePicker {...props} />
  </StyledPicker>
);

DayPicker.propTypes = SingleDatePicker.propTypes;

export {
  DayPicker,
};
