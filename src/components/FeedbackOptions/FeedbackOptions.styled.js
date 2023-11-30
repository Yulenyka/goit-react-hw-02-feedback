import styled from 'styled-components';

export const BtnList = styled.ul`
  display: flex;
`;

export const BtnItem = styled.li`
  margin-right: 20px;
`;
export const Button = styled.button`
  min-width: 50px;
  padding: 8px;
  background-color: #442d25;
  outline: none;
  border: 1px solid #36241d;
  border-radius: 4px;
  cursor: pointer;
  color: white;
  :hover {
    background-color: #ba0000;
  }
`;