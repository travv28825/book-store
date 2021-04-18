import React from "react";

import { useAuth } from "../../../providers/Auth";

const FormSingUp = () => {
  const { userDetails } = useAuth();

  return (
    <div>
      singup / <p>{userDetails.username}</p>
    </div>
  );
};

export default FormSingUp;
