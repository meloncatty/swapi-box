import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import unactive from '../images/favorite-unactive.svg';

const Card = (props) => {
  const peopleCards = ({
    personName, homeworld, language, species, population,
  }) => (
    <div className="selected-card">
      <ul>
        <div className="card-header">
          <li>
            <h3>{personName}</h3>
            <button
              className="add-favorite"
              onClick={e => e.preventDefault()}
            > <img src={unactive} alt="Add or remove favorite" />
            </button>
          </li>
        </div>
        <div className="card-body">
          <li>Homeworld: <span className="description">{homeworld}</span></li>
          <li>Population: <span className="description">{population}</span></li>
          <li>Species: <span className="description">{species}</span></li>
          <li>Language: <span className="description">{language}</span></li>
        </div>
      </ul>
    </div>
  );

  const planetCards = ({
    planetName, terrain, population, resident, climate,
  }) => (
    <div className="selected-card">
      <ul>
        <div className="card-header">
          <li>
            <h3>{planetName}</h3>
            <button
              className="add-favorite"
              onClick={e => e.preventDefault()}
            > <img src={unactive} alt="Add or remove favorite" />
            </button>
          </li>
        </div>
        <div className="card-body">
          <li>Terrain: <span className="description">{terrain}</span></li>
          <li>Population: <span className="description">{population}</span></li>
          <li>Resident: <span className="description">{resident}</span></li>
          <li>Climate: <span className="description">{climate}</span></li>
        </div>
      </ul>
    </div>
  );

  const vehicleCards = ({
    vehicleName, model, passengers, vehicleClass,
  }) => (
    <div className="selected-card">
      <ul>
        <div className="card-header">
          <li>
            <h3>{vehicleName}</h3>
            <button
              className="add-favorite"
              onClick={e => e.preventDefault()}
            > <img src={unactive} alt="Add or remove favorite" />
            </button>
          </li>
        </div>
        <div className="card-body">
          <li>Model: <span className="description">{model}</span></li>
          <li>Passengers: <span className="description">{passengers}</span></li>
          <li>Vehicle class: <span className="description">{vehicleClass}</span></li>
        </div>
      </ul>
    </div>
  );

  const createCards = (props) => {
    if (props.selectedProps.personName) {
      return peopleCards(props.selectedProps);
    } else if (props.selectedProps.planetName) {
      return planetCards(props.selectedProps);
    } else if (props.selectedProps.vehicleName) {
      return vehicleCards(props.selectedProps);
    }
  };

  return createCards(props);
};

Card.propTypes = {
  props: PropTypes.objectOf(PropTypes.shape({
    selectedProps: PropTypes.object,
  })),
};

export default Card;
