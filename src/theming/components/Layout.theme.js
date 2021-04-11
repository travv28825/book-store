import React from "react";
import styled from "styled-components";

const LayoutStyle = styled.main`
  padding: 0;
  width: 100%;
  height: 100%;
  border: 0;
`;

export const Layout = ({ children }) => <LayoutStyle>{children}</LayoutStyle>;
