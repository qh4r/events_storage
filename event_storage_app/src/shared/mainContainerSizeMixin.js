import { css } from 'styled-components';

export const mainContainerSizeMixin = css`
  max-width: ${({ theme }) => theme.maxContainerWidth};
  margin: auto;
`;
