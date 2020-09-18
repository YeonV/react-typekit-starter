import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';


test('renders the component', () => {
  const component = shallow(<Button color="#F0F000" />);
  expect(component).toMatchSnapshot();
});