import React from "react";
import "./Header.css";

const Header = ({ currentLocation }) => (
  <div id="header-box">
    <h1>
      Fancy a gig...?{" "}
      <span role="img" aria-label="rock-on">
        🤔🤘
      </span>
      {currentLocation && <h2>
        {currentLocation}
      </h2>}
    </h1>
  </div>
);

export default Header;
