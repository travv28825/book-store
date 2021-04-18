import React from "react";

import Header from "../../components/Header";
import "./Layout.style.css";

const Layout = ({ children }) => <main className="main"><Header />{children}</main>;

export default Layout;
