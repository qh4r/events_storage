import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { momentObj } from 'react-moment-proptypes';
import { FormContainer } from './fragments/FormContainer';
import { Input } from './fragments/Input';
import { DayPicker } from './fragments/DayPicker';


// I know using Redux here, instead or refs/local state is an overdoing,
// but I decided to use It as sort of a showcase I guess.
export class EventsFormComponent extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    date: momentObj,
    updateDate: PropTypes.func.isRequired,
    updateEmail: PropTypes.func.isRequired,
    updateName: PropTypes.func.isRequired,
    updateSurname: PropTypes.func.isRequired,
  }

  static defaultProps = {
    date: null,
  }

  constructor(props) {
    super(props);
    this.state = {
      focused: false,
    };
  }

  submitForm = (e) => {
    e.preventDefault();
    console.log(e, this.state);
  }

  render() {
    const {
      updateSurname, updateName, updateEmail, updateDate,
      name, email, surname, date,
    } = this.props;

    return (
      <form onSubmit={this.submitForm}>
        <FormContainer>
          <Input
            required
            value={name}
            onChange={e => updateName(e.target.value)}
            placeholder="Name"
            type="text"
          />
          <Input
            required
            value={surname}
            onChange={e => updateSurname(e.target.value)}
            placeholder="Surname"
            type="text"
          />
          <Input
            required
            value={email}
            onChange={e => updateEmail(e.target.value)}
            placeholder="Email"
            type="email"
          />
          <DayPicker
            id="data-picker"
            required
            numberOfMonths={1}
            placeholder="Date"
            date={date}
            onDateChange={updateDate}
            focused={this.state.focused}
            onFocusChange={({ focused }) => this.setState({ focused })}
          />
          <button type="submit">asd</button>
        </FormContainer>
      </form>
    );
  }
}
