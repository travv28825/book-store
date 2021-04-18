import React from "react";

import { useAuth } from "../../../providers/Auth";
import { UserActions } from "../../../theming";
import FormSingIn from "./FromSingIn";
import FormUser from "./FromUser";

const User = () => {
  const { authenticated } = useAuth();

  return (
    <UserActions>{authenticated ? <FormUser /> : <FormSingIn />}</UserActions>
  );
};

export default User;
