import React from 'react'

const Header =(props)=> {
  
  return (
    <header>
      <div className='title'>
        <h1>SWAPI-Box</h1>
        <button 
          className='favorites'>
          View Favorites
          <span>0</span>
        </button>
      </div>
        <hr></hr>
      <nav>
        <button onClick={(e) => {
            props.peopleInfo()
            props.updateSelectedState(e) 
          }}
        >People</button>
        <button onClick={(e) => {
            props.planetInfo()
            props.updateSelectedState(e) 
          }}
        >Planets</button>
        <button onClick={(e) => {
            props.vehicleInfo()
            props.updateSelectedState(e) 
          }}
        >Vehicles</button>
      </nav>
    </header>
  )
}

export default Header
