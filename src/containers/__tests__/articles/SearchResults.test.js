import React from 'react';
import { shallow } from 'enzyme';
import Search from '../../articles/SearchResults';

describe('<Search /> container', () => {
  let wrapper;

  test('Search container renders connected SearchResults component', () => {
    wrapper = shallow(<Search />);
    expect(wrapper.find('Connect(SearchResults)')).toHaveLength(1);
  });
});
