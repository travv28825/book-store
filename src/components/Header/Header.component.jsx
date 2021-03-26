import React from "react";

import { Actions, SearchForm } from "./HeaderActions";
import { Header, WrapperHeader, Logo } from "../../theming";

const HeaderComponent = () => (
  <Header>
    <WrapperHeader>
      <Logo>
        <h1>BiblioFAR</h1>
      </Logo>
      <SearchForm />
    </WrapperHeader>
    <Actions />
  </Header>
);

export default HeaderComponent;
