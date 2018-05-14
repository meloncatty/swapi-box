import React from 'react'
import Card from '../Card/Card.js'

const SelectedCategory = (props) => {
  const selectedPeople = (props) => {
    return props.people.map(({...selectedProps}, index) => {
      return <Card key={index} selectedProps={selectedProps} />
    }) 
  }
  
  const selectedPlanets = (props) => {
    return props.planets.map(({...selectedProps}, index) => {
      return <Card key={index} selectedProps={selectedProps} />
    })
  }
  
  const selectedVehicles = (props) => {
    return props.vehicles.map(({...selectedProps}, index) => {
      return <Card key={index} selectedProps={selectedProps} />
    })
  }

  const createSelection = (props) => {
    if (props.people.length) {
      return selectedPeople(props)
    } else if (props.planets.length) {
      return selectedPlanets(props)
    } else if (props.vehicles.length) {
      return selectedVehicles(props)
    }
  }
   
  return (
    <section className='selected-category'>
      {createSelection(props)}
    </section>
  )

}

export default SelectedCategory
