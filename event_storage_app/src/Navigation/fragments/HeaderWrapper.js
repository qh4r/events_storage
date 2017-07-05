import styled from 'styled-components';
import { media } from '../../shared/mediaMixins';

// language=SCSS prefix=dummy{ suffix=}
export const HeaderWrapper = styled.div `
  z-index: 2;
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.headerBackground};
  margin: auto;
  ${media.sm`
    margin-bottom: 10px;
    position: static;
  `}
`;
