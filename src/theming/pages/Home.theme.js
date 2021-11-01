import React from "react";
import styled from "styled-components";

const WallStyle = styled.div`
  margin: 1rem 2%;
  padding: auto;
  min-height: 100%;
`;
export const Footer = styled.footer`
  width: 100%;
  padding: 60px 0;
  background-color: ${({ theme }) => theme.colors.darkgray};
  display: block;
`;
export const Wall = ({ children }) => <WallStyle>{children}</WallStyle>;
