import React from 'react';
import { shallow } from 'enzyme';
import SharingIcons from '../../articles/singlearticle/articleSharing';

import { componentRenders } from '../../../utils/testUtils';

describe('article sharing component', () => {
  test('should test that component renders successfully', () => {
    const wrapper = shallow(<SharingIcons />);
    componentRenders(wrapper, 'article-sharing');
  });
});
