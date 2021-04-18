import React from "react";

import Header from "../../components/Header";
import "./Layout.style.css";

const MainLayout = ({ children }) => (
  <main className="main">
    <Header />
    {children}
  </main>
);
export const EmptyLayout = ({ children }) => (
  <main className="main">{children}</main>
);

export default MainLayout;
