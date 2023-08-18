import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import NaviBar from "./components/Navibar/NaviBar";
import Alert from "./components/Alert/Alert";
import Profile from "./pages/Profile/Profile";
import Signup from "./pages/Signup/Signup";
import Footer from "./components/Footer/Footer";
import PrivacyPolicy from "./pages/Legal/PrivacyPolicy";
import Terms from "./pages/Legal/Terms";
import CookiePolicy from "./pages/Legal/CookiePolicy";

function App() {
  const { openAlert, setOpenAlert, alertMessage, alertStatus } =
    React.useContext(AuthContext);

  return (
    <div className="App">
      <Router>
        <NaviBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<Terms />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
        <Footer />
      </Router>
      <Alert
        openAlert={openAlert}
        setOpenAlert={setOpenAlert}
        alertMessage={alertMessage}
        alertStatus={alertStatus}
      />
    </div>
  );
}

export default App;
