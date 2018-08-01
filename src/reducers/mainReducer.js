import * as Types from '../constants/actionTypes';

const initialState = {
  jokes: [],
  jokeCount: '',
  firstName: '',
  lastName: ''
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_JOKES_REQUEST:
      return {
        ...state,
        loading: true
      };
    case Types.GET_JOKES_SUCCESS:
      return {
        ...state,
        loading: false,
        jokes: action.jokes
      };
    case Types.CHANGE_JOKE_COUNT:
      let jokeCount = action.jokeCount;
      if (action.jokeCount < 0 || isNaN(action.jokeCount)) {
        jokeCount = 1;
      }
      return {
        ...state,
        jokeCount
      };
    case Types.CHANGE_FIRST_NAME:
      return {
        ...state,
        firstName: action.firstName
      };
    case Types.CHANGE_LAST_NAME:
      return {
        ...state,
        lastName: action.lastName
      };
    default:
      return initialState;
  }
};

export default mainReducer;