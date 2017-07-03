import styled from 'styled-components';

// language=SCSS prefix=dummy{ suffix=}
export const Input = styled.input`
  font-size: 18px;
  line-height: 48px;
  margin: 5px 0;
  padding: 0 15px;
  outline: none;
  font-family: ${({ theme }) => theme.font};
  font-weight: 200;
`;

