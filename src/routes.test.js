import React from 'react';
import { Route } from 'react-router-dom';
import { shallow } from 'enzyme';

import Routes from './routes';
import Home from './containers/home/Home';
import Profile from './containers/profile/Profile';
import PasswordReset from './containers/resetpassword/resetPassword';
import ConfrimReset from './containers/resetpassword/resetConfirm';
import ArticlePage from './containers/articles/Article';

describe('Routes', () => {
  const wrapper = shallow(<Routes />);
  test('<Router /> renders correct routes', () => {
    const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
      const routeProps = route.props();
      pathMap[routeProps.path] = routeProps.component; // eslint-disable-line
      return pathMap;
    }, {});

    expect(pathMap['/']).toBe(Home);
    expect(pathMap['/resetconfirm/:token']).toBe(ConfrimReset);
    expect(pathMap['/passwordreset']).toBe(PasswordReset);
    expect(pathMap['/profile']).toBe(Profile);
    expect(pathMap['/articles/:slug']).toBe(ArticlePage);
  });
});
