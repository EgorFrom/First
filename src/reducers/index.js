import {all} from 'redux-saga/effects';
import {combineReducers} from 'redux';
import news, {newsSaga} from './modules/news';

export const reducers = {
  news,
};

export function* rootSagas() {
  yield all([newsSaga()]);
}
