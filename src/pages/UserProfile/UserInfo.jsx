import React from "react";
import { Link } from "react-router-dom";

import { User, Button } from "../../theming";

const UserInfo = ({ user }) => {
  return (
    <User>
      <img src="/images/default_avatar.png" alt="" />
      <h2>{user.fullname}</h2>
      <p>
        #{user.username} / {user.email}
      </p>
      <div className="management">
        <Button primary btn_block>
          Edit profile
        </Button>

        <div className="follow">
          <Link to="/">
            <i className="mif-user"></i> <span>0</span> followers
          </Link>
          <Link to="/">
            <i className="mif-user"></i> <span>0</span> following
          </Link>
          <Link to="/">
            <i className="mif-star-empty"></i> <span>0</span>
          </Link>
        </div>
        <div className="location">
          <i className="mif-location"></i> Havana, Cuba
        </div>
      </div>
    </User>
  );
};
export default UserInfo;
