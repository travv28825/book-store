import React, { useState } from "react";
import { useHistory } from "react-router";

import { useAuth } from "../../providers/Auth";
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
  const { login,register } = useAuth();
  const history = useHistory();
  const [credentials, setCredentials] = useState(initialCredentials);

  const handleLogin = async (event)=>{
    event.preventDefault();
    await login(credentials);
    history.push('/');
  }
  const handleSingUp = async (event)=>{
    event.preventDefault();
    await register({username:'asd'});
    history.push('/login');
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <LoginWrapper>
      <form>
        <h1>Welcome to my dream!</h1>
        <GroupForm
          change={handleChange}
          val={credentials.username}
          name="username"
          title="Username, phone number or email"
        />
        <GroupForm
          change={handleChange}
          val={credentials.password}
          name="password"
          type="password"
          title="Password"
        />
        <PaginationWrapper page="middle">
          <Button primary type="submit" onClick={handleLogin}>
            Sing in
          </Button>
          <Button primary type="submit" onClick={handleSingUp}>
            Sing up
          </Button>
        </PaginationWrapper>
      </form>
    </LoginWrapper>
  );
};

export default LoginPage;
