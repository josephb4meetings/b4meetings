'use client'
import React, { useState, useEffect, useRef } from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import Font Awesome
import { faVideo, faStop, faRefresh, faSave } from "@fortawesome/free-solid-svg-icons"; // Import icons

const VideoRecorder = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null); // Error state for unsupported devices
  const videoRef = useRef(null); // Reference to the video element to show the webcam feed
  const { startRecording, stopRecording, mediaBlobUrl, clearBlobUrl } =
    useReactMediaRecorder({ video: true });
  // Function to check and request camera permissions
  const askForPermission = async () => {
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (isSafari) {
      alert(
        "We need access to your camera for recording. Please allow camera access when prompted. If you previously denied it, you can enable it in your device's settings: Settings → Safari → Camera → Allow."
      );
    }
    if (navigator.permissions) {
      try {
        const cameraPermission = await navigator.permissions.query({ name: "camera" });
        if (cameraPermission.state === "granted") {
          requestCameraAccess();
        } else if (cameraPermission.state === "prompt") {
          requestCameraAccess();
        } else if (cameraPermission.state === "denied") {
          handlePermissionDenied();
        }
      } catch (error) {
        requestCameraAccess();
      }
    } else {
      requestCameraAccess();
    }
  };
  // Function to request camera access
  const requestCameraAccess = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error("Error accessing webcam: ", err.message);

      if (err.name === "NotAllowedError") {
        setErrorMessage(
          "Permission to access the camera was denied. Please enable it in your device's settings: Settings → Safari → Camera → Allow."
        );
      } else if (err.name === "NotFoundError") {
        setErrorMessage("No camera found on your device.");
      } else if (err.name === "NotReadableError") {
        setErrorMessage("Your camera is being used by another application.");
      } else {
        setErrorMessage("Your device does not support video recording.");
      }
    }
  };
  // Handle the denied permission by displaying instructions
  const handlePermissionDenied = () => {
    setErrorMessage(
      "You have denied camera access. Please go to your device's settings (Settings → Safari → Camera) and manually grant permission."
    );
  };
  // Start the webcam feed when the component mounts
  useEffect(() => {
    askForPermission();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };

  }, []);
  // Timer logic for recording
  useEffect(() => {
    let timer;
    if (isRecording) {
      timer = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else if (!isRecording && seconds !== 0) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRecording, seconds]);
  // Format time as MM:SS
  const formatTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const remainingSeconds = secs % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };
  // Handle recording start
  const handleStartRecording = () => {
    setIsRecording(true);
    setSeconds(0);
    startRecording();
  };
  // Handle recording stop
  const handleStopRecording = () => {
    setIsRecording(false);
    stopRecording();
  };
  // Handle retake (clear the previous video)
  const handleRetake = () => {
    clearBlobUrl();
    setIsRecording(false);
    setSeconds(0);
  };
  // Save the recorded video by triggering a download
  const handleSaveVideo = () => {
    if (mediaBlobUrl) {
      const link = document.createElement("a");
      link.href = mediaBlobUrl;
      link.download = `video_${new Date().toISOString()}.webm`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };
  // Determine the text and style for the main button based on the recording state
  const getButtonProps = () => {
    if (isRecording) {
      return { text: "Stop Recording", color: "bg-red-500", icon: faStop };
    }
    if (mediaBlobUrl) {
      return { text: "Retake", color: "bg-teal-500", icon: faRefresh };
    }
    return { text: "Record", color: "bg-teal-400", icon: faVideo };
  };
  // Handle click on the main button based on its state
  const handleButtonClick = () => {
    if (isRecording) {
      handleStopRecording();
    } else if (mediaBlobUrl) {
      handleRetake();
    } else {
      handleStartRecording();
    }
  };
  const { text, color, icon } = getButtonProps();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4 text-black">b4meetings</h1>
      {errorMessage ? (
        <p className="text-red-500">{errorMessage}</p>
      ) : (
        <>
          <div className="relative">
            {/* Live webcam feed */}
            <video
              ref={videoRef}
              className="w-96 h-64 bg-black rounded-[30px]" // Added border radius here
              autoPlay
              muted
            />
            {/* Recorded video preview */}
            {mediaBlobUrl && !isRecording && (
              <video
                className="w-96 h-64 bg-black absolute inset-0 rounded-[30px]" // Added border radius here
                src={mediaBlobUrl}
                controls
                autoPlay
              />
            )}
          </div>
          <div className="text-lg mt-4 text-black">
            {isRecording ? `${formatTime(seconds)}` : "00:00"}
          </div>
          <div className="mt-4 space-x-2">
            {/* Single button for Start/Stop/Retake */}
            <button
              onClick={handleButtonClick}
              className={`px-4 py-2 text-white rounded items-center ${color}`}
            >
              <FontAwesomeIcon icon={icon} className="mr-2" />
              {text}
            </button>
            {/* Save Video button */}
            {mediaBlobUrl && (
              <button
                onClick={handleSaveVideo}
                className="px-4 py-2 bg-green-500 text-white rounded items-center"
              >
                <FontAwesomeIcon icon={faSave} className="mr-2" />
                Save Video
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default VideoRecorder;