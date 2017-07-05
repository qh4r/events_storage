import styled from 'styled-components';
import { media } from '../../shared/mediaMixins';
import { mainContainerSizeMixin } from '../../shared/mainContainerSizeMixin';

// language=SCSS prefix=dummy{ suffix=}
export const HeaderControls = styled.div`
    display: flex;
    justify-content: space-around;
    ${mainContainerSizeMixin};
    ${media.sm`
    justify-content: flex-start;
`}
`;
