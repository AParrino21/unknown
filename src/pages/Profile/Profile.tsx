import React from "react";

import { Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { auth } from "../../firebase";

const Profile = () => {
  const { currentUser } = React.useContext(AuthContext);
  if (currentUser === undefined) return <div>Loading...</div>;
  if (!currentUser) return <Navigate to="/login" replace />;
  return (
    <div>
      <p>Profile</p>
    </div>
  );
};

export default Profile;
