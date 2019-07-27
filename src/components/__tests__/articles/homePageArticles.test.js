import { propOnClickTests, mockFn, createWrapper } from '../../../utils/testUtils';
import LeftLandingArticle from '../../articles/landingPage/LeftLandindArticle';
import SingleMidLandingArticle from '../../articles/landingPage/MiddleLandingArticle';
import SingleFeaturedArticle from '../../articles/featured/FeaturedArticle';

describe('<LeftLandingArticle /> component', () => {
  const props = {
    article: {
      title: 'test title',
      description: 'test description',
    },
    clicked: mockFn,
  };
  const leftWrapper = createWrapper(LeftLandingArticle, props);
  const midWrapper = createWrapper(SingleMidLandingArticle, props);
  const featuredWrapper = createWrapper(SingleFeaturedArticle, props);

  test('LeftLandingArticle renders correctly', () => {
    propOnClickTests(leftWrapper, 'left-landing-article', mockFn);
    propOnClickTests(midWrapper, 'single-mid-landing-article', mockFn);
    propOnClickTests(featuredWrapper, 'single-featured-article', mockFn);
  });
});
