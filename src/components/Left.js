import React from "react";
import "./Left.css";
import { getGenres } from "../utils";

const Left = ({ gigs, handleEnter, handleGenreClick, currentLocation }) => {
  let genres;
  if (gigs.events.length > 0) {
    genres = getGenres(gigs);
  }
  return (
    <div id="left-box">
      <div id="city-search-box">

        <input
          type="text"
          id="city-search"
          placeholder="Enter a city to get gigging!"
          onKeyUp={handleEnter}
        />
      </div>
      {gigs.events.length > 0 && (
        <div id="genre-box">
          {genres.map((genre, i) => {
            return (
              <div
                className="genre"
                key={genre[0]}
                onClick={() => handleGenreClick(genre[0])}
              >
                {genre[0]} : {genre[1]}
              </div>
            );
          })}
        </div>
      )}
      {gigs.events.length === 0 && (
        <div id="waiting-box">
          Enter a city!
          <img
            src="https://lefthandhorror.files.wordpress.com/2012/04/metal1.gif"
            alt="🤘"
          />
        </div>
      )}
    </div>
  );
};

export default Left;
