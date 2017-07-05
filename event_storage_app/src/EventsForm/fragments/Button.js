import styled from 'styled-components';
import { media } from '../../shared/mediaMixins';

const Button = styled.button`
      display: block;
      font-size: 24px;
      width: 60%;
      margin 5px auto;
      padding: 5px 10px;
      border-radius: 8px;
      transition: background-color 0.2s ease-in-out; 
      color: ${(props => props.theme.button.defaultFontColor)};  
      background-color: ${(props => props.theme.button.defaultBackgroundColor)};
      border: none;
      outline: none;

      &:hover {
        background-color: ${(props => props.theme.button.defaultActiveBackgroundColor)};
      }
      
      ${media.sm`
        box-shadow: -1px 1px 5px #555555;
        font-size: 18px;
        margin: 5px 10px;
        width: auto;
        border-radius: 0px;
      `}      
`;

const SubmitButton = Button.extend`
      color: ${(props => props.theme.button.submitFontColor)};  
      background-color: ${(props => props.theme.button.submitBackgroundColor)};
      border: none;
      
      &:hover {
        background-color: ${(props => props.theme.button.submitActiveBackgroundColor)};
      }
`;

export {
  Button,
  SubmitButton,
};
