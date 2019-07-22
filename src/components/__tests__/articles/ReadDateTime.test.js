import React from 'react';
import { shallow } from 'enzyme';

import { componentRenders } from '../../../utils/testUtils';
import DateReadTimeRate from '../../articles/singlearticle/readTimeAndDate';

describe('<NewArticleForm /> component', () => {
  const wrapper = shallow(<DateReadTimeRate
    createdAt="2019-07-18T08:55:34.238309Z"
    read_time="2 minute raed"
  />);

  test('NewArticleForm renders correctly', () => {
    componentRenders(wrapper, 'read-time-date-rate');
  });
});
