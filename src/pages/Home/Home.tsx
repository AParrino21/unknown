import React from "react";
import "./Home.css";

import { AuthContext } from "../../contexts/AuthContext";
import { Button } from "@mui/material";
import { auth } from "../../firebase";

import SightingPost from "../../components/SightingPost/SightingPost";
import PostFeed from "../../components/PostFeed/PostFeed";

const Home = () => {
  const { currentUser, formatDate, postData } = React.useContext(AuthContext);

  return (
    <div>
      <div className="home-header">
        <h4>
          Welcome to <span className="bs">B</span>eyond
          <span className="bs">S</span>ightings, the central hub for UFO
          stories, encounters, and all things Alien. Share your unique
          experiences with the world. Your stories will remain unaltered,
          unregulated, and fully revealed.
        </h4>
        {!currentUser && (
          <>
            <Button>SIGN UP HERE</Button> <br />
          </>
        )}
        {!currentUser && <Button>LOGIN</Button>}
      </div>
      {currentUser && (
        <SightingPost
          currentUser={auth.currentUser?.email}
          formatDate={formatDate}
        />
      )}
      <div>
        <PostFeed postData={postData} />
      </div>
    </div>
  );
};

export default Home;
