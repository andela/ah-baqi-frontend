import MiddleLandingArticle from '../../articles/landingPage/MiddleLandingArticles';
import { createWrapper, componentRenders } from '../../../utils/testUtils';

const articleProps = {
  articles: ['article1', 'article2', 'article3'],
};

describe('<MiddleLandingArticle /> component', () => {
  const wrapper = createWrapper(MiddleLandingArticle, articleProps);

  test('MiddleLandingArticle renders correctly', () => {
    componentRenders(wrapper, 'mid-landing-article');
  });
});
