/* eslint-disable no-param-reassign */
import { css } from 'styled-components';
import { theme } from './theme';

export const media = Object.keys(theme.appWidth).reduce((result, key) => {
  result[key] = (...args) => css`
    @media (min-width: ${theme.appWidth[key]}) {
      ${css(...args)}
    }
  `;
  return result;
}, {});
