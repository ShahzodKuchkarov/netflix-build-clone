import * as actionTypes from '../actionTypes';

const initialState = {
  user: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_USER:
    case actionTypes.AUTH_SIGN_UP: {
      return {
        ...state,
        user: action.payload
      }
    }
    case actionTypes.CLEAR_USER: {
      return initialState;
    }
    default: {
      return state;
    }
  }
}

export default userReducer;