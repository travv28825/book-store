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
  const { login } = useAuth();
  const history = useHistory();
  const [credentials, setCredentials] = useState(initialCredentials);

  const handleSubmit = (event) => {
    event.preventDefault();
    login(credentials).then(() => {
      history.push("/");
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <LoginWrapper>
      <form onSubmit={handleSubmit}>
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
};

export default LoginPage;
