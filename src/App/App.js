import React, { Component } from 'react';
import LandingPage from '../LandingPage/LandingPage'
import Header from '../Header/Header'
import './App.css';
import FetchData from '../Helpers/FetchData.js'

const apiInfo = new FetchData()

class App extends Component {
  constructor() {
    super()

    this.state = {
      filmText: []
    }
  }

  componentWillMount() {
    this.filmInfo()
  }

  filmInfo = async() => {
    const callFetch = await apiInfo.fetchInfo('films')
    this.setState({
      filmText: apiInfo.info
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <LandingPage filmText={this.state.filmText} />
      </div>
    );
  }
}

export default App;
