import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  hashHistory,
} from "react-router-dom";

import AuthProvider from "../../providers/Auth";
import MainLayout, { EmptyLayout } from "../../components/Layout";
import Login from "../../pages/Login";
import Private from "../Private";
import routes from "./routes";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          {routes.map((route) => (
            <Private
              exact
              key={route.path}
              path={route.path}
              component={route.component}
              layout={route.layout}
              isPrivate={route.isPrivate}
            />
          ))}
        </Switch>
      </AuthProvider>
    </Router>
  );
};

export default App;
