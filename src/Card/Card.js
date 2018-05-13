import React from 'react'
import './Card.css'

const Card = (props) => {
  const {personName, homeworld, language, species, population} = props.selectedKeys
  return (
    <div>
      <ul>
        <li><h3>{personName}</h3><button className='favorite' onClick={(e)=> e.preventDefault()}>Favorite</button></li>
        <li>Homeworld: {homeworld}</li>
        <li>Population: {population}</li>
        <li>Species: {species}</li>
        <li>Language: {language}</li>
      </ul>
    </div>
  )
}

export default Card
