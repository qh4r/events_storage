import React from 'react';
import styled from 'styled-components';
import { SingleDatePicker } from 'react-dates';

// language=SCSS prefix=dummy{ suffix=}
const StyledPicker = styled.div`
    .SingleDatePicker {
      display: block;
      .CalendarDay--selected {
        background-color: red;
      }

      .DayPickerKeyboardShortcuts__show--bottom-right {
        border-right: 33px solid red;
      }

      .SingleDatePickerInput {
        border-color: red;
      }
    }
`;

export const DayPicker = props => (
  <StyledPicker>
    <SingleDatePicker {...props} />
  </StyledPicker>
);

