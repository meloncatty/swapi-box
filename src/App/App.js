import React, { Component } from 'react';
import LandingPage from '../LandingPage/LandingPage'
import Header from '../Header/Header'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <LandingPage />
      </div>
    );
  }
}

export default App;
