import React, { useState } from "react";
import { useHistory } from "react-router";

import { useAuth, useAuthDispatch, login } from "../../providers/Auth";
import {
  LoginWrapper,
  GroupForm,
  Button,
  PaginationWrapper,
} from "../../theming";

const initialCredentials = {
  username: "",
  password: "",
};

const LoginPage = () => {
  const [credentials, setCredentials] = useState(initialCredentials);
  const { loading, errorMessage } = useAuth();
  const dispatch = useAuthDispatch();
  const history = useHistory();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };
  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      let response = await login(dispatch, credentials);
      if (!response.user) return;
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  const handleSingUp = async (event) => {
    event.preventDefault();
    await register({ username: "asd" });
    history.push("/login");
  };

  return (
    <LoginWrapper>
      <p>{errorMessage && `Error::  ${errorMessage}`}</p>
      <form>
        <h1>Welcome!</h1>
        <GroupForm
          onChange={handleChange}
          value={credentials.username}
          name="username"
          title="Username, phone number or email"
          disabled={loading}
        />
        <GroupForm
          onChange={handleChange}
          value={credentials.password}
          name="password"
          type="password"
          title="Password"
          disabled={loading}
        />
        <PaginationWrapper page="middle">
          <Button btn_block
            disabled={loading}
            primary="true"
            type="submit"
            onClick={handleLogin}
          >
            Sing in
          </Button>
        </PaginationWrapper>
        <p className="to-singup">
          New to GitHub?
          <a href="" onClick={handleSingUp}> Create an account</a>.
        </p>
      </form>
    </LoginWrapper>
  );
};

export default LoginPage;
