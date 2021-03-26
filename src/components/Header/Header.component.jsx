import React from "react";

import { Navigation, SearchForm } from "./HeaderActions";
import { Header, WrapperHeader, Logo } from "../../theming";

const HeaderComponent = () => (
  <Header>
    <WrapperHeader>
      <Logo>
        <h1>BiblioFAR</h1>
      </Logo>
      <SearchForm />
    </WrapperHeader>
    <Navigation />
  </Header>
);

export default HeaderComponent;
