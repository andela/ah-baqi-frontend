import React from 'react';
import { shallow } from 'enzyme';

import ConfrimReset from '../resetpassword/resetConfirm';
import ResetPassword from '../resetpassword/resetPassword';
import store from '../../utils/testUtils';


describe('<Home /> component', () => {
  let confWrapper;
  let resWrapper;
  beforeAll(() => {
    confWrapper = shallow(<ConfrimReset store={store} />);
    resWrapper = shallow(<ResetPassword store={store} />);
  });
  test('renders without crashing', () => {
    expect(confWrapper).toMatchSnapshot();
    expect(resWrapper).toMatchSnapshot();
  });
});
