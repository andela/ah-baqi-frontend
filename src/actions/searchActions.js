import { instance } from '../utils/axios';
import handleMessages from '../utils/messages';
import actionTypes from './types';

const searchActions = (filter, phrase, history) => async (dispatch) => {
  try {
    handleMessages('loading', 'Searching...');
    const response = await instance.get(`/articles/search?${filter}=${phrase}`);
    dispatch({
      type: actionTypes.SEARCH,
      payload: response.data.results,
    });
    handleMessages('success', 'We found some results 😄');
    history.push('/search');
  } catch (error) {
    handleMessages('error', 'No results found 😬');
  }
};

export default searchActions;
