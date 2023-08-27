import React, { useEffect } from "react";
import "../stylesheets/home.css";

const HomeRecorderScreen = ({ recordedVideosList, setRecordedVideosList }) => {
  let recordedData = [];
  let mediaRecorder;

  useEffect(() => {
    document.getElementById("stopBtn").disabled = true;
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "recordedVideosList",
      JSON.stringify(recordedVideosList)
    );
  }, [recordedVideosList]);

  const startStreming = async () => {
    let videoStream;
    let cameraStream;
    let audioStream;

    //GETTING SCREEN ACCESS
    try {
      videoStream = await navigator.mediaDevices.getDisplayMedia({
        video: {
          mediaSource: "screen"
        }
      });

      const screenVideo = document.getElementsByClassName(
        "screenRecorderBox"
      )[0];
      screenVideo.srcObject = videoStream;
    } catch (error) {
      console.warn(error);
      return;
    }

    //GETTING CAMERA ACCESS
    try {
      cameraStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
      });

      const cameraVideo = document.getElementsByClassName(
        "cameraRecorderBox"
      )[0];
      cameraVideo.srcObject = cameraStream;

      document.getElementById("startBtn").disabled = true;
      document.getElementById("startBtn").innerText = "Recording...";
      document.getElementById("stopBtn").disabled = false;
    } catch (error) {
      console.warn(error);
    }

    //GETTING MICROPHONE ACCESS
    try {
      audioStream = await navigator.mediaDevices.getUserMedia({
        audio: true
      });
    } catch (error) {
      console.warn(error);
    }

    //COMBINING VIDEO & AUDIO STREAM
    const mixStream = new MediaStream([
      ...videoStream.getTracks(),
      ...cameraStream.getTracks()
      //...audioStream.getTracks()
    ]);

    //CREATING NEW RECORDER MEDIA
    mediaRecorder = new MediaRecorder(mixStream);

    mediaRecorder.start(200);

    mediaRecorder.ondataavailable = (e) => {
      recordedData.push(e.data);
    };

    mediaRecorder.onstop = handleStopRecording;
  };

  const stopStreaming = () => {
    mediaRecorder.onstop();
  };

  //FUNCTION TO BE CALLED WHEN STOP BUTTON CLICKED
  const handleStopRecording = () => {
    console.log("RECORDING STOPPED");
    let recordedVideo = URL.createObjectURL(
      new Blob(recordedData, {
        type: recordedData[0].type
      })
    );

    setRecordedVideosList([...recordedVideosList, recordedVideo]);

    recordedData = [];

    const cameraVideo = document.getElementsByClassName("cameraRecorderBox")[0];
    cameraVideo.srcObject = null;

    const screenVideo = document.getElementsByClassName("screenRecorderBox")[0];
    screenVideo.srcObject = null;

    document.getElementById("startBtn").disabled = false;
    document.getElementById("startBtn").innerText = "Start Recording";
    document.getElementById("stopBtn").disabled = true;
  };

  return (
    <>
      <div className="homeMainContainer">
        <div className="recorderBox">
          <video
            src=""
            autoPlay
            type="video/* "
            className="screenRecorderBox"
          ></video>
          <video src="" autoPlay type="video/* " className="cameraRecorderBox">
            HELLO
          </video>
        </div>
        <div className="recorderControlBtn">
          <button className="startBtn" id="startBtn" onClick={startStreming}>
            Start Recording
          </button>
          <button className="stopBtn" onClick={stopStreaming} id="stopBtn">
            Stop Recording
          </button>
        </div>
      </div>
    </>
  );
};

export default HomeRecorderScreen;