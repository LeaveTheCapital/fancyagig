import React, { Component } from "react";
import "./Right.css";

import { getGigDetails } from "../utils";

class Right extends Component {
  state = {
    currentGig: null
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentGig) {
      if (this.props.currentGig) {
        if (this.state.currentGig) {
          if (this.props.currentGig !== this.state.currentGig.id) {
            this.setState({
              currentGig: getGigDetails(this.props.gigs, this.props.currentGig)
            });
          }
        } else if (this.props.currentGig !== nextProps.currentGig) {
          this.setState({
            currentGig: getGigDetails(this.props.gigs, this.props.currentGig)
          });
        }
      } else {
        this.setState({ currentGig: nextProps.currentGig });
      }
    }
  }

  render() {
    const { gigs, currentGig } = this.props;
    const oldCurrentGig = this.state.currentGig;
    let gig;
    if (currentGig) {
      if (!oldCurrentGig) {
        gig = getGigDetails(gigs, currentGig);
      } else if (currentGig !== oldCurrentGig.id) {
        gig = getGigDetails(gigs, currentGig);
      } else {
        gig = oldCurrentGig;
      }
    }
    // const gig = this.state.currentGig;
    return (
      <div id="right-box">
        {gig && (
          <div id="current-gig-box">
            <h2>{gig.name}</h2>
            <img src={gig.image} alt="gig" className="gig-thumb-right" />
            <p>Venue: {gig.venue}</p>
            <p>Date: {gig.date}</p>
            {gig.info && <p>Please Note: {gig.info}</p>}
            {gig.time && <p>Time: {gig.time}</p>}
            <p>Genre: {gig.genre}</p>
            <a href={gig.url} target="_blank" id="button-box">
              <button id="gig-link">Buy tickets please</button>
            </a>
          </div>
        )}
      </div>
    );
  }
}

export default Right;
