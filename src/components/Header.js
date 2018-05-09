import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  state = {
    currentLocation: null,
    class: "locName"
  };
  shouldComponentUpdate(nextProps) {
    return nextProps.currentLocation !== this.props.currentLocation;
  }

  componentDidUpdate(nextProps) {
    console.log(this.state.class)
    setTimeout(() => {
      this.setState({ class: this.props.currentLocation || 'locName' });
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
          <h2 id="location-heading" className={this.state.class}>{this.props.currentLocation}</h2>
        )}
      </div>
    );
  }
}

export default Header;
