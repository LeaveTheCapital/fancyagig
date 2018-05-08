import React from "react";
import "./Left.css";
import { getGenres } from "../utils";

const Left = ({ gigs, handleEnter }) => {
  let genres;
  // genres = [{ rock: 1 }, { roll: 3 }];
  // gigs.events = [1, 2, 3];
  console.log(gigs.events);
  if (gigs.events.length > 0) {
    genres = getGenres(gigs);
    // console.log(Object.keys(genres[0]));
  }
  return (
    <div id="left-box">
      <input
        type="text"
        id="city-search"
        placeholder="Enter a city to get gigging!"
        onKeyUp={handleEnter}
      />
      {gigs.events.length > 0 && (
        <div id="genre-box">
          {genres.map((genre, i) => {
            return (
              <div className="genre" key={genre[0]}>
                {genre[0]} : {genre[1]}
              </div>
            );
          })}
        </div>
      )}
      {gigs.events.length === 0 && (
        <div id="waiting-box">
          Enter a city!
          <img src="https://lefthandhorror.files.wordpress.com/2012/04/metal1.gif" />
        </div>
      )}
    </div>
  );
};

export default Left;
