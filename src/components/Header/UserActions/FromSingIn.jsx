import React from "react";
import { useHistory } from "react-router";

import { Button } from "../../../theming";

const FormSingIn = () => {
  const history = useHistory();
  const goToLogin = () => {
    history.push("/login");
  };

  return (
    <div>
      <Button no_border={true} onClick={goToLogin}>
        Sing In
      </Button>
      <Button>Sing Up</Button>
    </div>
  );
};

export default FormSingIn;
