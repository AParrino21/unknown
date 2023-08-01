import React from "react";
import "./Home.css";

import { Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { auth } from "../../firebase";

const Home = () => {
  const { currentUser } = React.useContext(AuthContext);
  console.log(currentUser)
  if (currentUser === undefined) return 
  if (!currentUser) return <Navigate to="/login" replace />;
  return (
    <div>
      <p>home</p>
    </div>
  );
};

export default Home;
