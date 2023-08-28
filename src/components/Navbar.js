import React from "react";
import logoTest from "../images/logoTest.png";
import "../stylesheets/navbar.css";

const Navbar = ({ username }) => {
  return (
    <>
      <nav className="navbar">
        <img className="logo" src={logoTest} alt="logo" />
        <h1 className="navbarHeading">SCREEN RECORDER</h1>
        <p
          style={{
            position: "absolute",
            right: "30px",
            color: "white",
            textTransform: "uppercase",
            fontWeight: "100",
            fontSize: '16px',
            letterSpacing: '1px',
          }}
        >
          {username ? username : "login"}
        </p>
      </nav>
    </>
  );
};

export default Navbar;
