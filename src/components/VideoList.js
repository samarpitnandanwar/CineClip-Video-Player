import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./VideoList.css";
import SearchBar from "./SearchBar";

const VideoList = ({ categorizedVideos, allVideos }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const renderWebSeries = (series) => {
    return Object.keys(series).map((show) => (
      <div key={show} className="category-list">
        <h3>{show}</h3>
        {Object.keys(series[show]).map((season) => (
          <div key={season}>
            <h4>{season}</h4>
            <ul>
              {series[show][season].map((episode) => (
                <li key={episode}>
                  <Link to={`/video/${show}/${season}/${episode}`}>
                    {episode.replace(/([A-Z])/g, " $1").trim()}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    ));
  };

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
          (selectedCategory === "Web Series"
            ? renderWebSeries(categorizedVideos[selectedCategory])
            : categorizedVideos[selectedCategory].map((video, index) => (
                <Link key={index} to={`/video/${video}`} className="video-link">
                  {video.replace(/([A-Z])/g, " $1").trim()}
                </Link>
              )))}
      </div>
    </div>
  );
};

export default VideoList;
