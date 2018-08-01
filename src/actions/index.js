import * as Types from '../constants/actionTypes';

export const getJokes = (jokeCount, firstName, lastName) => ({type: Types.GET_JOKES_REQUEST, jokeCount, firstName, lastName});

export const changeJokeCount = (jokeCount) => ({type: Types.CHANGE_JOKE_COUNT, jokeCount});
export const changeFirstName = (firstName) => ({type: Types.CHANGE_FIRST_NAME, firstName});
export const changeLastName = (lastName) => ({type: Types.CHANGE_LAST_NAME, lastName});
