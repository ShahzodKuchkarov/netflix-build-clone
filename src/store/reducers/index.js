import * as actionTypes from '../actionTypes';

const initialState = {
  user: null,
  movie: null
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
    case actionTypes.SAVE_MOVIE: {
      return {
        ...state,
        movie: action.payload
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