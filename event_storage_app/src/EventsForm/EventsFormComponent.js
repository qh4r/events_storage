import React, { Component } from 'react';
import moment from 'moment';
import { FormContainer } from './fragments/FormContainer';
import { Input } from './fragments/Input';
import { DayPicker } from './fragments/DayPicker';

// since AirBnb date picker more or less requires state
// I decided to go stateful instead of using refs
export class EventsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment(),
      focused: false,
    };
  }

  render() {
    return (
      <FormContainer>
        <Input placeholder="test" type="text" />
        <Input type="text" />
        <Input type="email" />
        <DayPicker
          numberOfMonths={1}
          date={this.state.date}
          onDateChange={date => this.setState({ date })}
          focused={this.state.focused}
          onFocusChange={({ focused }) => this.setState({ focused })}
        />
      </FormContainer>
    );
  }
}
