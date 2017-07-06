import styled from 'styled-components';
import { mainContainerSizeMixin } from '../../shared/mainContainerSizeMixin';
import { media } from '../../shared/mediaMixins';

const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  ${mainContainerSizeMixin};
  margin: 10px 20px;
  list-style: none;
  padding: 0;
  padding-bottom: 100px;
  ${media.sm`
    margin: 10px auto; 
  `}
`;

export {
  ListContainer,
};
