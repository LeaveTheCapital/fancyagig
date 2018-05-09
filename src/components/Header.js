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

  componentDidUpdate() {
    setTimeout(() => {
      this.setState({ class: "" });
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
          {this.props.currentLocation && (
            <h2 className={this.state.class}>{this.props.currentLocation}</h2>
          )}
        </h1>
      </div>
    );
  }
}

export default Header;
