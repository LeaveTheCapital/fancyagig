import React from "react";
import "./Middle.css";
import { getGigsByGenre } from "../utils";

const Middle = ({ gigs, currentGenre, handleGigClick }) => {
  const gigsByGenre = getGigsByGenre(gigs, currentGenre);
  return (
    <div id="middle-box">
      <div id="events-box">
        {gigsByGenre.map((gig, i) => (
          <div
            onClick={handleGigClick}
            className="gig-square"
            key={i}
            id={gig.id}
          >
            <div id="inner-gig-square">
              {gig.name}
              <img src={gig.images[0].url} className="gig-thumb" alt="" />
              {gig.dates.start.localDate}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Middle;
