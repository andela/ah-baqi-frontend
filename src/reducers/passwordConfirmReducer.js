import actionTypes from '../actions/types';

const initialState = {
  data: {},
  error: null,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.RESETCONFIRMREQUEST:
      return {
        ...state,
        loading: true,
        actionCalled: true,
      };
    case actionTypes.RESETCOFIRMSUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        actionCalled: true,
      };
    case actionTypes.RESETCONFIRMERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
        actionCalled: true,
      };
    default:
      return state;
  }
}
