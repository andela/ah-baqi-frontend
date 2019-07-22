import articleReducer from '../articleReducers';
import modalReducer from '../modals';
import authReducers from '../auth';

describe('modals-article-auth Reducers', () => {
  [authReducers, articleReducer, modalReducer].forEach((reducer) => {
    let relatedActions;
    switch (reducer) {
      case modalReducer:
        relatedActions = ['DISPLAY_MODAL', 'HIDE_MODAL', 'EMAIL_SIGNUP', 'EMAIL_LOGIN', 'EMAIL_LOGIN_FORM', 'EMAIL_SIGNUP_FORM'];
        break;
      case authReducers:
        relatedActions = ['GOOGLE_AUTH', 'TWITTER_AUTH', 'FACEBOOK_AUTH', 'EMAIL_SIGNUP_REQUEST', 'LOG_IN', 'LOG_OUT'];
        break;
      case articleReducer:
        relatedActions = ['CREATE_ARTICLE', 'EDIT_ARTICLE', 'GET_SINGLE_ARTICLES', 'GET_ALL_ARTICLES', 'TOGGLE_LIKE'];
        break;
      default:
        break;
    }
    const reducerTest = (action) => {
      test(`${action} action returns actionCalled:true`, () => {
        const newState = reducer(undefined, { type: `${action}`, payload: {} });
        expect(newState.actionCalled).toBe(true);
      });
    };
    relatedActions.forEach((action) => {
      reducerTest(action);
    });
  });
});
