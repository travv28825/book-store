import React from "react";

import { useAuth } from "../../providers/Auth";
import { Profile } from "../../theming";

const UserProfile = () => {
  const { userDetails } = useAuth();

  return <Profile>Profile: {userDetails.username}</Profile>;
};

export default UserProfile;
