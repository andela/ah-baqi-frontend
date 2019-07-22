import { instance } from '../utils/axios';
import handleMessages from '../utils/messages';
import actionTypes from './types';


export const rateArtcileSuccess = response => ({
  type: actionTypes.RATE_ARTICLE,
  payload: response,
});

export const rateArticleError = response => ({
  type: actionTypes.RATE_ARTICLE_ERROR,
  payload: response,
});

export const ratingActions = (slug, data) => async (dispatch) => {
  handleMessages('loading', 'Request processing...');
  try {
    const Rate = {
      rating: {
        rating: data,
      },
    };
    const response = await instance.post(`/articles/${slug}/rate/`, Rate);
    const ratings = response.data;
    dispatch(rateArtcileSuccess({ article: ratings }));
    handleMessages('success', 'Thank you for your feedback ⭐️');
  } catch (error) {
    dispatch(rateArticleError(error));
    handleMessages('error', 'Kindly login to rate this article ⭐️');
  }
};
