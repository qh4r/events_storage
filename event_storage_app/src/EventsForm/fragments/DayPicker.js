/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { SingleDatePicker } from 'react-dates';
import { media } from '../../shared/mediaMixins';

const hidePlaceholder = hasData => (!hasData ? css`
      margin: 5px 0;
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
        border: 1px solid ${({ theme, error }) => (
            error
              ? theme.input.errorColor
              : theme.input.borderColor)};
      }
      
      .DateInput__display-text--focused {
        background: inherit;
        border: none;
        color: ${props => props.theme.input.fontColor};
      }
      
      .DateInput {
        width: 300px;
        ${media.sm`
          width: 700px;
        `};
        ${media.md`
          width: 900px
        `};
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
  error: PropTypes.string.isRequired,
};

const DayPicker = props => (
  <StyledPicker hasData={!!props.date} error={props.error}>
    <SingleDatePicker
      {...props}
      onDateChange={props.onChange}
      onFocusChange={props.onFocus}
    />
  </StyledPicker>
);

DayPicker.propTypes = {
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  date: PropTypes.object,
};

DayPicker.defaultProps = {
  error: '',
  date: null,
};

export {
  DayPicker,
};
