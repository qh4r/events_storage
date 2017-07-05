import styled from 'styled-components';
import { mainContainerSizeMixin } from '../../shared/mainContainerSizeMixin';

// language=SCSS prefix=dummy{ suffix=}
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${mainContainerSizeMixin};
`;
