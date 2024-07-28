import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./VideoPlayer.css";

const passwords = {
  "Crew 2024": "318522",
};

const VideoPlayer = () => {
  const { videoId } = useParams();
  const videoSrc = `/videos/${videoId}.mp4`;
  const [password, setPassword] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordSubmit = () => {
    if (password === passwords[videoId]) {
      setIsAuthorized(true);
    } else {
      alert("Incorrect password");
    }
  };

  return (
    <div className="video-player-container">
      {isAuthorized ? (
        <>
          <video className="video-player" controls>
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <a href={videoSrc} download={videoId} className="download-button">
            Download Video
          </a>
        </>
      ) : (
        <div className="password-container">
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={handlePasswordChange}
            className="password-input"
          />
          <button onClick={handlePasswordSubmit} className="password-submit-button">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
