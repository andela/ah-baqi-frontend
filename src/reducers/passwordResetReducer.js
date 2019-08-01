import actionTypes from '../actions/types';
import { initialState } from './passwordConfirmReducer';

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.RESETPASSWORDREQUEST:
      return { ...state, loading: true, actionCalled: true };
    case actionTypes.RESETPASSWORDLINK:
      return {
        ...state,
        data: action.payload,
        loading: false,
        actionCalled: true,
      };
    case actionTypes.RESETPASSWORDLINKERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
        actionCalled: true,
      };
    default:
      return { ...state, actionCalled: true };
  }
}
