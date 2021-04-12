import React from "react";

import Header from "../../components/Header";
import "./Layout.style.css";

const Layout = ({ children }) => (
  <>
    <Header />
    <main className="main">{children}</main>
  </>
);

export default Layout;
