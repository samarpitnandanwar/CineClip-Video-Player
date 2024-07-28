import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VideoPlayer from "./components/VideoPlayer";
import VideoList from "./components/VideoList";
import "./App.css";

const App = () => {
  const categorizedVideos = {
    Bollywood: ["Crew 2024", "Madgaon Express 2024", "Chandu Champion 2024"],
    Hollywood: [],
    South: [],
    Gujarati: [],
    "Marvel Studio": ["Thor 2011"],
    "TV Shows": [],
    "Web Series": [],
  };
  const allVideos = Object.values(categorizedVideos).flat();

  return (
    <Router>
      <div className="app-container">
        <div className="background"></div>
        <h1>Cine-ClipVideo Player</h1>
        <Routes>
          <Route
            path="/"
            element={
              <VideoList
                allVideos={allVideos}
                categorizedVideos={categorizedVideos}
              />
            }
          />
          <Route path="/video/:videoId" element={<VideoPlayer />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
