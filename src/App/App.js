import React, { Component } from 'react';
import LandingPage from '../LandingPage/LandingPage'
import Header from '../Header/Header'
import './App.css';
import FetchData from '../Helpers/FetchData.js'
import SelectedCategory from '../SelectedCategory/SelectedCategory'

const apiInfo = new FetchData()

class App extends Component {
  constructor() {
    super()

    this.state = {
      filmText: [],
      people: []
    }
  }

  componentWillMount() {
    this.filmInfo()
    this.peopleInfo()
  }

  filmInfo = async() => {
    const callFetch = await apiInfo.gatherFilmCrawl('films')
    this.setState({
      filmText: apiInfo.filmText
    })
  }

  peopleInfo = async() => {
    const callFetch = await apiInfo.fetchPeople('people')
    this.setState({
      people: apiInfo.people
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        
        <SelectedCategory people={this.state.people} />
      </div>
    );
  }
}

export default App;
