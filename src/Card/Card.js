import React from 'react'

const Card = (props) => {
  const {personName} = props.selectedKeys
  return (
    <div>
      <ul>
        <li>{personName}</li>
      </ul>
    </div>
  )
}

export default Card
