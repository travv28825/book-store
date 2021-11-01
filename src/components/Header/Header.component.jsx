import React from "react";

import SearchForm from "./HeaderActions/Search.component";
import MenuNav from "./HeaderActions/Navigation.component";
import UserAction from "./UserActions";
import { Header, Nav, Logo } from "../../theming";

const HeaderComponent = () => (
  <Header>
    <Nav>
      <Logo href="/">Book<span>Store</span></Logo>
      <SearchForm />
      <MenuNav />
    </Nav>
    <UserAction />
  </Header>
);

export default HeaderComponent;
