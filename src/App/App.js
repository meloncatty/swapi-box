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
      planets: [],
      vehicles: [],
      isLoading: true,
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
      filmText: this.state.filmText,
      people: apiInfo.people,
      isLoading: false
    })
  }

  planetInfo = async() => {
    const callFetch = await apiInfo.fetchPlanets('planets')
    this.setState({
      filmText: this.state.filmText,
      planets: apiInfo.planets,
      isLoading: false
    })
  }

  vehicleInfo = async() => {
    const callFetch = await apiInfo.fetchVehicles('vehicles')
    this.setState({
      filmText: this.state.filmText,
      vehicles: apiInfo.vehicles,
      isLoading: false,
    })
  }

  updateSelectedState=(e)=> {
    const stateKeys = Object.keys(this.state)
    const stateToUpdate = stateKeys.filter(key => key !== e)
    this.setState({
      filmText: [],
      [stateToUpdate[1]]: [],
      [stateToUpdate[2]]: [],
      isLoading: true
    })
  }

  render() {
    return (
      <div className="App">
        <Header
          peopleInfo={this.peopleInfo}
          planetInfo={this.planetInfo}
          vehicleInfo={this.vehicleInfo}
          updateSelectedState={this.updateSelectedState}
        />
        {this.state.filmText.length
          ?
            <LandingPage filmText={this.state.filmText}/>
          :
            <SelectedCategory
              people={this.state.people}
              planets={this.state.planets}
              vehicles={this.state.vehicles}
              isLoading={this.state.isLoading}/>
        }
      </div>
    );
  }
}

export default App;
