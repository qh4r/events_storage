import React from 'react';
import styled from 'styled-components';
import { media } from '../shared/mediaMixins';

const Wrapper = styled.div`
  margin: 100px auto 0 auto;
  display: flex;
  justify-content: center;
  align-items: center
`;

const Msg = styled.span`
  font-size: 92px;
  color: ${props => props.theme.font404Color};
  ${media.sm`
    font-size: 192px;
  `}
`;

const NotFound = () => (
  <Wrapper id="not-found-page">
    <Msg>404</Msg>
  </Wrapper>
);

export {
  NotFound,
};
