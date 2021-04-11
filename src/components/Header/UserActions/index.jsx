import React from "react";
import { useHistory } from "react-router";

import { useAuth, useAuthDispatch, logout } from "../../../providers/Auth";
import { UserActions } from "../../../theming";

const User = () => {
  const history = useHistory();
  const { userDetails } = useAuth();
  const dispatch = useAuthDispatch();

  const handleLogout = (event) => {
    event.preventDefault();
    logout(dispatch);
    history.push("/login");
  };

  return (
    <UserActions>
      <p>{userDetails.username}</p>
      <a href="/" onClick={handleLogout}>Logout</a>
    </UserActions>
  );
};

export default User;
