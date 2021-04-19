import React, { useState } from "react";
import { useHistory } from "react-router";

import { useAuth, useAuthDispatch, login,singup } from "../../providers/Auth";
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
  // handleLogin.catch(e=>{
  //   console.error(`Error in handleLogin: ${e}`)
  // })
  const handleSingUp = async (event) => {
    event.preventDefault();
    const datasend = {
      username: "travv28825",
      password:'123',
      avatar:'/images/default_avatar.png',
      fullname: "Asney Hidalgo Palmero",
      email: "asney28825@gmail.com",
    }
    await singup(datasend);
    history.push("/login");
  };
  // handleSingUp.catch(e=>{
  //   console.error(`Error in handleSingUp: ${e}`)
  // })

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
