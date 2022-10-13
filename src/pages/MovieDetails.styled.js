import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  // height: 100px;
`;

export const Button = styled.button`
  display: flex;
  margin: auto;
  padding: 8px 16px;
  border-radius: 4px;
  color: black;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  background-color: white;
  border: solid 1px orangered;

  &:hover {
    color: white;
    background-color: orangered;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;

  flex-direction: column;
  // text-decoration: none;
  padding: 12px;
  font-weight: 500;
  font-size: 22px;
  font-weight: 700;
  align-items: center;

`;

export const LinkChoice = styled.a`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  text-decoration: none;
  // padding: 12px;
  // font-weight: 500;
  // font-size: 22px;
  // font-weight: 700;
  }
`;

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;

export const Container = styled.div`
  display: flex;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid black;
`;
