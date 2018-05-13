import React from 'react'
import {shallow} from 'enzyme'
import SelectedCategory from '../SelectedCategory/SelectedCategory'
import Card from '../Card/Card'

describe("SelectedCategory", () => {
  it("should render cards when passed correct props", () => {
    //setup
    const selectedData = [
      {
        homeworld: 'homeworld',
        species: 'species',
        language: 'language',
        population: 100
      }
    ]
    //execution
    const selectedCategory = shallow(<SelectedCategory people={selectedData}/>)
    //assertion
    expect(selectedCategory.find(Card)).toHaveLength(1)
  });

  it('')
});
