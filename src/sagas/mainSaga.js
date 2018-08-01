import {all, call, put, takeEvery} from 'redux-saga/effects';
import axiosUtils from '../utils/axiosUtils';

import * as Types from '../constants/actionTypes';

function* getJokes(action) {
  try {
    let jokeCount = action.jokeCount;
    if (action.jokeCount === '' || action.jokeCount < 0) {
      jokeCount = 1
    }
    let firstName = action.firstName;
    let lastName = action.lastName;
    if (action.firstName === '' && action.lastName === '') {
      firstName = 'Chuck';
      lastName = 'Norris';
    }
    const endpoint = 'http://api.icndb.com/jokes/random/' + jokeCount + '?escape=javascript&firstName=' + firstName + '&lastName=' + lastName;
    const jokes = yield call(axiosUtils.get, endpoint);
    yield put({type: Types.GET_JOKES_SUCCESS, jokes: jokes.value});
  } catch (err) {
    yield put({type: Types.GET_JOKES_FAILURE, err});
  }
}

export default function* () {
  yield all([
    takeEvery(Types.GET_JOKES_REQUEST, getJokes)
  ])
}