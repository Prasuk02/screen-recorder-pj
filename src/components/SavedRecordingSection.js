import React from "react";
import RecordedVideo from "./RecordedVideo";

const SavedRecordingSection = ({ savedVideos }) => {
  return (
    <>
      <p
        style={{
          textTransform: "uppercase",
          color: "#ccc",
          fontSize: "16px",
          fontWeight: "600",
          letterSpacing: "1px"
        }}
      >
        saved recordings:
      </p>
      {savedVideos.length > 0 ? (
        savedVideos?.map((video) => {
          return (
            <div style={{ margin: "20px 0" }}>
              <RecordedVideo video={video} />
            </div>
          );
        })
      ) : (
        <p
          style={{
            textTransform: "uppercase",
            color: "#ccc",
            fontSize: "15px",
            letterSpacing: "1px",
            marginTop: "15px"
          }}
        >
          no Recorded Videos yet
        </p>
      )}
    </>
  );
};

export default SavedRecordingSection;