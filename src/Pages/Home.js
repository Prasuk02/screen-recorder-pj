import React, { useState } from "react";
import "../stylesheets/homePageLayout.css";
import logoTest from "../images/logoTest.png";
import HomeRecorderScreen from "../components/HomeRecorderScreen";
import SavedRecordingSection from "../components/SavedRecordingSection";

const Home = () => {
  const [recordedVideosList, setRecordedVideosList] = useState(
    JSON.parse(localStorage.getItem("recordedVideosList"))
      ? JSON.parse(localStorage.getItem("recordedVideosList"))
      : []
  );
  console.log("recordedVideosList", recordedVideosList);
  return (
    <>
      <nav className="navbar">
        <img className="logo" src={logoTest} alt="logo" />
        <h1 className="navbarHeading">SCREEN RECORDER</h1>
      </nav>

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