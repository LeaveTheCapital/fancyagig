import React, { Component } from "react";
import "./Header.css";
import ReactDOM from "react-dom";

class Header extends Component {
  state = {};

  shouldComponentUpdate(nextProps) {
    return nextProps.currentLocation !== this.props.currentLocation;
  }

  componentDidUpdate(nextProps) {
    const locationElement = ReactDOM.findDOMNode(this.refs.location);
    locationElement.classList.toggle("locName");
    setTimeout(() => {
      locationElement.classList.toggle("locName");
    }, 2000);
  }

  render() {
    return (
      <div id="header-box">
        <h1>
          Fancy a gig...?{" "}
          <span role="img" aria-label="rock-on">
            🤔🤘
          </span>
        </h1>
        {this.props.currentLocation && (
          <h2 ref="location" id="location-heading">
            {this.props.currentLocation}
          </h2>
        )}
      </div>
    );
  }
}

export default Header;
