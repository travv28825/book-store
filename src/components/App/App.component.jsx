import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import AuthProvider from "../../providers/Auth";
import Private from "../Private";
import { Layout } from "../../theming";
import routes from "./routes";

const App = () => (
  <BrowserRouter>
    <AuthProvider>
      <Layout>
        <Switch>
          {routes.map((route) => (
            <Private
              exact
              key={route.path}
              path={route.path}
              component={route.component}
              isPrivate={route.isPrivate}
            />
          ))}
        </Switch>
      </Layout>
    </AuthProvider>
  </BrowserRouter>
);

export default App;
