import React from 'react'
import Card from '../Card/Card.js'

const SelectedCategory = (props) => {
   const selectedCards = props.people.map(({...selectedKeys}, index) => {
     return <Card key={index} selectedKeys={selectedKeys}/>
   })
  return (
    <section className='selected-category'>
      {selectedCards}
    </section>
  )

}

export default SelectedCategory
