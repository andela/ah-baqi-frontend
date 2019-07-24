import React from 'react';
import { shallow } from 'enzyme';

import ConfrimReset from '../resetpassword/resetConfirm';
import ResetPassword from '../resetpassword/resetPassword';
import store from '../../utils/testUtils';


describe('<Home /> component', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<ConfrimReset store={store} />);
    wrapper = shallow(<ResetPassword store={store} />);
  });
  test('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
