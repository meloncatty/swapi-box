import React from 'react'
import './Header.sass'

const Header =()=> {
  return (
    <header>
      <h1>SWAPI-Box</h1>
      <button>View Favorites <span>0</span></button>
      <hr></hr>
      <button>People</button>
      <button>Planets</button>
      <button>Vehicles</button>
    </header>
  )
}

export default Header