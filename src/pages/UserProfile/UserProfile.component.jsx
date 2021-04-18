import React from "react";

import { useAuth } from "../../providers/Auth";

const UserProfile = () => {
  const { userDetails } = useAuth();

  return <div>Profile: {userDetails.username}</div>;
};

export default UserProfile;
