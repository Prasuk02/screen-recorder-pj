import React, { useState } from "react";
import "../stylesheets/homePageLayout.css";
import HomeRecorderScreen from "../components/HomeRecorderScreen";
import SavedRecordingSection from "../components/SavedRecordingSection";

const Home = () => {
  // const [recordedVideosList, setRecordedVideosList] = useState(
  //   JSON.parse(localStorage.getItem("recordedVideosList"))
  //     ? JSON.parse(localStorage.getItem("recordedVideosList"))
  //     : []
  // );
  const [recordedVideosList, setRecordedVideosList] = useState([]);
  console.log("recordedVideosList", recordedVideosList);
  return (
    <>
      <div className="homePageLayout">
        <section className="recorderLayout">
          <HomeRecorderScreen
            recordedVideosList={recordedVideosList}
            setRecordedVideosList={setRecordedVideosList}
          />
        </section>
        <section className="savedRecordingLayout">
          <SavedRecordingSection savedVideos={recordedVideosList} />
        </section>
      </div>
    </>
  );
};

export default Home;