import styled from "styled-components";
import { Link } from "react-router-dom";

export const FileManager = styled.div`
  width: 100%;
  padding: 1%;
  margin: 2%;
  box-shadow: 0 2px 3px rgb(12 12 12 / 21%);
`;

export const File = styled.div`
  background-color: ${({ theme }) => theme.colors.lighter};
  padding: 1% 1%;
  h2,
  p,
  time {
    text-align: initial;
  }
`;

export const FolderList = styled.div`
  width: 23%;
  height:100%;
  float: left;
  margin-right: 2%;
  flex-grow: 1;
  background: #f9fafc;
  border-right: 1px solid #e9eef9;
`;
export const ItemList = styled.div`
  width: 75%;
  display: flex;
  margin: 0;
  overflow: hidden;
`;

export const Title = styled.h2`
  letter-spacing: 0px;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.large};
  text-overflow: ellipsis;
  font-family: ${({ theme }) => theme.fontFamily.sohne};
`;
export const LinkTitle = styled(Link)`
  color: rgb(47, 47, 47);
  transition: 100ms ease-in;

  &:hover {
    color: ${({ theme }) => theme.colors.blue};
  }
  img {
    width: 80px;
  }
`;
export const Time = styled.time`
  margin-top: 5px;
  font-family: monospace;
  font-style: oblique;
  font-size: ${({ theme }) => theme.fontSizes.p};
`;
