import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header/Header';

describe('Header', () => {
  it('should update state when category button is clicked', () => {
    const header = shallow(<Header peopleInfo={jest.fn()} planetInfo={jest.fn()} vehicleInfo={jest.fn()} updateSelectedState={jest.fn()} />);
    const initialState = {
      peopleActive: false,
      planetsActive: false,
      vehiclesActive: false,
    };

    const expectedState = {
      peopleActive: true,
      planetsActive: false,
      vehiclesActive: false,
    };

    const mockEvent = { target: { innerHTML: 'people' } };

    const activeStateMock = jest.fn();

    header.find('.people-button').simulate('click', mockEvent);
    expect(header.instance().state).toEqual(expectedState);
  });
});
