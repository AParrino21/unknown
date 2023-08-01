import React from "react";
import { Link } from "react-router-dom";
import { List, ListItem, TextField } from "@mui/material";
import { AuthContext } from "../../contexts/AuthContext";
import "./NaviBar.css";

import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const NaviBar = () => {
  const { logout, currentUser } = React.useContext(AuthContext);

  return (
    <div>
      <List className="navi-container">
        {currentUser && (
          <ListItem className="linksContainer">
            <TextField label="Search Feed" />
          </ListItem>
        )}
        <ListItem className="linksContainer">
          <Link className="links" to={"/"}>
            <HomeIcon className="navi-icon" />
          </Link>
        </ListItem>
        {currentUser && (
          <ListItem className="linksContainer">
            <Link className="links" to={"/profile"}>
              <AccountCircleIcon className="navi-icon" />
            </Link>
          </ListItem>
        )}
        {!currentUser ? (
          <ListItem className="linksContainer">
            <Link className="links" to={"/login"}>
              Login
            </Link>
          </ListItem>
        ) : (
          <ListItem className="linksContainer">
            <Link onClick={logout} className="links" to={"/login"}>
              Logout
            </Link>
          </ListItem>
        )}
      </List>
    </div>
  );
};

export default NaviBar;
