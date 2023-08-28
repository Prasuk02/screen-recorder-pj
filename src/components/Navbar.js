import React from "react";
import logoTest from "../images/logoTest.png";
import "../stylesheets/navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = ({ username, setIsAuthUser }) => {
  let navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
    localStorage.removeItem("currentUser");
    setIsAuthUser({ status: false, username: "" });
  };

  return (
    <>
      <nav className="navbar">
        <img className="logo" src={logoTest} alt="logo" />
        <h1 className="navbarHeading">SCREEN RECORDER</h1>

        {username ? (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              position: "absolute",
              right: "30px",
              gap: "15px",
              alignItems: "center",
            }}
          >
            <p className="navUsernameText">{username}</p>
            <button onClick={handleLogout} className="logoutBtn">
              LOGOUT
            </button>
          </div>
        ) : (
          <p className="navLoginText">login</p>
        )}
      </nav>
    </>
  );
};

export default Navbar;
