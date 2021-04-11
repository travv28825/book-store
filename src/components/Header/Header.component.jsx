import React from "react";

import Navigation from './HeaderActions/Navigation.component';
import SearchForm from './HeaderActions/Search.component';
import UserAction from './UserActions';
import { Header, WrapperHeader, Logo } from "../../theming";

const HeaderComponent = () => (
  <Header>
    <WrapperHeader>
      <Logo>
        <h1>BiblioFAR</h1>
      </Logo>
      <SearchForm />
      <UserAction/>
    </WrapperHeader>
    <Navigation />
  </Header>
);

export default HeaderComponent;
