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
    "Web Series": {
      "Mirzapur": {
        "Season 1": ["Episode 1", "Episode 2", "Episode 3"],
        "Season 2": ["Episode 1", "Episode 2", "Episode 3"],
        "Season 3": ["Episode 1", "Episode 2", "Episode 3"],
      },
    },
  };

  const allVideos = Object.keys(categorizedVideos).reduce((acc, category) => {
    if (category === "Web Series") {
      Object.keys(categorizedVideos[category]).forEach((series) => {
        Object.keys(categorizedVideos[category][series]).forEach((season) => {
          acc.push(...categorizedVideos[category][series][season].map((ep) => `${series} - ${season} - ${ep}`));
        });
      });
    } else {
      acc.push(...categorizedVideos[category]);
    }
    return acc;
  }, []);

  return (
    <Router>
      <div className="app-container">
        <div className="background"></div>
        <h1>Cine-Clip Video Player</h1>
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
          <Route path="/video/:series/:season/:episode" element={<VideoPlayer />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
