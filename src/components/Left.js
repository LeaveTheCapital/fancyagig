import React from 'react';
import './Left.css';

const Left = ({ events }) => {
  return (
    <div id="left-box">
      <input type="text" id="city-search" />
      {events.length > 0 && <div id="genre-box">
      </div>}
      {events.length === 0 && <div>
        Enter a city!
    </div>}
    </div>

  )

}
  ;

export default Left;
