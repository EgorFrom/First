import {put} from 'redux-saga/effects';

import {fetchNewsFulfilled} from '../actions';

export function* newsSaga() {
  try {
    const request = yield fetch(
      'https://newsapi.org/v2/top-headlines?country=ru&apiKey=48f1c58083ef41e88b7a46bdb2f7d738',
    ).then(response => response.json());
    yield put(fetchNewsFulfilled(request.articles));
  } catch (error) {
    yield put(fetchNewsFulfilled({}));
  }
}
