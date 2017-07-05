import styled from 'styled-components';
import { media } from '../../shared/mediaMixins';

const PageBody = styled.div`
  flex-grow: 100;
  height: 70%;
  margin-bottom: 20px
  ${media.sm`
    height: auto;
  `}
`;

export {
  PageBody,
};
