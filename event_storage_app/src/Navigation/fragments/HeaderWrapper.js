import styled from 'styled-components';

export const HeaderWrapper = styled.div `
  text-align: center;  
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: ${({ theme }) => theme.mycolor};
`;
