import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css";

const SearchBar = ({ allVideos }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const handleResultClick = (video) => {
    navigate(`/video/${video}`);
  };

  const filteredVideos = allVideos.filter((video) =>
    video.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search for a movie..."
        value={query}
        onChange={handleSearch}
        className="search-bar"
      />
      {query && (
        <ul className="search-results">
          {filteredVideos.map((video, index) => (
            <li key={index} onClick={() => handleResultClick(video)}>
              {video.replace(/([A-Z])/g, " $1").trim()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
