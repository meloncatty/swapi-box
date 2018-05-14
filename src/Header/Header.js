import React from 'react'
import logo from '../images/logo.svg'

const Header =(props)=> {

  return (
    <header>
      <div className='title'>
        <h1><img className='logo' src={logo} alt='Swapi Box, a Star Wars Repository'/></h1>
        <button
          className='favorites header-button'>
          View Favorites
          <span> 0</span>
        </button>
      </div>
      <nav>
        <button
          className='select-category header-button'
          onClick={(e) => {
            props.peopleInfo()
            props.updateSelectedState(e)
          }}
        >People</button>
        <button
          className='select-category header-button'
          onClick={(e) => {
            props.planetInfo()
            props.updateSelectedState(e)
          }}
        >Planets</button>
        <button
          className='select-category header-button'
          onClick={(e) => {
            props.vehicleInfo()
            props.updateSelectedState(e)
          }}
        >Vehicles</button>
      </nav>
    </header>
  )
}

export default Header
