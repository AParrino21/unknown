import React from "react";
import "./Signup.css";
import { Button, Container, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const Signup = () => {
  const navigate = useNavigate();
  const { signup, currentUser } = React.useContext(AuthContext);

  const usernameRef = React.useRef<HTMLInputElement>(null);
  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);
  const comfirmPasswordRef = React.useRef<HTMLInputElement>(null);

  //   React.useEffect(() => {
  //     if (currentUser) {
  //       navigate("/profile");
  //     }
  //   }, [currentUser]);

  const handleSignup = () => {
    console.log(
      usernameRef.current!.value,
      emailRef.current!.value,
      passwordRef.current!.value
    );
    if (
      emailRef.current!.value &&
      passwordRef.current!.value &&
      passwordRef.current!.value === comfirmPasswordRef.current!.value
    ) {
      signup(emailRef.current!.value, passwordRef.current!.value);
    }
  };
  return (
    <div>
      <br />
      <br />
      <Container className="signup-container">
        <h1 className="loginPropeties">Sign Up</h1>
        <br />
        <TextField
          className="signupPropeties"
          inputRef={usernameRef}
          label="Username"
        ></TextField>
        <br />
        <TextField
          className="signupPropeties"
          inputRef={emailRef}
          label="Email"
        ></TextField>
        <br />
        <TextField
          className="signupPropeties"
          inputRef={passwordRef}
          label="Password"
          type={"password"}
        ></TextField>
        <br />
        <TextField
          className="signupPropeties"
          inputRef={comfirmPasswordRef}
          label="Comfirm Password"
          type={"password"}
        ></TextField>
        <br />
        <div className="sigupButtonContainer">
          <Button onClick={handleSignup} color="primary" variant="contained">
            Signup
          </Button>
        </div>
        <div className="signup-agreement">
          <p>
            By clicking Sign Up, you agree to our{" "}
            <Link to="/terms-of-use">Terms</Link>,{" "}
            <Link to="/privacy-policy">Privacy Policy</Link>{" "}and{" "}
            <Link to="/cookie-policy">Cookies Policy</Link>. You may receive SMS
            Notifications from us and can opt out any time.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Signup;
