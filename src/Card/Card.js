import React from 'react'
import './Card.css'

const Card = (props) => {
  const peopleCards = ({person_name, homeworld, language, species, population}) => {
    return ( 
      <div>
        <ul>
          <li>
            <h3>{person_name}</h3>
            <button 
              className='favorite' 
              onClick={(e)=> e.preventDefault()}> Favorite
            </button>
          </li>
          <li>Homeworld: {homeworld}</li>
          <li>Population: {population}</li>
          <li>Species: {species}</li>
          <li>Language: {language}</li>
        </ul>
      </div>
    )
  }

  const planetCards = ({planet_name, terrain, population, resident, climate}) => {
    return (
      <div>
        <ul>
          <li>
            <h3>{planet_name}</h3>
            <button 
              className='favorite' 
              onClick={(e)=> e.preventDefault()}> Favorite
            </button>
          </li>
          <li>Terrain: {terrain}</li>
          <li>Population: {population}</li>
          <li>Resident: {resident}</li>
          <li>Climate: {climate}</li>
        </ul>
      </div>
    )
  }

  const vehicleCards = ({vehicle_name, model, passengers, vehicle_class}) => {
    return (
      <div>
        <ul>
          <li>
            <h3>{vehicle_name}</h3>
            <button 
              className='favorite' 
              onClick={(e)=> e.preventDefault()}> Favorite
            </button>
          </li>
          <li>Model: {model}</li>
          <li>Passengers: {passengers}</li>
          <li>Vehicle class: {vehicle_class}</li>
      </ul>
      </div>
    )
  }

  const createCards = (props) => {
    if (props.selectedProps.person_name) {
      return peopleCards(props.selectedProps)
    } else if (props.selectedProps.planet_name) {
      return planetCards(props.selectedProps)
    } else if (props.selectedProps.vehicle_name) {
      return vehicleCards(props.selectedProps)
    }
  }
  
  return (  
    <div>
      {createCards(props)}    
    </div>
  )
}

export default Card
