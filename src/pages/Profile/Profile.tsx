import React from "react";

import { Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { auth } from "../../firebase";

const Profile = () => {
  const { currentUser } = React.useContext(AuthContext);
  console.log(currentUser);
  if (currentUser === undefined) return <div>Loading...</div>;
  if (!currentUser) return <Navigate to="/login" replace />;
  return (
    <div>
      <p>Dashboard</p>
    </div>
  );
};

export default Profile;
