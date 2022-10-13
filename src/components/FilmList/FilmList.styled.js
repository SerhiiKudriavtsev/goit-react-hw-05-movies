import styled from '@emotion/styled';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 10;
  justify-content: center;
  margin: 0;
  padding: 0;
  text-align: center;
  list-style: none;
`;

export const Item = styled.li`
  margin: 20px;
  width: 300px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
  transition: 0.25s;
`;

export const Text = styled.p`
  font-size: 20px;
  color: blue;
`;
