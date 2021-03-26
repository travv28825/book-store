import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import AuthProvider from "../../providers/Auth";
import Private from "../Private";
import HomePage from "../../pages/Home";
import LoginPage from "../../pages/Login";
import NotFound from "../../pages/NotFound";
import { Layout } from "../../theming";
import { Help } from "./help";

const App = () => (
  <BrowserRouter>
    <AuthProvider>
      <Layout>
        <Switch>
          <Route exact path="/help">
            <Help />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Private exact path="/">
            <HomePage />
          </Private>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </AuthProvider>
  </BrowserRouter>
);

export default App;
