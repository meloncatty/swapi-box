import React from 'react';
import Card from '../Card/Card.js';
import PropTypes from 'prop-types';
import chewbacca from '../images/loading.gif';
import './SelectedCategory.css';

const SelectedCategory = (props) => {
  const selectedPeople = props => props.people.map(({ ...selectedProps }, index) => <Card key={index} selectedProps={selectedProps} />);

  const selectedPlanets = props => props.planets.map(({ ...selectedProps }, index) => <Card key={index} selectedProps={selectedProps} />);

  const selectedVehicles = props => props.vehicles.map(({ ...selectedProps }, index) => <Card key={index} selectedProps={selectedProps} />);

  const createSelection = (props) => {
    if (props.people.length) {
      return selectedPeople(props);
    } else if (props.planets.length) {
      return selectedPlanets(props);
    } else if (props.vehicles.length) {
      return selectedVehicles(props);
    }
  };

  const loadingStation = () => (
    <section className="loading-screen">
      <img src={chewbacca} alt="Data is loading" />
      <p>Loading</p>
    </section>
  );

  const loadingState = props.isLoading ? loadingStation() : createSelection(props);

  return (
    <section className="selected-category">
      <div className="category-container">
        {loadingState}
      </div>
    </section>
  );
};

SelectedCategory.propTypes = {
  people: PropTypes.array,
  planets: PropTypes.array,
  vehicles: PropTypes.array,
};

export default SelectedCategory;
