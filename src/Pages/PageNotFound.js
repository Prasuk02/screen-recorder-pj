import React from "react";

const PageNotFound = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "calc(100vh - 20px - 35px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "70px",
        fontWeight: "900",
        color: "#222",
        margin: "auto",
      }}
    >
      ERROR 404
      <br />
      PAGE NOT FOUND !!
      <br />
      <span style={{ fontSize: "25px", fontWeight: "600" }}>
        REDIRECTING TO HOME PAGE IN SOMETIME...
      </span>
    </div>
  );
};

export default PageNotFound;
