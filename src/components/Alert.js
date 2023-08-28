import React, { useEffect } from "react";

const Alert = ({ alert }) => {
  return (
    <>
      <p
        style={{
          position: "absolute",
          top: "65px",
          left: "50%",
          transform: "translate(-50%, 0%)",
          padding: "10px 50px",
          backgroundColor: "#ddd",
          borderRadius: "10px",
          color: "#dc3545",
          fontWeight: "600",
          zIndex: '3'
        }}
      >
        {alert}
      </p>
    </>
  );
};

export default Alert;
