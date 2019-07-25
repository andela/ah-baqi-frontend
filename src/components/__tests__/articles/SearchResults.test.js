import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { SearchResults } from '../../articles/SearchResults';
import store from '../../../store';

describe('<SearchResults /> component', () => {
  const props = {
    searchResults: [{
      likes: 1,
      description: 'Ever wonder how?',
      rating: 0,
      comments: ['comment'],
      title: 'new',
      slug: 'new_wangonya',
      reading_time: 'less than 1 minute',
      reads: 0,
      views: 310,
      image: 'wangonya.png',
      author: 6,
    }],
  };
  const wrapper = mount(
    <BrowserRouter>
      <SearchResults
        store={store}
        results={props.searchResults}
      />
    </BrowserRouter>,
  );

  test('SearchResults render correctly', () => {
    expect(wrapper.find("[data-test='search-results-container']")).toHaveLength(1);
  });
});
