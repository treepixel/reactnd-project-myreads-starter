import React from 'react';
import { shallow, mount } from 'enzyme';
import Select from '../components/Select';

const setup = {
  options: [
    { value: 'currentlyReading', name: 'Currently Reading' },
    { value: 'wantToRead', name: 'Want to Read' },
    { value: 'read', name: 'Read' },
    { value: 'none', name: 'None' }
  ],
  book: { shelf: 'read' },
  handleChange: jest.fn()
};

it('renders Select component without crashing', () => {
  shallow(<Select {...setup} />);
});

it('renders the right number of options', () => {
  const wrapper = mount(<Select {...setup} />);
  expect(wrapper.find('option').length).toBe(5);
});

it('called function on event Change', () => {
  const wrapper = mount(<Select {...setup} />);
  wrapper.find('select').simulate('change');
  expect(setup.handleChange).toHaveBeenCalledTimes(1);
});

it('selected the correct option', () => {
  const wrapper = mount(<Select {...setup} />);
  expect(wrapper.find('select').props().value).toBe('read');
});
