import React from 'react';
import './Middle.css';
import { getGigsByGenre } from '../utils'

const Middle = ({ gigs, currentGenre }) => {
  const gigsByGenre = getGigsByGenre(gigs, currentGenre)
  return (
    <div id="middle-box">
      <div>

        {gigsByGenre.map((gig, i) => <div className="gig-squares" key={i}>
          {gig.name}
        </div>
      </div>)}
    </div>
      );
    
    }
    
    export default Middle;
