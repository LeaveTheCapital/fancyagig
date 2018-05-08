import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Left from "./components/Left";
import Middle from "./components/Middle";
import Right from "./components/Right";
import axios from "axios";

import { getGenres, getGigsByGenre } from "./utils";

class App extends Component {
  state = {
    gigs: { events: [] },
    currentGenre: null,
    currentGig: null,
    currentLocation: null
  };

  render() {
    const { gigs } = this.state;
    return (
      <div className="App">
        <Header />
        <Left gigs={gigs} handleEnter={this.handleEnter} handleGenreClick={this.handleGenreClick} />
        <Middle gigs={gigs.events} currentGenre={this.state.currentGenre} />
        <Right />
      </div>
    );
  }

  handleGenreClick = genre => {
    this.setState({
      currentGenre: genre
    })
  }

  getAllGigs = location => {
    let url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=GPehQJ8IlYAwNy3CtkWB01ztkRblIVWo&countryCode=GB&size=200&city=${location}`;
    return axios.get(url);
  };

  selectGig = () => {
    // use local storage
  };

  handleEnter = event => {
    const currentLocation = event.target.value;
    if (event.key === "Enter" && currentLocation !== "") {
      event.target.value = "";
      this.getAllGigs(currentLocation)
        .then(({ data: { _embedded: events } }) => {
          this.setState({ currentLocation, gigs: events });
        })
        .catch(err => {
          console.log("err", err);
        });
    }
  };
}

export default App;
