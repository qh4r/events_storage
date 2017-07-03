import styled from 'styled-components';
import { media } from '../../shared/mediaMixins';

// language=SCSS prefix=dummy{ suffix=}
export const HeaderWrapper = styled.div `
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.headerBackground};
  margin: auto;
  margin-bottom: 10px;
  ${media.sm`
    position: static;
    color: blue;
  `}
  
  ${media.lg`
    color: red;
  `}
`;
