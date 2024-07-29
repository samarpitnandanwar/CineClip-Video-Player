import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./VideoPlayer.css";

const passwords = {
  "Crew 2024": "318522",
  "Thor 2011": "thor@_2011",
  "Madgaon Express 2024": "madgaon@2024",
  "Chandu Champion 2024": "chandu@2024",
  "Money Heist - Season 1 - Episode 1": "mh123",
  "Money Heist - Season 1 - Episode 2": "mh124",
  // Add more passwords here for other videos
};

const VideoPlayer = () => {
  const { videoId, series, season, episode } = useParams();
  const videoName = series ? `${series} - ${season} - ${episode}` : videoId;
  const videoSrc = `/videos/${videoName}.mp4`;
  const [password, setPassword] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordSubmit = () => {
    if (password === passwords[videoName]) {
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
          <a href={videoSrc} download={videoName} className="download-button">
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
