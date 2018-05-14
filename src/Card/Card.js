import React from 'react'
import PropTypes from 'prop-types';
import './Card.css'
import active from '../images/favorite-active.svg'
import unactive from '../images/favorite-unactive.svg'

const Card = (props) => {
  const peopleCards = ({person_name, homeworld, language, species, population}) => {
    return (
      <div className='selected-card'>
        <ul>
        <div className='card-header'>
          <li>
            <h3>{person_name}</h3>
            <button
              className='add-favorite'
              onClick={(e)=> e.preventDefault()}> <img src={unactive} alt='Add or remove favorite' />
            </button>
          </li>
          </div>
          <div className='card-body'>
          <li>Homeworld: <span className='description'>{homeworld}</span></li>
          <li>Population: <span className='description'>{population}</span></li>
          <li>Species: <span className='description'>{species}</span></li>
          <li>Language: <span className='description'>{language}</span></li>
          </div>
        </ul>
      </div>
    )
  }

  const planetCards = ({planet_name, terrain, population, resident, climate}) => {
    return (
      <div className='selected-card'>
        <ul>
        <div className='card-header'>
          <li>
            <h3>{planet_name}</h3>
            <button
              className='add-favorite'
              onClick={(e)=> e.preventDefault()}> <img src={unactive} alt='Add or remove favorite' />
            </button>
          </li>
          </div>
          <div className='card-body'>
          <li>Terrain: <span className='description'>{terrain}</span></li>
          <li>Population: <span className='description'>{population}</span></li>
          <li>Resident: <span className='description'>{resident}</span></li>
          <li>Climate: <span className='description'>{climate}</span></li>
          </div>
        </ul>
      </div>
    )
  }

  const vehicleCards = ({vehicle_name, model, passengers, vehicle_class}) => {
    return (
      <div className='selected-card'>
        <ul>
          <div className='card-header'>
            <li>
              <h3>{vehicle_name}</h3>
              <button
                className='add-favorite'
                onClick={(e)=> e.preventDefault()}> <img src={unactive} alt='Add or remove favorite' />
              </button>
            </li>
          </div>
          <div className='card-body'>
          <li>Model: <span className='description'>{model}</span></li>
          <li>Passengers: <span className='description'>{passengers}</span></li>
          <li>Vehicle class: <span className='description'>{vehicle_class}</span></li>
          </div>
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

  return createCards(props)
}

Card.propTypes = {
  selectedProps: PropTypes.object.isRequired
}

export default Card
