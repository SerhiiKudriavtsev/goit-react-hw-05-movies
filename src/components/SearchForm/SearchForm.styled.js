import styled from '@emotion/styled';
import { FcSearch } from 'react-icons/fc';

export const SearchF = styled.form`
  display: flex;
  margin: auto;
  max-width: 500px;
  // background-color: #fff;
  // border-radius: 5px;
  overflow: hidden;
`;

export const SearchIcon = styled(FcSearch)`
  width: 22px;
  height: 22px;
  fill: #24292f;
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font-size: 20px;
  // border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  ::placeholder {
    font-size: 18px;
  }
`;