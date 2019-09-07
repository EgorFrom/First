import {newsSaga} from './saga';
import cloneDeep from 'lodash.clonedeep';
import type {NewsState, NewsAction} from './types';
export const LOADING_NEWS_FULFILLED: string = 'news/LOADING_NEWS_FULFILLED';

export {newsSaga};

const initialState: NewsState = {
  news: [],
};

export default function news(
  state: NewsState = cloneDeep(initialState),
  action: NewsAction = {},
): NewsState {
  console.log('actionactionaction', action);
  if (action.type === LOADING_NEWS_FULFILLED) {
    return {
      ...state,
      news: action.news,
    };
  }
  return state;
}
