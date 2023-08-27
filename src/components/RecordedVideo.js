import React from "react";

const RecordedVideo = ({ video }) => {
  return (
    <>
      <video
        src={video}
        width="100%"
        controls="true"
        style={{ backgroundColor: "#171521", marginBottom: "1px" }}
      ></video>

      <div
        style={{
          padding: "12px 20px",
          width: "max-content",
          borderRadius: "7px",
          backgroundColor: "#1B1724",
          color: "white",
          fontSize: "14px",
          fontWeight: "500",
          letterSpacing: "1px",
          textTransform: "uppercase",
          margin: "auto"
        }}
      >
        <a
          href={video}
          download
          style={{
            textDecoration: "none",
            color: "white",
            textAlign: "center"
          }}
        >
          download video
        </a>
      </div>
    </>
  );
};

export default RecordedVideo;