import React, { Component } from 'react'
import PropTypes from 'prop-types'
import logo from '../images/logo.svg'

class Header extends Component  {
  constructor(props) {
    super(props)

    this.state ={
      peopleActive: false,
      planetsActive: false,
      vehiclesActive: false
    }
  }

  activePeople=()=> {
    this.setState({
      peopleActive: true,
      planetsActive: false,
      vehiclesActive: false
    })
  }

  activePlanets=()=> {
    this.setState({
      planetsActive: true,
      peopleActive: false,
      vehiclesActive: false
    })
  }

  activeVehicles=()=> {
    this.setState({
      vehiclesActive: true,
      peopleActive: false,
      planetsActive: false
    })
  }
  
  render() {
    return (
      <header>
        <button
            className='view-favorites header-button'>
            View Favorites
            <span> 0</span>
          </button>
        <div className='title' >
          <h1><img className='logo' src={logo} alt='Swapi Box, a Star Wars Repository'/></h1>
        </div>
        <nav>
          <button
            className={this.state.peopleActive 
              ? 'selected select-category' : 'header-button select-category'}
            onClick={(e) => {
              e.preventDefault()
              const {innerHTML} = e.target
              this.props.peopleInfo()
              let cleanEvent = innerHTML.toLowerCase()
              this.props.updateSelectedState(cleanEvent)
              this.activePeople()
            }}
          >People</button>
          <button
            className={this.state.planetsActive 
              ? 'selected select-category' : 'header-button select-category'}
            onClick={(e) => {
              const {innerHTML} = e.target
              this.props.planetInfo()
              let cleanEvent = innerHTML.toLowerCase()
              this.props.updateSelectedState(cleanEvent)
              this.activePlanets()
            }}
          >Planets</button>
          <button
            className={this.state.vehiclesActive 
              ? 'selected select-category' : 'header-button select-category'}
            onClick={(e) => {
              const {innerHTML} = e.target
              this.props.vehicleInfo()
              let cleanEvent = innerHTML.toLowerCase()
              this.props.updateSelectedState(cleanEvent)
              this.activeVehicles()
            }}
          >Vehicles</button>
        </nav>
      </header>
    )
  }
}

Header.propTypes = {
  peopleInfo: PropTypes.func.isRequired,
  planetInfo: PropTypes.func.isRequired,
  vehicleInfo: PropTypes.func.isRequired,
  updateSelectedState: PropTypes.func.isRequired
}
export default Header
