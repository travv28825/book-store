import React from "react";

import Actions from "./components/Actions.component";
import SearchForm from "./components/Search.component";
import { Header, WrapperHeader, Logo } from "../../theming";

const HeaderComponent = () => (<Header>
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
