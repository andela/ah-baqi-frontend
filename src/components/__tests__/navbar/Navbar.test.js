import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../../navbar/Navbar';

describe('<Navbar /> component', () => {
  let wrapper;

  test('Navbar renders correctly for unauthenticated user', () => {
    wrapper = shallow(<Navbar />);
    expect(wrapper.find('[data-test="unauthenticated-menu"]')).toHaveLength(1);
    expect(wrapper.find('.search-input')).toHaveLength(1);
    wrapper.find('[data-test="serach-bar"]').props().addonBefore.props.onChange(); // .toHaveLength(1);
  });

  test('Navbar renders correctly for authenticated user', () => {
    localStorage.setItem('username', 'testUser');
    localStorage.setItem('token', 'testUserToken');
    localStorage.setItem('isLoggedIn', true);
    wrapper = shallow(<Navbar />);
    expect(wrapper.find('[data-test="authenticated-menu"]')).toHaveLength(1);
  });

  test('Simulate search', () => {
    wrapper = mount(<BrowserRouter><Navbar search={jest.fn()} /></BrowserRouter>);
    const searchButton = wrapper.find('Icon.ant-input-search-icon');
    const searchInput = wrapper.find('input');
    searchInput.simulate('change', { target: { value: 'test' } });
    searchButton.simulate('click');
    const searchSpy = jest.spyOn(
      wrapper.instance().props.children.props,
      'search',
    );
    expect(searchSpy).toHaveBeenCalled();
  });
});
