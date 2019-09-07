import {all} from 'redux-saga/effects';
import news, {newsSaga} from './modules/news';

export const reducers = {
  news,
};

export function* rootSagas() {
  yield all([newsSaga()]);
}
