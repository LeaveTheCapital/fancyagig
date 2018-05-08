import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Left from './components/Left';
import Middle from './components/Middle';
import Right from './components/Right';
import axios from 'axios';

import { getGenres, getGigsByGenre } from './utils'

class App extends Component {
  state = {
    events: [],
    currentGenre: null,
    currentGig: null,
    currentLocation: null
  }

  componentDidMount() {
    this.getAllGigs();
  }

  render() {
    const { events } = this.state;
    return (
      <div className="App">
        <Header />
        <Left events={events} />
        <Middle />
        <Right />
      </div>
    );
  }

  getAllGigs = () => {
    const currentLocation = 'Manchester';
    let url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=GPehQJ8IlYAwNy3CtkWB01ztkRblIVWo&countryCode=GB&size=500&city=${currentLocation}`
    axios.get(url)
      .then(({ _embedded: events }) =>
        this.setState({
          events
        })
      )
  }

  selectGig = () => {
    // use local storage
  }
}

export default App;
