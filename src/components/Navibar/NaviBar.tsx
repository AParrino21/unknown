import React from "react";
import { AuthContext } from "../../contexts/AuthContext";
import "./NaviBar.css";
import { Link } from "react-router-dom";
import { List, ListItem, TextField, Divider } from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";

const NaviBar = () => {
  const { logout, currentUser, handleSearch } = React.useContext(AuthContext);

  return (
    <>
      <div className="navi-root">
        <div className={currentUser ? "navi-container-logged-in" : ""}>
          {currentUser && (
            <ListItem className="linksContainer-logged-in">
              <Link to="/" className="logo">
                <h2>BS</h2>
              </Link>
              <TextField label="Search the BS Feed" />
              <SearchIcon className="search-icon" onClick={handleSearch} />
            </ListItem>
          )}
          <div className="logged-out-flex">
            {!currentUser && (
              <ListItem className="linksContainer-logged-in">
                <Link to="/" className="logo">
                  <h2>BS</h2>
                </Link>
              </ListItem>
            )}
            <List className="navi-container">
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
        </div>
      </div>
      <Divider />
      <br />
    </>
  );
};

export default NaviBar;
