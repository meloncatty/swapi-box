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
      people: [],
      planets: []
    }
  }

  componentWillMount() {
    this.filmInfo()
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

  planetInfo = async() => {
    const callFetch = await apiInfo.fetchPlanets('planets')
    this.setState({
      planets: apiInfo.planets
    })
  }

  render() {
    return (
      <div className="App">
        {!this.state.people.length
          ? <div>
              <Header peopleInfo={this.peopleInfo} planetInfo={this.planetInfo}/>
              <LandingPage filmText={this.state.filmText}/>
            </div>
          : <div>
              <Header peopleInfo={this.peopleInfo}/>
              <SelectedCategory people={this.state.people} />
            </div>
        }
      </div>
    );
  }
}

export default App;
