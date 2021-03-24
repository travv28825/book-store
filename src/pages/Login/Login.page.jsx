import React, { useState } from "react";
import { useHistory } from "react-router";

import { useAuth } from "../../providers/Auth";
import {
  LoginWrapper,
  GroupForm,
  Button,
  PaginationWrapper,
} from "../../theming";

function LoginPage() {
  const { login } = useAuth();
  const history = useHistory();
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  function authenticate(event) {
    event.preventDefault();
    login(data).then(() => {
      history.push("/");
    });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  return (
    <LoginWrapper>
      <form onSubmit={authenticate}>
        <h1>Welcome to my dream!</h1>
        <GroupForm
          change={handleChange}
          val={data.username}
          name="username"
          title="Username, phone number or email"
        />
        <GroupForm
          change={handleChange}
          val={data.password}
          name='password'
          type="password"
          title="Password"
        />
        <PaginationWrapper page="middle">
          <Button primary type="submit">
            Login
          </Button>
          <Button primary type="submit">
            Sing up
          </Button>
        </PaginationWrapper>
      </form>
    </LoginWrapper>
  );
}

export default LoginPage;
