import React from 'react'

const Header =()=> {
  return (
    <header>
      <div className='title'>
        <h1>SWAPI-Box</h1>
        <button>View Favorites <span>0</span></button>
      </div>
        <hr></hr>
      <nav>
        <button>People</button>
        <button>Planets</button>
        <button>Vehicles</button>
      </nav>
    </header>
  )
}

export default Header