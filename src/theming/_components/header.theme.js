import React from "react";
import styled from "styled-components";

const HeaderStyle = styled.header`
  width: 100%;
  height: 150px;
  z-index: 1;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.main};
`;

const MenuStyle = styled.ul`
  flex: 1;
  display: flex;
  flex-direction: row;
  padding: 0.5rem 24px;
  white-space: nowrap;
  width: 90%;
  margin-left: 5%;
  height: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  border-top: 1px solid ${({ theme }) => theme.colors.gray};
`;

const ItemMenu = styled.li`
  line-height: 45px;
  position: relative;
  margin: 0 1rem;
`;

export const WrapperHeader = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  padding: 5px 25px;
  align-items: center;

  input {
    margin-right: 4%;
    width: 250px;
    position: relative;
  }
`;

export const Header = ({ children }) => <HeaderStyle>{children}</HeaderStyle>;

export const Logo = styled.div`
  flex: 1;
  h1 {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.darkred};
  }
`;

export const MenuHeader = ({ children }) => {
  const subItems = (
    <MenuStyle>
      {children.map((e, i) => (
        <ItemMenu key={i}>{e}</ItemMenu>
      ))}
    </MenuStyle>
  );
  return subItems;
};
