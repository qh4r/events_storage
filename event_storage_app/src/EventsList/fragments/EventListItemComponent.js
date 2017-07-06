import React from 'react';
import { momentObj } from 'react-moment-proptypes';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledListItem = styled.li`
  display: block;
  margin: 2px 0;
  border: 1px solid ${props => props.theme.borderColor};
  padding: 2px 10px;
  
  p {
    display: flex;
    margin: 5px;
    line-height: 28px
    align-items: center;
    text-align: center;
    font-size: 14px;
    span {
      margin-left: auto; 
      font-size: 10px;
      color: ${props => props.theme.borderColor};
    }
  }
`;

const EventListItem = ({ name, surname, email, date }) => {
  const fullName = `${name} ${surname}`;
  return (<StyledListItem>
    <p>{fullName}</p>
    <p>{email} <span>{date}</span></p>
  </StyledListItem>);
};

EventListItem.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  date: momentObj.isRequired,
};

export {
  EventListItem,
};
