import {put, call} from 'redux-saga/effects';

import {fetchNewsFulfilled} from '../actions';

import {fetchNewsRequest} from './interactor';
export function* newsSaga() {
  try {
    const obj = yield call(fetchNewsRequest);
    let oooo = {};
    obj.then(data => {
      console.log('daaata', data);
      oooo = data;
    });
    console.log('oooo', oooo);
    console.log('objobj', obj);
    console.log('articlesarticles', obj.articles);
    yield put(fetchNewsFulfilled({news: obj.articles}));
  } catch (error) {
    console.log('errrrrror');
    yield put(fetchNewsFulfilled({}));
  }
}
