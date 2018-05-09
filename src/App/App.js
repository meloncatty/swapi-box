import React, { Component } from 'react';
import SplashPage from '../SplashPage/SplashPage'
import Header from '../Header/Header'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SplashPage />
      </div>
    );
  }
}

export default App;
