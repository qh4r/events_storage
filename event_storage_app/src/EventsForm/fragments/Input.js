import styled from 'styled-components';
import { media } from '../../shared/mediaMixins';

// language=SCSS prefix=dummy{ suffix=}
export const Input = styled.input`
  font-size: 18px;
  line-height: 48px;
  margin: 5px 0;
  padding: 0 15px;
  outline: none;
  border: 1px solid ${({ theme }) => theme.input.borderColor}
  font-family: ${({ theme }) => theme.font};
  font-weight: 200;
  &::placeholder {
    visibility: visible;
      ${media.sm`
        visibility: hidden;
      `}
  }  
`;

