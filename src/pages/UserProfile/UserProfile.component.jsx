import React from "react";

import { useAuth } from "../../providers/Auth";
import { Profile } from "../../theming";
import UserInfo from "./UserInfo";

const UserProfile = () => {
  const { userDetails } = useAuth();

  return (
    <Profile>
      <UserInfo user={userDetails} />
    </Profile>
  );
};

export default UserProfile;
