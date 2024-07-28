import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./VideoList.css";
import SearchBar from "./SearchBar";

const VideoList = ({ categorizedVideos, allVideos }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="video-list-container">
      <SearchBar allVideos={allVideos} />
      <div className="category-list">
        {Object.keys(categorizedVideos).map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`category-button ${
              selectedCategory === category ? "active" : ""
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="movies-list">
        {selectedCategory &&
          categorizedVideos[selectedCategory].map((video, index) => (
            <Link key={index} to={`/video/${video}`} className="video-link">
              {video.replace(/([A-Z])/g, " $1").trim()}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default VideoList;
