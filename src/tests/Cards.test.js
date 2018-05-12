import React from 'react'
import {shallow} from 'enzyme'
import Card from '../Card/Card'
import renderer from 'react-test-renderer'

describe('Card', () => {
  it('should match snapshot', () => {
    //setup
    const cardProps = [
      {
        homeworld: 'homeworld',
        species: 'species',
        language: 'language',
        population: 100
      }
    ]

    //execution
    const card = shallow(<Card selectedKeys={cardProps}/>)
    //expectation
    expect(card).toMatchSnapshot()
  });
});
