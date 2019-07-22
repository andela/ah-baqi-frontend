import React from 'react';
import { shallow } from 'enzyme';
import UserProfile from '../../profile/UserProfile';

describe('<UserProfile />', () => {
  let wrapper;
  beforeEach(() => {
    const props = {
      myProfile: {
        profile: {
          first_name: 'first name',
        },
      },
      userArticles: [
        {
          title: 'title',
          likes: 'likes',
          comments: [],
          slug: 'slug',
        },
      ],
    };
    wrapper = shallow(<UserProfile
      myProfile={props.myProfile}
      userArticles={props.userArticles}
    />);
  });
  test('renders without error', () => {
    expect(wrapper.find("[data-test='user-profile-overview']")).toHaveLength(1);
  });
  test('renders user articles', () => {
    expect(wrapper.find("[data-test='user-articles']")).toHaveLength(1);
  });
  test('renders user articles list', () => {
    expect(wrapper.find("[data-test='articles-list']")).toHaveLength(1);
  });
  test('renders user articles list items', () => {
    const articleWrapper = wrapper.find("[data-test='articles-list']").dive().dive();
    expect(articleWrapper.find("[data-test='article-list-item']")).toHaveLength(1);
  });
});
