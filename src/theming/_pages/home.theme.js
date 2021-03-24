import React from "react";
import styled from "styled-components";

const WallStyle = styled.div`
  margin: 170px  1%;
  max-width: 100%;
  max-heght:100%;
  overflow-y: auto;
  display:flex;
`;

const FooterStyle = styled.footer`
  width: 100%;
  padding: 60px 0;
  background-color: ${({ theme }) => theme.colors.darkgray};
  display: block;
`;

export const Wall = ({ children }) => <WallStyle>{children}</WallStyle>;
export const Footer = ({ children }) => <FooterStyle>{children}</FooterStyle>;
