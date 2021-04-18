import React from "react";

import{Link} from 'react-router-dom';

import { useAuth } from "../../../providers/Auth";
import { FormUser } from "../../../theming";

const FormSingUp = () => {
  const { userDetails } = useAuth();

  return (
    <FormUser>
      <div className="header-item">
        <Link>
          <i className="mif-notification"></i>
        </Link>
      </div>
      <div className="header-item">
        <Link to='/profile'>{userDetails.username}</Link>
      </div>
    </FormUser>
  );
};

export default FormSingUp;
