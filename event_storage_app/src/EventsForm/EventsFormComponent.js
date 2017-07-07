import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { momentObj } from 'react-moment-proptypes';
import { validate as validateEmail } from 'email-validator';
import 'airbnb-js-shims';
import {
  FormContainer, Input, Button, DayPicker, SubmitButton,
  FormGroup, ValidatingForm, FormControlsWrapper,
} from './fragments';

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
    submitForm: PropTypes.func.isRequired,
    resetForm: PropTypes.func.isRequired,
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

  render() {
    const {
      updateSurname, updateName, updateEmail, updateDate,
      name, email, surname, date, submitForm, resetForm,
    } = this.props;

    return (
      <ValidatingForm id="form-page" onSubmit={submitForm} onReset={resetForm}>
        <FormContainer>
          <FormGroup
            id="name"
            child={Input}
            value={name}
            onChange={e => updateName(e.target.value)}
            placeholder="Name"
            type="text"
            validator={data => (!data ? 'Name can not be empty.' : '')}
            dataKey="value"
          />
          <FormGroup
            id="surname"
            child={Input}
            value={surname}
            onChange={e => updateSurname(e.target.value)}
            placeholder="Surname"
            type="text"
            validator={data => (!data ? 'Surname can not be empty.' : '')}
            dataKey="value"
          />
          <FormGroup
            id="email"
            child={Input}
            value={email}
            onChange={e => updateEmail(e.target.value)}
            placeholder="Email"
            type="text"
            validator={data => (!validateEmail(data) ? 'Please, provide valid email.' : '')}
            dataKey="value"
          />
          <FormGroup
            id="date"
            child={DayPicker}
            numberOfMonths={1}
            placeholder="Date"
            date={date}
            dataKey="date"
            isOutsideRange={() => false}
            onChange={updateDate}
            focused={this.state.focused}
            validator={data => (!data ? 'Date is required.' : '')}
            onFocus={({ focused }) => this.setState({ focused })}
          />
          <FormControlsWrapper>
            <Button type="reset">Clear</Button>
            <SubmitButton type="submit">Submit</SubmitButton>
          </FormControlsWrapper>
        </FormContainer>
      </ValidatingForm>
    );
  }
}
