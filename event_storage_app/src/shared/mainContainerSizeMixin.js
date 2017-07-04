import { css } from 'styled-components';
import { media } from './mediaMixins';

export const mainContainerSizeMixin = css`
  max-width: ${({ theme }) => theme.maxContainerWidth};
  margin: auto;
  ${media.sm`
    padding: 0 10px;
  `}
`;
